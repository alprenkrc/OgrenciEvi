import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database, auth } from '../config/firebase';

const useHouseData = () => {
  const [houseName, setHouseName] = useState('');
  const [userId, setUserId] = useState("");
  const [houseId, setHouseId] = useState("");

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (userId) {
      const housesRef = ref(database, 'houses');
      onValue(housesRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          let foundHouseId = null;
          Object.keys(data).forEach((houseId) => {
            if (data[houseId].members && data[houseId].members[userId]) {
              foundHouseId = houseId;
            }
          });
          if (foundHouseId) {
            setHouseId(foundHouseId);
          }
        }
      });
      return () => off(housesRef);
    }
  }, [userId]);

  useEffect(() => {
    if (houseId) {
      const houseRef = ref(database, 'houses/' + houseId);
      onValue(houseRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          setHouseName(data.houseName);
        }
      });
      return () => off(houseRef);
    }
  }, [houseId]);

  return { houseName };
};

export default useHouseData;
