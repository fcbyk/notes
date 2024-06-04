import { DefaultTheme } from "vitepress"
import sidebar_fe from "../../frontend/sidebar"
import sidebar_dl from "../../others/sidebar"

export const sidebar:DefaultTheme.Sidebar = {
    "/frontend/": sidebar_fe,
    "/others/":sidebar_dl,
    "/": [
        {
            text: "关于本站",
            link: "/",
        },
        {
            text: "域名由来",
            link: "/name",
        },
        {
            text: "关于作者",
            link: "/resume",
        },
        {
            text: "Q&A",
            link: "/chat-bot",
        }
    ]
}