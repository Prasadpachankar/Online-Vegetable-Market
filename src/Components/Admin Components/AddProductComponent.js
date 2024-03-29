import React, { useState,useEffect } from 'react';
import CategoryServices from '../../Services/Admin Services/CategoryServices';
import ProductServices from '../../Services/Admin Services/ProductServices';


const AddProductComponent = (props) => {

    const [id, setId] = useState(props.match.params.catId);
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState({
        productName: '',
        availableQuantity: '',
        pricePerKg: '',
        discountOffer: '',
        finalPrice: '',
        description: '',
        image: '',
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setProduct((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    const changeImageUrlHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        ProductServices.fileUpload(formData).then(res => {
            res.data.result != null && setProduct((preValue) => {
                return {
                    ...preValue,
                    ['image']: res.data,
                };
            })
            console.log(res.data.result);
        });
    }

    const changeFinalPriceCalculatetor = (discount, price) => {
        let tempPrice = parseFloat((price - ((price * discount) / 100))).toFixed(2)
        setProduct((preValue) => {
            return {
                ...preValue,
                ['finalPrice']: tempPrice,
            };
        });
    }
    const changeDiscountOfferHandler = (event) => {
        setProduct((preValue) => {
            return {
                ...preValue,
                ['discountOffer']: event.target.value,
            };
        });
        changeFinalPriceCalculatetor(event.target.value, product.pricePerKg)
    }


    const saveProduct = (e) => {
        e.preventDefault();

        let saveProduct = {
            productName: product.productName,
            availableQuantity: product.availableQuantity,
            pricePerKg: product.pricePerKg,
            discountOffer: product.discountOffer,
            finalPrice: product.finalPrice,
            description: product.description,
            image: product.image,
        };
        console.log('saveProduct => ' + JSON.stringify(saveProduct))
        ProductServices.AddProductByCategory(id, saveProduct).then(res => {
            res.data.result !== null && alert(res.data.message + "😃");
            res.data.result === null && alert(res.data.message + "🙃");
            props.history.push(`/product-under-category/${id}`)
        });
    }

    const getAllCategories = () => {
        console.log(id)
        CategoryServices.getAllCategories().then((res) => {
          console.log(JSON.stringify(res.data));
          setCategories(res.data);
          console.log(JSON.stringify(categories));
        })
      }
    useEffect(() => {
        getAllCategories();
    }, []);
    return (
        <div>
            <div className="col-md-6 offset-md-3 mt-4">
                <div className='row'>
                    <div className="col-md-4 mr-n4 ">
                        <div className="card h-100 w-100">
                            <img className='h-100 w-100' alt="Image"></img>
                        </div>
                    </div>
                    <div className="col">
                        <div className='card'>
                            <div className='card-header'>
                                <h3 className='text-center'>Add Product</h3>
                            </div>
                            <div className="card-body">
                                <div className="row mb-2 m-3">

                                    <div className="row mb-2 m-3">
                                        <div class="input-group input-group-lg">
                                            <div class="input-group-prepend">
                                                <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-images"></i></span>
                                            </div>
                                            <input type="file"
                                                name='image'
                                                placeholder="Image"
                                                onChange={changeImageUrlHandler}
                                            />
                                        </div>
                                    </div>
                                    {id === "undefined" && <div className="row mb-3 mt-4">
                                                <label className="col-sm-4 col-form-label col-form-label-lg"><i class="far fa-image"></i> Choose Category :</label>
                                                <div className="col-sm-8">
                                                    <select className="form-control form-control-lg" name="id" value={id} onChange={(e)=>{setId(e.target.value)}} placeholder="">
                                                        <option value="">Select Category</option>
                                                        {categories.map(category =>
                                                            <option key={category.id} value={category.id}>{category.categoryName}</option>
                                                        )}
                                                    </select>

                                                </div>
                                            </div>}
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fab fa-product-hunt"></i></span>
                                        </div>
                                        <input type="text"
                                            name='productName'
                                            value={product.productName}
                                            class="form-control"
                                            placeholder="Product Name"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-user"></i></span>
                                        </div>
                                        <input type="text"
                                            name="availableQuantity"
                                            value={product.availableQuantity}
                                            class="form-control"
                                            placeholder="Available Quantity"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-rupee-sign"></i></span>
                                        </div>
                                        <input type="number"
                                            name='pricePerKg'
                                            value={product.pricePerKg}
                                            class="form-control"
                                            placeholder="Price per kg"
                                            onChange={onChange}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-percent"></i> </span>
                                        </div>
                                        <input type="text"
                                            name='discountOffer'
                                            value={product.discountOffer}
                                            class="form-control"
                                            placeholder="Discount"
                                            onChange={changeDiscountOfferHandler}
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-rupee-sign"></i></span>
                                        </div>
                                        <input type="number"
                                            name='finalPrice'
                                            value={product.finalPrice}
                                            class="form-control"
                                            placeholder="Final price"
                                            readOnly
                                        />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">
                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-audio-description"></i></span>
                                        </div>
                                        <input type="text"
                                            name='description'
                                            value={product.description}
                                            class="form-control"
                                            placeholder="Description"
                                            onChange={onChange} />
                                    </div>
                                </div>
                            </div>
                            <div className='card-header'>
                                <div className="mr-1">
                                    <div className='col '>
                                        <button className=' btn btn-outline-primary btn-lg btn-block' onClick={saveProduct}>Save Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}

export default AddProductComponent;
