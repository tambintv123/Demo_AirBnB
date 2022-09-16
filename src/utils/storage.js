const STORAGE = {
  JWT: "JWT",
  USER: "USER",
  SIDE_BAR: "SIDE_BAR",
};

const get = (key) => localStorage.getItem(key);
const set = (key, value) => localStorage.setItem(key, value);

export {STORAGE, get, set}