//export all http endpoint here
//Backend
export const ENP_LOGIN = "auth/sign-in";
export const ENP_REGISTER = "auth/sign-up";
export const ENP_REFRESH_TOKEN = "auth/refresh";
export const ENP_UPDATE_USER_INFO = "user";
export const ENP_CHANGE_USER_PASSWORD = "user/changepassword";

export const ENP_ADD_ADDRESS = "address";
export const ENP_CHANGE_ADDRESS = "address/";

export const ENP_GET_PRODUCT = "product/";
export const ENP_GET_PRODUCT_BY_LIST_ID = "product/getproductbylistid";

export const ENP_GET_ALL_CATEGORIES = "category";
export const ENP_GET_PRODUCT_BY_CATEGORY = "category/";

export const ENP_CART = "cart/";
export const ENP_ORDER = "order/";

//API VietNam location
export const BASE_API_LOCATION_VN_URL = "https://vapi.vnappmob.com/api/";
export const ENP_PROVINCE = "province/";
export const ENP_DISTRICT = "province/district/";
export const ENP_WARD = "province/ward/";

export const ENP_TOP_PRODUCT = (pageSize, page) =>
	`top?pageSize=${pageSize}&page=${page}`;

export const ENP_CREATE_ORDER_CHATBOT = "order/chatbot-order"
