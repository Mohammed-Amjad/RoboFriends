import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {
    const robotArr = robots.map(
        (user, i) => {
            return  <Card key={i} id={robots[i].id} name={user.name} email ={user.email}/>
        }
    );
    return robotArr;
}

export default CardList;