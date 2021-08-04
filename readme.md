# Hepsiemlak case

Hepsiemlak firmasının iş başvurusunda göndermiş olduğu görevlendirme çalışmasıdır. Bu görevde mini e-ticaret sayfası istenmektedir. Görev Nuxt.js ile yapılmıştır. İki sayfadan oluşan görev içerisinde komponent yapısı kurularak geliştirilmiştir. Verilen apiler üzerinden gelen veriler ile listeleme işlemleri yapılmıştır. 

👨🏼‍💻 Projeyi ayaklandırmak için gerekli kodlar:

```bash
cd hepsiemlakcase
npm i
npm run dev
```

👨🏼‍💻 Proje testleri için gerekli kodlar:

```bash
cd hepsiemlakcase
npm i
npm run test
```

Daha detaylı olarak aşağıda sayfaların ve komponentlerin işlevleri verilmiştir.

# İndex.vue

Anasayfamız olan index.vue sayfası içerisinde Container.vue dosyamız çağırılmaktadır.

## Container.vue

container.vue dosyamız api üzerinden gelen ürünlerin listeleneceği alan olarak geliştirilmiştir. Sayfa içerisinde SCSS ile oluşturulan grid yapısına uygun olarak alan açılmıştır. item.vue komponentimiz buradaki alana çağıralarak oluşturulan for döngüsü ile api üzerindeki ürün sayısı kadar alana eklenmektedir. Ayrıca bu alanda bir adet sepet butonu bulunmaktadır. Bu buton aracılığı ile sepet sayfasına doğrudan geçilebilmektedir.

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled.png)

## İtem.vue

item.vue komponenti kategori sayfası içerisine yer alan ürünlerin listelenmesi için geliştirilmiştir.  İçerisinde ürünün görseli, adı, fiyatı ve ürünü sepete eklemek için bir buton bulunmaktadır. 

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%201.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%201.png)

Buton tıklandğı anda verilen api üzerinden stok kontrolünü yaparak müşteriye 'Success' ya da ' Out of stock' yazısı göstermektedir.

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%202.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%202.png)

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%203.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%203.png)

Stok kontorlü tamamlandıktan sonra eğer api üzerinden 'success' olarak cevap dönerse ürün sepet sayfasına gönderilir.

# basket.vue

basket.vue dosyamız projemizin sepet sayfasıdır. Kategori sayfasında eklenen ürünler bu alanda listelenmektedir. Sayfamızda kaç adet ürün olduğunu gösteren bir sayaç bulunmaktadır. Bu sayaç sepete eklenen ürünlere göre dinamik olarak değişmektedir. Alt kısımda bulunan butonlar ile bir önceki sayfaya yeni ürünler eklemek için dönebilir ya da alışverişi tamamla diyerek sepeti onaylayabilirsiniz. 

👨🏼‍💻 Sepet onaylandıktan sonra tüm sepet içeriği silenerek kategori sayfasına yönlendirme işlemi yapılır.

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%204.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%204.png)

## cartItem.vue

Cartıtem komponentimiz sepet sayfasındaki ürünlerin listelenmesi için tasarlanmıştır. Komponentimiz içerisinde ürünün görseli, adı, fiyatı, adeti yer almaktadır. Ayrıca ürünün adetini değiştirebileceğiniz butonlar ve giriş alanları bulunmaktadır. Direk olarak ürünün silinmesi için ise 'Remove' butonu bulunmaktadır.

![Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%205.png](Hepsiemlak%20case%2039ebc7a782cd4fbf8db00a729721346a/Untitled%205.png)

# Style Özellikleri

Projemiz üzerinde hazır css kütüphanesi kullanılmamıştır. Assets > css içerisinde sayfamızda kullanılan tüm css özellikleri yer almaktadır. Her yapı için ayrı bir css dosyası oluşturulmuştur. 

SCSS ile yazılan css özelliklerimiz birbiri içerisine import edilerek dinamik bir yapı oluşturulmuştur.

- button.scss ↔️ buton özelliklerini bulundurmaktadır.
- grid.scss ↔️ sayfa içerisindeki hizalama ve genişlik özellikleri bulundurmaktadır.
- main.scss ↔️ sayfa içerisinde bulunan genel elementlerin özelliklerini barındırmaktadır.
- spacing.scss ↔️ tüm içeriklerin birbirleri arasındaki iç ve dış boşluk özelliklerinin bulunduğu dosyadır.
- style.scss  ↔️ içerisinde sayfada gerekli olan stil özellikleri ve diğer scss dosyalarının import işlemlerini bulundurmaktadır.
- text.scss ↔️ sayfadaki tüm text işlemlerinin ve font import işlemlerinin bulunduğu dosyadır.
- variable.scss  ↔️ sayfada kullanılan renk, boyut gibi özelliklerin değişken olarak verildiği scss dosyasıdır.