import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useState } from 'react';
import {
	ActivityIndicator,
	Modal,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import AddMedicationModal from '../modals/AddMedicationModal';

const Medications = ({ patient }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [allMedications, setAllMedications] = useState([]);

	//Method to fetch patient medications
	const fetchPatientMedications = async id => {
		setLoading(true);
		await fetch(
			`https://patient-management-system-api.onrender.com/patients/${id}/medications`
		)
			.then(response => response.json())
			.then(json => {
				setAllMedications(json);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			})
			.catch(error => {
				setLoading(false);
			});
	};

	const manualRefetch = () => {
		fetchPatientMedications(patient?._id);
	};

	useFocusEffect(
		useCallback(() => {
			// Check if patient._id exists
			if (patient?._id) {
				// Fetch patient medications
				fetchPatientMedications(patient?._id);
			}
		}, [patient?._id])
	);

	const renderItem = data => (
		<View style={styles.wrapper}>
			<View>
				<Text style={styles.title}>Malaria Medications</Text>
				<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
			</View>
			<Text style={styles.body}>23 August 2023</Text>
		</View>
	);

	return (
		<View>
			<Modal
				animationType='fade'
				transparent={true}
				visible={modalVisible}
				onRequestClose={() => {
					setModalVisible(!modalVisible);
				}}
			>
				<AddMedicationModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
				/>
			</Modal>
			<View style={{ position: 'relative' }}>
				{!loading && allMedications?.length === 0 ? (
					<Text>There are no medications...</Text>
				) : loading ? (
					<View style={styles.loader}>
						<ActivityIndicator size='small' color='#0000ff' />
						<Text style={{ marginTop: 12 }}>Fetching all medications...</Text>
					</View>
				) : (
					<FlatList
						data={allMedications}
						renderItem={patient => renderItem(patient)}
						keyExtractor={patient => patient._id}
					/>
				)}
				<TouchableOpacity
					onPress={() => setModalVisible(true)}
					style={styles.add_medication}
				>
					<Svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<Path
							d='M19 13H13V19H11V13H5V11H11V5H13V11H19V13Z'
							fill='#6E44FF'
						/>
					</Svg>
				</TouchableOpacity>
			</View>
		</View>
	);
};

export default Medications;

const styles = StyleSheet.create({
	loader: {
		justifyContent: 'center',
		alignItems: 'center',
		display: 'flex',
		paddingTop: 100,
	},
	wrapper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 24,
		borderColor: 'lightgray',
		borderWidth: 1,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		paddingBottom: 20,
	},
	title: {
		fontSize: 14,
		color: '#232324',
		fontWeight: 'bold',
		marginBottom: 4,
	},
	body: {
		fontSize: 12,
		color: '#393E41',
	},
	add_medication: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		justifyContent: 'center',
		backgroundColor: '#F1ECFF',
		padding: 16,
		height: 56,
		width: 56,
		borderRadius: 6,
		position: 'absolute',
		top: 200,
		right: 0,
	},
});
