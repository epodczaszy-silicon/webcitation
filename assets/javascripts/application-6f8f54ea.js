!function(){$(document).ready(function(){return $.get("quotes.json",function(t){var e,n,r,a,i;return r=t,a=Math.floor(Math.random()*r.length),e=r[a],$("#js-author").html(e.author),$("#js-title").html(e.title),""!==e.twitter&&(n='<a href="http://twitter.com/'+e.twitter+'">'+"@"+e.twitter+"</a>",$("#js-twitter").append(n)),""!==e.url&&(i='<a href="'+e.url+'">Site internet</a>',$("#js-url").append(i)),$("#js-content").fadeIn()})})}.call(this),function(){}.call(this);