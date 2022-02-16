
var HelloWorldLayer6 = cc.Layer.extend({
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

        var stone1 = new cc.Sprite.create(res.stone_png);
        stone1.setAnchorPoint(cc.p(0.5,0.6));
        stone1.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone1,1);

        var stone2 = new cc.Sprite.create(res.stone_png);
        stone2.setAnchorPoint(cc.p(0.5,1.6));
        stone2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone2,1);

        var stone3 = new cc.Sprite.create(res.stone_png);
        stone3.setAnchorPoint(cc.p(0.5,2.6));
        stone3.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(stone3,1);

        var sky_bg = new cc.Sprite.create(res.sky_bg_png);
        sky_bg.setAnchorPoint(cc.p(0.5,-0.2));
        sky_bg.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(sky_bg,1);
        
        var doorlayer = new cc.Sprite.create(res.doorlayer_png);
        doorlayer.setAnchorPoint(cc.p(2,-0.35));
        doorlayer.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(doorlayer,1);

        var land_thick_line = new cc.Sprite.create(res.land_thick_line_png);
        land_thick_line.setAnchorPoint(cc.p(0.5,-3));
        land_thick_line.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(land_thick_line,1);

        var warehouse = new cc.Sprite.create(res.warehouse_png);
        warehouse.setAnchorPoint(cc.p(-0.34,-0.37));
        warehouse.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(warehouse,1);


        var production_cell_bg_narrow = new cc.Sprite.create(res.production_cell_bg_narrow_png);
        production_cell_bg_narrow.setAnchorPoint(cc.p(0.5,0.6));
        production_cell_bg_narrow.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(production_cell_bg_narrow,1);

        var wood = new cc.Sprite.create(res.wood_png);
        wood.setAnchorPoint(cc.p(2.92,2.2));
        wood.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(wood,1);

        var elevatorRail2 = new cc.Sprite.create(res.elevatorRail2_png);
        elevatorRail2.setAnchorPoint(cc.p(2.8,0.6));
        elevatorRail2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(elevatorRail2,1);

        var elevatorRailEnd2 = new cc.Sprite.create(res.elevatorRailEnd2_png);
        elevatorRailEnd2.setAnchorPoint(cc.p(2.8,3.46));
        elevatorRailEnd2.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(elevatorRailEnd2,1);

        var male = new cc.Sprite.create(res.male_png);
        male.setAnchorPoint(cc.p(3.6,-1.35));
        male.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(male,1);

        
        var storage = new cc.Sprite.create(res.storage_png);
        storage.setAnchorPoint(cc.p(1.77,-0.3));
        storage.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(storage,1);

        var female = new cc.Sprite.create(res.female_png);
        female.setAnchorPoint(cc.p(-0.55,-0.75));
        female.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(female,1);

        var cart = new cc.Sprite.create(res.cart_png);
        cart.setAnchorPoint(cc.p(0.1,-1.95));
        cart.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(cart,1);
        // var cart_action = cc.Repeat.create(cc.MoveBy.create(0.20,cc.p(0,0)),41);
        // var cart_action0 = cc.Repeat.create(cc.MoveBy.create(0.10,cc.p(6,0)),20);
        // var sequence_cart = cc.Sequence.create(cart_action,cart_action0);
        // cart.runAction(sequence_cart);

        var cartcoin = new cc.Sprite.create(res.cartcoin_png);
        cartcoin.setAnchorPoint(cc.p(0.1,-7.5));
        cartcoin.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(cartcoin,1);
     

       
        // this.scheduleOnce(flycoin1,2);
        // this.scheduleOnce(flycoin11,2);
        //  this.scheduleOnce(dleft1,4);
        // this.scheduleOnce(cartcoin1,8);
        // this.scheduleOnce(btn_buy_Product1,2);
        this.scheduleOnce(breed_btn,0.5);
        this.scheduleOnce(handanimationb,0.9);
        // this.scheduleOnce(evolve_btn2,6);
        // this.scheduleOnce(handanimation2,6.5);

        var dinosor3 = new cc.Sprite.create(res.leftRed_png);
        dinosor3.setAnchorPoint(cc.p(-0.2,0.7));
        dinosor3.setScale(1.5);
        dinosor3.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(dinosor3,1);
     

        var dinosor4 = new cc.Sprite.create(res.dright_png);
        dinosor4.setAnchorPoint(cc.p(0.8,0.7));
        dinosor4.setScale(1.5);
        dinosor4.setPosition(cc.p(size.width/2,size.height/2));
        this.addChild(dinosor4,1);

      
  
      

        var button = new ccui.Button();
        button.loadTextures(res.breed_btn_png, res.CloseSelected_png);
        button.setAnchorPoint(cc.p(-0.5,-1.6));
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
             var scene = new HelloWorldScene7();
            cc.director.pushScene(scene);
                    
            break;
        }
     }

     

});

function btn_buy_Product1()
{
    var size = cc.winSize;
    var btn_buy_product = new cc.Sprite.create(res.btn_buy_product_png);
    btn_buy_product.setAnchorPoint(cc.p(0.5,1));
    btn_buy_product.setPosition(cc.p(size.width/2,size.height/2));
    this.addChild(btn_buy_product,1);
    //var btn_action1 = cc.FadeOut.create(4);
    var btn_action1 = cc.Repeat.create(cc.MoveBy.create(0.8,cc.p(0,0)),4);
    var btn_action2 = cc.FadeOut.create(.1);
    var sequence_btn = cc.Sequence.create(btn_action1,btn_action2);
    btn_buy_product.runAction(sequence_btn);

}

function breed_btn()
{
    var size = cc.winSize;
    var breed_btn = new cc.Sprite.create(res.breed_btn_png);
    breed_btn.setAnchorPoint(cc.p(-0.5,-1.6));
    breed_btn.setPosition(cc.p(size.width/2,size.height/2));
    this.addChild(breed_btn,1);
}


function handanimationb()
{
    var size = cc.winSize;
    var hand = new cc.Sprite.create(res.hand_png);
    hand.setAnchorPoint(cc.p(-1.2,1.7));
    hand.setPosition(cc.p(size.width/2,size.height/2));
    this.addChild(hand,1);
    var hand_action = cc.Repeat.create(cc.MoveBy.create(0.03,cc.p(0,5)),14);
    var hand_action1 = cc.Repeat.create(cc.MoveBy.create(0.03,cc.p(0,-5)),20);
    var hand_action2 = cc.FadeOut.create(.1);
    var sequence_hand = cc.Sequence.create(hand_action, hand_action1,hand_action2);
    hand.runAction(sequence_hand);
}


var HelloWorldScene6 = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer6();
        this.addChild(layer);
    }
});

