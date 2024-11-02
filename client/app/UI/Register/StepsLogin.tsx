'use client'
import React, { useEffect, useRef } from 'react'

import ProgressingStep from './ProgressingStep'
import { useGlobalContext } from './RegiterProvider'

const StepsLogin = () => {
  const { step } = useGlobalContext()
  const containerSteps = useRef<HTMLUListElement>(null)
    const steps = ['personnal information', 'contrat information', 'security checkup']
  useEffect(() => {
    if(containerSteps.current)
    { 
      containerSteps.current.childNodes.forEach((node, index) => {
        console.log("step--------->", step, index)
        if(node instanceof HTMLElement )
        {
          if(index  !== step )
            node.classList.add('text-heading_color');
          else
          {
            console.log("is changed", node);
            node.classList.remove('text-heading_color');
            node.classList.add('text-black');
          }

        }
      })
    }

  }, [step])
    return (
    <div>

    <ul ref={containerSteps} className='grid grid-flow-col w-full  items-center relative' >
        {
          steps.map((step, index) => (
                <li  className='font-semibold text-sm capitalize leading-6  text-heading_color text-center' key={index}>{step}</li>
            ))
        
            
          }
        </ul>
        <ProgressingStep />
        </div>

  )
}

export default StepsLogin