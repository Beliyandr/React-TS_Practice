export function reducer(goods = [], action) {
  switch (action.type) {
    case 'add':
      return [...goods, action.payload];

    case 'take':
      return goods.filter(
        good => good !== action.payload
      );

    case 'clear':
      return [];

    default:
      return goods;
}