import React from "react";

/*
Props Object
{
    key: value
    name: "Gabe"
    favoriteShow: "Big Bang Theory"
}
*/

const userProfile = (props) => {
    return (
        <div>
            <h1>My name is {props.name} and my favorite show is {props.favoriteShow}.</h1>
        </div>
    );
};

export default userProfile;