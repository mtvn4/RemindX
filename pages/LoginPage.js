import React from 'react'
import { View,Text ,Dimensions, TextInput, Button, TouchableOpacity} from 'react-native'
import Svg, { Defs, Path, Rect, ClipPath } from "react-native-svg";


const {width,height}=Dimensions.get("window")
const LoginPage = () => {
  return (
    <View style={{backgroundColor:"rgba(255, 255, 255, 1)",height:height}}>
        <Svg style={{backgroundColor:'rgba(255, 255, 255, 1)'}} viewBox={`0 0 ${width} ${width}`} width={width+2} height={width}>
            <Path d={`M0 ${width*0.65} C${width*0.25} ${width*0.95},${width*0.65} ${width*0.65},${width} ${width} L${width} 0 L0 0 z`} fill={"rgba(167, 14, 244, 1)"} stroke={"rgba(167, 14, 244, 1)"} strokeWidth={2}/>
        </Svg>
        <View style={{alignItems:"center",justifyContent:"center"}}>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:25}}>Login page</Text>
            <View style={{padding:20,backgroundColor:"rgba(167, 14, 244, 1)",width:width*0.85,borderRadius:20,marginTop:10}}>
                <TextInput
                placeholder='User Name'
                style={{backgroundColor:"white",borderRadius:20,padding:10,fontSize:20,fontWeight:"bold",marginBottom:20}}
                />
                <TextInput
                placeholder='Password'
                style={{backgroundColor:"white",borderRadius:20,padding:10,fontSize:20,fontWeight:"bold",marginBottom:20}}
                />
                <TouchableOpacity style={{borderRadius:20,borderColor:"white",borderWidth:2,padding:10}}>
                    <Text style={{color:'white',fontWeight:"bold",fontSize:20,textAlign:"center"}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginPage