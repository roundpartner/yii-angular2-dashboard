System.config({
    packages: {
        news: {
            format: 'register',
            defaultExtension: 'js'
        }
    }
});
System.import('./news/main')
    .then(null, console.error.bind(console));
