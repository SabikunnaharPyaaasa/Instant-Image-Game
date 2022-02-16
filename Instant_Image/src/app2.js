
var HelloWorldLayer2 = cc.Layer.extend({
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
        var locked_cell_bg = new cc.Sprite.create(res.locked_cell_bg_png);
        locked_cell_bg.setAnchorPoint(cc.p(0.5,0.6));
        locked_cell_bg.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(locked_cell_bg,1);

        var locked_cell_bg1 = new cc.Sprite.create(res.locked_cell_bg_png);
        locked_cell_bg1.setAnchorPoint(cc.p(0.5,1.6));
        locked_cell_bg1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(locked_cell_bg1,1);

        var locked_cell_bg2 = new cc.Sprite.create(res.locked_cell_bg_png);
        locked_cell_bg2.setAnchorPoint(cc.p(0.5,2.6));
        locked_cell_bg2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(locked_cell_bg2,1);

        var stone1 = new cc.Sprite.create(res.stone1_png);
        stone1.setAnchorPoint(cc.p(0.5,0.6));
        stone1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone1,1);

        var stone2 = new cc.Sprite.create(res.stone1_png);
        stone2.setAnchorPoint(cc.p(0.5,1.6));
        stone2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone2,1);

        var stone3 = new cc.Sprite.create(res.stone1_png);
        stone3.setAnchorPoint(cc.p(0.5,2.6));
        stone3.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone3,1);

        var sky_bg = new cc.Sprite.create(res.sky_bg_png);
        sky_bg.setAnchorPoint(cc.p(0.5,-0.17));
        sky_bg.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(sky_bg,1);

        var land_thick_line = new cc.Sprite.create(res.land_thick_line_png);
        land_thick_line.setAnchorPoint(cc.p(0.5,-3));
        land_thick_line.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(land_thick_line,1);

        var warehouse = new cc.Sprite.create(res.warehouse_png);
        warehouse.setAnchorPoint(cc.p(-0.34,-0.37));
        warehouse.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(warehouse,1);

        var doorlayer = new cc.Sprite.create(res.doorlayer_png);
        doorlayer.setAnchorPoint(cc.p(2,-0.35));
        doorlayer.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(doorlayer,1);

        var storage = new cc.Sprite.create(res.storage_png);
        storage.setAnchorPoint(cc.p(1.77,-0.3));
        storage.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(storage,1);

        var production_cell_bg_narrow = new cc.Sprite.create(res.production_cell_bg_narrow_png);
        production_cell_bg_narrow.setAnchorPoint(cc.p(0.5,0.6));
        production_cell_bg_narrow.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(production_cell_bg_narrow,1);

        var wood = new cc.Sprite.create(res.wood_png);
        wood.setAnchorPoint(cc.p(2.92,2.2));
        wood.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(wood,1);

        var elevatorRail2 = new cc.Sprite.create(res.elevatorRail2_png);
        elevatorRail2.setAnchorPoint(cc.p(2.82,0.56));
        elevatorRail2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(elevatorRail2,1);

        var elevatorRailEnd2 = new cc.Sprite.create(res.elevatorRailEnd2_png);
        elevatorRailEnd2.setAnchorPoint(cc.p(2.82,3.3));
        elevatorRailEnd2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(elevatorRailEnd2,1);

        var male = new cc.Sprite.create(res.male_png);
        male.setAnchorPoint(cc.p(3.6,-1.35));
        male.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(male,1);

        var female = new cc.Sprite.create(res.female_png);
        female.setAnchorPoint(cc.p(-0.55,-0.75));
        female.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(female,1);

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(2.2,-1.95));
        cart.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(cart,1);

        var btn_buy_product = new cc.Sprite.create(res.btn_buy_product_png);
        btn_buy_product.setAnchorPoint(cc.p(0.5,1));
        btn_buy_product.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(btn_buy_product,1);

        var hand = new cc.Sprite.create(res.hand_png);
        hand.setAnchorPoint(cc.p(0.2,7));
        hand.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(hand,1);
        var hand_action = cc.Repeat.create(cc.MoveBy.create(0.02,cc.p(0,5)),32);
        var hand_action1 = cc.Repeat.create(cc.MoveBy.create(0.02,cc.p(0,-5)),42);
        var hand_action2 = cc.FadeOut.create(0.5);
        var sequence_hand = cc.Sequence.create(hand_action, hand_action1,hand_action2);
        hand.runAction(sequence_hand);

        var button = new ccui.Button();
        button.loadTextures(res.btn_buy_product_png, res.CloseSelected_png);
        button.setAnchorPoint(cc.p(0.5,1));
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
             var scene = new HelloWorldScene3();
            cc.director.pushScene(scene);
                    
            break;
        }
    }

});

var HelloWorldScene2 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer2();
        this.addChild(layer);
    }
});

