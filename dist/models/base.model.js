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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseModel = void 0;
const oracledb_1 = __importDefault(require("oracledb"));
oracledb_1.default.outFormat = oracledb_1.default.OUT_FORMAT_OBJECT;
oracledb_1.default.autoCommit = true;
oracledb_1.default.fetchAsString = [oracledb_1.default.CLOB];
class BaseModel {
    constructor() {
        this.oracledb = oracledb_1.default;
        this.name = 'BaseModel';
    }
    static init() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log('user: ', process.env.DB_USER, 'password: ', process.env.DB_PASSWORD, 'connectionString: ', process.env.DB_CONNECTIONSTRING);
                yield oracledb_1.default.createPool({
                    user: process.env.DB_USER,
                    password: process.env.DB_PASSWORD,
                    connectString: process.env.DB_CONNECTIONSTRING,
                });
            }
            catch (err) {
                console.log(err);
            }
            return new BaseModel();
        });
    }
    findAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return [];
        });
    }
}
exports.BaseModel = BaseModel;
