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

function unFocus() {
    eyes.forEach(eye => {
        eye.style.transform = 'translateY(-9px)';
    });
}

// گوش دادن به رویداد keyup برای تشخیص دقیق تایپ
phoneInput.addEventListener('keyup', updateEyePosition);

// استفاده از focus برای شروع حرکت چشم‌ها
phoneInput.addEventListener('focus', updateEyePosition);

// استفاده از blur به جای focusout برای رفتار پایدارتر
phoneInput.addEventListener('blur', () => {
    unFocus();
});

// برای اطمینان از اینکه چشم‌ها در ابتدا در حالت unFocus هستند
unFocus();