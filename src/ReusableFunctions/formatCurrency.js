const formatCurrency = (price) =>new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'INR'}).format(price | 0);

export const format = (number)=>new Intl.NumberFormat().format(number | 0)

export default formatCurrency;