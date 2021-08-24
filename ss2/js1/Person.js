import Base from "./Base.js";
export default class Person extends Base{
    constructor(props){
        super(props);
        this.state = 
        {
            links : [
                {name: "Nguyễn Hải Dũng", vacsin: 1, age: 21},
                {name: "Dũng Sky", vacsin: 2, age: 14},
                {name: "Thanh Tùng", vacsin: 0, age: 56},
                {name: "Giang Năm", vacsin: 1, age: 12},
                {name: "Sơn Miến", vacsin: 0, age: 30},
                {name: "Mạp Sơn", vacsin: 2, age: 4},
                {name: "MTP", vacsin: 1, age: 18},
                {name: "Trấn Thành", vacsin: 1, age: 42},
                {name: "Ngọc Bích", vacsin: 0, age: 1},
                {name: "Zang-Nan", vacsin: 2, age: 5}
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

            let $vacsin = document.createElement('div');
            $vacsin.classList.add('vacsin');
            $vacsin.innerHTML = `Số mũi vacsin: ${link.vacsin}`;
            $container.append($vacsin);

            let $br = document.createElement('br');
            $container.append($br);

            

        }
        
        return $container;
    }
    
}