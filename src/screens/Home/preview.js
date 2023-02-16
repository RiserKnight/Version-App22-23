import React from 'react';
import {
View,
Text,
TouchableOpacity,
Image,
StyleSheet,
Platform,
Dimensions,
} from 'react-native';
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export default (Preview = ({
style,
item,
imageKey,
onPress,
index,
active,
local,
}) => {
return (
    <View
    style={[styles.videoContainer]}>
    <View style={[styles.imageContainer, styles.shadow]}>
        <Image
        style={[styles.videoPreview, active ? {} : {height: 120}]}
        source={{uri: item[imageKey]}}
        />
    </View>
    </View>
);
});

const styles = StyleSheet.create({
videoContainer: {
    width: 275,
    paddingVertical: 28,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
},
videoPreview: {
    width: windowWidth/2+80,
    height: windowHeight/4+30,
    borderRadius: 8,
    resizeMode: 'cover',
},
imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
},
shadow: {
    ...Platform.select({
    ios: {
        shadowColor: 'black',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    android: {
        elevation: 5,
    },
    }),
},
});