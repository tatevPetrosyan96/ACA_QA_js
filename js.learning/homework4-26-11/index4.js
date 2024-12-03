//You are given an array of employees, where each employee has a name and a department. Your task is to determine how many employees work in each department.
const employees = [
    { name: "Karen", department: "HR" },
    { name: "John", department: "IT" },
    { name: "Margarita", department: "HR" },
    { name: "Aram", department: "Finance" },
    { name: "Nina", department: "IT" }
];

const departmentCount = {};
for(let i of employees){
    let count = i.department;
if (departmentCount[count]){
    (departmentCount[count])++;

}else{(departmentCount[count]) = 1;

}
}
console.log(departmentCount)