import { useState } from "react";

const Accordion = ({ title, description }) => {
  //const Accordion = (props) => {
  //const {title, description}=props

  //   let isOpen = false;

  //   const cevap = useState(false);
  //   console.log(cevap);

  //camelcsse isimlendirme tercih ediyıruz
  const [isOpen, setIsOpen] = useState(false);

  //   console.log(props.title);
  //   console.log(props.description);
  console.log(title);

  return (
    <div className=" bg-white rounded-3 p-3 text-dark">
      <div className="d-flex justify-content-between align-items-center">
        {/* <h2>Soul - Fragman & Vizyon Tarihi</h2> */}
        <h2>{title}</h2>

        <button
          onClick={() => {
            // isOpen = true;
            // console.log(isOpen);
            //isopen değerini truye ya çekiyoruz
            //setIsOpen(true);
            // setIsOpen(isOpen === true ? false : true);
            setIsOpen(!isOpen);
          }}
          className="btn btn-primary"
        >
          {/* + */}
          {isOpen ? "-" : "+"}
        </button>
      </div>

      {isOpen && (
        // <p className="mt-4 lead">
        //   Soul, Pixar Animation Studios tarafından üretilen ve Walt Disney
        //   Pictures tarafından yayınlanan 2020 Amerikan bilgisayar animasyonlu
        //   fantastik komedi-drama filmidir.
        // </p>
        <p>{description}</p>
      )}
    </div>
  );
};

export default Accordion;
