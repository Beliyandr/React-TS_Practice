import { translate } from "../utils/translate";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";
import { StateContext } from "./Store";

type Props = {};

export const HomePage: React.FC = () => (
  <div className="HomePage">
    <HomePageTitle />
    <HomePageContent />
  </div>
);

const HomePageTitle: React.FC = () => {
  const { lang } = useContext(StateContext);

  return <h1>{translate("homePage.title", lang)}</h1>;
};

const HomePageContent: React.FC = () => {
  const { lang } = useContext(LangContext);

  return <section>{translate("homePage.content", lang)}</section>;
};
