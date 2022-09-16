import { toast } from "react-toastify";
import { ErrorMessage } from "../components/ErrorMessage";
import { get, STORAGE } from "../utils/storage";
import { ErrorMessAPI } from "./errorMessage";
import { stringify } from "qs";
import { TOKEN_CLASS, URL_API } from ".";

const API_ERROR = 2;

class ApiError extends Error {
  constructor(message, error, type) {
    super(message);
    this.errors = error;
    this.type = type;
  }
}

function logError(error) {
  if (error instanceof ApiError) {
    toast.error(<ErrorMessage error={error.errors} />, {
      toastId: error.errors.messageId,
      position: toast.POSITION.TOP_RIGHT,
    });
  }
  throw error;
}

/**
 * Error: {name, code, message}
 * @param response
 * @returns {{ok}|*}
 */
const validateResponse = async (response) => {
  if (!response.ok) {
    let error = {};
    let type = API_ERROR;
    switch (response.status) {
      case 400:
        const err = await response.json();
        if (ErrorMessAPI[err.messageId]) {
          error = {
            messageId: ErrorMessAPI[err.messageId].code,
            message: ErrorMessAPI[err.messageId].message,
          };
        } else {
          error = {
            messageId: err.messageId,
            message: err.message,
          };
        }
        break;
      case 401:
        type = 1;
        break;
      case 403:
        error = {
          messageId: "ACCESS_DENIED",
          message: "You have no right to access.",
        };
        break;
      default:
        error = {
          messageId: "SYSTEM_ERROR",
          message: "SYSTEM_ERROR",
        };
        break;
    }

    if (error && type !== 1) {
      throw new ApiError(response.statusText, error, type);
    } else {
      throw Error(error.message);
    }
  }
  return response;
};
const readResponseAsJSON = (response) => response.json();

const getAuthHeader = () => {
  const token = get(STORAGE.JWT);
  return {
    Authorization: `Bearer ${encodeURIComponent(token)}`,
    token: localStorage.getItem("UserCustomer")
      ? `${JSON.parse(localStorage.getItem("UserCustomer")).token}`
      : "",
    "Content-Type": "application/json",
    Accept: "application/json",
    ...TOKEN_CLASS,
  };
};

const getAuthHeader_file = () => {
  const token = get(STORAGE.JWT);
  return {
    Authorization: `Bearer ${encodeURIComponent(token)}`,
    token: localStorage.getItem("UserCustomer")
      ? `${JSON.parse(localStorage.getItem("UserCustomer")).token}`
      : "",
    "Content-Type": "multipart/form-data",
    Accept: "application/json",
    ...TOKEN_CLASS,
  };
};

const getAuthHeaderImport = () => {
  const token = get(STORAGE.JWT);
  return {
    Authorization: `Bearer ${encodeURIComponent(token)}`,
    token: localStorage.getItem("UserCustomer")
      ? `${JSON.parse(localStorage.getItem("UserCustomer")).token}`
      : "",
  };
};
const fetchJSON = (pathToResource, params) =>
  fetch(`${URL_API}/${pathToResource}?${stringify(params)}`, {
    headers: getAuthHeader(),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

const postJSON = (pathToResource, body) =>
  fetch(`${URL_API}/${pathToResource}`, {
    method: "POST",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

const postFile = (pathToResource, body) =>
  fetch(`${URL_API}/${pathToResource}`, {
    method: "POST",
    headers: getAuthHeader_file(),
    body,
  })
    // .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

const postImportJSON = (pathToResource, body) =>
  fetch(pathToResource, {
    method: "POST",
    headers: getAuthHeaderImport(),
    body,
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

const putJSON = (pathToResource, body) =>
  fetch(`${URL_API}/${pathToResource}`, {
    method: "PUT",
    headers: getAuthHeader(),
    body: JSON.stringify(body),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

const deleteJSON = (pathToResource) =>
  fetch(`${URL_API}/${pathToResource}`, {
    method: "DELETE",
    headers: getAuthHeader(),
  })
    .then(validateResponse)
    .then(readResponseAsJSON)
    .catch(logError);

export { fetchJSON, postImportJSON, deleteJSON, putJSON, postJSON, postFile };
