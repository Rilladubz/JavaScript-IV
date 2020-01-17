// CODE here for your Lambda Classes

class Person {
    constructor(props) {
        this.name = props.name;
        this.age = props.age;
        this.location = props.location;
        this.gender = props.gender;
    }
    speak() {
        return (`Hello my name is ${this.name}, I am from ${this.location}.`);
    }
}



class Instructors extends Person {
    constructor(props) {
        super(props);
        this.specialty = props.specialty;
        this.favLanguage = props.favLanguage;
        this.catchPhrase - props.catchPhrase;
    }

    demo(subject) {
        console.log(`Today we are learning about ${subject}.`);
    }
    grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}.`)
    }
}

class Students extends Person {
    constructor(props) {
        super(props);
        this.previousBackground = props.previousBackground;
        this.className = props.className;
        this.favSubjects = props.favSubjects;
    }

    listsSubjects(favSubjects) {
        console.log(favSubjects)
    }

    PRAssignment(subject) {
        console.log(`${Students.name} has submitted a PR for ${subject}.`)
    }

    sprintChallenge(subject) {
        console.log(`${Students.name} has begun sprint challenge on ${subject}.`)
    }
}

class PM extends Instructors {
    constructor(props) {
        super(props);
        this.gradClassName = props.gradClassName;
        this.favInstructor = props.favInstructor;
    }

    standUp(channel) {
        console.log(`${PM.name} announces to ${channel}, @channel standy times!​​​​​`);
    }

    debugsCode(student, subject) {
        console.log(`${PM.name} debugs ${student.name}'s code on ${subject}.`)
    }
}


let Samuel = new Person({ name: 'Samuel', age: 27, location: 'CT', gender: 'M' });

let Sam = new Instructors({
    name: 'Samuel', age: 27, location: 'CT', gender: 'M',
    specialty: 'coughing', favLanguage: 'English', catchPhrase: 'oh yeah',
});

let Sammy = new Students({
    name: 'Samuel', age: 27, location: 'CT', gender: 'M',
    specialty: 'smiling', favLanguage: 'Spanish', catchPhrase: 'oh no',
    previousBackground: 'thug', className: 'web 2.9', favSubjects: 'math',
});

let Sami = new PM({
    name: 'Samuel', age: 27, location: 'CT', gender: 'M',
    specialty: 'coughing', favLanguage: 'English', catchPhrase:
        'oh yeah', gradClassName: 'beast19', favInstructor: 'josh'
});


console.log(Samuel);
console.log(Sam);
console.log(Sammy);
console.log(Sami);

console.log(Samuel.speak());
console.log(Sam.demo('Math'));
//followed by undefined
console.log(Sam.grade(Sammy, 'Math'));
//followed by undefined
// console.log(Sammy.listsSubjects());
//broken
console.log(Sammy.sprintChallenge('javascript'));
//followed by undefined
console.log(Sammy.PRAssignment('Geometry'));
//followed by undefined
console.log(Sammy.sprintChallenge('html'));
//followed by undefined
console.log(Sami.standUp('channelex'));
//followed by undefined
console.log(Sami.debugsCode(Sammy, 'react'));
//followed by undefined





