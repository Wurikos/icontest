import React from 'react';
import atomize from "@quarkly/atomize";
import Menumob from './Menumob';

const App = props => <div {...props}>
	Say hello App
	<Menumob></Menumob>
</div>;

export default atomize(App)({
	name: "App",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// past here description for your component
		en: "App — my awesome component"
	},
	propInfo: {
		// past here props description for your component
		yourCustomProps: {
			control: "input"
		}
	}
});