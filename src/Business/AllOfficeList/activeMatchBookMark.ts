type matchType = (data: any, BookMarkDataState: any) => boolean;

export const activeMatchBookMarkList: matchType = (data, BookMarkDataState) => {
  let result = false;

  BookMarkDataState.content.forEach((item: any) => {
    if (data.id === item.officeId) {
      result = true;
      return;
    } else return;
  });

  return result;
};
