import { DefaultTheme } from "vitepress"

const sidebar:DefaultTheme.SidebarItem[] = [
    {
        text: "DEMO",
        items: [
            {
                text: "导航栏",
                link: "/frontend/navigation-bar",
            },
            {
                text: "动画",
                link: "/frontend/animation",
            }
        ]
    }
]

export default sidebar