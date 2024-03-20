import { useState } from "react";
import Link from "../Link/Link";
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

const Nav = () => {

   const [open, setOpen] = useState(false)
   const routes = [
      { id: 1, name: 'Home', path: '/' },
      { id: 2, name: 'About', path: '/about' },
      { id: 3, name: 'Services', path: '/services' },
      { id: 4, name: 'Contact', path: '/contact' },
      { id: 5, name: 'Blog', path: '/blog' }
    ];
    

   return (
      <nav>
         <div className="md:hidden" onClick={() => setOpen(!open)}>
            {
               open === true ? <IoClose className="text-3xl" /> : <IoMenu className="text-3xl" />
            }
         
         </div>
         <ul className="md:flex">
         {
            routes.map(route => <Link key={route.id} route={route}></Link>)
         }
         </ul>
      </nav>
   );
};

export default Nav;