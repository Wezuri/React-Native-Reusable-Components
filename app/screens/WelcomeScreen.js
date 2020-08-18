import React, {useState} from 'react'
import { Platform, SafeAreaView, AppRegistry, StyleSheet, Button, View, FlatList, Text, StatusBar} from 'react-native';

import { ImageBackground } from 'react-native';

function addValue(data){
    var lastItem;
    if(data.length !== 0){
        lastItem = data.slice((data.length -1), data.length)[0];
    } else {
        lastItem = {value: 0, isEven: true};
    }
    const dataCopy = data.slice();
    var newItem = {value: 0, isEven: true};
    newItem.value = lastItem.value + 1;
    newItem.isEven = newItem.value % 2 === 0;
    dataCopy.push(newItem);
    return dataCopy;
}

function deleteValue(data){
    const dataCopy = data.slice();
    if(data.length !== 0){
        dataCopy.pop();
    } 

    return dataCopy;
}



function WelcomeScreen({ navigation }) {
    const [data, setData] = useState([{value: 1, isEven: false}, {value: 2, isEven: true }]);
    
    function handleAddValue(){
        setData(addValue(data));
    };

    function handleDelValue(){
        setData(deleteValue(data));
    }

    //List View that displays values starting from 1, Odd numbers
    // are coloured blue and even numbers are coloured red
    //Add Value button adds a value to list, the number is determined 
    // by adding 1 to the last value
    //Delete Value button removes a value from the list
    return(
        <SafeAreaView style={styles.WelcomeScreenView}>
            <Button
                title="Go to Profile"
                onPress={() => navigation.navigate('Profile')}
            />
            
            <FlatList
                style={{width: 200}}
                data={data}
                renderItem={({item}) => (
                <View >
                    <Text style={item.isEven ? styles.Even : styles.Odd}>{item.value}</Text>
                </View>)}
                
            />

            <Button
                title="Add Value"
                onPress={() => handleAddValue()}
            />
            
            <Button
                title="Delete Value"
                onPress={() => handleDelValue()}
            />

        </SafeAreaView>
    );
}

export default WelcomeScreen;


const styles = StyleSheet.create({
    DroidSafeArea: {
        paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    },

    WelcomeScreenView: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center'
    },

    Odd: {
      
      // Define your HEX color code here.
      backgroundColor: '#0000FF',
      color: '#FFFFFF',
      width: 100,
      marginLeft: 0,
    },
    Even: {
      
      // Define your HEX color code here.
      backgroundColor: '#F44336',
      color: '#FFFFFF',
      width: 100,
      marginLeft:100,
      
    },
    
  });