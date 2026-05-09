window.HD2_CONTENTS = [
  {
    id: 'newbie-quick-start',
    slug: 'newbie-quick-start',
    title: '新手 10 分钟入门',
    category: '新手',
    tags: ['新手', '入坑', '开荒'],
    updatedAt: '2026-05-09',
    summary: '值不值得玩、前期做什么、先解锁什么、如何少踩坑。',
    body: [
      '先学会活下来：移动、掩体、撤离路线、补给管理，是新手第一优先级。',
      '再解锁泛用武器：优先拿稳定、容错高的武器，而不是只追求看起来最强。',
      '最后才是追求高难：先把任务目标、团队协作、资源管理弄懂，再进阶。'
    ],
    related: ['best-loadout', 'enemy-factions', 'single-player'],
    route: 'newbie.html'
  },
  {
    id: 'best-loadout',
    slug: 'best-loadout',
    title: '当前版本最稳配装',
    category: '版本',
    tags: ['版本', '配装', '武器'],
    updatedAt: '2026-05-09',
    summary: '围绕版本环境整理武器、护甲、投掷物和 Stratagem 组合。',
    body: [
      '配装推荐必须按场景拆分：清杂、对甲、控场、容错。',
      '对新手来说，最稳的配装不是伤害最高的，而是最容易完成目标、最不容易暴毙的。',
      '后续建议增加每个配装的使用门槛、适用阵营与推荐人数。'
    ],
    related: ['newbie-quick-start', 'enemy-factions', 'weapon-guide'],
    route: 'weapons.html'
  },
  {
    id: 'enemy-factions',
    slug: 'enemy-factions',
    title: '虫族 / 机器人打法',
    category: '打法',
    tags: ['虫族', '机器人', '打法'],
    updatedAt: '2026-05-09',
    summary: '按阵营拆解战术、跑位、清怪、保命和撤离思路。',
    body: [
      '虫族打法重视清杂和撤离压力管理，机器人打法重视远程压制和对甲。',
      '不同阵营最好使用不同武器和 Stratagem 组合，避免一套打法通吃。',
      '建议在详情页继续拆成“虫族篇”和“机器人篇”两个子页面。'
    ],
    related: ['best-loadout', 'mission-guide', 'team-roles'],
    route: 'missions.html'
  },
  {
    id: 'single-player',
    slug: 'single-player',
    title: '单刷 / 双排 / 四排',
    category: '模式',
    tags: ['单人', '开黑', '队伍'],
    updatedAt: '2026-05-09',
    summary: '不同人数的打法区别、职责分工和沟通重点。',
    body: [
      '单人更强调生存、撤离和资源管理。',
      '双排要做好主输出与控场的角色分工。',
      '四排则应明确补给、火力、救援、推进四个职责。'
    ],
    related: ['newbie-quick-start', 'team-roles', 'mission-guide'],
    route: 'newbie.html'
  },
  {
    id: 'weapon-guide',
    slug: 'weapon-guide',
    title: '当前版本强势武器推荐',
    category: '武器',
    tags: ['版本', '武器', '高优先级'],
    updatedAt: '2026-05-09',
    summary: '按清杂、对甲、控场、容错四类场景整理。',
    body: [
      '武器推荐不应只看伤害数值，还要看弹药、后坐力、容错率和阵营适配度。',
      '首页建议展示“适合什么人”和“适合什么场景”，让用户快速决策。',
      '后续可扩展成武器数据库，支持筛选和排序。'
    ],
    related: ['best-loadout', 'enemy-factions', 'single-player'],
    route: 'weapons.html'
  },
  {
    id: 'mission-guide',
    slug: 'mission-guide',
    title: '防守 / 撤离任务',
    category: '任务',
    tags: ['任务', '防守', '撤离'],
    updatedAt: '2026-05-09',
    summary: '最容易翻车的节点，优先给出保命和沟通策略。',
    body: [
      '防守任务要提前规划火力点和补给点。',
      '撤离任务则需要团队提前约定集合位置和呼叫节奏。',
      '后续详情页建议加入“常见翻车点”和“应对动作”。'
    ],
    related: ['enemy-factions', 'team-roles', 'best-loadout'],
    route: 'missions.html'
  },
  {
    id: 'team-roles',
    slug: 'team-roles',
    title: '团队分工模板',
    category: '团队',
    tags: ['开黑', '分工', '团队'],
    updatedAt: '2026-05-09',
    summary: '输出、控场、补给、救援四个角色的分配建议。',
    body: [
      '把团队分工写清楚，能显著提升随机队伍的通关率。',
      '建议提供“新手开黑模板”和“固定队模板”两个版本。',
      '也可以增加语音沟通模板，降低队友之间的信息差。'
    ],
    related: ['single-player', 'mission-guide', 'newbie-quick-start'],
    route: 'newbie.html'
  }
];
