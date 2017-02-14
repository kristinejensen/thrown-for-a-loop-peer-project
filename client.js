//waits for DOM to load
$(document).ready(function() {

  //sample starting data
  var employeeArray = [{name: "Tony", yearsOfExperience: 10}, {name: "Carla", yearsOfExperience: 4}, {name: "Kris", yearsOfExperience: 10}];

  //runs our table appending function with the existing employeeArray data when DOM loads
  employeePrintOut(employeeArray);

  //replaces text of the totalYearsExperience ID on <span> with the result of our experienceTotaler function
  $('#totalYearsExperience').text(experienceTotaler(employeeArray));

  //listens for submit button click or enter in <form> tag
  $('form').on('submit', function(event){

    //prevents new page from getting created (default form behavior)
    event.preventDefault();

    //creates a new array of objects that corresponds with form inputs
    var submissionArray = $(this).serializeArray();

    //sets empty object variable that will be updated with information from form inputs
    var newEmployeeObject = {};

    //adds properties to object variable using name from input and value from user
    submissionArray.forEach(function(inputField){
      newEmployeeObject[inputField.name]= inputField.value;
    })

    //adds newEmployeeObject to our existing employeeArray
    employeeArray.push(newEmployeeObject);

    //runs our table appending function, adding our employee information to the DOM
    employeePrintOut(employeeArray);

    //this connects to the totalYearsExperience span ID, inputting the result of our experienceTotaler function there as text
    $('#totalYearsExperience').text(experienceTotaler(employeeArray));
  });

  //this returns the total years of experience for all employees in the array it runs on, converting to a number
  function experienceTotaler(array){
    var totalExperience = 0;
    array.forEach(function(employee){
      totalExperience += parseFloat(employee.yearsOfExperience);
    });
    return totalExperience;
  }

  //first, clears all the data from the #employeeInformation ID on the <table>. then, it creates a row on the table with the data from each object in our employee array, dynamically adding to the DOM
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
