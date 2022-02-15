
var HelloWorldLayer3 = cc.Layer.extend({
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

        var earthDragon = new cc.Sprite.create(res.earthDragon_png);
        earthDragon.setAnchorPoint(cc.p(-1.5,0.5));
        earthDragon.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon,1);
        var earthDragon_action = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),85);
        var earthDragon_action1 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(0,0)),25);
        var earthDragon_action2 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),75);
        var sequence_earthDragon = cc.Sequence.create(earthDragon_action, earthDragon_action1, earthDragon_action2);
        earthDragon.runAction(sequence_earthDragon);

        var dinosor1 = new cc.Sprite.create(res.dinosor1_png);
        dinosor1.setAnchorPoint(cc.p(-1.2,0.5));
        dinosor1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(dinosor1,1);
        var dinosor1_action = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),85);
        var dinosor1_action1 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(0,0)),25);
        var dinosor1_action2 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),75);
        var sequence_dinosor1 = cc.Sequence.create(dinosor1_action, dinosor1_action1, dinosor1_action2);
        dinosor1.runAction(sequence_dinosor1);

        var earthDragon1 = new cc.Sprite.create(res.earthDragon_png);
        earthDragon1.setAnchorPoint(cc.p(-1.5,0.5));
        earthDragon1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(earthDragon1,1);
        earthDragon1.setOpacity(0);
        var earthDragon1_action0 = cc.FadeIn.create(6);
        var earthDragon1_action = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),85);
        var earthDragon1_action1 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(0,0)),25);
        var earthDragon1_action2 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),75);
        var sequence_earthDragon1 = cc.Sequence.create(earthDragon1_action0,earthDragon1_action, earthDragon1_action1, earthDragon1_action2);
        earthDragon1.runAction(sequence_earthDragon1);

        var dinosor2 = new cc.Sprite.create(res.dinosor2_png);
        dinosor2.setAnchorPoint(cc.p(-1.1,0.5));
        dinosor2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(dinosor2,1);
        dinosor2.setOpacity(0);
        var dinosor2_action0 = cc.FadeIn.create(6);
        var dinosor2_action = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),85);
        var dinosor2_action1 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(0,0)),25);
        var dinosor2_action2 = cc.Repeat.create(cc.MoveBy.create(0.04,cc.p(-5,0)),75);
        var sequence_dinosor2 = cc.Sequence.create(dinosor2_action0,dinosor2_action, dinosor2_action1, dinosor2_action2);
        dinosor2.runAction(sequence_dinosor2);
      

        var button = new ccui.Button();
        button.loadTextures(res.earthDragon_png, res.CloseSelected_png);
        button.setAnchorPoint(cc.p(0.5,0.5));
        button.x = size.width / 2;
        button.y = size.height / 2;
        button.addTouchEventListener(this.touchEvent, this);
        this.addChild(button);
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
    }

});

var HelloWorldScene3 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer3();
        this.addChild(layer);
    }
});

