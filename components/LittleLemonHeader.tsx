// components/LittleLemonHeader.js

import React from 'react'
import { View, Text } from 'react-native'

const LittleLemonHeader = () => {
  return (
    <View style={{ flex: 0.15, backgroundColor: '#F4CE14' }}>
      <Text
        style={{
          padding: 40,
          fontSize: 30,
          color: 'black',
          textAlign: 'center'
        }}
      >
        Little Lemon
      </Text>
    </View>
  )
}

export default LittleLemonHeader
