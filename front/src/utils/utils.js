export const priceSizeDictionary = {
    '26 см.': 'small',
    '30 см.': 'medium',
    '40 см.': 'big',
};
export const priceShapeDictionary = {
    тонкое: 'slim',
    традиционное: 'traditional',
};

export const calculateOrder = (orderPizzas) => {
    const updatedOrder = {
        orderPizzas: orderPizzas,
        pizzasAmount: orderPizzas.reduce(
            (acc, pizzaInOrder) => acc + pizzaInOrder.currentAmount,
            0
        ),
        pizzasTotalPrice: orderPizzas.reduce(
            (acc, pizzaInOrder) => acc + pizzaInOrder.currentPrice * pizzaInOrder.currentAmount,
            0
        ),
    };
    return updatedOrder;
};
