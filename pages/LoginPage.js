import React, { use, useState ,useEffect} from 'react'
import { View,Text ,Dimensions, TextInput, TouchableOpacity,Keyboard} from 'react-native'
import Svg, {Path} from "react-native-svg";
import Icon from "react-native-vector-icons/Ionicons"
import color from '../style/color';


const {width,height}=Dimensions.get("window")

const LoginPage = ({navigation}) => {
    const [boxHeight,setBoxHeight]=useState(0);
    const [eye,setEye]=useState(false);
    const [pass,setPass]=useState('');
    const [userN,setUserN]=useState('');
    
    const [keyboardHeight, setKeyboardHeight] = useState(0);
    const [keyboardV,setKeyboardV]=useState(false);

    useEffect(() => {
        const showSub = Keyboard.addListener("keyboardDidShow", (e) => {
            setKeyboardHeight(e.endCoordinates.height);
            setKeyboardV(true)
        });

        const hideSub = Keyboard.addListener("keyboardDidHide", () => {
            setKeyboardV(false)
        });

        return () => {
        showSub.remove();
        hideSub.remove();
        };
    }, []);

  return (
    <View style={{backgroundColor:"rgba(255, 255, 255, 1)",height:height}}>
        <View style={{position:"absolute",top:height*0.25,zIndex:2,width:width}}>
            <Text style={{textAlign:"center",fontWeight:'bold',fontSize:35,color:"white"}}>Login page</Text>
        </View>
        
        <Svg style={{backgroundColor:'rgba(255, 255, 255, 1)'}} viewBox={`0 0 ${width} ${width}`} width={width+2} height={width}>
            <Path d={`M0 ${width*0.65} C${width*0.25} ${width*0.95},${width*0.65} ${width*0.65},${width} ${width} L${width} 0 L0 0 z`} fill={color.color1} stroke={color.color1} strokeWidth={2}/>
        </Svg>
        <View style={{alignItems:"center",bottom:keyboardV?keyboardHeight*0.4:0}}>
            
            <View style={{padding:20,backgroundColor:color.color1,width:width*0.85,borderRadius:20,marginTop:10}}>
                <TextInput
                value={userN}
                placeholder='User Name'
                placeholderTextColor={"rgba(160, 160, 160, 1)"}
                onChangeText={setUserN}
                autoCapitalize='none'
                style={{backgroundColor:"white",borderRadius:20,padding:10,fontSize:20,fontWeight:"bold",marginBottom:20}}
                />
                <View style={{marginBottom:20}} onLayout={e=>setBoxHeight(e.nativeEvent.layout.height)}>
                    <TextInput
                    value={pass}
                    placeholder='Password'
                    placeholderTextColor={"rgba(160, 160, 160, 1)"}
                    secureTextEntry={!eye}
                    onChangeText={setPass}
                    style={{backgroundColor:"white",borderRadius:20,padding:10,fontSize:20,fontWeight:"bold",color:"black",}}
                    />
                    <TouchableOpacity onPress={()=>setEye(!eye)} style={{position:"absolute",top:(boxHeight*0.5)-13,right:8}}>
                        <Icon name={eye?"eye":"eye-off"}  size={26} color={color.color1}/>
                    </TouchableOpacity>
                    
                </View>
                
                <TouchableOpacity onPress={()=>(userN.trim()==="admin"&&pass.trim()==="1234")?navigation.replace('home'):navigation.replace('login')} style={{borderRadius:20,borderColor:"white",borderWidth:2,padding:10}}>
                    <Text style={{color:'white',fontWeight:"bold",fontSize:20,textAlign:"center"}}>Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    </View>
  )
}

export default LoginPage