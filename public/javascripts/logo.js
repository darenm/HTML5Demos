/**
 * Created with JetBrains WebStorm.
 * User: darenmay
 * Date: 4/7/13
 * Time: 11:46 AM
 * To change this template use File | Settings | File Templates.
 */

window.addEventListener(
    'load',
    function() {
        CAAT.Module.Initialization.init(
            800, 500,
            'canvas',
            [
                {id: 'logo', url: 'images/logo-Crank211.png'}
            ],
            scene1
        );
    },
    false);

function scene1(director) {
    var slide = director.createScene();
    slide.setFillStyle('#000');

    var rows = 4;
    var columns = 16;

    var logo_ci = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('logo'), rows, columns
    );

    var i, j;

    var xoff = (slide.width - logo_ci.width) / 2;
    var yoff = (slide.height - logo_ci.height) / 2;

    for ( i = 0; i < rows; i++ ) {
        for ( j = 0; j < columns; j++) {
            var actor = new CAAT.Foundation.Actor();
        }
    }

}
