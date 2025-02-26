export const getTools = function () {
  return [
    {
      text: '常用工具介绍',
      base: '/tools/start-',
      items: [
        { text: '网站资源', link: 'index' },
        { text: '浏览器插件', link: 'browser-plugins' },
      ],
    },
    {
      text: 'JavaScript',
      base: '/tools/js-',
      items: [
        { text: '表单验证集合', link: 'form' },
      ],
    },
    {
      text: 'Vue2',
      base: '/tools/vue2-',
      items: [
        { text: '工具1', link: 'hhh' },
        { text: '工具2', link: 'fff' },
      ],
    },
    {
      text: '其他',
      base: '/tools/other-',
      items: [{ text: '安全检测工具awvs', link: 'awvs' }],
    },
  ];
};
