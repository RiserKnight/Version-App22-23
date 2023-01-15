import React, { useEffect,useState } from 'react';
import { FloatingAction } from "react-native-floating-action";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  Animated,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import MapView, {PROVIDER_GOOGLE,Marker,Polygon} from "react-native-maps";

import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';

import { generalCoordinates,departmentCoordinates,hostelCoordinates,foodAndSports, customMapStyle ,mapBoundaries} from '../../utils/mapData';


import { useTheme } from '@react-navigation/native';

const { width, height } = Dimensions.get("window");
const CARD_HEIGHT = 200;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

const Map = () => {
    const actions = [
      {
        text: "Food and Sports",
        icon: require("../../assets/icons/food.png"),
        name: "fas",
        position: 4
      },
      {
        text: "Hostels",
        icon: require("../../assets/icons/hostel.png"),
        name: "host",
        position: 3
      },
        {
          text: "Departments",
          icon: require("../../assets/icons/dept.png"),
          name: "dept",
          position: 2
        },
        {
          text: "General",
          icon: require("../../assets/icons/gen.png"),
          name: "gen",
          position: 1
        },
       
      ];
    const [markers,setMarkers]=useState(generalCoordinates);
    const initialMapState = {

    region: {
        latitude: 10.7555,
        longitude: 78.82,
        latitudeDelta: 0.04,
        longitudeDelta: 0.0009,
    },
  };

  const [state, setState] = React.useState(initialMapState);

  let mapIndex = 0;
  let mapAnimation = new Animated.Value(0);

  useEffect(() => {
    mapAnimation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
      if (index >= markers.length) {
        index = markers.length - 1;
      }
      if (index <= 0) {
        index = 0;
      }

      clearTimeout(regionTimeout);

      const regionTimeout = setTimeout(() => {
        if( mapIndex !== index ) {
          mapIndex = index;
          const { coordinate } = markers[index];
          _map.current.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: state.region.latitudeDelta,
              longitudeDelta: state.region.longitudeDelta,
            },
            350
          );
        }
      }, 10);
    });
  });

  const interpolations = markers.map((marker, index) => {
    const inputRange = [
      (index - 1) * CARD_WIDTH,
      index * CARD_WIDTH,
      ((index + 1) * CARD_WIDTH),
    ];

    const scale = mapAnimation.interpolate({
      inputRange,
      outputRange: [1, 2.5, 1],
      extrapolate: "clamp"
    });

    return { scale };
  });

  const onMarkerPress = (mapEventData) => {
    const markerID = mapEventData._targetInst.return.key;

    let x = (markerID * CARD_WIDTH) + (markerID * 20); 
    if (Platform.OS === 'ios') {
      x = x - SPACING_FOR_CARD_INSET;
    }

    _scrollView.current.scrollTo({x: x, y: 0, animated: true});
  }

  const _map = React.useRef(null);
  const _scrollView = React.useRef(null);

  return (
    <View style={styles.container}>
    <MapView
      ref={_map}
      initialRegion={state.region}
      zoomEnabled
      style={styles.container}
      provider={PROVIDER_GOOGLE}
      customMapStyle={customMapStyle}
      >
      <Polygon
      coordinates={mapBoundaries}
      fillColor="rgba(100, 100, 200, 0.3)"
      strokeColor="rgba(0,0,0,0.5)"
      strokeWidth={3}
    />
    
      {markers.map((marker, index) => {
        
        const scaleStyle = {
          transform: [
            {
              scale: interpolations[index].scale,
            },
          ],
        };
        return (
          <Marker key={index} coordinate={marker.coordinate} onPress={(e)=>onMarkerPress(e)} zIndex={index}>
            <Animated.View style={[styles.markerWrap]}>
              <Animated.Image
                source={require('../../assets/icons/map_marker.png')}
                style={[styles.marker, scaleStyle]}
                resizeMode="cover"
              />
            </Animated.View>
          </Marker>
        );
      })}
    </MapView>

    <Animated.ScrollView
      ref={_scrollView}
      horizontal
      pagingEnabled
      scrollEventThrottle={1}
      showsHorizontalScrollIndicator={false}
      snapToInterval={CARD_WIDTH + 20}
      snapToAlignment="center"
      style={styles.scrollView}
      contentInset={{
        top: 0,
        left: SPACING_FOR_CARD_INSET,
        bottom: 0,
        right: SPACING_FOR_CARD_INSET
      }}
      contentContainerStyle={{
        paddingHorizontal: Platform.OS === 'android' ? SPACING_FOR_CARD_INSET : 0
      }}
      onScroll={Animated.event(
        [
          {
            nativeEvent: {
              contentOffset: {
                x: mapAnimation,
              }
            },
          },
        ],
        {useNativeDriver: true}
      )}
      
    >
      {markers.map((marker, index) =>(
        <View style={styles.card} key={index}>
          <Image 
            source={{uri:marker.image}}
            style={styles.cardImage}
            resizeMode="cover"
          />
          <View style={styles.textContent}>
            <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
    
            {/* <Text numberOfLines={1} style={styles.cardDescription}>{marker.description}</Text> */}
            
          </View>
        </View>
      ))}
    </Animated.ScrollView>
    <FloatingAction
  
    actions={actions}
    color='#4d1637'
    
    onPressItem={name => {
     
    if(name === 'gen'){
      setMarkers(generalCoordinates);
    }else if(name === 'host'){
      setMarkers(hostelCoordinates);
    }else if(name === 'dept'){
      setMarkers(departmentCoordinates);
    }else if(name === 'fas'){
      setMarkers(foodAndSports);
    }
      console.log(`selected button: ${name}`);
    }}
  />
  </View>
);
};

export default Map;

const styles = StyleSheet.create({
container: {
  flex: 1,
},

scrollView: {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  paddingVertical: 10,
},
endPadding: {
  paddingRight: width - CARD_WIDTH,
},
card: {
  // padding: 10,
  elevation: 2,
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  borderTopLeftRadius: 5,
  borderTopRightRadius: 5,
  marginHorizontal: 10,
  shadowColor: "#000",
  shadowRadius: 5,
  shadowOpacity: 0.3,
  shadowOffset: { x: 2, y: -2 },
  height: CARD_HEIGHT,
  width: CARD_WIDTH,
  overflow: "hidden",
},
cardImage: {
  flex: 7,
  width: "100%",
  height: "100%",
  alignSelf: "center",
},
textContent: {
  flex: 1,
  padding: 10,
},
cardtitle: {
  fontSize: 18,
  // marginTop: 5,
  fontWeight: "bold",
  color:'black',
},

markerWrap: {
  alignItems: "center",
  justifyContent: "center",
  width:50,
  height:50,
},
marker: {
  width: 20,
  height: 20,
},

});