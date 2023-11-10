import React, { useEffect, useState } from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import SingleAdmittedPatientCard from '../SingleAdmittedPatientCard/SingleAdmittedPatientCard';

const AdmittedPatients = ({ loading, admittedPatients }) => {
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredAdmittedPatients, setFilteredAdmittedPatients] = useState([]);
	const renderItem = data => <SingleAdmittedPatientCard patient={data.item} />;

	useEffect(() => {
		if (searchTerm) {
			const filteredPatients = admittedPatients.filter(
				patient =>
					patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setFilteredAdmittedPatients(filteredPatients);
		}
	}, [searchTerm]);

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Admitted Patients</Text>
			<TextInput
				placeholder='Search for a patient'
				style={styles.input}
				onChangeText={setSearchTerm}
				value={searchTerm}
			/>

			{!loading && admittedPatients?.length === 0 ? (
				<Text>There are no admitted patients...</Text>
			) : loading ? (
				<View style={styles.loader}>
					<ActivityIndicator size='small' color='#0000ff' />
					<Text style={{ marginTop: 12 }}>
						Fetching all admitted patients...
					</Text>
				</View>
			) : (
				<FlatList
					data={searchTerm ? filteredAdmittedPatients : admittedPatients}
					renderItem={patient => renderItem(patient)}
					keyExtractor={patient => patient._id}
				/>
			)}
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
