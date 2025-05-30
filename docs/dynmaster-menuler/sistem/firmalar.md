---
sidebar_position: 1
---

# Firmalar 

Modül üzerinden, firma tanımlama, şubelerin belirlenmesi, kayıtlı şubeler ve firmalar üzerinde değişiklik yapma, bölge tanımlama ve düzenleme, Lisans ayarlama işlemleri yapılabilir. 

## Firma Bilgileri

![Firma](/img/sistem/firmalar-1.png)

### Tanımlar

•	**Firma Adı**: Firma Ünvan bilgileri.

•	**Vergi Dairesi**: Firma vergi dairesi.

•	**Vergi No**: Firma vergi numarası. 

•	**Mersis No**: Firmanın mersis numarası

•	**Resmi Web Site**: Firmanın kurumsal 
web sayfası adresi.

•	**Modül Bağımlılığı**: Firmanın bağlı olacağı modül seçimi. Bağımsız, Sadece Stok, Sadece Cari ve Stok ve Cari modüllerine bağımlı seçenekleri bulunmaktadır. Kayıt edilen firmanın cari ve stok modüllerinin farklı uygulamalar tarafından yönetilmesi durumunda kullanılır.

•	**Merkez Veri IP adresi**: Dynmaster veri tabanının bulunduğu sunucunun ip adresi.

•	**Fiyat Bağımlılığı**: Şube merkez yapısında kullanılır. Şubeler fiyat değişikliği yapamayacak yetki konumunda olur.

•	**Yönetim şekli**: Şubeler merkez tarafından yönetilecektir. Seçim aktif edildiğinde şubelerde Dynmaster kullanılmaz.

•	**Ürün Fiyat Yönetimi**: Ürünlere şube bazlı fiyat tanımlaması yapılabilir.

•	**Şube Özel Fiyatı** : 

    ••	**Şube Özel Fiyatı Şubede Kullanabilir**:  Şube sadece kendi şubesinde geçerli olacak ürün fiyatları girebilir. Bu fiyatlar merkeze aktarılarak raporlanması sağlanabilir.

    ••	**Şube Eşitlemelerinde Modüller Sorulmasın**: Şubeden merkeze eşitleme yapıldığında eşitlenecek **POS, SATIŞ, STOK, PROMOSYON ve PUAN** modülleri listesi gösterilmez sadece modüllerdeki temel işlevler eşitlenir.


**Bu firma bir şubedir seçeneği işaretlenirse firma ekleme alanları  pasif olup alt kısımda bulunan şube ayar seçenekleri aktif olacaktır. 
Alanların açıklamaları şu şekildedir.

 **Merkez Bağlantısı**: Bu alandan merkez veri tabanına bağlantı kurulur.   Simgesi ile ayarların girileceği sihirbaza ulaşılır. Şube merkez yapısı kullanılacak yerlerde kullanılır. Şube Dynmaster programının şubede veri tabanı olmalıdır.

•	**Merkez**: Merkez Dynmaster üzerinde tanımlanmış firma seçilir.
•	**Şube**: Merkez Dynmaster içinde tanımlanmış Şubeler listelenir. 

###	Ekstra Ayarlar

![Ekstra Ayarlar](/img/sistem/firmalar-4.png)

•	**Alış – Maliyet fiyat kullanımı aktifleştir**: Ürünlere alış maliyet fiyatlarını eklemeyi aktifleştirir.

•	**Şube bazlı ürün alış-maliyet fiyatlandırmayı aktifleştir**: Ürünlere şube bazlı fiyat tanımlayabilmeyi sağlar. Şube bazlı fiyatlandırma aktif değilse merkez şube için tanımlanan fiyatlar tüm şubeler için geçerli olur.

•	**Şube – merkez eşitleme ile alış – maliyet fiyatları şubeye aktarılsın**: Şubeden merkeze yapılan eşitlemelerde stok modülü ile ürün alış-maliyet fiyatları da şubeye aktarılır.

