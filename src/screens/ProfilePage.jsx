import React, { useEffect } from 'react';
import { View,  Text, Button, Image, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

const ProfilePage = ({ navigation }) => { 
    const { username, setUsername } = useState('');
    const [photo, setPhoto] = useState(null);
    const [caption, setCaption] = useState('');
};


const handleChoosePhoto = () => {
    const options = {
        noData: true,
    };



