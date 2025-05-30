---
sidebar_position: 10
---

# Terazi Parametreleri
Teraziden gelen etiketlerin yazar kasadan barkod ile okutulması ve okutulan ürünlerin terazi ürünü olduğunu kasanın algılaması için terazi parametrelerinin oluşturulması gerekmektedir. 
  


![Terazi Parametreleri](/img/moduller/terazi-parametreleri-1.png) ![Terazi Parametreleri](/img/moduller/terazi-parametreleri-2.png)

### Terazi Parametreleri

- **Tip:** Gramaj, adet veya tutar olarak çalışma şeklinin belirleneceği alan seçimidir.

  - **Kod + Gramaj:** Önce kod, sonra barkod ve gramaj bilgisi gider. (Gramajlı ürünlerde kullanılır.)

  - **Kod + Adet:** Önce kod, sonra barkod ve adet bilgisi gider. (Adetli ürünlerde kullanılır.)

  - **Kod + Tutar:** Önce kod, sonra barkod ve tutar bilgisi gider. (Tutar terazi tarafından bildirilir.)

- **Bayrak:** Barkodun başındaki sayısal değerdir. Bu değer barkod numarasının başında yer alır.

- **Kod:** Bayrak kodundan sonra gelen ürün kodudur. Girilen değer, bayrak değerinden sonraki kaç karakterin ürün kodu olduğunu belirtir.

- **Miktar:** Ürün kodundan sonra kaç karakterin miktar bilgisi tutacağını belirtir.

> **Örnek:** `21 55458 00500`  
> - İlk iki karakter: **Bayrak kodu**  

> - Sonraki beş karakter: **Ürün kodu**  

> - Son beş karakter: **Gramaj bilgisi**  

> (Bu örnekte 500 gramlık bir ürün barkodu oluşturulmuştur.)
