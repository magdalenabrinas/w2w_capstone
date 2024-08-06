import {NativeModules} from 'react-native';

import {
  ImageLibraryOptions,
  Callback,
  ImagePickerResponse,
} from '../screens/types';

const DEFAULT_OPTIONS: ImageLibraryOptions = {
  mediaType: 'photo',
  videoQuality: 'high',
  quality: 1,
  maxWidth: 0,
  maxHeight: 0,
  includeBase64: false,
//   cameraType: 'back',
  selectionLimit: 1,
//   saveToPhotos: false,
//   durationLimit: 0,
  includeExtra: false,
  presentationStyle: 'pageSheet',
  assetRepresentationMode: 'auto',
};

// @ts-ignore We want to check whether __turboModuleProxy exitst, it may not
const isTurboModuleEnabled = global.__turboModuleProxy != null;

const nativeImagePicker = isTurboModuleEnabled ?
  require("./NativeImagePicker").default :
  NativeModules.ImagePicker;


export function imageLibrary(
  options: ImageLibraryOptions,
  callback?: Callback,
): Promise<ImagePickerResponse> {
  return new Promise((resolve) => {
    nativeImagePicker.launchImageLibrary(
      {...DEFAULT_OPTIONS, ...options},
      (result: ImagePickerResponse) => {
        if (callback) callback(result);
        resolve(result);
      },
    );
  });
}
