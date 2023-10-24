import { StyleSheet, View } from 'react-native';
import PatientStatistics from './components/PatientStatistics/PatientStatistics';
import CriticalAttentionPatients from './components/CriticalAttentionPatients/CriticalAttentionPatients';

export default function App() {
	return (
		<View style={styles.container}>
			<PatientStatistics />
			<CriticalAttentionPatients />
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
