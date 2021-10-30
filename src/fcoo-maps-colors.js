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



    var colorNames = {
            blue    : {da: 'blå',   en: 'blue'      },
            purple  : {da: 'lilla',  en: 'purple'   },
            red     : {da: 'rød',    en: 'red'      },
            orange  : {da: 'orange', en: 'orange'   },
            cyan    : {da: 'cyan',   en: 'cyan'     },
            yellow  : {da: 'Gul',    en: 'yellow'   },
            pink    : {da: 'pink',   en: 'pink'     },
            green   : {da: 'grøn',   en: 'green'    },
            gray    : {da: 'grå',    en: 'gray'     }
        };

    nsColor.colorNameList = [];
    $.each(nsColor.defaultOrder, function(index, colorId){
        nsColor.colorNameList.push(colorNames[colorId]);
    });

//console.log( nsColor.colorNameList );



}(jQuery, this, document));
