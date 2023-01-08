import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
const persons = [
    {
      id: "2345678901",
      name: "Earnest Green",
    },
    {
      id: "2345678902",
      name: "Winston Orn",
    },
    {
      id: "2345678903",
      name: "Carlton Collins",
    },
    {
      id: "2345678904",
      name: "Malcolm Labadie",
    },
    {
      id: "2345678905",
      name: "Michelle Dare",
    },
    {
      id: "2345678906",
      name: "Carlton Zieme",
    },
    {
      id: "2345678907",
      name: "Jessie Dickinson",
    },
    {
      id: "2345678908",
      name: "Julian Gulgowski",
    },
    {
      id: "2345678909",
      name: "Ellen Veum",
    },
    {
      id: "234567810",
      name: "Lorena Rice",
    },
  
    {
      id: "234567811",
      name: "Carlton Zieme",
    },
    {
      id: "234567812",
      name: "Jessie Dickinson",
    },
    {
      id: "234567813",
      name: "Julian Gulgowski",
    },
    {
      id: "234567814",
      name: "Ellen Veum",
    },
    {
      id: "234567815",
      name: "Lorena Rice",
    },
  ];

export default function Ppc() {

  const myItemSeparator = () => {
    return <View style={{ height: 1, backgroundColor: "grey",marginHorizontal:10}} />;
    };
  
  const myListEmpty = () => {
    return (
      <View style={{ alignItems: "center" }}>
      <Text style={styles.item}>No data found</Text>
      </View>
    );
  };
  
return (
  <SafeAreaView style={styles.container}>
    <FlatList
      data={persons}
      renderItem={({ item }) => <View style={{flexDirection: "row",justifyContent:'space-between'}}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.id}</Text>
      </View>}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={myItemSeparator}
      ListEmptyComponent={myListEmpty}
      ListHeaderComponent={() => (
        <View style={{flexDirection: "column",justifyContent:'space-between'}}>
        <Text style={{ fontSize: 30, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' ,color:'black'}}>
          Printing & publishing Committee
        </Text>
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,color:'black'}}>
        Head: Xyz  1234567890
      </Text>
      </View>
      )}
    //   ListFooterComponent={() => (
    //     <Text style={{ fontSize: 30, textAlign: "center",marginBottom:20,fontWeight:'bold' }}>Thank You</Text>
    //   )}
    />
  </SafeAreaView>
  );
 }
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
    fontSize: 30,
  },
  item: {
    padding: 20,
    marginTop: 5,
    fontSize: 15,
    color:'black'
  },
});