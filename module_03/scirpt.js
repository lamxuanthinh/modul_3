const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");

nextBtn.addEventListener("click", ()=> {
        allInput.forEach(input => {
            if(input.value == ""){
                form.classList.add('secActive');
            }else{
                form.classList.remove('secActive');
                }
            })
        })
        
backBtn.addEventListener("click", () => form.classList.remove('secActive'));

const bntDone = document.querySelector('.btnColor')

bntDone.addEventListener("click", () =>{
    setTimeout(() => {
        location.replace('/vaccinationRegister/indexQR.html');
    },0);
})

// let data = document.querySelectorAll('.input-field > input')
// let arr = []
// for (const key in data) {
//     if (Object.hasOwnProperty.call(data, key)) {
//         data[key].onchange = (e) => {
//             arr.push(e.target.value)
//         }
//     }
// }
// let string = arr.join('');






