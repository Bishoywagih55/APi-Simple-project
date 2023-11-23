//main 
const express = require("express");
//const {body} = require('express-valdator')

const router = express.Router();
const controller = require('../controller/courses.controller');
//const { validationSchema } = require("../middlewares/validation.Schema");

router.route('/' )
            .get(controller.getAllcourses )
            .post( /*validationSchema() , */  controller.add_courses);



router.route('/:id')
            .get( controller.single_course)
            .patch( controller.update_courses)
            .delete( controller.delete_courses );

module.exports=router;