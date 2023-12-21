"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const task_routes_1 = __importDefault(require("./routes/task.routes"));
const app = (0, express_1.default)();
app.set('port', process.env.PORT || 3000);
app.set('host', process.env.HOST || 'localhost');
//middlewares
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
// routes
app.use('/api/v1', task_routes_1.default);
app.listen(3000, () => {
    console.log(`Server is running on port ${app.get('port')}`);
});
