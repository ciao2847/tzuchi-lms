import Spinner from 'components/Spinner'
import Layout from 'layout/'
import React, { lazy, Suspense } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

const Home = lazy(() => import('views/home'))
const NotFound = lazy(() => import('views/not-found'))
const SeasonFruits = lazy(() => import('views/season-fruits'))
const SeasonFruit = lazy(() => import('views/season-fruit'))
const Pick = lazy(() => import('views/pick'))
const Tree = lazy(() => import('views/tree'))
const TreeInfo = lazy(() => import('views/tree-info'))
const Souvenirs = lazy(() => import('views/souvenirs'))
const Souvenir = lazy(() => import('views/souvenir'))
const SouvenirsCountry = lazy(() => import('views/souvenirs-country'))

const routes = [
    {
        element: (
            <Layout>
                <Outlet></Outlet>
            </Layout>
        ),
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/404',
                element: <NotFound />
            },
            {
                path: '*',
                element: <Navigate to="/404" replace={true} />
            },
            {
                path: '/season-fruits', //預設沒有季節，判斷季節
                element: <SeasonFruits />
            },
            {
                path: '/season-fruits/:season',
                element: <SeasonFruits />
            },
            {
                path: '/season-fruit/:id', //水果的內頁，送 id 以便 ajax 抓取資訊
                element: <SeasonFruit />
            },
            {
                path: '/pick',
                element: <Pick />
            },
            {
                path: '/tree',
                element: <Tree />
            },
            {
                path: '/tree-info/:id', //果樹的內頁，送 id 以便 ajax 抓取資訊
                element: <TreeInfo />
            },
            {
                path: '/souvenirs',
                element: <Souvenirs />
            },
            {
                path: '/souvenir/:id',
                element: <Souvenir />
            },
            {
                path: '/souvenirs-country',
                element: <SouvenirsCountry />
            }
        ]
    }
]

const Routes = () => {
    const result = useRoutes(routes)
    return (
        <Suspense
            fallback={
                <div className="fill-parent d-flex justify-content-center align-items-center">
                    <Spinner size={20} />
                </div>
            }
        >
            {result}
        </Suspense>
    )
}

export default Routes
