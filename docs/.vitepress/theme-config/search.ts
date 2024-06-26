import { DefaultTheme } from "vitepress";

export const search: | { provider: 'local'; options?: DefaultTheme.LocalSearchOptions }
    | { provider: 'algolia'; options: DefaultTheme.AlgoliaSearchOptions } = {
    provider: 'local',
    options: {
        locales: {
            root: {
                translations: {
                    button: {
                        buttonText: '搜索',
                        buttonAriaLabel: '搜索'
                    },
                    modal: {
                        noResultsText: '无法找到相关结果',
                        resetButtonTitle: '清除查询条件',
                        footer: {
                            selectText: '选择',
                            navigateText: '切换'
                        }
                    }
                }
            }
        }
    }
}