import Image from 'next/image'
import Header from '@/components/header'
import Project from '@/components/Project'
import Skill from '@/components/skill'
import Footer from '@/components/Footer'
import Certifi from '@/components/certifi'

export default function Home() {
  return (
   <div>
    <Header/>
    <Project/>
    <Skill/>
    <Certifi/>
    <Footer/>
   </div>

  )
}
