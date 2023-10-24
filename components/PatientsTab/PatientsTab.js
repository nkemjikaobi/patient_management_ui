import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import PatientListing from '../PatientListing/PatientListing';

export default function PatientsTab() {
	return (
		<View style={styles.wrapper}>
			<TextInput
				placeholder='Search for a patient'
				style={styles.input}
				onChangeText={() => {}}
				value={''}
			/>
			<PatientListing />
			<TouchableOpacity style={styles.add_patient_btn}>
				<Text style={{ color: '#fff' }}>Add New Patient</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		flex: 1,
		paddingHorizontal: 20,
	},
	input: {
		height: 44,
		padding: 12,
		backgroundColor: '#E8EDF1',
		borderRadius: 6,
		marginBottom: 20,
	},
	add_patient_btn: {
		width: 335,
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
