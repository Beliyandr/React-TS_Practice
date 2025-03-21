import { translate } from '../utils/translate';
import { Lang } from '../types/Lang';

type Props = {
  lang: Lang;
};

export const Footer = ({ lang }: Props) => {
  return (
    <footer>
      {translate('footer.greeting', lang)}
    </footer>
  );
}
