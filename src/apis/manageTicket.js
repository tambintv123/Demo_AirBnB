import { deleteJSON, fetchJSON, postJSON, putJSON } from "./fetch";
const end_point = "tickets";

/**
 * API 28 - Lấy danh sách vé
 */
const getListTickets = () => fetchJSON(`${end_point}`);

/**
 * API 29 - Lấy thông tin chi tiết vé
 * @ID string - "61723e9befe193001c0a7a81"
 */
const getDetailTicket = (id) => fetchJSON(`${end_point}/${id}`);

/**
 * API 30 - Cập nhật thong tin vé
 * @ID string - "61723e9befe193001c0a7a81"
 * @example
 * const data = {
 *  checkIn: 2021-05-11T17:00:00.000Z,
 *  checkOut:  2022-05-15T17:00:00.000Z,
 *  userId: "60ab50479db98f001509e34c",
 *  roomId: "60c31a069145e66a3bb0985a",
 * }
 */
const updateTicket = (id, data) => putJSON(`${end_point}/${id}`, data);

/**
 * API 31 - Xóa vé
 * @ID string - "61723e9befe193001c0a7a81"
 */
const deleteTicket = (id) => deleteJSON(`${end_point}/${id}`);

/**
 * API 32 - Tạo vé
 * @example
 * const data = {
 *  checkIn: 2021-05-11T17:00:00.000Z,
 *  checkOut:  2022-05-15T17:00:00.000Z,
 *  userId: "60ab50479db98f001509e34c",
 *  roomId: "60c31a069145e66a3bb0985a",
 * }
 */
const createTicket = (data) => postJSON(`${end_point}`, data);

/**
 * API 33 - Lấy danh sách vé theo người dùng
 * @example
 * const data = {
 *  userId: "60e2b055e22b6b3b70243098",
 *  skip: 0,
 *  limit: 0,
 * }
 */
const getListTicketsByUser = (params) =>
  fetchJSON(`${end_point}/by-user`, params);

/**
 * API 34 - Lấy danh sách vé theo phòng
 * @example
 * const data = {
 *  roomId: "60e2b057e22b6b3b7024309c",
 * }
 */
const getListTicketsByRoom = (params) =>
  fetchJSON(`${end_point}/by-room`, params);

export {
  getListTickets,
  getListTicketsByRoom,
  getListTicketsByUser,
  deleteTicket,
  createTicket,
  updateTicket,
  getDetailTicket,
};
