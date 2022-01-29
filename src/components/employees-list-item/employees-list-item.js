import { Component } from "react";
import './employees-list-item.css';

class EmployeesListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            increase: this.props.isGold,
            giveStar: this.props.star
        }
    }

    toUp = () => {
        this.setState(({ increase }) => ({
            increase: !increase
        }))
    }

    doStar = () => {
        this.setState(({ giveStar }) => ({
            giveStar: !giveStar
        }))
    }

    render() {

        const { name, salary, onDelete } = this.props
        const { increase, giveStar } = this.state

        let classListItem = 'list-group-item d-flex justify-content-between';
        if (increase) {
            classListItem += ' increase';
        }
        if (giveStar) {
            classListItem += ' like';
        }

        return (
            <li className={classListItem}>
                <span onClick={this.doStar} className="list-group-item-label">{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button" onClick={this.toUp}
                        className="btn-cookie btn-sm ">
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                        className="btn-trash btn-sm " onClick={onDelete}>
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem;