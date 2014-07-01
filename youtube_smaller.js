// ==UserScript==
// @name        youtube_smaller_player
// @namespace   http://www.users.atw.hu/geriboss
// @description Resizes Youtube player to the old, smaller configuration
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @updateURL	https://raw.githubusercontent.com/GeriBoss/youtube_smaller/master/youtube_smaller.js
// @downloadURL	https://raw.githubusercontent.com/GeriBoss/youtube_smaller/master/youtube_smaller.js
// @version     1.6
// @grant       none
// ==/UserScript==

//For more information about this script, visit https://www.youtube.com/watch?v=jJus7CQvfqc

document.getElementById('player').style.width = '1040px';

document.getElementById('player-api').style.width = '640px';
document.getElementById('player-api').style.height = '390px';

document.getElementById('content').style.width = '1040px';

document.getElementsByClassName('watch-content')[0].style.width = '640px';

document.getElementsByClassName('watch-sidebar')[0].style.top = '0px';
document.getElementsByClassName('watch-sidebar')[0].style.marginLeft = '640px';

var action_panel_details = document.getElementsByClassName('action-panel-details');

for (var i = 0; i < action_panel_details.length; i++)
    action_panel_details[i].style.width = '600px';
    
var action_panel_content = document.getElementsByClassName('action-panel-content');

for (var i = 0; i < action_panel_content.length; i++)
    action_panel_content[i].style.width = '600px';