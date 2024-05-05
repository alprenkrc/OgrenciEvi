import { ScrollView, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import FloatingButtons from "../../components/floatingButtons";
import AddModal from '../../components/addModal';
import React, {useState} from "react";
const expense = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const onModalOpen = () => {
    setIsModalVisible(true)
  }

  const onModalClose = () => {
    setIsModalVisible(false)
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Ortak Giderler</Text>
      </View>
      <ScrollView>
      </ScrollView>
      <View style={{position: "absolute", bottom: 0, right: 0}}>
        <FloatingButtons onPress={onModalOpen} bgColor={"#EF5350"}/>
      </View>
      <AddModal isVisible={isModalVisible} onclose={onModalClose} bgColor="#EF5350"/>
    </SafeAreaView>
  );
};

export default expense

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
    marginTop: 20,
    marginBottom: 20,
  },
})