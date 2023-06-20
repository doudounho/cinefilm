import React from "react";
import Card from '../movieCard/card'
import movieDB from '../../movieDB';

 export default function list() {
    return (
        <div className='flex justify-center items-center'>
             <div className='w-[90%] mt-5 grid grid-cols-3 grid-rows-2 gap-4 '>
                {movieDB.map((movie,index) => (
                    <div key={index}>
                           <Card Title={movie.Title} Description={movie.Description} PostUrl={movie.PostUrl} Rating={movie.Rating} />
                    </div>
                ))}
             </div>
        </div>
    )
}
