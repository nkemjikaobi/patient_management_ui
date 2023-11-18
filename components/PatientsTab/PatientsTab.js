import {
	ActivityIndicator,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import PatientListing from '../PatientListing/PatientListing';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function PatientsTab(props) {
	const [allPatients, setAllPatients] = useState([]);
	const [loading, setLoading] = useState(true);
	const [searchTerm, setSearchTerm] = useState('');
	const [filteredPatients, setFilteredPatients] = useState([]);

	//Method to fetch all patients
	const fetchPatients = async () => {
		await fetch('https://patient-management-system-api.onrender.com/patients')
			.then(response => response.json())
			.then(json => {
				setAllPatients(json);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			})
			.catch(error => {
				setLoading(false);
			});
	};

	// Use useFocusEffect to run code when the screen is focused
	useFocusEffect(
		useCallback(() => {
			// Fetch patients when the screen is focused
			fetchPatients();
		}, [])
	);

	useEffect(() => {
		if (searchTerm) {
			const filteredPatients = allPatients.filter(
				patient =>
					patient.first_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					patient.last_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
					patient.condition.toLowerCase().includes(searchTerm.toLowerCase())
			);

			setFilteredPatients(filteredPatients);
		}
	}, [searchTerm]);

	return (
		<View style={styles.wrapper}>
			<View style={{ paddingHorizontal: 20 }}>
				<TextInput
					placeholder='Search for a patient'
					style={styles.input}
					onChangeText={setSearchTerm}
					value={searchTerm}
				/>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				{!loading && allPatients?.length === 0 ? (
					<Text>There are no patients...</Text>
				) : loading ? (
					<View style={styles.loader}>
						<ActivityIndicator size='small' color='#0000ff' />
						<Text style={{ marginTop: 12 }}>Fetching all patients...</Text>
					</View>
				) : (
					<PatientListing
						allPatients={searchTerm ? filteredPatients : allPatients}
						navigationProps={props}
					/>
				)}
			</View>
			<View style={styles.buttonContainer}>
				<TouchableOpacity
					onPress={() => props.navigation.navigate('Add Patient')}
					style={styles.add_patient_btn}
				>
					<Text style={{ color: '#fff' }}>Add New Patient</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	loader: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		paddingTop: 100,
	},
	wrapper: {
		backgroundColor: '#fff',
		flex: 1,
		position: 'relative',
	},
	input: {
		height: 44,
		padding: 12,
		backgroundColor: '#E8EDF1',
		borderRadius: 6,
		marginBottom: 20,
	},
	buttonContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		bottom: 0,
		width: '100%',
	},
	add_patient_btn: {
		width: '90%',
		flex: 1,
		height: 44,
		borderRadius: 6,
		paddingHorizontal: 16,
		paddingVertical: 14,
		backgroundColor: '#6E44FF',
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
});
