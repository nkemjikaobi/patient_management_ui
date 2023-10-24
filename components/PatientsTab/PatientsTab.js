import { StyleSheet, Text, View } from 'react-native';

export default function PatientsTab() {
	return (
		<View style={styles.wrapper}>
			<Text>Patient Tab</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		backgroundColor: '#fff',
		flex: 1,
	},
});
