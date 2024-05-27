import { DefaultTheme } from "vitepress";

export const nav: DefaultTheme.NavItem[] = [
    {
        text: "前端",
        link: "/frontend/navigation-bar"
    },
    {
        text: "408",
        items: [
            {
                text: "数据结构与算法",
                link: "/408/Linearlist/algorithm"
            }
        ]
    },
    {
        text: "下载",
        link: "/download/index.md"
    },
    {
        text: "书签",
        link: "/bookmarks/"
    }
]