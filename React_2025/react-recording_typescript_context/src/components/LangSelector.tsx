import { useContext } from "react";
import { Lang } from "../types/Lang";
import { LangContext } from "../utils/LangContext";

type Props = {};

export const LangSelector = () => {
  const { lang, setLang } = useContext(LangContext);

  return (
    <select
      value={lang}
      onChange={(event) => setLang(event.target.value as Lang)}
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
};
