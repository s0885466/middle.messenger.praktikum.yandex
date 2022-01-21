import './styles/global.scss';
import Router from './router/Router';
import { renderPage } from './router/routes';
import { elements } from './constants/elements';

//заглушка для демонстрации страничек и переходов

elements.root.innerText = '';
const router = new Router();

const path = router.getLocation();
router.goTo(path);

renderPage(path);
