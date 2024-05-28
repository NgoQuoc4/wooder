// JAVASCRIPT Phần 1.1

// Bài 1: Nhập vào 1 số bất kỳ, kiểm tra số đó có phải là số chẵn hay không ? Kết quả trả về kiểu
//  true / false

// let number = 2;
// let number = 3;
// let number = "Số nè";

// function checkNumber(number1) {
//     if (isNaN(number)) {
//         return undefined
//     } else {
//         if (number % 2 === 0) {
//             return true;
//         } else {
//             return false;
//         }
//     }
// }
// console.log(checkNumber(number));


// function checkNumber(number) {
//     if (isNaN(number)) {
//         console.log(`${number} là chữ`);
//     } else {
//         if (number % 2 !== 0) {
//             console.log(`${number} là số lẻ`);
//         } else {
//             console.log(`${number} là số chẵn`);
//         }
//     }
// }
// checkNumber(number);


//================================================================
/* Bài 2: Viết hàm kiểm tra số đó có chia hết cho 3 hay không ? */

let number = 6;
function checkNumber(number) {
    if (number % 3 == 0)
        return `${number} chia hết cho 3 `
    return `${number} không chia hết cho 3 `
}
console.log(checkNumber(number))

//============================================================================
/* Bài 3: Khai báo 2 số a = 4, b = 12, in kết quả bằng console.Tính tổng 2 số a và b ? Lấy b chia a,
    lấy phần dư ? Lấy b chia a, lấy phần nguyên ? */

// const a = 4;
// const b = 11;
// // Tính tổng 2 số a và b
// function sumNumber(a, b) {
//     return a + b;
// }
// console.log("Tính tổng a, b");
// console.log(` ${a} + ${b} = ${sumNumber(a, b)}`);

// // Lấy b chia a,lấy phần dư
// function diviNumberDu(b, a) {
//     return b % a;
// }
// console.log("Chia b a lấy dư");
// console.log(`${b} / ${a} = ${diviNumberDu(b, a)}`);

// // Lấy b chia a, lấy phần nguyên
// function diviNumberNguyen(b, a) {
//     return b / a;
// }
// console.log("Chia b a lấy nguyên");
// console.log(`${b} / ${a} = ${diviNumberNguyen(b, a)}`);

/*Bài 4: In ra họ và tên của mình bằng cách khai báo 1 biến chứa họ và biến chứa tên, có
khoảng trắng giữa họ và tên của bạn. */

// let firstName = "Ngô";
// let lastName = "Quốc";
// // c1
// function fullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// console.log(fullName(firstName, lastName));
// // c2
// console.log(`${firstName} ${lastName}`)
/*Bài 5: Viết hàm so sánh 2 số nguyên.nếu a > b thì trả về 1, nếu a < b thì trả về - 1, nếu a == b thì
trả về 0. */

// let a = 2;
// let b = 3;

// function checkNum(a, b) {
//     if (a > b) {
//         return 1;
//     } else {
//         if (a < b) {
//             return -1;
//         } else {
//             if (a == b) {
//                 return 0;
//             }
//         }
//     }
// }
// console.log(checkNum(a, b));

/*Bài 6: Khai báo một chuỗi ký tự là “happy news year”
a.In ra tổng số ký tự có trong chuỗi(gợi ý dùng length)
b.In ra vị trí của chữ “y” từ đầu xuống(gợi ý dùng indexOf)
c.In ra vị trí của chữ “y” từ dưới lên(gợi ý dùng lastIndexOf)
d.Dùng replace để thay thế từ “happy” bằng một từ tuỳ ý bạn. */

// let textString = 'happy news year';
// console.log("happy news year")
// console.log("Số ký tự trong chuổi là:", textString.length);//a
// console.log("Vị trí chữ 'y'từ đầu xuống  là:", textString.indexOf("y") + 1);//b
// console.log("Vị trí chữ 'y'từ dưới lên là:", textString.lastIndexOf("y") + 1);//c
// console.log("Chuổi mới:",textString.replace("happy", " Chúc mừng"));//d

