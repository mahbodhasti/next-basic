'use client'

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

const Menue = () => {

    let currentPath = usePathname()

    return (
        <div>
            <h1>{currentPath}</h1>
            <Link className={currentPath ==='/'?'active-link':'pending-link'}
             href={'/'} replace >Home</Link><br/>
            <Link className={currentPath==='/about'?'active-link':'pending-link'} 
             href={{pathname:'about',query:{name:'computer',price:'200'}}} replace >about</Link><br/>
            <Link className={currentPath==='/admin'?'active-link':'pending-link'} replace href={'/admin'} >admin</Link><br/>
            <Link prefetch={false} className={currentPath==='/contact'?'active-link':'pending-link'} replace href={'/contact'} >Contact</Link><br/>
        </div>
    );
};

export default Menue;