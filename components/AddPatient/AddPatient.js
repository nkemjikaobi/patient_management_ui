import React, { useState } from 'react';
import {
	Image,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	View,
} from 'react-native';
import PatientProfilePic from '../../assets/images/patient-image.png';
import Svg, { Path } from 'react-native-svg';
import { Dropdown } from 'react-native-element-dropdown';
import DatePicker from 'react-native-date-picker';
import { Button } from 'react-native';

const AddPatient = () => {
	const [gender, setGender] = useState(null);
	const [genoType, setGenoType] = useState(null);
	const [bloodGroup, setBloodGroup] = useState(null);
	const [isFocus, setIsFocus] = useState(false);
	const [date, setDate] = useState(new Date());
	const [open, setOpen] = useState(false);

	const genderData = [
		{ label: 'Male', value: 'male' },
		{ label: 'Female', value: 'female' },
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

	return (
		<View style={{ paddingTop: 20 }}>
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
			<ScrollView style={styles.form_wrapper}>
				<View>
					<Text>Patient Name*</Text>
					<TextInput style={styles.input} placeholder='Clement Scott' />
				</View>
				<View style={{ marginBottom: 24 }}>
					<Text style={{ marginBottom: 8 }}>Gender*</Text>
					<View style={styles.container}>
						<Dropdown
							style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
							placeholderStyle={styles.placeholderStyle}
							selectedTextStyle={styles.selectedTextStyle}
							inputSearchStyle={styles.inputSearchStyle}
							iconStyle={styles.iconStyle}
							data={genderData}
							search
							maxHeight={300}
							labelField='label'
							valueField='value'
							placeholder={!isFocus ? 'Select gender' : '...'}
							searchPlaceholder='Search...'
							value={gender}
							onChange={item => {
								setGender(item.value);
							}}
						/>
					</View>
				</View>
				<>
					{/* <Button title='Open' onPress={() => setOpen(true)} /> */}
					{/* <DatePicker
						modal
						open={true}
						// open={open}
						date={date}
						onConfirm={date => {
							setOpen(false);
							setDate(date);
						}}
						onCancel={() => {
							setOpen(false);
						}}
					/> */}
					{/* <DatePicker date={date} onDateChange={setDate} /> */}
				</>
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
								style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={genoTypeData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder={!isFocus ? 'Select genotype' : '...'}
								searchPlaceholder='Search...'
								value={genoType}
								onChange={item => {
									setGenoType(item.value);
								}}
							/>
						</View>
					</View>
					<View style={{ marginBottom: 24, width: '45%' }}>
						<Text style={{ marginBottom: 8 }}>Blood Group*</Text>
						<View style={styles.container}>
							<Dropdown
								style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
								placeholderStyle={styles.placeholderStyle}
								selectedTextStyle={styles.selectedTextStyle}
								inputSearchStyle={styles.inputSearchStyle}
								iconStyle={styles.iconStyle}
								data={bloodGroupData}
								search
								maxHeight={300}
								labelField='label'
								valueField='value'
								placeholder={!isFocus ? 'Select blood group' : '...'}
								searchPlaceholder='Search...'
								value={bloodGroup}
								onChange={item => {
									setBloodGroup(item.value);
								}}
							/>
						</View>
					</View>
				</View>
				<View>
					<Text>Phone Number*</Text>
					<TextInput
						keyboardType='phone-pad'
						style={styles.input}
						placeholder='647-987-4758'
					/>
				</View>
				<View>
					<Text>Allergies*</Text>
					<TextInput style={styles.input} placeholder='Beef, Sulphur,...' />
					<Text style={{ marginTop: -16, fontSize: 14 }}>
						Separate allergies with a comma (,)
					</Text>
				</View>
			</ScrollView>
		</View>
	);
};

export default AddPatient;

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
