import Level1_route from './Level1_route';
import Level2_route from "./Level2_route";
import Level3_route from './Level3/Level3_route';
import Level3_orders_route from './Level3/Level3_orders_route';
import Level3_product_route from './Level3/Level3_product_route';
import ShopListRoute from './Level4/ShopList_route';
import ShopOneRoute from './Level4/ShopOne_route';

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
    },
    {
        exact: true,
        path: "/level3",
        component: Level3_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level3/orders",
        component: Level3_orders_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level3/product",
        component: Level3_product_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level4",
        component: ShopListRoute,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level4/:id",
        component: ShopOneRoute,
        layout: 'MainLayout'
    }
];