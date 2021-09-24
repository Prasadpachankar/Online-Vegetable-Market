import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import UserServices from '../../Services/UserServices';


const UserProfile = (props) => {

    const [userProfile, setUserProfile] = useState({
        firstName: "",
        lastName: "",
        email: "",
        idNumber: "",
        phoneNumber: "",
        dateOfBirth: "",
        image: "",
        message: "",
        uploadFile: null,
    });

    const onChange = (event) => {
        const { name, value } = event.target;
        setUserProfile((preValue) => {
            return {
                ...preValue,
                [name]: value,
            };
        })
    }

    const changeImageHandler = (event) => {
        const formData = new FormData();
        formData.append('file', event.target.files[0]);
        UserServices.fileUpload(formData).then(res => {
            res.data.result != null && setUserProfile((preValue) => {
                return {
                    ...preValue,
                    ['image']: res.data,
                };
            })
            console.log(res.data.result);
        });
    }

    const registerUser = (e) => {
        e.preventDefault()
        let saveUser = {
            userId: window.localStorage.getItem("user_id"),
            firstName: userProfile.firstName,
            lastName: userProfile.lastName,
            dateOfBirth: userProfile.dateOfBirth,
            phoneNumber: userProfile.phoneNumber,
            email: userProfile.email,
            idNumber: userProfile.idNumber,
            image: userProfile.image,
        };
        UserServices.userProfile(saveUser).then((res) => {
            res.data != null && alert("SignUp successfully");
            let user = res.data;
            user != null && props.history.push('/user-profile');
            user !== null && setUserProfile({
                // id : user.id,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                dateOfBirth: user.dateOfBirth,
                phoneNumber: user.phoneNumber,
                image: user.image,
                idNumber: user.idNumber,
                message: '',
            });
            user != null && window.localStorage.setItem("user_fname", user.firstName);
            user != null && window.localStorage.setItem("user_lname", user.lastName);
            user != null && window.localStorage.setItem("user_email", user.email);
            user != null && window.localStorage.setItem("user_dob", user.dateOfBirth);
            user != null && window.localStorage.setItem("user_phone", user.phoneNumber);
            user != null && window.localStorage.setItem("user_image", user.image);
            user != null && window.localStorage.setItem("user_idNum", user.idNumber);
            if (res.data === null) {
                alert("Updation of profile is failed...");
                setUserProfile({
                    firstName: "", lastName: "", dateOfBirth: "", phoneNumber: "", email: "", image: "", idNumber: "",
                });
                props.history.push("/user-profile");
            }
            else {
                props.history.push("/login-page");
            }
        })
    };
    const cancel = () => {
        props.history.push('/home')
    }
    return (
        <div>
            <div className="row ml-2 mt-2 mb-2 mr-2 ">

                <div className="col card img-rounded mt-1">
                    <div className="row" >
                        <div className="col-md-4" style={{ marginLeft: "-14px", marginRight: "-14px" }}>
                            <div className="cart text-center rounded sidebar " >
                                <div className="card-body">
                                    <div className="mt-3">
                                        <img
                                            src=""
                                            alt="profile-img"
                                            className="rounded-circle"
                                            style={{ width: "100%" }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col rounded content" >
                            <div className="card-header">
                                <h2 className="text-center" >User Profile</h2>
                            </div>
                            <div className="card-body">
                                <img style={{ width: "190px" }}
                                    src={window.localStorage.getItem("user_image")}
                                    alt={userProfile.image}
                                    className="profile-img-card"
                                />
                                <div className="form">
                                    <div className="row mb-3">
                                        <label className="col-sm-4 col-form-label col-form-label-lg">Choose images</label>
                                        <div className="col-sm-8">
                                            <input className="form-control-lg" type="file" onChange={changeImageHandler} />
                                        </div>
                                    </div>
                                    <div class="row mb-4" >
                                        <label className="col-sm-3 col-form-label col-form-label-lg">First Name</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="firstName"
                                                value={userProfile.firstName}
                                                onChange={onChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label className="col-sm-3 col-form-label col-form-label-lg">Last Name</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="lastName"
                                                value={userProfile.lastName}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label className="col-sm-3 col-form-label col-form-label-lg">Date Of Birth</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="date"
                                                className="form-control form-control-lg"
                                                name="dateOfBirth"
                                                value={userProfile.dateOfBirth}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label className="col-sm-3 col-form-label col-form-label-lg">Phone Number</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="phoneNumber"
                                                value={userProfile.phoneNumber}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label className="col-sm-3 col-form-label col-form-label-lg">Email</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="email"
                                                className="form-control form-control-lg"
                                                name="email"
                                                value={userProfile.email}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div class="row mb-4">
                                        <label className="col-sm-3 col-form-label col-form-label-lg">Id Number</label>
                                        <div className="col-sm-9">
                                            <input
                                                type="text"
                                                className="form-control form-control-lg"
                                                name="idNumber"
                                                value={userProfile.idNumber}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="card-footer mb-3">
                                        <div className="float-end mt-2">
                                            <button className="btn btn-outline-success btn-block btn-lg" onClick={registerUser}>Continue <i class="fas fa-arrow-circle-right"></i></button>
                                        </div>
                                        <div className="float-end mt-2">
                                            <button className="btn btn-outline-danger btn-block btn-lg" onClick={cancel.bind(this)}><i class="fas fa-arrow-circle-left"></i>Cancel</button>
                                        </div>
                                        <div className="float-end mt-2">
                                            Already have an account? <Link to="/login">Login here </Link>
                                        </div>
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

export default UserProfile;
