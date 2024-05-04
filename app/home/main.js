import { StyleSheet, Text, View,  } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import { Link } from 'expo-router';
import FloatingButtons from '../../components/floatingButtons';
import AddModal from '../../components/addModal';
import LastTasks from '../../components/lastTasks';

const main = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);

{
  /**
   
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

   */
}

  const onModalOpen = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{fontSize: 24, fontWeight: "bold"}}>Evin İsmi</Text>
        <Link href="/home/account"><View style={{width:50, height: 50, borderRadius: 50, backgroundColor: "black"}}/></Link>
        
      </View>
      <View style={styles.donatAndButtons}>
        <FloatingButtons onPress={onModalOpen} title="Gider Ekle"/>
        <FloatingButtons onPress={onModalOpen} title="Görev Ekle" bgColor="#DEDF21"/>
      </View>
      <AddModal isVisible={isModalVisible} onclose={onModalClose}/>

      <View style={{flex: 1, }}>

      </View>

      <View style={{flex: 1.5, }}> 
        <Text style={{fontSize: 24, fontWeight: "bold", marginBottom: 10}}>Son Görevler</Text>
        <View style={{flexDirection: "row", gap: 10}}>
        <LastTasks/>

        <LastTasks/>
        </View>
      </View>

    </SafeAreaView>
  )
}


export default main

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginRight: 20,
    marginLeft: 20,

  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    marginBottom: 20
  },
  donatAndButtons: {
    flex: 2,
    flexDirection: "row",
    justifyContent: "space-between",

  }

})