export const formatRupiah = (amount) => {
  if (!amount) return "0";
  const price = String(amount).replace(/\.00$/, "");
  const numPrice = parseFloat(price);
  return numPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
};
