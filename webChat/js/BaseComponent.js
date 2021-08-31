export default class BaseComponent{
    state;
    props;
    constructor(props){
        this.props = props;
    }

    render(){

    }

    /**
     * 
     * @returns {HTMLElement}
     */

    setState(newState){
        this.state = newState;
        this.render();
    }
}