•	**Şubeler alış-maliyet fiyatlarını görebilir**: Şube sadece kendi şubesinde geçerli olacak fiyatları görebilir.

•	**Şubeler alış-maliyet fiyatlarını değiştirebilir**: Şube sadece kendi şubesinde geçerli olacak fiyatları güncelleyebilir.

•	**Alış- maliyet fiyatları kasalara gönderilsin(ESOF kasalar için geçerlidir.)**: Tanımlanan fiyatların kasalara gönderilmesi sağlanır. Kasa tarafında bu fiyatlar parçalı kdv hesabı limit değeri olarak kullanır.

•	**Ürünler için parçalı vergi hesaplaması uygulaması var**: Ürünlerin Kdv hesabının maliyet-alış fiyatı üzerindeki satış fiyatı için faklı % kdv hesabı yapılması için kullanılır. Bu ayar seçildiğinde kdv departmanları tanım forumunda departman tanımlarında parçalı hesaplama yapılacak kdv departman girişi aktif olur.

•	**Şube kullanıcıları ürün gönderiminde veri aktarımı yapmadan sadece mesaj komutu oluştur**: Şube kullanıcıları kasaya ürün gönderirken POS_URUN, POS_BARKOD, POS_URUNFIYAT tablolarına veri aktarılmaz sadece mesaj komutu oluşturulur.

•	**Admin olmayan kullanıcılar ürün gönderiminde veri aktarımı yapmadan sadece mesaj komutu oluştur**: Şube kullanıcıları kasaya ürün gönderirken POS_URUN, POS_BARKOD, POS_URUNFIYAT tablolarına veri aktarılmaz sadece mesaj komutu oluşturulur.

•	**Şube kullanıcıları tek ürün gönderiminde veri aktarımı yapmadan sadece mesaj komutu oluştur**: Şube kullanıcıları kasaya ürün gönderirken POS_URUN, POS_BARKOD, POS_URUNFIYAT tablolarına veri aktarılmaz sadece mesaj komutu oluşturulur.

•	**Admin olmayan kullanıcılar tek ürün gönderiminde veri aktarımı yapmadan sadece mesaj komutu oluştur**: Şube kullanıcıları kasaya ürün gönderirken POS_URUN, POS_BARKOD, POS_URUNFIYAT tablolarına veri aktarılmaz sadece mesaj komutu oluşturulur

•	**Windows kasalara şube bazlı ürün gönderimi yap**: Kasaya ürün gönderilirken POS_URUN ve POS_BARKOD tablosundaki ürün ve barkod kayıtları şube bazlı oluşturulur.

•	**Windows kasalara şube bazlı ürün gönderimi yaparken transction kullanma**: Kasalara şube bazlı ürün gönderiminde transction kullanılmaz.

•	**Windows kasalara şube bazlı ürün gönderimi yaparken aynı anda ürün gönderimine izin ver**: Şube bazlı ürün gönderiminde aynı anda ürün gönderim desteği

•	**Şube kullanıcıları kasalara ürün gönder komutu göndermek isterlerse komutu fiyatı güncellenen ürünler komut olarak değiştir**: Seçimle ürün gönderimi ile fiyatı güncellenen ürünlerde gönderilir.

### Servis Ayarları

Lisans kontrolü için gateway sunucu tanımlama işlemleri yapılır.
![Servis Ayarları](/img/sistem/firmalar-5.png)

##	Bölgeler

Merkeze bağlı Bölgeleri kategorilendirmek için kullanılır. 

![Bölgeler](/img/sistem/firmalar-2.png)

##	Şubeler

Bölgeler altında bulunan şubelerin tanımlaması yapılır. Şubeler belirlenip şubelere özel fiyatlar ve promosyonlar belirlenebilir ayrıca raporlamalar alınabilir. 

![Şubeler](/img/sistem/firmalar-3.png)
