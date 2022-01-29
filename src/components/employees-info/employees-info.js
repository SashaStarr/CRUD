import './employees-info.css';

const EmployeesInfo = ({ employees, goldPersons }) => {
    return (
        <div className='employees-info'>
            <h1>Учет сотрудников в компании</h1>
            <h2>Общее число сотрудников: {employees}</h2>
            <h3>Премию получат: {goldPersons}</h3>
        </div>
    )
}

export default EmployeesInfo;