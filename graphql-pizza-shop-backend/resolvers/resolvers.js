import module from "module";

const requireForJSON = module.createRequire(import.meta.url);
const pizzas = requireForJSON("../data/pizzas.json");

export const resolvers = {
    Query: {
        pizzas: () => pizzas,
        pizza: (parent, args) =>
            pizzas.find((pizza) => pizza.name === args.name),
        price: (parent, args) =>
            pizzas.find((pizza) => pizza.name === args.name)[args.shape][
                args.size
                ],
    },
};