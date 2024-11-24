// components/LittleLemonFooter.js

import React from 'react'
import { View, Text } from 'react-native'

const LittleLemonFooter = () => {
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#F4CE14',
        padding: 20
      }}
    >
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          textAlign: 'center'
        }}
      >
        All rights reserved by Little Lemon, 2022
      </Text>
    </View>
  )
}

export default LittleLemonFooter
