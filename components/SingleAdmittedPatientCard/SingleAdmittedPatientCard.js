import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import PatientImg from '../../assets/images/patient.png';
import { calculateAge } from '../helpers/utils';

const SingleAdmittedPatientCard = ({ patient }) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.patient_bio_wrapper}>
				<View style={styles.patient_bio}>
					<Image source={PatientImg} style={styles.image} />
					<Text style={{ color: '#141617', fontSize: 14, fontWeight: 'bold', textTransform: 'capitalize' }}>
						{patient?.first_name} {patient?.last_name}
					</Text>
				</View>
				<Text style={{ color: '#141617', fontSize: 13 }}>
					({calculateAge(patient?.date_of_birth)})
				</Text>
			</View>
			<View style={styles.patient_readings}>
				<View style={styles.patient_readings_wrapper}>
					<Text style={{ fontWeight: 'bold' }}>Condition:</Text>
					<Text
						style={
							patient.condition === 'normal'
								? { color: 'black', textTransform: 'capitalize' }
								: { color: 'red', textTransform: 'capitalize' }
						}
					>
						{' '}
						{patient.condition}
					</Text>
				</View>
				<View style={styles.patient_readings_wrapper}>
					<Text style={{ fontWeight: 'bold' }}>Doctor:</Text>
					<Text
						style={
							patient.condition === 'normal'
								? { color: 'black', textTransform: 'capitalize' }
								: { color: 'red', textTransform: 'capitalize' }
						}
					>
						{' '}
						{patient.doctor}
					</Text>
				</View>
				
			</View>
		</View>
	);
};

export default SingleAdmittedPatientCard;

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		marginVertical: 14,
		borderBottomColor: 'rgba(0, 0, 0, 0.08)',
		// borderWidth: 1,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		paddingBottom: 12,
	},
	patient_bio: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 8,
	},
	patient_bio_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 14,
	},
	patient_readings: {
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	patient_readings_wrapper: {
		display: 'flex',
		flexDirection: 'row',
	},
	image: {
		width: 28,
		height: 28,
		marginRight: 4,
	},
});
