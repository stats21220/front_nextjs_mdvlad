import { useContext } from "react";
import { translitForUrl } from "translit-npm";
import { AppContext } from "../context/app.context";


const {menu, firstCategory} = useContext(AppContext);

export const firstLevelMenu = menu?.find((m) => m._id === firstCategory)?.pagesLvl.map((f) => {
  return {
    pageId: f.pageId,
    parentId: f.parentId,
    title: f.title,
    sortId: f.sortId,
    route: translitForUrl(f.title)
  };
});