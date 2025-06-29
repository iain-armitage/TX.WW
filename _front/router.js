import { createRouter, createWebHistory } from 'vue-router';

import wwPage from './views/wwPage.vue';

import { initializeData, initializePlugins, onPageUnload } from '@/_common/helpers/data';

let router;
const routes = [];

function scrollBehavior(to) {
    if (to.hash) {
        return {
            el: to.hash,
            behavior: 'smooth',
        };
    } else {
        return { top: 0 };
    }
}

 
/* wwFront:start */
import pluginsSettings from '../../plugins-settings.json';

// eslint-disable-next-line no-undef
window.wwg_designInfo = {"id":"ee250819-9284-4bd9-8c80-3996ccd39313","homePageId":"383cde40-b3e5-4321-8df0-7d600df4d518","authPluginId":null,"baseTag":null,"defaultTheme":"light","langs":[{"lang":"en","default":true}],"background":{},"workflows":[{"id":"a1819139-7bfe-4b81-b4e5-6614586c7709","name":"Initialize App Theme","actions":{"c1c5f2af-27f6-4254-acf4-fb64b8a3cb43":{"id":"c1c5f2af-27f6-4254-acf4-fb64b8a3cb43","code":"// Get stored theme preference from local storage\nconst localStorage = wwLib.getFrontWindow().localStorage;\nconst storedTheme = localStorage.getItem('tradex-theme');\n\n// Check if user has a stored preference\nif (storedTheme) {\n  utilsFunctions.setTheme(storedTheme);\n} else {\n  // Check system preference\n  const prefersDarkMode = wwLib.getFrontWindow().matchMedia('(prefers-color-scheme: dark)').matches;\n  const initialTheme = prefersDarkMode ? 'dark' : 'light';\n  \n  // Set the theme\n  utilsFunctions.setTheme(initialTheme);\n  \n  // Store the theme preference\n  localStorage.setItem('tradex-theme', initialTheme);\n}","next":null,"type":"custom-js"}},"trigger":"onload-app","description":"Check system preferences and local storage to set initial theme (light/dark)","firstAction":"c1c5f2af-27f6-4254-acf4-fb64b8a3cb43","firstErrorAction":null},{"id":"6f9f55d6-b78d-45bd-adb7-0443175c632b","name":"Handle Responsive Layout","actions":{"1144c0ff-ffaf-40b2-b5a4-54193d338745":{"id":"1144c0ff-ffaf-40b2-b5a4-54193d338745","code":"// Get current breakpoint\nconst breakpoint = globalContext.browser.breakpoint;\nconst sidebarElement = wwLib.getFrontDocument().getElementById('sidebar_section');\nconst mainContent = wwLib.getFrontDocument().getElementById('4d34c340-4e98-47d5-8594-d6980e423703');\n\n// Handle sidebar visibility based on screen size\nif (breakpoint === 'mobile') {\n  // On mobile, sidebar should be hidden by default and overlay when shown\n  if (sidebarElement) {\n    sidebarElement.style.position = 'fixed';\n    sidebarElement.style.top = '0';\n    sidebarElement.style.left = '0';\n    sidebarElement.style.height = '100vh';\n    sidebarElement.style.zIndex = '1000';\n    sidebarElement.style.width = '280px';\n    sidebarElement.style.transform = variables['da2835bc-b4ce-4a7b-ad76-f713db7c9b57'] ? 'translateX(0)' : 'translateX(-100%)';\n  }\n  \n  // Main content takes full width on mobile\n  if (mainContent) {\n    mainContent.style.marginLeft = '0';\n  }\n} else if (breakpoint === 'tablet') {\n  // On tablet, sidebar should be collapsed but visible\n  variables['da2835bc-b4ce-4a7b-ad76-f713db7c9b57'] = false;\n  \n  if (sidebarElement) {\n    sidebarElement.style.position = 'fixed';\n    sidebarElement.style.top = '0';\n    sidebarElement.style.left = '0';\n    sidebarElement.style.height = '100vh';\n    sidebarElement.style.zIndex = '100';\n    sidebarElement.style.width = '80px';\n    sidebarElement.style.transform = 'translateX(0)';\n  }\n  \n  // Main content has margin to accommodate collapsed sidebar\n  if (mainContent) {\n    mainContent.style.marginLeft = '80px';\n  }\n} else {\n  // On desktop, restore sidebar to its previous state or default to expanded\n  if (sidebarElement) {\n    sidebarElement.style.position = 'fixed';\n    sidebarElement.style.top = '0';\n    sidebarElement.style.left = '0';\n    sidebarElement.style.height = '100vh';\n    sidebarElement.style.zIndex = '100';\n    sidebarElement.style.width = variables['da2835bc-b4ce-4a7b-ad76-f713db7c9b57'] ? '280px' : '80px';\n    sidebarElement.style.transform = 'translateX(0)';\n  }\n  \n  // Main content margin adjusts based on sidebar width\n  if (mainContent) {\n    mainContent.style.marginLeft = variables['da2835bc-b4ce-4a7b-ad76-f713db7c9b57'] ? '280px' : '80px';\n  }\n}","next":null,"type":"custom-js"}},"trigger":"page-resize","description":"Manage sidebar state based on screen size and update isSidebarExpanded variable accordingly","firstAction":"1144c0ff-ffaf-40b2-b5a4-54193d338745","firstErrorAction":null}],"pages":[{"id":"b78ae704-e8a8-4439-9535-4a3479b1cb45","linkId":"b78ae704-e8a8-4439-9535-4a3479b1cb45","name":"Esti","folder":null,"paths":{"en":"esti","default":"esti"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"29f7eb11-78ad-4c32-8cda-ab05eb41963d","sectionTitle":"Navbar Section","linkId":"e9980643-63c2-4472-8cf8-1ee010cff7b6"},{"uid":"84829f63-16dc-4f82-9f79-0af14f04ae76","sectionTitle":"Main Container Section","linkId":"c273bfbb-412b-4daa-9939-396faf7dc113"},{"uid":"71a4bd4a-7b28-4ea3-97aa-2cd0b80092f3","sectionTitle":"Navbar Section","linkId":"a2b4af17-a250-4b99-a0a4-0550114a0ef7"},{"uid":"54497cc9-bab9-4a3d-ae5a-19208292d3c9","sectionTitle":"Main Container Section","linkId":"fca0b964-1973-4554-80d8-3aa0185db977"}],"pageUserGroups":[],"title":{},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"25d63a97-21b2-48bf-ab12-fa117e5a804a","linkId":"25d63a97-21b2-48bf-ab12-fa117e5a804a","name":"Tasks","folder":"","paths":{"en":"tasks","default":"tasks"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"177fe25b-8d70-4079-8b59-07de23c32617","sectionTitle":"Main Content Section","linkId":"9f194fc3-4dbd-4228-a74b-41dc90ab0e6a"},{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"}],"pageUserGroups":[],"title":{"en":"Tasks"},"meta":{"desc":{"en":"Tasks management page"},"keywords":{"en":"tasks, management"},"socialDesc":{"en":"Tasks management page"},"socialTitle":{"en":"Tasks"}},"metaImage":""},{"id":"383cde40-b3e5-4321-8df0-7d600df4d518","linkId":"383cde40-b3e5-4321-8df0-7d600df4d518","name":"Dashboard","folder":"","paths":{"en":"dashboard","default":"dashboard"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"},{"uid":"d1758741-1536-448b-98f0-1e26e4660579","sectionTitle":"Main Content","linkId":"206469fb-3c8c-4676-a714-7adfee8e1243"}],"pageUserGroups":[],"title":{"en":"Dashboard"},"meta":{"desc":{"en":"Dashboard overview page"},"keywords":{"en":"dashboard, overview"},"socialDesc":{"en":"Dashboard overview page"},"socialTitle":{"en":"Dashboard"}},"metaImage":""},{"id":"cb24d271-739f-4500-a291-f5b0a2dd6c36","linkId":"cb24d271-739f-4500-a291-f5b0a2dd6c36","name":"Invoices","folder":"","paths":{"en":"invoices","default":"invoices"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2a1bcb94-5e5c-4ec3-bf91-4a90401865dd","sectionTitle":"Header Section","linkId":"14fb1538-0a84-4dd2-8660-1356e68088fc"},{"uid":"44431edd-dc09-4038-abaa-dcfeb49eadc6","sectionTitle":"Main Container","linkId":"e2009d77-c5c1-444f-9809-270528998621"},{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"}],"pageUserGroups":[],"title":{"en":"Invoices"},"meta":{"desc":{"en":"Invoices management page"},"keywords":{"en":"invoices, billing"},"socialDesc":{"en":"Invoices management page"},"socialTitle":{"en":"Invoices"}},"metaImage":""},{"id":"9ba95b8d-603c-40c5-ac2b-5dd7a0943010","linkId":"9ba95b8d-603c-40c5-ac2b-5dd7a0943010","name":"Home","folder":null,"paths":{"en":"home","default":"home"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"4d34c340-4e98-47d5-8594-d6980e423703","sectionTitle":"Main Content","linkId":"2d57383a-94f7-42f5-8098-01b430718d66"},{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"}],"pageUserGroups":[],"title":{"en":"","fr":"Vide | Commencer à partir de zéro"},"meta":{"desc":{},"keywords":{},"socialDesc":{},"socialTitle":{},"structuredData":{}},"metaImage":""},{"id":"45ad381b-fc03-459c-b19c-87215229d6e8","linkId":"45ad381b-fc03-459c-b19c-87215229d6e8","name":"Contacts","folder":"","paths":{"en":"contacts","default":"contacts"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"2cef6951-f993-4393-859b-229057c969eb","sectionTitle":"Header Section","linkId":"1f57444d-41f3-45ad-b4b1-bb9283fe825d"},{"uid":"cb29b5c3-cecb-4e4c-84c5-65bbc07b56f2","sectionTitle":"Main Container","linkId":"5fc1aafe-5c81-4026-b60d-10c9484c5211"},{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"}],"pageUserGroups":[],"title":{"en":"Contacts"},"meta":{"desc":{"en":"Contacts management page"},"keywords":{"en":"contacts, management"},"socialDesc":{"en":"Contacts management page"},"socialTitle":{"en":"Contacts"}},"metaImage":""},{"id":"7b752d89-ec0d-48af-b6bb-1fcccb83e5ae","linkId":"7b752d89-ec0d-48af-b6bb-1fcccb83e5ae","name":"Quotes","folder":"","paths":{"en":"quotes","default":"quotes"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"},{"uid":"9961b9f2-85f7-4ca8-95e9-001328f5176e","sectionTitle":"Main Content Section","linkId":"b9668e38-50e3-4f09-a493-2e9caf171198"}],"pageUserGroups":[],"title":{"en":"Quotes"},"meta":{"desc":{"en":"Quotes management page"},"keywords":{"en":"quotes, management"},"socialDesc":{"en":"Quotes management page"},"socialTitle":{"en":"Quotes"}},"metaImage":""},{"id":"715ea4e9-7066-4a39-93be-f98e2e63a2be","linkId":"715ea4e9-7066-4a39-93be-f98e2e63a2be","name":"Projects","folder":"","paths":{"en":"projects","default":"projects"},"langs":["en"],"cmsDataSetPath":null,"sections":[{"uid":"24280077-dae2-4736-8557-10f16e5428e7","sectionTitle":"Navbar Section","linkId":"dd0aafd6-f736-4036-aaa2-cb8847f98251"},{"uid":"4fa07a5c-ad6b-4176-bd0f-43cce680a1e6","sectionTitle":"Main Section","linkId":"ade81e57-e60d-4032-832d-e351446ca8aa"},{"uid":"1c64c20c-199d-4acf-8b67-d5db1cb2241c","sectionTitle":"Sidebar Navigation","linkId":"8e6ab768-90a7-4926-9d1c-f0bf25d4b7a9"}],"pageUserGroups":[],"title":{"en":"Projects"},"meta":{"desc":{"en":"Projects overview and management page"},"keywords":{"en":"projects, management"},"socialDesc":{"en":"Projects overview and management page"},"socialTitle":{"en":"Projects"}},"metaImage":""}],"plugins":[{"id":"2bd1c688-31c5-443e-ae25-59aa5b6431fb","name":"REST API","namespace":"restApi"}]};
// eslint-disable-next-line no-undef
window.wwg_cacheVersion = 2;
// eslint-disable-next-line no-undef
window.wwg_pluginsSettings = pluginsSettings;
// eslint-disable-next-line no-undef
window.wwg_disableManifest = false;

const defaultLang = window.wwg_designInfo.langs.find(({ default: isDefault }) => isDefault) || {};

const registerRoute = (page, lang, forcedPath) => {
    const langSlug = !lang.default || lang.isDefaultPath ? `/${lang.lang}` : '';
    let path =
        forcedPath ||
        (page.id === window.wwg_designInfo.homePageId ? '/' : `/${page.paths[lang.lang] || page.paths.default}`);

    //Replace params
    path = path.replace(/{{([\w]+)\|([^/]+)?}}/g, ':$1');

    routes.push({
        path: langSlug + path,
        component: wwPage,
        name: `page-${page.id}-${lang.lang}`,
        meta: {
            pageId: page.id,
            lang,
            isPrivate: !!page.pageUserGroups?.length,
        },
        async beforeEnter(to, from) {
            if (to.name === from.name) return;
            //Set page lang
            wwLib.wwLang.defaultLang = defaultLang.lang;
            wwLib.$store.dispatch('front/setLang', lang.lang);

            //Init plugins
            await initializePlugins();

            //Check if private page
            if (page.pageUserGroups?.length) {
                // cancel navigation if no plugin
                if (!wwLib.wwAuth.plugin) {
                    return false;
                }

                await wwLib.wwAuth.init();

                // Redirect to not sign in page if not logged
                if (!wwLib.wwAuth.getIsAuthenticated()) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthenticatedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }

                //Check roles are required
                if (
                    page.pageUserGroups.length > 1 &&
                    !wwLib.wwAuth.matchUserGroups(page.pageUserGroups.map(({ userGroup }) => userGroup))
                ) {
                    window.location.href = `${wwLib.wwPageHelper.getPagePath(
                        wwLib.wwAuth.getUnauthorizedPageId()
                    )}?_source=${to.path}`;

                    return null;
                }
            }

            try {
                await import(`@/pages/${page.id.split('_')[0]}.js`);
                await wwLib.wwWebsiteData.fetchPage(page.id);

                //Scroll to section or on top after page change
                if (to.hash) {
                    const targetElement = document.getElementById(to.hash.replace('#', ''));
                    if (targetElement) targetElement.scrollIntoView();
                } else {
                    document.body.scrollTop = document.documentElement.scrollTop = 0;
                }

                return;
            } catch (err) {
                wwLib.$store.dispatch('front/showPageLoadProgress', false);

                if (err.redirectUrl) {
                    return { path: err.redirectUrl || '404' };
                } else {
                    //Any other error: go to target page using window.location
                    window.location = to.fullPath;
                }
            }
        },
    });
};

for (const page of window.wwg_designInfo.pages) {
    for (const lang of window.wwg_designInfo.langs) {
        if (!page.langs.includes(lang.lang)) continue;
        registerRoute(page, lang);
    }
}

const page404 = window.wwg_designInfo.pages.find(page => page.paths.default === '404');
if (page404) {
    for (const lang of window.wwg_designInfo.langs) {
        // Create routes /:lang/:pathMatch(.*)* etc for all langs of the 404 page
        if (!page404.langs.includes(lang.lang)) continue;
        registerRoute(
            page404,
            {
                default: false,
                lang: lang.lang,
            },
            '/:pathMatch(.*)*'
        );
    }
    // Create route /:pathMatch(.*)* using default project lang
    registerRoute(page404, { default: true, isDefaultPath: false, lang: defaultLang.lang }, '/:pathMatch(.*)*');
} else {
    routes.push({
        path: '/:pathMatch(.*)*',
        async beforeEnter() {
            window.location.href = '/404';
        },
    });
}

let routerOptions = {};

const isProd =
    !window.location.host.includes(
        // TODO: add staging2 ?
        '-staging.' + (process.env.WW_ENV === 'staging' ? import.meta.env.VITE_APP_PREVIEW_URL : '')
    ) && !window.location.host.includes(import.meta.env.VITE_APP_PREVIEW_URL);

if (isProd && window.wwg_designInfo.baseTag?.href) {
    let baseTag = window.wwg_designInfo.baseTag.href;
    if (!baseTag.startsWith('/')) {
        baseTag = '/' + baseTag;
    }
    if (!baseTag.endsWith('/')) {
        baseTag += '/';
    }

    routerOptions = {
        base: baseTag,
        history: createWebHistory(baseTag),
        routes,
    };
} else {
    routerOptions = {
        history: createWebHistory(),
        routes,
    };
}

router = createRouter({
    ...routerOptions,
    scrollBehavior,
});

//Trigger on page unload
let isFirstNavigation = true;
router.beforeEach(async (to, from) => {
    if (to.name === from.name) return;
    if (!isFirstNavigation) await onPageUnload();
    isFirstNavigation = false;
    wwLib.globalVariables._navigationId++;
    return;
});

//Init page
router.afterEach((to, from, failure) => {
    wwLib.$store.dispatch('front/showPageLoadProgress', false);
    let fromPath = from.path;
    let toPath = to.path;
    if (!fromPath.endsWith('/')) fromPath = fromPath + '/';
    if (!toPath.endsWith('/')) toPath = toPath + '/';
    if (failure || (from.name && toPath === fromPath)) return;
    initializeData(to);
});
/* wwFront:end */

export default router;
