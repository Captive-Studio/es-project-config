import * as Variables from './variables.js';

const comment = (expression: string) => `<!-- ${expression} -->`;

export const template = `
<!-- 📄 Standard : https://www.notion.so/captive/Le-cadrage-technique-dbb611e45f114737a6b14745caa584e9?pvs=4 -->
# {{{${Variables.title}}}}
{{#if ${Variables.issueURL}}}

> [{{#if ${Variables.issueId}}}{{ ${Variables.issueId} }}{{else}}Related Issue{{/if}}]({{{${Variables.issueURL}}}})
{{/if}}

## Prérequis

## Backend

${comment('1️⃣ ACTUEL : Est-ce que j’ai déjà du code ou une PR qui ressemble à cette feature ?')}

${comment('2️⃣ API : Modification ou création d’un Point d’API ?')}
${comment('    👉 URL :')}

${comment('    👉 Schéma/Exemple de réponse :')}

${comment('3️⃣ DATABASE : Modification de la base de données ?')}
${comment('   👉 Schema/Dessin de base données voulue ?')}

${comment('   👉 Quel impact sur les données existantes ?')}

${comment(`   👉 Ajout colonne ?
        ✓ Impact sur mes données existantes ?
        ✓ Besoin d’un index ?
        ✓ Unicité ?
        ✓ Présence ?
`)}

${comment(`   👉 Modification/Suppression colonne ?
        ✓ Impact sur mes données existantes ?
        ✓ Impact sur le code ?
        ✓ Réversibilité ?
`)}

${comment('4️⃣ CAS LIMITES : quels sont les cas limites ou pièges à éviter ?')}

${comment('5️⃣ DETTE TECHNIQUE ?')}

${comment('   👉 Nouvel outil / library / gem / npm ?')}

${comment('   👉 Impact sur la maintenance, performance, build ?')}

${comment('6️⃣ INCONNUES : quelles sont les choses que je ne sais pas, ne comprends pas ou ne sais pas faire ?')}

## Frontend
`.slice(1);
