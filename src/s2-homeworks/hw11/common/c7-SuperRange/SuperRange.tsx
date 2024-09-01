import React from "react";
import { Slider, SliderProps, styled } from "@mui/material";

const SliderStyled = styled(Slider)(({ theme }) => ({
	color: "#00CC22",
	height: 3,
    width: 147,
	padding: "13px 0",
	"& .MuiSlider-thumb": {
		height: 18,
		width: 18,
		backgroundColor: "#fff",
		border: "1px solid currentColor",

		"&:hover": {
			boxShadow: "0 0 0 8px rgba(58, 133, 137, 0.16)",
		},
		"&::before": {
			height: 6,
			width: 6,
            backgroundColor: "currentColor"
		},
		"& .airbnb-bar": {
			height: 9,
			width: 1,
			backgroundColor: "currentColor",
			marginLeft: 1,
			marginRight: 1,
		},
	},
	"& .MuiSlider-track": {
		height: 3,
	},
	"& .MuiSlider-rail": {
		color: "#8B8B8B",
		opacity: 1,
		height: 3,
		...theme.applyStyles("dark", {
			color: "#bfbfbf",
			opacity: undefined,
		}),
	},
}));

const SuperRange: React.FC<SliderProps> = (props) => {
	return (
		<SliderStyled
			value={props.value}
			onChange={props.onChange}
			sx={{
				// стили для слайдера // пишет студент
				
			}}
			{...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
		/>
	);
};

export default SuperRange;
