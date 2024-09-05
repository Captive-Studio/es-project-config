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
  const { className, children, ...otherProps } = props;
  return (
    <div className={classNames(componentName, className)} {...otherProps}>
      <div className={classNames(\`$\{componentName}__Content\`)}></div>
      {children}
    </div>
  );
}
`.slice(1);
