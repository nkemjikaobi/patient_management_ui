import { SafeAreaView, StyleSheet, View } from 'react-native';
import PatientStatistics from './components/PatientStatistics/PatientStatistics';
import CriticalAttentionPatients from './components/CriticalAttentionPatients/CriticalAttentionPatients';
import AdmittedPatients from './components/AdmittedPatients/AdmittedPatients';

export default function App() {
	return (
		<View style={styles.container}>
			<PatientStatistics />
			<CriticalAttentionPatients />
			<AdmittedPatients />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
		paddingTop: 100,
	},
});
