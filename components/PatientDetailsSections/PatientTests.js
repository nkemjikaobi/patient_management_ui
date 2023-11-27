import React, { useCallback, useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Modal,
	Pressable,
	FlatList,
	ActivityIndicator,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import AddTestModal from '../modals/AddTestModal';
import { useFocusEffect } from '@react-navigation/native';

const PatientTests = ({ patient }) => {
	const [modalVisible, setModalVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [allTests, setAllTests] = useState([]);

	//Method to fetch patient tests
	const fetchPatientTests = async id => {
		setLoading(true);
		await fetch(
			`https://patient-management-system-api.onrender.com/patients/${id}/tests`
		)
			.then(response => response.json())
			.then(json => {
				setAllTests(json);
				setTimeout(() => {
					setLoading(false);
				}, 1500);
			})
			.catch(error => {
				setLoading(false);
			});
	};

	const manualRefetch = () => {
		fetchPatientTests(patient?._id);
	};

	useFocusEffect(
		useCallback(() => {
			// Check if patient._id exists
			if (patient?._id) {
				// Fetch patient tests
				fetchPatientTests(patient?._id);
			}
		}, [patient?._id])
	);

	const renderItem = data => (
		<View style={styles.wrapper}>
			<View>
				<Text style={styles.title}>{data?.item?.name}</Text>
				<Text style={styles.body}>{data?.item?.test_date}</Text>
			</View>
			<Svg
				width='20'
				height='20'
				viewBox='0 0 20 20'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<Path
					d='M8.66667 14L12.6667 10L8.66667 6'
					stroke='black'
					stroke-linecap='square'
				/>
			</Svg>
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
				<AddTestModal
					modalVisible={modalVisible}
					setModalVisible={setModalVisible}
					patient={patient}
					manualRefetch={manualRefetch}
				/>
			</Modal>
			<View style={{ position: 'relative' }}>
				{!loading && allTests?.length === 0 ? (
					<Text>There are no tests...</Text>
				) : loading ? (
					<View style={styles.loader}>
						<ActivityIndicator size='small' color='#0000ff' />
						<Text style={{ marginTop: 12 }}>Fetching all tests...</Text>
					</View>
				) : (
					<FlatList
						data={allTests}
						renderItem={patient => renderItem(patient)}
						keyExtractor={patient => patient._id}
					/>
				)}

				<TouchableOpacity
					onPress={() => setModalVisible(true)}
					style={styles.add_tests}
					testID='add-icon'
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

export default PatientTests;

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
	add_tests: {
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

	//Modal
	centeredView: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: 'white',
		borderRadius: 20,
		padding: 35,
		alignItems: 'center',
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
		marginBottom: 15,
		textAlign: 'center',
	},
});
