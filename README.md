<p align="center">
  <a href="https://burstware.com">
      <img src="https://s3-us-west-2.amazonaws.com/burstware.com/img/burstware+horizontal.png" width="30%" />
  </a>
</p>

# React Native Portal

[![NPM](https://img.shields.io/badge/npm-1.0.2-blue)](https://www.npmjs.org/@burstware/react-native-portal) [![Build Status](https://travis-ci.com/burstware/react-native-portal.svg?token=29qnEeDFvpCBmjssZsMZ&branch=master)](https://travis-ci.com/burstware/react-native-portal) [![Coverage](https://img.shields.io/badge/coverage-0%25-red)](https://www.npmjs.org/@burstware/react-native-portal)

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
import React, { useState } from 'react'
import { Text, View,
  StyleSheet } from 'react-native'
import Portal from '@burstware/react-native-portal'

export default function (props) {
  const [visible, setVisible] = useState(false)

  return (
    <Portal.Host>
      <View>
          <View>
            <Text>Background Text</Text>
            <TouchableOpacity onPress={() => setVisible(true)}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Show Portal</Text>
              </View>
            </TouchableOpacity>
            <Portal>
              <View style={styles.smallParent}>
                <Text>portal parent view</Text>
                { visible ? (
                  <View>
                    <Text>This should be on top</Text>
                  </View>
                ): null}
              </Portal>
            </View>
          </View>
      </View>
    </Portal.Host>
  )
}
```
