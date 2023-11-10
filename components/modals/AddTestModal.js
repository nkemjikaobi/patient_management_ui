import React, { useState } from 'react';
import {
	Pressable,
	ScrollView,
	StyleSheet,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';

const AddTestModal = ({ modalVisible, setModalVisible }) => {
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
						<TextInput style={styles.input} placeholder='Blood Pressure' />
					</View>
					<View>
						<Text>Value*</Text>
						<TextInput style={styles.input} placeholder='Value' />
					</View>
					<View>
						<Text>Notes*</Text>
						<TextInput style={styles.input} placeholder='Notes' />
					</View>
					<View style={styles.buttonContainer}>
						<TouchableOpacity
							onPress={() => props.navigation.navigate('Add Patient')}
							style={styles.add_patient_btn}
						>
							<Text style={{ color: '#fff' }}>Add Test</Text>
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
