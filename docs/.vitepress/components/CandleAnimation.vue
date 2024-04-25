<template>
    <div class="box">
        <div class="warpper">
            <div class="candles">
                <div class="light_wave"></div>

                <!-- 蜡烛1 -->
                <div class="candle1">
                    <div class="candle1_body">
                        <div class="candle1_eyes">
                            <span class="candle1_eyes-left"></span>
                            <span class="candle1_eyes-right"></span>
                        </div>
                        <div class="candle1_mouth"></div>
                    </div>
                    <div class="candle1_stick"></div>
                </div>

                <!-- 蜡烛2 -->
                <div class="candle2">
                    <div class="candle2_body">
                        <div class="candle2_eyes">
                            <span class="candle2_eyes-left"></span>
                            <span class="candle2_eyes-right"></span>
                        </div>
                    </div>
                    <div class="candle2_stick"></div>
                </div>

                <div class="candle2_fire"></div>
                <div class="sparkle1"></div>
                <div class="sparkle2"></div>
                <div class="candle_smoke1"></div>
                <div class="candle_smoke2"></div>
            </div>

            <div class="floor"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
@mixin position-absolute($x, $y) {
    position: absolute;
    left: $x;
    top: $y;
}

@mixin box-set($width, $height, $background: none, $border: none, $border-radius: 0) {
    width: $width;
    height: $height;
    background: $background;
    border: $border;
    border-radius: $border-radius;
}

