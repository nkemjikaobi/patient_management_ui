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

import AddPatient from '../AddPatient/AddPatient';

test('Test to Add New Patient', async () => {
	//Register the navigation since the component is a direct descendant of the navigation
	const Stack = createNativeStackNavigator();

	const firstNameText = 'lisa';
	const lastnameText = 'joe';
	const emailText = 'lisajoe@gmail.com';
	const addressText = '941 Progess Avenue, Toronto';
	const phoneNumberText = '6478474764';

	render(
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name='Add Patient' component={AddPatient} />
			</Stack.Navigator>
		</NavigationContainer>
	);

	fireEvent.changeText(screen.getByTestId('first-name'), firstNameText);
	fireEvent.changeText(screen.getByTestId('last-name'), lastnameText);
	fireEvent.changeText(screen.getByTestId('email'), emailText);
	fireEvent.changeText(screen.getByTestId('address'), addressText);
	fireEvent.changeText(screen.getByTestId('phone-number'), phoneNumberText);

	const firstNameInput = await screen.findByTestId('first-name');
	const lastNameInput = await screen.findByTestId('last-name');
	const emailInput = await screen.findByTestId('email');
	const addressInput = await screen.findByTestId('address');
	const phoneNumberInput = await screen.findByTestId('phone-number');

	// Check if the "Proceed" button is in the DOM
	const proceedButton = screen.getByText('Proceed');

	expect(proceedButton).toBeTruthy();

	expect(firstNameInput).toHaveProp('value', firstNameText);
	expect(lastNameInput).toHaveProp('value', lastnameText);
	expect(emailInput).toHaveProp('value', emailText);
	expect(addressInput).toHaveProp('value', addressText);
	expect(phoneNumberInput).toHaveProp('value', phoneNumberText);
});
