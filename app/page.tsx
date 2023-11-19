import React from 'react'

import Heross from '@/components/Heross'
import Project from '@/components/Project'
import Skill from '@/components/Skill'
import Footer from '@/components/Footer'
import Certifi from '@/components/Certifi'


export default function Home() {
  return (
   <div>
    <Heross/>
    <Project/>
    <Certifi/>
    <Skill/>
    <Footer/>
   </div>

  )
}
