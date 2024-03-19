import * as Variables from './variables.js';

export const template = `
<!-- 📄 Standard : https://www.notion.so/captive/Le-cadrage-technique-dbb611e45f114737a6b14745caa584e9?pvs=4 -->
# {{{${Variables.title}}}}
{{#if ${Variables.issueURL}}}

> [{{#if ${Variables.issueId}}}{{ ${Variables.issueId} }}{{else}}Related Issue{{/if}}]({{{${Variables.issueURL}}}})
{{/if}}

## Prérequis

## Backend

## Frontend
`.slice(1);
