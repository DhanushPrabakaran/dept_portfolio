import React from 'react'
import Heross from '@/components/Heross'
import Projectss from '@/components/Projectss'
import Skillss from '@/components/Skillss'
import Footerss from '@/components/Footerss'
import Certifiss from '@/components/Certifiss'
import Timeline from '@/components/Timeline'
// import Project from '@/components/Projectss'


export default function Home() {
  return (
   <div>
    <Heross/>
    {/* <Timeline /> */}
    <Certifiss/>
    <Skillss/>
    {/* <Timeline></Timeline> */}
    <Footerss/>
   </div>

  )
}
