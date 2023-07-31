import { Router } from "express";
import { createMentor, createStudent, assignStudent, changeMentor, getStumen, getStudent, getMentor } from "../controllers/authController.js";

export const createMentorRoute = Router().post('/', createMentor);
export const createStudentRoute = Router().post('/', createStudent);
export const assignStudentRoute = Router().post('/students/:studentId/mentors/:mentorId', assignStudent);
export const changeMentorRoute = Router().put('/students/:studentId/mentors/:mentorId', changeMentor);
export const getStumenRoute = Router().get('mentors/:id/students', getStumen);
export const getStudentRoute = Router().get('mentor/:id', getStudent);
export const getMentorRoute = Router().get('student/:id', getMentor);

