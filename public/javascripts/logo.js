/**
 * Created with JetBrains WebStorm.
 * User: darenmay
 * Date: 4/7/13
 * Time: 11:46 AM
 * To change this template use File | Settings | File Templates.
 */

window.addEventListener(
    'load',
    function () {
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
    slide.setFillStyle('#FFFFFF');

    var rows = 4;
    var columns = 16;

    var logo_ci = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('logo'), rows, columns
    );

    var i, j;

    var xoff = (slide.width - logo_ci.width) / 2;
    var yoff = (slide.height - logo_ci.height) / 2;

    for (i = 0; i < rows; i++) {
        for (j = 0; j < columns; j++) {
            var actor = new CAAT.Foundation.Actor().
                setBackgroundImage(logo_ci.getRef(), true).
                setSpriteIndex(j + i * columns).
                setLocation(-100, -100);

            var bc = new CAAT.Behavior.ContainerBehavior().
                setFrameTime(0, 23000).
                setCycle(true);

            var path1 = new CAAT.PathUtil.Path().setCubic(
                Math.random() < .5 ? slide.width + Math.random() * 50 : -50 - Math.random() * slide.width,
                Math.random() < .5 ? slide.width + Math.random() * 50 : -50 - Math.random() * slide.height,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.width,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.height,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.width,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.height,
                xoff + j * logo_ci.singleWidth,
                yoff + i * logo_ci.singleHeight
            );

            var b1 = new CAAT.Behavior.PathBehavior().
                setFrameTime(Math.random() * 2000, 5000 + Math.random() * 2000).
                setValues(
                    path1
                ).addListener({
                    behaviorExpired: function (behavior, time, actor) {
                        behavior.path.pathSegments[0].curve.coordlist[0].set(
                            Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.width,
                            Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.height
                        )
                    }
                });

            var path2 = new CAAT.PathUtil.Path().setCubic(
                xoff + j * logo_ci.singleWidth,
                yoff + i * logo_ci.singleHeight,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.width,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.height,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.width,
                (Math.random() < .5 ? 1 : -1) * Math.random() * slide.height,
                Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.width,
                Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.height
            );

            var b2 = new CAAT.Behavior.PathBehavior().
                setFrameTime(15000 + Math.random() * 2000, 5000).
                setValues(
                    path2
                ).addListener({
                    behaviorExpired: function (behavior, time, actor) {
                        behavior.path.pathSegments[0].curve.coordlist[3].set(
                            Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.width,
                            Math.random() < .5 ? slide.width + Math.random() * 50 : -20 - Math.random() * slide.height
                        )
                    }
                });

            bc.addBehavior(b1);
            bc.addBehavior(b2);

            actor.addBehavior(bc);
            slide.addChild(actor);
        }
    }

}
