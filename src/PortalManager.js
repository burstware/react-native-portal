import * as React from 'react'
import { View, StyleSheet } from 'react-native'

/**
 * Portal host is the component which actually renders all Portals.
 */
export default class PortalManager extends React.PureComponent {
  constructor (props) {
    super(props)

    this.state = {
      portals: []
    }
  }

  mount = (key, children) => {
    this.setState(state => ({
      portals: [...state.portals, { key, children }]
    }))
  };

  update = (key, children) =>
    this.setState(state => ({
      portals: state.portals.map(item => {
        if (item.key === key) {
          return { ...item, children }
        }
        return item
      })
    }));

  unmount = (key) =>
    this.setState(state => ({
      portals: state.portals.filter(item => item.key !== key)
    }));

  render () {
    return this.state.portals.map(({ key, children }) => (
      <View
        key={key}
        /* Need collapsable=false here to clip the elevations, otherwise they appear above sibling components */
        collapsable={false}
        pointerEvents='box-none'
        style={StyleSheet.absoluteFill}
      >
        {children}
      </View>
    ))
  }
}
