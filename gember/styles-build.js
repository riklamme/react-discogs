#! /usr/bin/env node

'use strict';

const gc = require('../gember.config');
const chalk = require('chalk');
const exec = require('child-process-promise').exec;

const log = console.log.bind(console);

const arg = require('yargs')
    .option('path', {
        alias: 'p',
        string: true,
        describe: 'specified path/filename that has been modified'
    })
    .argv;

const styles = (arg.path === undefined) ? gc.dir.styles + '/*.scss' : gc.dir.sources + '/' + arg.path;

log(chalk.green('[styles:build]: start'));
console.time(chalk.green('[styles:build]: finished in'));

exec(`node-sass ${styles} \
        --output ${gc.dir.build.styles} \
            --output-style compressed`)
    .then(function (result) {
        const stderr = result.stderr;

        log('\n' + chalk.blue(stderr));
        console.timeEnd(chalk.green('[styles:build]: finished in'));
        log('\n');
    })
    .catch(function (error) {
        let err = JSON.parse(error.stderr);

        log(chalk.red(`[styles:build]: Error 🚒  🚒  🚒  \n`));
        log(`${chalk.dim('File')} ${chalk.red(err.file)}
${chalk.dim('Line')} ${err.line}:${err.column}

${chalk.dim('Message ⤵︎')}
${err.message}`);
    });
