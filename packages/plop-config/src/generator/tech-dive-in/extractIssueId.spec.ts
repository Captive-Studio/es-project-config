import { describe, expect, it } from 'vitest';
import { extractIssueId } from './extractIssueId.js';

describe('extractIssueId', () => {
  it.each([
    ['https://captive-team.atlassian.net/browse/KRJ-1234567890', 'KRJ-1234567890'],
    ['https://captive-team.atlassian.net/browse/KRJ-67', 'KRJ-67'],
    ['https://captive-team.atlassian.net/browse/KRJ-6', 'KRJ-6'],
    ['https://captive-team.atlassian.net/browse/KRJ-', undefined],
    ['https://captive-team.atlassian.net/browse/XXXX-1', 'XXXX-1'],
    ['https://captive-team.atlassian.net/browse/XX-1', 'XX-1'],
    ['https://captive-team.atlassian.net/browse/X-1', undefined],
  ])('returns valid values for JIRA', (url, expected) => {
    expect(extractIssueId(url)).toBe(expected);
  });
  it('returns undefined for invalid url', () => {
    expect(extractIssueId('blah')).toBe(undefined);
    expect(extractIssueId('')).toBe(undefined);
  });
});
