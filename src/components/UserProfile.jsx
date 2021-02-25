import React from "react";

/*
Props Object
{
    key: value
    name: "Gabe"
    favoriteShow: "Big Bang Theory",
    admin: true
}
*/

const userProfile = ({name, favoriteShow, admin}) => {
    let role = "";

    if (admin) {
        role = "admin";
    } else {
        role = "guest";
    }

    return (
        <div>
            <h1>
                <span className="badge bg-primary">{role}</span>My name is {name} and my favorite show is {favoriteShow}.
            </h1>
        </div>
    );
};

export default userProfile;