import { Request, Response } from "express";
import  CreateCourseService  from "./CreateCourseService";


export function createCourse(request: Request, response: Response){
    CreateCourseService.execute("Teste", 30, "Dani Leão");

    return response.send()
}