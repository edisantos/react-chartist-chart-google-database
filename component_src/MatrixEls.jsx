import React from 'react';
import Input from './Inputs.jsx';
import Textarea from './Textarea.jsx';

class MatrixEl extends React.Component {

	render(){    
        let tdInput = (this.props.inpType === 'textarea' ? <Textarea/> : <Input updateAnswers={this.props.updateAnswers} type={this.props.inpType} name={this.props.names} val={this.props.inpValues}/>);
		return (
           <td>{tdInput}</td>
		)
	}
}


export default MatrixEl