function orderTotal(order) {
  return order.items.reduce(
    (prev, cur) => cur.price * (cur.quality || 1) + prev,
    0
  );
}

if (
  orderTotal({
    items: [{ name: "Dragon candy", price: 2, quantity: 3 }],
  }) !== 6
) {
  throw new Error("Check fail: Quantity");
}
