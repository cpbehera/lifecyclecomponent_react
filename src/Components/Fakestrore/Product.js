import React from 'react';
import { useEffect,useState } from 'react';

function Product() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setData(data);
    }
  return (
    <div>
      <h1>Product</h1>
      <ul>
        {
            data.map((item)=>{
                return (
                    <li key={item.id}>{item.title}</li>
                )
            })
        }
      </ul>
    </div>
  )
}

export default Product
