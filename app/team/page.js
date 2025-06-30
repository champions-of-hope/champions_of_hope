import React from 'react'
import TeamMembers from '../../components/team/CoreTeam'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Jars from '@/components/team/Jars'

const page = () => {
  return (
    <div>
      <Navbar />
      <br />
      <br />
        <TeamMembers />
        <Jars />


        <Footer />
        
    </div>
  )
}

export default page