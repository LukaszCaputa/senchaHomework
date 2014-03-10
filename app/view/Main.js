Ext.define('SenchaHomework.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar'
        ],
    config: {
        tabBarPosition: 'bottom',

        items: [
            {
                title: 'Main',
                iconCls: 'home',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Minimalistic webpage for homework'
                },

                html: [
                    "Main screen of the application"
                ].join("")
            },
            {
                title: 'Page 2',
                iconCls: 'compose',
                styleHtmlContent: true,

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 2'
                    }
                ],

                html: [
                "test"
                ].join("")
            },
            {
                title: 'Page 3',
                iconCls: 'star',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 3'
                    }
                ]
            },
            {
                title: 'Page 4',
                iconCls: 'team',
                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Page 4'
                    }
                ]
            }
        ]
    }
});
