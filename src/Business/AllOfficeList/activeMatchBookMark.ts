type matchType = (data: any, BookMarkDataState: any, type?: string) => boolean;

export const activeMatchBookMarkList: matchType = (data, BookMarkDataState, tpye = "default") => {
  console.log(data, BookMarkDataState);
  let result = false;

  if (tpye === "default") {
    BookMarkDataState.content.forEach((item: any) => {
      if (data.id === item.officeId) {
        result = true;
        return;
      } else return;
    });
  } else {
    BookMarkDataState.content.forEach((item: any) => {
      if (data.officeId === item.officeId) {
        result = true;
        return;
      } else return;
    });
  }

  return result;
};
