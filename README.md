# fcoo-maps-colors
> JS, css, and SCSS mixins defining the colors and color-system for marker, lines etc. in [FCOO/fcoo-maps](https://github.com/FCOO/fcoo-maps)

## Description

Based on the Color Palettes defined in [FCOO/fcoo-colors](https://github.com/FCOO/fcoo-colors) this packages defines (almost) all the colors used in the different `fcoo-map-LAYER` packages setting up the different layers

It defines a number of SCSS and JC color-variables for different type of layer, provides a number of SCSS mixins to create css-classes, and create css for many of the layers available to [FCOO/fcoo-maps](https://github.com/FCOO/fcoo-maps)


## Installation
### bower
`bower install https://github.com/FCOO/fcoo-maps-colors.git --save`

<!--
## Demo
[http://FCOO.github.io/fcoo-maps-colors/demo/](http://FCOO.github.io/fcoo-maps-colors/demo/)
-->

## Usage
<!--

![](linkedin-color.png)
-->
The general idea is to use each color-group to a specific group of layers. Different layers within a group can have different gradients of the same color

### Color-groups and scss-variables

There are 8 color-groups:

    0:Blue 1:Purple  2:Red  3:Orange  4:Cyan  5:Yellow  6:Pink  7:Green  8:Gray

The 'global' scss-variables are defined in

    src/_fcoo-maps-colors-variables.scss


### 0:Blue (TODO)

###1:Purple (TODO)

### 2:Red (TODO)

### 3:Orange = Search result in fcoo-maps (`TODO`)

TODO: Search results   : #e65800 = darken(#FF6200, 5) //dark-dark-orange

### 4:Cyan (TODO)

### 5:Yellow = Observations (sea level, current, wind etc.) (`TODO`)

    Online measurements : Yellow[4] = #EFB920
    Tide predictions    : Yellow[5] = #E6A700 eller Yellow[6] = #CA9400

### 6:Pink = Navigation and Niord (`src/_fcoo-maps-colors-niord.scss`)
Routs, Firing warnings, NtM, Nav Warn etc.

Style for `fcoo/fcoo-maps-niord` / `fcoo/jquery-bootstrap-niord`

    //Standard "pink" for navigation-lines and areas in charts
    $navigation-pink:  #E5238C;

    //$navigation-purple = Used by Danish Maritime Authority as
    //standard color for Notices to Mariners, navigational and shooting warnings
    $navigation-purple: #E2007A;


### 7:Green = Harbors, Bridges, Towns, Hamlets, and Stations (`TODO`)

    Danish Harbor       : Green[4] = #7CB82F
    Greenlandic Harbors : Green[5] = #60AA14
    Danish Bridges      : white with bridge-icon in black

### 8:Gray (TODO)


<!--
### options
| Id | Type | Default | Description |
| :--: | :--: | :-----: | --- |
| options1 | boolean | true | If <code>true</code> the ... |
| options2 | string | null | Contain the ... |

### Methods

    .methods1( arg1, arg2,...): Do something
    .methods2( arg1, arg2,...): Do something else

-->

## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-maps-colors/LICENSE).

Copyright (c) 2021 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
