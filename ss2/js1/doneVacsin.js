import Person from "./Person.js";
export default class doneVacsin extends Person{
    render(){
        let links = [];
        for(let link = 0; link < this.state.links.length; link++){
            console.log(link.name);
        }
    }
}