import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import SingleAdmittedPatientCard from '../SingleAdmittedPatientCard/SingleAdmittedPatientCard';

const CriticalAttentionPatients = ({ loading, criticalPatients }) => {
	const renderItem = data => <SingleAdmittedPatientCard patient={data.item} />;

	return (
		<View style={styles.wrapper}>
			<Text style={styles.title}>Requires Attention (Critical)</Text>
			<View style={styles.body_wrapper}>
				{!loading && criticalPatients?.length === 0 ? (
					<>
						<Text style={styles.kudos}>Kudos!!</Text>

						<Text style={styles.message}>
							No Patient Require Urgent attention at the moment
						</Text>
					</>
				) : loading ? (
					<View style={styles.loader}>
						<ActivityIndicator size='small' color='#0000ff' />
						<Text style={{ marginTop: 12 }}>
							Fetching all patients in critical condition...
						</Text>
					</View>
				) : (
					<FlatList
						data={criticalPatients}
						renderItem={patient => renderItem(patient)}
						keyExtractor={patient => patient._id}
					/>
				)}
			</View>
		</View>
	);
};

export default CriticalAttentionPatients;

const styles = StyleSheet.create({
	wrapper: {
		marginVertical: 24,
		paddingHorizontal: 40,
	},
	title: {
		fontSize: 14,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	kudos: {
		color: '#6E44FF',
		fontSize: 14,
		fontWeight: 'bold',
		textAlign: 'center'
	},
	message: {
		fontSize: 14,
		textAlign: 'center',
		marginTop: 12,
	},
});