//=======================================================================================================================================
//JAVASCRIPT PHẦN 1.2
/* Bài 1: Viết hàm nhập vào điểm của một học sinh và in ra kết quả tương ứng nếu:
a.Điểm lớn hơn 8 thì in ra Excellence
b.Điểm lớn hơn 7 đến 8 thì in ra Good
c.Điểm từ 4 đến bằng 7 thì in ra Not Good
d.Nhỏ hơn 4 thì in ra Bad */
// let a = 1.2;
// function pointNum(a) {
//     if (a > 8) {
//         return "Excellence";
//     } else if (a > 7 && a <= 8) {
//         return "Good";
//     } else if (a >= 4 && a <= 7) {
//         return "Not Good";
//     } else if (a < 4) {
//         return "Bad"
//     }
// }
// console.log(pointNum(a));



/*
2. Viết hàm nhập vào 1 chuỗi và chuẩn hóa chuỗi theo định dạng chữ cái đầu tiên của 
chuỗi phải được in hoa.Các chữ còn lại viết thường.Ví dụ: HỌC lập TRình JavAScript thì 
phải chuyển thành: Học Lập Trình Javascript*/


function capitalize(jsString) {
    jsString = jsString.toLowerCase();
    return js
}

// console.log(capitalize(jsString));

const jsString = "hỌC lập TRình JavAScript";

function titleCase(jsString) {
    //chuyen doi thap lowercase
    const convert = jsString.toLowerCase().split(' ');
    //loc qua tu phan tu cua mang
    const string = convert.map(function (a) {
        return a.replace(a.charAt(0), a.charAt(0).toUpperCase());
        //return a.charAt(0).toUpperCase() + a.slice(1);

    })
    //noi chuoi voi khoan trang
    return string.join(" ")
}

// console.log(titleCase(jsString));


/*
3. Viết hàm định dạng số giây luôn có 2 chữ số.Ví dụ: Nếu người dùng nhập vào: 12 kết
quả là 12. nếu người dùng nhập vào: 5 kết quả là 05*/

// const secon = "1";

//c1
// const checkLength = secon.toString().length;
// function checkSecon(secon, checkLength) {
//     if (checkLength == 2) {
//         return secon
//     } else {
//         return `0${secon}`;
//     }
// }
// console.log(checkSecon(secon, checkLength));


//c2
// console.log(secon.toString().padStart(2, '0'))



/* 4. Viết hàm trích xuất domain như sau.Ví dụ: Nếu là cfdcircle@gmail.com kết quả là
gmail.com, nếu là learning@cfdcircle.vn kết quả là cfdcircle.vn */

// const domain = "cfdcircle@gmail.com";
// function splitSting(domain) {
//     const mang = domain.split("@")
//     const newmang = mang.pop()
//     return newmang;
// }
// console.log(splitSting(domain));


/* 5. Viết hàm nhập vào 1 chuỗi và chuyển đổi chuỗi thành path URL.Ví dụ: "javascript cho
nguoi moi bat dau" kết quả là javascript-cho-nguoi-moi-bat-dau   */

// const chuoi = "javascript cho nguoi moi bat dau"
// function noichuoi() {
//     return chuoi.split(" ").join("-")
// }
// console.log(noichuoi());

// ========================================================================================================================================
// phần  2.1

//Bai 1: Chạy vòng lặp với i = 0, i < 10, i++. Tính tổng giá trị mỗi lần i tăng lên 1(gợi ý dùng vòng
// lặp for hoặc while)

// function sumI() {
//     let sum = 0;
//     for (let i = 0; i < 10; i++) {
//         sum += i;
//     }
//     return sum
// }
// console.log(sumI())



//bai 2. In ra số chẵn từ 0 - 20.(dùng vòng lặp while)?

// function sumChan() {
//     let j = 0;
//     while (j <= 20) {
//         console.log(j);
//         j += 2;
//     }
// }
// sumChan();


//Bai 3. Tạo 1 mảng bất kỳ với 5 phần tử, thực hiện xoá 2 phần tử cuối, sau đó in ra mảng kết
// quả(gợi ý dùng: splice) ?

// let cars = ["Honda", "Toyota", "Hyunda", "Mec", Kia"];
// function xoaArray(array) {
//     cars.splice(3);
//     return cars;
// }
// console.log(xoaArray(cars));


//4.Tạo 1 mảng gồm tên các khoá học của CFD Circle.In ra số lượng các khoá học ? In ra
// chỉ số index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá
// học cách nhau bằng dấu phẩy ? Push thêm 2 phần tử bất kỳ vào mảng đã tạo.

