import styled from 'styled-components';

/* eslint-disable-next-line */
export interface FormBuilderLibraryProps {}

const StyledFormBuilderLibrary = styled.div`
  color: pink;
`;

export function FormBuilderLibrary(props: FormBuilderLibraryProps) {
  return (
    <StyledFormBuilderLibrary>
      <h1>Welcome to FormBuilderLibrary!!!!!!!!!!!!!!!!!!!!!!!</h1>
    </StyledFormBuilderLibrary>
  );
}

export default FormBuilderLibrary;
