var BootScene = new Phaser.Class({

    Extends: Phaser.Scene,

    initialize: function BootScene()
    {
        Phaser.Scene.call(this, { key: 'BootScene' });

    },

    preload: function()
    {
        this.load.image('barrel', 'assets/barrel.jpg');
        this.load.image('platforms', 'assets/platform.png');
        this.load.image('Doonkay', 'assets/KingKRool.png');
        this.load.image('Shrek', 'assets/smelly shrek.jpg');
        this.load.image('Boot', 'assets/boot.png');
    },

    create: function()
    {
        console.log('kent has a bad game');
        var background = this.add.image(400, 300, 'Boot');
        //background.setSize(100, 600);
        this.add.text(38, 150, 'Press Any Key to Start', { fontSize: '18px', fill: '#fff'});
        this.input.keyboard.on('keydown', function() {
            this.scene.start('BarrelScene')
        }, this);
    }


});
