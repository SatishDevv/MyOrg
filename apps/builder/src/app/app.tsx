import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <NxWelcome title="builder" />
    </StyledApp>
  );
}

export default App;
