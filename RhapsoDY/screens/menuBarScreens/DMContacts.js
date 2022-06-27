import * as React from 'react';
import { SafeAreaView, Button, View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UsersList from './UsersList';

const Stack = createNativeStackNavigator();
const DATA = UsersList();
console.log("List",DATA);

export default function DMContacts({ navigation }) {
    return (
      <SafeAreaView style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <FlatList
            keyExtractor={(item) => item.uuid}
            data={DATA}
            renderItem={({ item }) => (
                <TouchableOpacity style={styles.contacts} //IDEAL STATE - When Contact is clicked it brings to the specific conversation
                    onPress={() => navigation.navigate('DMConversations', {UserName: item.userName, receiver: item.uuid})}>
                    <Text style={styles.item}>{item.userName}</Text>
                </TouchableOpacity>
            )}
        />
        <Button title="Go to Direct Message Home" onPress={() => navigation.navigate('DirectMessageHome')} />
        <Button title="Go back" onPress={() => navigation.goBack()} />
      </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    item: {
        flex: 1,
        marginHorizontal: 10,
        marginTop: 24,
        padding: 30,
        backgroundColor: 'aquamarine',
        fontSize: 24,
    },
});