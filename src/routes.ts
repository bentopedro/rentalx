import { Request, Response } from "express";
import  CreateCourseService  from "./CreateCourseService";


export function createCourse(request: Request, response: Response){
    // CreateCourseService.execute("Teste", 30, "Dani Leão");
    CreateCourseService.execute({
        name: "Teste",
        educator: "Dani Leão",
        duration: 10
    }); // passar os dados como objecto

    return response.send()
}