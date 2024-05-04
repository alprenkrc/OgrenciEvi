import { Modal, Pressable, StyleSheet, Text, View } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import React from 'react'

const addModal = ({isVisible, children, onclose}) => {
  return (
    <Modal
        animationType='slide'
        transparent={true}
        visible={isVisible}
    >
        <View style={styles.modalContent}>
            <Pressable onPress={onclose} style={{width: "35%", height:10, borderRadius: 50, backgroundColor: "#8C8A8A", marginTop: 7}}/>

                    
            

 
            <Text>something..</Text>
            <Text>something..</Text>
            <Text>something..</Text>
        </View>
    </Modal>
  )
}


const styles = StyleSheet.create({
    modalContent: {
        height: '70%',
        width: '100%',
        paddingRight: 20,
        paddingLeft: 20,
        backgroundColor: "#D9D9D9",
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        position: 'absolute',
        bottom: 0,
        alignItems: "center"
    }
})

export default addModal;