// create db
const mongoose = require ('mongoose');
const autoIncrement = require ('mongoose-auto-increment');
mongoose.connect('mongodb://localhost:27017', {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log("Connected to DB!")
});

autoIncrement.initialize(db);

const bugSchema = new mongoose.Schema({
    bugName: mongoose.Types.ObjectId,
    bugDescription: String,
    reportedBy: String,
    createdDate: {type: Date, default: Date.now},
    assignedTo: String,
    threatLevel: String,
})

bugSchema.plugin(autoIncrement.plugin, 'Bug');
const Bug = db.model('Bug', bugSchema, 'bugs');

newBug = (bug) => {
    const newBug = new Bug(bug);
    return newBug.save()
    .then(results => results)
    .catch(err => {throw err})
}
viewAllBugs = () => {
    return Bug.find()
    .then (results => results)
    .catch (err => {throw err})
}

module.exports = {newBug, viewAllBugs}