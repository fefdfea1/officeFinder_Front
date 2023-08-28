import { Button } from '../components/common/Button';

import { useState } from 'react';
import { AgencyCard } from '../components/singup/AgencyCard';
import { CustomerCard } from '../components/singup/CustomerCard'


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
        <div className="shadow-md rounded-xl p-8 mx-auto my-4 flex items-center justify-center md:w-[400px] h-[400px] sm:w-[340px]">
          <div className="flex-col items-center justify-center">
            <Button clickHandler={()=>clickCard('customer')} text="일반 회원 회원가입" style={"btn btn-outline btn-primary w-72 m-2 text-base"}></Button>
            <Button clickHandler={()=>clickCard('agency')}  text="임대인 회원가입" style={"btn btn-outline btn-primary w-72 m-2 text-base"}></Button>
          </div>
        </div> }   
        {agency && <AgencyCard/>}
        {customer && <CustomerCard/>}

    </>
  );
}

export default Join;


