<p align="center">
  <a href="https://burstware.com">
      <img src="https://s3-us-west-2.amazonaws.com/burstware.com/img/burstware+horizontal.png" width="30%" />
  </a>
</p>

# React Native Portal

[![NPM](https://img.shields.io/badge/npm-1.0.2-blue)](https://www.npmjs.org/@burstware/react-native-portal) [![Slack](https://img.shields.io/badge/chat-slack-green)](https://form.typeform.com/to/vyAEGkWC)

Render a component anywhere. Anything inside a `<Portal>` component will be rendered on an ancestor `<Portal.Host>` component.
<p align="center">
  <a href="https://www.burstware.com/portals-in-react-native">
      <img src="https://irp-cdn.multiscreensite.com/14e04438/dms3rep/multi/demo.gif" width="30%" />
  </a>
</p>

<p align="center">
  <a href="https://snack.expo.io/@jbaczuk/react-native-portal">
      See Demo
  </a>
</p>

## Installation
```bash
npm i --save @burstware/react-native-portal
```

## Usage
```javascript
import React from 'react'
import { Text, View } from 'react-native'
import Portal from '@burstware/react-native-portal'

export default function (props) {
  return (
    <Portal.Host>
      <View>
          <Text>Background Text</Text>
          <Portal>
            <View style={styles.smallParent}>
              <Text>portal parent view</Text>
                <View>
                  <Text>This should be on top</Text>
                </View>
            </Portal>
          </View>
      </View>
    </Portal.Host>
  )
}
```

Based on Portal implementation in [React Native Paper](https://callstack.github.io/react-native-paper/)
