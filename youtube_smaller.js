// ==UserScript==
// @name        youtube_smaller_player
// @namespace   http://users.atw.hu/geriboss
// @description Resizes Youtube player to the old, smaller configuration
// @include     https://www.youtube.com/watch*
// @include     http://www.youtube.com/watch*
// @updateURL   https://raw.githubusercontent.com/GeriBoss/youtube_smaller/master/youtube_smaller.js
// @downloadURL https://raw.githubusercontent.com/GeriBoss/youtube_smaller/master/youtube_smaller.js
// @version     1.8
// @grant       none
// ==/UserScript==

//For more information about this script, visit https://github.com/GeriBoss/youtube_smaller
// or watch the tutorial video: https://www.youtube.com/watch?v=jJus7CQvfqc

document.getElementById('player').style.width = '1040px';

document.getElementById('watch7-content').style.width = '640px';
document.getElementById('content').style.maxWidth = '1040px';

document.getElementById('watch7-sidebar').style.top = '0px';
document.getElementById('watch7-sidebar').style.marginLeft = '640px';

document.getElementById('watch7-sidebar-contents').style.minHeight = '390px';

var i, nodes = document.getElementsByClassName('action-panel-content');
for (i = 0; i < nodes.length; i++)
	nodes[i].style.width = '600px';

nodes = document.getElementsByClassName('player-width');
for (i = 0; i < nodes.length; i++)
	nodes[i].style.width = '640px';

nodes = document.getElementsByClassName('player-height');
for (i = 0; i < nodes.length; i++)
	nodes[i].style.height = '390px';

document.getElementById('theater-background').style.height = '520px';

nodes = document.getElementsByClassName('watch-playlist');
for (i = 0; i < nodes.length; i++)
	nodes[i].style.minHeight = '390px';

nodes = document.getElementsByClassName('playlist-videos-list');
for (i = 0; i < nodes.length; i++)
	nodes[i].style.maxHeight = '290px';