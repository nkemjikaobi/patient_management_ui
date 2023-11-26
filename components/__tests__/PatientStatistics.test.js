import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import Lol from '../../Lol';
import PatientStatistics from '../PatientStatistics/PatientStatistics';


test('Test for Patient Statistics', async () => {
	const expectedAdmittedLabel = 'Admitted Patients';
	const expectedCriticalLabel = 'Critical Patients';

	render(<PatientStatistics allPatients={[]} criticalPatients={{}} />);

	// Using `findBy` query to wait for asynchronous operation to finish
	const admittedOutput = await screen.findByTestId('admitted-label');
	const criticalOutput = await screen.findByTestId('critical-label');


	// Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
	expect(admittedOutput).toHaveTextContent(expectedAdmittedLabel);
	expect(criticalOutput).toHaveTextContent(expectedCriticalLabel);
});

test('examples of some things', async () => {
	const expectedUsername = 'Lol';

	render(<Lol />);

	// fireEvent.changeText(screen.getByTestId('input'), expectedUsername);
	// fireEvent.press(screen.getByText('Print Username'));

	// Using `findBy` query to wait for asynchronous operation to finish
	const usernameOutput = await screen.findByTestId('printed-username');

	// Using `toHaveTextContent` matcher from `@testing-library/jest-native` package.
	expect(usernameOutput).toHaveTextContent(expectedUsername);

	// expect(screen.toJSON()).toMatchSnapshot();
});
