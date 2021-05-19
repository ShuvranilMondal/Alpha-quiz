let subBtn = document.getElementById('sub-btn')
let box1 = document.getElementById('b1')
let box2 = document.getElementById('b2')
let box3 = document.getElementById('b3')
let timmer = document.getElementById('timmer')

let min = 1
let se = 60
let minute = 0
let second = 0


subBtn.addEventListener('click',()=>{
    box1.style.display = 'none'
    box2.style.display = 'grid'
    let myvar = setInterval(() => {
        se = se - 1
        if(min == 0 && se == 0){
            clearInterval(myvar)
            timmer.style.display = 'none'
            alert('Time UP!!')
            setTimeout(() => {
                box2.style.display = 'none'
                box3.style.display = 'grid'
                marks.innerHTML =`your score is = ${score}/${ques.length}`
                persent.innerHTML = `your percentage is = ${(score/ques.length)*100}%`
                if(score > 2){
                    pass_fail.innerHTML = `congratulations you are qualified !!`
                }
                else{
                    pass_fail.innerHTML = `sorry you are not qualified !!`
                    pass_fail.style.color = 'red'
                }
            }, 2000);
        }
        if(se == 0){
            se = 60
            min = min-1
        }
        if(min<10){
            minute = '0' + min.toString()
        }else{
            minute = min
        }
        if(se<10){
            second = '0' + se.toString()
        }else{
            second = se
        }

        timmer.innerHTML = `${minute}:${second}`
    }, 1000);

})

let back = document.getElementById('back')
back.addEventListener('click',()=>{
    location.reload()
})