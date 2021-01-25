import dp from '../assets/dp/vikk.jpg';
import cv from '../assets/cv/Resume-Vikas-Katal.pdf';

import angularjs from '../assets/icons/angularjs.png';
// import css from '../assets/icons/css.svg';
import html from '../assets/icons/html.svg';
import js from '../assets/icons/js.png';
// import laravel from '../assets/icons/laravel.png';
// import node from '../assets/icons/node.svg';
import photoshop from '../assets/icons/photoshop.png';
import php from '../assets/icons/php.svg';
import react from '../assets/icons/react.png';
import sass from '../assets/icons/sass.png';


import naruto from '../assets/imgs/naruto-uzumaki.jpg';
import sakura from '../assets/imgs/sakura-haruno.jpg';
import sasuke from '../assets/imgs/sasuke-uchiha.jpg';

export const User = {
    name: "Vikas Katal",
    tag_line: "Front-end Developer / Web developer",
    description : [
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,",
        "totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae",
        "vitae dicta sunt explicabo. Nemo enim ipsam voluptatem."
    ],
    email :"katal.viku@gmail.com",
    phone :"7837611446",
    dp: dp,
    cv : cv,
    social_url : [
        {
            name :"facebook",
            url : "www.facebook.com/Katalzz",
        },
        {
            name :"linkdin",
            url : "www.linkedin.com/in/katalzz/",
        },
        {
            name :"github",
            url : "www.github.com/vikaskatal"
        },
    ],

    "experience" : [
        {
            "c_name" : "Magic EdTech",
            "short_c_name" : "Dockabl",
            "website" : "www.dockabl.com",
            "post" : "Senior Associate",
            "start_date" : "2020-04-27",
            "end_date": null,
            "more" : [
                `Magic EdTech having education and technology as the backbone provides mobility and digital
                assessment solutions. Publishers and learning companies also rely on Magic EdTech for support on
                digital content and digital learning technology.`
            ]
        },
        {
            "c_name" : "Dockabl",
            "short_c_name" : "Dockabl",
            "website" : "www.dockabl.com",
            "post" : "Software Engineer",
            "start_date" : "2017-08-10",
            "end_date": "2020-03-30",
            "more" : [
                `Dockabl a talent management tool so nimble, it's almost invisible. Dockabl offers modules like
                Objectives & Key Results, Reviews, Recognition, Feedback, etc`
            ]
        },
        {
            "c_name" : "iN Technologies Pvt. Ltd.",
            "short_c_name" : "iN Technologies",
            "website" : "www.technologiesin.com",
            "post" : "Ui Developer",
            "start_date" : "2017-04-01",
            "end_date": "2020-08-01",
            "more" : [
                "Everything-iN Technologies – Software Development Company"
            ]
        }
    ],

    "skills" : [
        {
            "label" :"React",
            "image": react,
            "rate" : "85"
        },
        {
            "label" :"Javascript",
            "image": js,
            "rate" : "85"
        },
        
        {
            "label" :"Css/scss",
            "image": sass,
            "rate" : "90"
        },
        {
            "label" :"Html",
            "image": html,
            "rate" : "95"
        },
        {
            "label" :"Git",
            "image": null,
            "rate" : "70"
        },
        {
            "label" :"Photoshop",
            "image": photoshop,
            "rate" : "55"
        },
        {
            "label" :"AngularJs",
            "image": angularjs,
            "rate" : "60",
        },
        {
            "label" :"JQuery",
            "image": null,
            "rate" : "70",
        },
        {
            "label" :"Bootstrap",
            "image": null,
            "rate" : "80"
        },
        {
            "label" :"Tailwind Css",
            "image": null,
            "rate" : "70"
        },
        {
            "label" :"Php",
            "image": php,
            "rate" : "50"
        },
    ],

    "eductaion" : [
        {
            "c_name" : "Rayat - Bahra Institute of Engineering & Nano-Technology",
            "short_c_name" : "Rbient Hoshiarpur",
            "website" : "www.rbienth.rayatbahra.com",
            "course" : "B.Tech(I.T.)",
            "start_month" : "8",
            "start_year" : "2011",
            "present" : true,
            "end_month" : "7",
            "end_year" : "2015",
            "more" : [
                "Major : Information technology"
            ]
        }
    ]
}

export const Themes = [
    {
        keyword: 'default',
        label : "Default",
        img_url : sasuke
    },
    {
        keyword: 'naruto',
        label : "Naruto Uzumaki",
        img_url : naruto
    },
    {
        keyword: 'sakura',
        label : "Sakura Haruno",
        img_url : sakura
    },
    {
        keyword: 'sasuke',
        label : "Sasuke Uchiha",
        img_url : sasuke
  }
]
