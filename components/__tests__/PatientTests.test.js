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
import PatientTests from '../PatientDetailsSections/PatientTests';

test('Patient Tests', async () => {
	const Stack = createNativeStackNavigator();

	render(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Patient Tests' component={PatientTests} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	// Check if the "Add New Test" icon is in the DOM
	const addNewTestIcon = screen.getByTestId('add-icon');

	expect(addNewTestIcon).toBeTruthy();
});
