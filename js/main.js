requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'js',
    //except, if the module ID starts with "app",
    //load it from the js/app directory. paths
    //config is relative to the baseUrl, and
    //never includes a ".js" extension since
    //the paths config could be for a directory.
    paths: {
        app: './',
        data: '../data'
    }
});




requirejs(['js/action.js'],
function   (action) {
    //jQuery, canvas and the app/sub module are all
    //loaded and can be used here now.
});