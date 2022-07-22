const workboxBuild = require('workbox-build');
// NOTE: This should be run *AFTER* all your assets are built
const buildSW = () => {
  // This will return a Promise
  workboxBuild
    .injectManifest({
      swSrc: 'src/sw-custom.js', // this is your sw template file
      swDest: 'build/sw-custom.js', // this will be created in the build step
      globDirectory: 'build',
      globPatterns: ['**/*.{jpg,png,html,js,css,json}'], // precaching jpg files
    })
    .then(({ count, size, warnings }) => {
      warnings.forEach(console.warn);
      console.log(`${count} files will be precached, totaling ${size} bytes.`);
    })
    .catch(console.error);
};
buildSW();