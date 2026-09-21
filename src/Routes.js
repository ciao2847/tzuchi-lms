import Spinner from 'components/Spinner'
import Layout from 'layout/'
import React, { lazy, Suspense } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

const Home = lazy(() => import('views/home'))
const NotFound = lazy(() => import('views/not-found'))
const Pick = lazy(() => import('views/pick'))
const PickDetail = lazy(() => import('views/pick-detail'))
const Calendar = lazy(() => import('views/calendar'))
const ExternalTraining = lazy(() => import('views/external-training'))
const MenuPage = lazy(() => import('views/menu-page'))

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
                path: '/pick',
                element: <Pick />
            },
            {
                path: '/pick/:id',
                element: <PickDetail />
            },
            {
                path: '/calendar',
                element: <Calendar />
            },
            {
                path: '/external-training-data',
                element: <ExternalTraining />
            },
            {
                path: '/tree',
                element: <MenuPage />
            },
            {
                path: '/edu-service',
                element: <MenuPage />
            },
            {
                path: '/edu-service-country',
                element: <MenuPage />
            }
        ]
    }
]

const Routes = () => {
    const result = useRoutes(routes)
    return (
        <Suspense
            fallback={
                <div className="absolute inset-0 flex justify-center items-center">
                    <Spinner size={20} />
                </div>
            }
        >
            {result}
        </Suspense>
    )
}

export default Routes
