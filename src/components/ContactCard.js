import React, {useState, useRef,memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {Card, Icon} from '@ui-kitten/components';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  PixelRatio,
  Image,
  Modal,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
import Clipboard from '@react-native-clipboard/clipboard';
import Toast from 'react-native-toast-notifications';
import {
  borderRadius,
  paddingMedium,
  fontSizeSmall,
  fontSizeVeryLarge,
  FONT,
  borderRadiusMedium,
  paddingSmall,
} from '../utils/UIConstants';
import {Black, White, ORANGE, TOAST_COLOR} from '../utils/colors';

let cardHeight = 200;
let cardWidth = 150;

const ContactCard = ({item}) => {
  const toastRef = useRef();
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <Card style={styles.card}>
        <TouchableOpacity onPress={() => setVisible(true)}>
          <ImageBackground
            source={{
              uri: item.Photo,
            }}
            resizeMode="cover"
            style={styles.image}>
            <LinearGradient
              colors={['transparent', 'rgba(10, 10, 10, 0.75)', Black]}
              style={styles.linearGradient}
              locations={[0.5, 0.75, 1.0]}
            />
            <View style={styles.textContainer}>
              <Text numberOfLines={1} style={styles.textName} >
                {item.Name}
              </Text>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      </Card>

      <Modal
        visible={visible}
        animationType="fade"
        transparent={true}
        onRequestClose={() => {
          setVisible(false);
        }} 
        >
        <View style={styles.content}>
          <TouchableOpacity
            onPress={() => {
              setVisible(false);
            }}
            style={{
              position: 'absolute',
              zIndex: 1,
              right: scale(6),
              top: verticalScale(6),

              backgroundColor: '#e2e2df',
              margin: scale(3),
              borderRadius: scale(16),
            }}>
            <Icon
              style={{width: scale(24), height: scale(24)}}
              fill="black"
              name="close"
            />
          </TouchableOpacity>
          <View
            style={{
              backgroundColor: 'rgba(254,252,248, 0.97)',
              borderRadius: scale(borderRadius),
            }}>
            <Image
              source={{
                uri: item.Photo,
              }}
              resizeMode="cover"
              style={styles.image2}
            />
            <View
              style={{
                marginLeft: scale(6),
                marginRight: scale(6),
                alignItems: 'center',
                paddingBottom: verticalScale(8),
              }}>
              <Text
                style={{fontSize: scale(fontSizeVeryLarge), fontFamily: FONT ,  color:Black}}>
                {item.Name}
              </Text>
              <View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                  marginTop: verticalScale(9),
                }}>
                <Icon style={styles.icon} fill={'black'} name="github" />
                <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(item.mobile + '');
                    toastRef.current.show(
                      `Copied ${item.Name}'s phone number to clipboard`,
                      {
                        type: 'success',
                        placement: 'top',
                        animationType: 'slide-in',
                      },
                    );
                  }}>
                <Text style={styles.phoneText}>
                    {item.github} 
                  </Text>
                </TouchableOpacity>

                <Icon
                  style={styles.icon}
                  fill={'black'}
                  name="linkedin"
                />
                <Text style={styles.phoneText}>{item.Linkedin}</Text>
              </View>
            </View>
          </View>
        </View>
        <Toast
          successColor={TOAST_COLOR}
          ref={toastRef}
          offset={verticalScale(35)}
          duration={1500}
          textStyle={{fontFamily: FONT, fontSize: scale(14)}}
        />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: verticalScale(cardHeight),
    width: scale(cardWidth),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: scale(borderRadiusMedium),
    borderWidth: 0,
    marginHorizontal: scale(8),
    marginVertical: verticalScale(8),
    elevation: 5,
    borderWidth: scale(2),
    borderColor: '#842DCE',
  },
  image: {
    height: verticalScale(cardHeight),
    width: scale(cardWidth),
  },
  linearGradient: {
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: verticalScale(cardHeight),
    width: scale(cardWidth),
  },
  infoContainer: {
    flexDirection: 'row',
    // alignItems: 'center',
  },
  textContainer: {
    height: verticalScale(40),
    width: scale(130),
    position: 'absolute',
    bottom: verticalScale(5),
  },
  textName: {
    marginLeft: scale(paddingSmall),
    fontSize: scale(13) / PixelRatio.getFontScale(),
    color: White,
    fontFamily: FONT,
  },
  textBody: {
    marginLeft: scale(paddingSmall),
    marginBottom: verticalScale(paddingSmall),
    fontSize: scale(fontSizeSmall) / PixelRatio.getFontScale(),
    color: White,
    fontFamily: FONT,
  },

  content: {
    borderTopLeftRadius: moderateScale(borderRadius),
    borderTopRightRadius: moderateScale(borderRadius),
    padding: scale(16),
    backgroundColor: 'rgba(204, 198, 204, 0.8)',
    justifyContent: 'center',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#842DCE',
    flex: 1,
  },
  phoneText: {
    alignItems: 'center',
    color: 'black',
    fontSize: moderateScale(10),
    fontFamily: FONT,
  },
  image2: {
    height: verticalScale(300),
    borderTopLeftRadius: moderateScale(borderRadius),
    borderTopRightRadius: moderateScale(borderRadius),
  },
  icon: {
    width: scale(16),
    height: verticalScale(16),
    marginRight: scale(6),
  },
});

export default memo(ContactCard);