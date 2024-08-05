import { useState } from "react";
import styled from "styled-components";

const StyledRoot = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  left: 50%;
  position: absolute;
  text-align: center;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const StyledButtons = styled.div`
  display: flex;
  gap: 0.5rem;
`;

const StyledButton = styled.button`
  padding: 0.5rem;
  width: 5rem;
`;

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <StyledRoot>
      <h1>{count}</h1>

      <StyledButtons>
        <StyledButton onClick={() => setCount(count - 1)}>-</StyledButton>
        <StyledButton onClick={() => setCount(count + 1)}>+</StyledButton>
      </StyledButtons>
    </StyledRoot>
  );
};
