
import React from 'react';
import { View, StyleSheet, Dimensions,Container,StatusBar,
Text,Picker ,Image,TouchableHighlight,Alert,
TouchableOpacity,Title,Caption,Drawer,Avatar } from 'react-native';
import { Assets } from '../assets/index';
import LinearGradient from 'react-native-linear-gradient'
const deviceWidth = Dimensions.get('window').width;

export default class Home extends React.Component {
  state ={
    data:[]
  }

  


render() {
        return (
     <View>
    <StatusBar backgroundColor="#1a237e" barStyle="light-content"/>
    <View style={[styles.scene, { backgroundColor: '#fff' }]} />
    <Text style={{fontSize:22,fontWeight:'bold' ,backgroundColor:"#1a237e",height:50,width:'100%',color:'white',textAlign:'center'}}>Diagnose the problem in Animal</Text>
    <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#1a237e'}}>Select Species</Text>
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
    <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     selectedValue={this.state.species}
                     onValueChange={(itemValue, itemIndex) => this.setState({species:itemValue})}>
                     <Picker.Item label="Select Species" value="" />
                     <Picker.Item label="Dog" value="Dog" />
                     <Picker.Item label="Cattle" value="Cattle" />
                     <Picker.Item label="Buffalow" value="Buffalow" />
                     <Picker.Item label="Goat" value="Goat" />
                     <Picker.Item label="Pig" value="Pig" />
                     <Picker.Item label="Sheep" value="Sheep" />
                   </Picker>                   
                 </View>
   
    <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#1a237e'}}>Select Problem</Text>
      <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
    <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     selectedValue={this.state.problem}
                     onValueChange={(itemValue, itemIndex) => this.setState({problem:itemValue})}>
                     <Picker.Item label="Select Problem" value="" />
                     <Picker.Item label="Animal Sick" value="Field veterinarian" />
                     <Picker.Item label="Need Expert" value="Expert veterinarian" />
                     <Picker.Item label="Vaccination" value="Para veterinarian new" />
                     <Picker.Item label="Dewormer" value="Para veterinarian" />
                   </Picker>
                   
                 </View>
 
                 <Text style={{fontSize:20,fontWeight:'bold' ,marginTop:25,marginLeft:16,color:'#1a237e'}}>Select Problem in detail</Text>
   <View style={{ width: '90%',alignSelf:'center'  ,borderWidth:1,borderRadius:10,marginTop:20 }}>
   <Picker 
                     style={{ height: 50,borderWidth:0.8 }}
                     selectedValue={this.state.detail}
                     onValueChange={(itemValue, itemIndex) => this.setState({detail :itemValue})}>
                 <Picker.Item label="Select Problem" value="" />
                     <Picker.Item label="Animal Sick" value="Field veterinarian" />
                     <Picker.Item label="Need Expert" value="Expert veterinarian" />
                     <Picker.Item label="Vaccination" value="Para veterinarian new" />
                     <Picker.Item label="Dewormer" value="Para veterinarian" />
                   </Picker>
                   
                 </View>
 <TouchableOpacity onPress={() => this.props.navigation.navigate('Contactlist')}>
                 <LinearGradient 
                        colors={['#90caf9', '#1a237e']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{
                            marginTop:40,
                            height: 50,
                            width: '92%',
                            alignSelf: 'center',

                            borderRadius: 8,
                        }}

                    >
                        <Text style={styles.filledbuttontext}>SUBMIT </Text>



                    </LinearGradient>
                    </TouchableOpacity>
                 
           
             
   </View>
         
        );
    }
}

const styles = StyleSheet.create({
    container: {
       paddingTop: 300
    },
    input: {
        borderRadius:10,
       margin: 15,
       height: 50,
       borderColor: '#000',
       borderWidth: 1
    },
    submitButton: {
       backgroundColor: '#004d40',
       padding: 10,
       margin: 15,
       height: 50,  borderRadius:10,
    },
    submitButtonText:{
        top:3,
        fontSize:16,
        alignSelf:'center',
       color: 'white',
     
    },
    filledbuttontext: {
        
      textAlign:'center',
      alignSelf:'center',
      top:12,
         fontWeight: 'bold',
         fontSize: 17,
         color: 'white',
     },
 })
