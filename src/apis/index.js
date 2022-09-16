const URL_API = 'https://airbnb.cybersoft.edu.vn/api'
const TOKEN_CLASS = {tokenByClass: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAyNSIsIkhldEhhblN0cmluZyI6IjE2LzEyLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY3MTE0ODgwMDAwMCIsIm5iZiI6MTY0MTU3NDgwMCwiZXhwIjoxNjcxMjk2NDAwfQ.cB7cdIfS0TKI1Yx_WRS-tEOt5K5yf3QJCot63SYEOHo'}
export {URL_API, TOKEN_CLASS}
// Export API
export * from './manageLocation'
export * from './manageRentalRoom'
export * from './manageReview'
export * from './manageTicket'
export * from './manageUser'
export * from './verifyUser'