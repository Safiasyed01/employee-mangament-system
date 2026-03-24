const employees = [
{
id: 1,
firstName: "Ali",
email: "employee1@gmail.com",
password: "123",

taskNumbers:{
active:1,
newTask:1,
completed:1,
failed:1
},

tasks: [
{
active: true,
newTask: true,
failed: false,
completed: false,
taskTitle: "Update website UI",
taskDescription: "Improve landing page design",
taskDate: "2026-03-16",
category: "Design"
},
{
active: false,
newTask: false,
failed: false,
completed: true,
taskTitle: "Fix login bug",
taskDescription: "Resolve login authentication error",
taskDate: "2026-03-14",
category: "Development"
},
{
active: false,
newTask: false,
failed: true,
completed: false,
taskTitle: "Write API documentation",
taskDescription: "Document employee API endpoints",
taskDate: "2026-03-15",
category: "Documentation"
}
]
},

{
id: 2,
firstName: "Ahmed",
email: "employee2@gmail.com",
password: "123",

taskNumbers:{
active:1,
newTask:1,
completed:1,
failed:1
},

tasks: [
{
active: true,
newTask: true,
failed: false,
completed: false,
taskTitle: "Database backup",
taskDescription: "Backup company database",
taskDate: "2026-03-16",
category: "Database"
},
{
active: false,
newTask: false,
failed: false,
completed: true,
taskTitle: "Update employee records",
taskDescription: "Add new employee information",
taskDate: "2026-03-12",
category: "HR"
},
{
active: false,
newTask: false,
failed: true,
completed: false,
taskTitle: "Server monitoring",
taskDescription: "Check server performance issues",
taskDate: "2026-03-13",
category: "IT"
}
]
},

{
id: 3,
firstName: "Hassan",
email: "employee3@gmail.com",
password: "123",

taskNumbers:{
active:1,
newTask:1,
completed:1,
failed:1
},

tasks: [
{
active: true,
newTask: true,
failed: false,
completed: false,
taskTitle: "Prepare sales report",
taskDescription: "Create monthly sales summary",
taskDate: "2026-03-17",
category: "Sales"
},
{
active: false,
newTask: false,
failed: false,
completed: true,
taskTitle: "Client meeting",
taskDescription: "Discuss project requirements",
taskDate: "2026-03-11",
category: "Meeting"
},
{
active: false,
newTask: false,
failed: true,
completed: false,
taskTitle: "Email campaign",
taskDescription: "Send marketing email campaign",
taskDate: "2026-03-10",
category: "Marketing"
}
]
},

{
id: 4,
firstName: "Usman",
email: "employee4@gmail.com",
password: "123",

taskNumbers:{
active:1,
newTask:1,
completed:1,
failed:1
},

tasks: [
{
active: true,
newTask: true,
failed: false,
completed: false,
taskTitle: "Create dashboard charts",
taskDescription: "Add analytics charts to dashboard",
taskDate: "2026-03-16",
category: "Frontend"
},
{
active: false,
newTask: false,
failed: false,
completed: true,
taskTitle: "Code review",
taskDescription: "Review teammate pull request",
taskDate: "2026-03-14",
category: "Development"
},
{
active: false,
newTask: false,
failed: true,
completed: false,
taskTitle: "Performance optimization",
taskDescription: "Improve app load speed",
taskDate: "2026-03-13",
category: "Optimization"
}
]
},

{
id: 5,
firstName: "Bilal",
email: "employee5@gmail.com",
password: "123",

taskNumbers:{
active:1,
newTask:1,
completed:1,
failed:1
},

tasks: [
{
active: true,
newTask: true,
failed: false,
completed: false,
taskTitle: "Write blog post",
taskDescription: "Create article about new features",
taskDate: "2026-03-18",
category: "Content"
},
{
active: false,
newTask: false,
failed: false,
completed: true,
taskTitle: "Social media update",
taskDescription: "Post updates on company pages",
taskDate: "2026-03-12",
category: "Marketing"
},
{
active: false,
newTask: false,
failed: true,
completed: false,
taskTitle: "Customer feedback analysis",
taskDescription: "Analyze feedback from surveys",
taskDate: "2026-03-11",
category: "Research"
}
]
}
];



const admin =  [
  {
    "id": 1,
    "email": "admin1@gmail.com",
    "password": "123"
  }
]

export const setLocalStorage = () => {

localStorage.setItem("employees", JSON.stringify(employees))

localStorage.setItem("admin", JSON.stringify(admin))

}
export const getLocalStorage = () => {
    const employees =JSON.parse (localStorage.getItem('employees'))
    const admin =JSON.parse (localStorage.getItem('admin'))
      return { employees, admin }

}