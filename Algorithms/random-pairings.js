const students = [
    'Bonner, Andre',
    'Lewis, Damian',
    'Gordon, Vincent',
    'Fountain, Koufax',
    'Jeremy Heard',
    'Higgins, Sean',
    'Formman, Brian',
    'Mezler, Joshua',
    'Lewis, Brian',
    'Loveland, Bryan',
    'Lopez, Jason',
    'Coon, Matthew',
    'Ford',
    'Chamblin, Gary',
    'Campbell, Nathan',
    'Tollinchi, Christopher',
    'Flowers, Booker',
    'Roberts, Walter',
    'Bolden, Johntel',
    'Chapman, Charlie',
  ];

function randomPairings() {
     let random = Math.floor(Math.random() * students.length);
        return students[random];
};
// console.log(randomPairings(students));
 
function studentPairs() {
    let pairs = [];
    while (pairs.length < 2) {
        let one = randomPairings(students);
        let index = students.indexOf(one);
        students.splice(index, 1);
        pairs.push(one);
    }
    return pairs;
};
// console.log(studentPairs());

function studentsPairedUp() {
    let pairedUp = [];
    while(students.length > 0) {
        let theTeams = studentPairs();
        pairedUp.push(theTeams);
    }
    return pairedUp;    
}

// console.log(studentsPairedUp());

const button = document.getElementById('button');
const studentNames = document.getElementById('studentNames')

button.addEventListener('click', generate);

function generate() {
    studentsPairedUp();
    function studentsPairedUp() {
        let pairedUp = [];
        while(students.length > 0) {
            let theTeams = studentPairs();
            pairedUp.push(theTeams);
        }  
        for(let i = 0; i < pairedUp.length; i++) {
            let li = document.createElement('li');
            li.textContent = `${pairedUp[i][0]} & ${pairedUp[i][1]}`;
            studentNames.append(li);
        }
    }
}