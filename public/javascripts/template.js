/**
 * Created with JetBrains WebStorm.
 * User: darenmay
 * Date: 4/7/13
 * Time: 10:44 AM
 * To change this template use File | Settings | File Templates.
 */

CAAT.Module.Initialization = CAAT.Module.Initialization || {}

CAAT.Module.Initialization.init = function(width, height, canvasId, imageURL, onEndLoading) {
    var canvasContainer = document.getElementById(canvasId);
    var director = new CAAT.Foundation.Director().initialize(
        width || 800,
        height || 600,
        canvasContainer);

    var scene = director.createScene();

    var circle = new CAAT.ShapeActor().
        setLocation(20, 20).
        setSize(60, 60).
        setFillStyle('#ff0000').
        setStrokeStyle('#000000');

    scene.addChild(circle);

    director.loop(1);

    new CAAT.Module.Preloader.ImagePreloader().loadImages(
        imageURL,
        function on_load(counter, images) {
            if (counter == images.length) {
                director.emptyScenes();
                director.setImagesCache(images);
                onEndLoading(director);
                CAAT.loop(60);
            }
        }
    ) ;
};



