import React from "react";
import { useOverrides, Override, Section } from "@quarkly/components";
import Menumob from "./Menumob";
const defaultProps = {
	"background": "--color-primary"
};
const overrides = {
	"menumob": {
		"kind": "Menumob",
		"props": {
			"color": "#cb0d0d"
		}
	},
	"menumobOverride": {
		"kind": "Override",
		"props": {
			"slot": "menu"
		}
	},
	"overrideOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"color": "#dbe0e3"
		}
	}
};

const Menuincomp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Menumob {...override("menumob")}>
			<Override {...override("menumobOverride")}>
				<Override {...override("overrideOverride")} />
			</Override>
		</Menumob>
		{children}
	</Section>;
};

Object.assign(Menuincomp, { ...Section,
	defaultProps,
	overrides
});
export default Menuincomp;