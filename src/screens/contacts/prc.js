import React from "react";
import { SafeAreaView, FlatList, StyleSheet, Text, View } from "react-native";
import ContactCard from '../../components/ContactCard';
import {persons} from '../../utils/prc';

export default function Prc() {

return (
  <View style={styles.container}>
    <FlatList
    ListHeaderComponent={() => (
        <Text style={styles.header}>
          Public Relation Committee
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
      header: {
        marginTop:20,
        marginBottom: 20,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '600',
        color:'black',
    },
});