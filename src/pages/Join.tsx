import { Button } from '../components/common/Button';
import { useState } from 'react';
import { AgencyCard } from '../components/singup/AgencyCard';
import { CustomerCard } from '../components/singup/CustomerCard';

export const Join = () => {
  const [process, setProcess] = useState({
    step: 0,
    selected: '',
  });

  const handleSetProcess = (step: number, key: string) => {
    setProcess(() => {
      return { step, selected: key };
    });
  };

  return (
    <>
      {process?.step === 0 && (
        <div className="shadow-md rounded-xl p-8 mx-auto my-4 flex items-center justify-center md:w-[400px] min-h-[400px] sm:w-[340px]">
          <div className="flex-col items-center justify-center">
            <Button
              clickHandler={() => handleSetProcess(1, 'customer')}
              text="일반 회원 회원가입"
              style={'btn btn-outline btn-primary w-72 m-2 text-base'}
            ></Button>
            <Button
              clickHandler={() => handleSetProcess(1, 'agency')}
              text="임대인 회원가입"
              style={'btn btn-outline btn-primary w-72 m-2 text-base'}
            ></Button>
          </div>
        </div>
      )}
      {process?.selected === 'agency' && <AgencyCard clickBack={handleSetProcess} />}
      {process?.selected === 'customer' && <CustomerCard clickBack={handleSetProcess} />}
    </>
  );
};

export default Join;
