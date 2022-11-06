import React from 'react'
import { BASE_URL } from '../configs/variables.config'
import { BiHeart } from "react-icons/bi";
import { Link } from 'react-router-dom';

const Records = ({ data }) => {
    return (
        <>
            <div className="flex flex-wrap gap-5 px-5 justify-center ">
                {data.map((item, i) => (
                    <Link to={`details/${item.id}`} key={i}>
                    <div className='border shadow-md rounded-md mb-3 '>
                        <img alt="Placeholder" className="block h-auto w-full rounded-t-md" src={`${BASE_URL}/files/${item.thumbnail}`} />
                        <div className='p-3'>
                            <p>{item.name}</p>
                            <p className='flex items-center justify-between'><span>{item.price} تومان </span><BiHeart /></p>
                        </div>
                    </div>
                    </Link>
                ))}
            </div>
        </>
    )
}

export default Records  