// let khoaHoc = ["Frontend Newbie", "Res Js", "Master React"];
// function inKhoaHoc(khoaHoc) {
//     console.log(khoaHoc.length)
//     console.log(khoaHoc)
//     console.log(khoaHoc.slice(1, 2))
//     console.log(khoaHoc.join(", "));
//     khoaHoc.push(" PHP", "Java");
//     console.log(khoaHoc)
//     return;
// }
// console.log(inKhoaHoc(khoaHoc));

// 5. Tạo 1 mảng gồm các phần tử là kiểu số nguyên dương, tính tổng các phần tử có
// trong mảng ?

// let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function sumNum(num) {
//     let sum = 0;
//     for (let i = 0; i < num.length; i++) {
//         sum += num[i];
//     }
//     return sum;
// }
// console.log(sumNum(num));


// ================================================================================================================================
// phần  2.2

// 1. Viết hàm random một số ngẫu nhiên từ 1 đến n(n là tham số bất kỳ được truyền vào) ?
// let n = 9;
// function randomNumber(n) {
//     return Math.floor(Math.random(1, n) * 10);
// }
// console.log(randomNumber());

//     2. Hiển thị một alert thông báo với nội dung bất kỳ sau khi vào trang web sau 4 giây ?

// setTimeout(() => {
//     alert("Hello")
// }, 4000);

//         3. Lấy thời gian hệ thống để tạo đồng hồ bằng javascript, in ra giao diện người dùng t
// trong thẻ H1(gợi ý sử dụng setInterval và đối tượng Date, in ra giao diện thì dùng
// document.write()).

function getTime() {
    const date = new Date;
    const time = date.toLocaleTimeString()
    console.log(time)

    // in ra màn hình
    const heading = document.querySelector('.heading')
    heading.innerHTML = time;
}

// setInterval(getTime, 1000);

// 4. Tạo một mảng, bên trong gồm 4 đối tượng là các khoá học của CFD Circle, mỗi đối
// tượng gồm các key(thuộc tính) name(tên khoá học), price(giá), date(ngày khai giảng).
// In ra các đối tượng có trong mảng ? In ra price(giá khoá học) của từng đối tượng ?

// const khoaHocCFD = [
//     {
//         name: 'Hoc CFD',
//         price: 7800,
//         date: 15,
//     },
//     {
//         name: 'Hoc CFádasdD',
//         price: 6800,
//         date: 15,
//     },
//     {
//         name: 'Hoc CFádasdD',
//         price: 4800,
//         date: 15,
//     },
//     {
//         name: 'Hoc CFádasdD',
//         price: 5800,
//         date: 15,
//     }
// ]

// function CFD(khoaHocCFD) {
//     console.log(khoaHocCFD)
//     console.log(khoaHocCFD.map(function (a) {
//         return a.price;
//     }))
// }

// CFD(khoaHocCFD);

//     5. Tạo 1 một đối tượng Car gồm các thuộc tính(key): name, color, price.Kiểm tra xem thuộc
// tính(key) là speed có tồn tại trong đối tượng Car hay không, trả về kiểu boolean. (gợi ý
// dùng hasOwnProperty) ?
const prop = {
    speed: "312"
}
const car = {
    name: 'honda',
    color: 'white',
    price: 200
}
function checkCar(car) {
    return console.log(car.hasOwnProperty("speed"))
}
// checkCar(car, prop);


//phần 3.1================================================================================================================================

//Bài 1: Tạo 1 mảng gồm tên các khoá học của CFD Circle.In ra số lượng các khoá học ? In ra chỉ số 
// index của mảng ? In ra tên khoá học ở vị trí index thứ 2. In ra chuỗi tên các khoá học cách 
// nhau bằng dấu phẩy ? Tính tổng giá các khoá học ? (bắt buộc dùng 1 trong những Phương 
// thức xử lý mảng nâng cao đã học)

// const khoaHocCFD1 = ["Frontend", "Responsive", "Reactive"];
const khoaHocCFD1 = [
    {
        name: "Frontend",
        price: 500
    },
    {
        name: "Responsive",
        price: 500
    },
    {
        name: "Reactive",
        price: 500
    }
]

