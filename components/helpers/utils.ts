import moment from 'moment';

export const calculateAge = dateOfBirthStr => {

	console.log(dateOfBirthStr);
	const dateOfBirth = moment(dateOfBirthStr, 'MM/DD/YYYY');
	let formattedAge;

	if (dateOfBirth.isValid()) {
		const currentDate = moment();
		const age = currentDate.diff(dateOfBirth, 'years');
		formattedAge = age + ' years old';
	} else {
		const dateOfBirth = moment(dateOfBirthStr, moment.ISO_8601);

		const currentDate = moment();
		const age = currentDate.diff(dateOfBirth, 'years');

		formattedAge = age + ' years old';
	}

	return formattedAge;
};
