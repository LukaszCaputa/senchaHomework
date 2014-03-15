Ext.define('SenchaHomework.view.Main', {
    extend: 'Ext.tab.Panel',
    id: 'view1',
    xtype: 'main',
    requires: [
        'Ext.TitleBar', 'Ext.carousel.Carousel'
        ],
    config: {
        tabBarPosition: 'bottom',

        items: [
        /*
        Page 1
        */
            {
                title: 'Main',
                iconCls: 'home',
                styleHtmlContent: true,
                cls: 'cards',

                html: [
                    "UI element - toolbar (1 out of 3 required elements)"
                ].join(""),

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 1'
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [{text: 'a'},{text: 'b'},{text: 'c'},{text: 'd'},{text: 'e'}]
                    }
                ]
            },
        /*
        Page 2
        */
            {
                title: 'Page 2',
                iconCls: 'compose',
                styleHtmlContent: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 2'
                    },
                    {
                        xtype: 'button',
                        flex: 1,
                        margin: 10,
                        text: 'Click Me !'
                    }
                ],

                html: [
                "UI element - button (2 out of 3 required elements)"
                ].join("")
            },
        /*
        Page 3
        */
            {
                title: 'Page 3',
                iconCls: 'star',
                html: [
                "UI element - overlay (3 out of 3 required elements)"
                ].join(""),
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 3'
                    },
                    {
                        xtype: 'button',
                        text: 'overlay',
                        handler: function(){
                            this.overlay = Ext.Viewport.add({
                                xtype:'panel',
                                modal: true,
                                hideOnMaskTap: true,
                                showAnimation: {
                                    type: 'popIn',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                hideAnimation:{
                                    type: 'popOut',
                                    duration: 250,
                                    easing: 'ease-out'
                                },
                                centered: true,
                                styleHtmlContent: true,
                                width: 400,
                                height: 400,
                                html: 'this is pop up window',
                                scrollable:true
                            });
                        }

                    }
                ]
            }
        ]
    }
});
