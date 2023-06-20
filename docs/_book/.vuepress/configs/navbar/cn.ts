import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta'

export const navbarCn: NavbarConfig = [
  {
    text: '入门',
    link: '/cn/starter/getting_started',
  },
  {
    text: 'API',
    link: '/cn/api_doc/api-core.md',
  },
  {
    text: '用户指南',
    children: [
      {
        text: 'MLOps',
        link: '/cn/mlops/user_guide.md',
      },
      {
        text: 'Cross Silo',
        link: '/cn/cross-silo/user_guide.md',
      },
      {
        text: 'Cross Device',
        link: '/cn/cross-device/user_guide.md',
      },
      {
        text: 'Simulation',
        link: '/cn/simulation/user_guide.md',
      },
      {
        text: 'FedML Cheetah',
        link: '/cn/cheetah/user_guide.md',
      },
      {
        text: 'FedML Spider',
        link: '/cn/spider/user_guide.md',
      },
      {
        text: 'Benchmark',
        link: '/cn/benchmark/fedgraphnn.md',
      }
    ],
  },
  {
    text: '资源',
    children: [
      '/cn/resources/papers.md',
      '/cn/resources/slides.md',
      '/cn/resources/video.md',
      '/cn/resources/community.md',
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