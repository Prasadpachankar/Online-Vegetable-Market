import axios from 'axios';
const BASE_URL = "http://localhost:8080/api";

class AllServices {

    /*-----------------------Product services------------------------- */

    // getAllProducts() {
    //     return axios.get(USER_API_BASE_URL + "/fetch-all-products");
    // }
    getProductById(id) {
        return axios.get(BASE_URL + "/product/get-product-by-id/" + id);
    }
    getAllProducts(){
        return axios.get(BASE_URL+ "/product/fetch-all-product");
    }
    userUpdate(productId){
        return axios.post(BASE_URL+ "/update-user-details",productId);
    }
    getDetailsOfLoggedInUser(productId){
        return axios.post(BASE_URL+ "/get-user-by-id",productId);
    }




    /*-----------------------Category services------------------------- */
    getAllCategories(){
        return axios.get(BASE_URL+ "/category/fetch-all-product");
    }

    getAllProductsByCategoryId(catId){
        return axios.get(BASE_URL+ "/category/get-cat-by-id");
    }






    /*-----------------------Order services------------------------- */

    addOrder(totalPrice, userId) {
        return axios.get(BASE_URL + '/order/add-order/' + userId + '/price/' + totalPrice );
    }
    // @GetMapping("/order/add-order/{userId}/price/{totalPrice}/time-slot/{timeSlot}")
    addOrderDetails(userId, orderId) {
        return axios.get(BASE_URL + '/order/order-details/' + userId + '/' + orderId);
    }







    /*-----------------------Payment services------------------------- */
  

    addPaymentDetails(codPayment) {
        return axios.post(BASE_URL + '/payment/cod-payment', codPayment);
    }
    addCardDetails(cardPayment) {
        return axios.post(BASE_URL + '/payment/card-payment', cardPayment);
    }







    /*-------------------------Cart Service --------------------------0 */

    updateCartUserId(userId){
        return axios.put(BASE_URL+ "/category/fetch-all-product");
    }

    addProductToCart(productCartId){
        return axios.post(BASE_URL + "/cart/add-to-cart", productCartId);
    }

    loadCart(id) {
        console.log(id)
        return axios.get(BASE_URL + "/cart/load-cart-user-id/" + id);
    } 

    getCartByUserId(id) {
        return axios.get(BASE_URL + "/cart/get-cart-user-id/" + id);
    }

    removeFromRent(rentId) {
        return axios.delete(BASE_URL + "/cart/remove-from-rent/" + rentId)
    }

}

export default new  AllServices();
