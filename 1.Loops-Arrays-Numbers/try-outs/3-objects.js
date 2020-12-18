"use strict"

const students = [
  {
    name : 'Leo',
    track: ['ios', 'design', 'java'],
    achievements: 3,
    points: 500
  },
  {
    name : 'Mara',
    track: ['js', 'security'],
    achievements: 1,
    points: 200
  },
  {
    name : 'Mike',
    track: ['python', 'security', 'react', 'nodejs'],
    achievements: 3,
    points: 700
  }
  
]
let name, track, achievements, points;

let html = '';
for (let i = 0; i < students.length; i++){
  name = students[i].name;
  track = students[i].track;
  achievements = students[i].achievements;
  points = students[i].points;
  
  html += '<p> Name : ' + name + '</p>';
  html += '<p> Track : ' + track + '</p>';
  html += '<p> Achievements : ' + achievements + '</p>';
  html += '<p> Points : ' + points + '</p>';
  html += '<hr>'
}

document.write(html);


/////


const userName;

const  printResult = html => {  
  const outputDiv = document.querySelector('#output');
  outputDiv.innerHTML = html;
}
const getStudentHtml = student => {
  const report = '<p> Name : '+student.name+'</p>';
  report += '<p> Track : '+student.track+'</p>';
  report += '<p> Achievements : '+student.achievements+'</p>';
  report += '<p> Points : '+student.points+'</p>';
  report += '<hr>'
  return report;
}

const searchStudent = nameTarget => {
  let final = '';
  let found = false;
  for (let i = 0; i < students.length; i++){
    name = students[i].name;
    if(name === nameTarget){
      final += getStudentHtml(students[i]);
      found = true;
    }   
  }
  if (found === false)
    final += '<p>Student not found</p>';
  
  printResult(final);
}

while (true){
	userName = prompt('Enter name to search or \'quit\' to exit: ');
	if(userName.toLowerCase() === 'quit')
		break;
	searchStudent(userName);
}







