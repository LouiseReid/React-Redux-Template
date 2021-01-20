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

  const branchTicketMatch = branchName.match(/^[A-Z][A-Z0-9_]+-\d+/);

  const excludedBranches = ["master", "dev", "development"];
  if (excludedBranches.includes(branchName.trim())) {
    process.exit(0);
  }

  if (!branchTicketMatch) {
    exitOnError("Jira ticket ID not found in branch name");
  } else {
    const jiraId = branchTicketMatch[0];

    const messageFile = process.env.HUSKY_GIT_PARAMS;
    const message = fs.readFileSync(messageFile, { encoding: "utf-8" });
    const messageTitle = message.split("\n")[0];

    if (!message.startsWith(jiraId)) {
      const messageLines = message.split("\n");
      messageLines[0] = `${jiraId}: ${messageTitle}`;

      fs.writeFileSync(messageFile, messageLines.join("\n"), {
        encoding: "utf-8",
      });
    }
  }
});
