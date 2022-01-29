import { Component } from 'react';
import './employees-create.css';

class EmployeesCreate extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            salary: 0
        }
    }
    onCreatePerson = (e) => {
        this.setState(() => ({
            [e.target.name]: e.target.value
        }))
    }

    onAddPerson = (e) => {
        e.preventDefault();
        this.props.onCreate(this.state.name, this.state.salary);
        this.setState({
            name: '',
            salary: ''
        })
    }

    render() {
        const { onCreate } = this.props
        const { name, salary } = this.state
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        onChange={this.onCreatePerson}
                        name="name"
                        value={name}
                        placeholder="Как его зовут?" />
                    <input type="number"
                        className="form-control new-post-label"
                        onChange={this.onCreatePerson}
                        name="salary"
                        value={salary}
                        placeholder="З/П в $?" />

                    <button type="submit"
                        className="btn btn-outline-light" onClick={this.onAddPerson}>Добавить</button>
                </form>
            </div>
        )
    }
}

export default EmployeesCreate;