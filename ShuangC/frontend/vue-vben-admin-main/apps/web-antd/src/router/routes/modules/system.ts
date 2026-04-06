import type { RouteRecordRaw } from 'vue-router';

import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    meta: {
      icon: 'lucide:settings',
      order: 10,
      title: $t('page.system.title'),
    },
    name: 'System',
    path: '/system',
    children: [
      // 道路检测分析子菜单
      {
        name: 'RoadAnalysis',
        path: '/system/road-analysis',
        meta: {
          icon: 'lucide:scan-line',
          title: $t('page.system.roadAnalysis'),
        },
        children: [
          {
            name: 'DefectDetection',
            path: '/system/road-analysis/defect-detection',
            component: () => import('#/views/system/defect-detection/index.vue'),
            meta: {
              icon: 'lucide:scan-search',
              title: $t('page.system.defectDetection'),
            },
          },
          {
            name: 'RoadQuality',
            path: '/system/road-analysis/road-quality',
            component: () => import('#/views/system/road-quality/index.vue'),
            meta: {
              icon: 'lucide:route',
              title: $t('page.system.roadQuality'),
            },
          },
        ],
      },
      {
        name: 'VehicleTracking',
        path: '/system/vehicle-tracking',
        component: () => import('#/views/system/vehicle-tracking/index.vue'),
        meta: {
          icon: 'lucide:car',
          title: $t('page.system.vehicleTracking'),
        },
      },
    ],
  },
];

export default routes;
