import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Get Started',
    link: '/starter/getting_started',
  },
  {
    text: 'API',
    link: '/api_doc/api-core.md',
  },
  {
    text: 'User Guide',
    children: [
      {
        text: 'MLOps',
        link: '/mlops/user_guide.md',
      },
      {
        text: 'Cross Silo',
        link: '/cross-silo/user_guide.md',
      },
      {
        text: 'Cross Device',
        link: '/cross-device/user_guide.md',
      },
      {
        text: 'Simulation',
        link: '/simulation/user_guide.md',
      },
      {
        text: 'FedML Cheetah',
        link: '/cheetah/user_guide.md',
      },
      {
        text: 'FedML Spider',
        link: '/spider/user_guide.md',
      },
      {
        text: 'Benchmark',
        link: '/benchmark/fedgraphnn.md',
      }
    ],
  },
  {
    text: 'Resources',
    children: [
      '/resources/papers.md',
      '/resources/slides.md',
      '/resources/video.md',
      '/resources/community.md',
    ],
  },
  {
    text: 'GitHub',
    link: 'https://github.com/FedML-AI',
  },
  {
    text: 'FedML.AI',
    link: 'https://open.fedml.ai',
  },
]