
export interface IChildMenuItem {
			pageId: number,
			parentId: number,
			title: string,
			sortId: number,
}

export interface IMenuItem {
  _id: number;
	isOpened?: boolean;
  pagesLvl: IChildMenuItem[]
}

export interface IFirstLevelMenuItem {
	route: string,
	name: string,
	icon?: JSX.Element,
	id: number
}