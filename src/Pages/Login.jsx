import { Link } from 'react-router-dom'

const Login = () => {

    return (
        <>
            <div className=''>
                <div className="lg:pt-[96px] lg:pb-[126px] py-[30px] lg:px-0 px-3 bg-[#F6F5FF]">
                    <div className="container mx-auto">
                        <h2 className='font-joss font-bold lg:text-[36px] text-[20px]'>Log in</h2>
                        <ul className='flex gap-1'>
                            <li className='font-joss font-normal text-[16px]'><Link to="/">Home .</Link></li>
                            <li className='font-joss font-normal text-[16px]'>Pages .</li>
                            <li className='font-joss font-normal text-[16px] text-pink-600'>Sign in </li>
                        </ul>
                    </div>
                </div>
                <section className="bg-gray-50 dark:bg-gray-900">
                    <div className="flex flex-col items-center justify-center px-6 py-8 mx-0 md:h-screen lg:py-0">

                        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white font-sans">
                                    Sign in to your account
                                </h1>
                                <form className="space-y-4 md:space-y-6" action="#">
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block mb-2 text-[18] font-medium text-gray-900 dark:text-white"
                                        >
                                            Your email
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="name@company.com"
                                            required=""
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="password"
                                            className="block mb-2 text-[18] font-medium text-gray-900 dark:text-white"
                                        >
                                            Password
                                        </label>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            placeholder="••••••••"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            required=""
                                        />
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-start">
                                            <div className="flex items-center h-5">
                                                <input
                                                    id="remember"
                                                    aria-describedby="remember"
                                                    type="checkbox"
                                                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                                                    required=""
                                                />
                                            </div>
                                            <div className="ml-3 text-sm">
                                                <label
                                                    htmlFor="remember"
                                                    className="text-gray-500 dark:text-gray-300"
                                                >
                                                    Remember me
                                                </label>
                                            </div>
                                        </div>
                                        <a
                                            href="#"
                                            className="text-[16px] font-medium text-primary-600 hover:underline dark:text-primary-500"
                                        >
                                            Forgot password?
                                        </a>
                                    </div>
                                    <button type="submit"className="w-full text-white bg-[#767676] hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                    ><Link to="/cart">Log in</Link>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </>
    )
}

export default Login