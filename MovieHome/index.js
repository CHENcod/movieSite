// <!-- 電影輪播   主畫面 -->

let jcarousel_ul = document.querySelector('.jcarousel ul');
// console.log(jcarousel_ul);
for (i = 0; i < 7; i++) {
    let movie_img = '';
    let movieName_CN = '';
    let movieName_EN = '';
    let first_date = '';
    let director = '';
    let actor = '';
    let movie_type = '';
    let movie_time = '';
    function array(num1, num2, num3, num4, num5, num6, num7, num8) {
        movie_img = num1;
        movieName_CN = num2;
        movieName_EN = num3;
        first_date = num4;
        director = num5;
        actor = num6;
        movie_type = num7;
        movie_time = num8;
    }
    if (i == 0) {
        array(
            '../home/movie_image/movie1.jpg',
            '侏儸紀公園',
            'FANTASTIC BEASTS：THE SECRETS OF DUMBLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分'
        )

    };

    if (i == 1) {
        array(
            '../home/movie_image/movie2.jpg',
            '侏儸紀公園',
            'FANTASTIC BEASTS：BLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分')
    };

    if (i == 2) {
        array(
            '../home/movie_image/movie3.jpg',
            '侏儸紀公園',
            'FANTASTIC BEASTSDUMBLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分')
    };

    if (i == 3) {
        array(
            '../home/movie_image/movie4.jpg',
            '侏儸紀公園',
            'FANTASTIC BEF DUMBLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分');
    };

    if (i == 4) {
        array(
            '../home/movie_image/movie5.jpg',
            '侏儸紀公園',
            'FANTASTIC OF DUMBLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分')
    };

    if (i == 5) {
        array(
            '../home/movie_image/movie6.jpg',
            '侏儸紀公園',
            'FANTASTIC BEASTS：T DUMBLEDORE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分')
    };

    if (i == 6) {
        array(
            '../home/movie_image/movie7.jpg',
            '侏儸紀公園',
            'FANTASTIC BEASTS：THE SECRRE',
            '2022/04/14', '大衛葉慈',
            '裘德洛、麥斯米克森、艾迪瑞德 曼、凱薩琳沃特斯頓、伊薩米勒、丹富 格勒、卡倫透納、奧立佛麥蘇希、艾莉森蘇朵',
            '奇幻/科幻',
            '2 時 22 分')
    };

    jcarousel_ul.innerHTML += `
    <li>
    <a href="#">
    <div class="jcarousel_imgDiv"><img src="${movie_img}" alt="">
        <div class="jcarousel_imgDiv_content">
            <p>${movieName_CN}</p>
            <P>${movieName_EN}</P>
        </div>
    </div>
    </a>
    <i class="bi bi-suit-heart-fill jcarousel_heartIcon" onclick="heartIcon()"></i>

    <!-- 電影輪播 - 電影 次畫面 -->
    
    <div class="carousel_secondView">
     <div><img src="${movie_img}" alt=""></div>
    <div>
        <p>${movieName_CN}</p>
        <p>${movieName_EN}</p>
        <p>上映日期：${first_date}</p>
        <p>導演：${director}</p>
        <p>演員：${actor}</p>
        <p>類型：${movie_type}</p>
        <p>片長：${movie_time}</p>
    </div>
    </div>
    </li>`;
}

// <!-- 電影輪播   愛心點擊 -->
let list = document.querySelectorAll(".jcarousel_heartIcon");

for (i = 0; i < list.length; i++) {

    list[i].onclick = heartIcon;
}

function heartIcon() {
    if (this.style.color != "red") {
        this.style.color = "red";
    } else {
        this.style.color = "wheat";
    }
}

