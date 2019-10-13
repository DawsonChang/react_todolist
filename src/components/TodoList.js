import React from 'react';
import { connect } from 'react-redux';
import { fetchLists, addLists, deleteLists } from '../actions';
import './todo.css';

class TodoList extends React.Component {
	//still have to figure out how to do fadeout current div and call the deleteLists action creator
  	constructor() {
	    super();
	    this.state = {
	      toggle: false,
	      completed: [],
	      current: null
	    };
  	}
	componentDidMount() {
		this.props.fetchLists();
	}

	onClickToggle = () => {
    	this.setState({toggle: !this.state.toggle});
    }

    onClickCompleted = (list) => {
    	const { completed } = this.state;
    	if (completed.find((elem) => elem === list)){
    		this.setState({
    			completed: completed.filter(e => e !== list)
    		});
    	}
    	else {
    		this.setState({
    			completed: [...completed, list]
    		});
    	}
    }

	renderList() {
		const { completed } = this.state;

		return this.props.lists.map((list, index) => {

			return (
				//className={`li ${current === index && fadeout ? 'fadeOut' : null}`}
				<div className="li" key={index} >
				  <span value={list} onClick={ () => this.props.deleteLists(list) }>
				    <i className="fa fa-trash-alt"></i>
				  </span> 
				  <div style={{display: "inline"}} onClick={() => this.onClickCompleted(list)} className={completed.find((elem) => elem === list) ? 'completed':null}>
				  { list }
				  </div>
				</div>
			);
		});
	}

	handleKeyDown = (e) => {

	    if (e.key === 'Enter' && e.target.value !== "") {
	    	const { lists } = this.props;
		    if (!lists.find((elem) => elem === e.target.value)) {
			    this.props.addLists(e.target.value);
			    e.target.value = "";
			}
			else {
				alert("The list has existed!");
			}
	    }
	}

	onChangeCheck = (e) => {
		if (e.target.value.length > 22) {
			alert("List limit exceed!");
			e.target.value = "";
		}
	}
	

	render() {
		return(
			<div>
				<h1>To-Do List<i className="fa fa-plus" onClick={this.onClickToggle}></i></h1>
				<input type="text" placeholder="Add New Text" onChange={this.onChangeCheck} className={this.state.toggle ? 'fadeOut' : 'fadeIn'} onKeyDown={this.handleKeyDown} />
				<ul>
					{this.renderList()}
				</ul>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return { lists: state.lists }
}

export default connect(mapStateToProps, { fetchLists, addLists, deleteLists })(TodoList);