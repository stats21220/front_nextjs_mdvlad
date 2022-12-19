
export interface IChildMenuItem {
	title: string;
	pageId: number;
	route: string;
	parentId: number[];
}

export interface IThirdItem extends IChildMenuItem {
	isActive?: false | true
}

export interface ISecondItem extends IChildMenuItem {
	third: IThirdItem[]
	isActive?: false | true
}

export interface IFirstItem extends IChildMenuItem {
	sec: ISecondItem[]
	isActive?: false | true
}

export interface IMenuItem {
	pages: IFirstItem[] | [];
	firstRoute: string[] | [];
	secondRoute: string[] | [];
	thirdRoute: string[] | [];
}