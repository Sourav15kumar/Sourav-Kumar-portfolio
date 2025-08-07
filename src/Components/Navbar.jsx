// import React from 'react'
// import cn from '../lib/utils'
// import { useState,useEffect } from 'react'
// import { Menu, X } from 'lucide-react'; 
// const navitems=[
//     {name:"Home",href:"#hero"},
//     {name:"About",href:"#about"},
//     {name:"Skills",href:"#skills"},
//     {name:"Projects",href:"#projects"},
//     {name:"Contact",href:"#contact"},
    
// ]


// const Navbar = () => {
//     const [isScrolled, setisScrolled] = useState(false)
//       const [ismenuopen, setismenuopen] = useState(false)
//     useEffect(() => {
//     const handleScroll=()=>{
//         setisScrolled(window.scrollY>10)
//     }
//     window.addEventListener("scroll",handleScroll);
//     return ()=>window.removeEventListener("scroll",handleScroll);
//     }, [])
    
//   return (
//    <nav className={cn("fixed w-full z-40 transition-all duration-300",isScrolled?"py-3 bg-background/80 backdrop-blur-md shadow-xs":"py-5"

//    )}>
    
//     <div className='container flex items-center justify-between'>
//         <a className='text-xl font-bold text-primary flex items-center' href='#hero'>  
//             <span className='relative z-10'>
                
//                 <span className='text-glow text-foreground'>Sourav Kumar</span> Portfolio
//             </span>
//         </a>
     
//      {/* desktop version hai kya */}
//      <div className='hidden md:flex space-x-8'>                  
//         {navitems.map((item,key)=>(
//             <a key={key}
//             href={item.href} 
//             className='text-foreground/90 hover:text-primary transition-colors duration-300'>
//                 {item.name}</a>
//         ))}
//      </div>

//      {/* for mobile version */}

//      <button onClick={()=>setismenuopen((prev)=>!prev)}
//         className='md:hidden p-2 text-foreground z-50'
//         aria-label={ismenuopen ? "close menu":"open menu"}>{ismenuopen?<X size={24} />:<Menu size={24}/>}</button>
//      <div className={cn("fixed inset-0 background/95 background-blur-md z-40 flex flex-col items-center justify-center",
//         "transition-all duration-300 md:hidden",
//         ismenuopen ? "opacity-100 pointer-events-auto":" opacity-0 pointer-events-none"
//      )}>
//      <div className='flex flex-col space-y-8 text-xl'>                  
//         {navitems.map((item,key)=>(
//             <a key={key}
//             href={item.href}  
//             className='text-foreground/90 hover:text-primary transition-colors duration-300'
//             onClick={()=>setismenuopen(false)}>
//                 {item.name}</a>
//         ))}
//      </div>
// </div>


//     </div>


//    </nav>
//   )
// }

// export default Navbar

// ✅ Import this if you use lucide-react icons
import { Menu, X, Sun, Moon } from 'lucide-react'; 
import cn from '../lib/utils';
import { useState, useEffect } from 'react';

const navitems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setisScrolled] = useState(false);
  const [ismenuopen, setismenuopen] = useState(false);
  const [darkMode, setDarkMode] = useState(true); // 🌗 Dark mode toggle

  useEffect(() => {
    const handleScroll = () => {
      setisScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🌗 Toggle function
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
    } else {
      document.documentElement.classList.add('dark');
    }
  };

  return (
    <nav
      className={cn(
        'fixed w-full z-40 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs'
          : 'py-5'
      )}
    >
      <div className='container flex items-center justify-between'>
        {/* Logo */}
        <a
          className='text-xl font-bold text-primary flex items-center'
          href='#hero'
        >
          <span className='relative z-10'>
            <span className='text-glow text-foreground'>Sourav Kumar</span>{' '}
            Portfolio
          </span>
        </a>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-8'>
          {navitems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className='text-foreground/90 hover:text-primary transition-colors duration-300'
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right corner (Dark mode + Hamburger) on Mobile */}
        <div className='flex items-center gap-0 md:hidden z-50'>
  <button
    onClick={() => setismenuopen((prev) => !prev)}
    className='p-2 text-foreground'
    aria-label={ismenuopen ? 'close menu' : 'open menu'}
  >
    {ismenuopen ? <X size={24} /> : <Menu size={24} />}
  </button>
  <button
    onClick={toggleDarkMode}
    className='text-foreground p-2'
    aria-label='Toggle theme'
  >
    {darkMode ? <Sun size={20} /> : <Moon size={20} />}
  </button>
</div>


        {/* Mobile Menu with blur */}
        <div
          className={cn(
            'fixed inset-0 bg-black/60 backdrop-blur-lg z-40 flex flex-col items-center justify-center',
            'transition-all duration-300 md:hidden',
            ismenuopen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          )}
        >
          <div className='flex flex-col space-y-8 text-xl'>
            {navitems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className='text-foreground/90 hover:text-primary transition-colors duration-300'
                onClick={() => setismenuopen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
