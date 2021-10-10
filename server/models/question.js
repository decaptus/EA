import mongoose from 'mongoose';

const questionSchema = mongoose.Schema({
    
    creator: String,
    question: String,
    solved: Boolean,
    
})

var QuestionMessage = mongoose.model('QuestionMessage', questionSchema);

export default QuestionMessage;