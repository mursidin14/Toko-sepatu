import { render } from '@testing-library/react';
import Button from './index';
import { BrowserRouter as Router } from 'react-router-dom'



// test button disabled
test('The Button must not be allowed if isDisabled exist', () => {
    const { container } = render(<Button isDisebled />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access, jest/valid-expect
    expect(container.querySelector("span.disabled"))
});

// test button Loading
test('The Button will load if there is writing loading', () => {
    
    const { container, getByText }  = render(<Button isLoading />);

    // eslint-disable-next-line jest/valid-expect, testing-library/prefer-screen-queries
    expect(getByText(/loading/i));
    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access, jest/valid-expect
    expect(container.querySelector("span"));
});

// test button link external
test('Testing render <a> tag external', () => {
    const { container } = render(<Button type="link" isExternal />);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access, jest/valid-expect
    expect(container.querySelector("a"));
});

// test button link internal
test('Testing render <a> tag internal', () => {
    const { container } = render(<Router><Button type="link" /></Router>);

    // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access, jest/valid-expect
    expect(container.querySelector("a"));
});
