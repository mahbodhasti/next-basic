'use client'
import React, { useEffect, useState } from "react";

const Api = () => {
    const [data, setData] = useState({ products: [] }); // Initialize state

    useEffect(() => {
        const getData = async () => {
            try {
                let res = await fetch("https://dummyjson.com/products");
                let json = await res.json();
                setData(json); // Update state with fetched data
                console.log(json)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();
    }, []); // Empty dependency array ensures it runs only once

    return (
        <div>
            <h1>Call API</h1>
            {data.products.map((item, index) => (
                <div key={index}>
                    <h4>title:{item.title}</h4>
                    <h4>categoty:{item.catgori}</h4>
                    <h4>price:{item.price}</h4>
                </div>
            ))}
        </div>
    );
};

export default Api;
