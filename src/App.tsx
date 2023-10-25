
import React, { useState } from 'react';
import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Header from './components/Header';
import AddItem,{IItem} from './components/AddItem'
import Item from './components/Item';

function App(): JSX.Element {
  const [shoppingList, setShoppingList] = useState<IItem[]>([]); // set the type of what the hook expects to be an array of IItems.
 
 return (
    <SafeAreaView style={styles.container}>
   <Header title="Shopping List"/>
    <View style={styles.contentWrapper}>
        <AddItem
          setShoppingList={setShoppingList}
          shoppingList={shoppingList}
        />

        <FlatList
        data={shoppingList}
        keyExtractor={(item,index)=>`${item.item}-${index}`}
        renderItem={({item})=>(
          <Item item={item.item} quantity={item.quantity} price={item.price}/>
        )}
        ></FlatList>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',
  },
  contentWrapper: {
    padding: 20,
  },
});

export default App;
