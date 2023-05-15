import { DataSource } from "typeorm";
export const AppDataSource = new DataSource({
	type: "mysql",
	host: "containers-us-west-4.railway.app",
	port: 5508,
	username: "root",
	password: "rd5cdY8BBU1Ek2ZY3OwZ",
	database: "railway",
	synchronize: true,
	logging: true,
	entities: ["src/entities/*.ts"],
	subscribers: [],
	migrations: [],
});
