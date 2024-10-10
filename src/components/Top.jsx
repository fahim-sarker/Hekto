import React, { useContext } from 'react'
import Container from './Container'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { apidata } from './ContextApi';
import { FaAngleLeft,FaAngleRight  } from "react-icons/fa6";


function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[105%] lg:right-0 right-0 z-40 cursor-pointer' onClick={onClick}><FaAngleRight className='inline-block lg:text-[20px] text-white'/></div>
    );
}
function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div className='lg:h-[50px] lg:w-[50px] w-[30px] h-[30px] bg-[#FB2E86] rounded-full text-center flex justify-center items-center absolute top-[105%] lg:left-0] left-0 z-40 cursor-pointer' onClick={onClick}><FaAngleLeft className='inline-block lg:text-[20px] text-white'/></div>
    );
}


const Top = () => {

    let data = useContext(apidata)

    let top = data.filter((product) => product.id >= 113 && product.id <= 116)
    let watch = data.filter((product) => product.id >= 93 && product.id <= 96)
    let shoes = data.filter((product) => product.id >= 89 && product.id <= 92)



    const settings = {
        dots: false,
        infinite: true,
        arrows: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div className='py-120px]'>
            <Container>
                <div className="flex justify-center">
                    <h2 className='text-[42px] text-[navy] font-joss font-bold pb-[48px]'>Top Categories</h2>
                </div>
                <div className="">
                    <Slider {...settings}>
                        {top.map((toproducts) => (
                            <div className="relative !w-[93%] group h-[500px] ">
                                <div className="w-[350px] rounded-full h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg  group-hover:shadow-[blue] duration-700 ease-in-out">
                                    <img className='h-[178px] w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={toproducts.thumbnail} alt="" />
                                </div>
                                <div className="flex justify-center py-5">
                                    <div className="">
                                        <h2 className='text-[20px] font-joss font-bold py-[10px] capitalize'>{toproducts.title}</h2>
                                        <h3 className='text-center text-[18px] font-joss font-bold '>${toproducts.price}</h3>
                                    </div>
                                    <button className='text-[18px] font-joss font-medium py-3 px-4 bg-[#08D15F] text-white absolute bottom-[35%] left-[30%] opacity-0 group-hover:opacity-100 duration-700 ease-in-out'><Link to="/shop">View Shop
                                    </Link></button>
                                </div>
                            </div>
                        ))}
                        {watch.map((toproducts) => (
                            <div className="relative !w-[93%] group h-[500px] ">
                                <div className="w-[350px] rounded-full h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg  group-hover:shadow-[blue] duration-700 ease-in-out">
                                    <img className='h-[178px] w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={toproducts.thumbnail} alt="" />
                                </div>
                                <div className="flex justify-center py-5">
                                    <div className="">
                                        <h2 className='text-[20px] font-joss font-bold py-[10px] capitalize'>{toproducts.title}</h2>
                                        <h3 className='text-center text-[18px] font-joss font-bold '>${toproducts.price}</h3>
                                    </div>
                                    <button className='text-[18px] font-joss font-medium py-3 px-4 bg-[#08D15F] text-white absolute bottom-[35%] left-[30%] opacity-0 group-hover:opacity-100 duration-700 ease-in-out'><Link to="/shop">View Shop
                                    </Link></button>
                                </div>
                            </div>
                        ))}
                        {shoes.map((toproducts) => (
                            <div className="relative !w-[93%] group h-[500px] ">
                                <div className="w-[350px] rounded-full h-[350px] bg-[#F6F7FB] flex justify-center items-center group-hover:shadow-lg  group-hover:shadow-[blue] duration-700 ease-in-out">
                                    <img className='h-[178px] w-[178px] hover:scale-125 duration-700 cursor-pointer ease-in-out' src={toproducts.thumbnail} alt="" />
                                </div>
                                <div className="flex justify-center py-5">
                                    <div className="">
                                        <h2 className='text-[20px] font-joss font-bold py-[10px] capitalize'>{toproducts.title}</h2>
                                        <h3 className='text-center text-[18px] font-joss font-bold '>${toproducts.price}</h3>
                                    </div>
                                    <button className='text-[18px] font-joss font-medium py-3 px-4 bg-[#08D15F] text-white absolute bottom-[35%] left-[30%] opacity-0 group-hover:opacity-100 duration-700 ease-in-out'><Link to="/shop">View Shop
                                    </Link></button>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Top
