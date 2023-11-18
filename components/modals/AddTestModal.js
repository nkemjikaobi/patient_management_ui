import React, { useState } from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import Toast from 'react-native-root-toast';

const AddTestModal = ({
	modalVisible,
	setModalVisible,
	patient,
	manualRefetch,
}) => {
	const [testDetails, setTestDetails] = useState({
		name: '',
		value: '',
		test_date: '',
		notes: '',
	});
	const [loading, setLoading] = useState(false);

	const addTestHandler = async () => {
		const isDetailsValid = Object.entries(testDetails).every(
			([key, value]) => key === 'notes' || value !== ''
		);

		if (isDetailsValid) {
			setLoading(true);
			try {
				const response = await fetch(
					`https://patient-management-system-api.onrender.com/patients/${patient?._id}/tests`,
					{
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify(testDetails),
					}
				);

				if (!response.ok) {
					Toast.show('An error occurred while adding test.', {
						duration: Toast.durations.LONG,
					});
					setLoading(false);
				} else {
					const addedPatient = await response.json();

					Toast.show('Test added.', {
						duration: Toast.durations.LONG,
					});

					manualRefetch();

					setModalVisible(false);
				}
			} catch (error) {
				console.error('Error adding test:', error);
				Toast.show('An error occurred while adding test', {
					duration: Toast.durations.LONG,
				});
				setLoading(false);
			}
		} else {
			Toast.show('All fields besides notes are required.', {
				duration: Toast.durations.LONG,
			});
		}
	};

	return (
		<View style={styles.centeredView}>
			<View style={styles.modalView}>
				<View
					style={{
						display: 'flex',
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
						width: '100%',
					}}
				>
					<Text style={styles.modalText}>Add Test</Text>
					<TouchableOpacity onPress={() => setModalVisible(!modalVisible)}>
						<Svg
							width='21'
							height='21'
							viewBox='0 0 21 21'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<Path
								d='M16.3333 5.84163L15.1583 4.66663L10.5 9.32496L5.84166 4.66663L4.66666 5.84163L9.32499 10.5L4.66666 15.1583L5.84166 16.3333L10.5 11.675L15.1583 16.3333L16.3333 15.1583L11.675 10.5L16.3333 5.84163Z'
								fill='black'
							/>
						</Svg>
					</TouchableOpacity>
				</View>
				<ScrollView style={styles.form_wrapper}>
					<View>
						<Text>Test Name*</Text>
						<TextInput
							onChangeText={value =>
								setTestDetails({ ...testDetails, name: value })
							}
							value={testDetails.name}
							style={styles.input}
							placeholder='Blood Pressure'
						/>
					</View>
					<View>
						<Text>Value*</Text>
						<TextInput
							onChangeText={value => setTestDetails({ ...testDetails, value })}
							value={testDetails.value}
							style={styles.input}
							placeholder='7'
						/>
					</View>
					<View>
						<Text>Test Date*</Text>
						<TextInput
							onChangeText={value =>
								setTestDetails({ ...testDetails, test_date: value })
							}
							value={testDetails.test_date}
							style={styles.input}
							placeholder='DD-MM-YYYY'
						/>
					</View>
					<View>
						<Text>Notes*</Text>
						<TextInput
							onChangeText={value =>
								setTestDetails({ ...testDetails, notes: value })
							}
							value={testDetails.notes}
							style={styles.input}
							placeholder='Notes'
						/>
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={() => addTestHandler()}
							style={styles.add_patient_btn}
							disabled={loading}
						>
							<Text style={{ color: '#fff' }}>
								{' '}
								{loading ? 'Adding Test...' : 'Add Test'}
							</Text>
						</TouchableOpacity>
					</View>
				</ScrollView>
			</View>
		</View>
	);
};

export default AddTestModal;

const styles = StyleSheet.create({
	//Modal
	centeredView: {
		flex: 1,
		justifyContent: 'center',
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 8,
		paddingHorizontal: 12,
		paddingVertical: 20,
		shadowColor: '#000',
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: '#F194FF',
	},
	buttonClose: {
		backgroundColor: '#2196F3',
	},
	textStyle: {
		color: 'white',
		fontWeight: 'bold',
		textAlign: 'center',
	},
	modalText: {
		fontSize: 16,
		color: '#000',
		fontWeight: 'bold',
	},

	//Form fields
	buttonContainer: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%',
		marginTop: 24,
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
});
