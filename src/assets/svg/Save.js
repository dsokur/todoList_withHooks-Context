import React from "react";
import Svg, {Path, Mask, Rect, G} from 'react-native-svg';

const SVG = ({
	             style = {},
	             fill = "#4E91FF",
	             width = "100%",
	             height = "100%",
	             viewBox = "0 0 14 14",
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
			d="M9.15829 7.40834L5.65829 10.9083C5.54163 11.025 5.42496 11.0833 5.24996 11.0833C5.07496 11.0833 4.95829 11.025 4.84163 10.9083C4.60829 10.675 4.60829 10.325 4.84163 10.0917L7.93329 7.00001L4.84163 3.90834C4.60829 3.67501 4.60829 3.32501 4.84163 3.09167C5.07496 2.85834 5.42496 2.85834 5.65829 3.09167L9.15829 6.59167C9.39163 6.82501 9.39163 7.17501 9.15829 7.40834Z"
			fill={fill} opacity={opacity}/>
		<Mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="4" y="2" width="6" height="10">
			<Path
				d="M9.15829 7.40834L5.65829 10.9083C5.54163 11.025 5.42496 11.0833 5.24996 11.0833C5.07496 11.0833 4.95829 11.025 4.84163 10.9083C4.60829 10.675 4.60829 10.325 4.84163 10.0917L7.93329 7.00001L4.84163 3.90834C4.60829 3.67501 4.60829 3.32501 4.84163 3.09167C5.07496 2.85834 5.42496 2.85834 5.65829 3.09167L9.15829 6.59167C9.39163 6.82501 9.39163 7.17501 9.15829 7.40834Z"
				fill="white"/>
		</Mask>
		<G mask="url(#mask0)">
			<Rect width="14" height="14" fill={fill} opacity={opacity}/>
		</G>
	</Svg>
);

export default SVG;
