/** @type {import('next').NextConfig} */
const nextConfig = {
    
       async headers(){
            return[
                {source:"/about",headers:[{key:'app-auth-key',value:'klsdjdokjhg'}]}
            ]
       }
    
    };


export default nextConfig;
