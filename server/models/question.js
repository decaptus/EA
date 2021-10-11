import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    
    creator: String,
    question: String,
    
    solved: Boolean,

    answerCount:{
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default:new Date()
    },
    
})

var QuestionMessage = mongoose.model('QuestionMessage', questionSchema);

export default QuestionMessage;