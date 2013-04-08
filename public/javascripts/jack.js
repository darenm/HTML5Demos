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
                {id: 'card', url: 'images/jack_of_spades2.jpg'}
            ],
            scene1
        );
    },
    false);

function scene1(director) {
    var slide = director.createScene();

    slide.setFillStyle('#FFFFFF');

    var rows = 1;
    var columns = 1;

    var logo_ci = new CAAT.Foundation.SpriteImage().initialize(
        director.getImage('card'), rows, columns
    );

    var actor = new CAAT.Foundation.Actor().
        setBackgroundImage(logo_ci.getRef(), true).
        setSpriteIndex(0).
        setLocation(0, 0);

//    var bc = new CAAT.Behavior.ContainerBehavior().
//        setFrameTime(0, 10000).
//        setCycle(true);


//    var b1 = new CAAT.Behavior.PathBehavior().
//        setFrameTime(0, 1000).
//        setValues(path1);

    var handleMouse = function(mouseEvent) {
        actor.centerOn(mouseEvent.screenPoint.x, mouseEvent.screenPoint.y);
        // show some event info:
        document.getElementById('output').innerHTML=
            "<b>Actor:</b>"+ actor.name+" "+
                "<b>Local Coord:</b> ("+
                // with all this stuff i'm just stripping
                // off any decimal beyond .99
                ((mouseEvent.point.x*100)>>0)/100+", "+
                ((mouseEvent.point.y*100)>>0)/100+") "+
                "<b>Screen Coord:</b> ("+
                mouseEvent.screenPoint.x+", "+
                mouseEvent.screenPoint.y+") ";
    };


//    bc.addBehavior(b1);
    actor.addBehavior(new CAAT.Behavior.RotateBehavior().
        setValues(0, 2 * Math.PI).
        setDelayTime(0, 3000).
        setCycle(true));

//    bc.addBehavior(b2);
//    actor.addBehavior(bc);
    slide.addChild(actor);

    //slide.mouseMove = handleMouse;
    //bg.mouseDrag = handleMouse;
    actor.mouseMove = handleMouse;
    actor.mouseDrag = handleMouse;
}
