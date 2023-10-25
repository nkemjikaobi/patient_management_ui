import { StyleSheet, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import DashboardTab from './components/DashboardTab/DashboardTab';
import PatientsTab from './components/PatientsTab/PatientsTab';
import Svg, { Path } from 'react-native-svg';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddPatients from './components/AddPatient/AddPatient';
import PatientDetails from './components/PatientDetails/PatientDetails';
import UpdatePatient from './components/UpdatePatient/UpdatePatient';

export default function App() {
	const Stack = createNativeStackNavigator();
	const Tab = createBottomTabNavigator();

	//Patients Stack
	const PatientsStack = () => {
		return (
			<Stack.Navigator>
				<Stack.Screen
					// options={{ headerShown: false }}
					name='All Patients'
					component={PatientsTab}
				/>
				<Stack.Screen name='Add Patient' component={AddPatients} />
				<Stack.Screen name='Update Patient' component={UpdatePatient} />
				<Stack.Screen name='Patient Details' component={PatientDetails} />
			</Stack.Navigator>
		);
	};

	return (
		<View style={styles.container}>
			<NavigationContainer>
				<Tab.Navigator
					screenOptions={{
						tabBarActiveTintColor: '#6E44FF',
					}}
				>
					<Tab.Screen
						name='Dashboard'
						component={DashboardTab}
						options={{
							headerShown: false,
							tabBarIcon: ({ color, size }) =>
								color === '#6E44FF' ? (
									<Svg width={20} height={20} viewBox='0 0 20 20'>
										<Path
											d='M8.34709 0.128396C8.14736 -0.0427988 7.85264 -0.0427988 7.65291 0.128396L0 6.68804V14.4C0 15.2837 0.716344 16 1.6 16H5.86667C6.16122 16 6.4 15.7612 6.4 15.4667V12.2667C6.4 11.383 7.11634 10.6667 8 10.6667C8.88366 10.6667 9.6 11.383 9.6 12.2667V15.4667C9.6 15.7612 9.83878 16 10.1333 16H14.4C15.2837 16 16 15.2837 16 14.4V6.68804L8.34709 0.128396Z'
											fill='#6E44FF'
										/>
									</Svg>
								) : (
									<Svg width={20} height={20} viewBox='0 0 20 20'>
										<Path
											d='M8.50001 0.533325L8.8254 0.153697C8.63816 -0.00679868 8.36186 -0.00679868 8.17461 0.153697L8.50001 0.533325ZM1.03334 6.93332L0.707945 6.5537L0.53334 6.70336V6.93332H1.03334ZM6.36667 15.4667V15.9667C6.64282 15.9667 6.86667 15.7428 6.86667 15.4667H6.36667ZM10.6333 15.4667H10.1333C10.1333 15.7428 10.3572 15.9667 10.6333 15.9667V15.4667ZM15.9667 6.93332H16.4667V6.70336L16.2921 6.5537L15.9667 6.93332ZM2.10001 15.9667H6.36667V14.9667H2.10001V15.9667ZM16.2921 6.5537L8.8254 0.153697L8.17461 0.912953L15.6413 7.31295L16.2921 6.5537ZM8.17461 0.153697L0.707945 6.5537L1.35874 7.31295L8.8254 0.912953L8.17461 0.153697ZM6.86667 15.4667V12.2667H5.86667V15.4667H6.86667ZM10.1333 12.2667V15.4667H11.1333V12.2667H10.1333ZM10.6333 15.9667H14.9V14.9667H10.6333V15.9667ZM16.4667 14.4V6.93332H15.4667V14.4H16.4667ZM0.53334 6.93332V14.4H1.53334V6.93332H0.53334ZM8.50001 10.6333C9.40207 10.6333 10.1333 11.3646 10.1333 12.2667H11.1333C11.1333 10.8123 9.95436 9.63332 8.50001 9.63332V10.6333ZM8.50001 9.63332C7.04566 9.63332 5.86667 10.8123 5.86667 12.2667H6.86667C6.86667 11.3646 7.59794 10.6333 8.50001 10.6333V9.63332ZM14.9 15.9667C15.7653 15.9667 16.4667 15.2652 16.4667 14.4H15.4667C15.4667 14.713 15.213 14.9667 14.9 14.9667V15.9667ZM2.10001 14.9667C1.78705 14.9667 1.53334 14.713 1.53334 14.4H0.53334C0.53334 15.2652 1.23476 15.9667 2.10001 15.9667V14.9667Z'
											fill='#393E41'
										/>
									</Svg>
								),
						}}
					/>
					<Tab.Screen
						name='Patients'
						component={PatientsStack}
						options={{
							headerShown: false,
							tabBarIcon: ({ color, size }) =>
								color === '#6E44FF' ? (
									<Svg width={20} height={20} viewBox='0 0 20 20'>
										<Path
											d='M8.5 1C6.43831 1 4.76667 2.67005 4.76667 4.73125C4.76667 6.79244 6.43831 8.46249 8.5 8.46249C10.5617 8.46249 12.2333 6.79244 12.2333 4.73125C12.2333 2.67005 10.5617 1 8.5 1Z'
											fill='#6E44FF'
										/>
										<Path
											d='M6.36667 10.5938C4.30492 10.5938 2.63333 12.2646 2.63333 14.3265V16.9903H14.3667V14.3265C14.3667 12.2646 12.6951 10.5938 10.6333 10.5938H6.36667Z'
											fill='#6E44FF'
										/>
										<Path
											d='M8.5 1C6.43831 1 4.76667 2.67005 4.76667 4.73125C4.76667 6.79244 6.43831 8.46249 8.5 8.46249C10.5617 8.46249 12.2333 6.79244 12.2333 4.73125C12.2333 2.67005 10.5617 1 8.5 1Z'
											stroke='#6E44FF'
											stroke-width='1.2'
											stroke-linecap='square'
										/>
										<Path
											d='M6.36667 10.5938C4.30492 10.5938 2.63333 12.2646 2.63333 14.3265V16.9903H14.3667V14.3265C14.3667 12.2646 12.6951 10.5938 10.6333 10.5938H6.36667Z'
											stroke='#6E44FF'
											stroke-width='1.2'
											stroke-linecap='square'
										/>
									</Svg>
								) : (
									<Svg width={20} height={20} viewBox='0 0 20 20'>
										<Path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M11.2 4.73124C11.2 6.49755 9.76749 7.92915 8.00002 7.92915C6.23255 7.92915 4.80002 6.49755 4.80002 4.73124C4.80002 2.96492 6.23255 1.53333 8.00002 1.53333C9.76749 1.53333 11.2 2.96492 11.2 4.73124Z'
											stroke='#393E41'
											stroke-width='1.2'
											stroke-linecap='square'
										/>
										<Path
											fill-rule='evenodd'
											clip-rule='evenodd'
											d='M13.3334 16.4569H2.66669C2.66669 15.6996 2.66669 14.979 2.66669 14.3265C2.66669 12.5592 4.09938 11.1271 5.86669 11.1271H10.1334C11.9007 11.1271 13.3334 12.5592 13.3334 14.3265C13.3334 14.979 13.3334 15.6996 13.3334 16.4569Z'
											stroke='#393E41'
											stroke-width='1.2'
											stroke-linecap='square'
										/>
									</Svg>
								),
						}}
					/>
				</Tab.Navigator>
			</NavigationContainer>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 100,
	},
});
