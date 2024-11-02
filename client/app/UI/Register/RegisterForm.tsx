import React from "react";
import NextStepBtn from "./NextStepBtn";

const RegisterForm = () => {
  return (
    <form className=" w-full h-full grid grid-flow-row items-center  place-items-center px-6     ">
      <div className="flex flex-col   w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-none"
          htmlFor="firstName"
        >
          First Name
        </label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          className="bg-transparent border border-black  w-[100%] rounded-md p-1"
          required
        />
      </div>
      <div className="flex flex-col  w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-0"
          htmlFor="secondName"
        >
          last Name
        </label>
        <input
          type="text"
          id="secondName"
          name="secondName"
          className="bg-transparent border border-black   w-[100%] rounded-md p-1"
          required
        />
      </div>
      <div className="flex flex-col  w-full  gap-2 ">
        <label
          className=" text-heading_color font-semibold text-xs capitalize outline-0"
          htmlFor="date"
        >
          date of birth
        </label>
        <input
          type="date"
          id="date"
          name="date"
          className="bg-transparent border border-black   w-[100%] rounded-md p-1 text-heading_color uppercase"
          required
        />
      </div>
      <div className="flex w-full gap-4 ">
        <div className="flex-1 flex flex-col gap-2">
          <label
            className="text-heading_color font-semibold text-xs capitalize"
            htmlFor="gender"
          >
            Gender
          </label>
            <select className="bg-transparent w-full h-full rounded-md px-3 border border-black">
            <option></option>
            <option value="male" >Male</option>
            <option value="female">female</option>
            </select>
        </div>

        <div className="flex-1 flex flex-col gap-2">
          <label
            className="text-heading_color font-semibold text-xs capitalize"
            htmlFor="age"
          >
            Age
          </label>
          <input
            min={0}
            max={99}
            type="number"
            id="age"
            name="age"
            className="bg-transparent border border-black w-full rounded-md p-1 text-heading_color uppercase"
            required
          />
        </div>
      </div>
       <div className=" text-sm flex gap-3 text-heading_color font-semibold">
        
        <input id="acceptTerms" name="acceptTerms" type="checkbox" className="rounded-lg border border-black"/>
        <label htmlFor="acceptTerms"> Please agree to the <span className="text-black"> terms of service.</span></label>
       </div>
        <NextStepBtn />
        
       
    </form>
  );
};

export default RegisterForm;
