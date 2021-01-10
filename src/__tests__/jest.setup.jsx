/* eslint-env jest */
/* global fail */

jest.mock('react-native-gesture-handler/RNGestureHandlerModule');

const showConsoleErrors = [
  'Warning: An update',
  'Warning: Cannot update a component',
];

const logConsoleError = console.error;
console.error = (...args) => {
  logConsoleError(...args);

  const errorMessage = args[0];
  if (showConsoleErrors.find((error) => errorMessage.includes(error))) {
    fail(errorMessage);
  }
};
