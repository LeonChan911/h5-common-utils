import { uglify } from 'rollup-plugin-uglify';
import rollupTypescript from 'rollup-plugin-typescript';
import replace from 'rollup-plugin-replace';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';
import json from "@rollup/plugin-json";

const env = process.env.NODE_ENV || '';

export default {
  input: 'src/index.ts',
  output: {
    file: 'dist/index.js',
    name: 'xmly/newretail-biz-utils2',
    format: 'umd'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    resolve({
      preferBuiltins: false,
    }),
    rollupTypescript(),
    commonjs(),
    json(),
  ].concat(env === 'production' || env === 'uat' ? uglify({
    compress: {
      drop_console: true,
    },
  }) : []),
};
