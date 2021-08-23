import BaseConponent from "./BaseComponent.js"
export default class Navbar extends BaseConponent{
    constructor(props){
        super(props);
        this.state = {
            links: [
                {name: 'Home', href: './index.html'},
                {name: 'About', href: './about.html'},
                {name: 'Contact', href: './contact.html'},
                {name: 'Forum', href: './forum.html'},
                {name: 'Help', href: './help.html'},
                {name: 'Sign In', href: './sign-in.html'},
                {name: 'Sign Up', href: './sign-out.html'}
            ]
        }
    }

    render() {
        let $container = document.createElement('header');
        $container.classList.add('navbar');
        
        let $brand = document.createElement('a');
        $brand.href = "#";
        $brand.classList.add('navbar-brand');
        $brand.innerHTML = 'App';

        let $nav = document.createElement('div');
        $nav.classList.add('navbar-nav');

        //$ => lưu 1 DOM hoặc lưu nhiều DOm trong 1 mảng
        let $links = this.state.links.map((link)=>{
            let $a = document.createElement('a');
            $a.classList.add('nav-link');
            $a.innerHTML = link.name;
            $a.href = link.href;
            return $a;
        });

        $nav.append(...$links);

        // let $links = [];
        // for(let link of this.state.links){
        //     let $a = document.createElement('a');
        //     $a.classList.add('nav-link');
        //     $a.innerHTML = link.name;
        //     $a.href = link.href;
        //     $nav.append($a);
        // }


        // let $home = document.createElement('a');
        // $home.href = './index.html';
        // $home.classList.add('nav-link');
        // $home.innerHTML = 'Home';

        // let $about = document.createElement('a');
        // $about.href = './home.html';
        // $about.classList.add('nav-link');
        // $about.innerHTML = "About";

        // let $contact = document.createElement('a');
        // $contact.href = './home.html';
        // $contact.classList.add('nav-link');
        // $contact.innerHTML = "Contact";

        // $nav.append($home, $about, $contact);
        $container.append($brand, $nav);
        return $container;
    }
}