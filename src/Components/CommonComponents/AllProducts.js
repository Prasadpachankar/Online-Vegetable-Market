

import React, { useEffect, useState } from 'react'
import AllServices from '../../Services/AllServices';

function AllProducts(props) {
    const [product, setProduct] = useState([]);
    const [categories, setCategories] = useState([]);

    const getAllCategories = () => {
        AllServices.getAllCategories().then((res) => {
            setCategories(res.data.result);
            console.log(JSON.stringify(categories));
        })
    }

    const getAllProducts = () => {
        AllServices.getAllProducts().then((res) => {
            setProduct(res.data.result);
            console.log(JSON.stringify(product));
        })
    }
    const viewProduct = (id, productName) => {
        props.history.push(`show-product-details/${id}/${productName}`);
    }
    const buyNow = () => {
        props.history.push(`/rent-line`);
    }

    const addToRent = (id, productName) => {
        let equipmentCartId = {
            userId: JSON.parse(window.localStorage.getItem("user_id")),
            equipmentId: id
        };
        AllServices.addProductToCart(equipmentCartId)
            .then((res) => {
                alert(res.data.message);
                res.data.result !== null && JSON.stringify(window.localStorage.setItem("cart_size", JSON.parse(window.localStorage.getItem("cart_size")) + 1));
            });
        setInterval(() => { window.location.reload() }, 1000);
        // window.location.reload();
    }

    useEffect(() => {
        getAllCategories();
        getAllProducts();
    }, [])
    return (
        <div>
            <div className="row ml-2 mt-2 mb-2 mr-2 ">
                <div className="col mt-0">
                    <div className="card-mb-3 mt-0 content">
                        <div style={{ backgroundColor: "lightgrey" }}>
                            <br />
                            <h2 className="text-center">All Avialable Product</h2>
                            <hr />
                        </div>

                        <div className="card-body h-100">
                            <div className="row row-cols-1 row-cols-md-3 g-4 ">
                                {
                                    product.map(product =>
                                        <div key={product.id}>
                                            <div className="col">
                                                <div className="card border border-dark mb-4">
                                                    <button className="btn btn-outline-secondary custom-btn ml-2 mr-2 mt-2 mb-0" onClick={() => viewProduct(product.id, product.productName)} >
                                                        <div className="text-center">
                                                            <img className="card-img-top float-center " src={product.image} alt="..." style={{ height: "300px" }} />
                                                        </div>
                                                        <div class="card-body">
                                                            <h4 className="card-title text-center">{product.productName}</h4>
                                                            <h5 className="card-title text-center text-danger"><strike><i class="fas fa-rupee-sign"></i>{product.pricePerKg}</strike></h5>
                                                            <h5 className="card-title text-center btn btn-success btn-md" style={{ height: "40px", borderRadius: "70px", paddingRight: "30px", paddingLeft: "30px" }}>{product.offerDiscount} %</h5>
                                                            <h5 className="card-title text-center"><i class="fas fa-rupee-sign"></i>{product.finalPrice} <i class="fas fa-calendar-day"></i></h5>

                                                        </div>
                                                    </button>
                                                    {(JSON.parse(window.localStorage.getItem("cart_size")) > 0) && <button className="btn btn-outline-info custom-btn btn-lg ml-2 mr-2 mt-2 mb-2 h-120" onClick={buyNow} >Buy Now <i class="fas fa-arrow-circle-right"></i></button>}
                                                    <button className="btn btn-outline-success custom-btn btn-lg ml-2 mr-2 mt-2 mb-2 h-120" onClick={() => addToRent(product.id, product.productName)} ><i class="fas fa-cart-plus"></i> | Add To Rent</button>
                                                    <button className="btn btn-outline-info custom-btn btn-lg ml-2 mr-2 mt-0 mb-2" onClick={() => viewProduct(product.id, product.productName)}><i class="fas fa-info-circle"></i> | View</button>
                                                </div>
                                            </div>
                                            <hr />
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

export default AllProducts



