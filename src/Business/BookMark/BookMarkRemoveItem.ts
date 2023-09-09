let timerId: any = "";

export const removeSubmitItem = (index: number) => {
  const AllBookMarkItems = document.querySelectorAll(".BookMarkItem");

  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(() => {
    for (let i = 0; i <= AllBookMarkItems.length; i++) {
      const target = AllBookMarkItems[i] as HTMLElement;
      const getDataset = Number(target.dataset.index);
      if (index === getDataset) {
        target.style.display = "none";
        break;
      }
    }
  }, 1300);
};

export const AllRemoveAlert = (setAlertState: React.Dispatch<React.SetStateAction<boolean>>) => {
  setAlertState(true);
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    const AllBookMarkItems = document.querySelectorAll(".BookMarkItem");
    if (AllBookMarkItems.length >= 1) {
      for (let i = 0; i <= AllBookMarkItems.length; i++) {
        const target = AllBookMarkItems[i] as HTMLElement;
        target.style.display = "none";
      }
    }

    setAlertState(false);
  }, 1300);
};
