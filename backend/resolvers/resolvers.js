import module from 'module';

const requireForJSON = module.createRequire(import.meta.url);
const pizzas = requireForJSON('../data/pizzas.json');
const orders = requireForJSON('../data/orders.json');

export const resolvers = {
    Query: {
        pizzas: () => pizzas,
        pizza: (parent, args) => pizzas.find((pizza) => pizza.id === args.id),
        orders: () => orders,
        order: (parent, args) => orders.find((order) => order.id === args.id),
    },
};
