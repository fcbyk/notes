import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "代码片段",
        items:[
            {
                text:"css",
                link:"/snippets/css/"
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