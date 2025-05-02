/** @type {import('next').NextConfig} */
const nextConfig = {
    async headers(){
        return[
            {source:"/about",headers:[{key:'app-auth-key',
                value:'23asdfer'
            }]}
        ]
    }
};


export default nextConfig;
