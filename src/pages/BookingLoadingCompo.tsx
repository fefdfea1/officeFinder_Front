import styled from "@emotion/styled";

export const BookingLoadingCompo = () => {
  return (
    <LoadingPosition>
      <LoadingCirclePosition className="loading loading-dots loading-lg"></LoadingCirclePosition>
    </LoadingPosition>
  );
};

const LoadingPosition = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(240, 240, 240, 0.7);
  position: absolute;
  top: 0;
  left: 0;
`;

const LoadingCirclePosition = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
