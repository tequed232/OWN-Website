import type { Locale } from "@/types/site";

export interface Dictionary {
  nav: {
    about: string;
    github: string;
    projects: string;
    social: string;
    activity: string;
    download: string;
    product: string;
    status: string;
    contact: string;
    home: string;
    menu: string;
    close: string;
    themeToggle: string;
  };
  hero: {
    eyebrow: string;
    titleLine1: string;
    titleLine2: string;
    titleAccent: string;
    tagline: string;
    primaryCta: string;
    secondaryCta: string;
    stats: {
      repos: string;
      followers: string;
      contributions: string;
    };
    scroll: string;
    dialHint: string;
  };
  draw: {
    kicker: string;
    title: string;
    description: string;
    cta: string;
    flagshipLabel: string;
  };
  github: {
    kicker: string;
    title: string;
    description: string;
    cta: string;
    less: string;
    more: string;
    snapshotNote: string;
    liveNote: string;
    contributionsSuffix: string;
  };
  projects: {
    kicker: string;
    title: string;
    description: string;
    openRepo: string;
  };
  social: {
    kicker: string;
    title: string;
    description: string;
  };
  activity: {
    kicker: string;
    title: string;
    description: string;
    cta: string;
    colDate: string;
    colType: string;
    colRepo: string;
  };
  contact: {
    kicker: string;
    title: string;
    idea: string;
    exploreProjects: string;
    contactMe: string;
    rights: string;
    motto: string;
  };
  cookie: {
    pill: string;
    title: string;
    body: string;
    acceptAll: string;
    necessaryOnly: string;
    rejectExtra: string;
    manage: string;
    savedPrefix: string;
    analytics: string;
    visitorLog: string;
    on: string;
    off: string;
  };
  product: {
    kicker: string;
    title: string;
    lead: string;
    featuresTitle: string;
    featuresSubtitle: string;
    features: { title: string; body: string; code: string }[];
    quickStartTitle: string;
    quickStartLead: string;
    goDownload: string;
    viewGithub: string;
    copy: string;
    copied: string;
  };
  download: {
    kicker: string;
    title: string;
    lead: string;
    latestTitle: string;
    latestFallback: string;
    allReleases: string;
    mirrorsTitle: string;
    mirrorsSubtitle: string;
    cliTitle: string;
    cliSubtitle: string;
    npmInstallLabel: string;
    npxRunLabel: string;
    copy: string;
    copied: string;
  };
  status: {
    kicker: string;
    title: string;
    lead: string;
    allOperational: string;
    degraded: string;
    operational: string;
    pending: string;
    lastUpdated: string;
    autoRefresh: string;
    sourceLabel: string;
    services: {
      web: { name: string; desc: string };
      api: { name: string; desc: string };
      ali: { name: string; desc: string };
      tencent: { name: string; desc: string };
    };
  };
}

