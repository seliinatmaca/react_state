# State'in Ortaya Çıkma Noktası

React uygulamalarında bileşen içeriisnde kullnıcı etkileşimi sonucu arayüzde değişim olmasını isteyebiliriz.r; butonda tıklandığında tema değişimi.

# State

state: bileşen içeriisnde verileri saklamaya ve yönetmeye yarayan yapıdır.

state'in değeri her değştiğinde bileşen otomatik olarak tekrardan render olur(bileşenin fonksiyonu tekrar çalışır.) bu sayede state'e bağlı olarak görünümü değişecek olan arayüz yapıları güncellenmiş olur.

Eğer ki tuttğumuz değişkenin değerinde bir değişim olduğunda arayüzde de bir değişim olmasdı gerekiyorsa state'i tercih ediyoruz.

useState(x): useState i kullanırken x yazılan yere "initial state"
denir "başlangıç değeri" state'in bileşen ekrana basıldığı ilk anda sahip olucağı değer.

useState ile tutulan bir değer, değiştirmenin tek yolu vardır,useState'in döndürdüğü setter fonksiyonunu kullanmak.

```js
//!1) OBJE DAĞITMA
const deneme = {
  id: 5,
  text: "merhaba",
  title: "deneme",
};

//objelerde değerler erişirken tanımlama özellik ismi neyse o özellik ismini yazmak zorundayız
const { id, text, title } = deneme;

// const id = deneme.id;
// const text = deneme.text;

//!2) obje dağıtma yöntemini dizilerde de kullanabiliyıruz
const dizi = [10, () => alert("merhaba")];

//dizilerde kullnırken isim vermekte özgürüz.
const [number, selamla] = dizi;
console.log(number);
selamla();
```
