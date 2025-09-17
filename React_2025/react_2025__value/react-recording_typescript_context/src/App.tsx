import { useState } from "react";
import { Footer } from "./components/Footer";
import { Lang } from "./types/Lang";
import { LangSelector } from "./components/LangSelector";
import { HomePage } from "./components/HomePage";

export const App = () => {
  const [lang, setLang] = useState(Lang.EN);

  return (
    <div className="App">
      <header className="header">
        Mate academy
        <LangSelector lang={lang} onChange={setLang} />
      </header>

      <main>
        <HomePage lang={lang} />
      </main>

      <Footer lang={lang} />
    </div>
  );
};
