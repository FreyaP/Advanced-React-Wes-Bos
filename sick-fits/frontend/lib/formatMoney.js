export default function formatMoney(amount = 0) {
  const options = {
    style: 'currency',
    currency: 'CAD',
    minimumFractionDigits: 2,
  };
  // if no cents then don't display the cents
  if (amount % 100 === 0) {
    options.minimumFractionDigits = 0;
  }
  const formatter = Intl.NumberFormat('en-US', options);
  // divide by 100 as price is in cents
  return formatter.format(amount / 100);
}
