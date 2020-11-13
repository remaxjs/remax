module.exports = {
  dynamicPages: true,
  plugins: [
    {
      onPageTemplate({ page, template }) {
        if (page === 'pages/about') {
          return '<view>hello</view>\n' + template;
        }
        return template;
      },
    },
  ],
};
