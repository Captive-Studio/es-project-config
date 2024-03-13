import * as Variables from './variables.js';

export const template = `
# {{ ${Variables.title} }}

{{#if ${Variables.issueURL}}}
> [Related Issue]({{ ${Variables.issueURL} }})
{{/if}}


## Prérequis

## Backend

## Frontend

`.slice(1);
