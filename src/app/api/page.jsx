'use client';
import React, { useEffect, useState } from "react";

const Api = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const json = await res.json();
                setData(json);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <button onClick={() => alert('hiiii')}>click</button>

            <h1>Call API (Client-Side)</h1>
            {data ? (
                data.products.map((item, index) => (
                    <div key={index}>
                        <h4>Title: {item.title}</h4>
                        <h4>Category: {item.category}</h4>
                        <h4>Price: {item.price}</h4>
                    </div>
                ))
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Api;
