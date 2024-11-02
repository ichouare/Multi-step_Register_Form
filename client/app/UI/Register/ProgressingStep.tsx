'use client'
import React , {useRef} from 'react'
import gsap from 'gsap'
import {useGlobalContext} from './RegiterProvider'

const ProgressingStep = () => {
    const progressBar = useRef(null)
    const {step, setStep} = useGlobalContext()

    React.useEffect(() => {
        gsap.to(progressBar.current , {
            x : 120 * step,
            duration: 0.4,
            ease: 'linear',

        })
    }, [step])

  return (
    <div className='w-full h-10 flex'>
        <div ref={progressBar} className='w-[28%] h-[6px] bg-black rounded-md ms-4' />
      
    </div>
  )
}

export default ProgressingStep