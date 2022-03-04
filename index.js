// import required folders/packages
const inquirer = require("inquirer");
const data = require("./db");
require("console.table");
const logo = require('asciiart-logo');
const connection = require('./db/connection');


// throw error if connection cannot be made
connection.connect(err => {
    if (err) throw err
    init();
});

// Initialize application
function init() {
    const logoText = logo ({
        name: "Employee Tracker",
        borderColor: "grey",
        logoColor: "blue",
        font: "ANSI Shadow"
    }).render();
    console.log(logoText);

    loadPrompts();
}

function loadPrompts() {
    inquirer.prompt([
        {
            type: "list",
            name: "choice",
            message: "What would you like to do?",
            choices: [
                {
                    name: "View All Employees",
                    value: "VIEW_EMPLOYEES"
                },
                {
                    name: "Add Employee",
                    value: "ADD_EMPLOYEE"
                },
                {
                    name: "Update Employee Role",
                    value: "UPDATE_EMPLOYEE_ROLE"
                },
                {
                    name: "Remove Employee",
                    value: "REMOVE_EMPLOYEE"
                },
                {
                    name: "View All Roles",
                    value: "VIEW_ROLES"
                },
                {
                    name: "Add Role",
                    value: "ADD_ROLE"
                },
                {
                    name: "View All Departments",
                    value: "VIEW_DEPARTMENTS"
                },
                {
                    name: "Add Department",
                    value: "ADD_DEPARTMENT"
                },
                {
                    name: "Quit",
                    value: "QUIT"
                }
            ]
        }
    ]).then(res => {
        let choice = res.choice;

        switch (choice) {
            case "VIEW_EMPLOYEES":
                viewEmployees();
                break;
            case "ADD_EMPLOYEE":
                addEmployee();
                break;
            case "UPDATE_EMPLOYEE_ROLE":
                updateEmployeeRole();
                break;
            case "REMOVE_EMPLOYEE":
                removeEmployee();
                break;
            case "VIEW_ROLES":
                viewRoles();
                break;
            case "ADD_ROLE":
                addRole();
                break;
            case "VIEW_DEPARTMENTS":
                viewDepartments();
                break;
            case "ADD_DEPARTMENT":
                addDepartment();
                break;
            case "QUIT":
                quit();
                break;
        }
    })
}

function viewEmployees() {
    data.findAllEmployees().then(function(res) {
        console.log("");
        console.table(res[0]);
        console.log("==================================================================================");
        loadPrompts();
    });
    
}

function addEmployee() {

    inquirer.prompt([
        {
            type: "input",
            name: "first_name",
            message: "What is the employee's first name?"
        },
        {
            type: "input",
            name: "last_name",
            message: "What is the employee's last name?"
        },
        {
            type: "list",
            name: "role_id",
            message: "What is the employee's role",
            choices: [
                {
                    name: "Staff Accountant",
                    value: 1
                },
                {
                    name: "Controller",
                    value: 2
                },
                {
                    name: "Engineer",
                    value: 3
                },
                {
                    name: "Senior Engineer",
                    value: 4
                },
                {
                    name: "Lawyer",
                    value: 5
                },
                {
                    name: "Legal Team Lead",
                    value: 6
                },
                {
                    name: "Operations Manager",
                    value: 7
                },
                {
                    name: "Sales Associate",
                    value: 8
                },
                {
                    name: "Sales Lead",
                    value: 9
                }
            ]
        },
        {
            type: "list",
            name: "manager_id",
            message: "Who is the employee's manager?",
            choices: [
                {
                    name: "None",
                    value: 0
                },
                {
                    name: "Aaron Jones",
                    value: 1
                },
                {
                    name: "Jim Jones",
                    value: 2
                },
                {
                    name: "Sam Snyder",
                    value: 3
                },
                {
                    name: "Jennifer Law",
                    value: 4
                },
                {
                    name: "Taylor Kelly",
                    value: 5
                },
                {
                    name: "Kate Johnson",
                    value: 6
                },
                {
                    name: "Barbara Tate",
                    value: 7
                },
                {
                    name: "Mike Green",
                    value: 8
                },
                {
                    name: "Sarah Carr",
                    value: 9
                },
                {
                    name: "John Brown",
                    value: 10
                },
                {
                    name: "Casey Keller",
                    value: 11
                }
            ]
        }
    ]).then(res => {
       return data.createEmployee(res);

    })
    .then(res => {
        console.log("Added employee!");
        console.log("");
        loadPrompts();
})
    
}

