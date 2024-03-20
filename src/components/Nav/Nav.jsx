import Link from "../Link/Link";

const Nav = () => {
   const routes = [
      { id: 1, name: 'Home', path: '/' },
      { id: 2, name: 'About', path: '/about' },
      { id: 3, name: 'Services', path: '/services' },
      { id: 4, name: 'Contact', path: '/contact' },
      { id: 5, name: 'Blog', path: '/blog' }
    ];
    

   return (
      <nav>
         <ul className="md:flex">
         {
            routes.map(route => <Link key={route.id} route={route}></Link>)
         }
         </ul>
      </nav>
   );
};

export default Nav;