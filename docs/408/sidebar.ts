import { DefaultTheme } from "vitepress"

const sidebar:DefaultTheme.SidebarItem[] = [
    {
        text:"线性表",
        collapsed:true,
        items:[
            {
                text:"线性表的操作",
                link:"/408/Linearlist/algorithm"
            }
        ]
    }
]

export default sidebar