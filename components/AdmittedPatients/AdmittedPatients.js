import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

const AdmittedPatients = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Admitted Patients</Text>
			<TextInput
				placeholder='Search for a patient'
				style={styles.input}
				onChangeText={() => {}}
				value={''}
			/>
		</View>
	);
};

export default AdmittedPatients;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: 20,
		paddingTop: 24,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 12,
	},
	input: {
		height: 44,
		padding: 12,
		backgroundColor: '#E8EDF1',
		borderRadius: 6,
	},
});
