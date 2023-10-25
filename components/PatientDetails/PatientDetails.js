import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PatientProfilePic from '../../assets/images/patient-image.png';
import Svg, { Path } from 'react-native-svg';
import PatientDetailsVitals from './PatientDetailsVitals';

const PatientDetails = ({ route }) => {
	return (
		<View style={{ padding: 20 }}>
			<View style={styles.profile_header}>
				<Image style={styles.profile_pic} source={PatientProfilePic} />
				<View style={styles.change_patient_details_wrapper}>
					<Text style={{ fontWeight: 'bold', fontSize: 18 }}>
						{route?.params?.patient?.name}
					</Text>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							marginTop: 12,
							alignItems: 'center',
						}}
					>
						<Svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M7.99996 7.99992C6.16815 7.99992 4.67539 6.51253 4.66666 4.68272C4.6754 6.51149 6.1692 7.99992 7.99996 7.99992ZM7.99996 7.99992C9.83715 7.99992 11.3333 6.50378 11.3333 4.66658M7.99996 7.99992C9.8361 7.99992 11.3333 6.50273 11.3333 4.66658M11.3333 4.66658C11.3333 2.83477 9.8459 1.34202 8.01609 1.33329C9.84486 1.34203 11.3333 2.83582 11.3333 4.66658ZM4.66666 4.65045C4.67537 2.82602 6.15939 1.34199 7.98383 1.33329C6.16043 1.342 4.67538 2.82706 4.66666 4.65045Z'
								fill='#68696A'
								stroke='#68696A'
							/>
							<Path
								d='M8.0001 10C9.16777 10 10.2359 10.2816 11.1252 10.7578C10.2129 10.2749 9.13147 10 8.0001 10ZM8.0001 10C6.83243 10 5.76427 10.2816 4.87497 10.7578C5.7873 10.2749 6.86873 10 8.0001 10Z'
								fill='#292D32'
								stroke='#68696A'
							/>
						</Svg>

						<Text
							style={{ fontSize: 14, color: '#68696A', marginHorizontal: 4 }}
						>
							Female
						</Text>
						<Text style={{ fontSize: 14, color: '#68696A' }}>
							{route?.params?.patient?.age} years
						</Text>
					</View>
				</View>
			</View>
			<View style={styles.admission_status}>
				<Text>Admission Status</Text>
				<Text>
					{route?.params?.patient?.isAdmitted ? 'Admitted' : 'Not Admitted'}
				</Text>
			</View>
			<PatientDetailsVitals />
			<TouchableOpacity style={styles.admit_patient_btn}>
				<Text style={{ color: '#fff' }}>Admit Patient</Text>
			</TouchableOpacity>
		</View>
	);
};

export default PatientDetails;

const styles = StyleSheet.create({
	profile_header: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	profile_pic: {
		width: 56,
		height: 56,
	},
	change_patient_details_wrapper: {
		display: 'flex',
		marginLeft: 8,
	},
	admission_status: {
		width: 335,
		height: 44,
		borderWidth: 1,
		borderRadius: 4,
		padding: 12,
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: '#E8EDF1',
		marginTop: 24,
		borderColor: '#E8EDF1',
	},
	admit_patient_btn: {
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
