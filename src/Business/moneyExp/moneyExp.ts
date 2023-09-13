export const moneyExp = (money: string | number) => {
  const cn1 = money.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");

  return cn1;
};
