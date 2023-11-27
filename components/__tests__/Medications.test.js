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

import Medications from '../PatientDetailsSections/Medications';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

test('Test for All Medications', async () => {
	const Stack = createNativeStackNavigator();

	render(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Medications' component={Medications} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	// Check if the "Add New Medication" icon is in the DOM
	const addNewMeidcationIcon = screen.getByTestId('add-medication');

	expect(addNewMeidcationIcon).toBeTruthy();
});
