const BASE_URL = "http://mate.academy/students-api";

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} %${response.statusText}`);
      }
      return response.json();
    })
    .then((users) => users.slice(0, 3));
}
