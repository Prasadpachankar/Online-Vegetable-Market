import React, { useEffect, useState } from 'react'
import AllServices from '../../Services/AllServices';
function ProductUnderCategory(props) {

    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryId, setCategoryId] = useState(0);
    const [message, setMessage] = useState("");

   
    const buyNow= ()=> {
        props.history.push(`/cart-line`);
    }


    const addToCart = (product) => {
        let productCartId = {
            userId: JSON.parse(window.localStorage.getItem("user_id")),
            productId: product.id
        };
        AllServices.addProductToCart(productCartId)
            .then((res) => {
                alert("");
                res.data !== null && JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1));
                setMessage(res.data.message)
            });
        console.log(message);
        setInterval(()=>{window.location.reload()}, 1000);
    }

    const viewProduct = (id, productName) => {
        props.history.push(`/show-products-details/${id}/${productName}`);
    }
    

    const getAllCategories = () => {
        AllServices.getAllCategories().then((res) => {
            setCategories(res.data.result);
            console.log(JSON.stringify(categories));
        })
    }

    const getAllProductsByCategoryId = () => {
        let catId = props.match.params.catId;//window.localStorage.getItem("cat_id")
        AllServices.getAllProductsByCategoryId(catId).then((res) => {
            setProducts(res.data);
            console.log(JSON.stringify(products));
        })
    }

    useEffect(() => {
        getAllCategories();
        getAllProductsByCategoryId();
    }, [])
    return (
        <div>
            <div className="row ml-2 mt-2 mb-2 mr-2 ">
                <div className="col mt-0">
                    <div className="card-mb-3 mt-0 content">
                        <div style={{ backgroundColor: "lightgrey" }}>
                            <br />
                            <h2 className="text-center">Products in, {props.match.params.catName}</h2>
                            <hr />
                        </div>

                        <div className="card-body ">
                            <div className="row row-cols-1 row-cols-md-3 g-4  ">
                                {
                                    products !== null && products.map(product =>
                                        <div key={product.id}>
                                            <div className="col">
                                                <div className="card border border-dark mb-3 " style={{ backgroundColor: "lightyellow" }}>
                                                    <button className="btn btn-outline-secondary custom-btn ml-2 mr-2 mt-2 mb-0" onClick={() => viewProduct(product.id, product.productName)} >
                                                        <div className="text-center">
                                                            <img className="card-img-top float-center " src={product.image} alt="..." style={{ height: "300px" }} />
                                                        </div>
                                                        <div class="card-body">
                                                            <h4 className="card-title text-center">{product.productName}</h4>
                                                            <h4 className="card-title text-center">{product.brand}</h4>
                                                            <h5 className="card-title text-center text-danger"><strike>{product.rentPerDay} Rs.</strike></h5>
                                                            <h5 className="card-title text-center btn btn-success btn-md" style={{ height: "40px", borderRadius: "70px",paddingRight:"30px",paddingLeft:"30px" }}>{product.offerDiscount} %</h5>
                                                            <h5 className="card-title text-center">{product.finalRent} Rs.</h5>
                                                            <h5 className="card-title text-center">{parseFloat(product.finalRent / 24).toFixed(2)} per hrs</h5>
                                      
                                                        </div>
                                                    </button>
                                                     {(JSON.parse(window.localStorage.getItem("cart_size"))> 0 ) && <button className="btn btn-outline-info custom-btn btn-lg ml-2 mr-2 mt-2 mb-2 h-120" onClick={buyNow} >Buy Now <i class="fas fa-arrow-circle-right"></i></button>}
                                                    <button className="btn btn-outline-success custom-btn btn-lg ml-2 mr-2 mt-2 mb-2 h-120" onClick={() => addToCart(product)}><i class="fas fa-cart-plus"></i>| Add To Cart</button>
                                                    <button className="btn btn-outline-info custom-btn btn-lg ml-2 mr-2 mt-0 mb-2" onClick={() => viewProduct(product.id, product.productName)}><i class="fas fa-info-circle"></i> View</button>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductUnderCategory