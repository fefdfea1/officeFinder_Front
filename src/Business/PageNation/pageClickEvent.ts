export const pageClickEvent = (event: MouseEvent, setPageState: React.Dispatch<React.SetStateAction<number>>) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("PaginationNum")) {
    const targetValue = target.innerText;
    setPageState(Number(targetValue));
  }
};
