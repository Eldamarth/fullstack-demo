import React, {Component} from 'react';

class SubmitDialog extends Component {
  
    render() {
        let popup = (
            <div className="popup">
                <form>
                        <label htmlFor="name">Assigned Team Member: </label>
                        <input type='text' name ="assignedTeamMember"></input>
                        <br/>
                        <label htmlFor="threatLevel">Threat Level: </label>
                        <select type='text' name='threatLevel'>
                            <option value="Low-Priority">Low-Priority</option>
                            <option value="Important">Important</option>
                            <option value="Critical">Critical</option>
                        </select>
                        <br/>
                        <label htmlFor="description">Description: </label>
                        <input type='text' name = 'description'></input>
                        <br/>
                        <label htmlFor="reporter">Reporter: </label>
                        <input type='text' name = 'reporter'></input>
                </form>
                <div className="buttonHolder"> 
                    <button onClick={(e)=>{}}>SUBMIT</button>
                </div>
            </div>
        );

        if (! this.props.submitDialogVisible){
            popup = null;
        }

        return (
        <div>
            {popup}
        </div>
        );
    }
}

export default SubmitDialog;