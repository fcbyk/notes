import { DefaultTheme } from "vitepress"

const sidebar:DefaultTheme.SidebarItem[] = [
    {
        text: "阅读",
        collapsed: true,
        items: [
            {
                text: "CSS",
                link: "/frontend/notes/css"
            }
        ]
    },
    {
        text: "练习",
        collapsed: true,
        items: [
            {
                text: "导航栏",
                link: "/frontend/navigation-bar",
            },
            {
                text: "时钟",
                link: "/frontend/clock",
            },
            {
                text: "动画",
                link: "/frontend/animation",
            }
        ]
    }
]

export default sidebar