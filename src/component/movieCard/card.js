import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Card({Title,PostUrl,Description,Rating}){
    return(
        <div 
        className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.07)] " >
         <a href="#!">
            <img 
            className="rounded-t-lg"
            src={PostUrl}
            alt="casa" />

         </a>
         <div className="p-6">
             <h5 
             className="mb-2 text-xl font-meduim leading-tight text-neutral-800 dark:text-neutral-50">
                {Title}
             </h5>
             <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                {Description}

             </p>
             <Link to={'details/$ {id} '}></Link>
             <button 
             type="button"
             className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-meduim uppercase leading-normal"
             data-te-ripple-init
             data-te-ripple-color="light">
                Button
             </button>
         </div>
        </div>
    )
}
