import React from "react";

import { NavLink } from "react-router-dom";

import { SocialIcon } from "react-social-icons";

export default function NavBar(){
    return (
       <header className="bg-red-600">
           <div className="container mx-auto flex justify-between">
               <nav className="flex">
                   <NavLink to="/"
                   exact
                   activeClassName="text-white"
                    className="in-line flex items-center py-6 px-3 mr-4 text-red-100 hover:text-purple-800 text-4xl font-bold cursive tracking-widest" activeClassNAme="text-100 bg-red-700">
                       Daniel
                   </NavLink>
                   <NavLink to="/post" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-800" ActiveClassName="text-red-100 bg-red-700">
                       Blog Post
                   </NavLink>
                   <NavLink to="/project" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-800" activeClassName="text-red-100 bg-red-700">
                       Projects
                   </NavLink>
                   <NavLink to="/about" className="inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-purple-800" activeClassName="text-red-100 bg-red-700">
                       About Me!
                   </NavLink>
               </nav>
               <div className="inline-flex py-3 px-3 my-6">
                   <SocialIcon url="https://www.linkedin.com/in/daniel-amian-0a50472/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                   <SocialIcon url="https://twitter.com/bigdan62" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
                   <SocialIcon url="https://www.facebook.com/bigdan62/" className="mr-4" target="_blank" fgColor="#fff" style={{ height: 35, width: 35 }} />
               </div>
           </div>
       </header>
    );
}