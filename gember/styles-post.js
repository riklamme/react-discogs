#! /usr/bin/env node

const gc = require('../gember.config');
const chalk = require('chalk');
const exec = require('child-process-promise').exec;
const fs = require('fs');

const log = console.log.bind(console);

log(chalk.green('[styles:post]: start'));
console.time(chalk.green('[styles:post]: finished in'));

exec(`rm -rf ${gc.dir.build.styles}/*.css.map \
        && \
        postcss \
            --use autoprefixer --autoprefixer.browsers 'last 2 version' \
            --replace ${gc.dir.build.styles}/* \
            --map file`)
    .then(function (result) {
        const stderr = result.stderr;

        if (stderr) {
            log(chalk.blue('\n',stderr,'\n'));
        }

        console.timeEnd(chalk.green('[styles:post]: finished in'));
        log('\n');
    })
    .catch(function (error) {
        console.error(chalk.red('[styles:post]: ERROR =>', error.stderr));
    });
