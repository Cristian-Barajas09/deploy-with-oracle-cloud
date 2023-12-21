import { BaseModel } from "./base.model";


export class TaskModel extends BaseModel {

    protected name = 'tasks';

    constructor() {
        super();
    }

    static async create() {
        await BaseModel.init();
        return new TaskModel();
    }


    public async findAll() {
        let conn;
        const result = [];
        try {
            conn = await this.oracledb.getConnection();
            const soda = conn.getSodaDatabase();
            const taskCollection = await soda.createCollection(this.name)
            const taskDocuments = await taskCollection.find().getDocuments();
        
            for (let taskDocument of taskDocuments) {
                result.push(taskDocument.getContent());
            }
        
        } catch (err) {
            console.log(err);
        } finally {
            if (conn) {
                try {
                    await conn.close();
                } catch (err) {
                    console.log(err);
                }
            }
        }

        return result;

    }
}