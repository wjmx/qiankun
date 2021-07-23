import { registerMicroApps, addGlobalUncaughtErrorHandler, start } from 'qiankun';

import apps from './apps';

registerMicroApps(apps, {
    beforeLoad: [
        app => {
            console.log('[LifeCycle] before load %c%s', 'color: green;', app.name);
        },
    ],
    beforeMount: [
        app => {
            console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name);
        },
    ],
    afterUnmount: [
        app => {
            console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name);
        },
    ],
}, );

addGlobalUncaughtErrorHandler((event) => {
    console.log(event);
    const { msg } = event;
    if (msg && msg.includes('died in status LOADING_SOURCE_CODE')) {
        console.log('微应用加载失败，请检查应用是否可运行');
    }
});

export default start;