import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList } from 'react-native';

    const title= 'Event 1';
    const description= 'This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1 This is the description for Event 1';
    const image= 'https://picsum.photos/200';


const EventDescriptionScreen = () => {
  return (
        <View style={styles.eventContainer}>
          <Image source={{ uri: image }} style={styles.eventImage} />
            <Text style={styles.eventTitle}>{title}</Text>
            <Text style={styles.eventDescription}>{description}</Text>
        </View>

  );
};

const styles = StyleSheet.create({
  eventContainer: {
    alignItems: 'center',
    backgroundColor:'gray',
    justifyContent: 'space-around',
    flex: 1,
    flexDirection: 'column',
    padding: 10,
   
  },
  eventImage: {
    width: 250,
    height: 250,
    padding:40,
    marginRight: 10
  },
  eventInfoContainer: {
    flex: 1,
    justifyContent: 'center'
  },
  eventTitle: {
    color:'black',
    fontWeight: 'bold',
    fontSize: 12,
    backgroundColor:'white'
  },
  eventDescription: {
    color: 'black',
    fontSize: 14,
    backgroundColor:'white'
  }
});

export default EventDescriptionScreen;
