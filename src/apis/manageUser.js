import { deleteJSON, fetchJSON, postFile, postJSON, putJSON } from "./fetch";
const end_point = "users";

/**
 * API 1 - Tạo người dùng
 * @example
 * const data = {
 *  name: "La Thuy",
 *  email: "thuy@gmail.com",
 *  password: "thuy0159",
 *  phone: "012345789",
 *  birthday: 1998-05-11,
 *  gender: true,
 *  type: "ADMIN",
 *  address: "An Giang",
 * }
 */
const createUser = (data) => postJSON(`${end_point}`, data);

/**
 * API 2 - Lấy thông tin chi tiết người dùng
 * @ID string - "630c935afee2fc001c0c9899"
 */
const getDetailUser = (id) => fetchJSON(`${end_point}/${id}`);

/**
 * API 3 - Lấy danh sách người dùng phần trang
 * @example
 * const data = {
 *  skip: 0,
 *  limit: 3,
 * }
 */
const getListUsers = (params) => fetchJSON(`${end_point}/pagination`, params);

/**
 * API 4 - Xóa người dùng
 * @ID string - "61cd87b8fee2fc001ccf7277"
 */
const deleteUser = (id) => deleteJSON(`${end_point}/${id}`);

/**
 * API 5 - Cập nhật người dùng
 * @ID string - "61cd87b8fee2fc001ccf7277"
 * @example
 * const data = {
 *  name: "La Thuy",
 *  email: "thuy@gmail.com",
 *  phone: "012345789",
 *  birthday: 1998-05-11,
 *  gender: true,
 *  address: "An Giang",
 *  type: "ADMIN",
 * }
 */
const updateUser = (id, data) => putJSON(`${end_point}/${id}`, data);

/**
 * API 6 - Cập nhật ảnh đại diện người dùng
 * @data avatar: binary
 */
const updateAvatarUser = (data) => postFile(`${end_point}/upload-avatar`, data);

export {
  getDetailUser,
  getListUsers,
  createUser,
  deleteUser,
  updateAvatarUser,
  updateUser,
};
