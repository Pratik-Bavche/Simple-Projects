const form=document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value)
    const weight=parseInt(document.querySelector('#weight').value)
    const results=document.querySelector('#results')
   
    if(height===''||height<0||isNaN(height)){
        results.innerHTML=`Enter valid height ${height}`
    }
    else if(weight===''||weight<0||isNaN(weight)){
        results.innerHTML=`Enter valid weight ${weight}`
    }
    else
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2)
        if(bmi<18.6)
        {
            results.innerHTML=`${bmi} You are under weight`
        }
        else if(bmi<=24.9&&bmi>18.5)
        {
             results.innerHTML=`${bmi} You are in normal range`
        }
        else{
            results.innerHTML=`${bmi} You are Overweight`
        }
    }
})
