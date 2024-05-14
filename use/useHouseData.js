import { useEffect, useState } from 'react';
import { ref, onValue, off } from 'firebase/database';
import { database, auth } from '../config/firebase';

const useHouseData = () => {
  const [houseData, setHouseData] = useState({
    houseId: '', // Evin ID'sini tutacak yeni state
    houseName: '',
    rent: '',
    memberIds: [], // Kullanıcı ID'lerini tutacak yeni state
    memberFullNames: [] // Üyelerin tam adlarını tutacak yeni state
  });
  const [userId, setUserId] = useState('');
  

  useEffect(() => {
    // Kullanıcının kimlik doğrulama durumunu dinle
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUserId(user.uid); // Kullanıcının ID'sini kaydet
      }
    });

    return () => unsubscribe(); // Bileşen kaldırıldığında aboneliği iptal et
  }, []);

  useEffect(() => {
    if (userId) {
      // Veritabanındaki 'houses' düğümüne referans
      const housesRef = ref(database, 'houses');
      onValue(housesRef, (snapshot) => {
        const houses = snapshot.val();
        // Kullanıcının ID'sini içeren evi bulmak için evler üzerinde döngü yap
        for (const houseId in houses) {
          const house = houses[houseId];
          if (house.members && Object.keys(house.members).includes(userId)) {
            const memberIds = Object.keys(house.members);
            const memberFullNames = memberIds.map(id => house.members[id].fullName);
            setHouseData({
              houseId: houseId, // Evin ID'sini state'e ekle
              houseName: house.houseName,
              rent: house.rent,
              memberIds: memberIds,
              memberFullNames: memberFullNames  // Kullanıcı ID'leri listesini state'e ekle
            }); // Kullanıcı bir üye ise ev verilerini ayarla
            break; // Ev bulunduğunda döngüyü durdur
          }
        }
      });

      return () => off(housesRef); // Bileşen kaldırıldığında dinleyiciyi kapat
    }
  }, [userId]); // userId değiştiğinde etkiyi yeniden çalıştır

  return houseData;
};

export default useHouseData;
