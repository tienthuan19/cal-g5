window.addEventListener('scroll', () => {  // kiểm tra khi người dùng cuộn trang.
    const navbar = document.getElementById('navbar'); // tìm và lấy phần tử có id là navbar
    if (window.scrollY > 0 && navbar.style.position !== 'fixed') {  
        // giữ thanh điều hướng cố định ở trên cùng khi cuộn.
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
    } else if (window.scrollY === 0 && navbar.style.position !== 'static') { 
        // trở lại vị trí ban đầu khi ở đầu trang.
        navbar.style.position = 'static';
    }
});
