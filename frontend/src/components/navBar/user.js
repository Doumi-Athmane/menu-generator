import React from "react";
import UserImage from "../../assets/user.svg"
import './user.css'

export default function User(props) {
    return (
        <div className="user">
            <img src={UserImage} alt="user" />
            <h6>{props.name}</h6>
        </div>
    )
}