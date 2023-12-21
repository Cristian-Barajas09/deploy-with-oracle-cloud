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
exports.TaskController = void 0;
const task_model_1 = require("../models/task.model");
class TaskController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const taskModel = yield task_model_1.TaskModel.init();
                return res.json({
                    task: taskModel.findAll()
                }).status(200);
            }
            catch (err) {
                console.log(err);
                return res.json({
                    message: 'Error with the request'
                }).status(400);
            }
        });
    }
}
exports.TaskController = TaskController;
