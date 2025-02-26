export const getDemos = function () {
    return [
      {
        text: '简介',
        items: [{ text: '为什么整理？', link: 'start' }],
      },
      {
        text: 'html',
        base: '/demos/html-',
        items: [
          { text: '图片和base64互转', link: 'img-convert-base64' },
        ],
      }
    ];
  };
  