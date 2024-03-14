import * as Variables from './variables.js';

export const template = `
# {{ ${Variables.title} }}

{{#if ${Variables.issueURL}}}
> [{{#if ${Variables.issueId}}}{{ ${Variables.issueId} }}{{else}}Related Issue{{/if}}]({{ ${Variables.issueURL} }})
{{/if}}

## Prérequis

## Backend

## Frontend

`.slice(1);
