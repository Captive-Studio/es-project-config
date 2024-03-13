export function extractIssueId(issueURL: string) {
  try {
    const url = new URL(issueURL);

    // JIRA
    if (url.hostname.endsWith('.atlassian.net')) {
      return url.pathname.split('/').at(-1);
    }
    return undefined;
  } catch {
    return undefined;
  }
}
