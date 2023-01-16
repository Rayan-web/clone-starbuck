import React, { useState } from "react";
import "../../styles/style.css";
function FooterModal() {
  const [modal, setModal] = useState(false);
  return (
    <div className="flex absolute  bg-black w-full h-full overlay ">
      <div className="m-auto bg-white ">
        <h1>Please select a store before continuing to the cart.</h1>
        <div className="flex">
          <button>Cancel</button>
          <button>Select Store</button>
        </div>
      </div>
    </div>
  );
}

export default FooterModal;
