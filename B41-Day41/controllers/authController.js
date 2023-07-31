import mentor from '../models/mentorSchema.js';
import student from '../models/studentSchema.js';

//To create a mentor//

export const createMentor = async (req, res) => {
    const Mentor = new mentor({
        name: req.body.name,
        email: req.body.email,
        expertise: req.body.expertise
    });
    try {
        const savedMentor = await Mentor.save();
        res.send({
            savedMentor: savedMentor,
            message: "Mentor details saved !!"
        });
    }
    catch (err) {
        res.status(400).send("Error occured Please Check !!", err);
    }
};

//To create a student//

export const createStudent = async (req, res) => {
    const Student = new student({
        name: req.body.name,
        email: req.body.email
    });
    try {
        const savedStudent = await Student.save();
        if (savedStudent) {
            res.status(200).send({
                savedStudent: savedStudent,
                message: "Student detail saved successfully"
            });
        }
    }
    catch (err) {
        res.status(400).send("Error occured Please Check !!", err)
    }
};

//Assigning student to mentor//

export const assignStudent = async (req, res) => {
    try {
        const Student = await student.findById(req.params.studentId);
        Student.mentor = req.params.mentorId;
        const updatedStudent = await Student.save();
        res.status(200).send({
            message: "Assigned the student to the mentor",
            updatedStudent: updatedStudent
        });
    }
    catch (err) {
        res.status(400).send("Error occured Please check !!", err);
    }
};

//Change the mentor for a student//

export const changeMentor = async (req, res) => {
    try {
        const Student = await student.findById(req.params.studentId)
        const updatedStudent = await student.findByIdAndUpdate(
            Student,
            { mentor: req.params.mentorId },
            { new: true }
        );
        res.status(200).send(updatedStudent)
    }
    catch (err) {
        res.status(400).send("Error occured Please check !", err)
    }

};

//Get students for a mentor//

export const getStumen = async (req, res) => {
    try {
        const Students = await student.find({ mentor: req.params.id });
        res.status(200).send(Students);
    }
    catch (err) {
        res.status(400).send("Error occured", err)
    }
};

//Get mentor by id//

export const getMentor = async (req, res) => {
    try {
        const Mentor = await mentor.findOne({_id:req.params.id});
        res.send(Mentor);
    }
    catch (err) {
        res.status(400).send("Error occured Please check !", err)
    }
};

//Get student by id//

export const getStudent = async (req, res) => {
    try {
       const Student = await student.findOne({_id:req.params.id});
        res.status(200).send(Student)
    }
    catch (err) {
        res.status(400).send("Error occured Please check", err);
    }
};