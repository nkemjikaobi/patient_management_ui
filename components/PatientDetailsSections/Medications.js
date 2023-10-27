import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

const Medications = () => {
	return (
		<ScrollView>
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
		</ScrollView>
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
});
