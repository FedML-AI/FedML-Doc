import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const navbarEs: NavbarConfig = [
  {
    text: 'Get Started',
    link: '/es/starter/getting_started',
  },
  {
    text: 'API',
    link: '/es/api_doc/api-core.md',
  },
  {
    text: 'User Guide',
    children: [
      {
        text: 'MLOps',
        link: '/es/mlops/user_guide.md',
      },
      {
        text: 'Cross Silo',
        link: '/es/cross-silo/user_guide.md',
      },
      {
        text: 'Cross Device',
        link: '/es/cross-device/user_guide.md',
      },
      {
        text: 'Simulation',
        link: '/es/simulation/user_guide.md',
      },
      {
        text: 'FedML Cheetah',
        link: '/es/cheetah/user_guide.md',
      },
      {
        text: 'FedML Spider',
        link: '/es/spider/user_guide.md',
      },
      {
        text: 'Benchmark',
        link: '/es/benchmark/fedgraphnn.md',
      }
    ],
  },
  {
    text: 'Resources',
    children: [
      '/es/resources/papers.md',
      '/es/resources/slides.md',
      '/es/resources/video.md',
      '/es/resources/community.md',
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