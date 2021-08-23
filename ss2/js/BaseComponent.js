export default class BaseConponent{
    state; // lưu dữ liệu của component(tồn tại trong component) có thê thay đổi được giá trị
    props; // dữ liệu truyền từ bên ngoiaf vào conponent (Có thể đọc không thay đổi giá trị) 
    constructor(props){
        this.props = props;
    }

    // dùng để hiển thị nội dung conponent lên màn hình
    // return 1 giá trị có kiểu dữ lieuej là HTMLElement
    // Doc Block @returns{HTMLElement}

    render(){

    }

    /**
     * thiết lập lại state của component và render lại component(khi thay đổi)
     */
    setState(newState){
        this.state = newState;
        this.render();
    }
}

