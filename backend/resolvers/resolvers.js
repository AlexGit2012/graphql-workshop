import module from 'module';
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid';
import { PubSub } from 'graphql-subscriptions';

const requireForJSON = module.createRequire(import.meta.url);
const pizzas = requireForJSON('../data/pizzas.json');
const orders = requireForJSON('../data/orders.json');
const pubSub = new PubSub();

export const resolvers = {
    Query: {
        pizzas: () => pizzas,
        pizza: (parent, args) => pizzas.find((pizza) => pizza.id === args.id),
        orders: () => orders,
        order: (parent, args) => orders.find((order) => order.id === args.id),
    },

    Mutation: {
        addOrder: async (parent, { orderPizzas, pizzasAmount, pizzasTotalPrice }) => {
            const newOrder = { id: uuidv4(), orderPizzas, pizzasAmount, pizzasTotalPrice };
            orders.push(newOrder);
            fs.readFile('./data/orders.json', 'utf8', (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    const ordersArr = JSON.parse(data);
                    ordersArr.push(newOrder);
                    const json = JSON.stringify(ordersArr);
                    fs.writeFile('./data/orders.json', json, 'utf8', (error) => {
                        if (error) {
                            console.log(error);
                        } else {
                            return newOrder;
                        }
                    });
                }
            });
            await pubSub.publish('ORDER_CREATED', {
                orderCreated: {
                    ...newOrder,
                },
            });
            return newOrder;
        },
    },
    Subscription: {
        orderCreated: {
            subscribe: () => pubSub.asyncIterator('ORDER_CREATED'),
        },
    },
};
