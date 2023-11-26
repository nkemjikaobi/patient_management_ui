jest.useFakeTimers();
// Mock fetch at the top of the file
global.fetch = jest.fn(() =>
 Promise.resolve({
     json: () => Promise.resolve([]),
 })
);
import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

import PatientsTab from '../PatientsTab/PatientsTab';

test('Test for All Patients', async () => {
	//Register the navigation since the component is a direct descendant of the navigation
	const Stack = createNativeStackNavigator();

	const searchText = 'john';

	render(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='All Patients' component={PatientsTab} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	fireEvent.changeText(screen.getByTestId('search-all-patients'), searchText);

	const searchInput = await screen.findByTestId('search-all-patients');

	// Check if the "Add New Patient" button is in the DOM
	const addNewPatientButton = screen.getByText('Add New Patient');
	
	expect(addNewPatientButton).toBeTruthy();
	expect(searchInput).toHaveProp('value', searchText);
});
