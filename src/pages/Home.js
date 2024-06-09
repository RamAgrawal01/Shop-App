import React, { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";



const Home = () =>{
    const API_URL = "https://fakestoreapi.com/products";
    const [loading , setLaoding] = useState(true);
    const [posts , setPosts] = useState([]);

    async function fetchProductData(){
        try{
            const response = await fetch(API_URL);
            const data = await response.json();
            setPosts(data);

        }
        catch(error){
            console.log('Error caught');
            setPosts([]);
        }
        setLaoding(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[])


    return(
        <div>
        {
          loading ? <Spinner />  :
          posts.length > 0 ? 
          (<div className="grid xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto space-y-10 space-x-5
          min-h-[80vh] mb-10">
            {
              posts.map( (post) => (
              <Product key = {post.id} post={post}/>
            ) )
            }
          </div>) :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div> 
        }
      </div>
    )
}
export default Home;