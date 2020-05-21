const mongoose =  require('mongoose');

mongoose.connect(process.env.MONGODB_URI,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
 },(err)=>{
    if(!err) console.log('Connection Stablish ');
    else console.log('Tui Shesh!'+ JSONS.stringfy(err,undefined,2));

});

require('./user.model');