export const DICTIONARIES: Record<Locale, Dictionary> = {
  zh: {
    nav: {
      about: "关于",
      github: "GitHub",
      projects: "项目",
      social: "社交",
      activity: "动态",
      download: "下载",
      product: "产品",
      status: "状态",
      contact: "联系",
      home: "首页",
      menu: "菜单",
      close: "关闭",
      themeToggle: "切换明暗主题",
    },
    hero: {
      eyebrow: "OWN · TEQUED.WIN · 个人数字枢纽",
      titleLine1: "Structure",
      titleLine2: "meets",
      titleAccent: "Humanity.",
      tagline: "探索。创造。成长。构建多智能体协作系统与开源工具——万物至简。",
      primaryCta: "探索项目",
      secondaryCta: "DeepSeek Harness",
      stats: {
        repos: "公开仓库",
        followers: "关注者",
        contributions: "近一年贡献",
      },
      scroll: "向下探索",
      dialHint: "精密径向索引 · 点击直达板块",
    },
    draw: {
      kicker: "01 · THE DRAW",
      title: "精选作品",
      description: "当前投入最多精力构建的核心系统与实验。",
      cta: "查看 GitHub",
      flagshipLabel: "当前主力构建",
    },
    github: {
      kicker: "02 · GITHUB",
      title: "开源贡献",
      description: "过去十二个月的公开贡献，逐日记录。",
      cta: "查看主页",
      less: "少",
      more: "多",
      snapshotNote: "公开快照数据 · 12 个月滚动窗口",
      liveNote: "GitHub GraphQL 实时同步",
      contributionsSuffix: "次公开贡献",
    },
    projects: {
      kicker: "03 · PROJECTS",
      title: "项目索引",
      description: "开源工具与实验，为实用而构建。",
      openRepo: "前往仓库",
    },
    social: {
      kicker: "04 · SOCIAL",
      title: "数字足迹",
      description: "各平台上的其他公开主页与入口。",
    },
    activity: {
      kicker: "05 · ACTIVITY",
      title: "最新动态",
      description: "来自 GitHub 的最新公开事件流水。",
      cta: "查看全部",
      colDate: "日期",
      colType: "事件",
      colRepo: "仓库",
    },
    contact: {
      kicker: "06 · THE WORLD",
      title: "世界.",
      idea: "探索更多，跨越地平线。",
      exploreProjects: "探索项目",
      contactMe: "联系我",
      rights: "© 2026 OWN. All rights reserved.",
      motto: "GRID / TYPE / FORM — 万物至简",
    },
    cookie: {
      pill: "Cookie 偏好",
      title: "Cookie 与本地存储",
      body: "本站仅在你的设备本地使用 localStorage：必要项维持基本功能；附加项（站点分析与访客来源记录）默认关闭，需你明确同意，且不会上传至无关外部服务。",
      acceptAll: "全部接受",
      necessaryOnly: "仅必要",
      rejectExtra: "拒绝附加",
      manage: "管理偏好",
      savedPrefix: "偏好已保存。",
      analytics: "分析",
      visitorLog: "访客记录",
      on: "开",
      off: "关",
    },
    product: {
      kicker: "PRODUCT · DEEPSEEK HARNESS",
      title: "DeepSeek Harness",
      lead: "一套面向 DeepSeek 模型工作流的执行与评测工具：把模型调用、任务编排与结果回收收敛到一条可复现的命令行链路。",
      featuresTitle: "核心架构特性",
      featuresSubtitle: "以确定性与可复现为核心设计的工程链路。",
      features: [
        {
          code: "01",
          title: "任务编排",
          body: "以声明式配置描述执行链路，任务依赖与重试策略由 Harness 统一调度，减少胶水脚本。",
        },
        {
          code: "02",
          title: "结果可复现",
          body: "每次运行落盘结构化快照，参数、版本与输出一一对应，评测结果可追溯、可回放。",
        },
        {
          code: "03",
          title: "多后端接入",
          body: "统一接口对接本地与远端推理后端，切换部署形态不改上层配置。",
        },
        {
          code: "04",
          title: "开源优先",
          body: "代码和 issue 全部公开在 GitHub，镜像与 Release 渠道随版本同步发布。",
        },
      ],
      quickStartTitle: "快速开始",
      quickStartLead: "通过 npm 安装并在命令行直接初始化工作流。",
      goDownload: "前往下载页",
      viewGithub: "查看 GitHub",
      copy: "复制",
      copied: "已复制",
    },
    download: {
      kicker: "DOWNLOAD · DEEPSEEK HARNESS",
      title: "获取 DeepSeek Harness",
      lead: "从 GitHub Releases 获取最新构建，或通过 npm 官方源 / 中国大陆镜像源安装。",
      latestTitle: "最新 Release",
      latestFallback: "暂无法获取最新 Release（API 不可用或仓库尚未发布）。可前往 GitHub Releases 页面手动查看。",
      allReleases: "查看全部 Releases",
      mirrorsTitle: "分发渠道与镜像",
      mirrorsSubtitle: "多渠道同步分发，按网络环境自由选择。",
      cliTitle: "命令行安装",
      cliSubtitle: "一键复制命令到终端执行。",
      npmInstallLabel: "npm 全局/项目安装",
      npxRunLabel: "npx 直接运行",
      copy: "复制",
      copied: "已复制",
    },
    status: {
      kicker: "STATUS · INFRASTRUCTURE",
      title: "服务状态",
      lead: "OWN 基础设施实时可用性 — 门户、API 与 ECS 节点。",
      allOperational: "全部系统运行正常",
      degraded: "部分节点待采集",
      operational: "运行正常",
      pending: "待部署",
      lastUpdated: "最后更新",
      autoRefresh: "每 30 秒自动刷新",
      sourceLabel: "数据源",
      services: {
        web: { name: "Web 门户", desc: "tequed.win · 个人门户前端（Cloudflare Workers）" },
        api: { name: "Metrics API", desc: "状态数据接口 /api/admin/metrics" },
        ali: { name: "ECS · 阿里云", desc: "杭州节点 · metrics agent（10 秒推送）" },
        tencent: { name: "ECS · 腾讯云", desc: "预留通道 · 采集 agent 待部署" },
      },
    },
  },
  en: {
    nav: {
      about: "About",
      github: "GitHub",
      projects: "Projects",
      social: "Social",
      activity: "Activity",
      download: "Download",
      product: "Product",
      status: "Status",
      contact: "Contact",
      home: "Home",
      menu: "Menu",
      close: "Close",
      themeToggle: "Toggle light / dark theme",
    },
    hero: {
      eyebrow: "OWN · TEQUED.WIN · PERSONAL DIGITAL HUB",
      titleLine1: "Structure",
      titleLine2: "meets",
      titleAccent: "Humanity.",
      tagline: "Explore. Create. Grow. Building multi-agent orchestration systems and open-source tools — less decoration, stronger structure.",
      primaryCta: "Explore Projects",
      secondaryCta: "DeepSeek Harness",
      stats: {
        repos: "REPOSITORIES",
        followers: "FOLLOWERS",
        contributions: "CONTRIBUTIONS",
      },
      scroll: "SCROLL",
      dialHint: "Precision Radial Index · Select a node",
    },
    draw: {
      kicker: "01 · THE DRAW",
      title: "Featured Work",
      description: "The flagship build currently receiving the most focus and engineering craft.",
      cta: "View GitHub",
      flagshipLabel: "PRIMARY BUILD",
    },
    github: {
      kicker: "02 · GITHUB",
      title: "Contributions",
      description: "Public contributions over the last twelve months, tracked daily.",
      cta: "View Profile",
      less: "Less",
      more: "More",
      snapshotNote: "Public snapshot · rolling 12-month window",
      liveNote: "Synced via GitHub GraphQL",
      contributionsSuffix: "public contributions",
    },
    projects: {
      kicker: "03 · PROJECTS",
      title: "Project Index",
      description: "Open-source tools and experiments, engineered to be used.",
      openRepo: "Repository",
    },
    social: {
      kicker: "04 · SOCIAL",
      title: "Across Platforms",
      description: "Where else to find me across the web.",
    },
    activity: {
      kicker: "05 · ACTIVITY",
      title: "Recent Activity",
      description: "Latest public events streamed from GitHub.",
      cta: "View All",
      colDate: "DATE",
      colType: "EVENT",
      colRepo: "REPOSITORY",
    },
    contact: {
      kicker: "06 · THE WORLD",
      title: "The World.",
      idea: "Explore more, beyond the horizon.",
      exploreProjects: "Explore Projects",
      contactMe: "Contact",
      rights: "© 2026 OWN. All rights reserved.",
      motto: "GRID / TYPE / FORM — LESS DECORATION",
    },
    cookie: {
      pill: "Cookie Prefs",
      title: "Cookies & Local Storage",
      body: "This site uses localStorage strictly on your device: essential items power theme and language; optional items (analytics & visitor log) stay off unless you explicitly opt in.",
      acceptAll: "Accept All",
      necessaryOnly: "Essential Only",
      rejectExtra: "Decline Optional",
      manage: "Manage",
      savedPrefix: "Preferences saved.",
      analytics: "Analytics",
      visitorLog: "Visitor Log",
      on: "On",
      off: "Off",
    },
    product: {
      kicker: "PRODUCT · DEEPSEEK HARNESS",
      title: "DeepSeek Harness",
      lead: "An execution and evaluation toolkit for DeepSeek model workflows — unifying model calls, task orchestration, and reproducible snapshots into one CLI pipeline.",
      featuresTitle: "Core Architecture",
      featuresSubtitle: "Designed around determinism, traceability, and zero glue scripts.",
      features: [
        {
          code: "01",
          title: "Task Orchestration",
          body: "Describe execution pipelines declaratively; dependencies and retry policies are scheduled by Harness.",
        },
        {
          code: "02",
          title: "Reproducible Runs",
          body: "Every run writes structured snapshots binding parameters, versions, and outputs for clean replay.",
        },
        {
          code: "03",
          title: "Multi-Backend",
          body: "Unified interface across local and remote inference backends without changing upper configs.",
        },
        {
          code: "04",
          title: "Open-Source First",
          body: "Source code and issues live openly on GitHub, with synchronized npm and mirror releases.",
        },
      ],
      quickStartTitle: "Quick Start",
      quickStartLead: "Install via npm and run your first reproducible workflow.",
      goDownload: "Go to Download",
      viewGithub: "View on GitHub",
      copy: "Copy",
      copied: "Copied",
    },
    download: {
      kicker: "DOWNLOAD · DEEPSEEK HARNESS",
      title: "Get DeepSeek Harness",
      lead: "Download official builds from GitHub Releases or install via npm registry and China mirror.",
      latestTitle: "Latest Release",
      latestFallback: "Unable to fetch the latest release right now (API unavailable or no release published yet). Visit GitHub Releases directly.",
      allReleases: "All Releases",
      mirrorsTitle: "Distribution & Mirrors",
      mirrorsSubtitle: "Choose the fastest distribution channel for your environment.",
      cliTitle: "CLI Installation",
      cliSubtitle: "Copy and run directly in your terminal.",
      npmInstallLabel: "Install with npm",
      npxRunLabel: "Run directly with npx",
      copy: "Copy",
      copied: "Copied",
    },
    status: {
      kicker: "STATUS · INFRASTRUCTURE",
      title: "System Status",
      lead: "Real-time availability across OWN portal, API, and ECS nodes.",
      allOperational: "All Systems Operational",
      degraded: "Partial Telemetry Pending",
      operational: "Operational",
      pending: "Pending",
      lastUpdated: "Last updated",
      autoRefresh: "Auto-refreshes every 30s",
      sourceLabel: "Source",
      services: {
        web: { name: "Web Portal", desc: "tequed.win · Personal hub frontend (Cloudflare Workers)" },
        api: { name: "Metrics API", desc: "Status telemetry endpoint /api/admin/metrics" },
        ali: { name: "ECS · Alibaba Cloud", desc: "Hangzhou node · metrics agent (10s push)" },
        tencent: { name: "ECS · Tencent Cloud", desc: "Reserved channel · agent deployment pending" },
      },
    },
  },
  ja: {
    nav: {
      about: "概要",
      github: "GitHub",
      projects: "プロジェクト",
      social: "ソーシャル",
      activity: "アクティビティ",
      download: "ダウンロード",
      product: "プロダクト",
      status: "ステータス",
      contact: "連絡先",
      home: "ホーム",
      menu: "メニュー",
      close: "閉じる",
      themeToggle: "ライト / ダーク切替",
    },
    hero: {
      eyebrow: "OWN · TEQUED.WIN · パーソナルハブ",
      titleLine1: "Structure",
      titleLine2: "meets",
      titleAccent: "Humanity.",
      tagline: "探究。創造。成長。マルチエージェント協調システムとオープンソースツールを構築しています。",
      primaryCta: "プロジェクトを見る",
      secondaryCta: "DeepSeek Harness",
      stats: {
        repos: "リポジトリ",
        followers: "フォロワー",
        contributions: "年間コントリビューション",
      },
      scroll: "スクロール",
      dialHint: "精密ラジアルインデックス · 各セクションへ移動",
    },
    draw: {
      kicker: "01 · THE DRAW",
      title: "注目プロジェクト",
      description: "現在もっとも注力して構築しているコアプロジェクト。",
      cta: "GitHub を見る",
      flagshipLabel: "主力ビルド",
    },
    github: {
      kicker: "02 · GITHUB",
      title: "コントリビューション",
      description: "過去 12 ヶ月間の公開コントリビューションを日次で記録。",
      cta: "プロフィールを見る",
      less: "少",
      more: "多",
      snapshotNote: "公開スナップショット · 過去 12 ヶ月",
      liveNote: "GitHub GraphQL 同期済み",
      contributionsSuffix: "件のコントリビューション",
    },
    projects: {
      kicker: "03 · PROJECTS",
      title: "プロジェクト一覧",
      description: "実用のために構築したオープンソースツールと実験。",
      openRepo: "リポジトリ",
    },
    social: {
      kicker: "04 · SOCIAL",
      title: "ソーシャル",
      description: "各プラットフォーム上の公式アカウント。",
    },
    activity: {
      kicker: "05 · ACTIVITY",
      title: "最新アクティビティ",
      description: "GitHub 上の最新公開イベント。",
      cta: "すべて見る",
      colDate: "日付",
      colType: "種別",
      colRepo: "リポジトリ",
    },
    contact: {
      kicker: "06 · THE WORLD",
      title: "世界.",
      idea: "地平線の先へ、さらなる探究を。",
      exploreProjects: "プロジェクトを見る",
      contactMe: "連絡先",
      rights: "© 2026 OWN. All rights reserved.",
      motto: "GRID / TYPE / FORM — 万物至簡",
    },
    cookie: {
      pill: "Cookie 設定",
      title: "Cookie とローカルストレージ",
      body: "当サイトは端末内の localStorage のみを使用します。必須項目はテーマと言語設定を保持し、追加項目は明示的な同意がない限り無効です。",
      acceptAll: "すべて許可",
      necessaryOnly: "必須のみ",
      rejectExtra: "追加を拒否",
      manage: "設定管理",
      savedPrefix: "設定を保存しました。",
      analytics: "分析",
      visitorLog: "訪問記録",
      on: "オン",
      off: "オフ",
    },
    product: {
      kicker: "PRODUCT · DEEPSEEK HARNESS",
      title: "DeepSeek Harness",
      lead: "DeepSeek モデルワークフローのための実行・評価ツールキット。モデル呼び出し、タスク編成、結果の再現を一本の CLI パイプラインに統合します。",
      featuresTitle: "コアアーキテクチャ",
      featuresSubtitle: "決定論的な再現性と簡潔な構成を重視した設計。",
      features: [
        {
          code: "01",
          title: "タスク編成",
          body: "宣言的設定で実行パイプラインを定義し、依存関係とリトライを統一管理します。",
        },
        {
          code: "02",
          title: "再現可能な実行",
          body: "実行ごとに構造化スナップショットを保存し、パラメータと出力を追跡可能にします。",
        },
        {
          code: "03",
          title: "マルチバックエンド",
          body: "ローカルとリモートの推論バックエンドを統一インターフェースで切り替えられます。",
        },
        {
          code: "04",
          title: "オープンソース優先",
          body: "コードと Issue はすべて GitHub で公開され、npm およびミラーで同期配信されます。",
        },
      ],
      quickStartTitle: "クイックスタート",
      quickStartLead: "npm でインストールし、CLI からすぐに開始できます。",
      goDownload: "ダウンロードへ",
      viewGithub: "GitHub を見る",
      copy: "コピー",
      copied: "コピー済み",
    },
    download: {
      kicker: "DOWNLOAD · DEEPSEEK HARNESS",
      title: "DeepSeek Harness を入手",
      lead: "GitHub Releases から最新ビルドを取得するか、npm / ミラー経由でインストールできます。",
      latestTitle: "最新リリース",
      latestFallback: "最新リリースを取得できませんでした（API 未応答または未公開）。GitHub Releases ページからご確認ください。",
      allReleases: "すべてのリリース",
      mirrorsTitle: "配布チャネル・ミラー",
      mirrorsSubtitle: "ネットワーク環境に合わせて選択できます。",
      cliTitle: "CLI インストール",
      cliSubtitle: "ワンクリックでコピーしてターミナルで実行。",
      npmInstallLabel: "npm インストール",
      npxRunLabel: "npx 直接実行",
      copy: "コピー",
      copied: "コピー済み",
    },
    status: {
      kicker: "STATUS · INFRASTRUCTURE",
      title: "サービスステータス",
      lead: "OWN インフラストラクチャの稼働状況 — ポータル、API、ECS ノード。",
      allOperational: "全システム正常稼働中",
      degraded: "一部ノード待機中",
      operational: "正常稼働",
      pending: "準備中",
      lastUpdated: "最終更新",
      autoRefresh: "30 秒ごとに自動更新",
      sourceLabel: "データソース",
      services: {
        web: { name: "Web ポータル", desc: "tequed.win · フロントエンド (Cloudflare Workers)" },
        api: { name: "Metrics API", desc: "ステータス API /api/admin/metrics" },
        ali: { name: "ECS · Alibaba Cloud", desc: "杭州ノード · metrics agent (10秒間隔)" },
        tencent: { name: "ECS · Tencent Cloud", desc: "予備チャネル · エージェント導入待ち" },
      },
    },
  },
};
