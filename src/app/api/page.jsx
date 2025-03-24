"use client";
import React, { useEffect, useState } from 'react';

const Api = () => {
    const [data, setData] = useState({products:[]});
    console.log(data)
    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(data => setData(data));
    }, []);

    return (
    
        <div>
            <h1>call api</h1>
            {data.products.map((item,index)=>{
                return<div key={index} ><h4>{item.title}</h4></div>
            })}
        </div>
      
    );
};

export default Api;