function duyetKhoaHoc() {
    console.log(khoaHocCFD1.length)
    console.log(khoaHocCFD1)

    duyet = khoaHocCFD1.map((item) => {
        return item.name
    })
    console.log(duyet[2]);

    console.log(duyet.join(","))

    let sumKhoa = 0
    khoaHocCFD1.reduce((acc, item) => {
        return sumKhoa += item.price
    }, 0)
    console.log(sumKhoa)

}

// duyetKhoaHoc(khoaHocCFD1)


// 2. Viết 1 hàm nhận vào 1 mảng số và trả về tổng giá trị các phần tử của mảng ?

const so = [1, 2, 3, 4]

function tongSo(so) {
    return so.reduce((acc, item) =>
        acc + item
        , 0)
}
// console.log(tongSo(so));

//     3. Viết 1 hàm nhận vào 2 tham số là array và character.Hàm trả về 1 chuỗi là kết quả của việc
// nối các phần tử của array với character ? (lưu ý: array là mảng nhận vào, character là ký tự để
// nối các phần tử của mảng).

const array = ["a", "b", "c", "d"];
const character = "-";

function joinString(array, character) {
    return array.join(character)
}

// console.log(joinString(array, character))


// 4. Tạo 1 object User gồm: tên, tuổi, địa chỉ và 1 mảng chứa tên bạn bè.In ra array bạn bè ? In ra
// tên của người bạn cuối cùng ? In ra địa chỉ của user ? Thêm 1 người bạn vào mảng bạn bè ? in
//     ra độ dài mảng bạn bè ?

const User = {
    name: "Quoc",
    age: 18,
    address: "HCM",
    fr: ["H", "D", "A"]
}

function handleUesr() {
    console.log(User.fr)

    console.log(User.fr[User.fr.length - 1])

    console.log(User.address)

    User.fr.push("T")
    console.log(User.fr.length)

}
// handleUesr();


//         5. Cho mảng gồm các phần tử 2, 4, 5, 7, 32, 67, 30, 100. Trả về và in ra mảng mới gồm các phần tử có
// giá trị gấp đôi giá trị của từng phần tử mảng đã khởi tạo ? Gợi ý dùng hàm map().

const arraySo = [2, 4, 5, 7, 32, 67, 30, 100]
const newArray = arraySo.map((item) => item * 2)
// console.log(newArray)

//phân 3.2================================================================================================
// 1. Viết 1 hàm nhận vào 1 tham số là mảng và trả về ngẫu nhiên 1 phần tử của mảng ?

const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
function ranArray(numArray) {
    ran = Math.floor(Math.random() * (numArray.length))
    return numArray[ran]
}
// console.log(ranArray(numArray))

//     2. Tạo 1 đối tượng student trống: Thêm thuộc tính name với giá trị là tên student ? Thêm thuộc tính
// age với giá trị là tuổi ? Thay đổi giá trị name của student thành tên bất kỳ ? Xóa thuộc tính age ra
// khỏi đối tượng ?

// const student = {}
// student.name = 'Student'
// student.age = 18
// console.log(student)
// student['newKey'] = student['name'];
// delete student['name'];
// delete student['age'];
// console.log(student)

//     3. Tạo 1 mảng gồm các object là các student gồm tên và điểm trung bình.Viết 1 hàm nhận vào 1
// tham số là mảng vừa tạo và trả về các object có điểm trung bình lớn hơn 5 ?

const dshocsinh = [
    {
        name: "Q",
        point: 9
    },
    {
        name: "H",
        point: 8
    },
    {
        name: "T",
        point: 1
    }
]

function tbDiem() {
    return dshocsinh.map((item) => {
        if (item.point > 5)
            return item
        return "duoi trung binh"
    })
}
// console.log(tbDiem(dshocsinh));


//     4. Tạo 1 mảng chứa các object có thuộc tính là tên các nhân viên và giá trị là tiền lương.Viết hàm
// trả về tổng tất cả lương của các nhân viên trong object ?

const dsnhanvien = [
    {
        name: "H",
        salary: 500
    },
    {
        name: "T",
        salary: 100
    },
    {
        name: "Q",
        salary: 600
    }
]

function tongLuong(dsnhanvien) {
    let luong = 0
    dsnhanvien.reduce((acc, item) => {
        luong += item.salary
    }, 0)

    return luong
}
// console.log(tongLuong(dsnhanvien));

