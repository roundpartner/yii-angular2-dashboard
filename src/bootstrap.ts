System.config({
    packages: {
        widget: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('./widget/main')
    .then(null, console.error.bind(console));
