// import React from 'react';
import { Button } from '../components/common/Button';
import { useState } from 'react';
import { AgencyCard } from '../components/singup/AgencyCard';
import { CustomerCard } from '../components/singup/CustomerCard';



export const Join =() => {  
  const [step, setStep]= useState(0)
  const [agency, setAgency] = useState(false)
  const [customer, setCustomer] = useState(false)

  const clickCard = (key:string) => {
    if (key === 'customer') {
    setCustomer(true)
    setStep(1);
    } else if (key === 'agency') {
      setAgency(true)
      setStep(1);
    }
    console.log(agency, customer);
  }
  return (
    <>
      {step === 0 &&
        <div className="shadow-md rounded-xl p-8 w-[400px] h-[400px] mx-auto my-4 flex items-center justify-content-center">
          <div className="flex-col items-center">
            <Button clickHandler={()=>clickCard('customer')} text="일반 회원 회원가입" style={"btn btn-outline btn-primary w-72 m-2 text-base"}></Button>
            <Button clickHandler={()=>clickCard('agency')}  text="임대인 회원가입" style={"btn btn-outline btn-primary w-72 m-2 text-base"}></Button>
          </div>
        </div> }   
        {step === 1 && agency && <AgencyCard/>}
        {step === 1 && customer && <CustomerCard/>}

    </>
  );
}

export default Join;
