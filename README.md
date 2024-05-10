# Öğrenci Evi 
Bu uygulama, öğrenci evlerinde giderleri takip etmek ve görevleri dağıtmak için kullanılır. Firebase kullanarak kullanıcı girişi, kaydı ve gerçek zamanlı veritabanı özelliklerini içerir.

## Kurulum
Projeyi klonlayın: 
```
git clone https://github.com/alprenkrc/OgrenciEvi.git
```
Proje dizinine gidin: 
```
cd OgrenciEvi
```
Bağımlılıkları yükleyin: 
```
npm install veya yarn install
```
Firebase yapılandırmasını ayarlayın: Firebase SDK'larını projeye ekleyin ve Firebase console'dan proje ayarlarını indirip firebaseConfig.js dosyasına yapıştırın.

## Kullanım
Uygulamayı başlatın: 
```
npx expo start
```
Uygulamaya tarayıcı veya Expo uygulaması üzerinden erişin.
Özellikler:
- Kullanıcı Girişi ve Kaydı
- Ev Oluşturma
- Ev Bilgileri: Ev adı, kira bedeli, kira günü, evdeki kişi sayısı, fotoğraf
- QR Code Oluşturma ve Paylaşma
- Ev Sakini Girişi
- QR Code Okuyucu ile Giriş
