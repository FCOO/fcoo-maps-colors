/****************************************************************************
	fcoo-maps-colors.js,

	(c) 2021, FCOO

	https://github.com/FCOO/fcoo-maps-colors
	https://github.com/FCOO

****************************************************************************/

(function (/*$, window, document, undefined*/) {
	"use strict";

	//Create fcoo-namespace
    var ns = window.fcoo = window.fcoo || {},
        nsColor = ns.color = ns.color || {};


    //nsColor.colorNames = {id}{da:STRING, en:STRING}
    nsColor.colorNames = {
        blue    : {da: 'blå',    en: 'blue'     },
        purple  : {da: 'lilla',  en: 'purple'   },
        red     : {da: 'rød',    en: 'red'      },
        orange  : {da: 'orange', en: 'orange'   },
        cyan    : {da: 'cyan',   en: 'cyan'     },
        yellow  : {da: 'Gul',    en: 'yellow'   },
        pink    : {da: 'pink',   en: 'pink'     },
        green   : {da: 'grøn',   en: 'green'    },
        gray    : {da: 'grå',    en: 'gray'     }
        };

    //nsColor.colorList  = []{id, name: {da:STRING, en:STRING}} ordred by nsColor.defaultOrder
    nsColor.colorList  = [];

    $.each(nsColor.defaultOrder, function(index, colorId){
        nsColor.colorList.push({
            id  : colorId,
            name: nsColor.colorNames[colorId]
        });
    });

}(jQuery, this, document));
