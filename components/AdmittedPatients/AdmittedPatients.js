import React from 'react';
import { FlatList, StyleSheet, Text, TextInput, View } from 'react-native';
import SingleAdmittedPatientCard from '../SingleAdmittedPatientCard/SingleAdmittedPatientCard';

const AdmittedPatients = () => {
	const data = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Victor Thompson',
			age: 23,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			name: 'Jonathan Trudieu',
			age: 30,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			name: 'Hannah Baker',
			age: 43,
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
			name: 'Jeremy Walker',
			age: 3,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63q',
			name: 'Elisha Macmilan',
			age: 31,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72e',
			name: 'Harrison Wells',
			age: 53,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72d',
			name: 'Hannah Baker',
			age: 43,
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bass',
			name: 'Jeremy Walker',
			age: 3,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63qe',
			name: 'Elisha Macmilan',
			age: 31,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72ew',
			name: 'Harrison Wells',
			age: 53,
		},
	];

	const renderItem = data => <SingleAdmittedPatientCard patient={data.item} />;

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Admitted Patients</Text>
			<TextInput
				placeholder='Search for a patient'
				style={styles.input}
				onChangeText={() => {}}
				value={''}
			/>
			<FlatList
				data={data}
				renderItem={patient => renderItem(patient)}
				keyExtractor={patient => patient.id}
			/>
		</View>
	);
};

export default AdmittedPatients;

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		// flex: 1,
		paddingHorizontal: 20,
		paddingTop: 24,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 12,
		color: '#000',
	},
	input: {
		height: 44,
		padding: 12,
		backgroundColor: '#E8EDF1',
		borderRadius: 6,
		marginBottom: 20,
	},
});
