import Main from './pages/mainPage';
import RegistrationPage from './pages/registration';
import FinalPage from './pages/finalPage';

export default [
    {
        component: RegistrationPage,
        route: '/registration',
    },
    {
        component: FinalPage,
        route: '/finalize',
    },
    {
        component: Main,
        route: '/',
    },
];