function updateEmployeeRole() {

    inquirer.prompt([
        {
            type: "list",
            name: "id",
            message: "Which employee's role do you want to update?",
            choices: [
                {
                    name: "Aaron Jones",
                    value: 1
                },
                {
                    name: "Jim Jones",
                    value: 2
                },
                {
                    name: "Sam Snyder",
                    value: 3
                },
                {
                    name: "Jennifer Law",
                    value: 4
                },
                {
                    name: "Taylor Kelly",
                    value: 5
                },
                {
                    name: "Kate Johnson",
                    value: 6
                },
                {
                    name: "Barbara Tate",
                    value: 7
                },
                {
                    name: "Mike Green",
                    value: 8
                },
                {
                    name: "Sarah Carr",
                    value: 9
                },
                {
                    name: "John Brown",
                    value: 10
                },
                {
                    name: "Casey Keller",
                    value: 11
                }

            ]
        },
        {
            type: "list",
            name: "role_id",
            message: "Which role do you want to assign the selected employee?",
            choices: [
                
                    {
                        name: "Staff Accountant",
                        value: 1
                    },
                    {
                        name: "Controller",
                        value: 2
                    },
                    {
                        name: "Engineer",
                        value: 3
                    },
                    {
                        name: "Senior Engineer",
                        value: 4
                    },
                    {
                        name: "Lawyer",
                        value: 5
                    },
                    {
                        name: "Legal Team Lead",
                        value: 6
                    },
                    {
                        name: "Operations Manager",
                        value: 7
                    },
                    {
                        name: "Sales Associate",
                        value: 8
                    },
                    {
                        name: "Sales Lead",
                        value: 9
                    }
            ]
        }
    ]).then(res => {
        console.log(res);
        return data.updateEmployeeRole(res.id, res.role_id);
        
    })
    .then(res => {
        console.log("Updated employee role!");
        console.log("");
        loadPrompts();
    })
}

function removeEmployee() {
    inquirer.prompt([
        {
            type: "list",
            name: "id",
            message: "Which employee do you want to remove?",
            choices: [
                {
                    name: "Aaron Jones",
                    value: 1
                },
                {
                    name: "Jim Jones",
                    value: 2
                },
                {
                    name: "Sam Snyder",
                    value: 3
                },
                {
                    name: "Jennifer Law",
                    value: 4
                },
                {
                    name: "Taylor Kelly",
                    value: 5
                },
                {
                    name: "Kate Johnson",
                    value: 6
                },
                {
                    name: "Barbara Tate",
                    value: 7
                },
                {
                    name: "Mike Green",
                    value: 8
                },
                {
                    name: "Sarah Carr",
                    value: 9
                },
                {
                    name: "John Brown",
                    value: 10
                },
                {
                    name: "Casey Keller",
                    value: 11
                }
            ]
        }
    ]).then(res => {
        return data.deleteEmployee(res.id);

    })
    .then(res => {
        console.log("Removed employee!");
        console.log("");
        loadPrompts();
    })
}

function viewRoles() {
    data.findAllRoles().then(function(res) {
        console.log("");
        console.table(res[0]);
        console.log("==================================================================================");
        console.log("");
        loadPrompts();
    });
}

function addRole() {

    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the job title to be added?"
    },
    {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?"
    },
    {
        type: "list",
        name: "department_id",
        message: "What department will this role be in?",
        choices: [
            {
                name: "Accounting",
                value: 1
            },
            {
                name: "Engineering",
                value: 2
            },
            {
                name: "Legal",
                value: 3
            },
            {
                name: "Operations",
                value: 4
            },
            {
                name: "Sales",
                value: 5
            }
        ]
    }
    ]).then(res => {
        return data.createRole(res);
 
     })
 .then(res => {
     console.log("Added role!");
     console.log("");
     loadPrompts();
 })
}

function viewDepartments() {
    data.findAllDepartments().then(function(res) {
        console.log("");
        console.table(res[0]);
        console.log("==================================================================================");
        loadPrompts();
    });
}

function addDepartment() {
    // prompt for department
    inquirer.prompt([
        {
            type: "input",
            name: "department_name",
            message: "What is the department to be added?"
        }
    ]).then(res => {
        return data.createDepartment(res);
    })
    .then(res => {
        console.log("Added department!");
     console.log("");
     loadPrompts();
    })
}

function quit() {
console.log("Thank you for using Employee Tracker!");
}




