import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: `gatsby-transformer-remark`,
  options: {
    // Footnotes mode (default: true)
    footnotes: true,
    // GitHub Flavored Markdown mode (default: true)
    gfm: true,
    // Add your gatsby-remark-* plugins here
    plugins: [],
    // Enable JS for https://github.com/jonschlinkert/gray-matter#optionsengines (default: false)
    // It's not advised to set this to "true" and this option will likely be removed in the future
    jsFrontmatterEngine: false,
  }
})
