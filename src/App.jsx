import React from "react";
import UserProfile from "./components/UserProfile";

const App = () => {
    return (
        <div>
            <UserProfile name="Gabe" favoriteShow="The Big Bang Theory" admin={true} />
            <UserProfile name="Brad" favoriteShow="Friends" admin={false}/>
        </div>
    );
}

export default App;