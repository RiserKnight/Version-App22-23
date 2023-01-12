import { View, Text ,Image} from 'react-native'
import React from 'react'
export default function Notification({ route, navigation }) {
    const { itemId } = route.params;
    const { otherParam } = route.params;
  return (
    <View style={{alignItems:'center',justifyContent:'center',marginTop:30}}>
    <Image
      source={{uri:otherParam.data.url }}
      style={{width: 200, height: 200}}
    />
    <Text style={{color:'black',marginTop:20,fontSize:25}}>{otherParam.data.message}</Text>
  </View>
  )
}