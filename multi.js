const range = document.querySelector('.range')
const value = document.querySelector('.value')
const submit = document.querySelector('.submit')
const table = document.querySelector('.table')
const clear = document.querySelector('.clear')
const results = document.querySelector('.results')
if(results.innerHTML = ''){
    
}
submit.addEventListener('click', (e) => {
e.preventDefault()
 let multi = value.value;
for (let i = 1; i <= range.value; i++) {
    console.log(`${multi} x ${i} = ${multi * i}`);
    results.innerHTML+= `
<div class="answer"><div class="block1">${multi}</div><p class="times">x</p><div class="block2">${i}</div><p class="equal">=</p><div class="block3">${multi * i}</div></div>
`
}
console.log('clicking');
table.classList.remove('hide')

})
clear.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('clicking');
  results.innerHTML = '';
  value.value = '';
  range.value = '';
})