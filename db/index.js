// Import database connection file
const connection = require("./connection");

class Data {

    constructor(connection) {
        this.connection = connection;
    }

    findAllEmployess() {
        return this.connection.promise().query(
            "SELECT employee.id, employee.first_name, employee.last_name, job_role.title, department.name AS department, job_role.salary, 
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
        return this.connection.promise().query("SELECT job_role.id, job_role.title, department.name AS department, role.salary FROM role LEFT JOIN department on role")
    }

    createRole(role) {
        return this.connection.promise().query("INSERT INTO job_role SET ?", role);
    }





















}