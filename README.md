 ## GitHub-Activity

This is a Node.js script that fetches a GitHub user's recent public activity events using the GitHub API and displays them in a human-readable format.

Features

Asks for a GitHub username via the command line.

Fetches the user's latest public events from GitHub.

Displays events in a human-friendly format (e.g., "A user pushed commits to a repository.").

Handles errors (e.g., invalid usernames, API issues, etc.).

Requirements

Node.js (v16 or later recommended)

Internet connection

Installation

Clone the repository or download the script:

git clone https://github.com/your-username/Github-activity.git
cd Github-activity

Navigate to the project directory:

cd Github-activity

Install dependencies (if needed):

npm install

Usage

Run the script using Node.js:

node index.js

Example Output

What's your GitHub username? torvalds
Hi torvalds! Fetching activities...
updatedGitLogs [
  'A user pushed commits to a repository.',
  'A pull request was opened, closed, merged, or updated.',
  'An issue was opened, closed, or reopened.'
]

API Reference

This script uses the GitHub API endpoint:

GET https://api.github.com/users/{username}/events

## Error Handling

If the username does not exist, it returns: User "{username}" not found (404).

If the API request fails, it logs the error message.

If the user has no recent events, it returns null values in the output.

## License

This project is licensed under the MIT License.

## Contributing

Feel free to fork this repository, submit pull requests, or open issues if you have improvements or find bugs!

