import { Component } from "react";
import "./employees-filter.css";

class EmployeesFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            buttons: [
                { id: '1', name: 'Все сотрудники', filter: 'all' },
                { id: '2', name: 'На повышение', filter: 'withGold' },
                { id: '3', name: 'З/П больше 1000$', filter: 'more1000dol' }
            ]
        }
    }


    render() {
        const { buttons } = this.state
        const buttonsForFilter = buttons.map(item => {
            const buttonFilter = item.filter
            const active = this.props.filter === item.filter
            const classOfButtons = active ? 'btn btn-light' : 'btn btn-outline-light'
            return (<button type="button"
                className={classOfButtons} key={item.id}
                onClick={() => this.props.changeFilter(buttonFilter)} >
                {item.name}
            </button>)
        })
        return (
            <div className="btn-group" >
                {buttonsForFilter}
            </div >
        )
    }
}

export default EmployeesFilter;