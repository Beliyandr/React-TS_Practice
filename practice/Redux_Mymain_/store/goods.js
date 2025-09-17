const TYPE_ADD = "goods/add";
const TYPE_TAKE = "goods/take";
const TYPE_CLEAR = "goods/clear";

export function reducer(goods = [], action) {
  switch (action.type) {
    case TYPE_ADD:
      return [...goods, action.payload];

    case TYPE_TAKE:
      return goods.filter((good) => good !== action.payload);

    case TYPE_CLEAR:
      return [];

    default:
      return goods;
  }
}

export const actions = {
  add: (payload) => {
    {
      type: TYPE_ADD;
      payload;
    }
  },

  take: (payload) => {
    {
      type: TYPE_TAKE;
      payload;
    }
  },

  clear: () => {
    {
      type: TYPE_CLEAR;
      payload;
    }
  },
};
