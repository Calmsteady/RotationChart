window.addEventListener('load', function() {
    // 先获取界面中所有相关的元素.
    var container = this.document.querySelector('.container');
    var banners = document.querySelectorAll('.banner');
    var spans = document.querySelector('.tabs').children;
    var next = document.querySelector('.next');
    var prev = document.querySelector('.prev');
    banners[0].style.opacity = 1; // 先让第一张banner显示出来.
    spans[0].className = 'current'; //先让第一个小圆点变颜色.

    //给小圆点添加点击事件,出现相应的banner;
    for (var i = 0; i < spans.length; i++) {
        spans[i].index = i; //给每一份span添加代表自是第几个的属性。
        spans[i].addEventListener('click', function() {
            for (var j = 0; j < spans.length; j++) { //排他思想
                spans[j].className = '';
                banners[j].style.opacity = 0;
            }
            this.className = 'current'; //当前事件监听器绑定哪个对象，this就指向这个对象。
            banners[this.index].style.opacity = '1'; //
        })
    }
    //给右侧按钮添加点击事件；
    next.addEventListener('click', function() {
            for (var j = 0; j < spans.length; j++) {
                if (spans[j].className == "current") {
                    // 先找出当前在哪个span，找到了之后 令当前的banner消失，小圆圈变回无色，然后给下一个小圆圈上色，让下一个banner出现。
                    spans[j].className = "";
                    banners[j].style.opacity = "0";
                    j++;

                    if (j > 4) { //如果正好是最后一个banner，则下一个banner是第一个。j=0；
                        j = 0;
                    }
                    spans[j].className = "current";
                    banners[j].style.opacity = "1";
                }
            }

        })
        //给右侧按钮添加点击事件；
    prev.addEventListener('click', function() {
            for (var j = 0; j < spans.length; j++) {
                if (spans[j].className == "current") {
                    // 先找出当前在哪个spans，找到了之后 令当前的banner消失，小圆圈变回无色，然后给下一个小圆圈上色，让下一个banner出现。
                    spans[j].className = "";
                    banners[j].style.opacity = "0";
                    j--;

                    if (j < 0) { //如果正好是最第一个banner，则下一个banner是最后一个。j=4；
                        j = 4;
                    }
                    spans[j].className = "current";
                    banners[j].style.opacity = "1";
                }
            }
        })
        //设置定时器，window载入时出发。
    var timer = setInterval(function() {
            next.click();
        }, 3000)
        //设置鼠标移入时定时器消失
    container.addEventListener('mouseenter', function() { //不要用mouseout 和mouseover 会冒泡 一直触发事件 乱套了。

            clearInterval(timer);
            timer = null;


        })
        //设置鼠标移出时定时器消失。
    container.addEventListener('mouseleave', function() {


        timer = setInterval(function() {
            next.click();
        }, 3000)

    })




})