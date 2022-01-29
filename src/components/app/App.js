import EmployeesInfo from '../employees-info/employees-info';
import EmployeesCreate from '../employees-create/employees-create';
import EmployeesList from '../employees-list/employees-list';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import './App.css';
import { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        { name: "Sasha", salary: '2000', isGold: false, id: 1, star: false },
        { name: 'Andrew', salary: '1200', isGold: false, id: 2, star: false },
        { name: 'Misha', salary: '1500', isGold: false, id: 3, star: false }
      ]
    }
    this.maxId = 4
  }


  deleteItem = (id) => {
    this.setState(({ data }) => {
      return {
        data: data.filter(item => item.id !== id)
      }
    })
  }

  addPerson = (name, salary) => {
    const newPerson = {
      name,
      salary,
      isGold: false,
      star: false,
      id: this.maxId = 4
    }
    this.setState(({ data }) => {
      const newArray = [...data, newPerson];
      return {
        data: newArray
      }
    });
  }



  render() {
    const { data } = this.state
    return (
      <div className="app">
        <EmployeesInfo />
        <div className="search-panel">
          <EmployeesSearch />
          <EmployeesFilter />
        </div>
        <EmployeesList data={data} onDelete={this.deleteItem} />
        <EmployeesCreate onCreate={this.addPerson} />
      </div>
    );
  }
}

export default App;




