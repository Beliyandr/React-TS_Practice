import { useState } from "react";

import goodsFromServer from "./goods.json";
import { GoodList } from "./components/GoodList/GoodList";
import { Header } from "./components/Header/Header";

import { SORT_FIELD } from "./constants";

function getPreparedGoods(goods, { sortfield, query }) {
  let preparedGood = [...goods];
  if (query) {
    preparedGood = preparedGood.filter((good) => good.name.includes(query));
  }

  if (sortfield) {
    preparedGood.sort((good1, good2) => {
      switch (sortfield) {
        case SORT_FIELD.ID:
          return good1[sortfield] - good2[sortfield];

        case SORT_FIELD.COLOR:
        case SORT_FIELD.NAME:
          return good1[sortfield].localeCompare(good2[sortfield]);

        default:
          return 0;
      }
    });
  }

  return preparedGood;
}

export const App = () => {
  const [goods, setGoods] = useState(goodsFromServer);
  const [sortfield, setSortfield] = useState("");
  const [query, setQuery] = useState("");

  const visibleGoods = getPreparedGoods(goodsFromServer, {
    sortfield,
    query,
  });

  const moveUp = (good) => {
    const index = goods.indexOf(good);

    if (index < 1) {
      return;
    }

    setGoods([
      ...goods.slice(0, index - 1),
      goods[index],
      goods[index - 1],
      ...goods.slice(index + 1),
    ]);
  };

  const moveDown = (good) => {
    setGoods((currentGoods) => {
      const index = currentGoods.indexOf(good);

      console.log(currentGoods);

      if (index === currentGoods.length - 1) {
        return;
      }

      return [
        ...currentGoods.slice(0, index),
        currentGoods[index + 1],
        currentGoods[index],
        ...currentGoods.slice(index + 2),
      ];
    });
  };

  return (
    <div className="App">
      {false && (
        <Header
          sortfield={sortfield}
          sortBy={setSortfield}
          filterBy={(newQuery) => {
            setQuery(newQuery);
          }}
          query={query}
        />
      )}

      <GoodList goods={goods} moveUp={moveUp} moveDown={moveDown} />
    </div>
  );
};
