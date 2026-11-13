import Layout from 'layout/'
import RequireLogin from 'components/RequireLogin'
import Course from 'views/pick'
import React, { lazy } from 'react'
import { Navigate, Outlet, useRoutes, useLocation, useParams } from 'react-router-dom'

const Home = lazy(() => import('views/home'))
const ForgotPassword = lazy(() => import('views/forgot-password'))
const ChangePassword = lazy(() => import('views/change-password'))
const NotFound = lazy(() => import('views/not-found'))
const PickDetail = lazy(() => import('views/pick-detail'))
const Calendar = lazy(() => import('views/calendar'))
const ExternalTraining = lazy(() => import('views/external-training'))
const MenuPage = lazy(() => import('views/menu-page'))

const LegacyCourseRedirect = () => {
    const { id } = useParams()
    const { search, hash } = useLocation()
    return <Navigate to={`/course${id ? `/${encodeURIComponent(id)}` : ''}${search}${hash}`} replace />
}

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
                path: '/forgot-password',
                element: <ForgotPassword />
            },
            {
                element: <RequireLogin allowChecking />,
                children: [{ path: '/course', element: <Course /> }]
            },
            {
                element: <RequireLogin />,
                children: [
                    {
                        path: '/change-password',
                        element: <ChangePassword />
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
                        path: '/course/:id',
                        element: <PickDetail />
                    },
                    {
                        path: '/pick',
                        element: <LegacyCourseRedirect />
                    },
                    {
                        path: '/pick/:id',
                        element: <LegacyCourseRedirect />
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
    }
]

const Routes = () => {
    const result = useRoutes(routes)
    return result
}

export default Routes
