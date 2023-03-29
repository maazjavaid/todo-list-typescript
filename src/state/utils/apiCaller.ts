import { ApiRequestPayload } from "state/ducks/todos/types/api";
import { ITodo } from "state/ducks/todos/types/utils";

const base_url = process.env.REACT_APP_BASE_URL;
export const apiCallRequest = async (
  path: string,
  method: string,
  requestPayload?: ApiRequestPayload
): Promise<ITodo[] | Response | ITodo> => {
  const response = await fetch(base_url + "/todos/" + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: requestPayload ? JSON.stringify(requestPayload) : null,
  });
  try {
    const data: ITodo[] | ITodo = await response.json();
    return data;
  } catch {
    return response;
  }
};
