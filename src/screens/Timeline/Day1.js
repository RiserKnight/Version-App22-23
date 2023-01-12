import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'

export default class Day1 extends Component {
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    this.renderSelected = this.renderSelected.bind(this)
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [
        {
          time: '09:00 AM', 
          title: "Inauguration ", 
          lineColor:'#009688', 
          icon: require('../../assets/icons/timeline.png'),

        },
        {
          time: '10:00 AM', 
          title: "Enspire (Guest Lecture)", 
          icon: require('../../assets/icons/timeline.png'),

        },
        {
          time: '11:00 AM', 
          title: "Hacker Hive Submission Ends", 
          icon: require('../../assets/icons/timeline.png'),
        },
        {
          time: '11:00 AM', 
          title:  "Hacker Hive Presentation", 
          description: '11:00 AM t0 02:00 PM',
          lineColor:'#009688', 
          icon: require('../../assets/icons/timeline.png'),

        },
        {
          time: '01:00  PM', 
          title: "Lunch Break", 
          description: '01:00 PM to 02:00 PM', 
          icon: require('../../assets/icons/timeline.png'),
        },
        {
          time: '02:00 PM', 
          title: "Arcanum", 
          description: '02:00 PM to 05:00 PM', 
          icon: require('../../assets/icons/timeline.png'),

        },
        {
          time: '05:30 PM', 
          title: "Crack n Swap", 
          description: '05:30 PM to 06:30 PM', 
          icon: require('../../assets/icons/timeline.png'),        },
        {
          time: '07:00 PM', 
          title: "Just Two Minutes", 
          description: '07:00 PM to 09:00 PM', 
          icon: require('../../assets/icons/timeline.png'),
        }
]


this.state = {selected: null}
} 

onEventPress(data){
  this.setState({selected: data})
}

renderSelected(){
    if(this.state.selected)
      return <Text style={{marginTop:10}}>Selected event: {this.state.selected.title} at {this.state.selected.time}</Text>
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
        {this.renderSelected()}
        <Timeline 
          style={styles.list}
          data={this.data}
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