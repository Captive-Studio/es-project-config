import { describe, expect, it } from 'vitest';
import { extractIssueId } from './extractIssueId.js';

describe('extractIssueId', () => {
  it('returns valid values for JIRA', () => {
    expect(extractIssueId('https://captive-team.atlassian.net/browse/KRJ-67')).toBe('KRJ-67');
  });
  it('returns undefined for invalid', () => {
    expect(extractIssueId('https://localhost')).toBe(undefined);
  });
});
