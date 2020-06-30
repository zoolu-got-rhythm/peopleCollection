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

}

let peopleModel = new PeopleModel();
console.log(peopleModel.averageAge);
console.log(peopleModel.oldestPerson);
console.log(peopleModel.youngestPerson)
