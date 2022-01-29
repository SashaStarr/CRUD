import { Component } from 'react';
import './employees-search.css';

class EmployeesSearch extends Component {
    constructor(props) {
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdatePersons = (e) => {
        const term = e.target.value
        this.setState({
            term
        })
        this.props.toUpdateEmployeesList(term)
    }

    render() {
        return (
            <input type="text"
                className="form-control search-input"
                placeholder="Найти сотрудника" onChange={this.onUpdatePersons} value={this.state.term} />
        )
    }
}

export default EmployeesSearch;