import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const navbarEn: NavbarConfig = [
  {
    text: 'Get Started',
    link: '/en/starter/getting_started',
  },
  {
    text: 'API',
    link: '/en/api_doc/api-core.md',
  },
  {
    text: 'User Guide',
    children: [
      {
        text: 'MLOps',
        link: '/en/mlops/user_guide.md',
      },
      {
        text: 'Cross Silo',
        link: '/en/cross-silo/user_guide.md',
      },
      {
        text: 'Cross Device',
        link: '/en/cross-device/user_guide.md',
      },
      {
        text: 'Simulation',
        link: '/en/simulation/user_guide.md',
      },
      {
        text: 'FedML Cheetah',
        link: '/en/cheetah/user_guide.md',
      },
      {
        text: 'FedML Spider',
        link: '/en/spider/user_guide.md',
      },
      {
        text: 'Benchmark',
        link: '/en/benchmark/fedgraphnn.md',
      }
    ],
  },
  {
    text: 'Resources',
    children: [
      '/en/resources/papers.md',
      '/en/resources/slides.md',
      '/en/resources/video.md',
      '/en/resources/community.md',
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