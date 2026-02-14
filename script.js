// Trái tim nền
const heartBg = document.getElementById('heartBg');
for (let i = 0; i < 50; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = (5 + Math.random() * 5) + 's';
    heart.style.width = heart.style.height = (10 + Math.random() * 20) + 'px';
    heartBg.appendChild(heart);
}

// Nút và container
const startBtn = document.getElementById('startBtn');
const options = document.getElementById('options');
const messageContainer = document.getElementById('messageContainer');
const messageDiv = document.getElementById('message');
const backBtn = document.getElementById('backBtn');
const replyInput = document.getElementById('replyInput');
const replyDisplay = document.getElementById('replyDisplay');
const sendBtn = document.getElementById('sendBtn');

const flowerBtn = document.getElementById('flowerBtn');
const houseBtn = document.getElementById('houseBtn');
const carBtn = document.getElementById('carBtn');
const girlBtn = document.getElementById('girlBtn');

const envelope = document.getElementById('envelope');
const bgMusic = document.getElementById('bgMusic');
const musicToggle = document.getElementById('musicToggle');

// Bì thư mở
startBtn.onclick = () => {
    envelope.classList.add('open');
    setTimeout(() => {
        startBtn.style.display = 'none';
        options.style.display = 'block';
        document.getElementById('replyContainer').style.display = 'block';
    }, 1000);
}

// Fade-in từng chữ
function typeMessage(text, callback) {
    messageDiv.innerText = '';
    let i = 0;
    function typeChar() {
        if (i < text.length) {
            messageDiv.innerText += text[i];
            i++;
            setTimeout(typeChar, 15);
        } else if (callback) {
            callback();
        }
    }
    typeChar();
}

// Tin nhắn flower chuẩn tiếng Việt
const flowerMsg = `Valentine day thì nhớ phải yêu em nhiều hơn năm ngoái nhaaa, à hông! hôm qua chứ! 
Đừng có mờ ớ hở...... cãi vả la mắng em, em bùn lắm í, anh có cảm thấy buồn khi thấy tôi bùn hong hả, 
sao làm tui bùn quài z, chắc là hong r nên mới làm quài !!!!!
Làm giận dỗi suốt nhìu phút nhìu giây nữa. Thoaiii, tính tui nhõng nhẻo, tính em khó chịu nhìu thứ, haizzzz, ai mà iu cho được, 
sao anh vẫn yêu em vậy hử thằng chồng thúi kia !!!!!

Chỉ mong tình iuuu của tụi mình là vô hạnnnn,,, vì e thật sự iu anh lắm đấy. 
Mong qua cái valentine này chúng mình sẽ thêm hiểu nhau hơnnnnn, chịu mở lòng với nhau hơnnn,
mỗi ngườ bỏ mụt chút cái tôi vì đối phương hơn, có nhiều kỉ niệm hơnnn, đi du lịch cùng nhau nưaaa nè, về VN cùng nhau nè, dắt anh về Đà Nẵng của em đi chơi và gặp ba mẹ em nữaaaaaa.

Em mong chờ lắm đii chồng thúi mập địt......
Thui núa chung là tình iu của tui, iu nhất trên đời đó, làm gì em vẫn yêu anhhh, anh có như nào em cũng yêu anhh`;

// Emoji buttons
flowerBtn.onclick = () => { options.style.display = 'none'; messageContainer.style.display = 'block'; typeMessage(flowerMsg); }
houseBtn.onclick = () => typeMessage("Mơ đi chồng iu của em 🏠💕");
carBtn.onclick = () => typeMessage("Mơ đi chồng iu của em 🚗💕");
girlBtn.onclick = () => typeMessage("Món quà Valentine của anh là một cô gái vô cùng xinh đẹp, dễ thương, tinh tế, thông minh 👩✨");

// Back button
backBtn.onclick = () => {
    messageContainer.style.display = 'none';
    replyDisplay.innerText = '';
    replyInput.value = '';
    options.style.display = 'block';
}

// Reply send
sendBtn.addEventListener('click', () => {
    const msg = replyInput.value.trim();
    if (msg !== "") {
        replyDisplay.innerText = 'Koi says: ' + msg;
        replyInput.value = '';
        for (let i = 0; i < 15; i++) {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.style.left = Math.random() * 100 + 'vw';
            heart.style.animationDuration = (2 + Math.random() * 3) + 's';
            heart.style.width = heart.style.height = (10 + Math.random() * 15) + 'px';
            heartBg.appendChild(heart);
            setTimeout(() => heart.remove(), 3000);
        }
    }
});

// Music toggle
musicToggle.addEventListener('click', () => {
    if (bgMusic.paused) { bgMusic.play(); musicToggle.innerText = '🔊 Nhạc On'; }
    else { bgMusic.pause(); musicToggle.innerText = '🔇 Nhạc Off'; }
});