import { deleteJSON, fetchJSON, postJSON, putJSON } from "./fetch";
const end_point = "rooms";

/**
 * API 16 - Tạo phòng cho thuê
 * @example
 * const data = {
 *  name: "Phòng siêu cấp vip pro",
 *  guests: 2,
 *  bedRoom: 2,
 *  bath: 3,
 *  description: "Khách sạn này thật tuyệt vời",
 *  price: 100000,
 *  elevator: false,
 *  hotTub: true,
 *  pool: true
 *  indoorFireplace: false,
 *  dryer: true,
 *  gym: false,
 *  kitchen: true,
 *  wifi: true,
 *  heating: true,
 *  cableTV: true,
 *  locationId: "617af2e4da03f39db76165fe",
 * }
 */

const createRentalRoom = (data) => postJSON(`${end_point}`, data);

/**
 * API 17 - Lấy danh sách phòng cho thuê theo vị trí
 * @example
 * const data = {
 *  locationId: "60e2a99366f6d30f8cfc67bc",
 *  skip: 0,
 *  limit: 2,
 * }
 */
const getListRentalRoomByLocation = (params) =>
  fetchJSON(`${end_point}`, params);

/**
 * API 18 - Lấy thông tin chi tiết phòng cho thuê
 * @ID string - '6165513adc423b001dd9c044'
 */
const getDetailRentalRoom = (id) => fetchJSON(`${end_point}/${id}`);

/**
 * API 19 - Cập nhật thông tin phòng cho thuê
 * @ID string - '6165513adc423b001dd9c044'
 * @example
 * const data = {
 *  name: "Khách Sạn Hồng Hào",
 *  guests: 2,
 *  bedRoom: 2,
 *  bath: 3,
 *  description: "Khách Sạn này dở ẹt",
 *  price: 100000,
 *  elevator: false,
 *  hotTub: true,
 *  pool: true,
 *  indoorFireplace: false,
 *  dryer: true,
 *  gym: false,
 *  kitchen: true,
 *  wifi: true,
 *  heating: true,
 *  cableTV: true,
 *  locationId: "6098b6ca710a3d0500274de9"
 * }
 */
const updateRentalRoom = (id, data) => putJSON(`${end_point}/${id}`, data);

/**
 * API 20 - Xóa phòng cho thuê
 * @ID string - '6165513adc423b001dd9c044'
 */
const deleteRentalRoom = (id) => deleteJSON(`${end_point}/${id}`);

/**
 * API 21 - Đặt phòng cho thuê
 * @example
 * const data = {
 *  roomId = "6166562edc423b001dd9c0cf",
 *  checkIn = 2021-05-11T17:00:00.000+00:00,
 *  checkOut = 2021-05-15T17:00:00.000+00:00,
 * }
 */
const bookingRentalRoom = (data) => postJSON(`${end_point}/booking`, data);

/**
 * API 22 - Cập nhật hình ảnh phòng cho thuê
 * @ID string - '6165513adc423b001dd9c044'
 * @data room: binary
 */
const updateImageRentalRoom = (id, data) =>
  postJSON(`${end_point}/upload-image/${id}`, data);

export {
  createRentalRoom,
  getListRentalRoomByLocation,
  getDetailRentalRoom,
  updateRentalRoom,
  deleteRentalRoom,
  bookingRentalRoom,
  updateImageRentalRoom,
};
