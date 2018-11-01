someOrder = {
  items: [
    { name: 'Dragon food'        , price: 8,   quantity: 8 },
    { name: 'Dragon cage (small)', price: 800, quantity: 2 },
    { name: 'Shipping', price: 40, shipping: true }
  ]
}

orderTotal = (order) => {
  totalNormalItems =
    order.items
      .filter(x => !x.shipping)
      .reduce((prev, cur) => prev + cur.quantity * cur.price, 0)
  shippingItem =
    order.items.find(x => !!x.shipping)
  shipping = totalNormalItems > 1000 ? 0 : shippingItem.price
  return totalNormalItems + shipping
}

result = orderTotal(someOrder)
result;
