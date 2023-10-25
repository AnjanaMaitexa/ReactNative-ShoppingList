import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface Props{  //declare an interface,which specifies expected props fo header component.
    title:string; //it define a single props called title
}
/* React.FC<Props> is a type annotation. It specifies that Header is a functional component (a component that is defined using a function)and
 that it expects props that match the Props interface defined earlier. In this case, it expects an object with a title property of type string.*/
const Header : React.FC<Props>= ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({ 
    header: {
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#cfcfcf',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
  },})