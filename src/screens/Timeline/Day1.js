import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import {events} from "../../mobx/eventsData";
export default class Day1 extends Component {
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    
    this.renderDetail = this.renderDetail.bind(this)


this.state = {selected: null}
} 

onEventPress(data){
  this.setState({selected: data})
}



renderDetail(rowData, sectionID, rowID) {
  let title = <Text style={[styles.title]}>{rowData.title}</Text>
  var desc = null
  if(rowData.description && rowData.imageUrl)
    desc = (
      <View style={styles.descriptionContainer}>   
        <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
        <Text style={[styles.textDescription]}>{rowData.description}</Text>
      </View>
    )
  
  return (
    <View style={{flex:1}}>
      {title}
      {desc}
    </View>
  )
}

render() {
    return (
      <View style={styles.container}>
        <Timeline 
          style={styles.list}
          data={ events.state.eventData.filter((item) => item.day == 1 || item.day == 3)}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          innerCircle={'dot'}
          onEventPress={this.onEventPress}
          separator={false}
          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#5c2044", borderRadius: 10}}
          columnFormat='two-column'
          
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	paddingTop:0,
    backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray'
  }
});