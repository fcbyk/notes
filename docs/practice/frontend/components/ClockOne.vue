<template>
    <div class="clock">
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <em class="divider">:</em>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <em class="divider">:</em>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
        <div class="flip">
            <div class="digital front" data-number="0"></div>
            <div class="digital back" data-number="1"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import { onMounted } from 'vue';
// onMounted(()=>{
//     var Flipper = (function() {
//     function Flipper(node, currentTime, nextTime) {
//         this.isFlipping = false;
//         this.duration = 600;
//         this.flipNode = node;
//         this.frontNode = node.querySelector(".front");
//         this.backNode = node.querySelector(".back");
//         this.setFrontTime(currentTime);
//         this.setBackTime(nextTime);
//     }
//     Flipper.prototype.setFrontTime = function(time) {
//         this.frontNode.dataset.number = time;
//     };
//     Flipper.prototype.setBackTime = function(time) {
//         this.backNode.dataset.number = time;
//     };
//     Flipper.prototype.flipDown = function(currentTime, nextTime) {
//         var _this =this;
//         if(this.isFlipping) {
//             return false;
//         }
//         this.isFlipping = true;
//         this.setFrontTime(currentTime);
//         this.setBackTime(nextTime);
//         this.flipNode.classList.add("running");
//         setTimeout(function() {
//             _this.flipNode.classList.remove("running");
//             _this.isFlipping = false;
//             _this.setFrontTime(nextTime);
//         }, this.duration);
//     };
//     return Flipper;
// }());

// var getTimeFromDate = function(date) {
//     return date
//         .toTimeString()
//         .slice(0, 8)
//         .split(":")
//         .join("");
// };

// var flips = document.querySelectorAll(".flip");
// var now = new Date();
// var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
// var nextTimeStr = getTimeFromDate(now);
// var flippers = Array.from(flips).map(function(flip, i) {return new Flipper(flip, nowTimeStr[i], nextTimeStr[i]);});

// setInterval(function() {
//     var now =new Date();
//     var nowTimeStr = getTimeFromDate(new Date(now.getTime() - 1000));
//     var nextTimeStr = getTimeFromDate(now);
//     for(var i=0; i < flippers.length; i++) {
//         if(nowTimeStr[i] === nextTimeStr[i]) {
//             continue;
//         }
//         flippers[i].flipDown(nowTimeStr[i], nextTimeStr[i]);
//     }
// },1000);
// })
</script>

<style scoped lang="scss">
.clock {
    display: flex;
    margin: 1rem 0;

    /* 时钟的分隔 */
    .divider {
        font-size: 66px;
        line-height: 102px;
        font-style: normal;
        color: rgb(51, 50, 50);
    }

    /* 时钟的卡片 */
    .flip {
        position: relative;
        width: 60px;
        height: 100px;
        margin: 2px;
        font-size: 70px;
        font-weight: 700;
        line-height: 100px;
        text-align: center;
        background: rgb(46, 45, 45);
        border: 1px solid rgb(34, 33, 33);
        border-radius: 10px;
        box-shadow: 0 0 6px rgba(54, 54, 54, 0.5);

        /* 时钟上的数字 */
        .digital::before,
        .digital::after {
            position: absolute;
            content: attr(data-number);
            left: 0;
            right: 0;
            color: white;
            background: rgb(51, 50, 50);
            overflow: hidden;
            perspective: 160px;
        }

        /* 翻页前的数字 */
        .digital::before {
            top: 0;
            bottom: 50%;
            border-bottom: 1px solid #666;
            border-radius: 10px 10px 0 0;
        }

        /* 翻页后的数字 */
        .digital::after {
            top: 50%;
            bottom: 0;
            line-height: 0;
            border-radius: 0 0 10px 10px;
        }

        .back::before,
        .front::after {
            z-index: 1;
        }

        .back::after {
            z-index: 2;
        }

        .front::before {
            z-index: 3;
        }

        .back::after {
            transform-origin: center top;
            transform: rotateX(0.5turn);
        }

        &.running .front::before {
            transform-origin: center bottom;
            animation: frontFlipDown 0.6s ease-in-out;
            box-shadow: 0 -2px 6px rgba(255, 255, 255, 0.3);
            backface-visibility: hidden;
        }

        &.running .back::after {
            animation: backFlipDown 0.6s ease-in-out;
        }
    }
}

@keyframes frontFlipDown {
    to {
        transform: rotateX(0.5turn);
    }
}

@keyframes backFlipDown {
    to {
        transform: rotateX(0);
    }
}
</style>