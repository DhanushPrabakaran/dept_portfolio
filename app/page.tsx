import Image from 'next/image'
import Hero from '@/components/Hero'
import Project from '@/components/Project'
import Skill from '@/components/skill'
import Footer from '@/components/Footer'
import Certifi from '@/components/certifi'

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
