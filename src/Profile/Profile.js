import { Container, Input } from 'native-base';
import React from 'react';
import {
  View,
  TextInput,
  Text,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import { SliderBox } from 'react-native-image-slider-box';
import { ScrollView } from 'react-native-gesture-handler';
 const deviceWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
     
    }

  }


  render() {
    return (
      <View style={{
        backgroundColor: '#f6f6f6',
        width: '100%',
        flex: 1,
        resizeMode: 'contain',
      }}>
        <StatusBar backgroundColor="#1a237e" barStyle="light-content"/>
        <View style={{height:50,backgroundColor:'#1a237e'}}>
        <Text style={{textAlign:'center',color:'white',fontSize:20,top:8}}>Farmer Profile</Text>
        </View>
        

        <View style={{ flexDirection:'row'}}>
        
          <View style={{height:110,width:110,borderRadius:180,backgroundColor:'#f6f6f6',marginTop:16,marginLeft:14}}>
            <Image style={{height:110,width:110,borderRadius:180 }} source={Assets.profile}/>

          </View>
          <View style={{flexDirection:'column'}}>
          <Text style={{marginLeft:20,marginTop:20,fontSize:16,fontWeight:'bold'}}>Name : Shivam Saxena</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:10,fontSize:16,fontWeight:'bold'}}>Father's Name : Shivam Saxena</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:10,fontSize:16,fontWeight:'bold'}}>DOB : 22-05-1986 </Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          </View>
          </View>
          <Text style={{marginLeft:20,marginTop:20,fontSize:16,fontWeight:'bold'}}>Address : House no.4 Rajendra nagar bareilly</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>District : Bareilly</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>State : Uttar Pradesh</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>Addhar No : 82351283735747</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>Email : xyz@gmail.com</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>Mobile : 7864382787</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>
          <Text style={{marginLeft:20,marginTop:15,fontSize:16,fontWeight:'bold'}}>No Of animals holding : 4</Text>
          <View style={{height:1,backgroundColor:'#e0e0e0',marginLeft:20,marginTop:6}}></View>


            

          <View style={{flexDirection:'row',marginTop:170,paddingLeft:10}}>
               <Image
          style={{ height: 40, width: 40  }}
          source={Assets.logo}
        />
         <Text style = {{color:'black',textAlign:'center',marginTop:10,fontSize:14,marginLeft:10}}>ICAR - IVRI Izatnagar Bareilly</Text>
               </View>
              
      </View>
      
    );
  }

 
}

 
 

