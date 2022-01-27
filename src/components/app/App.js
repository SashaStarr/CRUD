import EmployeesInfo from '../employees-info/employees-info';
import EmployeesCreate from '../employees-create/employees-create';
import EmployeesList from '../employees-list/employees-list';
import EmployeesSearch from '../employees-search/employees-search';
import EmployeesFilter from '../employees-filter/employees-filter';
import './App.css';

function App() {
  return (
    <div className="app">
      <EmployeesInfo />
      <div className="search-panel">
        <EmployeesSearch />
        <EmployeesFilter />
      </div>
      <EmployeesList />
      <EmployeesCreate />
    </div>
  );
}

export default App;




