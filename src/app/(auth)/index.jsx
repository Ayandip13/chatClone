import { View, Text, Button } from 'react-native'
import React from 'react'
import {Link} from 'expo-router'

const Index = () => {
  return (
    <View style={{marginTop:10}}>
      <Text>Index</Text>
      <Link href={"login"}>login</Link>
    </View>
  )
}

export default Index