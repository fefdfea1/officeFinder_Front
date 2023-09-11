let timerId: any = "";

export const alertRemoveTimer = (setAlertState: React.Dispatch<React.SetStateAction<boolean>>, index: number) => {
  setAlertState(true);
  if (timerId) {
    clearTimeout(timerId);
  }
  timerId = setTimeout(() => {
    const AllBookMarkItems = document.querySelectorAll(".BookMarkItem");
    for (let i = 0; i <= AllBookMarkItems.length; i++) {
      const target = AllBookMarkItems[i] as HTMLElement;
      const getDataset = Number(target.dataset.index);
      if (index === getDataset) {
        target.style.display = "none";
        break;
      }
    }

    setAlertState(false);
  }, 1300);
};
