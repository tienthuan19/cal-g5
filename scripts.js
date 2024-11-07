
        //tìm một phần tử HTML dựa trên id của nó -> gán giá trị vào "display".
        let display = document.getElementById("display");

        //giá trị của tham số number sẽ được cộng vào cuối giá trị hiện tại trong display.value
        function pressNumber(number) {
            display.value += number;
        }

        function pressOperator(operator) {
            //Dòng if (display.value) kiểm tra xem có gì trong display.value chưa (nếu khác rỗng thì là true).
            //Nếu display.value không rỗng, nó sẽ thêm operator vào cuối giá trị hiện tại của display.value.
            if (display.value) {
                display.value += operator;
            }
        }

        function calculate() {
            //try...catch là cấu trúc giúp bắt lỗi
            try {
                //eval(display.value) thực hiện biểu thức trong display.value
                display.value = eval(display.value);
            } catch (error) {
                display.value = "Error";
            }
        }

        function clearDisplay() {
            display.value = "";
        }
