import React from 'react'

export default function Register() {
    return (
        <div className="max-w-sm p-10 rounded-2xl w-2/3" style={{background:"#F6FBF9"}}>
            <h1 className='text-center text-3xl font-bold '>Create An Account</h1>
            <p className='mb-10 text-center'>Create an account to enjoy our service for free!</p>
            <form >
                <div className="mb-5">
                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Email Address" required />
                </div>
                <div className="mb-5">
                    <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    placeholder='Password'
                    required />
                </div>
                  <button type="submit" 
                  style={{background:"#D2649A"}}className="text-white rounded-lg text-sm w-full px-5 py-2.5 text-center ">Sign Up</button>  
                  <div className='text-sm mt-3'>
                    <p className='text-center'>Don't Have An Account? <a href="/login" className='underline font-semibold'>Create Account</a></p>
                  </div>
                
            </form>

        </div>
    )
}
