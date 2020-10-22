import React from "react";
import theme from "theme";
import { Theme } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { Override, Section } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section background="--color-primary">
			<Components.Menumob color="#cb0d0d">
				<Override slot="menu">
					<Override slot="link" color="#dbe0e3" />
				</Override>
			</Components.Menumob>
		</Section>
		<Components.Menuincomp />
		<Components.Iconbox />
	</Theme>;
});