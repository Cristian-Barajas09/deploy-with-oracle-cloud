import oracledb from 'oracledb';

oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;
oracledb.autoCommit = true;
oracledb.fetchAsString = [oracledb.CLOB];


export class BaseModel {
    protected oracledb = oracledb;
    protected name = 'BaseModel';


    constructor() {}

    static async init() {

        try {
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
        } catch (err) {
            console.log(err);
        }

        return new BaseModel();
    }


    async findAll(): Promise<Record<string,any>[]> {
        return []
    }
}