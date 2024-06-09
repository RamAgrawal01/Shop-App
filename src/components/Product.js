import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/slices/cartSlice";
import { useState } from "react";

const Product = ({post}) =>{

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const[readmore , setReadmore] = useState(false);
    const fullInfo = readmore ? post.description : `${post.description.substring(0,100)}...`

    function readmoreHandler(){
        setReadmore(!readmore);
    }

    const addToCart=()=>{
        dispatch(add(post));
        toast.success("item added to Cart");
    }

    const removeFromCart=()=>{
        dispatch(remove(post.id));
        toast.error("Item removed from cart");
    }

    return(
        <div className="flex flex-col items-center justify-between
        hover:scale-110 transition duration-300 ease-out gap-3 p-4
        mt-10 ml-5 rounded-xl outline">
            <div>
                <p className="text-gray-800 font-semibold text-lg
                truncate w-40 mt-1">{post.title}</p>
            </div>
            <div className="w-40 text-neutral-700 font-normal text-[12px] text-left min-w-full">
                <p>{fullInfo}
                <span className="text-black  cursor-pointer"
                onClick={readmoreHandler}>
                    {readmore ? `Read less` : 'Read more'}
                
                    </span></p>
            </div>
            <div className="h-[180px]">
                <img className="h-full w-full" src={post.image} />
            </div>

            <div className="flex justify-between gap-14 w-full ">

            <div>
                <p className="text-green-600 font-semibold">${post.price}</p>
            </div>

            {//agr cart ke andar p name ki post equal h current post se 
                cart.some((p)=>p.id ===post.id) ? 
                (<button className="text-gray-700 border-2 border-gray-700 rounded-full
                font-semibold text-[13px] p-1 px-3 uppercase
                hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
                 onClick={removeFromCart}>
                    Remove Item
                </button>) :

                (<button className="text-gray-700 border-2 border-gray-700 rounded-full
                font-semibold text-[13px] p-1 px-3 uppercase
                hover:bg-gray-700 hover:text-white transition duration-200 ease-in"
                onClick={addToCart}>
                    Add to Cart
                </button>)
            }
            </div>
           
        </div>
    )
}
export default Product;