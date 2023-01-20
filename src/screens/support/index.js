import React, {useState,useRef} from 'react';
import {View, Text, StyleSheet, FlatList, SafeAreaView,Image, Modal, Alert} from 'react-native';
import {TouchableOpacity} from 'react-native';
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
} from '../../utils/UIConstants.js'
import {moderateScale, scale, verticalScale} from 'react-native-size-matters';
const Support = () => {
  const toastRef = useRef();
  const [modalVisible, setModalVisible] = useState(false);
  const contact = [
    {
      id:0,
      name: 'Umang Kumar',
      phone: '7808775709',
      role: 'Event Execution Committee',
      mail: 'umangkumarumk@gmail.com',
      image: "https://drive.google.com/uc?export=view&id=1GrvaTCatm9bkATrgvH0E07f1wZDXm3fR",
    },
    {
      id:1,
      name: 'Sumit Kushwaha',
      phone: '9717919127',
      role: 'Hospitality & Reception Committee',
      mail: 'sumitkushwaha188@gmail.com',
      image: "https://drive.google.com/uc?export=view&id=1ETACm2rA1FuFmDfstmFcrxt1hyT0rzAj",
    },
    // {
    //   id:1,
    //   name: 'Aayush Gupta',
    //   phone: '9131432828',
    //   role: 'Event Execution Committee',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=1mxzZ036LcAfGKkI8A-DSF6PyboCH87sx",
    // },

    // {
    //   id:3,
    //   name: 'Abhilash Singh',
    //   phone: '9129161426',
    //   role: 'Event Execution Committee',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=15aANAdsAMrLmWRivjDXJ15SpLQfF2WQV",
    // },
    // {
    //   id:4,
    //   name: 'Khushbu Kumar',
    //   phone: '8825399275',
    //   role: 'App Developer',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=1GrvaTCatm9bkATrgvH0E07f1wZDXm3fR",
    // },
    // {
    //   id:5,
    //   name: 'Shivam Kumar',
    //   phone: '8825399275',
    //   role: 'Web Developer',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=1GrvaTCatm9bkATrgvH0E07f1wZDXm3fR",
    // },
    // {
    //   id:6,
    //   name: 'Rahul Kumar',
    //   phone: '8825399275',
    //   role: 'Web Developer',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=1GrvaTCatm9bkATrgvH0E07f1wZDXm3fR",
    // },
    // {
    //   id:7,
    //   name: 'Ganesh Kumar ',
    //   phone: '8825399275',
    //   role: 'Web Developer',
    //   mail: 'rajnish@gmail.com',
    //   image: "https://drive.google.com/uc?export=view&id=1GrvaTCatm9bkATrgvH0E07f1wZDXm3fR",
    // },
  ];

  const oneContact = ( {item} ) => (
    <View>
      <View style={styles.item}>
      <View style={styles.imgContainer}>
        <Image source={{ uri:item.image}} style={styles.img} />
      </View>
      <View style={styles.text}>
        <Text style={styles.name}>{item.name}</Text>
        <TouchableOpacity
                  onPress={() => {
                    Clipboard.setString(item.mobile + '');
                    toastRef.current.show(
                      `Copied ${item.name}'s mobile number to clipboard`,
                      {
                        type: 'success',
                        placement: 'top',
                        animationType: 'slide-in',
                      },
                    );
                  }}>
                <Text style={styles.name}>{item.phone}</Text>
        </TouchableOpacity>
        <Text style={styles.name}>{item.role}</Text>
        <Text style={styles.name}>{item.mail}</Text>
      </View>
    </View>
    
    </View>
  )
  headerComponent = () => {
    return <Text style={styles.listHeadline}>Important contacts for support</Text>
  }
  itemSeparator = () => {
    return <View style={styles.separator}></View>
  } 
  
  return (
    <SafeAreaView>
      <FlatList
        ListHeaderComponentStyle={styles.listHeader}
        ListHeaderComponent={headerComponent}
        data = {contact}
        renderItem = { oneContact }
        ListEmptyComponent={<Text>This is a very flat list</Text>}
        //keyExtractor = { contact => contact.id }
        ItemSeparatorComponent = { itemSeparator }
      />
      <Toast
          successColor='#4d1637'
          ref={toastRef}
          offset={verticalScale(35)}
          duration={1500}
          textStyle={{fontFamily: FONT, fontSize: scale(14)}}
        />
    </SafeAreaView>
  );
};

// define your styles
const styles = StyleSheet.create({
  listHeader:{
    height:55,
    alignItems:'center',
    justifyContent:'center', 
  },
  separator: {
    height:1,
    width: '100%',
    backgroundColor: '#4d1367',
  },
  listHeadline: {
    color:'#333',
    fontSize:21,
    fontWeight:'bold',
  },
  item: {
    flex:1,
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    marginVertical:30
  },
  imgContainer: {
    backgroundColor:'#D9D9D9',
    borderRadius:100,
    height:89,
    width:89,
    justifyContent: 'center',
    alignItems:'center',
  },
  img:{
    borderRadius:100,
    height:89,
    width: 89,
  },
  name:{
    color:'black',
    fontWeight:'bold',
    fontSize:14,
    marginLeft:13,
    fontColor:'black',
  },
  text: {
    //flex:1,
    flexDirection:'column',
    paddingVertical:13,
  },
});


export default Support;
