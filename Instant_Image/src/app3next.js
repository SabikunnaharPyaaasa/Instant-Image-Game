
var HelloWorldLayernext = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        //////////////////////////////
        // 1. super init first
        this._super();

        /////////////////////////////
        // 2. add a menu item with "X" image, which is clicked to quit the program
        //    you may modify it.
        // ask the window size
        var size = cc.winSize;

        var blur = new cc.Sprite.create(res.blur_png);
        blur.setAnchorPoint(cc.p(0.5,0.5));
        blur.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(blur,1);
        var buy = new cc.Sprite.create(res.buy_png);
        buy.setAnchorPoint(cc.p(0.5,0.5));
        buy.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(buy,1);

        var earthDragon0 = new cc.Sprite.create(res.earthDragon_png);
        earthDragon0.setAnchorPoint(cc.p(1.77,0.5));
        earthDragon0.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon0,1);
        var earthDragon0_action = cc.Repeat.create(cc.MoveBy.create(0.05,cc.p(0,0)),15);
        var earthDragon0_action1 = cc.Repeat.create(cc.MoveBy.create(0.05,cc.p(-5,0)),15);
        var sequence_earthDragon0 = cc.Sequence.create(earthDragon0_action,earthDragon0_action1);
        earthDragon0.runAction(sequence_earthDragon0);

        var earthDragon = new cc.Sprite.create(res.earthDragon_png);
        earthDragon.setAnchorPoint(cc.p(0.5,0.5));
        earthDragon.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon,1);
        earthDragon.setScale(1.18);
        //var earthDragon_action1 = cc.Repeat.create(cc.MoveBy.create(0.01,cc.p(-5,0)),63);
        //var earthDragon_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
        var earthDragon_action2 = cc.Repeat.create(cc.MoveBy.create(0.03,cc.p(0,0)),25);
        var earthDragon_action4 = cc.ScaleBy.create(0.2,0.85,0.85);
        var earthDragon_action5 = cc.Repeat.create(cc.MoveBy.create(0.01,cc.p(-5,0)),57);
        var sequence_earthDragon = cc.Sequence.create(earthDragon_action2,earthDragon_action4,earthDragon_action5);
        earthDragon.runAction(sequence_earthDragon);


        var earthDragon1 = new cc.Sprite.create(res.earthRed_png);
        earthDragon1.setAnchorPoint(cc.p(-0.75,0.5));
        earthDragon1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon1,1);

        var earthDragon1_action = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(0,0)),25);
        var earthDragon1_action2 = cc.Repeat.create(cc.MoveBy.create(0.01,cc.p(-5,0)),65);
        var earthDragon1_action3 = cc.ScaleBy.create(0.2,1.15,1.15);
        var sequence_earthDragon1 = cc.Sequence.create(earthDragon1_action,earthDragon1_action2,earthDragon1_action3);
        earthDragon1.runAction(sequence_earthDragon1);



        var earthDragon2 = new cc.Sprite.create(res.earthDragon_png);
        earthDragon2.setAnchorPoint(cc.p(-4,0.5));
        earthDragon2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon2,1);

        var earthDragon2_action = cc.Repeat.create(cc.MoveBy.create(0.013,cc.p(-5,0)),145);
        var sequence_earthDragon2 = cc.Sequence.create(earthDragon2_action);
        earthDragon2.runAction(sequence_earthDragon2);

        this.scheduleOnce(rightarrow,2);
        //this.scheduleOnce(leftarrow,2);

        var button = new ccui.Button();
        button.loadTextures(res.earthDragon_png, res.CloseSelected_png);
        button.setAnchorPoint(cc.p(0.5,0.5));
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);

        var buttonnext = new ccui.Button();
        buttonnext.loadTextures(res.rightarrow_png, res.CloseSelected_png);
        buttonnext.setAnchorPoint(cc.p(-1.3,4));
        buttonnext.x = size.width / 2;
        buttonnext.y = size.height / 2;
        buttonnext.addTouchEventListener(this.touchEventnext, this);
        this.addChild(buttonnext);
        return true;
    },
    touchEvent: function(sender, type) 
     {
        switch(type)
         {
             case ccui.Widget.TOUCH_BEGAN: 
             cc.log("pressed");
             var scene = new HelloWorldScene4();
            cc.director.pushScene(scene);
                    
            break;
        }
    },
    touchEventnext: function(sender, type) 
    {
       switch(type)
        {
            case ccui.Widget.TOUCH_BEGAN: 
            cc.log("pressed");
            var scene = new HelloWorldScenenext1();
           cc.director.pushScene(scene);
                   
           break;
       }
   }

});

function rightarrow()
{
    var size = cc.winSize;
    var rightarrow = new cc.Sprite.create(res.rightarrow_png);
    rightarrow.setAnchorPoint(cc.p(-1.3,4));
    rightarrow.setPosition(cc.p(size.width/2,size.height/2));
    this.addChild(rightarrow,1);
}
function leftarrow()
{
    var size = cc.winSize;
    var leftarrow = new cc.Sprite.create(res.leftarrow_png);
    leftarrow.setAnchorPoint(cc.p(2,4));
    leftarrow.setPosition(cc.p(size.width/2,size.height/2));
    this.addChild(leftarrow,1);
}

var HelloWorldScenenext = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayernext();
        this.addChild(layer);
    }
});

