
// Bài tập nộp: luyện vòng lặp
// Bài 1: Tìm số dương nhỏ nhất sao cho 1 + 2 + ...+ n > 10000 (N)
const timEl = document.getElementById("tim-n");
timEl.onclick = function (eveTim) {
    console.log(eveTim.target); // trả ra đối tượng phát sinh ra event
    // Nhập số N
    const soN = +document.getElementById('N-number').value
  
    // Tính giá trị trung bình
    function timSoDuongNhoNhat (soN) {
        let n = 0;
        let S = 0;
    // using While loop with the condition S < 10000. Because the loop will stop when S > 10000 so that we can take out the minimum number n
        while (S <= soN){
             n++;
    // After one loop S will be added one unit of n 
             S += n;
            
        };
        return n
    
    };
    
    // Tạo kết quả xuất ra màn hình
    const nWrapperEl = document.getElementById("n-wrapper");
    const nResult = document.getElementById("n-result");
    nWrapperEl.style.display = "block";
    nResult.innerHTML = timSoDuongNhoNhat(soN).toLocaleString();
    
};




//2. Write the program: input 2 numbers x, n and calculate the sum of S = x + x^2 + ...+x^n
const tinhTongEl = document.getElementById("tinh-tong");
tinhTongEl.onclick = function (eveTinhTong) {
    console.log(eveTinhTong.target); // trả ra đối tượng phát sinh ra event
    // Nhập số x và n 
    const x = +document.getElementById('x-number').value
    const n = +document.getElementById('n2-number').value
    // Tạo hàm tính tổng
    function tinhTong (n,x) {
        let totalOfExpo = 0;
        let exponment = 1;
        for (let ex = 1;ex <= n;ex++){
            exponment = exponment * x;
            totalOfExpo += exponment;
    
        }
        return totalOfExpo;
    }
   
    
    // Tạo kết quả xuất ra màn hình
    const tinhTongWrapperEl = document.getElementById("tinhtong-wrapper");
    const tinhTongResult = document.getElementById("tinhtong-result");
    tinhTongWrapperEl.style.display = "block";
    tinhTongResult.innerHTML = tinhTong(n,x).toLocaleString();
    
};




// 3. input n. calculate the fatorial of n
const tinhGiaiThuaEl = document.getElementById("tinh-giaithua");
tinhGiaiThuaEl.onclick = function (eveTinhGiaiThua) {
    console.log(eveTinhGiaiThua.target); // trả ra đối tượng phát sinh ra event
    // Nhập số n 
    
    const n3 = +document.getElementById('n3-number').value
    // Tạo hàm tính giai thừa
    function tinhGiaiThua (n3) {
        let product = 1;
        for (let i = 1;i <= n3;i++){
            product = product * i;
        }
        return product;
    }
   
    
    // Tạo kết quả xuất ra màn hình
    const tinhGiaiThuaWrapperEl = document.getElementById("tinhgiaithua-wrapper");
    const tinhGiaiThuaResult = document.getElementById("tinhgiaithua-result");
    tinhGiaiThuaWrapperEl.style.display = "block";
    tinhGiaiThuaResult.innerHTML = tinhGiaiThua(n3).toLocaleString();
    
};
// 3. Create Div
const taoDivEl = document.getElementById("tao-div");
taoDivEl.onclick = function (eveTaoDiv) {
    console.log(eveTaoDiv.target); // trả ra đối tượng phát sinh ra event
    // Nhập số lượng div cần tạo 
    
    const divs = +document.getElementById('div-number').value
    // Tạo hàm tạo số lượng divs dựa vào input
    function taoDiv (divs) {
        
        for (let i = 0;i <= divs;i++) {
            let divEl = document.createElement('div');
            divEl.className = 'div-create'
            document.getElementById('divEl').appendChild(divEl).style.padding = "10px";
        }
        
    }
    function doiBackGround (divs) {
        
        for (let i = 0;i < taoDiv(divs).length;i++) {
            if (i % 2 == 0) {
                listOfDivs[i].style.background = "red";
            } else {
                listOfDivs[i].style.background = "blue"
            }
        }
    }

    
    // Tạo kết quả xuất ra màn hình
    const divWrapperEl = document.getElementById("div-wrapper");
    const divResult = document.getElementById("div-result");
    divWrapperEl.style.display = "block";
    divResult.innerHTML = doiBackGround(divs).toLocaleString();
    
};

