import Todos from 'TodoRouterDir/containers/Todos';

const routes = [
  {
    name: 'allTodos',　//URLの代わりに名前を指定しても動く、ニックネーム、わかりやすい
    path: '/',
    component: Todos,
  },
  {
    name: 'completedTodos',
    path: '/completed',
    component: Todos,
  },
  {
    name: 'incompleteTodos',
    path: '/incomplete',
    component: Todos,
  },
];

export default routes;
