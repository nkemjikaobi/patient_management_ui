import React from 'react';

import {
	render,
	screen,
} from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

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
