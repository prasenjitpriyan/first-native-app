import { StyleSheet, View, Text } from 'react-native'

export default function HomeScreen() {
  return (
    <View>
      <Text style={styles.text}>Little Lemon Restaurant</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
})
