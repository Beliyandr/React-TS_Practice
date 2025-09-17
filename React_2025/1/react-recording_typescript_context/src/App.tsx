import { Footer } from "./components/Footer";
import { HomePage } from "./components/HomePage";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <HomePage />
      <Main />
      <Footer />
    </div>
  );
};
