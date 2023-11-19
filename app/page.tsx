// import Image from 'next/image'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skill from '@/components/Skill'
import Footer from '@/components/Footer'
import Certifi from '@/components/Certifi'

export default function Home() {
  return (
   <div>
    <Hero/>
    <Project/>
    <Certifi/>
    <Skill/>
    <Footer/>
   </div>

  )
}
