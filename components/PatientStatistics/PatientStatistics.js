import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PatientStatistics = ({ allPatients, criticalPatients }) => {
	return (
		<View style={styles.card_wrapper}>
			<View style={styles.card}>
				<Text testID='admitted-label' style={styles.card_title}>Admitted Patients</Text>
				<Text style={styles.card_value}>
					{allPatients.length || 0} Patients
				</Text>
			</View>
			<View style={styles.card}>
				<Text testID='critical-label' style={styles.card_title}>Critical Patients</Text>
				<Text style={styles.card_value}>
					{criticalPatients.length || 0} Patients
				</Text>
			</View>
		</View>
	);
};

export default PatientStatistics;

const styles = StyleSheet.create({
	card_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: 40,
	},
	card: {
		borderColor: 'rgba(143, 143, 143, 0.12)',
		borderWidth: 1,
		padding: 16,
		height: 80,
		backgroundColor: '#fff',
		borderRadius: 8,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	card_title: {
		fontSize: 12,
		fontWeight: 'medium',
		color: '#8F8F8F',
		marginBottom: 8,
	},
	card_value: {
		fontWeight: 'bold',
		fontSize: 20,
		color: '#060606',
	},
});
