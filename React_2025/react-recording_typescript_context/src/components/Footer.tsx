import { translate } from "../utils/translate";
import { Lang } from "../types/Lang";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";
import { StateContext } from "./Store";

type Props = {};

export const Footer = () => {
  const { lang } = useContext(StateContext);

  return <footer>{translate("footer.greeting", lang)}</footer>;
};
