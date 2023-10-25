import React from 'react';
import { Text, View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';

/**
 *
 * Will be completed in later milestones
 */
const PatientDetailsSections = () => {
	const BasicInformationRoute = () => (
		<View style={{ flex: 1, backgroundColor: '#ff4081' }} />
	);

	const MedicationsRoute = () => (
		<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
	);
	const TreatmentsRoute = () => (
		<View style={{ flex: 1, backgroundColor: '#ff4081' }} />
	);

	const AllergiesRoute = () => (
		<View style={{ flex: 1, backgroundColor: '#673ab7' }} />
	);

	const renderScene = SceneMap({
		first: BasicInformationRoute,
		second: MedicationsRoute,
		third: TreatmentsRoute,
		fourth: AllergiesRoute,
	});

	const layout = useWindowDimensions();

	const [index, setIndex] = React.useState(0);
	const [routes] = React.useState([
		{ key: 'first', title: 'First' },
		{ key: 'second', title: 'Second' },
		{ key: 'third', title: 'Third' },
		{ key: 'fourth', title: 'Fourth' },
	]);

	return (
		<View>
			<TabView
				navigationState={{ index, routes }}
				renderScene={renderScene}
				onIndexChange={setIndex}
				initialLayout={{ width: layout.width }}
			/>
		</View>
	);
};

export default PatientDetailsSections;
