import { StyleSheet, Text, View } from 'react-native';
import Checkbox from 'expo-checkbox';
import React, { useState, useEffect } from 'react';

const TaskBox = ({ taskName, assignedMembers }) => {
  const [completedMembers, setCompletedMembers] = useState({});
  const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

  useEffect(() => {
    // Eğer tüm üyeler işaretlendiyse, completedMembers'ı sıfırla
    if (assignedMembers.every(member => completedMembers[member])) {
      setCompletedMembers({});
    }
  }, [completedMembers, assignedMembers]);

  const handleComplete = (member) => {
    setCompletedMembers(prevState => ({
      ...prevState,
      [member]: !prevState[member]
    }));
    setCurrentMemberIndex(prevIndex => (prevIndex + 1) % assignedMembers.length);
  };

  const getNextMember = () => {
    return assignedMembers[currentMemberIndex];
  };

  return (
    <View style={styles.container}>
      <Text style={styles.taskName}>{taskName}</Text>
      {assignedMembers.map((member, index) => (
        <View key={index} style={styles.memberContainer}>
          <Text style={styles.memberName}>{member}</Text>
          <Checkbox
            value={!!completedMembers[member]}
            onValueChange={() => handleComplete(member)}
          />
        </View>
      ))}
      <View style={styles.nextContainer}>
        <Text style={styles.nextLabel}>Sıradaki: </Text>
        <Text style={styles.nextMember}>{getNextMember()}</Text>
      </View>
    </View>
  );
};

export default TaskBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#D9D9D9",
    borderRadius: 40,
    marginBottom: 30,
  },
  taskName: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10
  },
  memberContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    justifyContent: "space-between"
  },
  memberName: {
    marginRight: 10,
    fontSize: 18
  },
  nextContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10
  },
  nextLabel: {
    padding: 10,
    paddingRight: 40,
    backgroundColor: "#DEDF21",
    borderRadius: 50,
    fontSize: 18
  },
  nextMember: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 50,
    fontSize: 18,
    marginLeft: -35
  }
});
