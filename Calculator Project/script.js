function appendToDisplay(value) 
{
    const display = document.getElementById('input');
    display.value += value;
}

function clearDisplay() 
{
    document.getElementById('input').value ="";
}

function calculate() 
{
    const display = document.getElementById('input');
    if (display.value=="") {
        display.value = "";
        return;
    }
    try 
    {
        display.value = eval(display.value);
    } catch (error) 
    {
        display.value = 'Please enter only numbers';
    }
}