import React from 'react'
import { StyleSheet, View, TextInput, Text, Image, Button,  } from 'react-native'

class MyNeighbour extends React.Component {

    render() {
        return (
            
            <View style={{ flex: 1}} >  
                <View style={ styles.top_container }>
                    <Text style={ styles.top_text }>New neighbour</Text>
                </View>

                
                <View style={ styles.main_container }>
                    <Image
                        style={styles.image}
                        source={{uri: "image"}}
                    />

                    <View>
                        <View>
                            <TextInput style={styles.textinput} placeholder='Name'/>
                            <TextInput style={styles.textinput} placeholder='Phone Number'/>
                            <TextInput style={styles.textinput} placeholder='Address'/>
                        </View>
                        <View style={styles.button}> 
                            <Button title='Save' onPress={() => {}}/>
                        </View>
                    </View>
                </View>
                
            </View>
        )

    }

}
const styles = StyleSheet.create({
    top_text:{
        
    },

    top_container:{ 
        marginTop: 25,
        backgroundColor: 'blue',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',     
    },

    main_container: {
        flex: 1,
        marginTop:20,
        padding: 10,
        margin: 10
    },
    image: {
        width: 120,
        height: 120,
        margin: 5,
        backgroundColor: 'gray',
        borderRadius: 200,
        marginLeft: 100
      },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        padding: 5
      },
    button: {
        marginTop: 20,
        borderRadius: 100,
        width:80,
        marginLeft: 120,
        
    }
})
export default MyNeighbour