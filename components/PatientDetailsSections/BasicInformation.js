import React from 'react';
import {
	StyleSheet,
	Text,
	Touchable,
	TouchableOpacity,
	View,
} from 'react-native';
import Toast from 'react-native-root-toast';
import { Path, Svg } from 'react-native-svg';

const BasicInformation = ({ patient, navigation }) => {

	const deletePatient = async () => {
		try {
			const response = await fetch(
				`https://patient-management-system-api.onrender.com/patients/${patient._id}`,
				{
					method: 'DELETE',
				}
			);

			if (!response.ok) {
				Toast.show('An error occurred while deleting patient', {
					duration: Toast.durations.LONG,
				});
			} else {
				const addedPatient = await response.json();

				Toast.show('Patient deleted', {
					duration: Toast.durations.LONG,
				});
				navigation.goBack();
			}
		} catch (error) {
			console.error('Error deleting patient:', error);
			Toast.show('An error occurred while deleting patient', {
				duration: Toast.durations.LONG,
			});
		}
	};

	return (
		<View style={styles.wrapper}>
			<View>
				<Text style={styles.title}>Contact Information</Text>
				<Text style={styles.body}>{patient?.email}</Text>
				<Text style={styles.body}>{patient?.house_address}</Text>

				<Text style={styles.title}>Health Data</Text>
				<Text style={styles.body}>Blood Group - {patient?.blood_group}</Text>
				<Text style={styles.body}>Genotype - {patient?.genotype}</Text>

				<Text style={styles.title}>Hospital Data</Text>
				<Text style={styles.body}>Doctor - {patient?.doctor}</Text>
				<Text style={styles.body}>Department - {patient?.department}</Text>

				{/* <Text style={styles.title}>Allergies</Text>
				<Text style={styles.body}>N/A</Text> */}
			</View>
			<View
				style={{
					display: 'flex',
					alignItems: 'center',
					flexDirection: 'row',
					justifyContent: 'space-between',
				}}
			>
				<TouchableOpacity
					onPress={() =>
						navigation.navigate('Update Patient', {
							patient,
						})
					}
				>
					<Svg
						width='20'
						height='20'
						viewBox='0 0 20 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
						style={{ marginRight: 12 }}
					>
						<Path
							d='M11.7156 7.51667L12.4823 8.28333L4.9323 15.8333H4.16563V15.0667L11.7156 7.51667ZM14.7156 2.5C14.5073 2.5 14.2906 2.58333 14.1323 2.74167L12.6073 4.26667L15.7323 7.39167L17.2573 5.86667C17.5823 5.54167 17.5823 5.01667 17.2573 4.69167L15.3073 2.74167C15.1406 2.575 14.9323 2.5 14.7156 2.5ZM11.7156 5.15833L2.49896 14.375V17.5H5.62396L14.8406 8.28333L11.7156 5.15833Z'
							fill='#393E41'
						/>
					</Svg>
				</TouchableOpacity>
				<TouchableOpacity onPress={() => deletePatient()}>
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
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default BasicInformation;

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		alignItems: 'baseline',
		flexDirection: 'row',
		justifyContent: 'space-between',
		padding: 12,
		borderRadius: 4,
		borderColor: 'lightgray',
		borderWidth: 1,
	},
	title: {
		fontSize: 14,
		color: '#232324',
		opacity: 0.6,
		marginVertical: 12,
	},
	body: {
		fontSize: 14,
		color: '#232324',
		marginBottom: 4,
	},
});
