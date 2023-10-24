import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CriticalAttentionPatients = () => {
	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Requires Attention</Text>
			<View style={styles.body_wrapper}>
				<Text style={styles.kudos}>Kudos!!</Text>
				<Text style={styles.message}>
					No Patient Require Urgent attention at the moment
				</Text>
			</View>
		</View>
	);
};

export default CriticalAttentionPatients;

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 24,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	body_wrapper: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	kudos: {
		color: '#6E44FF',
		fontSize: 14,
		fontWeight: 'bold',
	},
	message: {
		fontSize: 14,
		textAlign: 'center',
		marginTop: 12,
	},
});
