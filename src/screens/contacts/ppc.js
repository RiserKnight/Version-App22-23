import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import ContactCard from '../../components/ContactCard';
import {persons} from '../../utils/temp';

export default function Ppc() {

return (
  <View style={styles.container}>
    <FlatList
    ListHeaderComponent={() => (
        <Text style={{ fontSize: 20, textAlign: "center",marginTop:20,fontWeight:'bold',textDecorationLine: 'underline' , color:'black'}}>
          Printing and publishing Committee
        </Text>
      )}
      data={persons}
      columnWrapperStyle={styles.row}
      initialNumToRender={8}
      renderItem={({item}) => <ContactCard item={item} />}
      numColumns={2}
    />
  </View>
  );
 }
 
const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: 'white',
      },
      row: {
        flex: 1,
        justifyContent: 'space-around',
      },
});