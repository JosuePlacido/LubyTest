import React from "react";

import ShimmerPlaceHolder from "react-native-shimmer-placeholder";
const ShimmerText: React.FC = () => {
	return (
		<ShimmerPlaceHolder
			style={{ borderRadius: 10 }}
			shimmerColors={["#555", "#111111", "#343434"]}
		/>
	);
};
export const ShimmerIcon: React.FC = () => {
	return (
		<ShimmerPlaceHolder
			style={{ borderRadius: 10, width: 30 }}
			shimmerColors={["#555", "#111111", "#343434"]}
		/>
	);
};
export default ShimmerText;
