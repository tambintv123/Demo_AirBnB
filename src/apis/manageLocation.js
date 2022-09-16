import { deleteJSON, fetchJSON, postJSON, putJSON } from "./fetch";
const end_point = "locations";
/**
 * API 7 - Tạo vị trí
 * @example
 * const data = {
 *  name: "Suối lam",
 *  province : "Bình Phước",
 *  country: "viet nam",
 *  valueate : 5
 * }
 */
const createLocation = (data) => postJSON(`${end_point}`, data);
/**
 * API 8 - Xóa vị trí
 * @ID string - '617af2f3da03f39db7616601'
 */
const deleteLocation = (id) => deleteJSON(`${end_point}/${id}`);
/**
 * API 9 - Lấy danh sách vị trí
 * @example
 * const data = {
 *  limit: 1,
 *  skip: 1,
 *  location: "Bình Phước"
 * }
 */
const getListLocation = (params) => fetchJSON(`${end_point}`, params);
/**
 * API 10 - Lấy thông tin chi tiết vị trí
 * @ID string - '617af2f3da03f39db7616601'
 */
const getDetailLocation = (id) => fetchJSON(`${end_point}/${id}`);
/**
 * API 11 - Cập nhật thông tin vị trí
 * @ID string - '617af2f3da03f39db7616601'
 * @example
 * const data = {
 *  name: "Suối lam",
 *  province : "Bình Phước",
 *  country: "viet nam",
 *  valueate : 5
 * }
 */
const updateLocation = (id, data) => putJSON(`${end_point}/${id}`, data);
/**
 * API 12 - Cập nhật ảnh cho vị trí
 * @ID string - '617af2f3da03f39db7616601'
 * @data location: binary
 */
const updateImageLocation = (id, data) => postJSON(`${end_point}/${id}`, data);
/**
 * API 13 - Lấy danh sách vị trí theo đánh giá
 * @example
 * const data = {
 *  valueate: 5
 * }
 */
const getListLocationByRate = (params) =>
  fetchJSON(`${end_point}/by-valueate`, params);
export {
  createLocation,
  deleteLocation,
  getListLocation,
  getDetailLocation,
  updateLocation,
  updateImageLocation,
  getListLocationByRate,
};
