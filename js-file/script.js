let b1 = document.getElementById('b1');
let b2 = document.getElementById('b2');
let b3 = document.getElementById('b3');
let b1Btn = document.getElementById('sub-btn');
let timer = document.getElementById('timmer');
let popup = document.getElementById("popup");
let black = document.getElementById("black");
let report = document.getElementById('report');
let reportbtn = document.getElementById("report");


let sec = 60;
let min = 1;
let second = 0;
let minute = 0;
let timeVar;

let popMsg=()=>{
    popup.classList.add('active');
    black.classList.add('active');
};

let removePopMsg=()=>{
    popup.classList.remove('active');
    black.classList.remove('active');
};


let watch=()=>{
     timeVar = setInterval(() => {
        sec = sec - 1;
        if(min == 0 && sec ==0){
            timer.style.display = 'none';
            clearTimeout(timeVar);
            popMsg();
        };
        if(sec == 0){
            min = min-1;
            sec = 60;
        }

        if(min < 10){
            minute = '0'+min.toString();
        }else{
            minute = min;
        };
        if(sec < 10){
            second = '0'+sec.toString();
        }else{
            second = sec;
        };
        timer.innerHTML = `${minute}:${second}`;
    }, 1000);
};

let userReport=()=>{
    let passFail = document.getElementById('pass-fail');
    let marks = document.getElementById('marks');
    let persent = document.getElementById('persent');
    marks.innerHTML =`your score is = ${score}/${ques.length}`
    persent.innerHTML = `your percentage is = ${(score/ques.length)*100}%`
    b2.style.display = 'none';
    b3.style.display = 'grid';
    if(score > 2){
        passFail.innerHTML = `congratulations you are qualified !!`
    }
    else{
        passFail.innerHTML = `sorry you are not qualified !!`
        passFail.style.color = 'red'
    }
}



b1Btn.addEventListener('click',()=>{
    b1.style.display = 'none';
    b2.style.display = 'grid';
    watch();
});

reportbtn.addEventListener('click',()=>{
    removePopMsg();
    userReport();
});


