---
sidebar_position: 3
---

# Kredi Tuşları
Kredili ödeme tuş tanımlamalarının yapıldığı işlem menüsüdür. Oluşturulmuş tuş bilgileri aşağıdaki gibi listelenir.


![Kredi Tuşları](/img/moduller/kredi-tuslari-1.png)

###	Kredi Tuşu Bilgileri

![Kredi Tuşu Bilgileri](/img/moduller/kredi-tuslari-2.png)

•	Tuş No: Ödemede kullanılacak tuş numarasıdır.

•	Açıklama: Ödemeye verilecek isim.

•	Promosyon/İndirim Uygulanabilir: Bu seçenek işaretlenirse bu ödeme tipiyle kapatılacak belgelere promosyon ve indirim uygulanabilir.

•	Promosyon/İndirim Uygulanamaz: Bu seçenek işaretlenirse bu ödeme tipiyle kapatılacak belgelere promosyon ve indirim uygulanamaz.

•	Uygulanacak Fiyat tipi: Tanımlanan fiyat tipleri arasından kredili ödemeye özel fiyat uygulanacaksa seçilmelidir. Bu tuşla kapatılan belgelerde ürünün seçilen fiyat tipindeki tutarı geçerli olacaktır.

•	Günlük Maksimum Ödeme Tutarı: Ödeme tuşu ile ödeme alınmasına günlük limit getirme işlemi.

•	Ödeme Alınca Çekmece Açma: Ödeme tuşu ile belge kapatılması durumunda çekmece aç/açma

•	Sadece Açık hesap Ödemesi İçin Kullan: Sadece açık belgelerde kullan

•	İade Kabul Edilmez: Bu tuş ile kapatılan tutarlar iade edilmez

•	Banka: Kasa ile entegre çalışan yerlerde eft-pos olmaması durumunda haricen kredi kartında ödeme alınması durumunda ödeme türüne banka ataması yapılmasını sağlar, entegrasyonlar için oluşturulmuştur

•	Ödeme Kodu: Entegrasyonlar için harici sistem ödeme kodu. Ödeme tipi eşleştirmesi yapılmasını sağlar

•	İndirim Uygulanacak Belge Tipleri: Ödeme yerine indirim olarak uygulanacak belgeleri filtrelemeyi sağlar. Uygulanacak belge kodları “,” ile ayrılarak yazılır. Yemek çeki belgesi bu kapsam dışındadır. Örnek: FAT,FIS,EAR,EFA,BLG tüm belgeler için “*” kullanılabilir.

•	İndirim Yazdırılacak Belge Tipleri: Harekete ödeme kağıda indirim olarak uygulanacak belgeleri filtrelemeyi sağlar. Uygulanacak belge kodları “,” ile ayrılarak yazılır. Yemek çeki belgesi bu kapsam dışındadır. Örnek: FAT,FIS,EAR,EFA,BLG tüm belgeler için “*” kullanılabilir.

•	Harici Cihaz Ödeme Türü: Ingenico EFT pos yazar kasa kullanımında geçerli olacak seçimlerdir.

•	Harici Cihaz Uygulama Türü: Ingenico EFT pos yazar kasa kullanımında geçerli olacak seçimlerdir.

•	Cari Seçimi Zorunludur: Bu ödeme tuşu ile belge kapatılması için cari seçimi zorunludur.

•	Münferit Cari Kabul Edilmez: Bu ödeme tuşu ile münferit cari seçimi yapılıysa ödeme alınmaz (TC.NO:11111111111)

•	Havale Ödeme Tuşu:  Kasalardan Iban ve havale bilgilerinin alınması sağlanır. 

•	Ödeme Yerine İndirim Uygula: “İndirim Uygulanacak Belge Tipleri” ile ilişkilidir.

•	Ödeme Olarak Al Kağıda İndirim Olarak Yazdır: “İndirim Yazdırılacak Belge Tipleri” ilişkilidir.

•	Pasifleştir: Kredi tuşu pasif hale gelir.

###	Taksit Seçenekleri:

Tanımlama ile taksit verilerine özel fiyat tipi tanımlaması yapılabilmektedir. Bu ayarların aktif olabilmesi için girilen verinin yazar kasaya gönderilmesi ve yazar kasa POS AYARLARI ile işlevin aktif edilmesi gerekmektedir. Uygulama ile yazar kasa MENÜ İŞLEM butonu altında fiyat tip seçimi aktif olacaktır.

![Kredi Tuşu Bilgileri](/img/moduller/kredi-tuslari-3.png)

###	Şube İş Yeri Kodları:

Kasa ile entegre çalışan eft-pos olmaması durumunda, ödemenin türü banka ödemesi ile eşleştirilerek şube bazlı iş yeri kodu atanmasını sağlar. Entegrasyonlar için kullanılır.

![Kredi Tuşu Bilgileri](/img/moduller/kredi-tuslari-4.png)
