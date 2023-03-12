import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import Timeline from 'react-native-timeline-flatlist'
import { LogBox } from 'react-native';


export default class Day1 extends Component {
  componentDidMount() {
    LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
}
  constructor(){
    super()
    this.onEventPress = this.onEventPress.bind(this)
    
    this.renderDetail = this.renderDetail.bind(this)
    this.data = [
      {
        id :"0",
        day: "0",
        time: "06:00 PM",
        title:"Inauguration",
        description:"06:00 PM - 09:00 PM"
        
      },
      {
        id :"11",
        day: "0",
        time: "06:00 PM",
        title:"Enspire(Chief Guest)",
        description:"06:00 PM - 09:00 PM"
      },

        {
            id: "1",
            eventID: "101",
            image: "https://drive.google.com/uc?export=view&id=1uXZx20fJd_9IV7OLue4qiU-ZxZZCcqQK",
            day: "1",
            time: "9:00 AM ",
           description: "9:00 AM - 11:00 AM",
            StartDate: "18-03-2023",
            EndDate: "18-03-2023",
            StartTime: "09:00 AM",
            EndTime: "11:00 AM",
            title: "Coding Cauldron",
            desc: "Coding cauldron is a 2 hour long coding challenge in which participants have to solve 3-4 problems based on data structure and algorithms using the programming language of their choice. The participants have to take part individually. Team participation is not allowed. The platform for the event will be HackerEarth(liable to change). "
        }, {
            id: "2",
            eventID: "102",
            image: "https://drive.google.com/uc?export=view&id=1SAY6sF6HAm9vHxf0TExP5wgjgIEdP6S3",
            day: "1",
            time: "11:30 AM",
           description: "11:30 AM - 01:00 PM",
            StartDate: "18-03-2023",
            EndDate: "18-03-2023",
            StartTime: "11:30 AM",
            EndTime: "01:00 PM",
            title: "Eliminator Round - 2",
            desc: "This event will be played in a team of two. There will be two rounds in this event. In both the rounds, questions based on logical reasoning will be asked. In round one, participants will get points for every correct answer. After round one, Top 30(liable to change) teams will be selected for round 2. "
        }, {
            eventID: "103",
            id: "3",
            image: "https://drive.google.com/uc?export=view&id=1i0a55hHqZg3z69y10bRqJmOKQq7Uxscd",
            day: "1",
           description: "02:30 PM - 06:30 PM",
            StartDate: "18-03-2023",
            EndDate: "18-03-2023",
            StartTime: "02:30 PM",
            EndTime: "06:30 PM",
            time: "2:30 PM",
            title: "Hacker Hive",
            desc: "This is a hackathon that will be organized as part of the Version. This will be a 7 days long hackathon. The problem statements for the hackathon will be released online a week before Version. Interested teams can register and develop the solution for any one problem. Problems will be from three domains – Web Development, App Development, Machine Learning. Participating teams will develop the solution and then present that solution offline in Version. "
        }, {
            eventID: "108",
            id: "4",
            image: "https://drive.google.com/uc?export=view&id=1k3atrJCydT-x11nEjgXbJL8rymdXLvPo",
            day: "1",
           description: "06:00 PM - 08:00 PM",
            StartDate: "18-03-2023",
            EndDate: "18-03-2023",
            StartTime: "06:00 PM",
            EndTime: "08:00 PM",
            time: "6:00 PM",
            title: "Just Two Minutes",
            desc: "This event is the part of the fun segment. This will be an open stage event. In this event, any candidate can come to the stage and show whatever talent they have such as singing, dancing, stand-up comedy, poetry etc."
        }, {
            eventID: "104",
            id: "5",
            image: "https://drive.google.com/uc?export=view&id=1uXZx20fJd_9IV7OLue4qiU-ZxZZCcqQK",
            day: "2",
            StartDate: "19-03-2023",
            EndDate: "19-03-2023",
            StartTime: "10:00 AM",
            EndTime: "01:00 PM",
            time: "10:00 AM",
            title: "Arcanum",
           description: "10:00 AM - 01:00 PM",
            desc: "Arcanum is an event that is based on SQL queries. The event will be played in a team of two. Teams will be given with a relational schema that they can refer to during the event. The game is based on a story. To reach the final phase of the story, teams have to gather 20 clues by writing SQL queries. Teams must write SQL queries that display only one cell as result. Each clue is either an id of a person or an interview transcript of a person. The team that finishes the story first, will be declared as the winner."
        }, {
            eventID: "105",
            id: "6",
            image: "https://drive.google.com/uc?export=view&id=1ADg07Ii7CNhZHSWwNOsis7SnNYzHQ8pm",
            day: "2",
            StartDate: "19-03-2023",
            EndDate: "19-03-2023",
            StartTime: "02:30 PM",
            EndTime: "03:30 PM",
           description: "02:30 PM - 03:30 PM",
            time: "2:30 PM",
            title: "Crack & Swap",
            desc: "This is a 1 hour long team coding challenge. In this challenge, participants have to form a team of two people. Each team will be given two problems to solve. Both the member of the team will start working on different problems. After 30 minutes, both of them will switch the problems and continue from where their teammate left. The platform for the event will be HackerEarth (liable to change)."
        }, {
            eventID: "106",
            id: "7",
            image: "https://drive.google.com/uc?export=view&id=1dx0ef41Hbg462kckfO9d8kgIl5MuY2cB",
            day: "2",
            StartDate: "19-03-2023",
            EndDate: "19-03-2023",
            StartTime: "04:00 PM",
            EndTime: "06:00 PM",
            time: "4:00 PM",
           description: "04:00 PM - 06:00 PM",
            title: "Xscape Quest",
            desc: "This will be a Treasure hunt. This event will be 3 hrs long. This will be a team event. Each team will have to solve some puzzles to gather clues. With the help of those clues, they will move to the next stage. Finally, the team, that gets to final answer first, will be declared as the winner. The event will be hosted in offline mode and teams may have to explore a few parts of NIT Trichy to complete the quest."
        },
        {
          eventID: "107",
          id: "8",
          StartDate: "19-03-2023",
          EndDate: "19-03-2023",
          StartTime: "06:30 PM",
          EndTime: "07:00 PM",
          day: "2",
          time:"06:30 PM",
         description: "06:30 PM - 07:00 PM",
          image: "https://drive.google.com/uc?export=view&id=1swE9mKSCOTQXz31faM3gR9Pm47mAipPq",
          title: "Podcast",
          desc: "This will be a two hour long LAN gaming event. The game will be played on solo mode. The game played during the event will be developed by the members of the Event Execution Committee. The best performer of the game will be declared as the winner."
      }, {
            eventID: "107",
            id: "9",
            StartDate: "19-03-2023",
            EndDate: "19-03-2023",
            StartTime: "07:00 PM",
            EndTime: "08:00 PM",
            day: "2",
            time: "07:00 PM",
           description: "07:00 PM - 08:00 PM",
            image: "https://drive.google.com/uc?export=view&id=1swE9mKSCOTQXz31faM3gR9Pm47mAipPq",
            title: "Closing Ceremony",
            desc: "This will be a two hour long LAN gaming event. The game will be played on solo mode. The game played during the event will be developed by the members of the Event Execution Committee. The best performer of the game will be declared as the winner."
        }, {
            eventID: "109",
            id: "11",
            StartDate: "18-03-2023",
            EndDate: "19-03-2023",
            StartTime: "10:00 AM",
            EndTime: "05:00 PM",
            time: "10:00 AM",
           description: "10:00 AM - 05:00 PM",
            day: "3",
            image: "https://drive.google.com/uc?export=view&id=1ZoJwzxn0wmueGdf4da2w8xxGxhYYuJDK",
            title: "GameFiesta",
            desc: "It will be a 1 hour long debugging event. The participants will be given some erroneous code. They have to resolve all the errors and remove all the bugs that are present in the code. The code will be in one of the three programming languages – C++,Java or Python.This will be a solo event. Team participation is not allowed.This will be a solo event. Team participation is not allowed."
        }, {
            eventID: "110",
            id: "12",
            StartDate: "18-03-2023",
            EndDate: "19-03-2023",
            StartTime: "06:00 PM",
            EndTime: "08:00 PM",
            time: "Entire Day",
            day: "3",
           description: "Entire Day",
            image: "https://drive.google.com/uc?export=view&id=1BiBGYVV_lzPnRTZTUZ-HPQ0Iap4ZBzUf",
            title: "Shot vs Shot",
            desc: "In this events, the participants have to shoot a video of less than 2 minutes showing NIT Trichy. They have to explore NIT Trichy and shoot as many good things as they can. They have to show their editing and videography skills. This will be a solo event."
        }
    ]
    

this.state = {selected: null}
} 

onEventPress(data){
  this.setState({selected: data})
}



renderDetail(rowData, sectionID, rowID) {
  let title = <Text style={styles.title}>{rowData.title}</Text>
  var desc = null
    desc = (
      <View style={styles.descriptionContainer}>   
        <Text style={[styles.textDescription]}>{rowData.time1}</Text>
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
      <ScrollView showsVerticalScrollIndicator={false}>
      <Text style={{fontWeight:'bold', justifyContent:'center',color:'#4d1637',textAlign:'center',fontSize:15,backgroundColor:'#ff9797',marginTop:10}}>17th March 2023</Text>
        <Timeline 
          style={styles.list}
          data={ this.data.filter((item) => item.day == 0 )}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'#4d1637', padding:5, borderRadius:13,fontWeight:'bold'}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          innerCircle={'dot'}
          onEventPress={this.onEventPress}
          separator={false}
          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#D6CDEA", borderRadius: 10}}
          columnFormat='two-column'
        />
        <Text style={{fontWeight:'bold', justifyContent:'center',color:'#4d1637',textAlign:'center',fontSize:15,backgroundColor:'#ff9797',marginTop:10}}>18th March 2023</Text>
        <Timeline 
          style={styles.list}
          data={ this.data.filter((item) => item.day == 1 )}
          circleSize={20}
          circleColor='rgba(0,0,0,0)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'#4d1637', padding:5, borderRadius:13,fontWeight:'bold'}}
          descriptionStyle={{color:'gray'}}
          options={{
            style:{paddingTop:5}
          }}
          circleSize={20}
          circleColor='rgb(45,156,219)'
          innerCircle={'dot'}
          onEventPress={this.onEventPress}
          separator={false}
          detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#D6CDEA", borderRadius: 10}}
          columnFormat='two-column'
        />
      <Text style={{fontWeight:'bold',justifyContent:'center',color:'#4d1637',textAlign:'center',fontSize:15,backgroundColor:'#ff9797',marginTop:10}}>19th March 2023</Text>
      <Timeline
        style={styles.list}
        data={ this.data.filter((item) => item.day == 2 )}
        circleSize={20}
        circleColor='rgba(0,0,0,0)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{minWidth:52, marginTop: -5}}
        timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'#4d1637', padding:5, borderRadius:13,fontWeight:'bold'}}
        descriptionStyle={{color:'gray'}}
        options={{
        style:{paddingTop:5}
        }}
        circleSize={20}
        circleColor='rgb(45,156,219)'
        innerCircle={'dot'}
        onEventPress={this.onEventPress}
        separator={false}
        detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#D6CDEA", borderRadius: 10}}
        columnFormat='two-column'
        />
        <Text style={{fontWeight:'bold',justifyContent:'center',color:'#4d1637',textAlign:'center',fontSize:15,backgroundColor:'#ff9797',marginTop:10}}>Parallel Events(18th-19th March 2023)</Text>
      <Timeline
        style={styles.list}
        data={ this.data.filter((item) => item.day == 3 )}
        circleSize={20}
        circleColor='rgba(0,0,0,0)'
        lineColor='rgb(45,156,219)'
        timeContainerStyle={{minWidth:52, marginTop: -5}}
        timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'#4d1637', padding:5, borderRadius:13,fontWeight:'bold'}}
        descriptionStyle={{color:'gray'}}
        options={{
        style:{paddingTop:5}
        }}
        circleSize={20}
        circleColor='rgb(45,156,219)'
        innerCircle={'dot'}
        onEventPress={this.onEventPress}
        separator={false}
        detailContainerStyle={{marginBottom: 20, paddingLeft: 5, paddingRight: 5, backgroundColor: "#D6CDEA", borderRadius: 10}}
        columnFormat='two-column'
        />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
	paddingTop:0,
    // backgroundColor:'white'
  },
  list: {
    flex: 1,
    marginTop:20,
  },
  title:{
    fontSize:16,
    fontWeight: 'bold',
    color: 'black'
  },
  descriptionContainer:{
    flexDirection: 'row',
    paddingRight: 50,
    color: 'white',
  },
  image:{
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'black'
  }
});