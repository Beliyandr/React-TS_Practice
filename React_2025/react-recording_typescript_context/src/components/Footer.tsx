import { translate } from "../utils/translate";
import { Lang } from "../types/Lang";
import { useContext } from "react";
import { LangContext } from "../utils/LangContext";

type Props = {
  lang: Lang;
};

export const Footer = () => {
  const { lang } = useContext(LangContext);

  return <footer>{translate("footer.greeting", lang)}</footer>;
};
