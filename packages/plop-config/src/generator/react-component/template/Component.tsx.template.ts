import * as Variables from './variables.js';

export const template = `
import * as React from 'react';
import classNames from 'clsx';

// Name and options
const componentName = '{{ ${Variables.componentName} }}';

// Component properties
export interface {{ ${Variables.componentName} }}Props extends React.ComponentProps<'div'> {
  // example?: string
}

export function {{ ${Variables.componentName} }}(props: {{ ${Variables.componentName} }}Props) {
  return (
    <div className={classNames(componentName, props.className)}>
      <div className={classNames(\`$\{componentName}__Content\`)}>
        {props.example}
      </div>
      {props.children}
    </div>
  );
}
`.slice(1);
