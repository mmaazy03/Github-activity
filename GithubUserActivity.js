const readline = require("node:readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question(`What's your github user name?`, async (name) => {
  console.log(`Hi ${name}! Fetching activities`);
  const eventsURL = `https://api.github.com/users/${name}/events`;

  try {
    const response = await fetch(eventsURL);
    const data = await response.json();

    if (response.status === 404) {
      throw new Error(`User "${name}" not found (404).`);
    }

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    if (data) {
      const githubEventTypes = {
        PushEvent: "A user pushed commits to a repository.",
        PullRequestEvent:
          "A pull request was opened, closed, merged, or updated.",
        IssuesEvent: "An issue was opened, closed, or reopened.",
        ForkEvent: "A user forked a repository.",
        WatchEvent: "A user starred a repository.",
        CreateEvent: "A repository, branch, or tag was created.",
        DeleteEvent: "A repository, branch, or tag was deleted.",
        CommitCommentEvent: "A user commented on a commit.",
        PullRequestReviewEvent: "A review was submitted for a pull request.",
        PullRequestReviewCommentEvent:
          "A comment was added to a pull request review.",
        IssueCommentEvent: "A comment was added to an issue.",
        GollumEvent: "A user updated a GitHub Wiki page.",
        ReleaseEvent: "A release was published in a repository.",
        PublicEvent: "A repository was made public.",
        MemberEvent: "A user was added to a repository.",
        SponsorshipEvent: "A user sponsored a repository via GitHub Sponsors.",
      };

      const updatedGitLogs = data?.map((item) => githubEventTypes[item?.type]);
      console.log("updatedGitLogs", updatedGitLogs);
    }
  } catch (error) {
    console.log("error", error);
  }

  rl.close();
});
