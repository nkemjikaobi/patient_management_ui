import React from 'react';
import {
	FlatList,
	Image,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import PatientImg from '../../assets/images/patient.png';

const PatientListing = ({ navigationProps, allPatients }) => {
	const renderItem = data => (
		<TouchableOpacity
			onPress={() =>
				navigationProps.navigation.navigate('Patient Details', {
					patient: data.item,
				})
			}
			style={styles.wrapper}
		>
			<View style={styles.patient_bio_wrapper}>
				<View style={styles.patient_bio}>
					<Image source={PatientImg} style={styles.image} />
					<View style={{ marginLeft: 8 }}>
						<Text
							style={{ color: '#141617', fontSize: 14, fontWeight: 'bold' }}
						>
							{data?.item?.first_name} {data?.item?.last_name}
						</Text>
						<View style={{ display: 'flex', flexDirection: 'row' }}>
							<Text
								style={[
									{ fontSize: 12, marginTop: 8 },
									data?.item?.isAdmitted && { color: '#6E44FF' },
								]}
							>
								{data?.item?.isAdmitted ? 'Admitted' : 'Not Admitted'}
							</Text>
							<Text
								style={[
									{ fontSize: 12, marginTop: 8, textTransform: 'capitalize' },
									data?.item?.condition === 'critical' && { color: 'red' },
								]}
							>
								- {data?.item?.condition}
							</Text>
						</View>
					</View>
				</View>
				<Text style={{ color: '#141617', fontSize: 13 }}>
					{data?.item?.date_of_birth} years old
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View>
			<FlatList
				data={allPatients}
				renderItem={patient => renderItem(patient)}
				keyExtractor={patient => patient._id}
			/>
		</View>
	);
};

export default PatientListing;

const styles = StyleSheet.create({
	wrapper: {
		display: 'flex',
		marginVertical: 14,
		borderBottomColor: 'rgba(0, 0, 0, 0.08)',
		borderWidth: 1,
		borderLeftWidth: 0,
		borderRightWidth: 0,
		borderTopWidth: 0,
		paddingBottom: 12,
	},
	patient_bio: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 8,
	},
	patient_bio_wrapper: {
		display: 'flex',
		flexDirection: 'row',
		marginBottom: 14,
	},
	image: {
		width: 28,
		height: 28,
		marginRight: 4,
	},
});
