const BASE_URL = "https://js-todo-list-9ca3a.df.r.appspot.com/api";

export const METHOD = {
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",
};

export const fetchApi = async ({
  uri = "",
  method = METHOD.GET,
  body = {},
}) => {
  try {
    const option = {
      method,
      headers: { "Content-Type": "application/json;charset=utf-8" },
    };
    if (method !== METHOD.GET) {
      option.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}${uri}`, option);
    return response.json();
  } catch (err) {
    console.warn(err);
  }
};