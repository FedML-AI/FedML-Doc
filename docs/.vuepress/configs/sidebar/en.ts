import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/en/starter/': [
    {
      text: 'Starter',
      collapsible: true,
      children: [
        '/en/starter/getting_started.md',
        '/en/starter/faq.md',
        '/en/starter/mission.md',
        '/en/starter/overview.md',
        '/en/starter/concepts.md',
        '/en/starter/ecosystem.md',
        '/en/starter/oss_code_architecture.md',
      ],
    },
    {
      text: 'Installation',
      collapsible: true,
      children: [
        '/en/starter/installation.md',
        '/en/starter/install/windows.md',
        '/en/starter/install/rpi.md',
        '/en/starter/install/jetson.md',
      ]
    },
    {
      text: 'Others',
      collapsible: true,
      children: [
        '/en/starter/examples.md',
        '/en/starter/mlops_video.md',
      ]
    }
  ],
  '/en/api_doc/': [
    {
      text: 'API',
      children: [
        '/en/api_doc/api-core.md',
        '/en/api_doc/api-fedml-api.md'
      ],
    }
  ],
  '/en/mlops/': [
    '/en/mlops/t-mlops.md',
    '/en/mlops/user_guide.md',
    '/en/mlops/user_guide_beehive.md',
    '/en/mlops/api.md',
    '/en/mlops/examples/mlops_live_demo.md',
  ],
  '/en/cross-silo/': [
    '/en/cross-silo/user_guide.md',
    '/en/cross-silo/api.md',
    {
      text: 'Examples',
      link: '/en/cross-silo/examples.md',
      children: [
        '/en/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/en/cross-silo/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/en/cross-silo/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/en/cross-silo/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/en/cross-device/': [
    '/en/cross-device/user_guide.md',
    '/en/cross-device/api.md',
    {
      text: 'Examples',
      link: '/en/cross-device/examples.md',
      children: [
        '/en/cross-device/examples/cross_device_android_example.md',
      ],
    }
  ],
  '/en/simulation/': [
    {
      text: 'User Guide',
      link: '/en/simulation/user_guide.md',
      children: [
        '/en/simulation/user_guide/algorithm-reference-implementation.md',
        '/en/simulation/user_guide/data_loader_customization.md',
        '/en/simulation/user_guide/datasets-and-models.md',
      ],
    },
    '/en/simulation/api.md',
    {
      text: 'Examples',
      link: '/en/simulation/examples.md',
      children: [
        '/en/simulation/examples/fedavg-mnist-examples.md',
        '/en/simulation/examples/mpi_torch_fedavg_mnist_lr_example.md',
        '/en/simulation/examples/sp_fedavg_mnist_lr_example.md',
      ],
    },
    {
      text: 'Benchmark',
      link: '/en/simulation/benchmark.md',
      children: [
        '/en/simulation/benchmark/BENCHMARK_MPI.md', 
        '/en/simulation/benchmark/BENCHMARK_simulation.md',
      ],
    },
  ],
  '/en/cheetah/': [
    '/en/cheetah/user_guide.md',
    '/en/cheetah/api.md',
    {
      text: 'Examples',
      link: '/en/cheetah/examples.md',
      children: [
        '/en/cheetah/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/en/cheetah/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/en/cheetah/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/en/cheetah/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/en/spider/': [
    '/en/spider/user_guide.md',
    '/en/spider/api.md',
    {
      text: 'Examples',
      link: '/en/spider/examples.md',
      children: [
        '/en/spider/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/en/spider/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/en/spider/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/en/spider/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/en/benchmark/': [
    '/en/benchmark/fedgraphnn.md',
    {
      text: 'Examples',
      link: '/en/benchmark/examples.md',
      children: [
        '/en/benchmark/fedgraphnn/egonet_linkpred.md',
        '/en/benchmark/fedgraphnn/egonet_nodeclf.md',
        '/en/benchmark/fedgraphnn/example1.md',
        '/en/benchmark/fedgraphnn/index.md',
        '/en/benchmark/fedgraphnn/moleculenet.md',
        '/en/benchmark/fedgraphnn/recsys.md',
        '/en/benchmark/fedgraphnn/social_graphs.md',
      ],
    }
  ],
  '/en/resources': [
    '/en/resources/papers.md',
    '/en/resources/slides.md',
    '/en/resources/video.md',
    '/en/resources/community.md',
  ]
}