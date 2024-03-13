import type { PlopGeneratorConfig } from 'plop';
import slugify from '@sindresorhus/slugify';
import * as Variables from './template/variables.js';
import * as Index from './template/document.md.template.js';
import { composeValidators, requireNotEmpty } from '../../validator/index.js';
import { extractIssueId } from './extractIssueId.js';

export interface TechDiveInGeneratorOptions {
  techDiveInPath: string;
}

export const techDiveInGenerator = (options: TechDiveInGeneratorOptions) => ({
  name: 'tech-dive-in',
  generator: {
    prompts: [
      {
        name: Variables.issueURL,
        type: 'input',
        message: 'Issue URL :',
      },
      {
        name: Variables.title,
        type: 'input',
        message: 'Title :',
        validate: composeValidators(requireNotEmpty()),
      },
    ],
    actions: (answers) => {
      const issueURL = answers?.[Variables.issueURL] as string | undefined;
      const issueId = issueURL == null ? undefined : extractIssueId(issueURL);
      const title = (answers?.[Variables.title] ?? '') as string;
      return [
        {
          path: `${options.techDiveInPath}/${issueId == null ? '' : `${issueId}-`}${slugify(title)}/index.md`,
          template: Index.template,
          type: 'add',
        },
      ];
    },
  } satisfies Partial<PlopGeneratorConfig>,
});
