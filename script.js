let text= "Eres único. Rolex.";
let i=0;
let speed= 150;
function type(){
    if(i<text.length){
        document.querySelector('#par').textContent+=text.charAt(i);
        i++;
        setTimeout(type, speed);

    }
}
type();

const items= document.querySelectorAll('.item');

items.forEach(item=>{
    item.addEventListener('mouseover', ()=>{
        removeFocus();
        item.classList.add('selected');
    })

    removeFocus =()=>{
        items.forEach(item=>{
            item.classList.remove('selected');
        })
    }
})