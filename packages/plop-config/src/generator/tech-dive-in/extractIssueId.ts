function undefinedWhenEmpty(value: string | undefined | null) {
  return value == null || value === '' ? undefined : value;
}

const jiraMatcher = /[A-Z]{2,255}-\d+/;

export function extractIssueId(issueURL: string) {
  try {
    const url = new URL(issueURL);

    // JIRA
    return undefinedWhenEmpty(url.pathname.match(jiraMatcher)?.[0]);
  } catch {
    return undefined;
  }
}
