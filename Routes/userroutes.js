import express from 'express';
import { logincontroller, signincontroller } from '../Controller/usercontroller.js';
const userroutes = express.Router();
userroutes.route('/sign').post(signincontroller);
userroutes.route('/login').post(logincontroller);

export default userroutes;
