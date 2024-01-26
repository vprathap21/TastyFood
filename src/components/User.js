import { useState } from "react";
const User = ({name}) => {
    const [count] = useState(0);
    const [count2] = useState(2);
    return (
        <div className="User">
            <h1>count : {count}</h1>
            <h1>count2 : {count2}</h1>
            <h1>name : {name}</h1>
            <h2>location : chennai</h2>
            <h3>contact : @pratahp_twts</h3>
        </div>
    )
}
export default User;