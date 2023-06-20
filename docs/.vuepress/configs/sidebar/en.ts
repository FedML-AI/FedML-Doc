import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebarEn: SidebarConfig = {
  '/starter/': [
    {
      text: 'Starter',
      collapsible: true,
      children: [
        '/starter/getting_started.md',
        '/starter/faq.md',
        '/starter/mission.md',
        '/starter/overview.md',
        '/starter/concepts.md',
        '/starter/ecosystem.md',
        '/starter/oss_code_architecture.md',
      ],
    },
    {
      text: 'Installation',
      collapsible: true,
      children: [
        '/starter/installation.md',
        '/starter/install/windows.md',
        '/starter/install/rpi.md',
        '/starter/install/jetson.md',
      ]
    },
    {
      text: 'Others',
      collapsible: true,
      children: [
        '/starter/examples.md',
        '/starter/mlops_video.md',
      ]
    }
  ],
  '/api_doc/': [
    {
      text: 'API',
      children: [
        '/api_doc/api-core.md',
        '/api_doc/api-fedml-api.md'
      ],
    }
  ],
  '/mlops/': [
    '/mlops/t-mlops.md',
    '/mlops/user_guide.md',
    '/mlops/user_guide_beehive.md',
    '/mlops/api.md',
    '/mlops/examples/mlops_live_demo.md',
  ],
  '/cross-silo/': [
    '/cross-silo/user_guide.md',
    '/cross-silo/api.md',
    {
      text: 'Examples',
      link: '/cross-silo/examples.md',
      children: [
        '/cross-silo/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/cross-silo/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/cross-silo/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/cross-silo/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/cross-device/': [
    '/cross-device/user_guide.md',
    '/cross-device/api.md',
    {
      text: 'Examples',
      link: '/cross-device/examples.md',
      children: [
        '/cross-device/examples/cross_device_android_example.md',
      ],
    }
  ],
  '/simulation/': [
    {
      text: 'User Guide',
      link: '/simulation/user_guide.md',
      children: [
        '/simulation/user_guide/algorithm-reference-implementation.md',
        '/simulation/user_guide/data_loader_customization.md',
        '/simulation/user_guide/datasets-and-models.md',
      ],
    },
    '/simulation/api.md',
    {
      text: 'Examples',
      link: '/simulation/examples.md',
      children: [
        '/simulation/examples/fedavg-mnist-examples.md',
        '/simulation/examples/mpi_torch_fedavg_mnist_lr_example.md',
        '/simulation/examples/sp_fedavg_mnist_lr_example.md',
      ],
    },
    {
      text: 'Benchmark',
      link: '/simulation/benchmark.md',
      children: [
        '/simulation/benchmark/BENCHMARK_MPI.md', 
        '/simulation/benchmark/BENCHMARK_simulation.md',
      ],
    },
  ],
  '/cheetah/': [
    '/cheetah/user_guide.md',
    '/cheetah/api.md',
    {
      text: 'Examples',
      link: '/cheetah/examples.md',
      children: [
        '/cheetah/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/cheetah/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/cheetah/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/cheetah/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/spider/': [
    '/spider/user_guide.md',
    '/spider/api.md',
    {
      text: 'Examples',
      link: '/spider/examples.md',
      children: [
        '/spider/examples/mqtt_s3_fedavg_mnist_lr_example.md',
        '/spider/examples/mqtt_s3_fedavg_attack_mnist_lr_example.md',
        '/spider/examples/mqtt_s3_fedavg_defense_mnist_lr_example.md',
        '/spider/examples/mqtt_s3_fedavg_hierarchical_mnist_lr_example.md',
      ],
    }
  ],
  '/benchmark/': [
    '/benchmark/fedgraphnn.md',
    {
      text: 'Examples',
      link: '/benchmark/examples.md',
      children: [
        '/benchmark/fedgraphnn/egonet_linkpred.md',
        '/benchmark/fedgraphnn/egonet_nodeclf.md',
        '/benchmark/fedgraphnn/example1.md',
        '/benchmark/fedgraphnn/index.md',
        '/benchmark/fedgraphnn/moleculenet.md',
        '/benchmark/fedgraphnn/recsys.md',
        '/benchmark/fedgraphnn/social_graphs.md',
      ],
    }
  ],
  '/resources': [
    '/resources/papers.md',
    '/resources/slides.md',
    '/resources/video.md',
    '/resources/community.md',
  ]
}