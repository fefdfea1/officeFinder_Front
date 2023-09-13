export const mainClickEventHandler = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("heart")) {
    event.preventDefault();
  }
};
