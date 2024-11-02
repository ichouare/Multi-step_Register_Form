'use client'
import React from 'react'
import { GrLinkNext } from "react-icons/gr";
import { useGlobalContext } from './RegiterProvider';
const NextStepBtn = () => {
    const {setStep} = useGlobalContext()
  return (
    <div className=" w-full grid grid-flow-col gap-10  place-content-center ">
    <button className="btn " type="submit" onClick={() => setStep(prev => prev + 1)}><span>next</span> <GrLinkNext className="text-xl" /></button>
    {/* <button className="btn "><span>next</span> <GrLinkNext className="text-xl" /></button> */}
</div>
  )
}

export default NextStepBtn