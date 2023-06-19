import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEs: SidebarConfig = {
  '/es/starter/': [
    {
      text: 'Starter',
      collapsible: true,
      children: [
        '/es/starter/getting_started.md',
        '/es/starter/faq.md',
        '/es/starter/mission.md',
        '/es/starter/overview.md',
        '/es/starter/concepts.md',
        '/es/starter/ecosystem.md',
        '/es/starter/oss_code_architecture.md',
      ],
    },
    {
      text: 'Installation',
      collapsible: true,
      children: [
        '/es/starter/installation.md',
        '/es/starter/install/windows.md',
        '/es/starter/install/rpi.md',
        '/es/starter/install/jetson.md',
      ]
    },
    {
      text: 'Others',
      collapsible: true,
      children: [
        '/es/starter/examples.md',
        '/es/starter/mlops_video.md',
      ]
    }
  ],
  '/es/api_doc/': [
    {
      text: 'API',
      children: [
        '/es/api_doc/api-core.md',
        '/es/api_doc/api-fedml-api.md'
      ],
    }
  ],
  '/es/mlops/': [
    '/es/mlops/t-mlops.md',
    '/es/mlops/user_guide.md',
    '/es/mlops/user_guide_beehive.md',
    '/es/mlops/api.md',
    '/es/mlops/examples/mlops_live_demo.md',
  ],
  '/es/cross-silo/': [
    '/es/cross-silo/user_guide.md',
    '/es/cross-silo/api.md',
    {
      text: 'Examples',
      link: '/es/cross-silo/examples.md',
      children: [
        '/es/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/es/cross-silo/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/es/cross-silo/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/es/cross-silo/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/es/cross-device/': [
    '/es/cross-device/user_guide.md',
    '/es/cross-device/api.md',
    {
      text: 'Examples',
      link: '/es/cross-device/examples.md',
      children: [
        '/es/cross-device/examples/cross_device_android_example.md',
      ],
    }
  ],
  '/es/simulation/': [
    {
      text: 'User Guide',
      link: '/es/simulation/user_guide.md',
      children: [
        '/es/simulation/user_guide/algorithm-reference-implementation.md',
        '/es/simulation/user_guide/data_loader_customization.md',
        '/es/simulation/user_guide/datasets-and-models.md',
      ],
    },
    '/es/simulation/api.md',
    {
      text: 'Examples',
      link: '/es/simulation/examples.md',
      children: [
        '/es/simulation/examples/fedavg-mnist-examples.md',
        '/es/simulation/examples/mpi_torch_fedavg_mnist_lr_example.md',
        '/es/simulation/examples/sp_fedavg_mnist_lr_example.md',
      ],
    },
    {
      text: 'Benchmark',
      link: '/es/simulation/benchmark.md',
      children: [
        '/es/simulation/benchmark/BENCHMARK_MPI.md', 
        '/es/simulation/benchmark/BENCHMARK_simulation.md',
      ],
    },
  ],
  '/es/cheetah/': [
    '/es/cheetah/user_guide.md',
    '/es/cheetah/api.md',
    {
      text: 'Examples',
      link: '/es/cheetah/examples.md',
      children: [
        '/es/cheetah/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/es/cheetah/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/es/cheetah/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/es/cheetah/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/es/spider/': [
    '/es/spider/user_guide.md',
    '/es/spider/api.md',
    {
      text: 'Examples',
      link: '/es/spider/examples.md',
      children: [
        '/es/spider/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/es/spider/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/es/spider/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/es/spider/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/es/benchmark/': [
    '/es/benchmark/fedgraphnn.md',
    {
      text: 'Examples',
      link: '/es/benchmark/examples.md',
      children: [
        '/es/benchmark/fedgraphnn/egonet_linkpred.md',
        '/es/benchmark/fedgraphnn/egonet_nodeclf.md',
        '/es/benchmark/fedgraphnn/example1.md',
        '/es/benchmark/fedgraphnn/index.md',
        '/es/benchmark/fedgraphnn/moleculenet.md',
        '/es/benchmark/fedgraphnn/recsys.md',
        '/es/benchmark/fedgraphnn/social_graphs.md',
      ],
    }
  ],
  '/es/resources': [
    '/es/resources/papers.md',
    '/es/resources/slides.md',
    '/es/resources/video.md',
    '/es/resources/community.md',
  ]
}