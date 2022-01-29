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
      ],
      term: '',
      filter: 'all'
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
      id: this.maxId++
    }
    this.setState(({ data }) => {
      const newArray = [...data, newPerson];
      return {
        data: newArray
      }
    });
  }

  doPersonGold = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        console.log(item)
        if (item.id == id) {
          return { ...item, isGold: !item.isGold }
        }
        return item
      })
    }))
  }

  filterPersons = (items, filter) => {
    switch (filter) {
      case 'all':
        return items
      case 'withGold':
        return items.filter(item => item.isGold)
      case 'more1000dol':
        return items.filter(item => item.salary > 1000)
    }
  }

  changeFilter = (filter) => {
    this.setState({ filter })
  }

  doPersonStar = (id) => {
    this.setState(({ data }) => ({
      data: data.map(item => {
        if (item.id == id) {
          return { ...item, star: !item.star }
        }
        return item
      })
    }))
  }

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(item => {
      return item.name.indexOf(term) > -1
    })
  }
  toUpdateEmployeesList = (term) => {
    this.setState({ term })
  }

  render() {
    const { data, term, filter } = this.state
    const employees = data.length
    const goldPersons = data.filter(item => item.isGold).length
    const visibleEmployees = this.filterPersons(this.searchEmp(data, term), filter)
    return (
      <div className="app">
        <EmployeesInfo employees={employees} goldPersons={goldPersons} />
        <div className="search-panel">
          <EmployeesSearch toUpdateEmployeesList={this.toUpdateEmployeesList} />
          <EmployeesFilter filter={filter} changeFilter={this.changeFilter} />
        </div>
        <EmployeesList data={visibleEmployees} onDelete={this.deleteItem} onStar={this.doPersonStar} doPersonGold={this.doPersonGold} />
        <EmployeesCreate onCreate={this.addPerson} />
      </div>
    );
  }
}

export default App;




