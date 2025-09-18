const phoneInput = document.getElementById('phone-input');
const eyes = document.querySelectorAll('.eye'); 
const maxMove = 6; 
const maxLength = 11; 



function updateEyePosition() {
    const inputLength = phoneInput.value.length;
    const progress = Math.min(inputLength / maxLength, 1);
    const newX = -maxMove + (progress * maxMove * 2);
    eyes.forEach(eye => {
        eye.style.transform = `translateX(${newX}px)`;
    });
}

function unFocus(){
    eyes.forEach(eye => {
        eye.style.transform = 'translateY(-9px)'
    })
}


let timeout; 
phoneInput.addEventListener('input', updateEyePosition);
phoneInput.addEventListener('focus', updateEyePosition);
phoneInput.addEventListener('focusout', (e) => {
    timeout=setTimeout(() => {
        if(!phoneInput.contains(document.activeElement)){
            unFocus(); 
        }
    })
})
// updateEyePosition();
unFocus();

