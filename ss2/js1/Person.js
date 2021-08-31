import Base from "./Base.js";
export default class Person extends Base{
    constructor(props){
        super(props);
        this.state = 
        {
            links : [
                {name: "Nguyễn Hải Dũng", gender: "Male", age: 21},
                {name: "Dũng Sky", gender: "Female", age: 14},
                {name: "Thanh Tùng", gender: "Female", age: 56},
                {name: "Giang Năm", gender: "Male", age: 12},
                {name: "Sơn Miến", gender: "Male", age: 30},
                {name: "Mạp Sơn", gender: "Female", age: 4},
                {name: "MTP", gender: "Male", age: 18},
                {name: "Trấn Thành", gender: "Female", age: 42},
                {name: "Ngọc Bích", gender: "Female", age: 1},
                {name: "Zang-Nan", gender: "Male", age: 5}
            ]
        }
    }
    render(){
        let $container = document.createElement('div');

        let links = [];
        for(let link of this.state.links){
            let $name = document.createElement('div');
            $name.classList.add('information');
            $name.innerHTML = `Tên: ${link.name}`;
            $container.append($name);
            
            let $age = document.createElement('div');
            $age.classList.add('age');
            $age.innerHTML = `Tuổi: ${link.age}`;
            $container.append($age);

            let $gender = document.createElement('div');
            $gender.classList.add('vacsin');
            $gender.innerHTML = `Giới Tính: ${link.gender}`;
            $container.append($gender);

            let $br = document.createElement('br');
            $container.append($br);

            

        }
        
        return $container;
    }
    
}