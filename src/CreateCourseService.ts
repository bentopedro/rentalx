
/**
 * name - string
 * duration - number
 * educator - string
 */

interface CourseProps{
    name: string;
    educator: string;
    duration?: number  //definindo um tipo como opcional
}

 class CreateCourseService {

    execute({educator, name, duration}: CourseProps){
        console.log(name, duration, educator)
    }
}

export default new CreateCourseService()
