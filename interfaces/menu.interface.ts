
export interface IMenuItem {	
	pageId: number,
	parentId: number[],
	sortId: 1,
	title: "Пиломатериалы",
	route: "pilomateriali"
}

export interface IFirstLevelMenuItem {
	route: string,
	name: string,
	icon?: JSX.Element,
	id: number
}