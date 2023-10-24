import { StyleSheet, View } from 'react-native';
import PatientStatistics from './components/PatientStatistics/PatientStatistics';

export default function App() {
	return (
		<View style={styles.container}>
			<PatientStatistics />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: 100,
		paddingHorizontal: 40,
	},
});
