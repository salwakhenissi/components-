import React from "react";
import { fullName } from "../../Data"
function FullName() {
    return (
        <div>
            <h3>{fullName.firstname}  </h3>
            <h3> {fullName.lastname}</h3>

        </div>

    );
}

export default FullName;