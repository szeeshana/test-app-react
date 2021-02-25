import ToolBar from './Toolbar';
import * as ReactDOM from 'react-dom';
import React from 'react';
import { fireEvent, waitForElement } from '@testing-library/react';


describe('Login component tests', () => {

    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDOM.render(<ToolBar />, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        ReactDOM.render(<ToolBar type='V' />, container);
    });
    // it('Renders correctly initial document', () => {
    //     const inputs = container.querySelectorAll('div');
    //     expect(inputs).toHaveLength(1);
    //     // expect(inputs[0].name).toBe('login');
    //     // expect(inputs[1].name).toBe('password');
    //     // expect(inputs[2].value).toBe('Login');

    //     // const label = container.querySelector('label');
    //     // expect(label).not.toBeInTheDocument();

    // });

    // it('Renders correctly initial document with data-test query', () => {
    //     expect(container.querySelector("[data-test='login-form']")).toBeInTheDocument();
    //     expect(container.querySelector("[data-test='login-input']")?.getAttribute('name'))
    //         .toBe('login');
    //     expect(container.querySelector("[data-test='password-input']")?.getAttribute('name'))
    //         .toBe('password');
    // });
    // it('Passes credentials correctly', () => {
    //     const inputs = container.querySelectorAll('input');
    //     const loginInput = inputs[0];
    //     const passwordInput = inputs[1];
    //     const loginButton = inputs[2];
    //     fireEvent.change(loginInput, { target: { value: 'someUser' } });
    //     fireEvent.change(passwordInput, { target: { value: 'somePass' } });
    //     fireEvent.click(loginButton);
    //     expect(loginServiceSpy).toBeCalledWith('someUser', 'somePass');
    // });
    // it('Renders correctly status label - invalid login', async () => {
    //     loginServiceSpy.mockResolvedValueOnce(false);
    //     const inputs = container.querySelectorAll('input');
    //     const loginButton = inputs[2];
    //     fireEvent.click(loginButton);
    //     const statusLabel = await waitForElement(() =>
    //         container.querySelector('label')
    //     );
    //     expect(statusLabel).toBeInTheDocument();
    //     expect(statusLabel).toHaveTextContent('Login failed');
    // });
    // it('Renders correctly status label - valid login', async () => {
    //     loginServiceSpy.mockResolvedValueOnce(true);
    //     const inputs = container.querySelectorAll('input');
    //     const loginButton = inputs[2];
    //     fireEvent.click(loginButton);
    //     const statusLabel = await waitForElement(() =>
    //         container.querySelector('label')
    //     );
    //     expect(statusLabel).toBeInTheDocument();
    //     expect(statusLabel).toHaveTextContent('Login successful');
    // });



})