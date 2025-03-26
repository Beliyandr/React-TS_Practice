import { useReducer, useState } from "react";
import { Footer } from "./components/Footer";
import { Lang } from "./types/Lang";
import { LangSelector } from "./components/LangSelector";
import { HomePage } from "./components/HomePage";
import { LangProvider } from "./utils/LangContext";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />

      {false && (
        <LangProvider>
          <main>
            <HomePage />
          </main>

          <Footer />
        </LangProvider>
      )}
    </div>
  );
};