// <!-- 隨機電影 -->
function movieRandom_Btn() {
    var str = '';
    var arr = [];

    for (i = 0; i < 5; i++) {
        str = Math.floor(Math.random() * 10 + 1);
        for (j = 0; j < arr.length; j++) {
            if (arr[j] == str) {
                arr.splice(j, 1);
                i--;
            }
        }
        arr.push(str);
    }

    let movieRandom = document.getElementById('movieRandom');
    movieRandom.innerHTML = `
    <div class="col-12 col-md-6">
                    <img src="../home/movie_image/movie${arr[0]}.jpg" alt="">
                    <img src="../home/movie_image/movie${arr[1]}.jpg" alt="">
                    <img src="../home/movie_image/movie${arr[2]}.jpg" alt="">
                    <img src="../home/movie_image/movie${arr[3]}.jpg" alt="">
                    <img src="../home/movie_image/movie${arr[4]}.jpg" alt="">
                </div>
                <div class="col-12 col-md-6 movieRandom_mainContent">
                    <a href="#"><img src="../home/movie_image/movie${arr[0]}.jpg" alt=""></a>
                    <div>
                        <p>動作</p>
                        <p>評價：8</p>
                        <i class="bi bi-suit-heart-fill" id="movieRandom_heartIcon" onclick="movieRandom_heartIcon()"></i>
                    </div>
                    <p>哈利波特</p>
                    <p>harry porter</p>
                </div>`;

}

let movieRandom_color = document.getElementById("movieRandom_heartIcon");
movieRandom_color.onclick = movieRandom_heartIcon;

function movieRandom_heartIcon() {
      if (this.style.color != "red") {
        this.style.color = "red"
    } else {
        this.style.color = "white"
    }
}



// <!-- 最新公告 -->
function newsMove() {
    let newsTitle = document.getElementById("newsTitle");       //步驟一  先取得整標題
    let moveLength = (newsTitle.offsetTop - newsTitle.clientHeight);   //步驟二   存放要移動時的時機點

      let newsContent1 = document.querySelector(".newsContent div:nth-of-type(1)");
    let newsContent2 = document.querySelector(".newsContent div:nth-of-type(2)");
    let newsContent3 = document.querySelector(".newsContent div:nth-of-type(3)");
    let newsContent4 = document.querySelector(".newsContent div:nth-of-type(4)");
    let newsContent5 = document.querySelector(".newsContent div:nth-of-type(5)");
    let newsContent6 = document.querySelector(".newsContent div:nth-of-type(6)");
    let newsContent7 = document.querySelector(".newsContent div:nth-of-type(7)");
    let newsContent8 = document.querySelector(".newsContent div:nth-of-type(8)");

       if (window.scrollY > moveLength) {     //步驟四  判斷滾輪滾動怠於時機點觸發，加入動畫
        newsContent1.setAttribute("id", "newsContent_Item1");
        newsContent2.setAttribute("id", "newsContent_Item2");
        newsContent3.setAttribute("id", "newsContent_Item3");
        newsContent4.setAttribute("id", "newsContent_Item4")
        newsContent5.setAttribute("id", "newsContent_Item5")
        newsContent6.setAttribute("id", "newsContent_Item6")
        newsContent7.setAttribute("id", "newsContent_Item7")
        newsContent8.setAttribute("id", "newsContent_Item8")
    }
}


function debounce(fn, wait) {
    var timer = null;
    return function () {
        if (timer !== null) {
            clearTimeout(timer);
        }
        timer = setTimeout(fn, wait);
    }
}

window.addEventListener('scroll', debounce(newsMove, 5));


// <!-- 影城據點 -->
function movieCity_Btn1() {
    movieCity_Content_Div.innerHTML = ` 
    <div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema1.jpg" alt="">
    <p>台北信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema2.jpg" alt="">
    <p id="">台北信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema3.jpg" alt="">
    <p>台北信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema4.jpg" alt="">
    <p>台北信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
    `
}


function movieCity_Btn2() {
    movieCity_Content_Div.innerHTML = ` 
    <div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema5.jpg" alt="">
    <p>台北信義威秀影城</p>
    <p>影城地址：台中市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema6.jpg" alt="">
    <p id="">台中信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema7.jpg" alt="">
    <p>台中信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema8.jpg" alt="">
    <p>台中信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
    `
}

function movieCity_Btn3() {
    movieCity_Content_Div.innerHTML = ` 
    <div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema9.jpg" alt="">
    <p>台南信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema10.jpg" alt="">
    <p id="">高雄信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema11.jpg" alt="">
    <p>高雄信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
<div class="col-6 col-lg-3"><a href="#"><img src="../home/cinema_image/cinema12.jpg" alt="">
    <p>台北信義威秀影城</p>
    <p>影城地址：台北市信義區松壽路20號<br>服務專線：(02) 8780-5566</p>
</a></div>
    `
}
