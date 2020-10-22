import React from 'react';


const Inicio = React.lazy(() => import('./views/Inicio'));
const BienvenidaView = React.lazy(() => import('./views/temarioViews/BienvenidaView'));

const TemaUnoView = React.lazy(() => import('./views/temarioViews/TemaUnoView'));
const TemaDosView = React.lazy(() => import('./views/temarioViews/TemaDosView'));
const TemaTresView = React.lazy(() => import('./views/temarioViews/TemaTresView'));
const TemaCuatroView = React.lazy(() => import('./views/temarioViews/TemaCuatroView'));
const TemaCincoView = React.lazy(() => import('./views/temarioViews/TemaCincoView'));
const TemaSeisView = React.lazy(() => import('./views/temarioViews/TemaSeisView'));

const TemaSieteView = React.lazy(() => import('./views/temarioViews/TemaSieteView'));
const TemaOchoView = React.lazy(() => import('./views/temarioViews/TemaOchoView'));

const TemaNueveView = React.lazy(() => import('./views/temarioViews/TemaNueveView'));
const TemaDiezView = React.lazy(() => import('./views/temarioViews/TemaDiezView'));

const TemaOnceView = React.lazy(() => import('./views/temarioViews/TemaOnceView'));
const TemaDoceView = React.lazy(() => import('./views/temarioViews/TemaDoceView'));
const TemaTreceView = React.lazy(() => import('./views/temarioViews/TemaTreceView'));
const TemaCatorceView = React.lazy(() => import('./views/temarioViews/TemaCatorceView'));
const TemaQuiceView = React.lazy(() => import('./views/temarioViews/TemaQuiceView'));
const TemaDieciseisView = React.lazy(() => import('./views/temarioViews/TemaDieciseisView'));
const TemaDiecisieteView = React.lazy(() => import('./views/temarioViews/TemaDiecisieteView'));
const TemaDieciochoView = React.lazy(() => import('./views/temarioViews/TemaDieciochoView'));

const TemadiecinueveView = React.lazy(() => import('./views/temarioViews/TemadiecinueveView'));

const TemaVeinteView = React.lazy(() => import('./views/temarioViews/TemaVeinteView'));
const TemaVeintiunoView = React.lazy(() => import('./views/temarioViews/TemaVeintiunoView'));
const TemaVeintidosView = React.lazy(() => import('./views/temarioViews/TemaVeintidosView'));

const TemaVeintitresView = React.lazy(() => import('./views/temarioViews/TemaVeintitresView'));
const TemaVeinticuatroView = React.lazy(() => import('./views/temarioViews/TemaVeinticuatroView'));

const TemaVeinticincoView = React.lazy(() => import('./views/temarioViews/TemaVeinticincoView'));
const TemaVeintiseisView = React.lazy(() => import('./views/temarioViews/TemaVeintiseisView'));
const TemaVeintisieteView = React.lazy(() => import('./views/temarioViews/TemaVeintisieteView'));
const TemaVeintiochoView = React.lazy(() => import('./views/temarioViews/TemaVeintiochoView'));
const TemaVeintinueveView = React.lazy(() => import('./views/temarioViews/TemaVeintinueveView'));




const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/Inicio', name: 'Inicio', component: Inicio },
  { path: '/temarioViews/BienvenidaView', name: 'Bienvenida', component: BienvenidaView },

  { path: '/temarioViews/TemaUnoView', name: 'La industria hoy', component: TemaUnoView },
  { path: '/temarioViews/TemaDosView', name: 'Cambios > P1', component: TemaDosView },
  { path: '/temarioViews/TemaTresView', name: 'Cambios > P3  ', component: TemaTresView },

  { path: '/temarioViews/TemaCuatroView', name: 'Tendencias > P1', component: TemaCuatroView },
  { path: '/temarioViews/TemaCincoView', name: 'Tendencias > P2 ', component: TemaCincoView },
  { path: '/temarioViews/TemaSeisView', name: 'Tendencias  > P3', component: TemaSeisView },
  { path: '/temarioViews/TemaSieteView', name: '1. Omnicanalidad', component: TemaSieteView },
  { path: '/temarioViews/TemaOchoView', name: '2. Llamadas de retorno', component: TemaOchoView },
  { path: '/temarioViews/TemaNueveView', name: '3. Autoservicio', component: TemaNueveView },
  { path: '/temarioViews/TemaDiezView', name: '4. Redes sociales', component: TemaDiezView },
  { path: '/temarioViews/TemaOnceView', name: '5. Chatbots', component: TemaOnceView },
  { path: '/temarioViews/TemaDoceView', name: '6. Big Data', component: TemaDoceView },
  { path: '/temarioViews/TemaTreceView', name: '7. Nube', component: TemaTreceView },
  { path: '/temarioViews/TemaCatorceView', name: '8. Cumplimiento', component: TemaCatorceView },
  { path: '/temarioViews/TemaQuiceView', name: '9. Outsourcing de Monitoreo de Call Center', component: TemaQuiceView },
  { path: '/temarioViews/TemaDieciseisView', name: '10. Súper Agentes', component: TemaDieciseisView },
  { path: '/temarioViews/TemaDiecisieteView', name: '11. CCM cambiará de rol', component: TemaDiecisieteView },
  { path: '/temarioViews/TemaDieciochoView', name: '12. WebChat', component: TemaDieciochoView },
  { path: '/temarioViews/TemadiecinueveView', name: '13. IA', component: TemadiecinueveView },

  { path: '/temarioViews/TemaVeinteView', name: 'Transformación Digital > P1', component: TemaVeinteView },
  { path: '/temarioViews/TemaVeintiunoView', name: 'Transformación Digital > P2', component: TemaVeintiunoView },
  { path: '/temarioViews/TemaVeintidosView', name: 'Transformación del liderazgo y dar poder de decisión a los agentes', component: TemaVeintidosView },
  { path: '/temarioViews/TemaVeintitresView', name: 'Creación de métricas de performance digital > P1', component: TemaVeintitresView },
  { path: '/temarioViews/TemaVeinticuatroView', name: 'Creación de métricas de performance digital > P2', component: TemaVeinticuatroView },
  { path: '/temarioViews/TemaVeinticincoView', name: 'Creación de métricas de performance digital > P3', component: TemaVeinticincoView },
  { path: '/temarioViews/TemaVeintiseisView', name: 'Para finalizar', component: TemaVeintiseisView },

  { path: '/temarioViews/TemaVeintisieteView', name: 'Conclusiones > P1', component: TemaVeintisieteView },
  { path: '/temarioViews/TemaVeintiochoView', name: 'Conclusiones > P2', component: TemaVeintiochoView },
  { path: '/temarioViews/TemaVeintinueveView', name: 'Conclusiones > P3', component: TemaVeintinueveView },

  

];


export default routes;
