import { render } from '@testing-library/react';

import FormBuilderLibrary from './form-builder-library';

describe('FormBuilderLibrary', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FormBuilderLibrary />);
    expect(baseElement).toBeTruthy();
  });
});
