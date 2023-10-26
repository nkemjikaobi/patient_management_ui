import moment from 'moment';

export const calculateAge = dateOfBirthStr => {
	const dateOfBirth = moment(dateOfBirthStr, 'MM/DD/YYYY');

	const currentDate = moment(); // Current date
	const age = currentDate.diff(dateOfBirth, 'years');

	const formattedAge = age + ' years old';

	return formattedAge;
};
