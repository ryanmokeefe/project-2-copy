const mongoose = require('../db/connection')

const QuestionSchema = new mongoose.Schema({
    title: String,
    question: String,
    creator: [UserSchema],
    date: {type: Date, default: Date.now},
    answers: [AnswerSchema]
})

const Question = mongoose,model('Question', QuestionSchema)

module.exports = Question