import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: "mysql",
    host: 'gateway01.us-east-1.prod.aws.tidbcloud.com',
    port: 4000,
    username: '4CpzRjSA6HHswR1.root',
    password: "aVB9FPiYl1F7cCGY",
    database: "test",
    synchronize: true,
    logging: true,
    entities: ["src/entities/Pessoa.ts", "src/entities/Projeto.ts"],
    subscribers: [],
    migrations: [],
    ssl: {
        minVersion: 'TLSv1.2',
        rejectUnauthorized: false
    }
});

export default AppDataSource;