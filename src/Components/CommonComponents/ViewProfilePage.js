import React, { useState, useEffect } from 'react';
import Image from './Images/food-market-basket.jpg'
import AuthenticationServices from './../../Services/AuthenticationServices';

const ViewProfilePage = (props) => {
    const [loginRequest, setLoginRequest] = useState({
        userName: "",
        password: "",
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setLoginRequest((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    const login = (e) => {
        console.log(JSON.stringify(loginRequest));
        AuthenticationServices.userLogin(loginRequest).then(res => {
            console.log(JSON.stringify(res.data));
        })
    }

    return (
        <div>
        <div className="col-md-6 offset-md-3 mt-4">
            <div className='row'>
                <div className="col-md-4 mr-n4 ">
                    <div className="card h-100 w-100">
                        <img className='h-100 w-100' src={Image} alt="Image"></img>
                    </div>
                </div>
                <div className="col">
                    <div className='card'>
                        <div className='card-header'>
                            <h3 className='text-center'>User Profile</h3>
                        </div>
                        <div className="card-body">
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                        name='FirstName'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="First Name"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-user"></i></span>
                                    </div>
                                    <input type="text"
                                        name='LastName'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="Last Name"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-calendar-alt"></i></span>
                                    </div>
                                    <input type="date"
                                        name='date_of_birth'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="date of birth"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-phone-square"></i></span>
                                    </div>
                                    <input type="number"
                                        name='ContactNumber'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="Contact Number"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-envelope-square"></i></span>
                                    </div>
                                    <input type="email"
                                        name='email'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="email"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-images"></i></span>
                                    </div>
                                    <input type="text"
                                        name='userName'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="Image"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-id-badge"></i></span>
                                    </div>
                                    <input type="text"
                                        name='User_Id'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="User_Id"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            <div className="row mb-2 m-3">
                                
                                <div class="input-group input-group-lg">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-address-card"></i></span>
                                    </div>
                                    <input type="text"
                                        name='Address'
                                        class="form-control"
                                        id="validationDefaultUsername"
                                        placeholder="Address"
                                        value={loginRequest.userName}
                                        onChange={onChange} />
                                </div>
                            </div>
                            
                           
                        </div>
                        <div className='card-header'>
                            <div className="mr-1">
                                <div className='col '>
                                    <button className=' btn btn-outline-primary btn-lg btn-block' onClick={login}>Login</button>
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

export default ViewProfilePage;
