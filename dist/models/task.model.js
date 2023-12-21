"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskModel = void 0;
const base_model_1 = require("./base.model");
class TaskModel extends base_model_1.BaseModel {
    constructor() {
        super();
        this.name = 'tasks';
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            let conn;
            const result = [];
            try {
                conn = yield this.oracledb.getConnection();
                const soda = conn.getSodaDatabase();
                const taskCollection = yield soda.createCollection(this.name);
                const taskDocuments = yield taskCollection.find().getDocuments();
                for (let taskDocument of taskDocuments) {
                    result.push(taskDocument.getContent());
                }
            }
            catch (err) {
                console.log(err);
            }
            finally {
                if (conn) {
                    try {
                        yield conn.close();
                    }
                    catch (err) {
                        console.log(err);
                    }
                }
            }
            return result;
        });
    }
}
exports.TaskModel = TaskModel;
