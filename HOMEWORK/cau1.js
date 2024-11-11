function validateInput(input) { // nhận vào một tham số ng dùng nhập
    const maxLength = 50; // độ dài tối đa 50
    
    if (input.length > maxLength) { // kiểm tra độ dài 
        alert(`The input is longer than the allowed limit.`);
        return false; // vượt quá 50, alert sẽ hiển thị thông báo
    }
    return true; 
}
