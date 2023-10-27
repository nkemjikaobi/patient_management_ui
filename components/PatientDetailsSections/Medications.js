import React from 'react';
import {
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { Path, Svg } from 'react-native-svg';

const Medications = () => {
	return (
		<View>
			<ScrollView style={{ position: 'relative' }}>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				<View style={styles.wrapper}>
					<View>
						<Text style={styles.title}>Malaria Medications</Text>
						<Text style={styles.body}>Prescribed by Dr Franklin Nwoke</Text>
					</View>
					<Text style={styles.body}>23 August 2023</Text>
				</View>
				{/* <TouchableOpacity style={styles.add_medication}>
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
				</TouchableOpacity> */}
			</ScrollView>
		</View>
	);
};

export default Medications;

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
