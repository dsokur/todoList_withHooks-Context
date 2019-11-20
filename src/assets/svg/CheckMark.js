import React from "react";
import Svg, {Path, Mask, G, Rect} from 'react-native-svg';

const SVG = ({
	             style = {},
	             fill = "#4E91FF",
	             width = "100%",
	             height = "100%",
	             viewBox = "0 0 18 18",
	             opacity = '1'
             }) => (
	<Svg
		width={width}
		style={style}
		height={height}
		viewBox={viewBox}
		xmlns="http://www.w3.org/2000/svg"
	>
		<Path
			d="M15.525 5.775L7.275 14.025C7.125 14.175 6.975 14.25 6.75 14.25C6.525 14.25 6.375 14.175 6.225 14.025L2.475 10.275C2.175 9.975 2.175 9.525 2.475 9.225C2.775 8.925 3.225 8.925 3.525 9.225L6.75 12.45L14.475 4.725C14.775 4.425 15.225 4.425 15.525 4.725C15.825 5.025 15.825 5.475 15.525 5.775Z"
			fill={fill}/>
		<Mask id="mask0" maskType="alpha" maskUnits="userSpaceOnUse" x="2" y="4" width="14" height="11">
			<Path
				d="M15.525 5.775L7.275 14.025C7.125 14.175 6.975 14.25 6.75 14.25C6.525 14.25 6.375 14.175 6.225 14.025L2.475 10.275C2.175 9.975 2.175 9.525 2.475 9.225C2.775 8.925 3.225 8.925 3.525 9.225L6.75 12.45L14.475 4.725C14.775 4.425 15.225 4.425 15.525 4.725C15.825 5.025 15.825 5.475 15.525 5.775Z"
				fill="white"/>
		</Mask>
		<G mask="url(#mask0)">
			<Rect width="18" height="18" fill={fill}/>
		</G>
	</Svg>
);

export default SVG;
