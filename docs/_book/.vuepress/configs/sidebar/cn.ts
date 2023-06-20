import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarCn: SidebarConfig = {
  '/cn/starter/': [
    {
      text: 'Starter',
      collapsible: true,
      children: [
        '/cn/starter/getting_started.md',
        '/cn/starter/faq.md',
        '/cn/starter/mission.md',
        '/cn/starter/overview.md',
        '/cn/starter/concepts.md',
        '/cn/starter/ecosystem.md',
        '/cn/starter/oss_code_architecture.md',
      ],
    },
    {
      text: 'Installation',
      collapsible: true,
      children: [
        '/cn/starter/installation.md',
        '/cn/starter/install/windows.md',
        '/cn/starter/install/rpi.md',
        '/cn/starter/install/jetson.md',
      ]
    },
    {
      text: 'Others',
      collapsible: true,
      children: [
        '/cn/starter/examples.md',
        '/cn/starter/mlops_video.md',
      ]
    }
  ],
  '/cn/api_doc/': [
    {
      text: 'API',
      children: [
        '/cn/api_doc/api-core.md',
        '/cn/api_doc/api-fedml-api.md'
      ],
    }
  ],
  '/cn/mlops/': [
    '/cn/mlops/t-mlops.md',
    '/cn/mlops/user_guide.md',
    '/cn/mlops/user_guide_beehive.md',
    '/cn/mlops/api.md',
    '/cn/mlops/examples/mlops_live_demo.md',
  ],
  '/cn/cross-silo/': [
    '/cn/cross-silo/user_guide.md',
    '/cn/cross-silo/api.md',
    {
      text: 'Examples',
      link: '/cn/cross-silo/examples.md',
      children: [
        '/cn/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/cn/cross-silo/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/cn/cross-silo/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/cn/cross-silo/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/cn/cross-device/': [
    '/cn/cross-device/user_guide.md',
    '/cn/cross-device/api.md',
    {
      text: 'Examples',
      link: '/cn/cross-device/examples.md',
      children: [
        '/cn/cross-device/examples/cross_device_android_example.md',
      ],
    }
  ],
  '/cn/simulation/': [
    {
      text: 'User Guide',
      link: '/cn/simulation/user_guide.md',
      children: [
        '/cn/simulation/user_guide/algorithm-reference-implementation.md',
        '/cn/simulation/user_guide/data_loader_customization.md',
        '/cn/simulation/user_guide/datasets-and-models.md',
      ],
    },
    '/cn/simulation/api.md',
    {
      text: 'Examples',
      link: '/cn/simulation/examples.md',
      children: [
        '/cn/simulation/examples/fedavg-mnist-examples.md',
        '/cn/simulation/examples/mpi_torch_fedavg_mnist_lr_example.md',
        '/cn/simulation/examples/sp_fedavg_mnist_lr_example.md',
      ],
    },
    {
      text: 'Benchmark',
      link: '/cn/simulation/benchmark.md',
      children: [
        '/cn/simulation/benchmark/BENCHMARK_MPI.md', 
        '/cn/simulation/benchmark/BENCHMARK_simulation.md',
      ],
    },
  ],
  '/cn/cheetah/': [
    '/cn/cheetah/user_guide.md',
    '/cn/cheetah/api.md',
    {
      text: 'Examples',
      link: '/cn/cheetah/examples.md',
      children: [
        '/cn/cheetah/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/cn/cheetah/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/cn/cheetah/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/cn/cheetah/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/cn/spider/': [
    '/cn/spider/user_guide.md',
    '/cn/spider/api.md',
    {
      text: 'Examples',
      link: '/cn/spider/examples.md',
      children: [
        '/cn/spider/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/cn/spider/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/cn/spider/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/cn/spider/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/cn/benchmark/': [
    '/cn/benchmark/fedgraphnn.md',
    {
      text: 'Examples',
      link: '/cn/benchmark/examples.md',
      children: [
        '/cn/benchmark/fedgraphnn/egonet_linkpred.md',
        '/cn/benchmark/fedgraphnn/egonet_nodeclf.md',
        '/cn/benchmark/fedgraphnn/example1.md',
        '/cn/benchmark/fedgraphnn/index.md',
        '/cn/benchmark/fedgraphnn/moleculenet.md',
        '/cn/benchmark/fedgraphnn/recsys.md',
        '/cn/benchmark/fedgraphnn/social_graphs.md',
      ],
    }
  ],
  '/cn/resources': [
    '/cn/resources/papers.md',
    '/cn/resources/slides.md',
    '/cn/resources/video.md',
    '/cn/resources/community.md',
  ]
}