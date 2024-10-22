import React from 'react';
import {Text, Image, View} from 'react-native';
import Icon from "react-native-vector-icons/AntDesign";

const Boat = ({name, desc, poster})=> {
    return (
        <View>
            <Text> </Text>
            <Icon name="stepforward" size={20}>
                <Text> {name}</Text>
            </Icon>
            <Text>{desc}</Text>
            <Image source={poster} style={{width:400, height:300}} />
        </View>
    );};

export default Boat;
