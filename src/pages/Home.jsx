import React from 'react'
import Themetoggle from '../Components/Themetoggle'
import Starbackground from '../Components/Starbackground'
import Navbar from '../Components/Navbar'
import Homepagesection from '../Components/Homepagesection'
import Aboutsection from '../Components/Aboutsection'
import Skillsection from '../Components/Skillsection'
import Projectsection from '../Components/Projectsection'
import Contactsection from '../Components/Contactsection'





const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden" >
{/* theme toggle */}
<Themetoggle/>
{/* background effect */}
<Starbackground/>
{/* navbar */}
<Navbar/>
{/* main content*/}
<main>
  <Homepagesection/>
  <Aboutsection/>
  <Skillsection/>
  <Projectsection/>
  <Contactsection/>
</main>
{/*footer*/}


    </div>
  )
}

export default Home