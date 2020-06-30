// model/data code
class PeopleModel {
    constructor(){
        this.people = [
            {name: "alice", age: 20},
            {name: "bob", age: 25},
            {name: "carol", age: 30},
            {name: "dave", age: 35}
        ];
    }

    get averageAge(){
        console.log("running");
        return this.people.reduce(
            (accumAge, nextPersonObj) => {
                console.log(nextPersonObj.age);
                return accumAge + nextPersonObj.age
            }, this.people[0].age
        ) / this.people.length;
    }

    get oldestPerson(){
        return this.people.reduce((accum, next) => {
            return accum.age > next.age ? accum : next;
        })
    }

    get youngestPerson(){
        return this.people.reduce((accum, next) => {
            return accum.age < next.age ? accum : next;
        })
    }

    get getPeople(){
        return this.people;
    }

    addPerson(name, age){
        // implement
    }
}

let peopleModel = new PeopleModel();
// test model calculations
console.log(peopleModel.averageAge);
console.log(peopleModel.oldestPerson);
console.log(peopleModel.youngestPerson);

// view code

var chatContainerRef = document.getElementById("people-container");

function render(){
    peopleModel.getPeople.forEach((person) => {
        addPersonToDOM(person.name, person.age);
    });
}

function addPersonToDOM(name, age){
    var personBoxNode = document.createElement("div");
    personBoxNode.id = "people-box";

    var nameContainer = document.createElement("span");
    var nameCommentNode = document.createTextNode("name: " + name);
    nameContainer.appendChild(nameCommentNode);
    nameContainer.id = "person-name";

    var ageContainer = document.createElement("span");
    var ageCommentNode = document.createTextNode("age: " + age);
    ageContainer.appendChild(ageCommentNode);
    ageContainer.id = "person-age";

    var clearDiv = document.createElement("div");
    clearDiv.id = "clear";

    personBoxNode.appendChild(nameContainer);
    personBoxNode.appendChild(ageContainer);
    personBoxNode.appendChild(clearDiv);



    chatContainerRef.appendChild(personBoxNode);
}

render();
