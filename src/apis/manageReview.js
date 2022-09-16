import { deleteJSON, fetchJSON, postJSON, putJSON } from "./fetch";
const end_point = "reviews";

/**
 * API 23 - Tạo một đánh giá
 * @ID string - "6165513adc423b001dd9c044"
 * @example
 * const data = {
 *  content: "Chỗ ở như qq",
 * }
 */
const createAReview = (id, data) => postJSON(`${end_point}?roomId=${id}`, data);

/**
 * API 24 - Lấy danh sách đánh giá theo phòng
 * @example
 * const data = {
 *  roomId = "6165513adc423b001dd9c044"
 * }
 */
const getListReviews = (params) => fetchJSON(`${end_point}/byRoom`, params);

/**
 * API 25 - Xóa đánh giá
 * @ID string - "6284b67dfee2fc001cf517f8"
 */
const deleteReview = (id) => deleteJSON(`${end_point}/${id}`);

/**
 * API 26 - Lấy thông tin chi tiết 1 đánh giá
 * @ID string - "6284b67dfee2fc001cf517f8"
 */
const getDetailReview = (id) => fetchJSON(`${end_point}/${id}`);

/**
 * API 27 - Cập nhật thông tin đánh giá
 * @ID string - "6284b67dfee2fc001cf517f8"
 * @example
 * const data = {
 *  content: "Thật sự quá đỉnh",
 * }
 */
const updateReview = (id, data) => putJSON(`${end_point}/${id}`, data);

export {
  createAReview,
  getDetailReview,
  getListReviews,
  deleteReview,
  updateReview,
};
