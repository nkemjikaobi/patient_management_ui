import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	ScrollView,
	TouchableOpacity,
	Modal,
	Pressable,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';
import AddTestModal from '../modals/AddTestModal';

const PatientTests = () => {
	const [modalVisible, setModalVisible] = useState(false);

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
				/>
			</Modal>
			<ScrollView style={{ position: 'relative' }}>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Full Body Scan</Text>
						<Text style={styles.body}>22 August 2023 12:30am</Text>
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
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Chemo Test</Text>
						<Text style={styles.body}>22 August 2023 12:30am</Text>
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
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Vitals Test</Text>
						<Text style={styles.body}>22 August 2023 12:30am</Text>
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
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Cancer Test</Text>
						<Text style={styles.body}>22 August 2023 12:30am</Text>
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
				<TouchableOpacity
					onPress={() => setModalVisible(true)}
					style={styles.add_tests}
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
			</ScrollView>
		</View>
	);
};

export default PatientTests;

const styles = StyleSheet.create({
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
