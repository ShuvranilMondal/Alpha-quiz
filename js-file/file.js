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