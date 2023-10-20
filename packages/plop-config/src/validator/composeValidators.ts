export const composeValidators =
  (...validatorFunctions: ((promptValue: string) => boolean | string)[]) =>
  (promptValue: string): boolean | string => {
    const validationErrors: string[] = [];

    validatorFunctions.forEach((validatorFunction) => {
      const validationResult = validatorFunction(promptValue);

      if (typeof validationResult === 'string') {
        validationErrors.push(validationResult);
      }
    });

    /**
     * If `validationErrors` array has some validation error return the first error.
     */
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    return validationErrors.length === 0 ? true : validationErrors[0]!;
  };
