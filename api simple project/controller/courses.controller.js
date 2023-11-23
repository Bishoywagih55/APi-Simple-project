//let {courses} = require('../data/courses.js'); 

const  course  = require('../models/course.model.js');


const getAllcourses =  async (req , res ) => {
    // get courses from database 
    const courses = await course.find();
    res.send({status : "successful" , data : {courses}});
}

const single_course =async (req , res ) => {
    const tcourse = await course.findById(req.params.id);
    /*let courseid = +req.params.id;
    //console.log(courseid);
    const course = courses.find((course) => course.id == courseid);*/
    res.json({status: "successful " , data : {tcourse}});
}

const add_courses = async (req , res ) => {
    //console.log(req.body);
    const newCourse = new course(req.body);
    await newCourse.save();



    res.json(newCourse);
}

const update_courses = (req , res ) => { 
    let courseid= +req.params.id;
    let course=courses.find((course) => course.id == courseid);
    course={...course , ...req.body}
    res.json(course);
}

const delete_courses = async (req , res ) =>{
    const data = await course.deleteOne({_id : req.params.id});
    /*let courseid= +req.params.id; 
    courses=courses.filter((course) => course.id != courseid);*/
    res.json({status : "successful " , data : null});
}

module.exports= {
    getAllcourses,
    single_course,
    add_courses,
    update_courses,
    delete_courses,
}