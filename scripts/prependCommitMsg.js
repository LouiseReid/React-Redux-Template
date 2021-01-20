#!/usr/bin/env node

const fs = require("fs");
const { exec } = require("child_process");

const exitOnError = (error) => {
  if (error) {
    console.log(error);
    process.exit(1);
  }
};

exec("git rev-parse --abbrev-ref HEAD", (err, branchName, stderr) => {
  exitOnError(err);
  exitOnError(stderr);

  const excludedBranches = ["master", "dev", "development"];
  if (excludedBranches.includes(branchName.trim())) {
    process.exit(0);
  }

  const messageFile = process.env.HUSKY_GIT_PARAMS;
  const message = fs.readFileSync(messageFile, { encoding: "utf-8" });
  const messageTitle = message.split("\n")[0];

  if (!message.startsWith(branchName)) {
    const messageLines = message.split("\n");
    messageLines[0] = `${branchName}: ${messageTitle}`;

    fs.writeFileSync(messageFile, messageLines.join("\n"), {
      encoding: "utf-8",
    });
  }
});
