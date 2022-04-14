import React from "react"; 
import {  fullAdress} from "../../Data"
function Adress() {
    return (

        <div>
            <h3>{ fullAdress.adress}  </h3> 
            <h3> {fullAdress.city} </h3>
            <h3> {fullAdress.zipcode}</h3>

        </div>
    );
}

export default Adress;