'use client'
import React from 'react';
import style from'./aboutstyle.module.css'
import Menue from '@/component/Menue';
import { useSearchParams } from 'next/navigation';
const About = () => {
    const params = useSearchParams();

    return (
        <div>
            <h1 className={style.text} >this is from about</h1>
            <h2>{params.get('name')}</h2> 
            <h2>{params.get('price')}</h2>
            <Menue/>
        </div>
    );
};

export default About;  