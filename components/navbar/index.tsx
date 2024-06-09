import { FloatingNav } from '../ui/floating-navbar'

export const Navbar = () => {
   const navItems = [
      {
         name: 'Home',
         link: '/',
      },
      {
         name: 'About',
         link: '/about',
      },
      {
         name: 'Contact',
         link: '/contact',
      },
   ]

   return <FloatingNav navItems={navItems} />
}
