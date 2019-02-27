// @flow

/*::
 
type ApiType = {|
  +cache: {|
    forever: () => void
  |}
|}
 
*/

module.exports = function(api /*: ApiType */) {
  api.cache.forever();

  const presets = ['@kiwicom/babel-preset-kiwicom'];
  const extraPlugins = [];

  return {
    presets,
    plugins: extraPlugins,
  };
};
