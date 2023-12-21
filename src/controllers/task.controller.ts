import { Request, Response } from "express";
import { TaskModel } from "../models/task.model";




export class TaskController {
    async getAll(req: Request,res: Response) {
        try {
            const taskModel = await TaskModel.create();
            return res.json({
                task: taskModel.findAll()
            }).status(200);
        } catch (err) {
            console.log(err);
            return res.json({
                message: 'Error with the request'
            }).status(400);
        }
    }

}