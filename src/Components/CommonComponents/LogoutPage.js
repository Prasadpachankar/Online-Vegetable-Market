import React,{useEffect} from 'react';

const LogoutPage = () => {

    const LogoutPage=()=>{
        window.localStorage.removeItem("status");
        window.localStorage.removeItem("user_id");
        window.localStorage.removeItem("user_name");
        window.localStorage.removeItem("user_role");
        window.localStorage.removeItem("user_fname");
        window.localStorage.removeItem("user_lname");
        window.localStorage.removeItem("user_email");
        window.localStorage.removeItem("user_dob");
        window.localStorage.removeItem("user_phone");
        window.localStorage.removeItem("user_image");
        window.localStorage.removeItem("add");
        window.localStorage.removeItem("user_idNum");
        window.localStorage.removeItem("total_price");
        window.localStorage.removeItem("cart_size");
        window.localStorage.removeItem("orderId");
        
        alert("Sign ou successfully ! take care........")
        this.props.history.push('/');
    }
    useEffect(() => {
        LogoutPage();
    }, [])


    return (
        <div>
            
        </div>
    );
}

export default LogoutPage;
