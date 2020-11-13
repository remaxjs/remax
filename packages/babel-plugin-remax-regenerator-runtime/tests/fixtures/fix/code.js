try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  Function('r', 'regeneratorRuntime = r')(runtime);
}
