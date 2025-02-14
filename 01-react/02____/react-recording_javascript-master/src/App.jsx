import { useState } from 'react';
import cn from 'classnames';

import goodsFromServer from './goods.json';
import { GoodList } from './components/GoodList/GoodList';

const SORT_FIELD_ID = 'id';
const SORT_FIELD_NAME = 'id';
const SORT_FIELD_COLOR = 'id';

function getPreparedGoods(goods, { sortfield, query }) {
  let preparedGood = [...goods]
  if (query) {
    preparedGood = preparedGood.filter(good => good.name.includes(query))
  }

  if (sortfield) {
    preparedGood.sort((good1, good2) => {
      switch (sortfield) {
        case SORT_FIELD_ID:



        default:
          return 0;
      }
    })
  }

  return preparedGood;
}


export const App = () => {
  const [sortfield, setSortfield] = useState('');
  const visibleGoods = getPreparedGoods(goodsFromServer, { sortfield, query: 'e' })

  console.log(visibleGoods);


  return (
    <div className="App">
      <header>
        <button onClick={() => setSortfield('')}>Reset</button>
        <button>Reverse</button>

        <div>
          Sort by:
          <button
            onClick={() => setSortfield(SORT_FIELD_ID)}
            className={cn({ active: sortfield === SORT_FIELD_ID })}
          >
            id
          </button>
          <button>name</button>
          <button>color</button>
        </div>
      </header>

      <GoodList goods={visibleGoods} />
    </div>
  );
};
