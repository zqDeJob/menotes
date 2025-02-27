export const getDemos = function () {
    return [
      {
        text: '简介',
        items: [{ text: '为什么整理？', link: 'start' }],
      },
      {
        text: '完整demo',
        base: '/demos/html-',
        items: [
          { text: '图片和base64互转', link: 'img-convert-base64' },
        ],
      },
      {
        text: 'nodeJs 相关',
        base: '/demos/node-',
        items: [
          { text: '读取文件夹下的所有内容并存到一个文件', link: 'mergefile' },
        ],
      },
      {
        text: 'JavaScript 相关',
        base: '/demos/js-',
        items: [
          {
            text: 'base64 和blob 上传与互换',
            link: 'base64',
          },
          {
            text: '利用blob 加密防下载',
            link: 'blob',
          }
        ]
      },
      {
        text: 'css 相关',
        base: '/demos/css-',
        items: []
      },
    ];
  };
  