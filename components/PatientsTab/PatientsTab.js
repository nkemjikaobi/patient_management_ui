import {
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import PatientListing from '../PatientListing/PatientListing';

export default function PatientsTab(props) {
	return (
		<View style={styles.wrapper}>
			<View style={{ paddingHorizontal: 20 }}>
				<TextInput
					placeholder='Search for a patient'
					style={styles.input}
					onChangeText={() => {}}
					value={''}
				/>
			</View>
			<View style={{ paddingHorizontal: 20 }}>
				<PatientListing />
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
