System.config({
    packages: {
        widgets: {
            format: 'register',
            defaultExtension: 'js',
        }
    }
});
System.import('./widgets/main')
    .then(null, console.error.bind(console));
System.import('./widgetquicklinks/main')
    .then(null, console.error.bind(console));