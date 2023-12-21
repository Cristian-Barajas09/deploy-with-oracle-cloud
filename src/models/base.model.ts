import oracledb from 'oracledb';

export class BaseModel {
    protected oracledb = oracledb;
    protected name = 'BaseModel';


    constructor() {}

    static async init() {

        oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
        oracledb.autoCommit = true;
        oracledb.fetchAsString = [oracledb.CLOB];

            console.log('Initializing database connection');
            console.log(
                'user: ',process.env.DB_USER,
                'password: ',process.env.DB_PASSWORD,
                'connectionString: ',process.env.DB_CONNECTIONSTRING
            );

            await oracledb.createPool({
                user:process.env.DB_USER,
                password:process.env.DB_PASSWORD,
                connectString:process.env.DB_CONNECTIONSTRING,
            });
            console.log('Connection was successful');
    }


    async findAll(): Promise<Record<string,any>[]> {
        return []
    }
}