import { translate } from '../utils/translate';
import { Lang } from '../types/Lang';

type Props = {
  lang: Lang;
};

export const HomePage = ({ lang }: Props) => (
  <div className="HomePage">
    <HomePageTitle lang={lang} />
    <HomePageContent lang={lang} />
  </div>
);

const HomePageTitle = ({ lang }: Props) => {
  return (
    <h1>{translate('homePage.title', lang)}</h1>
  );
};

const HomePageContent = ({ lang }: Props) => {
  return (
    <section>
      {translate('homePage.content', lang)}
    </section>
  );
};
