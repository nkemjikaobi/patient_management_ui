import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import PatientProfilePic from '../../assets/images/patient-image.png';
import Svg, { Path } from 'react-native-svg';
import PatientDetailsVitals from './PatientDetailsVitals';
import PatientDetailsSections from '../PatientDetailsSections/PatientDetailsSections';
import { calculateAge } from '../helpers/utils';

const PatientDetails = ({ route, navigation }) => {
	return (
		<View style={{ padding: 20 }}>
			<View
				style={[
					styles.profile_header,
					{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
					},
				]}
			>
				<View
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						flexDirection: 'row',
					}}
				>
					<Image style={styles.profile_pic} source={PatientProfilePic} />
					<View style={styles.change_patient_details_wrapper}>
						<Text style={{ fontWeight: 'bold', fontSize: 18 }}>
							{route?.params?.patient?.first_name}{' '}
							{route?.params?.patient?.last_name}
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
								style={{
									fontSize: 14,
									color: '#68696A',
									marginHorizontal: 4,
									textTransform: 'capitalize',
								}}
							>
								{route?.params?.patient?.gender}
							</Text>
							<Text style={{ fontSize: 14, color: '#68696A' }}>
								{calculateAge(route?.params?.patient?.date_of_birth)}
							</Text>
						</View>
					</View>
				</View>
				<View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
						}}
					>
						<Svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M13.3333 7.5V15.8333H6.66663V7.5H13.3333ZM12.0833 2.5H7.91663L7.08329 3.33333H4.16663V5H15.8333V3.33333H12.9166L12.0833 2.5ZM15 5.83333H4.99996V15.8333C4.99996 16.75 5.74996 17.5 6.66663 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333Z'
								fill='#EE4266'
							/>
						</Svg>

						<TouchableOpacity>
							<Text style={{ color: '#EE4266', marginLeft: 4 }}>
								Delete Patient
							</Text>
						</TouchableOpacity>
					</View>
					<View
						style={{
							display: 'flex',
							flexDirection: 'row',
							alignItems: 'center',
							marginTop: 8,
						}}
					>
						<Svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M11.7156 7.51667L12.4823 8.28333L4.9323 15.8333H4.16563V15.0667L11.7156 7.51667ZM14.7156 2.5C14.5073 2.5 14.2906 2.58333 14.1323 2.74167L12.6073 4.26667L15.7323 7.39167L17.2573 5.86667C17.5823 5.54167 17.5823 5.01667 17.2573 4.69167L15.3073 2.74167C15.1406 2.575 14.9323 2.5 14.7156 2.5ZM11.7156 5.15833L2.49896 14.375V17.5H5.62396L14.8406 8.28333L11.7156 5.15833Z'
								fill='#393E41'
							/>
						</Svg>

						<TouchableOpacity
							onPress={() => navigation.navigate('Update Patient')}
						>
							<Text style={{ color: '#6E44FF', marginLeft: 4 }}>
								Edit Patient
							</Text>
						</TouchableOpacity>
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
			<PatientDetailsSections navigation={navigation} patient={route?.params?.patient} />
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
