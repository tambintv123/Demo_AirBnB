import { postJSON } from "./fetch";
const end_point = "auth/login";

/**
 * API 14 - Đăng nhập
 * @example
 * const data = {
 *  email: "kha9x0159@gmail.com",
 *  password: "123456",
 * }
 */
const getLogin = (data) => postJSON(`${end_point}`, data);

/**
 * API 15 - Đăng ký
 * @example
 * const data = {
 *  name: "La Thuy",
 *  email: "thuy@gmail.com",
 *  password: "123456",
 *  phone: "012345789",
 *  birthday: 1998-05-11,
 *  gender: true,
 *  address: "An Giang",
 * }
 */
const getRegister = (data) => postJSON(`${end_point}`, data);

export { getRegister, getLogin };
