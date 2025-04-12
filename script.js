
const form=document.querySelector('form')

form.addEventListener('submit',function(e){
    e.preventDefault()
    
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const result=document.querySelector('#result')

    if (height===''||height<0||isNaN(height)) {
        result.innerHTML=`The height is ${height}`
    }
    else if (weight===''||weight<0||isNaN(weight)) {
        result.innerHTML=`The weight is ${weight}`
    }
    else {
        //let bmi = (weight / ((height / 100) ** 2)).toFixed(4);
         result.innerHTML=`<span>${bmi}</span>`
    }
})