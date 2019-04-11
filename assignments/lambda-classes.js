// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        // return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}

let Samuel = new Person({ name: 'Samuel', age: 27, location: 'CT', gender: 'M' });
console.log(Samuel);

// class Instructors extends Person {
//     constructor(props) {
//         super(props);
//         this.specialty = props.specialty;
//         this.favLanguage = props.favLanguage;
//         this.catchPhrase - props.catchPhrase;
//     }

//     demo(subject) {
//         console.log(`Today we are learning about ${subject}.`);
//     }
//     grade(student, subject) {
//         console.log(`${student.name} receives a perfect score on {subject}.`)
//     }
// }

// class Students extends Person {
//     constructor(props) {
//         super(props);
//         this.previousBackground = props.previousBackground;
//         this.className = props.className;
//         this.favSubjects = props.favLanguage;
//     }

//     listsSubjects(favSubjects) {
//         console.log(favSubjects);
//     }

//     PRAssignment(subject) {
//         console.log(`${student.name} has submitted a PR for ${subject}.`)
//     }

//     sprintChallenge(subject) {
//         console.log(`${student.name} has begun sprint challenge on ${subject}.`)
//     }
// }

// class PM extends Instructors {
//     constructor(props) {
//         super(props);
//         this.gradClassName = props.gradClassName;
//         this.favInstructor = props.favInstructor;
//     }

//     standUp(channel) {
//         console.log(`${PM.name} announces to ${channel}, @channel standy times!​​​​​`);
//     }

//     debugsCode(student, subject) {
//         console.log(`${PM.name} debugs ${student.name}'s code on ${subject}.`)
//     }
// }












