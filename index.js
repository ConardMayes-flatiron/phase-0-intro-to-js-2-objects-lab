const employee = {
    name: "Steve",
    streetAddress: "5216 Igneous"
}

function updateEmployeeWithKeyAndValue(employee,key, value){
    return Object.assign({}, employee, {[key]:value});

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const tempEmployee= {...employee};
    delete tempEmployee[key];
    return tempEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.[key];
    return employee;
}