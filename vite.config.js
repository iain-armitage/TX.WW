import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import path from 'path';
import fs from 'fs';
import handlebars from 'handlebars';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

const pages = {"esti":{"outputDir":"./esti","lang":"en","title":"Dashboard","cacheVersion":2,"meta":[{"name":"title","content":"Dashboard"},{"name":"description","content":"Dashboard overview page"},{"name":"keywords","content":"dashboard, overview"},{"itemprop":"name","content":"Dashboard"},{"itemprop":"description","content":"Dashboard overview page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Dashboard"},{"name":"twitter:description","content":"Dashboard overview page"},{"property":"og:title","content":"Dashboard"},{"property":"og:description","content":"Dashboard overview page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/esti/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/esti/"}]},"tasks":{"outputDir":"./tasks","lang":"en","title":"Tasks","cacheVersion":2,"meta":[{"name":"title","content":"Tasks"},{"name":"description","content":"Tasks management page"},{"name":"keywords","content":"tasks, management"},{"itemprop":"name","content":"Tasks"},{"itemprop":"description","content":"Tasks management page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Tasks"},{"name":"twitter:description","content":"Tasks management page"},{"property":"og:title","content":"Tasks"},{"property":"og:description","content":"Tasks management page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/tasks/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/tasks/"}]},"index":{"outputDir":"./","lang":"en","title":"Dashboard","cacheVersion":2,"meta":[{"name":"title","content":"Dashboard"},{"name":"description","content":"Dashboard overview page"},{"name":"keywords","content":"dashboard, overview"},{"itemprop":"name","content":"Dashboard"},{"itemprop":"description","content":"Dashboard overview page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Dashboard"},{"name":"twitter:description","content":"Dashboard overview page"},{"property":"og:title","content":"Dashboard"},{"property":"og:description","content":"Dashboard overview page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/"}]},"invoices":{"outputDir":"./invoices","lang":"en","title":"Invoices","cacheVersion":2,"meta":[{"name":"title","content":"Invoices"},{"name":"description","content":"Invoices management page"},{"name":"keywords","content":"invoices, billing"},{"itemprop":"name","content":"Invoices"},{"itemprop":"description","content":"Invoices management page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Invoices"},{"name":"twitter:description","content":"Invoices management page"},{"property":"og:title","content":"Invoices"},{"property":"og:description","content":"Invoices management page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/invoices/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/invoices/"}]},"home":{"outputDir":"./home","lang":"en","title":"Dashboard","cacheVersion":2,"meta":[{"name":"title","content":"Dashboard"},{"name":"description","content":"Dashboard overview page"},{"name":"keywords","content":"dashboard, overview"},{"itemprop":"name","content":"Dashboard"},{"itemprop":"description","content":"Dashboard overview page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Dashboard"},{"name":"twitter:description","content":"Dashboard overview page"},{"property":"og:title","content":"Dashboard"},{"property":"og:description","content":"Dashboard overview page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/home/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/home/"}]},"contacts":{"outputDir":"./contacts","lang":"en","title":"Contacts","cacheVersion":2,"meta":[{"name":"title","content":"Contacts"},{"name":"description","content":"Contacts management page"},{"name":"keywords","content":"contacts, management"},{"itemprop":"name","content":"Contacts"},{"itemprop":"description","content":"Contacts management page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Contacts"},{"name":"twitter:description","content":"Contacts management page"},{"property":"og:title","content":"Contacts"},{"property":"og:description","content":"Contacts management page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/contacts/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/contacts/"}]},"quotes":{"outputDir":"./quotes","lang":"en","title":"Quotes","cacheVersion":2,"meta":[{"name":"title","content":"Quotes"},{"name":"description","content":"Quotes management page"},{"name":"keywords","content":"quotes, management"},{"itemprop":"name","content":"Quotes"},{"itemprop":"description","content":"Quotes management page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Quotes"},{"name":"twitter:description","content":"Quotes management page"},{"property":"og:title","content":"Quotes"},{"property":"og:description","content":"Quotes management page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/quotes/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/quotes/"}]},"projects":{"outputDir":"./projects","lang":"en","title":"Projects","cacheVersion":2,"meta":[{"name":"title","content":"Projects"},{"name":"description","content":"Projects overview and management page"},{"name":"keywords","content":"projects, management"},{"itemprop":"name","content":"Projects"},{"itemprop":"description","content":"Projects overview and management page"},{"name":"twitter:card","content":"summary"},{"name":"twitter:title","content":"Projects"},{"name":"twitter:description","content":"Projects overview and management page"},{"property":"og:title","content":"Projects"},{"property":"og:description","content":"Projects overview and management page"},{"property":"og:site_name","content":"Dashboard"},{"property":"og:type","content":"website"},{"name":"robots","content":"index, follow"}],"scripts":{"head":"\n","body":"\n"},"baseTag":{"href":"/","target":"_self"},"alternateLinks":[{"rel":"alternate","hreflang":"x-default","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/projects/"},{"rel":"alternate","hreflang":"en","href":"https://ee250819-9284-4bd9-8c80-3996ccd39313.weweb-preview.io/projects/"}]}};

// Read the main HTML template
const template = fs.readFileSync(path.resolve(__dirname, 'template.html'), 'utf-8');
const compiledTemplate = handlebars.compile(template);

// Generate an HTML file for each page with its metadata
Object.values(pages).forEach(pageConfig => {
    // Compile the template with page metadata
    const html = compiledTemplate({
        title: pageConfig.title,
        lang: pageConfig.lang,
        meta: pageConfig.meta,
        scripts: {
            head: pageConfig.scripts.head,
            body: pageConfig.scripts.body,
        },
        alternateLinks: pageConfig.alternateLinks,
        cacheVersion: pageConfig.cacheVersion,
        baseTag: pageConfig.baseTag,
    });

    // Save output html for each page
    if (!fs.existsSync(pageConfig.outputDir)) {
        fs.mkdirSync(pageConfig.outputDir, { recursive: true });
    }
    fs.writeFileSync(`${pageConfig.outputDir}/index.html`, html);
});

const rollupOptionsInput = {};
for (const pageName in pages) {
    rollupOptionsInput[pageName] = path.resolve(__dirname, pages[pageName].outputDir, 'index.html');
}

export default defineConfig(() => {
    return {
        plugins: [nodePolyfills({ include: ['events', 'stream', 'string_decoder'] }), vue()],
        base: "/",
        resolve: {
            alias: {
                '@': path.resolve(__dirname, './src'),
            },
        },
        css: {
            preprocessorOptions: {
                scss: {
                    api: 'modern-compiler',
                },
            },
            postcss: {
                plugins: [autoprefixer],
            },
        },
        build: {
            chunkSizeWarningLimit: 10000,
            rollupOptions: {
                input: rollupOptionsInput,
                onwarn: (entry, next) => {
                    if (entry.loc?.file && /js$/.test(entry.loc.file) && /Use of eval in/.test(entry.message)) return;
                    return next(entry);
                },
                maxParallelFileOps: 900,
            },
        },
        logLevel: 'warn',
    };
});
