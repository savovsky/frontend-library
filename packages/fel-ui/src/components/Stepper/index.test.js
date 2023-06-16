import React from 'react';
import { render, cleanup } from '@testing-library/react';

import Stepper from '.';

afterEach(cleanup);

describe('<Stepper />', () => {
    const testMsg = 'Should render Component correctly';
    const componentId = 'fel-stepper';
    const labelOne = 'one';
    const labelTwo = 'two';
    const labelThree = 'three';

    const stepperItems = [labelOne, labelTwo, labelThree];

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <Stepper stepperItems={stepperItems} completedSteps={0} />,
        );

        const component = getByTestId(componentId);
        const stepOne = getByText(1);
        const stepTwo = getByText(2);
        const stepThree = getByText(3);
        const stepLabelOne = getByText(labelOne);
        const stepLabelTwo = getByText(labelTwo);
        const stepLabelThree = getByText(labelThree);

        expect(component).toBeTruthy();
        expect(stepOne).toBeInTheDocument();
        expect(stepOne).not.toHaveClass('completed');
        expect(stepTwo).toBeInTheDocument();
        expect(stepTwo).not.toHaveClass('completed');
        expect(stepThree).toBeInTheDocument();
        expect(stepThree).not.toHaveClass('completed');

        expect(stepLabelOne).toBeInTheDocument();
        expect(stepLabelOne).not.toHaveClass('completed');
        expect(stepLabelTwo).toBeInTheDocument();
        expect(stepLabelTwo).not.toHaveClass('completed');
        expect(stepLabelThree).toBeInTheDocument();
        expect(stepLabelThree).not.toHaveClass('completed');
    });

    test(`${testMsg} with provided props`, () => {
        const { getByTestId, getByText } = render(
            <Stepper stepperItems={stepperItems} completedSteps={2} />,
        );

        const component = getByTestId(componentId);
        const stepOne = getByText(1);
        const stepTwo = getByText(2);
        const stepThree = getByText(3);
        const stepLabelOne = getByText(labelOne);
        const stepLabelTwo = getByText(labelTwo);
        const stepLabelThree = getByText(labelThree);

        expect(component).toBeTruthy();
        expect(stepOne).toBeInTheDocument();
        expect(stepOne).toHaveClass('completed');
        expect(stepTwo).toBeInTheDocument();
        expect(stepTwo).toHaveClass('completed');
        expect(stepThree).toBeInTheDocument();
        expect(stepThree).not.toHaveClass('completed');

        expect(stepLabelOne).toBeInTheDocument();
        expect(stepLabelOne).toHaveClass('completed');
        expect(stepLabelTwo).toBeInTheDocument();
        expect(stepLabelTwo).toHaveClass('completed');
        expect(stepLabelThree).toBeInTheDocument();
        expect(stepLabelThree).not.toHaveClass('completed');
    });
});
