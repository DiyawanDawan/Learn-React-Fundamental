
import { createRoot } from 'react-dom/client';
import ContactApp from './ContactApp';

import './styles/style.css';
// import Form from './form/MyForm';
// import ConterApp from './classComponenst/HalloWorld';
// import HalloWorld from './classComponenst/HalloWorld';
const root = createRoot(document.getElementById('root'));
root.render(<ContactApp />);
// root.render(<ConterApp/>)
// root.render(<Form />)