const TYPE_ADD = "amount/add";
const TYPE_TAKE = "amount/take";
const TYPE_CLEAR = "amount/clear";

export function reducer(amount = 100, action) {
  switch (action.type) {
    case TYPE_ADD:
      return amount + action.payload;

    case TYPE_TAKE:
      return amount - action.payload;

    case TYPE_CLEAR:
      return 0;

    default:
      return amount;
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
