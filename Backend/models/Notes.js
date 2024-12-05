const mongooose = require('mongoose');

const NotesSchema = new Schema({
    title:{
        type:String,
        require:true
        
    },
    description:{
        type:String,
        require:true
    },
    tag:{
        type:String,
        default:general
    }
   
});

module.exports = mongoose.model('user',NotesSchema);