
export interface IChildMenuItem {
			pageId: number,
			parentId: number,
			title: string,
			sortId: number
}

export interface IMenuItem {
  _id: number;
  pagesLvl: IChildMenuItem
}