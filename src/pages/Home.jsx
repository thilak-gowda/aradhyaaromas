import React from "react";
import Header from "../components/Header";
import { EmblaCarousel } from "../components/BannerSlider";
import Heading from "../components/heading";
import Products from "../components/producttemp";
import { IoArrowForwardCircle } from "react-icons/io5";

function Home() {
    return (
        <div>
            <Header />
            <EmblaCarousel />


            <section className="sec-spacing">
                <Heading
                    heading="BESTSELLERS"
                />
                <div className="ccontainer mx-auto lg:px-10 grid grid-cols-4 gap-7">
                    <div>
                        <Products />
                    </div>
                    <div>
                        <Products />
                    </div>
                    <div>
                        <Products />
                    </div>
                    <div>
                        <Products />
                    </div>

                    <div>
                        {/* <a href="">
                            View All <IoArrowForwardCircle className="c-arrow" />
                        </a> */}

                        <button class="button-86" role="button">
                            <a href="">
                                View All <IoArrowForwardCircle className="c-arrow" />
                            </a>
                        </button>

                    </div>

                </div>
            </section>



        </div>
    )
}

export default Home;