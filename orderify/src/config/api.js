// const API_BASE_URL = 'https://orderify-qebp.onrender.com';
const API_BASE_URL = 'http://localhost:3000';

export const API_ENDPOINTS = {
    LOGIN: `${API_BASE_URL}/login`,
    REGISTER: `${API_BASE_URL}/register`,
    PRODUCT: `${API_BASE_URL}/product/pagging`,
    PRODUCT_ADD: `${API_BASE_URL}/product`,
    CART: `${API_BASE_URL}/cart`,

    // Order API
    ORDER: `${API_BASE_URL}/order`,
    USER_ORDER: `${API_BASE_URL}/order-history`,         // User Order Details

    // User Edit Profile
    USER: `${API_BASE_URL}/user`,         // Profile Edit

    // Time
    TIMER: `${API_BASE_URL}/timer`,         // Set and get time
};