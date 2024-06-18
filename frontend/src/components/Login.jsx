import React from 'react'

export default function Login() {
    return (
        <div className="max-w-sm p-10 rounded-2xl w-2/3" style={{background:"#F6FBF9"}}>
            <h1 className='text-center text-3xl font-bold mb-10'>Sign Up</h1>
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
                    <p className='text-center'>Don't Have An Account? <a href="/register" className='underline font-semibold'>Sign Up</a></p>
                  </div>
                
            </form>

        </div>
    )
}
