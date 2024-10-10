import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaEye, FaEyeSlash } from "react-icons/fa6";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";

const Signup = () => {
    const auth = getAuth();
    const db = getDatabase();

    const [pshow, setPshow] = useState(false);
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");  // First name state
    const [lastName, setLastName] = useState("");    // Last name state
    const [email, setEmail] = useState("");

    const handleFirstName = (e) => {
        setFirstName(e.target.value);  // Set first name value
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);  
    };

    const handleEmail = (e) => {
        setEmail(e.target.value);
    };

    const handlePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {

            }).then(()=>{
                set
            })
            .then(() => {
                console.log("User data saved to Realtime Database");
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.error("Error:", errorCode, errorMessage);
            });
    };
    

    return (
        <div>
            <div className="pt-[96px] pb-[126px] bg-[#F6F5FF]">
                <div className="container mx-auto">
                    <h2 className='font-joss font-bold text-[36px]'>Sign up</h2>
                    <ul className='flex gap-1'>
                        <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                        <li className='font-joss font-normal text-[16px]'>Pages .</li>
                        <li className='font-joss font-normal text-[16px] text-pink-600'>Sign up</li>
                    </ul>
                </div>
            </div>
            <div className='container mx-auto'>
                <div className="mt-[30px] py-[50px] border-y-[1px] border-[#F0F0F0]">
                    <h3 className='font-dmsans lg:text-[39px] text-[20px] font-bold text-[#262626] pb-10'>Your Personal Details</h3>
                    <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                        <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                            <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]'>First Name</h3>
                            <input onChange={handleFirstName} type="text" placeholder='First Name' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                        </div>
                        <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                            <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]'>Last Name</h3>
                            <input onChange={handleLastName} type="text" placeholder='Last Name' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                        </div>
                        <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5">
                            <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]'>Email address</h3>
                            <input onChange={handleEmail} type="email" required placeholder='company@domain.com' className='font-dmsans text-[16px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                        </div>
                    </div>
                </div>

                <div className="mt-[50px] pb-[50px] border-b-[1px] border-[#F0F0F0]">
                    <h3 className='font-dmsans lg:text-[39px] text-[20px] font-bold text-[#262626] pb-10'>Your Password</h3>
                    <div className="lg:w-[60%] w-full flex flex-wrap justify-between">
                        <div className="w-[48%] border-b-[1px] border-[#F0F0F0] mt-5 relative">
                            <h3 className='font-dmsans text-[18px] leading-[23px] font-bold text-[#262626]'>Password</h3>
                            <input onChange={handlePassword} value={password} type={pshow ? "text" : "password"} required placeholder='Password' className='font-dmsans text-[14px] font-normal text-[#767676] outline-none w-full h-[20px]' />
                            <div onClick={() => setPshow(!pshow)} className="absolute top-[50%] translate-y-[-50%] right-[25px] cursor-pointer text-[20px]">
                                {pshow ? <FaEye /> : <FaEyeSlash />}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-8 pb-24">
                    <button onClick={handleSubmit} type='submit' className='font-dmsans text-[16px] font-bold text-white py-[20px] px-[70px] bg-[#262626]'>
                        <Link to="/login">Sign up</Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Signup;
