import Level1_route from './Level1_route';
import Level2_route from "./Level2_route";

export default [
    {
        exact: true,
        path: "/level1",
        component: Level1_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level2",
        component: Level2_route,
        layout: 'MainLayout'
    }
];