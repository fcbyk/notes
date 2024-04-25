<template>
    <div class="web-pages">
        <nav>
            <ul class="menus">
                <li v-for="(category, index) in categories" :key="index" class="li">
                    <i :class="category.icon" aria-hidden="true"></i>
                    {{ category.name }}
                    <ul>
                        <li v-for="(component, cIndex) in category.components" :key="cIndex">{{ component }}</li>
                    </ul>
                </li>
            </ul>
        </nav>
        <div class="content">网页主体</div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Category {
    name: string;
    icon: string;
    components: string[];
}

const categories = ref<Category[]>([
    {
        name: '基础组件',
        icon: 'fa fa-th-large',
        components: ['Button 按钮', 'Cell 单元格', 'Icon 图标', 'Image 图片', 'Layout 布局', 'Popup 弹出层', 'Toast 轻提示']
    },
    {
        name: '表单组件',
        icon: 'fa fa-check-square',
        components: ['Calendar 日历', 'Cascader 级联选择', 'Checkbox 复选框', 'Field 输入框', 'Picker 选择器', 'Radio 单选框', 'Rate 评分', 'Slider 滑块', 'Stepper 步进器', 'Switch 开关']
    },
    {
        name: '反馈组件',
        icon: 'fa fa-comment',
        components: ['Dialog 弹出框', 'Loading 加载', 'Notify 消息通知', 'Overlay 遮罩层']
    },
    {
        name: '展示组件',
        icon: 'fa fa-tags',
        components: ['Badge 徽标', 'Circle 环形进度条', 'Collapse 折叠面板', 'CountDown 倒计时', 'List 列表', 'NoticeBar 通知栏', 'Progress 进度条', 'Steps 步骤条', 'Tag 标签']
    },
    {
        name: '导航组件',
        icon: 'fa fa-bars',
        components: ['Grid 宫格', 'IndexBar 索引栏', 'NavBar 导航栏', 'Pagination 分页', 'Sidebar 侧边导航', 'Tab 标签页', 'Tabbar 标签栏', 'TreeSelect 分类选择']
    }
]);
</script>

<style scoped lang="scss">
ul {
    list-style: none;
}

.web-pages {
    position: relative;
    overflow: hidden;
    border-radius: 20px;
    margin: 1rem 0;
    border: #c584b3 solid 1px;
    width: 100%;
    display: flex;

    .content {
        line-height: 650px;
        text-align: center;
        flex-grow: 1;
        overflow: hidden;
        white-space: nowrap;
    }
}

nav {
    position: relative;
    width: 300px;
    height: 650px;
    background-color: #c584b3;
    overflow: hidden;

    .menus {
        color: #fff;
        padding: 0;

        .li {
            letter-spacing: 2px;
            font-size: 17px;
            font-weight: 600;
            padding: 16px 0;
            transition: 0.3s;

            &:hover {
                background-color: #d2a6c6;

                ul {
                    width: 250px;
                }
            }

            .fa {
                font-size: 20px;
                width: 50px;
                height: 20px;
                text-align: center;
                margin-left: 5px;
            }

            ul {
                width: 0;
                height: 650px;
                padding: 16px 0;
                margin: 0;
                background-color: #a06993;
                position: absolute;
                top: 0;
                right: 0;
                overflow: hidden;
                transition: 0.3s;

                li {
                    padding: 16px 24px;
                    white-space: nowrap;
                    transition: 0.3s;

                    &:hover {
                        background-color: #c28fb4;
                    }
                }
            }
        }
    }
}
</style>