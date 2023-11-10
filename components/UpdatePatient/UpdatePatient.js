import React, { useEffect, useState } from 'react';
import {
	Alert,
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import PatientProfilePic from '../../assets/images/patient-image.png';
import Svg, { Path } from 'react-native-svg';
import { Dropdown } from 'react-native-element-dropdown';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import { useToast } from 'react-native-toast-notifications';

const UpdatePatient = props => {
	const [patientDetails, setPatientDetails] = useState({
		first_name: props.route.params.patient.first_name || '',
		last_name: props.route.params.patient.last_name || '',
		gender: props.route.params.patient.gender || '',
		date_of_birth: props.route.params.patient.date_of_birth || '',
		genotype: props.route.params.patient.genotype || '',
		blood_group: props.route.params.patient.blood_group || '',
		email: props.route.params.patient.email || '',
		phone_number: props.route.params.patient.phone_number || '',
		house_address: props.route.params.patient.house_address || '',
		department: props.route.params.patient.department || '',
		doctor: props.route.params.patient.doctor || '',
	});

	const [loading, setLoading] = useState(false);
	const toast = useToast();

	const genderData = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
	];

	const departmentData = [
		{ label: 'Emergency', value: 'Emergency' },
		{ label: 'Child Care', value: 'Child Care' },
		{ label: 'Ante Natal', value: 'Ante Natal' },
		{ label: 'Post Natal', value: 'Post Natal' },
		{ label: 'Seniors', value: 'Seniors' },
	];

	const doctorData = [
		{ label: 'Dr Rania Abesh', value: 'Dr Rania Abesh' },
		{ label: 'Dr Philip Nzaghi', value: 'Dr Philip Nzaghi' },
		{ label: 'Dr Walter Whyte', value: 'Dr Walter Whyte' },
		{ label: 'Dr Jesse Pinkman', value: 'Dr Jesse Pinkman' },
		{ label: 'FemDr. Connor Mcgregorale', value: 'Dr. Connor Mcgregor' },
	];

	const genoTypeData = [
		{ label: 'AA', value: 'AA' },
		{ label: 'AS', value: 'AS' },
		{ label: 'AC', value: 'AC' },
		{ label: 'SS', value: 'SS' },
		{ label: 'SC', value: 'SC' },
	];

	const bloodGroupData = [
		{ label: 'A+', value: 'A+' },
		{ label: 'A-', value: 'A-' },
		{ label: 'B+', value: 'B+' },
		{ label: 'B-', value: 'B-' },
		{ label: 'AB+', value: 'AB+' },
		{ label: 'AB-', value: 'AB-' },
		{ label: 'O+', value: 'O+' },
		{ label: 'O-', value: 'O-' },
	];

	const updatePatientHandler = async () => {
		const isDetailsValid = Object.values(patientDetails).every(
			value => value !== ''
		);

		if (isDetailsValid) {
			setLoading(true);
			try {
				const response = await fetch(
					`https://patient-management-system-api.onrender.com/patients/${props.route.params.patient._id}`,
					{
						method: 'PUT',
						body: JSON.stringify(patientDetails),
					}
				);

				if (!response.ok) {
					console.log(await response.json());
					toast.show('An error occurred while updating patient');
					setLoading(false);
				} else {
					const addedPatient = await response.json();

					toast.show('Patient updated');

					props.navigation.goBack();
				}
			} catch (error) {
				console.error('Error updating patient:', error);
				toast.show('An error occurred while updating patient');
				setLoading(false);
			}
		} else {
			toast.show('All fields are required');
		}
	};

	return (
		<ScrollView style={{ paddingTop: 20 }}>
			<View style={styles.profile_header}>
				<Image style={styles.profile_pic} source={PatientProfilePic} />
				<View style={styles.change_photo}>
					<Svg
						width='16'
						height='16'
						viewBox='0 0 16 16'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<Path
							d='M4.50668 14.6666H11.4933C13.3333 14.6666 14.0667 13.5399 14.1533 12.1666L14.5 6.65992C14.5933 5.21992 13.4467 3.99992 12 3.99992C11.5933 3.99992 11.22 3.76659 11.0333 3.40659L10.5533 2.43992C10.2467 1.83325 9.44668 1.33325 8.76668 1.33325H7.24001C6.55334 1.33325 5.75334 1.83325 5.44668 2.43992L4.96668 3.40659C4.78001 3.76659 4.40668 3.99992 4.00001 3.99992C2.55334 3.99992 1.40668 5.21992 1.50001 6.65992L1.84668 12.1666C1.92668 13.5399 2.66668 14.6666 4.50668 14.6666Z'
							stroke='#292D32'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<Path d='M7 5.33325H9H7Z' fill='#828282' />
						<Path
							d='M7 5.33325H9'
							stroke='#292D32'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
						<Path
							d='M7.99998 12.0001C9.19331 12.0001 10.1666 11.0267 10.1666 9.83341C10.1666 8.64008 9.19331 7.66675 7.99998 7.66675C6.80665 7.66675 5.83331 8.64008 5.83331 9.83341C5.83331 11.0267 6.80665 12.0001 7.99998 12.0001Z'
							stroke='#292D32'
							stroke-width='1.5'
							stroke-linecap='round'
							stroke-linejoin='round'
						/>
					</Svg>
					<Text style={{ fontSize: 12, color: '#333', marginLeft: 4 }}>
						Change Photo
					</Text>
				</View>
			</View>
			<ScrollView
				style={styles.form_wrapper}
				keyboardShouldPersistTaps='handled'
			>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ width: '45%' }}>
						<Text>First Name*</Text>
						<TextInput
							style={styles.input}
							placeholder='Clement'
							onChangeText={value =>
								setPatientDetails({ ...patientDetails, first_name: value })
							}
							value={patientDetails.first_name}
						/>
					</View>
					<View style={{ width: '45%' }}>
						<Text>Last Name*</Text>
						<TextInput
							style={styles.input}
							placeholder='Scott'
							onChangeText={value =>
								setPatientDetails({ ...patientDetails, last_name: value })
							}
							value={patientDetails.last_name}
						/>
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ width: '45%' }}>
						<Text>Email*</Text>
						<TextInput
							style={styles.input}
							placeholder='clementscott@gmail.com'
							onChangeText={value =>
								setPatientDetails({ ...patientDetails, email: value })
							}
							value={patientDetails.email}
						/>
					</View>
					<View style={{ width: '45%' }}>
						<Text>Phone Number*</Text>
						<TextInput
							keyboardType='phone-pad'
							style={styles.input}
							placeholder='647-987-4758'
							onChangeText={value =>
								setPatientDetails({ ...patientDetails, phone_number: value })
							}
							value={patientDetails.phone_number}
						/>
					</View>
				</View>
				<View>
					<Text>House Address*</Text>
					<TextInput
						style={styles.input}
						placeholder='20, Progress Avenue'
						multiline
						onChangeText={value =>
							setPatientDetails({ ...patientDetails, house_address: value })
						}
						value={patientDetails.house_address}
					/>
				</View>
				<View style={{ marginBottom: 24 }}>
					<Text style={{ marginBottom: 8 }}>Gender*</Text>
					<View style={styles.container}>
						<Dropdown
							style={[styles.dropdown]}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							inputSearchStyle={styles.inputSearchStyle}
							iconStyle={styles.iconStyle}
							data={genderData}
							search
							maxHeight={300}
							labelField='label'
							valueField='value'
							placeholder='Select gender'
							searchPlaceholder='Search...'
							value={patientDetails.gender}
							onChange={item => {
								setPatientDetails({ ...patientDetails, gender: item.value });
							}}
						/>
					</View>
				</View>
				<View>
					<View>
						<Text>Date of Birth*</Text>
						<TextInput
							style={styles.input}
							placeholder='24'
							onChangeText={value =>
								setPatientDetails({ ...patientDetails, date_of_birth: value })
							}
							value={patientDetails.date_of_birth}
							keyboardType='numeric'
						/>
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ marginBottom: 24, width: '45%' }}>
						<Text style={{ marginBottom: 8 }}>Genotype*</Text>
						<View style={styles.container}>
							<Dropdown
								style={[styles.dropdown]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={genoTypeData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder='Select genotype'
								searchPlaceholder='Search...'
								value={patientDetails.genotype}
								onChange={item => {
									setPatientDetails({
										...patientDetails,
										genotype: item.value,
									});
								}}
							/>
						</View>
					</View>
					<View style={{ marginBottom: 24, width: '45%' }}>
						<Text style={{ marginBottom: 8 }}>Blood Group*</Text>
						<View style={styles.container}>
							<Dropdown
								style={[styles.dropdown]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={bloodGroupData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder='Select blood group'
								searchPlaceholder='Search...'
								value={patientDetails.blood_group}
								onChange={item => {
									setPatientDetails({
										...patientDetails,
										blood_group: item.value,
									});
								}}
							/>
						</View>
					</View>
				</View>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
					}}
				>
					<View style={{ marginBottom: 24, width: '45%' }}>
						<Text style={{ marginBottom: 8 }}>Department*</Text>
						<View style={styles.container}>
							<Dropdown
								style={[styles.dropdown]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={departmentData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder='Select department'
								searchPlaceholder='Search...'
								value={patientDetails.department}
								onChange={item => {
									setPatientDetails({
										...patientDetails,
										department: item.value,
									});
								}}
							/>
						</View>
					</View>
					<View style={{ marginBottom: 24, width: '45%' }}>
						<Text style={{ marginBottom: 8 }}>Doctor*</Text>
						<View style={styles.container}>
							<Dropdown
								style={[styles.dropdown]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={doctorData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder='Select doctor'
								searchPlaceholder='Search...'
								value={patientDetails.doctor}
								onChange={item => {
									setPatientDetails({ ...patientDetails, doctor: item.value });
								}}
							/>
						</View>
					</View>
				</View>

				<View style={styles.buttonContainer}>
					<TouchableOpacity
						onPress={() => updatePatientHandler()}
						style={styles.add_patient_btn}
						disabled={loading}
					>
						<Text style={{ color: '#fff' }}>
							{loading ? 'Updating Patient...' : 'Update'}
						</Text>
					</TouchableOpacity>
				</View>
			</ScrollView>
		</ScrollView>
	);
};

export default UpdatePatient;

const styles = StyleSheet.create({
	profile_header: {
		paddingHorizontal: 20,
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
	},
	change_photo: {
		backgroundColor: '#fff',
		width: 118,
		height: 36,
		borderRadius: 20,
		padding: 10,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		shadowColor: '0px 4px 4px 0px rgba(0, 0, 0, 0.06)',
		marginLeft: 6,
	},
	profile_pic: {
		width: 56,
		height: 56,
	},
	buttonContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		paddingBottom: 24,
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
	input: {
		height: 40,
		padding: 10,
		marginTop: 12,
		marginBottom: 24,
		backgroundColor: '#E8EDF1',
		borderRadius: 6,
		color: '#697D95',
	},
	form_wrapper: {
		marginTop: 32,
		paddingHorizontal: 20,
	},

	//Dropdown
	container: {
		backgroundColor: '#E8EDF1',
		padding: 10,
		borderRadius: 6,
	},
	dropdown: {},
	icon: {
		marginRight: 5,
	},
	placeholderStyle: {
		fontSize: 16,
	},
	selectedTextStyle: {
		fontSize: 16,
	},
	iconStyle: {
		width: 20,
		height: 20,
	},
	inputSearchStyle: {
		height: 40,
		fontSize: 16,
	},
});
