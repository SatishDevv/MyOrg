import styled from 'styled-components';
import NxWelcome from './nx-welcome';
import { Route, Routes, Link } from 'react-router-dom';
import { FormBuilderLibrary } from '@myorg/form-builder-library';

const StyledApp = styled.div`
  // Your style here
`;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Link to="/page-2"><NxWelcome title="builder" /></Link>
            </div>
          }
        />
        <Route path="/form-builder-library" element={<FormBuilderLibrary />} />
      </Routes>
    </StyledApp>
  );
}

export default App;
