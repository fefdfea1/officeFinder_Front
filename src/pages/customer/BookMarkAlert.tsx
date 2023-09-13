import { useEffect } from "react";
import { BookMarkClickHandler } from "../../Business/BookMark/BookMarkAlertClickHancler";
import { useState } from "react";
type propsType = {
  submitText: string;
  deleteSubmitText: string;
  alertState: boolean;
};

export const BookMarkAlert = (props: propsType) => {
  const [submitState, setSubmitState] = useState<boolean>(false);
  useEffect(() => {
    window.addEventListener("click", event => BookMarkClickHandler(event, setSubmitState));

    return () => window.removeEventListener("click", event => BookMarkClickHandler(event, setSubmitState));
  }, []);

  return (
    <>
      {props.alertState && (
        <div className="alert alert-success">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>{submitState ? props.submitText : props.deleteSubmitText}</span>
        </div>
      )}
    </>
  );
};
