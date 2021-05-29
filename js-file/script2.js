let ques = [
    {
        question: 'Q1: What is the full form of HTML?',
        a: 'Hello To My Land',
        b: 'Hay text markup language',
        c: 'Hypertext markup language',
        d: 'hype text markup language',
        ans: 'ans3'
    },
    {
        question: 'Q2: What is the full form of CSS?',
        a: 'cascading style sheets',
        b: 'cascading select sheets',
        c: 'cad style sheets',
        d: 'cascadind style shield',
        ans: 'ans1'
    },
    {
        question: 'Q3: What is the full form of HTTP?',
        a: 'hyper text transfer protocol',
        b: 'Hello text transform protocol',
        c: 'hyper text transfer product',
        d: 'hype text true protocol',
        ans: 'ans1'
    },
    {
        question: 'Q4: What is the full form of JS?',
        a: 'java style',
        b: 'jason programming script',
        c: 'java script',
        d: 'java section',
        ans: 'ans3'
    },
    {
        question: 'Q5: What is the full form of DOM?',
        a: 'doucement object model',
        b: 'doucement object material ',
        c: 'door object model',
        d: 'door object maintain',
        ans: 'ans1'
    }
]

let q = document.getElementById('question');
let opction1 = document.getElementById('opction1');
let opction2 = document.getElementById('opction2');
let opction3 = document.getElementById('opction3');
let opction4 = document.getElementById('opction4');
let answar = document.querySelectorAll('.answer');
let btn2 = document.getElementById('sub-q');

let count = 0;
let score = 0;

let loadQ=()=>{
    q.innerHTML = ques[count].question;
    opction1.innerHTML = ques[count].a;
    opction2.innerHTML = ques[count].b;
    opction3.innerHTML = ques[count].c;
    opction4.innerHTML = ques[count].d;
}
loadQ();

let getAns =()=>{
    let correctAns;
    answar.forEach((element)=>{
        if(element.checked){
            correctAns = element.id;
        }
    });

    return correctAns;
};

btn2.addEventListener('click',()=>{
    let check = getAns();
    if(check===ques[count].ans){
        score++
    }
    count++
    if(count < ques.length){
        loadQ();
    }else{
        userReport();
        clearTimeout(timeVar);
    }

});

let back = document.getElementById('back');
back.addEventListener('click',()=>{
    location.reload()
});


