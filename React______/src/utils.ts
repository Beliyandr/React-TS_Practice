import { GAMES, GameFromServer, GamesFromServer, Currency } from "./data";

export function getGamesFromServer(): Promise<GamesFromServer> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(GAMES);
    }, 1000);
  });
}

export function priceWithCurrency(
  price: NonNullable<GameFromServer["price"]>,
  currency?: Currency
): string {
  if (currency === Currency.RUB) {
    return `${price} P`;
  }
  if (currency === Currency.USD) {
    return `${price} $`;
  }
  return `${price} Є`;
}
