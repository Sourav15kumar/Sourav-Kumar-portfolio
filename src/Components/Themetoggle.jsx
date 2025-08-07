import React, { useEffect } from 'react'
import {Sun,Moon} from "lucide-react";
import { useState } from 'react';
import cn from '../lib/utils';

const Themetoggle = () => {
    const [isdarkmode, setisdarkmode] = useState(false)

 useEffect(() => {
  const storedTheme=localStorage.getItem("theme")
  if(storedTheme==="dark"){
    setisdarkmode(true)
    document.documentElement.classList.add("dark");
   
  }
  else
  {
  localStorage.setItem("theme","light");
  setisdarkmode(false);
  }
 }, [])
    

const buttontoggle = () => {
  if(isdarkmode){
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme","light");
  setisdarkmode(false)
  }
  else{
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme","dark");
    setisdarkmode(true)
  }
  
}


  return (
    <button onClick={buttontoggle} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
      "focus:outline-hidden"
    )}>{isdarkmode?<Sun className='h-6 w-6 text-yellow-500'/>:<Moon className='h-6 w-6 text-gray-700'/>}</button>
  )
}

export default Themetoggle