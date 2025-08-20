import React, { useEffect, useState } from 'react'
import {View,Text,StyleSheet,Dimensions, TouchableOpacity, Platform,ScrollView, TextInput, Alert,Keyboard} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/Ionicons';
import Icon3 from 'react-native-vector-icons/FontAwesome';
import Icon4 from 'react-native-vector-icons/Entypo';
import color from '../style/color';

import { DateTimePickerAndroid } from '@react-native-community/datetimepicker';

const HomePage = () => {
  const [name,setName]=useState('')
  const [phone,setPhone]=useState('')
  const [message,setMessage]=useState('')
  const [data,setData]=useState([
    {
      id:1,
      name:"ajay",
      phone:"7486796543",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"19/08/2025"
    },
    {
      id:2,
      name:"kumar",
      phone:"3456786542",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"19/08/2025"
    },
    {
      id:3,
      name:"mani",
      phone:"7456586343",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"11/06/2024"
    },
    {
      id:4,
      name:"saravanakumar",
      phone:"7433786547",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"13/08/2025"
    },
    {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"13/08/2025"
    },
        {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"13/07/2024"
    },
        {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"19/08/2025"
    },
        {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"20/08/2025"
    },
        {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"13/07/2024"
    },
      {
      id:5,
      name:"raju",
      phone:"5456886643",
      message:"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      date:"18/08/2025"
    },
  ])
  const [date,setDate]=useState(new Date())
  const [showIn,setShowIn]=useState('none');
  const {width,height}=Dimensions.get("window");
  const [dis,setDis]=useState(false)
  const [mev,setMev]=useState({in:0,vi:false})

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

 
  const addData=()=>{
    if (name.trim()===""||phone.trim()===""||message.trim()===""){
      Alert.alert("alert","field is empty");
      return;
    }
    setData([...data,{id:data.length+1,name:name.trim(),phone:phone.trim(),message:message.trim(),date:date.toLocaleDateString('en-GB').trim()}])
    setName('');setMessage('');setPhone('')

  }

  const showDatePicker = () => {
    DateTimePickerAndroid.open({
      value: date,
      onChange: (event, selectedDate) => {
        if (selectedDate) setDate(selectedDate);
      },
      mode: 'date',
      is24Hour: true,
      minimumDate: new Date(),
    });
  };
  return (
    <View style={{height:height,padding:20,backgroundColor:color.color1}}>
        <TouchableOpacity onPress={()=>setShowIn('flex')} style={{zIndex:1,position:'absolute',right:20,bottom:50,height:50,justifyContent:'center',alignItems:'center',backgroundColor:color.color1,width:50,borderRadius:'50%'}}>
            <Icon name="plus" size={35} color={color.color2} />
        </TouchableOpacity>
        <View style={{display:showIn,position:'absolute',width:width,paddingHorizontal:width*0.1,height:height,backgroundColor:color.color4,zIndex:5,justifyContent:'center',alignItems:'center'}}>
          <View style={{width:width*0.9,backgroundColor:color.color1,bottom:keyboardV?25:0,borderRadius:20,padding:20}}>
            <TouchableOpacity onPress={()=>setShowIn('none')} style={{position:'absolute',top:8,right:8,padding:height*0.004,borderRadius:"50%",borderColor:"white",borderWidth:2}}>
                <Icon1 name='close' size={20} color='white'/> 
            </TouchableOpacity>
            
            <TextInput style={{backgroundColor:'white',fontWeight:'bold',borderRadius:width*0.1,paddingHorizontal:20,marginBottom:10,marginTop:25}}
              placeholder='Enter name'
              placeholderTextColor={color.color3}
              value={name}
              onChangeText={setName}
            />
            <TextInput style={{backgroundColor:'white',fontWeight:'bold',borderRadius:width*0.1,paddingHorizontal:20,marginBottom:10}}
              placeholder="Enter phone number"
              placeholderTextColor={color.color3}
              keyboardType="phone-pad"
              value={phone}
              onChangeText={setPhone}
            />
            <TextInput style={{backgroundColor:'white',fontWeight:'bold',borderRadius:width*0.1,paddingHorizontal:20,marginBottom:10}}
              placeholder='Enter The message...'
              placeholderTextColor={color.color3}
              multiline={true}
              value={message}
              onChangeText={setMessage}
            />
            <View style={{flexDirection:'row',gap:10,justifyContent:"center",alignItems:'center',marginBottom:10}}>
                <TouchableOpacity onPress={()=>showDatePicker()} style={{padding:8,borderRadius:20,borderWidth:2,borderColor:'white',borderRadius:width*0.1,paddingHorizontal:20}}>
                  <Text style={{color:'white',fontWeight:'bold'}}>Date</Text>
                </TouchableOpacity>
            
              <View style={{padding:8,backgroundColor:'white',flex:1,borderRadius:20,justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontWeight:'bold'}}>Date : {date.toLocaleDateString("en-GB")}</Text>
              </View>
            </View>
            
            <View style={{width:width*0.25,marginHorizontal:'auto'}}>
              <TouchableOpacity disabled={dis} onPress={()=>{addData();setShowIn('none')}} style={{borderRadius:20,borderWidth:2,borderColor:'white',padding:height*0.01}}>
              <Text style={{fontSize:20,fontWeight:'bold',color:'white',textAlign:'center'}}>
                Add
              </Text>
              </TouchableOpacity>
            </View>

          </View>
        </View>

        <Text style={{fontSize:30,fontWeight:'bold',textAlign:'center',color:'white',marginTop:20}}>RemindX</Text>
        <View style={{position:"absolute",width:width,bottom:0,backgroundColor:"rgba(255, 255, 255, 1)",boxShadow:"1px 1px 10px rgba(152, 161, 204, 1) ",height:height*0.8,borderTopRightRadius:width*0.1,borderTopLeftRadius:width*0.1,transform:[{translateY:0}],padding:10}}>
          <Text style={{textAlign:'center',fontWeight:'bold',fontSize:25,color:color.color1}}>Today Reminder</Text>
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom:50}} style={{padding:10,marginBottom:20}}>
              {data.filter(a=>a.date===new Date().toLocaleDateString("en-GB")).map((a,index)=>{
                return(
                  <TouchableOpacity key={index} onPress={()=>{setMev({...mev,in:a.id,vi:!mev.vi})}}>
                    <View  style={{backgroundColor:"white",borderRadius:10,padding:10,boxShadow:"1px 1px 10px rgba(140, 140, 140, 0.67)",marginBottom:20}}>
                      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                        <View style={{flexDirection:"row",alignItems:"center",width:200,}}>
                            <Icon2 style={{marginRight:8}} name='person' size={25} color={color.color1}/>
                            <Text style={{fontWeight:'500',fontSize:22,textTransform:'capitalize'}}>{a.name}</Text>
                        </View>
                        <View style={{flexDirection:"row",alignItems:"center"}}>
                            <Icon4 style={{marginRight:5}} name='calendar' size={16} color={color.color1}/>
                            <Text style={{color:'rgba(89, 88, 88, 1)',fontWeight:'500'}}>{a.date}</Text>  
                        </View>
                        
                      </View>
                      <View style={{marginTop:10,flexDirection:"row",alignItems:"center"}}>
                        <Icon3 style={{marginRight:8}} name='phone' size={18} color={color.color1}/>
                        <Text style={{color:'rgba(89, 88, 88, 1)',fontWeight:'bold',fontSize:16,}}>+91{a.phone}</Text>
                      </View>
                      <View style={{display:(mev.in===a.id&&mev.vi)?'flex':'none',marginTop:10,borderTopWidth:1,borderColor:"rgba(140, 140, 140, 1)"}}>
                        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"center",marginBottom:5}}>
                          <Icon1 style={{marginRight:5,marginTop:3}} name='message' size={20} color={color.color1}/>
                          <Text style={{fontSize:20,fontWeight:"bold"}}>Message</Text>
                        </View>
                        <Text style={{padding:10,fontWeight:"bold",borderRadius:10,backgroundColor:color.color1,color:"white",fontSize:18}}>
                          {a.message}
                        </Text>
                      </View>

                    </View>
                  </TouchableOpacity>
                )
              })}
          </ScrollView>
        </View>
    </View>
  )
}


export default HomePage