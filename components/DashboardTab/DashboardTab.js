import { StyleSheet, View } from 'react-native';
import PatientStatistics from '../PatientStatistics/PatientStatistics';
import CriticalAttentionPatients from '../CriticalAttentionPatients/CriticalAttentionPatients';
import AdmittedPatients from '../AdmittedPatients/AdmittedPatients';

export default function DashboardTab() {
	return (
		<View style={{ paddingTop: 20 }}>
			<PatientStatistics />
			<CriticalAttentionPatients />
			<AdmittedPatients />
		</View>
	);
}

const styles = StyleSheet.create({});