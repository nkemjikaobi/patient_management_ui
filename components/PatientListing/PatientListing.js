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

const PatientListing = ({ navigationProps }) => {
	const data = [
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
			name: 'Victor Thompson',
			age: 23,
			isAdmitted: true,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
			name: 'Jonathan Trudieu',
			age: 30,
			isAdmitted: false,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72',
			name: 'Hannah Baker',
			age: 43,
			isAdmitted: true,
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28bas',
			name: 'Jeremy Walker',
			age: 3,
			isAdmitted: false,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63q',
			name: 'Elisha Macmilan',
			age: 31,
			isAdmitted: true,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72e',
			name: 'Harrison Wells',
			age: 53,
			isAdmitted: false,
		},
		{
			id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28basm',
			name: 'Jeremy Walker',
			age: 3,
			isAdmitted: false,
		},
		{
			id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63qh',
			name: 'Elisha Macmilan',
			age: 31,
			isAdmitted: true,
		},
		{
			id: '58694a0f-3da1-471f-bd96-145571e29d72eh',
			name: 'Harrison Wells',
			age: 53,
			isAdmitted: false,
		},
	];

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
							{data?.item?.name}
						</Text>
						<Text
							style={[
								{ fontSize: 12, marginTop: 8 },
								data?.item?.isAdmitted && { color: '#6E44FF' },
							]}
						>
							{data?.item?.isAdmitted ? 'Admitted' : 'Not Admitted'}
						</Text>
					</View>
				</View>
				<Text style={{ color: '#141617', fontSize: 13 }}>
					{data?.item?.age} years
				</Text>
			</View>
		</TouchableOpacity>
	);

	return (
		<View>
			<FlatList
				data={data}
				renderItem={patient => renderItem(patient)}
				keyExtractor={patient => patient.id}
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
