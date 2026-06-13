import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import { h } from 'vue'
import SiteFooter from './SiteFooter.vue'
import Home from './Home.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout, null, {
      // Structured footer shown on every page (replaces the Docusaurus footer)
      'layout-bottom': () => h(SiteFooter)
    })
  },
  enhanceApp({ app }) {
    app.component('Home', Home)
  }
} satisfies Theme
