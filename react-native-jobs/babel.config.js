module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      // Remove 'expo-router/babel' and include any other plugins you might need
    ],
  };
};
