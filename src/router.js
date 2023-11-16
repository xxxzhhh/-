import { createRouter, createWebHistory } from 'vue-router'
import teacher from './teacher/teacher.vue'
import login from './components/login.vue'
import student from './student/student.vue'
// import Watch from './teacher/components/watch.vue'
// import teachercheck from './teacher/components/check'
// import teacheredit from './teacher/components/edit'
// import teacherupdate from './teacher/components/update'
// import teachersetting from './teacher/components/setting'
// import teacherwatch from './teacher/components/watch'
// import teacherwatch from './teacher/components/watch'
const routes = [
  { path: '/', component: login},
  { path: '/student',component: student},
  {
    path: '/teacher',
    component: teacher,
    children: [
      {
        path: '/teacher/watch',
        component: () => import('./teacher/components/watch.vue'),
      },
      {
        path: '/teacher/main',
        component: () => import('./teacher/components/main.vue'),
      },
      {
        path: '/teacher/watch/watchstudent',
        component: () => import('./teacher/components/watchstudent.vue'),
      },
      {
        path: '/teacher/watch/watchclass',
        component: () => import('./teacher/components/watchclass.vue'),
      },
      {
        path: '/teacher/setting',
        component: () => import('./teacher/components/setting.vue'),
      },
      {
        path: '/teacher/update',
        component: () => import('./teacher/components/update.vue'),
      },
      {
        path: '/teacher/update',
        component: () => import('./teacher/components/update.vue'),
      },
      {
        path: '/teacher/edit',
        component: () => import('./teacher/components/edit.vue'),
      },
    ]
  },
  // {
  //   path: '/teacher',
  //   component: AdminLayout,
  //   children: [
  //     {
  //       path: 'dashboard',
  //       component: AdminDashboard
  //     },
  //     {
  //       path: 'manage-users',
  //       component: ManageUsers
  //     }
  //   ]
  // },


]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router