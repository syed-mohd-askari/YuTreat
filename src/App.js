import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import ConsoleMsg from './components/ConsoleMsg';
import About from './components/About';
import Contacts from './components/Contacts';
import Error from './components/Error';
import { createBrowserRouter , RouterProvider,Outlet} from 'react-router-dom';
import RestaurantMenu from './components/RestaurantMenu';
import Cart from './components/Cart';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import PaymentSuccessPage from './components/PaymentSuccessPage';

const AppLayout = () => {
    return(
        <Provider store={appStore}>
        <div>
            <Header/>
            <Outlet/>
            <ConsoleMsg/>
        </div>
        </Provider>
    )
}
 
const router = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contacts",
                element: <Contacts/>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/>
            },
            {
                path: "/cart",
                element: <Cart/>
            },
            {
                path: "/checkout",
                element: <PaymentSuccessPage/>
            },
        ],
        errorElement: <Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router}/>);