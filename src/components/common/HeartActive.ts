export const heartActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const target = e.target as HTMLElement;
  if (!target.classList.contains('active')) {
    target.classList.add('active');
  } else {
    target.classList.remove('active');
    target.classList.add('deActive');
  }
};
