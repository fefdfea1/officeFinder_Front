import styled from "@emotion/styled";

type propsType = {
  removeCompoState: boolean;
};

export const BookMarkRemoveCompo = (props: propsType) => {
  return <RemoveModalPosition />;
};

const RemoveModalPosition = styled.div`
  width: 60%;
  height: 300px;
  position: absolute;
  top: 0%;
  left:0%;
  right: 0%;
  bottom: 0;
  transform-translate(-50%,-50%);
  background-color: #ffffff;

`;
