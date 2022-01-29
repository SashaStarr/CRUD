import { Component } from "react";
import EmployeesListItem from "../employees-list-item/employees-list-item";

import './employees-list.css';

class EmployeesList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { data, onDelete } = this.props
        const items = data.map(item => {
            const { id, ...anotherItems } = item
            return <EmployeesListItem key={id} {...anotherItems} onDelete={() => onDelete(id)} />
        })

        return (
            <ul className="app-list list-group">
                {items}
            </ul>
        )
    }
}

export default EmployeesList;