#! /usr/bin/env node

const program = require("commander");
const inquirer = require("inquirer");
const path = require("path");
const ncp = require("ncp");

const package = require("../package.json");

// 定义当前版本
program.version(`**v${package.version}**`);

program
  .command("create")
  .description("create react template")
  .action(async () => {
    const { name } = await inquirer.prompt({
      type: "input",
      name: "name",
      message: "please type project name:",
    });

    const templateDir = path.resolve(__dirname, "../templates/react");
    const projectDir = `${process.cwd()}/${name}`;

    ncp(templateDir, projectDir);
  });

// 解析用户执行命令传入参数
program.parse(process.argv);
