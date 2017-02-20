# css-loader-test-2

[![Greenkeeper badge](https://badges.greenkeeper.io/boopathi/css-loader-test-2.svg)](https://greenkeeper.io/)

When using `css?modules!postcss`, some where, the url('./relative') gets replaced to url('relative'), and the module mode of css-loader allows it to import only from moduleDirectories.

Interestingly, this happens in some postcss plugin I suppose. Removing postcss-loader helps, and everything works fine.

## test

`npm test`

## Bug test for

[phrontend-webpack](https://github.com/flipkart-incubator/phrontend-webpack)

Issue: https://github.com/flipkart-incubator/phrontend-webpack/issues/8
