import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "代码片段",
        items:[
            {
                text:"JavaScript",
                link:"/snippets/js/"
            },
            {
                text:"数据结构",
                link:"/snippets/ds/linear-list"
            }
        ]
    },
    {
        text: "练习",
        items:[
            {
                text:"前端",
                link:"/practice/frontend/navigation-bar"
            }
        ]
    }
]