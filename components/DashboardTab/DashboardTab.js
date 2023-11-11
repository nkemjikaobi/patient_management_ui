import { StyleSheet, View } from 'react-native';
import PatientStatistics from '../PatientStatistics/PatientStatistics';
import CriticalAttentionPatients from '../CriticalAttentionPatients/CriticalAttentionPatients';
import AdmittedPatients from '../AdmittedPatients/AdmittedPatients';
import { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

export default function DashboardTab() {
	const [allPatients, setAllPatients] = useState([]);
	const [admittedPatients, setAdmittedPatients] = useState([]);
	const [criticalPatients, setCriticalPatients] = useState([]);
	const [loading, setLoading] = useState(true);

	//Method to fetch all patients
	const fetchPatients = async () => {
		await fetch('https://patient-management-system-api.onrender.com/patients')
			.then(response => response.json())
			.then(json => {
				setAllPatients(json);
				const criticalPatients = json.filter(
					patient => patient.condition === 'critical'
				);
				const admittedPatients = json.filter(patient => patient.isAdmitted);

				setCriticalPatients(criticalPatients);
				setAdmittedPatients(admittedPatients);

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
			// Fetch patients or trigger any action you want when the screen is focused
			fetchPatients();
		}, [])
	);

	return (
		<View style={{ paddingTop: 20 }}>
			<PatientStatistics
				allPatients={allPatients}
				criticalPatients={criticalPatients}
			/>
			<CriticalAttentionPatients
				loading={loading}
				criticalPatients={criticalPatients}
			/>
			<AdmittedPatients loading={loading} admittedPatients={admittedPatients} />
		</View>
	);
}

const styles = StyleSheet.create({});
