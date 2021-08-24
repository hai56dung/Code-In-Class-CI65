class person {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

let person1 = new person('Dũng', 21, "Male");
let person2 = new person('Hải', 56, "Male");
let person3 = new person('Thanh', 21, "Female");
let person4 = new person('Dung', 21, "Female");
let person5 = new person('Nam', 21, "Male");
let person6 = new person('Đăng', 69, "Male");
let person7 = new person('Hà', 6, "Female");

class vacsin{
    constructor(nameVacsin, brand, national){
        this.nameVacsin = nameVacsin;
        this.brand = brand;
        this.national = national;

    }
}

let vacsin0 = new vacsin("");
let vacsin1 = new vacsin('Astrazeneka', 'Astrazeneka', 'Japan');
let vacsin2 = new vacsin('Pizel', 'Fizel', 'American');
let vacsin3 = new vacsin('Covac', 'Moasin', 'China');

// class repostVacsin{
//     constructor(namePerson, nameVacsin1, nameVacsin2, Day){
//         this.namePerson = namePerson;
//         this.nameVacsin1 = nameVacsin1;
//         this.nameVacsin2 = nameVacsin2;
//         this.Day = Day;
//     }


// }

let a = [
    {Tên: person1.name, Tuổi: person1.age, Vacsin1: vacsin1.nameVacsin, Vacxin2 :vacsin2.nameVacsin, NgàyTiêm: "25/7/2021"},
    {Tên: person2.name,Tuổi: person2.age, Vacsin1: vacsin0.nameVacsin, Vacxin2 :vacsin0.nameVacsin, NgàyTiêm: "24/8/2021"},
    {Tên: person3.name,Tuổi: person3.age, Vacsin1: vacsin2.nameVacsin, Vacxin2 :vacsin1.nameVacsin, NgàyTiêm: "2/9/2021"},
    {Tên: person4.name,Tuổi: person4.age, Vacsin1: vacsin1.nameVacsin, Vacxin2 :vacsin0.nameVacsin, NgàyTiêm: "21/7/2021"},
    {Tên: person5.name,Tuổi: person5.age, Vacsin1: vacsin2.nameVacsin, Vacxin2 :vacsin1.nameVacsin, NgàyTiêm: "32/7/2021"},
    {Tên: person6.name,Tuổi: person6.age, Vacsin1: vacsin1.nameVacsin, Vacxin2 :vacsin1.nameVacsin, NgàyTiêm: "21/7/2021"},
    {Tên: person7.name,Tuổi: person7.age, Vacsin1: vacsin2.nameVacsin, Vacxin2 :vacsin1.nameVacsin, NgàyTiêm: "2/7/2021"},
]

console.log(a);
// let repostVacsin1 = new repostVacsin(person1.name, vacsin1.nameVacsin, vacsin2.nameVacsin, "25/7/2021");
// let repostVacsin2 = new repostVacsin(person2.name, vacsin0.nameVacsin, vacsin0.nameVacsin, "29/7/2021");
// let repostVacsin3 = new repostVacsin(person3.name, vacsin1.nameVacsin, vacsin2.nameVacsin, "20/7/2021");
// let repostVacsin4 = new repostVacsin(person4.name, vacsin2.nameVacsin, vacsin2.nameVacsin, "28/9/2021");
// let repostVacsin5 = new repostVacsin(person5.name, vacsin2.nameVacsin, vacsin1.nameVacsin, "23/7/2021");
// let repostVacsin6 = new repostVacsin(person6.name, vacsin1.nameVacsin, vacsin0.nameVacsin, "12/9/2021");
// let repostVacsin7 = new repostVacsin(person7.name, vacsin1.nameVacsin, vacsin2.nameVacsin, "20/1/2021");

// for(i = 0; i<repostVacsin.length; i++){
//     console.log(i);
// }


// Xuất ra thông tin của người đã tiên ít nhất 1 mũi vacxin
for (i = 0; i < a.length; i++){
    if(a[i].Vacsin1 != ""){
        console.log(a[i].Tên);
    }
}

// Danh sách người già chưa được tiêm vắc xin
for (i = 0; i < a.length; i++){
    if(a[i].Vacsin1 == "" && a[i].age >= 65){
        console.log(`Cụ: ${a[i].Tên}/ Tuổi: ${a[i].Tuổi} chưa được tiêm vắc xin`);
    }
}

// Đếm số vắc xin đã được tiêm
let count1 = 0;
let count2 = 0;
for(i = 0; i < a.length; i++){
    if(a[i].Vacsin1 != ""){
        count1++;
    }
    if (a[i].Vacxin2 !== ""){
        count2++
    } 
}

console.log(count1+count2);

