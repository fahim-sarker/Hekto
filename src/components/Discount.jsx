import React, { useContext } from "react";
import Container from "./Container";
import { Tabs } from "@ark-ui/react";
import { IoMdCheckmark } from "react-icons/io";
import { apidata } from "./ContextApi";
import { Link } from "react-router-dom";

const Discount = () => {
  let data = useContext(apidata);

  let Discount = data.filter((product) => product.id == 124);
  let Oppo = data.filter((product) => product.id == 129);
  let Realme = data.filter((product) => product.id == 133);

  return (
    <div className="lg:py-[120px] py-10 lg:px-0 px-3">
      <Container>
        <div className="flex justify-center">
          <h2 className="lg:text-[42px] text-[25px] text-[navy] font-joss font-bold lg:pb-[48px]">
            Discount Item
          </h2>
        </div>
        <Tabs.Root defaultValue="react">
          <Tabs.List className="flex lg:gap-x-16 gap-x-5 justify-center lg:pb-14 pb-4">
            <Tabs.Trigger
              className="font-joss text-[20px] font-normal underline"
              value="react"
            >
              Apple
            </Tabs.Trigger>
            <Tabs.Trigger
              className="font-joss text-[20px] font-normal underline"
              value="vue"
            >
              Realme
            </Tabs.Trigger>
            <Tabs.Trigger
              className="font-joss text-[20px] font-normal underline"
              value="solid"
            >
              Samsung
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content value="react">
            {Discount.map((Discountdata) => (
              <div className="lg:flex justify-between">
                <div className="lg:w-[50%] w-full">
                  <h2 className="lg:text-[35px] text-[18px] font-joss font-medium text-[navy] pb-4">
                    20% Discount Of All Products
                  </h2>
                  <p className="text-[20px] font-joss font-medium text-pink-500 pb-5">
                    {Discountdata.title}
                  </p>
                  <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB] pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Clear lines and geomatric figures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-10 lg:text-start text-center">
                    <button className="lg:h-[60px] lg:w-[170px] h-[50px] w-[150px] rounded-sm bg-pink-600 text-white font-joss font-medium lg:text-[20px] text-[18px] cursor-pointer">
                      <Link to="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>
                <div className="lg:w-[45%] w-full flex justify-center">
                  <Link to="/shop">
                    <div className="lg:w-[500px] h-[300px] w-[300px] flex justify-center lg:h-[500px] rounded-full bg-pink-100 items-center">
                      <img
                        className="lg:w-[350px] w-[200px] lg:h-[350px] h-[220px]"
                        src={Discountdata.thumbnail}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Tabs.Content>
          <Tabs.Content value="vue">
            {Oppo.map((oppophone) => (
              <div className="lg:flex justify-between">
                <div className="lg:w-[50%] w-full">
                  <h2 className="lg:text-[35px] text-[18px] font-joss font-medium text-[navy] pb-4">
                    20% Discount Of All Products
                  </h2>
                  <p className="text-[20px] font-joss font-medium text-pink-500 pb-5">
                    {oppophone.title}
                  </p>
                  <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB] pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Clear lines and geomatric figures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-10 lg:text-start text-center">
                    <button className="lg:h-[60px] lg:w-[170px] h-[50px] w-[150px] rounded-sm bg-pink-600 text-white font-joss font-medium lg:text-[20px] text-[18px] cursor-pointer">
                      <Link to="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>
                <div className="lg:w-[45%] w-full flex justify-center">
                  <Link to="/shop">
                    <div className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] flex justify-center rounded-full bg-pink-100 items-center">
                      <img
                        className="lg:w-[350px] lg:h-[350px] w-[220px] h-[220px]"
                        src={oppophone.thumbnail}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Tabs.Content>
          <Tabs.Content value="solid">
            {Realme.map((realmephone) => (
              <div className="lg:flex justify-between">
                <div className="lg:w-[50%] w-full">
                  <h2 className="lg:text-[35px] text-[18px] font-joss font-medium text-[navy] pb-4">
                    20% Discount Of All Products
                  </h2>
                  <p className="text-[20px] font-joss font-medium text-pink-500 pb-5">
                    {realmephone.title}
                  </p>
                  <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB] pb-5">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu
                    eget feugiat habitasse nec, bibendum condimentum.
                  </p>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="lg:flex">
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Clear lines and geomatric figures.
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-x-2 items-center">
                      <div className="">
                        <IoMdCheckmark />
                      </div>
                      <div className="">
                        <p className="text-[18px] font-joss font-normal lg:w-[500px] leading-[30px] text-[#B7BACB]">
                          Material expose like metals
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="py-10 lg:text-start text-center">
                    <button className="lg:h-[60px] lg:w-[170px] h-[50px] w-[150px] rounded-sm bg-pink-600 text-white font-joss font-medium lg:text-[20px] text-[18px] cursor-pointer">
                      <Link to="/shop">Shop Now</Link>
                    </button>
                  </div>
                </div>
                <div className="lg:w-[45%] w-full flex justify-center">
                  <Link to="/shop">
                    <div className="lg:w-[500px] lg:h-[500px] w-[300px] h-[300px] flex justify-center rounded-full bg-pink-100 items-center">
                      <img
                        className="lg:w-[350px] lg:h-[350px] h-[220px] w-[220px]"
                        src={realmephone.thumbnail}
                        alt=""
                      />
                    </div>
                  </Link>
                </div>
              </div>
            ))}
          </Tabs.Content>
        </Tabs.Root>
      </Container>
    </div>
  );
};

export default Discount;
