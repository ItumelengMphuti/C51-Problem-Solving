class Employee {
    constructor(name, email, role, salary) {
        this.name = name;
        this.email = email;
        this.role = role;
        this.salary = salary;
    }
    // open/closed principle - if wecd  add for example "designer" then we will have to modify Employee
    calculatePay() {
        if (this.role === "Developer") {
            return this.salary + 2000;
        }
        if (this.role === "Manager") {
            return this.salary + 5000;
        }
        if (this.role === "Intern") {
            return this.salary;
        }

        return this.salary;
    }
    generateReport() {
        return `
Employee: ${this.name}
Email: ${this.email}
Role: ${this.role}
Salary: ${this.salary}
`;
    }
    // Violated SRP 
    saveToDatabase() {
        console.log(`Saving ${this.name} to the database...`);
    }
    sendEmail(message) {
        console.log(`Sending email to ${this.email}: ${message}`);
    }
    // Open/Close Principle Violated
    promote() {
        if (this.role === "Developer") {
            this.role = "Senior Developer";
            this.salary += 3000;
        } else if (this.role === "Intern") {
            this.role = "Developer";
            this.salary += 2000;
        }
    }
    // Open/Close Principle Violated
    work() {
        if (this.role === "Developer") {
            return "Writing code...";
        }
        if (this.role === "Manager") {
            return "Managing the development team...";
        }
        if (this.role === "Intern") {
            return "Learning and assisting the team...";
        }
        return "Working...";
    }
}
// Interface Segregation Principle Violated
class Developer extends Employee {
    work() {
        return "Writing code...";
    }
    sendEmail(message) {
        throw new Error("Developers cannot send emails");
    }

}
class Manager extends Employee {
    work() {
        return "Managing the development team...";
    }
}
// Substitution Principle violation
class Intern extends Employee {
    work() {
        return "Learning and assisting the team...";
    }
    calculatePay() {
        throw new Error("Interns do not receive a salary calculation");
    }
}
// Open/Closed Principle violation - 

function processEmployee(employee) {
    console.log(employee.work());
    console.log(employee.calculatePay());
    if (employee instanceof Developer) {
        console.log("Developer-specific processing");
    }
    if (employee instanceof Manager) {
        console.log("Manager-specific processing");
    }
    if (employee instanceof Intern) {
        console.log("Intern-specific processing");
    }
}