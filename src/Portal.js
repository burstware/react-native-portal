import * as React from 'react'
import PortalConsumer from './PortalConsumer'
import PortalHost, { PortalContext } from './PortalHost'

/**
 * Portal allows to render a component at a different place in the parent tree.
 * You can use it to render content which should appear above other elements, similar to `Modal`.
 * It requires a [`Portal.Host`](portal-host.html) component to be rendered somewhere in the parent tree.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { Portal, Text } from 'react-native-paper';
 *
 * export default class MyComponent extends React.Component {
 *   render() {
 *     return (
 *       <Portal>
 *         <Text>This is rendered at a different place</Text>
 *       </Portal>
 *     );
 *   }
 * }
 * ```
 */
class Portal extends React.Component {
  render () {
    const { children } = this.props

    return (

      <PortalContext.Consumer>
        {manager => (
          <PortalConsumer manager={manager}>
            {children}
          </PortalConsumer>
        )}
      </PortalContext.Consumer>
    )
  }
}

Portal.Host = PortalHost

export default Portal
