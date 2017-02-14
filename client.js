$(document).ready(function() {

  var employeeArray = [{name: "Tony", yearsOfExperience: 10}, {name: "Carla", yearsOfExperience: 4}, {name: "Kris", yearsOfExperience: 10}];

  $('form').on('submit', function(event){
    event.preventDefault();

    var submissionArray = $(this).serializeArray();
    var newEmployeeObject = {};

    submissionArray.forEach(function(inputField){
      newEmployeeObject[inputField.name]= inputField.value;
    })

    employeeArray.push(newEmployeeObject);
    console.log(newEmployeeObject);
    employeePrintOut(employeeArray);

    $('#totalYearsExperience').text(experienceTotaler(employeeArray));
  });

  employeePrintOut(employeeArray);
  $('#totalYearsExperience').text(experienceTotaler(employeeArray));

  function experienceTotaler(array){
    var totalExperience = 0;
    array.forEach(function(employee){
      totalExperience += parseFloat(employee.yearsOfExperience);
    });
    return totalExperience;
  }

  function employeePrintOut(array){
    $('#employeeInformation').empty();
    array.forEach(function(employee){
      $('#employeeInformation').append(
        '<tr>' +
        '<td>' + employee.name + '</td>' +
        '<td>' + employee.yearsOfExperience + '</td>' +
        '</tr>'
      );
    });
  }
});
