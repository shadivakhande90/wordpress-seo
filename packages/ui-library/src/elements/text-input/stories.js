import React, { useCallback, useState } from "react";
import TextInput from ".";
import { component } from "./docs";

export default {
	title: "1) Elements/Text input",
	component: TextInput,
	parameters: {
		docs: {
			description: {
				component,
			},
		},
	},
};

export const Factory = {
	parameters: {
		controls: { disable: false },
	},
};

const Template = args => {
	const [ value, setValue ] = useState( args?.value || "" );
	const handleChange = useCallback( ( e ) => {
		setValue( e.target.value );
	}, [] );

	return (
		<TextInput { ...args } onChange={ handleChange } value={ value } />
	);
};

export const DatePicker = {
	render: Template.bind( {} ),
	name: "Date picker input",
	parameters: {
		controls: { disable: false },
	},
	args: {
		type: "date",
		placeholder: "Add a date here...",
	},
};
