// Import database connection file
const connection = require("./connection");

class Data {

    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, job_role.title, department.department_name AS department, job_role.salary AS salary, employee.manager_id FROM employee LEFT JOIN job_role ON employee.role_id = job_role.id LEFT JOIN department ON job_role.department_id = department.id"
        );
    }

    createEmployee(employee) {
        return this.connection.promise().query("INSERT INTO employee SET ?", employee);
    }

    removeEmployee(employeeId) {
        return this.connection.promise().query("DELETE FROM employee WHERE id = ?", employeeId);
    }

    updateEmployeeRole(employeeId, roleId) {
        return this.connection.promise().query("UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]);
    }

    findAllRoles() {
        return this.connection.promise().query("SELECT job_role.id, job_role.title, department.department_name AS department, job_role.salary FROM job_role LEFT JOIN department on job_role.department_id = department.id");
    }

    findAllDepartments() {
        return this.connection.promise().query("SELECT department_name FROM department");
    }

    createRole(role) {
        return this.connection.promise().query("INSERT INTO job_role SET ?", role);
    }


}

module.exports = new Data(connection);