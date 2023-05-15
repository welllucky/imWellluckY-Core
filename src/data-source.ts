import { DataSource } from "typeorm";

import * as entities from "./entities";

export const AppDataSource = new DataSource({
	type: "mysql",
	host: "containers-us-west-103.railway.app",
	port: 6550,
	username: "root",
	password: "fqrIQlxXRdI1lIyFn4sE",
	database: "railway",
	synchronize: true,
	logging: true,
	entities: [...Object.values(entities)],
	subscribers: [],
	migrations: [],
});