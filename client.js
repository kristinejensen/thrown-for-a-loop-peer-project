$(document).ready(function() {

var employeeArray = [{name: "Tony", yearsOfExperience: 10}, {name: "Carla", yearsOfExperience: 4}, {name: "Kris", yearsOfExperience: 10}];

console.log(experienceTotaler(employeeArray));

function experienceTotaler(array){
  var totalExperience = 0;
  array.forEach(function(employee){
    totalExperience += employee.yearsOfExperience;
  });
  return totalExperience;
}

// $('#employeeInformation').append('<td>'employee name</td>
//   <td>years of experience</td>

);




});
