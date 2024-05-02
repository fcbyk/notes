import { DefaultTheme } from "vitepress"
import sidebar_408 from "../../408/sidebar"
import sidebar_fe from "../../frontend/sidebar"

export const sidebar:DefaultTheme.Sidebar = {
    "/408/": sidebar_408,
    "/frontend/": sidebar_fe,
    "/": [
        {
            text: "关于本站",
            link: "/",
        },
        {
            text: "域名由来",
            link: "/name",
        }
    ]
}