//     5. Cho mảng gồm các phần tử 2, 4, 5, 7, 32, 67, 30, 100. Tìm và in ra phần tử đầu tiên thoả điều kiện phần
// tử đó > 20 ?

const arrayNumber = [2, 4, 5, 7, 32, 67, 30, 100]
const checkNum = (arrayNumber) => arrayNumber.filter((num) => num > 20)
// console.log(checkNum(arrayNumber));

//     6. Cho mảng diemso gồm các phần tử 5, 7, 8, 9, 3. Sử dụng hàm every để kiểm tra điểm số của học
// sinh được lưu dưới dạng mảng có đủ để đỗ kỳ thì không.Điều kiện tất cả điểm số >= 5. Nếu đủ
// điều kiện thì in ra “Đủ điểm đỗ” ngược lại thì “Không đủ điểm đỗ”?

const diemso = [1, 7, 8, 9, 6]
const checkTb = (diemso) => {
    return diemso.every((diem) => diem >= 5) ? "Đủ điểm đỗ" : "Không đủ điểm đỗ"
}
// console.log(checkTb(diemso));

// ES6=================================================================================================================================


// 1. Viết 1 function nhận vào số lượng tham số không giới hạn.Hàm trả về độ dài của tất cả tham số.Gợi ý:
// dùng rest parameter.Ví dụ: getLength(1, 3, 5, 7, 9) => 5

function getLength(...args) {
    return args.length
}
// console.log(getLength(1, 3, 5, 7, 9))

// 2. Cho mảng gồm số chẵn và lẻ.Viết hàm nhận vào mảng đó và trả về mảng mới gồm những số lẻ được
// nhân đôi.Áp dụng các phương thức mảng đã học và arrow function để viết càng ngắn gọn càng tốt.
// Ví dụ: getNum([1, 3, 6, 9]) => [6, 18]

function getNum(...num) {
    return num.filter(num => num % 2 !== 0).map((so) => so * 2)
}
// console.log(getNum(1, 3, 6, 9));


// 3. Cho 1 mảng gồm 5 object có tên và giá khóa học, viết hàm trả về tổng giá tiền 3 khóa học cuối cùng.Áp
// dụng kiến thức ES6 đã học như destructuring, rest parameter và arrow function.

let cousrse = [
    {
        name: "Front end",
        price: 500
    },
    {
        name: "HTML",
        price: 500
    },
    {
        name: "CSS",
        price: 500
    },
    {
        name: "JAVASCRIPT",
        price: 500
    },
    {
        name: "PHP",
        price: 500
    },
]

const getPrice = (cousrse = []) => {
    return cousrse.slice(-3).reduce((a, b) => a + b.price, 0);
}
// console.log(getPrice(cousrse));

// 4. Viết hàm có thể nhận vào tham số là các số nguyên dương.Hàm trả về tổng các đối số nhận vào.Áp dụng
// kiến thức ES6.Ví dụ: calcSum(1, 3, 5) => 9

const calcSum = (...num) => num.reduce((acc, item) => acc + item, 0)
// console.log(calcSum(1, 3, 5));

// 5. Cho 1 đối tượng User có address là 1 object.Trong object address lại chứa home là 1 mảng.Trong mảng
// home đó chứa 2 object có name là tên chủ nhà, district là tên đường, number là số nhà.Áp dụng
// destructuring để in ra district của object thứ 2.

const user = {
    address: {
        home: [
            {
                name: "Quoc",
                disctrict: "HCM",
                number: 234
            },
            {
                name: "Dong",
                disctrict: "VT",
                number: 200

            }
        ]
    }
}
const { address: { home: [, { disctrict }] } } = user
// console.log(disctrict);


// 6. Viết hàm nhận vào tham số là các số nguyên dương.Hàm trả về object có key là chuỗi bất kỳ(tự định
// nghĩa) + với index tương ứng mỗi lần lặp, value là 1 số(của param truyền vào) tương ứng với mỗi lần lặp
// nhân 2. Ví dụ: generateNum(1, 2, 3, 4) => { string1: 2, string2: 2, string3: 6, string4: 8 }

const generateNum = (str, ...rest) => {
    return rest.reduce((acc, item, index) => {
        return {
            ...acc,
            [`${str}${index + 1}`]: item * 2
        }
    }, {})
}
// console.log(generateNum("quoc", 1, 2, 3, 4));
