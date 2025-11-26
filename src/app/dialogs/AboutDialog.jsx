import React from 'react'
import { Description, DialogPanel, DialogTitle, DialogBackdrop } from '@headlessui/react'

export default function AboutDialog() {
  return (
    <>
        <DialogPanel className="w-[clamp(40em,_60%,_50em)] h-3/4 space-y-4 border bg-white p-12 z-[150] text-black text-left ] 
        overflow-y-scroll">
          <img src="/github_profile_pic.png" className="w-full mx-auto"/>
          <p>
            <p className="font-light text-4xl">
            Ben Wang  
            </p>
            <p className="font-extralight text-sm">
              {/* Rotational Engineer at Pennymac <br/> */}
              Developer by Day <br/> 
              Procrastinating Artist by Night <br/>
            </p>
          </p>
          <div className="font-light mx-auto">
            
          
            <div className="outline outline-1 p-2 outline-gray-400">
            <p className="font-semibold text-xl text-left text-gray-800">
              Education
              </p>
              Bachelor of Science in Computer Science
            <p className="text-sm">
              University of Virginia (2025)
            </p>
            </div>
            <br/>
            {/* A little about me; I love to imagine, I love to create, I love to solve problems, and I love to code
            because it allows me to do all of those things for a living. As a developer, I'm  passionate about building
            tools, software, and technologies that merge the creative with engineering, and the portfolio you're in now is the result of that passion. */}
            I like to imagine, create, and problem solve. I love to code because it allows me to do all of those things for a living.
            Currently, I work as a developer at PennyMac; you can find my dev resume <a href="/resume.pdf" target="_blank" className="text-blue-400 underline">here</a>.

            <br/><br/>
            <div className="outline outline-1 p-2 outline-gray-400">
              <p className="font-bold text-gray-900">Stuff I do outside of my day job</p>
              <p className="text-sm">
              • I draw (all art on this portfolio is made by me)<br/>
              • Music (Piano, Bass)<br/>
              • Mono Red enjoyer <br/>
              • Origami enthusiast <br/>
              </p>
            </div>
          </div>
        </DialogPanel>
    </>

  )
}
