const questions=[
    {
        question:'Abc',
        answers:[
            {text:"1",correct:true},
            {text:"2",correct:false},
            {text:"3",correct:false},
            {text:"4",correct:false},
        ]
    },
    {
        question:'Pqr',
        answers:[
            {text:"1",correct:false},
            {text:"2",correct:true},
            {text:"3",correct:false},
            {text:"4",correct:false},
        ]
    },
    {
        question:'Xyz',
        answers:[
            {text:"1",correct:false},
            {text:"2",correct:false},
            {text:"3",correct:true},
            {text:"4",correct:false},
        ]
    }
];

const questionElement=document.getElementById("question");
const ansbutton=document.getElementById("answer-buttons");