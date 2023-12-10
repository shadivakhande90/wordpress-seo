import React from "react";
import TextInput from ".";
import { component } from "./docs";
import { useState, useCallback } from "@wordpress/element";

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
	component: ( args ) => <TextInput { ...args } />,
	parameters: {
		controls: { disable: false },
	},
};

const Template = args => {
	const [ value, setValue ] = useState( args?.value );
	const handleChange = useCallback( ( e )=>{
		setValue( e.target.value );
	}, [] );
	return (
		<StoryComponent { ...args } onChange={ handleChange } value={ value } />
	);
};

export const DatePicker = Template.bind( {} );

DatePicker.parameters = {
	controls: { disable: false },
};

DatePicker.args = {
	type: "date",
	placeholder: "Add a date here...",
};

DatePicker.storyName = "Date picker input";
