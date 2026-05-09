window.HD2_SITE = {
  nav: [
    { label: '首页', href: 'index.html' },
    { label: '新手', href: 'newbie.html' },
    { label: '武器', href: 'weapons.html' },
    { label: '任务', href: 'missions.html' }
  ],
  footer: '建议下一步：接入文章数据、标签筛选、搜索联想、版本更新时间和推荐权重。'
};

window.HD2_UTILS = {
  getArticle(id) {
    return (window.HD2_CONTENTS || []).find(item => item.id === id);
  },
  relatedArticles(article) {
    return (window.HD2_CONTENTS || []).filter(item => article.related?.includes(item.id));
  }
};