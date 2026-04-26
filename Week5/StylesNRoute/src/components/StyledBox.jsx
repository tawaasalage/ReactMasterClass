import React from "react";
import styled from "styled-components";

const Page = styled.div`
  padding: 48px;
  background: #d40404;
  border-radius: 10px;
  margin: 5px;
`;

const Button = styled.button`
  padding: 1rem;
  margin: 5px;
  border-radius: 8px;
  padding: 8px;
  color: #dedede;
  background: ${(props) => (props.primary ? "#38d016cf" : "#1030e4cf")};
`;

const DangerButton = styled(Button)`
  background: #b01e1ecf;
`;

export default function StyledBox() {
  return (
    <Page>
      <h1>This is Styled Title</h1>
      <Button primary>Primary Button</Button>
      <Button>Default Button</Button>
      <DangerButton>Danger Button</DangerButton>
    </Page>
  );
}
