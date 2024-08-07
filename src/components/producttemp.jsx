import React from "react";
import { IoArrowForwardCircle } from "react-icons/io5";

function Products() {
    return (

        <

            >
            <div className="prod-card">

                <img src="https://cycle.in/cdn/shop/files/NaivedyaCupSambrani4_bb5f1956-1bae-4fc7-80eb-0a47acf63667.jpg?crop=center&height=420&v=1716793139&width=420" alt="" className="prod-img" />

                <div className="py-4 px-4">


                    <p className="c-prodname">
                        Naivedya Cup Sambrani
                    </p>

                    <p className="c-flavour">
                        Pinapple Flavoured
                    </p>

                    <div className="c-priccont grid grid-cols-2">

                        <p className="c-price">
                            Rs. 278.00
                        </p>

                        <p className="c-mrp">
                            MRP. 278.00
                        </p>
                    </div>

                    <button className="c-prodbtn px-4 py-1">
                        Buy Now <IoArrowForwardCircle className="c-arrow" />
                    </button>


                </div>
            </div>

        </>
    )
}

export default Products;