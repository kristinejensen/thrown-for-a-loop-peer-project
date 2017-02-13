$(document).ready(function() {

  var employeeArray = [{name: "Tony", yearsOfExperience: 10}, {name: "Carla", yearsOfExperience: 4}, {name: "Kris", yearsOfExperience: 10}];

  $('#submitButton').on('click', function(){
    var employeeName = $('#employeeName').val();
    var yearsOfExperience = parseFloat($('#yearsOfExperience').val());
    var newEmployeeObject = new Employee(employeeName, yearsOfExperience);
    employeeArray.push(newEmployeeObject);

    $('#employeeInformation').append(
      '<tr>' +
      '<td>' + employeeName + '</td>' +
      '<td>' + yearsOfExperience + '</td>' +
      '</tr>'
    );

    $('#totalYearsExperience').text(experienceTotaler(employeeArray));
  });

  employeePrintOut(employeeArray);
  $('#totalYearsExperience').text(experienceTotaler(employeeArray));

  function Employee(name, yearsOfExperience) {
    this.name = name;
    this.yearsOfExperience = yearsOfExperience;
  };

  function experienceTotaler(array){
    var totalExperience = 0;
    array.forEach(function(employee){
      totalExperience += employee.yearsOfExperience;
    });
    return totalExperience;
  }

  function employeePrintOut(array){
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
