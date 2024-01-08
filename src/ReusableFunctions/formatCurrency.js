const formatCurrency = (price) =>new Intl.NumberFormat('en-IN', {style: 'currency',currency: 'INR'}).format(price);

export default formatCurrency;