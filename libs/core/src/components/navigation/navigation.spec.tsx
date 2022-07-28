import { render } from '@testing-library/react';
import DocsNavigation from './navigation';

describe('Navigation', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DocsNavigation />);
    expect(baseElement).toBeTruthy();
  });
});
