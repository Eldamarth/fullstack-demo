// create db
const mongoose = require ('mongoose');
const autoIncrement = require ('mongoose-auto-increment');


mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to DB!")
});

const db = mongoose.connection;

autoIncrement.initialize(db);

const bugSchema = new mongoose.Schema({
    bugName: '1',
    bugDescription: 'Async Swim needs to be fixed, desperately.',
    reportedBy: 'Bailey',
    createdDate: '1/5/2020',
    assignedTo: 'Teddi',
    threatLevel: 'Critical',
})

bugSchema.plugin(autoIncrement.plugin, 'Bug');
const Bug = db.model('Bug', bugSchema);