(function(){function main(it
/**/) {
var out='<!doctype html><html lang="en"> <head> <title>Why am I so slow?!</title> <script src="/libs/jquery-2.2.0.js"></script> <script src="/libs/jquery-1.12.0.js"></script> <script src="/libs/jquery-ui.js"></script> <link href="/libs/jquery-ui.css" rel="stylesheet"> <link href="/libs/jquery-ui.structure.css" rel="stylesheet"> <link href="/libs/jquery-ui.theme.css" rel="stylesheet"> </head> <body> <h1>Welcome to monument</h1> <p>"It never gets easier, you just go faster" - Greg Lemond</p> <p> You are on version '+( it.version )+' of your project</p> </body></html>';return out;
}var itself=main, _encodeHTML=(function (doNotSkipEncoded) {
		var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': "&#34;", "'": "&#39;", "/": "&#47;" },
			matchHTML = doNotSkipEncoded ? /[&<>"'\/]/g : /&(?!#?\w+;)|<|>|"|'|\//g;
		return function(code) {
			return code ? code.toString().replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : "";
		};
	}());if(typeof module!=='undefined' && module.exports) module.exports=itself;else if(typeof define==='function')define(function(){return itself;});else {window.render=window.render||{};window.render['main']=itself;}}());