import React, { useState } from "react"

import {
    regexEmail,
} from '../../utils/regex';

export function SignIn() {

    const[validateEmailRegister, setValidateEmailRegister] = useState({
        regexEmail: false,
    })
   
    const emailRegister = (emailInput: React.ChangeEvent<HTMLInputElement>) => {
        setValidateEmailRegister({
            regexEmail: regexEmail.test(emailInput.target.value),
        })
    }
   
    return (
        <div className="min-h-screen">
            <label>
                <form className="min-h-screen flex flex-col justify-center items-center outline-none bg-black">

                    <input
                        type="email"
                        placeholder="Email ID"
                        required
                        onChange={(emailInput) => emailRegister(emailInput)}
                        className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5 ${Object.values(validateEmailRegister).map(mapValidateEmailBoolean => mapValidateEmailBoolean == false ? "focus:outline-none focus:border-pink-500 focus:ring-pink-500 text-pink-600 focus-ring-1" : "")}`}/>

                     <input 
                        type="password"
                        placeholder="Password"
                        required
                        className={`block rounded-[5px] border-[#AEBBCD] focus:outline-none w-[25rem] mb-5`}/>

                    <button 
                        
                        className="rounded-full bg-[#3D5FD9] text-[#F5F7FF] w-[25rem] p-3 hover:bg-[#2347C5] mb-5">
                           SIGN IN
                    </button>

                    <p className="text-[#5473E3] mb-5">Don't have an account ? < a href="#" className="hover:text-[#2347C5] hover">Sign up</a></p>
                
                </form>
            </label>
        </div>
          
    )
}