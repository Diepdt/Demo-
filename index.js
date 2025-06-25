document.addEventListener('DOMContentLoaded', function() {
    const btn1 = document.querySelector('.b1');
    const btn2 = document.querySelector('.b2');
    const image2 = document.querySelector('#image2'); // Lấy ảnh có sẵn từ HTML
    let clickCount = 0;
    
    // Tạo element để hiển thị text "Yes"
    const yesText = document.createElement('p');
    yesText.textContent = 'Chính xác là vậy rồi!!!';
    yesText.id = 'yes-text';
    yesText.style.display = 'none';
    document.body.appendChild(yesText);
    
    // Xử lý click button b2
    btn2.addEventListener('click', function() {
        clickCount++;
        
        // Xóa các class cũ
        btn2.className = 'btn b2';
        btn1.className = 'btn b1';
        
        if (clickCount === 1) {
            btn2.classList.add('small1');
            btn1.classList.add('big1');
        } else if (clickCount === 2) {
            btn2.classList.add('small2');
            btn1.classList.add('big2');
        } else if (clickCount === 3) {
            btn2.classList.add('small3');
            btn1.classList.add('big3');
        } else if (clickCount === 4) {
            btn2.classList.add('small4');
            btn1.classList.add('big4');
        } else if (clickCount >= 5) {
            btn2.classList.add('hidden');
            btn1.classList.add('big5');
        }
        
        yesText.style.display = 'none';
        if (image2) {
            image2.style.display = 'none';
        }
    });
    
    // Xử lý click button b1
    btn1.addEventListener('click', function() {
        yesText.style.display = 'block';
        if (image2) {
            image2.style.display = 'block';
        }
    });
});