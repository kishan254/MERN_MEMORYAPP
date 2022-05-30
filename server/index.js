const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const resolvers = require("./graphql/resolvers");
const typeDefs = require("./graphql/typeDefs");

require("dotenv").config();

const server = new ApolloServer({
	introspection: true,
	playground: true,
	typeDefs,
	resolvers,
	context: ({ req }) => ({ req }),
});

mongoose
	.connect(`${process.env.MONGO_URI}`, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	})
	.then(() => {
		console.log("Connected to the Mongo db");
		return server.listen(process.env.PORT || 5000);
	})
	.then((res) => {
		console.log(`Server running at ${res.url}`);
	})
	.catch((err) => {
		console.error(err);
	});
