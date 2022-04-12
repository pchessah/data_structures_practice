// 1: Create a grades object that stores a set of student grades in an object. Provide a
// function for adding a grade and a function for displaying the student’s grade average.

let grades = {};

function addGrade(grade, subject){
    if(!grades[subject]){
        grades[subject] = [];
    }
    grades[subject].push(grade);
}

function getAverageGrade(subject){
    let sum = 0;
    let average = 0;
    if(!grades[subject]){
        return 0;
    }
    for(let i = 0; i < grades[subject].length; i++){
        sum += grades[subject][i];
    }
    average = sum / grades[subject].length;
    return average;
}

//---------------------------------------------------------------------------------------------------------------
// 2: Store a set of words in an array and display the contents both forward and backward

let words = ['hello', 'world', 'javascript', 'is', 'awesome'];
const reveresed = words.reverse();

//---------------------------------------------------------------------------------------------------------------
//  3.Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
// data using a two-dimensional array. Create functions to display the monthly aver‐
// age, a specific week’s average, and all the weeks’ averages.

//WEEKLY TEMPS OBJECT

// function weekTemps() {
//   this.dataStore = [];
//   this.add = add;
//   this.average = average;
//  }
//  function add(temp) {
//   this.dataStore.push(temp);
//  }
//  function average() {
//   var total = 0;
//   for (var i = 0; i < this.dataStore.length; ++i) {
//   total += this.dataStore[i];
//   }
//   return total / this.dataStore.length;
//  }
//  var thisWeek = new weekTemps();
//  thisWeek.add(52);
//  thisWeek.add(55);
//  thisWeek.add(61);
//  thisWeek.add(65);
//  thisWeek.add(55);
//  thisWeek.add(50);
//  thisWeek.add(52);
//  thisWeek.add(49);
//  print(thisWeek.average()); // displays 54.875

function monthTemps(){
    this.dataStore = [];
    this.add = add;
    this.average = average;
    this.getWeek = getWeek;
    this.getWeeks = getWeeks;

    function add(temp){
        this.dataStore.push([temp]);
    }

    function average(){
        let total = 0;
        for(let i = 0; i < this.dataStore.length; i++){
          let weekTotal;
          for(let j =0; j < this.dataStore[i].length; j++){
            weekTotal += this.dataStore[i][j];
          }
          total += weekTotal / this.dataStore[i].length;
        }
        return total / this.dataStore.length;
    }
}
//---------------------------------------------------------------------------------------------------------------
// 4. Create an object that stores individual letters in an array and has a function for
//    displaying the letters as a single word

let obj = { letters: [ 'a', 'b', 'c', 'd', 'd'],
            word: letters.join('')}


