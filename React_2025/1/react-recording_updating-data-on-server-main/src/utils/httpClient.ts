const BASE_URL = "https://mate.academy/students-api";
const DEFAULT_HEADERS = {
  "Content-Type": "application/json; charset=utf-8",
};

const handleResponse = (response: Response) => {
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}`);
  }

  return response.json();
};

export const client = {
  get<T>(url: string): Promise<T> {
    return fetch(BASE_URL + url, { method: "GET" }).then(handleResponse);
  },

  delete<T>(url: string): Promise<T> {
    return fetch(BASE_URL + url, { method: "DELETE" }).then(handleResponse);
  },

  post<T>(url: string, data: any): Promise<T> {
    const options = {
      method: "POST",
      body: JSON.stringify(data),
      headers: DEFAULT_HEADERS,
    };

    return fetch(BASE_URL + url, options).then(handleResponse);
  },

  patch<T>(url: string, data: any): Promise<T> {
    const options = {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: DEFAULT_HEADERS,
    };

    return fetch(BASE_URL + url, options).then(handleResponse);
  },
};

// export function getData<T>(url: string): Promise<T> {
//   return fetch(BASE_URL + url, { method: "GET" }).then(handleResponse);
// }

// export function deleteData<T>(url: string): Promise<T> {
//   return fetch(BASE_URL + url, { method: "DELETE" }).then(handleResponse);
// }
