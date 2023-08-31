// const student = {
//     firstName: 'Jan',
//     lastName: 'Kowalski',
//     grades: {
//         math: [4, 6],
//         english: [3],
//     }

// }


function Student(firstNameVal, lastNameVal) {
    this.firstName = firstNameVal;
    this.lastName = lastNameVal;
    this.grades = {};
}

Student.prototype.addGrade = function(subject, grade){
    if(typeof this.grades[subject] === 'undefined'){
        this.grades[subject] = [];
    }

    this.grades[subject].push(grade);
}

Student.prototype.getAverageGrade = function(subject){
    if(typeof subject === 'undefined'){
        const grades = [];
        for(const key in this.grades) {
            const arr = this.grades[key];

            arr.forEach(function(item) {
                grades.push(item);
            });
        }
        return this.avg(grades);
    }

    if(typeof this.grades[subject] === 'undefined'){
        return 0;
    }
    
    return this.avg(this.grades[subject]);
}


Student.prototype.avg = function(arr){
    if(arr.length === 0){
        return 0;
    }
    const sum = arr.reduce(function(acc ,curr) {
        return acc + curr;
    }, 0);

    return sum / arr.length;
}


const student1 = new Student('Jan', 'Kowalski');
student1.addGrade('math', 5);
student1.addGrade('math', 3);
student1.addGrade('biology', 2);
student1.addGrade('biology', 3);
student1.addGrade('math', 4);
console.log(student1);

const avgMath = student1.getAverageGrade('math');
console.log(avgMath);

const avg = student1.getAverageGrade();
console.log(avg);