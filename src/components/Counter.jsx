import { useState } from "react";

const Counter = () => {
  //usestate'i tutulan değerin değişimi bileşen içeirisnde ki arayüzüde etkilesin isityorsak veriyi değolamak için tercih ederiz.
  // usestate'i çağırıdğımız zaman dizi içeirisnde iki değer döndürür.
  //1.değer :tuttuğumuz veri
  //2.değer: tuttuğumuz veriyi değiştirmeye yarayan fonskiyon
  //! statede ki değer değiştitğinde react tekrardan render işelmini yapar bu sayede arayüz güncel kalmış olur.
  const [count, setCount] = useState(10);

  //   let count = 10;

  //ssayfa yüklendiği anda react "render" ismini
  //verdiğimiz bir işlem gerçekleştirir.
  //component retun satırında yazdığımız jsx kodunu html kodunu çevirir ve DOM'a gönderir.

  return (
    <div className="d-flex justify-content-center align-items-center gap-5">
      <button
        disabled={count === 0}
        onClick={() => setCount(count - 1)}
        className="btn btn-danger"
      >
        Azalt
      </button>
      <p className="lead fs-1">{count}</p>
      <button onClick={() => setCount(count + 1)} className="btn btn-success">
        Arttır
      </button>

      <button className="btn btn-primary" onClick={() => setCount(0)}>
        SIFIRLA
      </button>
    </div>
  );
};
export default Counter;
