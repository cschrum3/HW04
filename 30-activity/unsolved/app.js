const employeeList = [  // Declares an array
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  ,
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
]


let command = prompt("input a command", "Default");

// PRINT COMMAND
//render all employee info

if (command == 'print') {

    for (i = 0; i < employeeList.length; i++){
      alert(employeeList[i].name)
    }

    for (i = 0; i < employeeList.length; i++){
      window.alert(employeeList[i].officeNum)
    }

    for (i = 0; i < employeeList.length; i++){
      window.alert(employeeList[i].phoneNum)
    }

  }
// VERIFY COMMAND
// prompt the user for an employee name
// print true if the employee exists otherwise print false

else if (command == 'verify') {
  //prompt user
    var name2 = window.prompt("input an employee name", "Default")
  //print employee info
    for (i = 0; i < employeeList.length; i++){
      check = employeeList[i].name == name2; 
      if (check == 1)
      {
        alert("True")
        break
      } 
      else {
        //Do nothing
      }    
    }
  } 

// LOOKUP
//* prompt the user for an employee name
//* print the employee's name, office number, and telephone number
else if (command == 'lookup') {
  //prompt user
  var name2 = window.prompt("input an employee name", "Default")
  //print desired employee info
  for (i = 0; i < employeeList.length; i++){
    check = employeeList[i].name == name2; 
    if (check == 1)
    {
      alert("True")
      break
    } 
    else {
      //Do nothing
    }    
  }
    
}

// CONTAINS
//* prompt the user for a string
//* print the information of *all* employees whose names contain the given string
else if (command == 'contains') {
  //prompt user
  var name2 = window.prompt("input an employee name", "Default")
  //print info of selected employees
    for (i = 0; i < employeeList.length; i++){
      check = employeeList[i].name == name2; 
      if (check == 1)
      {
        alert("True")
        break
      } 
      else {
        //Do nothing
      }    
    }
    
}

// UPDATE
//* prompt the user for a name
//* prompt the user for a field they would like to update
//* prompt the user for a value
//* find the employee with that name and update the provided field with the provided value
//* print the new info for that employee
else if (command == 'update') {
  //prompt user
  var name2 = prompt("input an employee name", "Default")
  //prompt user
  var name3 = prompt("input the desired field for update", "Default")
  var name4 = prompt("input new value")
  //searchlist

  //
)
    
}

// ADD
//* prompt the user for a name
//* prompt the user for an office number
//* prompt the user for a telephone number
//* add this employee to the `employeeList`
//* print the updated `employeeList`
else if (command == 'add') {
    
}

// DELETE
//* prompt the user for a name
//* delete the object with this name property from the array entirely.
//* print the updated `employeeList`
else if (command == 'delete') {

    
}


const val = function(){
  return nodeList[0].value;
}
;

