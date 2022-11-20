import { render } from '@testing-library/react';
import ExampleForm from '../../pages/example-form';

it('renders ExampleForm unchanged', () => {
    const { container } = render(<ExampleForm />);

  expect(container).toMatchSnapshot()
})