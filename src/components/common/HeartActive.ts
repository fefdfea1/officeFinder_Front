export const heartActive = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
  const target = e.target as HTMLElement;
  console.log(target);
  if (!target.classList.contains('active')) {
    target.classList.add('active');
  } else {
    target.classList.remove('active');
  }
};
