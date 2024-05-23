let btn = document.getElementById('Start')
btn.style.background='green'
document.getElementById('Stop').style.background='brown'
document.getElementById('Reset').style.background='red'
let mCount =0;
let sCount = 0;
let id;
btn.addEventListener('click',()=>{
    if(id==undefined){
        console.log(id)
        id =setInterval(()=>{
            sCount++;
            if(sCount==59){
                mCount++;
                sCount=0
            }
            document.querySelector('#sec').textContent=sCount;
            document.querySelector('#min').textContent=mCount;
        },1000)
    }
    })
    
document.getElementById('Stop').addEventListener('click',()=>{
    clearInterval(id)
});
document.getElementById('Reset').addEventListener('click',()=>{
    document.querySelector('#sec').textContent='00';
    document.querySelector('#min').textContent='00';
    clearInterval(id)
   });


