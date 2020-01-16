import React from 'react';
import Nav from './Nav.jsx';
import BugTile from './BugTile.jsx';
import exampleData from '../example-data/exampleData';

import '../styles/App.scss';
import SubmitDialog from './SubmitDialog.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'None',
      bugs: exampleData,
      visibleBugs: [],
      submitDialogVisible: false,
    };
    this.filterHandler = this.filterHandler.bind(this);
  }

  componentDidMount(){
    fetch('http://localhost:3000/bugs')
    // .then(bugs => console.log(bugs))
    .then(bugs => bugs.json() )
    .then(bugs => this.setState({bugs}))
    .catch(err => {throw err})
    .then(() => this.filterHandler(this.state.filter))
  }

  filterHandler(filter) {
    this.setState({ filter }, ()=>{
      let filteredBugs = this.state.filter !== "None"? this.state.bugs.filter( bug => bug.threatLevel === this.state.filter): this.state.bugs;
      this.setState({visibleBugs:filteredBugs});
    })
    
  }
  
  render() {
    return (
      <div>
      <div id="submitButton"><button  onClick={(e)=>{this.setState({submitDialogVisible:true})}}>SUBMIT NEW BUG</button></div>
      <SubmitDialog submitDialogVisible={this.state.submitDialogVisible}/>
      <table>
        
        <Nav
          filterHandler={this.filterHandler}
        />
        {this.state.visibleBugs.map((bug) => (
          <BugTile
            bugName={bug.bugName}
            bugDescription={bug.bugDescription}
            reportedBy={bug.reportedBy}
            createdDate={bug.createdDate}
            assignedTo={bug.assignedTo}
            threatLevel={bug.threatLevel}
            key={bug.bugName}
          />
        ))}
      </table>
      </div>
    );
  }
}

export default App;
