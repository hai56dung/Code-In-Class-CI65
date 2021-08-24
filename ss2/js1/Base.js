export default class Base{
    state;
    props;
    constructor(props){
        this.props = props;
    }
    render(){

    }
    setState(newState){
        this.state = newState;
        this.render();
    }
}