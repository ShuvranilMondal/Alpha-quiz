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

let question = document.getElementById('question')
let opction1 = document.getElementById('opction1')
let opction2 = document.getElementById('opction2')
let opction3 = document.getElementById('opction3')
let opction4 = document.getElementById('opction4')
let submitQ = document.getElementById('sub-q')
let answer = document.querySelectorAll('.answer')


let Qcount = 0
let score = 0

let loadQuestion=()=>{
    let Qlist = ques[Qcount]
    question.innerHTML = Qlist.question

    opction1.innerHTML = Qlist.a
    opction2.innerHTML = Qlist.b
    opction3.innerHTML = Qlist.c
    opction4.innerHTML = Qlist.d
}

loadQuestion()

let getCheck =()=>{
    let answ
    answer.forEach((currentAns)=>{
        if(currentAns.checked){
            answ = currentAns.id
        }
        
    })

    return answ
}

let box_2 = document.getElementById('b2')
let box_3 = document.getElementById('b3')
let pass_fail = document.getElementById('pass-fail')
let marks = document.getElementById('marks')
let persent = document.getElementById('persent')

submitQ.addEventListener('click',()=>{
    let chech = getCheck()
    console.log(chech)
    if(chech === ques[Qcount].ans){
        score++
    }
    Qcount++
    if(Qcount < ques.length){
        loadQuestion()
    }else{
        box_2.style.display = 'none'
        box_3.style.display = 'grid'
        marks.innerHTML =`your score is = ${score}/${ques.length}`
        persent.innerHTML = `your percentage is = ${(score/ques.length)*100}%`
        if(score > 2){
            pass_fail.innerHTML = `congratulations you are qualified !!`
        }
        else{
            pass_fail.innerHTML = `sorry you are not qualified !!`
            pass_fail.style.color = 'red'
        }
    }
})