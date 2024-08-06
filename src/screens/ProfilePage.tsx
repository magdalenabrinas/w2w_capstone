// import React, { useEffect } from 'react';
// import { View,  Text, Button, Image, TextInput, TouchableOpacity, StyleSheet, Image} from 'react-native';
// import * as ImagePicker from 'react-native-image-picker';
// import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
// import {Platform} from 'react-native';

// import {ImageLibraryOptions, Callback} from '.screens/types';
// import {
//   imageLibrary as nativeImageLibrary,
// } from './platforms/native';

// export * from '.screens/types';


// export function launchImageLibrary(
//     options: ImageLibraryOptions,
//     callback?: Callback,
//   ) {
//     return Platform.OS === 'web'
//       ? webImageLibrary(options, callback)
//       : nativeImageLibrary(options, callback);
//   }
  

// const ProfilePage = ({ navigation }) => { 
//     const { username, setUsername } = useState('');
//     const [photo, setPhoto] = useState(null);
//     const [caption, setCaption] = useState('');



// const handleChoosePhoto = () => {
//     const options = {
//         noData: true,
//     };
//     ImagePicker.launchImageLibrary(options, (response) => {
//         if (response.assets) {
//             setPhoto(response.assets[0].uri);
//         }
//     });
// };

// const handleUploadPhoto = () => {
//     if (photo && caption) {
//         // Save the photo and caption to the database
//         // Example: savePhotoToDatabase(photo, caption);
//         console.log('Photo and caption uploaded:', photo, caption);
//         // Reset photo and caption
//         setPhoto(null);
//         setCaption('');
//     };


//     return (
//         <View style={styles.container}>
//             <Text style={styles.heading}>My Project</Text>
//             <View style={styles.profileContainer}>
//                 <Image source={{ uri: profilePicture }} style={styles.profilePicture} />
//                 <Text style={styles.username}>{username}</Text>
//             </View>
//             <TouchableOpacity style={styles.button} onPress={handleChoosePhoto}>
//                 <Text style={styles.buttonText}>Upload photo from gallery</Text>
//             </TouchableOpacity>
//             {photo && (
//                 <View style={styles.photoContainer}>
//                     <Image source={{ uri: photo }} style={styles.photo} />
//                     <TextInput
//                         style={styles.captionInput}
//                         placeholder="Write a caption..."
//                         value={caption}
//                         onChangeText={setCaption}
//                     />
//                     <Button title="Upload Photo" onPress={handleUploadPhoto} />
//                 </View>
//             )}
//         </View>
//     );



// };
// };
import * as React from 'react';
import {
  Image,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';

/* toggle includeExtra */
const includeExtra = true;

interface Action {
  title: string;
  type: 'capture' | 'library';
  options: ImagePicker.ImageLibraryOptions;
}

const actions: Action[] = [
  {
    title: 'Select Image',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra,
    },
  },
  
  {
    title: 'Select Video',
    type: 'library',
    options: {
      selectionLimit: 0,
      mediaType: 'video',
      formatAsMp4: true,
      includeExtra,
    },
  },
  
];


export default function App() {
  const [response, setResponse] = React.useState<any>(null);

  const onButtonPress = React.useCallback((type: string, options: ImagePicker.ImageLibraryOptions) => {
    if (type === 'libary') {
      ImagePicker.launchImageLibrary(options, setResponse);
    } else {
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>React Native Image Picker</Text>
      <ScrollView>
        <View style={styles.buttonContainer}>
          {actions.map(({ title, type, options }) => (
            <TouchableOpacity
              key={title}
              onPress={() => onButtonPress(type, options)}
              style={styles.button}
            >
              <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <View style={styles.responseContainer}>
          <Text style={styles.responseText}>{JSON.stringify(response, null, 2)}</Text>
        </View>

        {response?.assets &&
          response?.assets.map(({ uri }: { uri: string }) => (
            <View key={uri} style={styles.imageContainer}>
              <Image
                resizeMode="cover"
                resizeMethod="scale"
                style={styles.image}
                source={{ uri: uri }}
              />
            </View>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'aliceblue',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 8,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    margin: 5,
    alignItems: 'center',
    minWidth: 120,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  responseContainer: {
    marginVertical: 20,
    paddingHorizontal: 10,
  },
  responseText: {
    fontSize: 14,
    color: '#333',
  },
  imageContainer: {
    marginVertical: 24,
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
});
