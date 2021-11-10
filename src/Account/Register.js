import { Container, Input } from 'native-base';
import React from 'react';
import {
    View,
    TextInput,
    Text,
    ImageBackground,
    Dimensions,
    StatusBar,
    TouchableOpacity,
    Image,
    StyleSheet,
} from 'react-native';



import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Assets } from '../assets/index';
import LinearGradient from 'react-native-linear-gradient'
import axios from 'axios';

const deviceWidth = Dimensions.get('window').width;
const postUser=() => {
    axios({
      method: 'post',
      url: 'http://172.16.23.49:3002/register',
      data:{
        "fullName":fullName, 
        "fatherName":fatherName,
        "aadhar_number":"7405426981174",
        "dob":"22051987",
        "mobile_number":"88991290405",
        "address":"baheri",
        "location":"baheri",
        "email":"xyz2@gmail.com",
        "password":"542617",
        "no_animal_holding":"3"
    },
      headers: {
        // "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
        "Accept": "application/json",
        "Content-Type": "application/json"
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
  }

export default class Login extends React.Component {
    render() {
        return (
            <Container
                style={{
                    backgroundColor: 'white',
                    width: '100%',

                    resizeMode: 'contain',
                }}>
                <StatusBar backgroundColor="#3949ab" barStyle="dark-content" />

                <View style={{ backgroundColor: '#fff' }}>

                    <LinearGradient
                        colors={['#3949ab', '#3949ab']}
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        style={{

                            height: 50,
                            width: '100%',
                            alignSelf: 'center',


                        }}

                    >
                        <Text style={{ color: '#fff', fontSize: 18, fontWeight: 'bold', alignSelf: 'center', marginTop: 10 }}>
                            On-Call Veterinary service system </Text>
                    </LinearGradient>



                    <View
                        style={{
                            height: 50,
                            marginTop: 10,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="rename-box"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'default'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Name'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(fullName) =>
                                    this.setState({ mobile: fullName })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="email"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'default'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Email'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(fatherName) =>
                                    this.setState({ mobile: fatherName })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="cellphone"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Mobile'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="lock"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Password'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="rename-box"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Father name'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="format-list-numbered"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Addhar number'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="map-marker"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Address'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="crosshairs-gps"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'Location'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="cake"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'D.O.B'}
                                placeholderTextColor={'#e1e1e1'} 
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>
                    <View
                        style={{
                            height: 50,
                            marginTop: 5,
                            borderRadius: 5,
                            borderColor: '#a7a7a7',
                            backgroundColor: 'white',
                        }}>
                        <View
                            style={{
                                flexDirection: 'row',
                                marginBottom: 15,
                                borderBottomWidth: 1,
                                width: '90%',
                                alignSelf: 'center',
                                borderBottomColor: '#e5e5e5',
                            }}>
                            <Icon style={{ marginLeft: 8, marginTop: 8 }}
                                name="ticket-confirmation"
                                size={24}
                                color='grey'
                                type="MaterialCommunityIcons" />
                            <Input
                                keyboardType={'number-pad'}
                                onResponderStart={() =>
                                    this.setState({ down: false })
                                }
                                maxLength={10}
                                placeholder={'No. Of animals holding'}
                                placeholderTextColor={'#e1e1e1'}
                                onChangeText={(txt) =>
                                    this.setState({ mobile: txt })
                                }
                                style={{
                                    fontSize: 15,
                                    height: 40,
                                    right: 2,
                                    alignSelf: 'center',
                                    justifyContent: 'center',
                                    paddingLeft: 10,
                                }}
                            />
                        </View>
                    </View>




                    <TouchableOpacity
                       onPress={()  => postUser()}>
                        <LinearGradient
                            colors={['#90caf9', '#1a237e']}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1, y: 0.5 }}
                            style={{
                                marginTop: 20,
                                height: 40,
                                width: '85%',
                                alignSelf: 'center',

                                borderRadius: 8,
                            }}

                        >
                            <Text style={styles.filledbuttontext}>LOGIN </Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <Text style={{ color: '#000', fontSize: 14, alignSelf: 'center', marginTop: 25 }}>
                       Already have an account ?
                             </Text>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('Register')}>
                        <Text style={{ color: '#ea0016', fontSize: 14, alignSelf: 'center', textDecorationLine: 'underline' }}>
                            SIGNUP
                             </Text>
                    </TouchableOpacity>


                    <View style={{ flexDirection: 'row', marginTop: 90, paddingLeft: 10 }}>
                        <Image
                            style={{ height: 40, width: 40 }}
                            source={Assets.logo}
                        />
                        <Text style={{ color: 'black', textAlign: 'center', marginTop: 10, fontSize: 14, marginLeft: 10,textTransform:'lowercase' }}>ICAR - IVRI Izatnagar Bareilly</Text>
                    </View>
                </View>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    input: {
        marginLeft: 12,
        width: deviceWidth / 1.2,
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
    },

    emptybutton: {
        alignSelf: 'center',
        borderColor: '#e5e5e5',
        borderRadius: 5,
        height: 40,
        width: '85%',
        borderWidth: 0.8,
        justifyContent: 'center',
    },
    emptybuttontext: {
        textAlign: 'center',
        paddingLeft: 50,

        fontSize: 14,
        color: '#000',
    },
    filledbuttontext: {

        textAlign: 'center',
        alignSelf: 'center',
        top: 8,
        fontWeight: 'bold',
        fontSize: 17,
        color: 'white',
    },
});

