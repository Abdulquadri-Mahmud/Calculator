const calculator_cont = document.querySelector('.cal_cont');

const themes = document.querySelector('.themes');

const theme_text = document.querySelector('.theme_text');

const display = document.querySelector('.display');

const clr = document.querySelector('#clr');
const dvd = document.querySelector('#dvd');
const mult = document.querySelector('#mult');
const sub = document.querySelector('#sub');
const opnb = document.querySelector('#opnb');
const clsb = document.querySelector('#clsb');
const add = document.querySelector('#add');
const dot = document.querySelector('#dot');
const del = document.querySelector('#del');
const sev = document.querySelector('#sev');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const three = document.querySelector('#three');
const two = document.querySelector('#two');
const one = document.querySelector('#one');
const zero = document.querySelector('#zero');
const equal = document.querySelector('#equal');



//converting the theme buttons into an array 

const theme_buttons = Array.from(document.querySelectorAll('.theme'));

//theme buttons section
//mapping through all the theme button after converting them into an array
theme_buttons.map(theme_button => {
  theme_button.addEventListener('click', (e) =>{
    const target_current_button = e.target.classList;
    if(target_current_button.contains('theme_1')){
      calculator_cont.style.border = '5px solid rgba(20,190,33,1)';
      themes.style.border = '5px solid rgba(20,190,33,1)';
      theme_text.style.color = 'rgba(20,190,33,1)';
      display.style.border = '5px solid rgba(20,190,33,1)';
      display.style.color = 'rgba(20,190,33,1)';
      clr.style.border = '5px solid rgba(20,190,33,1)';
      dvd.style.border = '5px solid rgba(20,190,33,1)';
      mult.style.border = '5px solid rgba(20,190,33,1)';
      sub.style.border = '5px solid rgba(20,190,33,1)';
      opnb.style.border = '5px solid rgba(20,190,33,1)';
      clsb.style.border = '5px solid rgba(20,190,33,1)';
      add.style.border = '5px solid rgba(20,190,33,1)';
      dot.style.border = '5px solid rgba(20,190,33,1)';
      del.style.border = '5px solid rgba(20,190,33,1)';
      sev.style.border = '5px solid rgba(20,190,33,1)';
      eight.style.border = '5px solid rgba(20,190,33,1)';
      nine.style.border = '5px solid rgba(20,190,33,1)';
      four.style.border = '5px solid rgba(20,190,33,1)';
      five.style.border = '5px solid rgba(20,190,33,1)';
      six.style.border = '5px solid rgba(20,190,33,1)';
      three.style.border = '5px solid rgba(20,190,33,1)';
      two.style.border = '5px solid rgba(20,190,33,1)';
      one.style.border = '5px solid rgba(20,190,33,1)';
      zero.style.border = '5px solid rgba(20,190,33,1)';
      equal.style.border = '5px solid rgba(20,190,33,1)';
      
      // this is to also change the color when the theme changed to green
     
      clr.style.color = 'rgba(20,190,33,1)';
      dvd.style.color = 'rgba(20,190,33,1)';
      mult.style.color = 'rgba(20,190,33,1)';
      sub.style.color = 'rgba(20,190,33,1)';
      opnb.style.color = 'rgba(20,190,33,1)';
      clsb.style.color= 'rgba(20,190,33,1)';
      add.style.color = 'rgba(20,190,33,1)';
      dot.style.color = 'rgba(20,190,33,1)';
      del.style.color = 'rgba(20,190,33,1)';
      sev.style.color = 'rgba(20,190,33,1)';
      eight.style.color= 'rgba(20,190,33,1)';
      nine.style.color = 'rgba(20,190,33,1)';
      four.style.color = 'rgba(20,190,33,1)';
      five.style.color = 'rgba(20,190,33,1)';
      six.style.color = 'rgba(20,190,33,1)';
      three.style.color = 'rgba(20,190,33,1)';
      two.style.color = 'rgba(20,190,33,1)';
      one.style.color = 'rgba(20,190,33,1)';
      zero.style.color = 'rgba(20,190,33,1)';
      equal.style.color = 'rgba(20,190,33,1)';
    }
    else if(target_current_button.contains('theme_2')){
      calculator_cont.style.border = '5px solid #fff';
      themes.style.border = '5px solid #fff';
      theme_text.style.color = '#fff';
      display.style.border = '5px solid #fff';
      display.style.color = '#fff';
      clr.style.border = '5px solid #fff';
      dvd.style.border = '5px solid #fff';
      mult.style.border = '5px solid #fff';
      sub.style.border = '5px solid #fff';
      opnb.style.border = '5px solid #fff';
      clsb.style.border = '5px solid #fff';
      add.style.border = '5px solid #fff';
      dot.style.border = '5px solid #fff';
      del.style.border = '5px solid #fff';
      sev.style.border = '5px solid #fff';
      eight.style.border = '5px solid #fff';
      nine.style.border = '5px solid #fff';
      four.style.border = '5px solid #fff';
      five.style.border = '5px solid #fff';
      six.style.border = '5px solid #fff';
      three.style.border = '5px solid #fff';
      two.style.border = '5px solid #fff';
      one.style.border = '5px solid #fff';
      zero.style.border = '5px solid #fff';
      equal.style.border = '5px solid #fff';
      
      clr.style.color = '#fff';
      dvd.style.color = '#fff';
      mult.style.color = '#fff';
      sub.style.color = '#fff';
      opnb.style.color = '#fff';
      clsb.style.color = '#fff';
      add.style.color = '#fff';
      dot.style.color = '#fff';
      del.style.color = '#fff';
      sev.style.color = '#fff';
      eight.style.color = '#fff';
      nine.style.color = '#fff';
      four.style.color = '#fff';
      five.style.color = '#fff';
      six.style.color = '#fff';
      three.style.color = '#fff';
      two.style.color = '#fff';
      one.style.color = '#fff';
      zero.style.color = '#fff';
      equal.style.color = '#fff';
     
    }
    else if (target_current_button.contains('theme_3')) {
      calculator_cont.style.border = '5px solid gold';
      themes.style.border = '5px solid gold';
      theme_text.style.color = 'gold';
      display.style.border = '5px solid gold';
      display.style.color = 'gold';
      clr.style.border = '5px solid gold';
      dvd.style.border = '5px solid gold';
      mult.style.border = '5px solid gold';
      sub.style.border = '5px solid gold';
      opnb.style.border = '5px solid gold';
      clsb.style.border = '5px solid gold';
      add.style.border = '5px solid gold';
      dot.style.border = '5px solid gold';
      del.style.border = '5px solid gold';
      sev.style.border = '5px solid gold';
      eight.style.border = '5px solid gold';
      nine.style.border = '5px solid gold';
      four.style.border = '5px solid gold';
      five.style.border = '5px solid gold';
      six.style.border = '5px solid gold';
      three.style.border = '5px solid gold';
      two.style.border = '5px solid gold';
      one.style.border = '5px solid gold';
      zero.style.border = '5px solid gold';
      equal.style.border = '5px solid gold';
      
      clr.style.color = 'gold';
      dvd.style.color = 'gold';
      mult.style.color = 'gold';
      sub.style.color = 'gold';
      opnb.style.color = 'gold';
      clsb.style.color = 'gold';
      add.style.color = 'gold';
      dot.style.color = 'gold';
      del.style.color = 'gold';
      sev.style.color = 'gold';
      eight.style.color = 'gold';
      nine.style.color = 'gold';
      four.style.color = 'gold';
      five.style.color = 'gold';
      six.style.color = 'gold';
      three.style.color = 'gold';
      two.style.color = 'gold';
      one.style.color = 'gold';
      zero.style.color = 'gold';
      equal.style.color = 'gold';
     
    }
  });
});

const btns = Array.from(document.querySelectorAll('.button'));

// buttons sections
btns.map(btn => {
  btn.addEventListener('click', (e) => {
    switch(e.target.innerText){
      
      case 'CLR':
        display.innerText = '';
        break;
        
      case '←':
        display.innerText = display.innerText.slice(0, -1);
        break;
        
      case '=':
        try{
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'Error!'
        }
        break;
        
      default:
        display.innerText += e.target.innerText;
    }
  });
});