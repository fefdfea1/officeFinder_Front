export const BookMarkClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
  const target = e.target as HTMLElement;
  if (target.classList.contains('address')) {
    e.preventDefault();
  }
};