.box {
    position: relative;
    animation: change-background 5s infinite linear;
    @include box-set(100%, 300px,none,#FFF,15px);
    border: #b2b2b25e solid 1px;
    margin: 1rem 0;

    .wrapper {
        @include position-absolute(50%, 70%);
        transform: scale(1.5) translate(-50%, -50%);
    }

    .floor {
        @include position-absolute(50%, 70%);
        @include box-set(350px, 9px, #673C63, none, none);
        transform: translate(-50%, -50%);
        box-shadow: 0px 2px 5px #111;
        z-index: 2;
    }

    .candles {
        @include position-absolute(50%, 70%);
        @include box-set(250px, 150px, none, none, none);
        transform: translate(-50%, -100%);
        z-index: 1;

        .candle1 {
            @include position-absolute(50%, 50%);
            @include box-set(35px, 100px, #fff, 3px solid #673C63, 3px);
            transform: translate(60%, -25%);
            transform-origin: center right;
            box-shadow: -2px 0px 0px #95c6f2 inset;
            animation: expand-body 5s infinite linear;

            .candle1_stick {
                @include position-absolute(50%, 0%);
                @include box-set(3px, 15px, #673C63);
                transform: translate(-50%, -100%);
            }

            .candle1_eyes {
                @include position-absolute(50%, 0%);
                @include box-set(35px, 30px);
                transform: translate(-50%, 0%);

                .candle1_eyes-left,
                .candle1_eyes-right {
                    @include box-set(5px, 5px, #673C63);
                    display: inline-block;
                    border-radius: 100%;
                    background: #673C63;
                    animation: blink-eyes 5s infinite linear;

                    &.candle1_eyes-left {
                        @include position-absolute(30%, 20%);
                        transform: translate(-70%, 0%);
                    }

                    &.candle1_eyes-right {
                        @include position-absolute(70%, 20%);
                        transform: translate(-70%, 0%);
                    }
                }
            }

            .candle1_mouth {
                @include position-absolute(40%, 20%);
                @include box-set(0px, 0px, #673C63, none, 20px);
                transform: translate(-50%, -50%);
                animation: uff 5s infinite linear;
            }
        }

        .candle2 {
            @include position-absolute(20%, 65%);
            @include box-set(42px, 60px, #fff, 3px solid #673C63, 3px);
            transform: translate(60%, -15%);
            transform-origin: center right;
            box-shadow: -2px 0px 0px #95c6f2 inset;
            animation: shake-left 5s infinite linear;

            .candle2_stick {
                @include position-absolute(50%, 0%);
                @include box-set(3px, 15px, #673C63);
                height: 12px;
                transform: translate(-50%, -100%);
                transform-origin: bottom center;
                animation: stick-animation 5s infinite linear;
            }

            .candle2_eyes-left,
            .candle2_eyes-right {
                @include position-absolute(50%, 0%);
                @include box-set(5px, 5px, #673C63);
                display: inline-block;
                border-radius: 100%;
                background: #673C63;
                transform: translate(-80%, 0%);
            }

            .candle2_eyes-left {
                @include position-absolute(30%, 50%);
                animation: changeto-lower 5s infinite linear;
            }

            .candle2_eyes-right {
                @include position-absolute(70%, 50%);
                animation: changeto-greater 5s infinite linear;
            }
        }

        .light_wave {
            @include position-absolute(35%, 35%);
            @include box-set(75px, 75px,none, 2px solid rgba(255, 255, 255, 0.2),100%);
            transform: translate(-25%, -50%) scale(2.5, 2.5);
            animation: expand-light 5s infinite linear;
            z-index: 0;
        }

        .candle2_fire {
            @include position-absolute(40%, 50%);
            display: block;
            @include box-set(16px, 20px, #ff9800, none, 50% 50% 50% 50% / 60% 60% 40% 40%);
            transform: translate(-50%, -50%);
            animation: dance-fire 5s infinite linear;
        }

        .candle_smoke1 {
            @include position-absolute(30%, 50%);
            @include box-set(30px, 3px, grey);
            transform: translate(-50%, -50%);
            animation: move-left 5s infinite linear;
        }

        .candle_smoke2 {
            @include position-absolute(30%, 40%);
            @include box-set(10px, 10px, grey, none, 10px);
            transform: translate(-50%, -50%);
            animation: move-top 5s infinite linear;
        }
    }
}


@keyframes blink-eyes {

    0%,
    35% {
        opacity: 1;
        transform: translate(-70%, 0%);
    }

    36%,
    39% {
        opacity: 0;
        transform: translate(-70%, 0%);
    }

    40% {
        opacity: 1;
        transform: translate(-70%, 0%);
    }

    50%,
    65% {
        transform: translate(-140%, 0%);
    }

    66% {
        transform: translate(-70%, 0%);
    }
}

@keyframes expand-body {

    0%,
    40% {
        transform: scale(1, 1) translate(60%, -25%);
    }

    45%,
    55% {
        transform: scale(1.1, 1.1) translate(60%, -28%);
    }

    60% {
        transform: scale(0.89, 0.89) translate(60%, -25%);
    }

    65% {
        transform: scale(1, 1) translate(60%, -25%);
    }

    70% {
        transform: scale(0.95, 0.95) translate(60%, -25%);
    }

    75% {
        transform: scale(1, 1) translate(60%, -25%);
    }
}

@keyframes uff {

    0%,
    40% {
        width: 0px;
        height: 0px;
    }

    50%,
    54% {
        width: 15px;
        height: 15px;
        left: 30%;
    }

    59% {
        width: 5px;
        height: 5px;
        left: 20%;
    }

    62% {
        width: 2px;
        height: 2px;
        left: 20%;
    }

    67% {
        width: 0px;
        height: 0px;
        left: 30%;
    }
}

@keyframes change-background {

    0%,
    59%,
    98%,
    100% {
        background: #fff;
    }

    61%,
    97% {
        background: #000;
    }
}

@keyframes move-left {

    0%,
    59%,
    100% {
        width: 0px;
        left: 40%;
    }

    60% {
        width: 30px;
        left: 30%;
    }

    68% {
        width: 0px;
        left: 20%;
    }
}

@keyframes move-top {

    0%,
    64%,
    100% {
        width: 0px;
        height: 0px;
        top: 0%;
    }

    65% {
        width: 10px;
        height: 10px;
        top: 40%;
        left: 40%;
    }

    80% {
        width: 0px;
        height: 0px;
        top: 20%;
    }
}

@keyframes shake-left {

    0%,
    40% {
        left: 20%;
    }

    50%,
    54% {
        left: 20%;
        transform: translate(60%, -15%);
    }

    59% {
        left: 20%;
        transform: translate(60%, -15%);
    }

    62% {
        left: 18%;
        transform: translate(60%, -15%);
    }

    67% {
        left: 20%;
        transform: translate(60%, -15%);
    }

    75% {
        left: 20%;
        transform: scale(1.15, 0.85) translate(60%, -15%);
        background: #fff;
        border-color: #673C63;
    }

    91% {
        left: 20%;
        transform: scale(1.18, 0.82) translate(60%, -10%);
        background: #f44336;
        border-color: #f44336;
        box-shadow: -2px 0px 0px #f44336 inset;
    }

    92% {
        left: 20%;
        transform: scale(0.85, 0.95) translate(60%, -15%);
    }

    95% {
        left: 20%;
        transform: scale(1.05, 0.95) translate(60%, -15%);
    }

    97% {
        left: 20%;
        transform: scale(1, 1) translate(60%, -15%);
    }
}

@keyframes stick-animation {

    0%,
    40% {
        left: 50%;
        top: 0%;
        transform: translate(-50%, -100%);
    }

    50%,
    54% {
        left: 50%;
        top: 0%;
        transform: translate(-50%, -100%);
    }

    59% {
        left: 50%;
        top: 0%;
        transform: translate(-50%, -100%);
    }

    62% {
        left: 50%;
        top: 0%;
        transform: rotateZ(-15deg) translate(-50%, -100%);
    }

    65% {
        left: 50%;
        top: 0%;
        transform: rotateZ(15deg) translate(-50%, -100%);
    }

    70% {
        left: 50%;
        top: 0%;
        transform: rotateZ(-5deg) translate(-50%, -100%);
    }

    72% {
        left: 50%;
        top: 0%;
        transform: rotateZ(5deg) translate(-50%, -100%);
    }

    74%,
    84% {
        left: 50%;
        top: 0%;
        transform: rotateZ(0deg) translate(-50%, -100%);
    }

    85% {
        transform: rotateZ(180deg) translate(0%, 120%);
    }

    92% {
        left: 50%;
        top: 0%;
        transform: translate(-50%, -100%);
    }
}

@keyframes expand-light {

    10%,
    29%,
    59%,
    89% {
        transform: translate(-25%, -50%) scale(0, 0);
        border: 2px solid rgba(255, 255, 255, 0);
    }

    90%,
    20%,
    50% {
        transform: translate(-25%, -50%) scale(1, 1);
    }

    95%,
    96%,
    26%,
    27%,
    56%,
    57% {
        transform: translate(-25%, -50%) scale(2, 2);
        border: 2px solid rgba(255, 255, 255, 0.5);
    }

    0%,
    28%,
    58%,
    100% {
        transform: translate(-25%, -50%) scale(2.5, 2.5);
        border: 2px solid rgba(255, 255, 255, 0.2);
    }
}

@keyframes dance-fire {

    59%,
    89% {
        left: 40%;
        width: 0px;
        height: 0px;
    }

    90%,
    0%,
    7%,
    15%,
    23%,
    31%,
    39%,
    47%,
    55% {
        left: 40.8%;
        width: 16px;
        height: 20px;
        background: #FFC107;
    }

    94%,
    3%,
    11%,
    19%,
    27%,
    35%,
    43%,
    51%,
    58% {
        left: 41.2%;
        width: 16px;
        height: 20px;
        background: #FF9800;
    }
}

@keyframes changeto-lower {

    0%,
    70%,
    90% {
        padding: 0px;
        display: inline-block;
        border-radius: 100%;
        background: #673C63;
        border-width: 0 0 0 0;
        border: 0px solid #673C63;
        transform: translate(-90%, 0%);
    }

    71%,
    89% {
        background: none;
        border: solid #673C63;
        border-radius: 0px;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 1px;
        float: left;
        transform-origin: bottom left;
        transform: rotate(-45deg) translate(-50%, -65%);
        -webkit-transform: rotate(-45deg) translate(-50%, -65%);
    }
}

@keyframes changeto-greater {

    0%,
    70%,
    90% {
        top: 50%;
        padding: 0px;
        display: inline-block;
        border-radius: 100%;
        background: #673C63;
        border-width: 0 0 0 0;
        border: 0px solid #673C63;
        transform: translate(-80%, 0%);
    }

    71%,
    89% {
        top: 30%;
        background: none;
        border: solid #673C63;
        border-radius: 0px;
        border-width: 0 2px 2px 0;
        display: inline-block;
        padding: 1px;
        float: left;
        transform-origin: bottom left;
        transform: rotate(135deg) translate(-80%, 20%);
        -webkit-transform: rotate(135deg) translate(-80%, 20%);
    }
}
</style>