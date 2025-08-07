import React from 'react'
import { useState, useEffect } from 'react'

const Starbackground = () => {
    const [stars, setstars] = useState([])
     const [meteors, setmeteors] = useState([])
    useEffect(() => {
      generatestars();
      generatemeteors();
    const handleresize=()=>{
      generatestars();
    }
    window.addEventListener('resize',handleresize)
     return ()=>window.removeEventListener("resize",handleresize)
    }, [])
    

    const generatestars =()=>{
        const numberofstars=Math.floor((window.innerWidth*window.innerHeight)/10000);
   
    const newstars=[]
    for(let i=0;i<numberofstars;i++){
        newstars.push({
            id:i,
            size:Math.random()*3+1,
            x:Math.random()*100,
            y:Math.random()*100,
            opacity:Math.random()*0.5+0.5,
            animationduration:Math.random()* 4+2,

        })
       }
       setstars(newstars)
     }


const generatemeteors =()=>{
        const numberofmeteors=6;
   
    const newsmeteors=[]
    for(let i=0;i<numberofmeteors;i++){
        newsmeteors.push({
            id:i,
            size:Math.random()*2+1,
            x:Math.random()*100,
            y:Math.random()*20,
            delay:Math.random()*15,
            animationduration:Math.random()* 3+3,

        })
       }
       setmeteors(newsmeteors)
     }

  return (
  <div className='fixed inset-0 overflow-hidden pointer-events-none z-0'>
     {stars.map((star)=> ( 
       <div 
       key={star.id} 
       className='star animation-pulse-subtle' 
       style={{
            width:star.size+"px",
            height:star.size+"px",
            left:star.x+"%",
            top:star.y+"%",
            opacity:star.opacity,
            animationduration:star.animationduration+"s",
        }}
        >

      </div>
      ))}

    {meteors.map((meteor)=> ( 
       <div 
       key={meteor.id} 
       className='meteor animate-meteor' 
       style={{
            width:meteor.size*40+"px",
            height:meteor.size+"px",
            left:meteor.x+"%",
            top:meteor.y+"%",
            anumationDelay:meteor.delay,
            animationDuration:meteor.animationDuration+"s",
        }}
        >

      </div>
      ))}

  </div>
  )
}

export default Starbackground