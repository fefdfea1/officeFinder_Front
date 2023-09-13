import styled from "@emotion/styled";
import { useMyContext } from "../../contexts/MyContext";

export const SseAlert = () => {
  const { isSseAlertState, isSseText } = useMyContext();
  return (
    <>
      {isSseAlertState && isSseText !== "" ? (
        <AlertPosition className="alert bg-primary text-secondary z-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="stroke-current shrink-0 w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            ></path>
          </svg>
          <span>New software update available.</span>
        </AlertPosition>
      ) : null}
    </>
  );
};

const AlertPosition = styled.div`
  width: 600px;
  position: absolute;
  left: 50%;
  top: 5%;
  transform: translate(-50%, -50%);
`;
