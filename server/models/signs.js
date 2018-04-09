const mongoose = require('mongoose');

let scheme= mongoose.Schema;

const schemeSigns = new scheme({
    guestSign:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    },
    message:{
        type:mongoose.Schema.Types.Mixed,
        required:true
    }
})

const signs = mongoose.model('signs',schemeSigns);
module.exports = signs;
