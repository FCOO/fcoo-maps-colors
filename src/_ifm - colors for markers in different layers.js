/********************************************************************
COLORS USED IN FCOO MAP- APPLICATIONS
********************************************************************/

/*
In fcoo-jquery-bootstrap-highcharts/src/time-series.js an array of
the standard LinkedIn colors are defined. These colors are use to give
color of different series.
But it should also be used as a general color-scheme for all applications
A common packages "fcoo-color" should be created.
In the mean time the following colors can be copyed into the different
packages and applications.
*/
//Linkedin Extended Palette for Screen
var linkedinPalette = [
        //0:Blue    1:Purple    2:Red      3:Orange   4:Cyan     5:Yellow   6:Pink     7:Green    8:Gray
        ['#CFEDFB', '#EBE4FF', '#FFE0DA', '#FFE7BB', '#D2ECEB', '#FFF2B6', '#FFDFF2', '#E0F4BE', '#E6E9EC'],
        ['#9BDAF3', '#D8CCF4', '#FAC2BB', '#F8CD94', '#9EDDDD', '#FBE491', '#FFC4E4', '#C7E59A', '#D0D3D6'],
        ['#68C7EC', '#BFABE6', '#F59890', '#F7B26A', '#69CDCF', '#F7D56B', '#F99ACA', '#AED677', '#B6B9BC'],
        ['#34B3E4', '#A589D9', '#F16D64', '#F59640', '#35BEC1', '#F3C746', '#F371AF', '#95C753', '#A0A3A6'],
        ['#00A0DC', '#8C68CB', '#EC4339', '#F47B16', '#00AEB3', '#EFB920', '#ED4795', '#7CB82F', '#86898C'],
        ['#008CC9', '#7C5BBB', '#DD2E1F', '#EC640C', '#009EA5', '#E6A700', '#E2247F', '#60AA14', '#737679'],
        ['#0077B5', '#6A4BA7', '#C11F1D', '#CD5308', '#008891', '#CA9400', '#C9186E', '#4E8F13', '#595C5F'],
        ['#005E93', '#573B93', '#A40F1C', '#AF4104', '#00727D', '#AA7D00', '#B10C5C', '#3B7511', '#434649'],
        ['#004471', '#452B7F', '#88001A', '#903000', '#005C69', '#8B6700', '#870044', '#295A10', '#303336']
    ];

/*
The gereral idea is to use eash color-group (0-8) to a specific group of layers.

3-Orange    : Search result


5-Yellow: Observations (sea level, current, vind etc.)
6-Pink  : Navigation eq. routs, Firing warnings, NtM, Nav Warn etc.
7-Green : Harbors


*/



//FIRING AREAS, FIRING EXERCISES, NOTICES TO MARINERS, NAVIGATIONAL WARNINGS
dark-purple     = #e2007a;
darkest-purple  = darken($dark-purple, 20%);

                        Inner       Border
                        -------     --------------
Firing Areas            white       darkest-purple
Notices to Mariners     white       darkest-purple
navigational warnings   dark-purple darkest-purple
Firing Exercises        dark-purple darkest-purple



//FCOO-MAPS
Search results   : #e65800 = darken(#FF6200, 5) //dark-dark-orange
Navigations layer: #E5238C                      //"pink" navigation-lines


//FCOO-HAVNELODS
Danish Harbor       : Green[4] = #7CB82F
Greenlandic Harbors : Green[5] = #60AA14
Danish Bridges      : white with bridge-icon in black


FCOO-OBSERVATIONS
Online measurements : Yellow[4] = #EFB920
Tide predictions    : Yellow[5] = #E6A700 eller Yellow[6] = #CA9400



