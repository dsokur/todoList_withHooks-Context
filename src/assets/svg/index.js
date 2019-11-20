import React from "react";

import Desktop from "./Desktop";
import Cash from "./Cash";
import Box from "./Box";
import Pad from "./Pad";
import Card from "./Card";
import Envelope from "./Envelope";
import Clock from "./Clock";
import Off from "./Off";
import ArrowRight from "./ArrowRight";
import Filter from "./Filter";
import Exit from "./Exit";
import GoBackArrow from "./GoBackArrow";
import ProfileIcon from "./ProfileIcon";
import Calendar from "./Calendar";
import Products from "./Products";
import Home from "./Home";
import CheckMark from "./CheckMark";
import CheckBox from "./CheckBox";
import Search from "./Search";
import Monitor from "./Monitor";


const Icon = props => {
	switch (props.name) {
		case "desktop":
			return <Desktop {...props} />;
		case "cash":
			return <Cash {...props} />;
		case "box":
			return <Box {...props} />;
		case "pad":
			return <Pad {...props} />;
		case "card":
			return <Card {...props} />;
		case "envelope":
			return <Envelope {...props} />;
		case "clock":
			return <Clock {...props} />;
		case "off":
			return <Off {...props} />;
		case "arrowRight":
			return <ArrowRight {...props} />;
		case "filter":
			return <Filter {...props} />;
		case "exit":
			return <Exit {...props} />;
		case "goBackArrow":
			return <GoBackArrow {...props} />;
		case "profileIcon":
			return <ProfileIcon {...props} />;
		case "calendar":
			return <Calendar {...props} />;
		case "products":
			return <Products {...props} />;
		case "home":
			return <Home {...props} />;
		case "checkmark":
			return <CheckMark {...props} />;
		case "checkbox":
			return <CheckBox {...props} />;
		case "search":
			return <Search {...props} />;
		case "monitor":
			return <Monitor {...props} />;
		default:
			return;
	}
};

export default Icon;
