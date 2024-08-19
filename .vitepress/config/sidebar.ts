import { DefaultTheme } from "vitepress"
import frontend  from "../../docs/practice/frontend/sidebar"
import snippetsJs from "../../docs/snippets/js/sidebar"
import dS from "../../docs/snippets/ds/sidebar"

export const sidebar:DefaultTheme.Sidebar = {
    "/practice/frontend/": frontend,
    "/snippets/js/":snippetsJs,
    "/snippets/ds/linear-list": dS
}