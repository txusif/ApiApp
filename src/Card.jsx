import React from "react";

function Card({ id, avatar, first_name, last_name, email }) {
    return (
        <div className="card">
            <div className="top">
                <h2 className="name">
                    {first_name} {last_name}
                </h2>
                <img className="circle-img" src={avatar} alt="avatar_img" />
            </div>
            <div className="bottom">
                <p className="info">User Id: {id}</p>
                <p className="info">Email: {email}</p>
            </div>
        </div>
    );
}

export default Card;
