import React from "react";
import downIcon from "./img/icons8-сортировать-по-убыванию-24.png";
import upIcon from "./img/icons8-сортировать-во-возрастанию-24.png";
import noneIcon from "./img/icons8-сортировать-24.png";

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
	id?: string;
	sort: string;
	value: string;
	onChange: (newSort: any) => void;
};
let count = 0;
export const pureChange = (sort: string, down: string, up: string) => {
	// пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
	count++;
	return count === 1
		? down
		: count === 2
		? up
		: count === 0
		? ""
		: count === 3
		? (count = 0)
		: "";
};

const SuperSort: React.FC<SuperSortPropsType> = ({
	sort,
	value,
	onChange,
	id = "hw15",
}) => {
	const up = "0" + value;
	const down = "1" + value;

	const onChangeCallback = () => {
		onChange(pureChange(sort, down, up));
	};

	const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

	return (
		<span id={id + "-sort-" + value} onClick={onChangeCallback}>
			<img id={id + "-icon-" + sort} src={icon} alt="#" />
		</span>
	);
};

export default SuperSort;
