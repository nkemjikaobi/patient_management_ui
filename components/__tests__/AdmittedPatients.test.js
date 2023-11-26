import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import AdmittedPatients from '../AdmittedPatients/AdmittedPatients';

test('Test for Admitted Patients Search Bar', async () => {
	const searchText = 'lisa';

	render(<AdmittedPatients admittedPatients={[]} loading={false} />);

	fireEvent.changeText(
		screen.getByTestId('search-admitted-patients'),
		searchText
	);

	const searchInput = await screen.findByTestId('search-admitted-patients');

	//   console.log({ searchInputValue: searchInput.props.value });

	expect(searchInput).toHaveProp('value', searchText);
});
