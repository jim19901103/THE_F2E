import Level1_route from './Level1_route';
import Level2_route from "./Level2_route";
import Level3_route from './Level3/Level3_route';
import Level3_orders_route from './Level3/Level3_orders_route';
import Level3_product_route from './Level3/Level3_product_route';
import ShopListRoute from './Level4/ShopList_route';
import ShopOneRoute from './Level4/ShopOne_route';
import Level5_route from "./Level5/Level5_route";
import ComicOneRoute from "./Level5/ComicOne_route";
import Level6_route from './Level6/Level6_route';
import Level7_route from './Level7/Level7_route';
import Level8_route from "./Level8/Level8_route";
import Level9_route from "./Level9/Level9_route";
import Api_route from "./Api_route";

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
    },
    {
        exact: true,
        path: "/level5",
        component: Level5_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level5/:id",
        component: ComicOneRoute,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level6",
        component: Level6_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level7",
        component: Level7_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level8",
        component: Level8_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: "/level9",
        component: Level9_route,
        layout: 'MainLayout'
    },
    {
        exact: true,
        path: '/',
        component: Api_route,
        layout: 'MainLayout'
    }
];