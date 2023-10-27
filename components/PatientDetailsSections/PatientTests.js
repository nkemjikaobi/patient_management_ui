import React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Path, Svg } from 'react-native-svg';

const PatientTests = () => {
	return (
		<ScrollView>
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
		</ScrollView>
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
});
