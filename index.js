// 简化函数
function $(selector){
    return document.querySelector(selector);
}
// 图书分类

var bookTypes = JSON.parse(localStorage.getItem('bookTypes'));
for(var key in bookTypes){
    // 3.获取模板，渲染数据，并添加到页面中
  var html = template('type-menu',bookTypes[key]);
  $('.main .type ul.menu').innerHTML += html;
}

// 猜你喜欢 start
var newguessLikes = JSON.parse(localStorage.getItem('guessLikes'));
// console.log(newguessLikes.length);
// 上方一个
var html1 = template('guesslikeOne',newguessLikes[0]);
$('.main .box .guess-like .one').innerHTML = html1;
// 下方四个
for(var key=1;key<newguessLikes.length;key++){
  // 3.获取模板，渲染数据，并添加到页面中
var html2 = template('guesslike',newguessLikes[key]);
$('.main .box .guess-like .four').innerHTML += html2;
}
// 猜你喜欢 end

// 本周精选start
var newselected = JSON.parse(localStorage.getItem('selected'));
// console.log(newguessLikes.length);
// 上方一个
var html1 = template('selectedOne',newselected[0]);
$('.main .box .selected .one').innerHTML = html1;
// 下方四个
for(var key=1;key<newselected.length;key++){
  // 3.获取模板，渲染数据，并添加到页面中
var html2 = template('selected',newselected[key]);
$('.main .box .selected .four').innerHTML += html2;
}
// 本周精选end

// 主编推荐start
var newRecommend = JSON.parse(localStorage.getItem('recommend'));
// console.log(newguessLikes.length);
// 上方一个
var html1 = template('recommendOne',newRecommend[0]);
$('.main .box .newRecommend .one').innerHTML = html1;
// 下方四个
for(var key=1;key<newRecommend.length;key++){
  // 3.获取模板，渲染数据，并添加到页面中
var html2 = template('recommend',newRecommend[key]);
$('.main .box .newRecommend .four').innerHTML += html2;
}
// 主编推荐end

 // 轮播图
  var newSlides = JSON.parse(localStorage.getItem('slides'));
  for(var slide of newSlides){
      var div = document.createElement('div');
      div.className = 'swiper-slide';
      var img = document.createElement('img');
      img.src = 'resource/imgs/slides/'+ slide;
      div.appendChild(img);
      $('.swiper-wrapper').appendChild(div);
  }
  var mySwiper = new Swiper('.swiper-container',{
    // direction: '';
    loop:true, //循环模式选项
    centeredSlides: true,
    spaceBetween: 30,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},
    // 分页器
    pagination:{
        el: '.swiper-pagination',
        clickable: true,
    },

    // 前进后退按钮
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})

//按钮事件
var eventNode = $('.bottom .left .box .bar ul');
// 第一个节点—— 猜你喜欢
eventNode.firstElementChild.onclick = function(){
  this.style = "border-top: 3px solid #ff5000;color:#ff5000;";
  eventNode.firstElementChild.nextElementSibling.style = "border-top:3px solid white;color:#666";
  eventNode.lastElementChild.style = "border-top:3px solid white;color:#666";
  $('.box .guess-like').style = "display: block";
  $('.box .selected').style = "display: none";
  $('.box .newRecommend').style = "display: none";
}
// 第二个节点 ——本周精选
eventNode.firstElementChild.nextElementSibling.onclick = function(){
    this.style = "border-top: 3px solid #ff5000;color:#ff5000;";
    eventNode.firstElementChild.style = "border-top:3px solid white;color:#666";
    eventNode.lastElementChild.style = "border-top:3px solid white;color:#666";
    $('.box .guess-like').style = "display: none";
    $('.box .selected').style = "display: block;";
    $('.box .newRecommend').style = "display: none";
}
// 第三个节点—— 主编推荐
eventNode.lastElementChild.onclick = function(){
    this.style = "border-top: 3px solid #ff5000;color: #ff5000;";
    eventNode.firstElementChild.style = "border-top:3px solid white;color:#666";
    eventNode.firstElementChild.nextElementSibling.style= "border-top:3px solid white;color:#666";
    $('.box .selected').style = "display: none";
    $('.box .guess-like').style = "display: none";
    $('.box .newRecommend').style = "display: block";
}

//图书畅销榜
var bestselling = JSON.parse(localStorage.getItem('bestSelling'));
var i = 1;
for(var item of bestselling){
  var li = document.createElement('li');
  li.className='li_item';
  var spanText = document.createElement('span');
  var spanIcon = document.createElement('span'); 
  // console.log(spanText); 
  if(i<10){
    var text = document.createTextNode("0"+i+'. '+item);
    spanText.appendChild(text);
    spanIcon.className = "iconfont icon-youjiantou";
  }
  else{
    var text = document.createTextNode(i+'. '+item);
    spanText.appendChild(text);
    spanIcon.className = "iconfont icon-youjiantou";
  }
  li.appendChild(spanText);
  li.appendChild(spanIcon);
  $('.main .content .right .bottom .right .list ul').appendChild(li);
  i++;
}
