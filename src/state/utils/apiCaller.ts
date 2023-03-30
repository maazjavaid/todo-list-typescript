import { ApiRequestPayload } from "state/ducks/todos/types/api";

const base_url = process.env.REACT_APP_BASE_URL;
export const apiCallRequest = async (
  path: string,
  method: string,
  requestPayload?: ApiRequestPayload
): Promise<any> => {
  const response = await fetch(base_url + path, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    body: requestPayload ? JSON.stringify(requestPayload) : null,
  });
  try {
    const data: any = await response.json();
    return data;
  } catch {
    return response;
  }
};
