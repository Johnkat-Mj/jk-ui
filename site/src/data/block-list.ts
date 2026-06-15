interface Block {
  name: string
  preview: string
}

export interface BlockItem {
  key: string
  group: "application" | "marketing",
  title: string
  description: string
  illustrations: {
    light: string
    dark: string
  }
  blocks: Record<string, Block>
}

export const all_blocks: BlockItem[] = [
  {
    key: 'login-form',
    title: 'Login',
    group: "application",
    description: 'User login form components with various layouts and styles',
    illustrations: {
      light: '/illustrations/login-light.webp',
      dark: '/illustrations/login-dark.webp'
    },
    blocks: {
      login01: {
        name: 'login01',
        preview: '/preview-ui/login01'
      },
      login02: {
        name: 'login02',
        preview: '/preview-ui/login02'
      },
      login03: {
        name: 'login03',
        preview: '/preview-ui/login03'
      }
    }
  },
  {
    key: 'signup-form',
    group: "application",
    title: 'Signup',
    description: 'User registration and signup form components',
    illustrations: {
      light: '/illustrations/signup-light.webp',
      dark: '/illustrations/signup-dark.webp'
    },
    blocks: {
      signup01: {
        name: 'signup01',
        preview: '/preview-ui/signup01'
      }
    }
  },
 {
    key: 'sidebar',
    group: "application",
    title: 'Sidebar',
    description: 'Navigation sidebar components with different layouts and styles',
    illustrations: {
      light: '/illustrations/sidebar-light.webp',
      dark: '/illustrations/sidebar-dark.webp'
    },
    blocks: {
      sidebar01: {
        name: 'sidebar01',
        preview: '/preview-ui/sidebar01'
      },
      sidebar02: {
        name: 'sidebar02',
        preview: '/preview-ui/sidebar02'
      },
      sidebar03: {
        name: 'sidebar03',
        preview: '/preview-ui/sidebar03'
      },
      sidebar04: {
        name: 'sidebar04',
        preview: '/preview-ui/sidebar04'
      },
      sidebar05: {
        name: 'sidebar05',
        preview: '/preview-ui/sidebar05'
      }
    }
  },
  {
    key: 'auth-form',
    group: "application",
    title: 'Auth',
    description: 'Authentication components including password reset, confirmation, and OTP forms',
    illustrations: {
      light: '/illustrations/otp-light.webp',
      dark: '/illustrations/otp-dark.webp'
    },
    blocks: {
      otp01: {
        name: 'otp01',
        preview: '/preview-ui/otp01'
      }
    }
  },
  {
    key: 'headers',
    group: "application",
    title: 'Header nav',
    description: 'Navigation header',
    illustrations: {
      light: '/illustrations/header-light.webp',
      dark: '/illustrations/header-dark.webp'
    },
    blocks: {
      header01: {
        name: 'header01',
        preview: '/preview-ui/header01'
      },
      header02: {
        name: 'header02',
        preview: '/preview-ui/header02'
      },
      header03: {
        name: 'header03',
        preview: '/preview-ui/header03'
      }
    }
  },
  {
    key: 'app-table',
    group: "application",
    title: 'Table',
    description: 'Application Table...',
    illustrations: {
      light: '/illustrations/table-light.webp',
      dark: '/illustrations/table-dark.webp'
    },
    blocks: {
      table01: {
        name: 'table01',
        preview: '/preview-ui/table01'
      },
      table02: {
        name: 'table02',
        preview: '/preview-ui/table02'
      },
      table03: {
        name: 'table03',
        preview: '/preview-ui/table03'
      }
    }
  },
  {
    key: 'application-shell',
    group: "application",
    title: 'Application shell',
    description: 'Application shells...',
    illustrations: {
      light: '/illustrations/shell-light.webp',
      dark: '/illustrations/shell-dark.webp'
    },
    blocks: {
      shell01: {
        name: 'shell01',
        preview: '/preview-ui/shell01'
      }
    }
  },
  {
    key: 'dash-card-kpi',
    group: "application",
    title: 'Dash KPI',
    description: 'KPI cards',
    illustrations: {
      light: '/illustrations/kpi-light.webp',
      dark: '/illustrations/kpi-dark.webp'
    },
    blocks: {
      kpi01: {
        name: 'kpi01',
        preview: '/preview-ui/kpi01'
      },
      kpi02: {
        name: 'kpi02',
        preview: '/preview-ui/kpi02'
      }
      ,
      kpi03: {
        name: 'kpi03',
        preview: '/preview-ui/kpi03'
      }
    }
  },
  {
    key: 'empty-states',
    group: "application",
    title: 'Empty States',
    description: 'Empty stated...',
    illustrations: {
      light: '/illustrations/empty-state-light.webp',
      dark: '/illustrations/empty-state-dark.webp'
    },
    blocks: {
      emptyState01: {
        name: 'empty-state01',
        preview: '/preview-ui/empty-state01'
      }
    }
  },
  {
    key: 'widgets',
    group: "application",
    title: 'Widgets',
    description: 'Widgets card...',
    illustrations: {
      light: '/illustrations/activities-light.webp',
      dark: '/illustrations/activities-dark.webp'
    },
    blocks: {
      activity01: {
        name: 'activity01',
        preview: '/preview-ui/activity01'
      }
    }
  },
  {
    key: 'hero-sections',
    group: "marketing",
    title: 'Hero Sections',
    description: 'Hero sections...',
    illustrations: {
      light: '/illustrations/activities-light.webp',
      dark: '/illustrations/activities-dark.webp'
    },
    blocks: {
      hero01: {
        name: 'hero01',
        preview: '/preview-ui/hero01'
      },
      hero02: {
        name: 'hero02',
        preview: '/preview-ui/hero02'
      },
      hero03: {
        name: 'hero03',
        preview: '/preview-ui/hero03'
      },
    }
  },
  {
    key: 'features',
    group: "marketing",
    title: 'Features',
    description: 'Features sections...',
    illustrations: {
      light: '/illustrations/activities-light.webp',
      dark: '/illustrations/activities-dark.webp'
    },
    blocks: {
      features01: {
        name: 'features01',
        preview: '/preview-ui/features01'
      }
    }
  },
  {
    key: 'pricing',
    group: "marketing",
    title: 'Pricing',
    description: 'Features sections...',
    illustrations: {
      light: '/illustrations/activities-light.webp',
      dark: '/illustrations/activities-dark.webp'
    },
    blocks: {
      pricing01: {
        name: 'pricing01',
        preview: '/preview-ui/pricing01'
      },
      pricing02: {
        name: 'pricing02',
        preview: '/preview-ui/pricing02'
      },
      pricing03: {
        name: 'pricing03',
        preview: '/preview-ui/pricing03'
      }
    }
  },
  {
    key: 'content',
    group: "marketing",
    title: 'Content',
    description: 'Features sections...',
    illustrations: {
      light: '/illustrations/activities-light.webp',
      dark: '/illustrations/activities-dark.webp'
    },
    blocks: {
      content01: {
        name: 'content01',
        preview: '/preview-ui/content01'
      },
      content02: {
        name: 'content02',
        preview: '/preview-ui/content02'
      }
    }
  }
]

interface Group {
    id: string
    text: string
    icon: string
}

export const groups: Group[] = [
    {
        id: 'all',
        text: 'All',
        icon: 'ph--squares-four-duotone',
    },
    {
        id: 'application',
        text: 'Application',
        icon: 'ph--desktop-duotone',
    },
    {
        id: 'marketing',
        text: 'Marketing',
        icon: 'ph--megaphone-duotone',
    },
]
