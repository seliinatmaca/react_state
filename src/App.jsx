import Counter from "./components/Counter";
import Accordion from "./components/Accordion";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  // koyu mod mu olucak? state'i
  const [isDarkMode, setIsDarkMode] = useState(true);

  return (
    <div
      className={`d-flex flex-column gap-5 vh-100 p-5 ${
        isDarkMode ? "bg-dark text-white" : "bg-light text-dark"
      }`}
    >
      {/* <header>
        <h1>STATE</h1>
      </header> */}

      <Header setIsDarkMode={setIsDarkMode} />

      <Accordion
        title="Soul - Fragman & Vizyon Tarihi"
        description="Soul, Pixar Animation Studios tarafından üretilen ve Walt Disney Pictures tarafından yayınlanan 2020 Amerikan bilgisayar animasyonlu fantastik komedi-drama filmidir."
      />
      <Accordion
        title="Ölü Gelin - Corpse Bride"
        description="
Ölü Gelin, Tim Burton'un Edward Scissorhands ve The Nightmare Before Christmas filmlerinde yaratmış olduğu gotik ve karanlık havaya sahiptir. Yönetmen bu filmi de The Nightmare Before Christmas 'ta olduğu gibi stop-motion animasyon tekniği ile çekmiştir."
      />
      <Accordion
        title="Luka - Luca"
        description="Luka, Pixar Animation Studios tarafından üretilen ve Walt Disney Studios Motion Pictures tarafından dağıtılan, bir Amerikan bilgisyar animasyon, çağa geçiş fantezi komedi filmidir. Film COVID-19 pandemisi nedeniyle Disney+'da yayınlanmaktadır ayrıca Disney+'ın olmadığı ülkelerde sinemada yayımlanmıştır."
      />

      <Counter />

      <footer></footer>
    </div>
  );
}

export default App;
