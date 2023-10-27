import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import BasicInformation from './BasicInformation';
import PatientTests from './PatientTests';
import Medications from './Medications';

/**
 *
 * Will be completed in later milestones
 */
const PatientDetailsSections = () => {
	const [selected, setSelected] = useState(0);

	const onSelect = id => {
		setSelected(id);
	};

	const viewsData = [
		{
			id: 0,
			name: 'Basic Information',
			component: <BasicInformation />,
		},
		{
			id: 1,
			name: 'Medications',
			component: <Medications />,
		},
		{
			id: 2,
			name: 'Tests',
			component: <PatientTests />,
		},
	];

	return (
		<View style={styles.wrapper}>
			<View style={styles.item_wrapper}>
				<View style={styles.view_item_wrapper}>
					{viewsData.map(view => (
						<TouchableOpacity
							style={[selected === view?.id ? styles.active : styles.inactive]}
							key={view.id}
							onPress={() => onSelect(view?.id)}
						>
							<Text
								style={[
									styles.item,
									selected === view?.id
										? { color: '#fff' }
										: { color: '#393E41' },
								]}
							>
								{view?.name}
							</Text>
						</TouchableOpacity>
					))}
				</View>
				{viewsData[selected]?.component}
			</View>
		</View>
	);
};

export default PatientDetailsSections;

const styles = StyleSheet.create({
	wrapper: {
		marginTop: 12,
	},
	view_item_wrapper: {
		display: 'flex',
		alignItems: 'center',
		flexDirection: 'row',
		height: 44,
		padding: 12,
		backgroundColor: 'lightgray',
		justifyContent: 'space-between',
		borderRadius: 8,
		marginBottom: 20,
		marginTop: 12,
	},
	item_wrapper: {},
	item: {
		fontSize: 12,
	},
	active: {
		backgroundColor: '#6E44FF',
		paddingHorizontal: 16,
		height: 28,
		color: '#fff',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		flexDirection: 'row',
		borderRadius: 6,
	},
	inactive: {
		color: '#393E41',
	},
});
