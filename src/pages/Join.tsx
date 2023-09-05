import { Button } from "../components/common/Button";
import { useState } from "react";
import { AgencyCard } from "../components/singup/AgencyCard";
import { CustomerCard } from "../components/singup/CustomerCard";

export const Join = () => {
  const [process, setProcess] = useState({
    step: 0,
    selected: "",
  });

  const handleSetProcess = (step: number, key: string) => {
    setProcess(() => {
      return { step, selected: key };
    });
  };

  return (
    <>
      {process?.step === 0 && (
        <div className="shadow-md rounded-xl p-8 mx-auto mt-20 flex flex-col items-center justify-center md:w-[400px] sm:w-[340px]">
          <h3 className="font-black">회원가입</h3>
          <div className="flex flex-col items-center justify-center">
            <Button clickHandler={() => handleSetProcess(1, "customer")} style={"btn btn-primary w-72 m-2 text-base"}>
              <p>일반회원 회원가입</p>
            </Button>
            <Button
              clickHandler={() => handleSetProcess(1, "agency")}
              style={"btn btn-accent btn-primary w-72 m-2 text-base"}
            >
              <p>임대인 회원가입</p>
            </Button>
          </div>
        </div>
      )}

      {process?.selected === "agency" && <AgencyCard clickBack={handleSetProcess} />}
      {process?.selected === "customer" && <CustomerCard clickBack={handleSetProcess} />}
    </>
  );
};

export default Join;
