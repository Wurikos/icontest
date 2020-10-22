import React from "react";
import { useOverrides, Override } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
import Timeline from "./Timeline";
import Mobmenu2 from "./Mobmenu2";
const defaultProps = {};
const overrides = {
	"timeline": {
		"kind": "Timeline",
		"props": {}
	},
	"timelineOverride": {
		"kind": "Override",
		"props": {
			"slot": "Timeline Title",
			"background": "--color-dark"
		}
	},
	"timelineOverride1": {
		"kind": "Override",
		"props": {
			"slot": "Timeline 2 Title",
			"background": "--color-primary"
		}
	},
	"mobmenu2": {
		"kind": "Mobmenu2",
		"props": {}
	}
};

const Newcomp = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		<Timeline {...override("timeline")}>
			<Override {...override("timelineOverride")} />
			<Override {...override("timelineOverride1")} />
		</Timeline>
		<Mobmenu2 {...override("mobmenu2")} />
		{children}
	</Box>;
};

Object.assign(Newcomp, { ...Box,
	defaultProps,
	overrides
});
export default Newcomp;