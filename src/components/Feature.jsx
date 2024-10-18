import React, { useContext } from "react";
import Container from "./Container";
import { FaShoppingCart, FaRegHeart, FaSearchPlus } from "react-icons/fa";
import Slider from "react-slick";
import { apidata } from "./ContextApi";
import { Link } from "react-router-dom";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[105%] lg:right-0 right-0 z-40 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleRight className="inline-block lg:text-[20px] text-white" />
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[105%] lg:left-0] left-0 z-40 cursor-pointer"
      onClick={onClick}
    >
      <FaAngleLeft className="inline-block lg:text-[20px] text-white" />
    </div>
  );
}

const Feature = () => {
  let data = useContext(apidata);

  const settings = {
    dots: false,
    infinite: true,
    arrows: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive : [
        {
            breakpoint : 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
        },
    ]
  };
  return (
    <>
      <section className="lg:py-[70px] py-[40px] lg:px-0 px-3">
        <Container>
          <div className="flex justify-center">
            <h2 className="lg:text-[42px] text-[20px] font-joss font-bold lg:pb-[48px] pb-5">
              Featured Products
            </h2>
          </div>
          <Link to="/shop">
            <div className="">
              <Slider {...settings}>
                {data.map((item) => (
                  <div className="relative lg:!w-[93%] group w-full h-[500px]">
                    <div className="w-full h-[350px] bg-[#F6F7FB] flex justify-center items-center">
                      <img
                        className="h-[178px] w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out"
                        src={item.thumbnail}
                        alt=""
                      />
                    </div>
                    <div className="flex justify-center shadow-xl py-5 group-hover:bg-[#2F1AC4] duration-700 ease-in-out group-hover:text-white">
                      <div className="">
                        <h2 className="text-[18px] font-joss font-bold py-[10px] text-pink-600 group-hover:text-white duration-700 ease-in-out">
                          {item.title}
                        </h2>
                        <div className="flex gap-x-3 justify-center pb-[10px]">
                          <div className="w-[14px] h-[4px] bg-[#05E6B7] rounded-[10px]"></div>
                          <div className="w-[14px] h-[4px] bg-[#F701A8] rounded-[10px]"></div>
                          <div className="w-[14px] h-[4px] bg-[#00009D] rounded-[10px]"></div>
                        </div>
                        <h3 className="text-[18px] font-joss font-bold text-center">
                          Code - Y523201
                        </h3>
                        <h3 className="text-center text-[18px] font-joss font-bold ">
                          ${item.price}
                        </h3>
                      </div>
                      <div className="absolute flex top-[8%] left-[25px] gap-x-5 opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                        <div className="text-blue-400 text-[25px]">
                          <FaShoppingCart />
                        </div>
                        <div className="text-blue-400 text-[25px]">
                          <FaRegHeart />
                        </div>
                        <div className="text-blue-400 text-[25px]">
                          <FaSearchPlus />
                        </div>
                      </div>
                      <button className="text-[18px] font-joss font-medium py-3 px-4 bg-[#08D15F] text-white absolute bottom-[35%] left-[30%] opacity-0 group-hover:opacity-100 duration-700 ease-in-out">
                        View Details
                      </button>
                    </div>
                  </div>
                ))}
              </Slider>
            </div>
          </Link>
        </Container>
      </section>
    </>
  );
};

export default Feature;
