export const BookMarkClickHandler = (
  event: MouseEvent,
  setSubmitState: React.Dispatch<React.SetStateAction<boolean>>,
) => {
  const target = event.target as HTMLElement;
  if (!target.classList.contains("active")) {
    setSubmitState(false);
  } else {
    setSubmitState(true);
  }
};
