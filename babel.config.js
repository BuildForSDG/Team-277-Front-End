module.exports = {
  presets: [
    [
      "@babel/preset-react",
      '@babel/preset-env',
      {
        targets: {
          node: 'current'
        }
      }
    ]
    
  ],
  "plugins": [
    [
      "@babel/plugin-syntax-dynamic-import",
      "@babel/plugin-proposal-class-properties"
    ]
  ]
};
