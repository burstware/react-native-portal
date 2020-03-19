# React Native Portal [![Build Status](https://travis-ci.com/burstware/react-native-portal.svg?token=29qnEeDFvpCBmjssZsMZ&branch=master)](https://travis-ci.com/burstware/react-native-portal) [![Coverage](https://img.shields.io/badge/coverage-0%25-red)](https://www.npmjs.org/@burstware/react-native-portal)

[<img src="https://s3-us-west-2.amazonaws.com/burstware.com/img/burstware+horizontal.png" width="50%" />](https://burstware.com)

[![NPM](https://img.shields.io/badge/npm-1.0.2-blue)](https://www.npmjs.org/@burstware/react-native-portal)

React Native Portal

Render a component anywhere. Anything inside a `<Portal>` component will be rendered on an ancestor `<Portal.Host>` component.

## Installation
```bash
npm i --save @burstware/react-native-portal
```

## Usage
```
import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Portal from '@burstware/react-native-portal'

function Test (props) {
  return (
    <View style={[StyleSheet.absoluteFill, { alignItems: 'center', backgroundColor: 'blue' }]}>
      <Portal.Host>
        <View style={{ width: '75%', height: '100%' }}>
          <Portal>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'white' }}>
              <Text>This should be on top</Text>
            </View>
          </Portal>
        </View>
      </Portal.Host>
    </View>
  )
}
```

## Documentation
```bash
npm start
```
