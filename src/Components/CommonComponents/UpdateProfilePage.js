import React, { useState, useEffect } from 'react';
import Image from './Images/food-market-basket.jpg'
import AuthenticationServices from './../../Services/AuthenticationServices';
import UserServices from '../../Services/UserServices';

const UpdateProfilePage = (props) => {
    const [userDetails, setUserDetails] = useState({
        firstName: "",
        lastName: "",
        dateOfBirth: "",
        contactNumber: "",
        email: "",
        image: "",
    });

    useEffect(() => {
        UserServices.getDetailsOfLoggedInUser(localStorage.getItem('user_id')).then(res => {
            setUserDetails(res.data);
        })
    }, []);

    const onChange = (event) => {
        const { name, value } = event.target;
        setUserDetails((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    const login = (e) => {
        console.log(JSON.stringify(userDetails));
        AuthenticationServices.userUpdate(userDetails).then(res => {
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
                                <h3 className='text-center'>Update Profile</h3>
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
                                            value={userDetails.userName}
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
                                            value={userDetails.userName}
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
                                            value={userDetails.userName}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">

                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="fas fa-phone-square"></i> </span>
                                        </div>
                                        <input type="number"
                                            name='ContactNumber'
                                            class="form-control"
                                            id="validationDefaultUsername"
                                            placeholder="Contact Number"
                                            value={userDetails.userName}
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
                                            value={userDetails.userName}
                                            onChange={onChange} />
                                    </div>
                                </div>
                                <div className="row mb-2 m-3">

                                    <div class="input-group input-group-lg">
                                        <div class="input-group-prepend">
                                            <span class="input-group-text" id="inputGroupPrepend2"><i class="far fa-images"></i></span>
                                        </div>
                                        <input type="text"
                                            name='image'
                                            class="form-control"
                                            id="validationDefaultUsername"
                                            placeholder="Image"
                                            value={userDetails.userName}
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
                                            value={userDetails.userName}
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
                                            value={userDetails.userName}
                                            onChange={onChange} />
                                    </div>
                                </div>


                            </div>
                            <div className='card-header'>
                                <div className="mr-1">
                                    <div className='col '>
                                        <button className=' btn btn-outline-primary btn-lg btn-block' onClick={login}>Save Update</button>
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

export default UpdateProfilePage;
