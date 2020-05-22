const express = require('express');
const router = express.Router();

const courses = [
    {id:1, name: 'course1'},
    {id:2, name: 'course2'},
    {id:3, name: 'course3'}
];

router.get('/', (req, res) => {
    res.send(courses);
});

router.get('/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given ID is not found');
    res.send(course);
});

router.get('/api/posts/:year/:month', (req, res) => {
    console.log(req.params)
    res.send(req.query);
});

router.post('/', (req, res) => {
    const {error} = validateCourse(req.body)
    if(error) return res.status(400).send(error.details[0].message);
    // if(!req.body.name || req.body.name.length < 3){
    //     res.status(400).send('Name is required and should be minimum 3 characters')
    //     return;
    // }
    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
});



router.put('/:id', (req, res)=>{
    //Not found - return 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given ID is not found');
    //validate - invalid 400 bad request
    //const result = validateCourse(req.body)
    const {error} = validateCourse(req.body)
    //console.log(result);
    if(error) return res.status(400).send(error.details[0].message);
    //update - 200 OK
    course.name = req.body.name;
    res.send(course);
})

function validateCourse(course){
    const schema ={
        name: Joi.string().min(3).required()
    };
    return Joi.validate(course, schema);
}

router.delete('/:id', (req, res)=> {
    //Lookup
    //If not exists - reutrn 404
    //Not found - return 404 error
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if(!course) return res.status(404).send('The course with given ID is not found');
    //Delete
    const index = courses.indexOf(course);
    courses.splice(index, 1);
    //return same course
    res.send(course);
    
})

module.exports = router;