<template>
    <ul class="nav">
        <li>
            <span>消息</span>
            <ul>
                <li>回复我的</li>
                <li>收到的赞</li>
                <li>我的消息</li>
            </ul>
        </li>
        <li>
            <span>动态</span>
        </li>
        <li>
            <span>收藏</span>
            <ul>
                <li>默认收藏夹</li>
                <li>UI设计</li>
                <li>懂得都懂</li>
            </ul>
        </li>
        <li>
            <span>投稿</span>
            <ul>
                <li>专栏投稿</li>
                <li>音频投稿</li>
                <li>贴纸投稿</li>
                <li>视频投稿</li>
                <li>投稿管理</li>
            </ul>
        </li>
    </ul>
</template>

<script setup lang="ts">
// 逻辑
</script>

<style scoped lang="scss">
.nav {
    margin: 1rem 0;
    padding: 0;
    font-size: 20px;
    display: flex;
    justify-content: center;
    color: #f4f1de;
    list-style: none;
    user-select: none;

    li {
        margin: 0;
        padding: 0;
        background-color: #50536e;
        // width: 170px;
        flex: 1;
        height: 65px;
        text-align: center;
        line-height: 65px;
        transition: .3s;
        cursor: pointer;

        span {
            margin: 0;
            padding: 0;
        }

        &:hover {
            background-color: #d15a39;

            li {
                height: 65px;
                opacity: 1;
                transform: translateY(0);
            }
        }

        ul {
            margin: 0;
            padding: 0;
            list-style: none;
            position: relative;
            z-index: 3;

            li {
                height: 0;
                transition: .2s;
                opacity: 0;
                transform: translateY(-65px);
                background-color: #d15a39;
                margin: 0;
                padding: 0;
                &:hover {
                    background-color: #56281c;
                }
            }
        }

    }
}
</style>