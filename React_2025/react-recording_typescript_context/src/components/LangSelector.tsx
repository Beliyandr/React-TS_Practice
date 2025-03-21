import { Lang } from '../types/Lang';

type Props = {
  lang: Lang;
  onChange: (lang: Lang) => void;
};

export const LangSelector = ({ lang, onChange }: Props) => {
  return (
    <select
      value={lang}
      onChange={event => onChange(event.target.value as Lang)}
    >
      <option value={Lang.EN}>English</option>
      <option value={Lang.UA}>Українська</option>
    </select>
  );
};
