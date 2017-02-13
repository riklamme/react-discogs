#! /usr/bin/env node

'use strict';

const gc = require('../gember.config');
const chalk = require('chalk');
const chokidar = require('chokidar');
const exec = require('shelljs').exec;

// Something to use when events are received.
const log = console.log.bind(console);

// Initialize watcher.
const watcher = chokidar.watch('.', {
    cwd: gc.dir.sources,
    ignorePermissionErrors: true
});

// run task, pass on file
const run = (task, file) => {

    // log(file);
    let path = file.split('/');

    switch (task) {
        case 'styles': {
            log(chalk.green(`[watch]: Run => [styles]`));

            exec(`npm run styles -s --colors`);

            // if (path.length > 2) {
            //     exec(`npm run styles -s --colors`);
            // } else {
            //     exec(`npm run styles:build -s -- --path ${file} --colors && npm run styles:post -s --colors`);
            // }

            break;
        }
        case 'templates': {
            log(chalk.green(`[watch]: Run => [templates]`));
            exec(`npm run templates -s --colors`);

            // if (path.length > 2) {
            //     exec(`npm run templates -s --colors`);
            // } else {
            //     exec(`npm run templates -s -- --path ${file} --colors`);
            // }

            break;
        }
        // case 'svg': {
        //     log(chalk.green(`[watch]: Run => [svg:sprite]`));
        //     exec(`npm run svg:sprite -s`);
        //     break;
        // }
        // case 'gfx': {
        //     log(chalk.green(`[watch]: Run => [gfx:gfx]`));
        //     exec('npm run gfx:gfx -s');
        //     break;
        // }
        // case 'images': {
        //     log(chalk.green(`[watch]: Run => [gfx:images]`));
        //     exec('npm run gfx:images -s');
        //     break;
        // }
        case 'scripts': {
            log(chalk.green(`[watch]: Run => [scripts]`));
            // exec(`shell-exec --colored-output --quiet 'npm run scripts -s'`);
            exec(`npm run webpack:build --colors`);
            // exec(`npm run scripts:bundle -s -- --bundle ${path[1]} --colors`);
            break;
        }
        default: {
            log(chalk.red(`[watch]: WARNING => ${task} not found`));
        }
    }
};

watcher.on('ready', () => {
    log(chalk.green('[watch]: Ready, watching for changes'));

    watcher.on('change', (file, stats) => {
        const fSplit = file.split('/');
        const task = fSplit[0];
        const dirCheck = fSplit[1];

        if (dirCheck.startsWith('_')) {
            return false;
        }

        log(chalk.blue(`[watch]: Changed => ${file}`));


        if (stats) {
            log(`File ${file} changed size to ${stats.size}`);
        }

        run(task, file);
    });

    watcher.on('add', (file, stats) => {
        log(chalk.magenta(`[watch]: Added => ${file}`));

        const task = file.split('/')[0];

        if (stats) {
            log(`File ${file} changed size to ${stats.size}`);
        }

        run(task, file);
    });
});

watcher
    .on('error', error => log(chalk.red(`[watch]: ERROR: ${error}`)))
    .on('unlink', path => log(chalk.red(`[watch]: Removed => ${path}`)))
    .on('unlinkDir', path => log(chalk.red(`[watch]: Removed Dir => ${path}`)));
