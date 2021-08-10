(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"spideryael_atlas_1", frames: [[0,0,3000,2000],[0,2002,3334,1667],[0,3671,2048,2048]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.background = function() {
	this.initialize(ss["spideryael_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.housenoback = function() {
	this.initialize(ss["spideryael_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tree = function() {
	this.initialize(ss["spideryael_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AB4AxQg2g/hEgEQgegCgcATQgKAFglAiQgFAFgIgGQgIgHACgGQAMgmAngUQAjgTApAEQApADAiAcQAdAXAWAoQACAEgDACIgCAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape.setTransform(17.045,5.0972);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABsAuQgjgkgKgHQgbgUgeABQhDAAg7A9QgCACgDgBQgDgCACgDQAYgnAegWQAkgaAogBQAqgCAiAVQAlAWAKAmQACAHgIAGQgEADgDAAQgEAAgCgCg");
	this.shape_1.setTransform(60.7181,5.3764);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgBA1QgQgBgLgQQgLgQABgUQABgWAMgPQAMgPAPAAQAQABALAQQALAQgBAUQgBAWgMAPQgLAPgPAAIgBAAg");
	this.shape_2.setTransform(13.375,27.575);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231F20").s().p("AgECBQgngCgbgmQgagnACg0QACg2AdglQAdgkAmABQAoACAbAmQAaAngCA0QgCA1gdAlQgcAkglAAIgDAAg");
	this.shape_3.setTransform(19,34.7734);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgYAnQgMgOgCgWQgBgVAKgQQAKgQAQgBQAPgCANAPQAMAOACAWQABAWgKAPQgLARgQAAIgCABQgOAAgLgOg");
	this.shape_4.setTransform(51.1746,28.25);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231F20").s().p("Ag8BfQgegjgEg2QgEg0AagoQAZgnAngDQAngCAeAjQAeAlAEA0QAEA0gaAoQgZAogoACIgFABQgjAAgcgig");
	this.shape_5.setTransform(57.506,34.85);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFEF9").s().p("AgTDxQhNgGgxhLQgxhKAIhjQAJhkA8hCQA9hDBMAGQBNAGAxBLQAxBKgIBjQgJBlg8BCQg4A8hFAAIgMAAg");
	this.shape_6.setTransform(58.0812,31.15);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFEF9").s().p("AgCDiQhKgBgyhDQgzhDABhcQABheA1hBQA1hCBIABQBJABA0BDQAzBDgCBcQgBBeg1BBQg0BBhHAAIgCAAg");
	this.shape_7.setTransform(19,29.975);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#DADBD7").s().p("AgTD8QhNgGgxhOQgxhOAJhoQAIhoA9hGQA8hGBMAHQBOAGAwBOQAxBPgIBnQgIBog9BGQg4BAhEAAIgNgBg");
	this.shape_8.setTransform(58.0994,32.2752);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AgVERQhUgHg1hVQg0hUAIhxQAJhxBChLQBChLBSAHQBVAHA1BUQA0BVgJBwQgJBxhCBLQg8BGhKAAIgOgBg");
	this.shape_9.setTransform(58.25,33.2538);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#DADBD7").s().p("AgDDvQhJAAgyhIQgzhGABhiQABhkA1hFQA1hGBIABQBJABA0BHQAzBHgCBiQgBBjg1BGQg0BFhHAAIgDgBg");
	this.shape_10.setTransform(19,31.35);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231F20").s().p("AgCEDQhQgBg3hNQg3hMABhrQAChrA5hLQA5hLBOABQBQABA3BNQA4BMgCBrQgBBrg5BLQg5BKhNAAIgCAAg");
	this.shape_11.setTransform(19.2,32.275);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol4, new cjs.Rectangle(0,0,78.7,60.6), null);


(lib.sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Слой_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgMAWQgCgDAAgEQgJACgBgJQgDgNALgKQAAgJAKAAQAEAAACACQAFgBAGACQAIACAEAGQAFAIgFAKQgHAQgUAEIgBAAQgEAAgDgDg");
	this.shape.setTransform(488.421,-207.2969);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUAZQgKgJABgOQACgOALgGIADgCIAAAAQAKgLANABQAPACAEAPQADANgHAMQgIAMgNAFQgEACgFAAQgIAAgHgGgAAFgIIgDABQgCAEAAADQACAHgHADQADAAACgCQAEgCACgDQADgEAAgFIAAgDIgEABg");
	this.shape_1.setTransform(361.0713,-203.8149);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#F9EC6C").s().p("AApBLQg+gMgmgXQgngWgIgeQgRgVAMgYQALgVAgAAQASAAAgAIQA2APArAkQAwAmgNAjQgHAWgYADIgHAAQgNAAgWgEgABFAhIgCgCIgBACIACAAIABAAgAAiADIgOgIIgJgFIgFAEIAcAJIAAAAg");
	this.shape_2.setTransform(478.3884,-259.4339);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F9EC6C").s().p("AhqBFQgFgJADgKQgDgJAEgJQAhhAA/gdQAegPAbgDQAlgEARAVQATAYgSAeQgNAUgcAUQg+AshVAFIgBAAQgMAAgGgMg");
	this.shape_3.setTransform(368.5581,-260.106);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF8A6F").s().p("AggCbQg4gDgogxQgggnAAgvQAAgQAEgPQgBgeALgbQARgtAqgXQAigTA3ABQA0ABAlARQApATATArQARAogLAtQgHAdgRAaQgIAXgRAUQgcAggnANQgWAHgVAAQgPAAgPgDg");
	this.shape_4.setTransform(517.0373,-162.9529);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF8A6F").s().p("AhHCXQg4gXgYg3QgQgagEghQgKhOA+g2QA7g0BOAIQBPAIAuA9QAvA+gZBKQgYBGhIAhQgnASglAAQggAAgggNgAgpA/IgFgDIgOgEQAJAFAKACIAAAAg");
	this.shape_5.setTransform(346.8205,-156.3047);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#010001").s().p("AiuBMQhOhLgIhpQgCgWAWAAQAXAAACAWQAHBXBCA+QBEBABWgEQBYgFA8hHQA6hEgBhYQgBgWAXAAQAWAAABAWQACBqhIBSQhKBVhqAEIgLAAQhjAAhMhKg");
	this.shape_6.setTransform(428.3445,-149.9152);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#010001").s().p("Ag2B3QhEgfgBhOQAAggATgdQAFgOAKgPQArg/BGARQBPASARBRQARBOhAAyQgkAegnAAQgaAAgagMg");
	this.shape_7.setTransform(489.9545,-208.9001);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#010001").s().p("Ag5CBQg8gegOhGQgMg6AegsQAPglApgTQBEgfBBAsQBBAtgGBKQgGBIg7AqQgkAagkAAQgbAAgcgOg");
	this.shape_8.setTransform(362.7857,-204.5631);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FCCC00").s().p("AoDU1QmliRj6k6QkVlbAOnRQAPneDXldQDAk2FJivQErifFhgRQFQgQEcB0QGfCrDiE6QDLEbAcFtQAZFSh/FVQh8FNjrD2QkGERmrBGQiCAViCAAQkTAAkUhgg");
	this.shape_9.setTransform(427.6038,-198.2226);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFC91B").s().p("AjvEdQgcgZAVghQCvkXD2joQAggdAcAiIAHAJQAYAQgQAfQieE2kRDJQgPALgNAAQgQAAgOgOg");
	this.shape_10.setTransform(305.5304,-43.3095);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F9EC6C").s().p("AizCOQgWgZATgdQA4hVBOg9QBOg+BfgiQApgPATApQARAigbARIgEAFQh0Cgi1BDQgKAEgJAAQgTAAgPgRg");
	this.shape_11.setTransform(276.3184,-89.7325);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFC91B").s().p("AlwAgQgKgEgHgGQghAEgHgmQgIgsAqgMQDFg2DMATQDMATC4BZQAdAOAAAhQgBAigjAFQh9ASh8AAQkBAAj9hNgACuBEQApAPAQgrIACgFIg0gQQi4AFi2glQhPAHhOASIgCAWQBjgUBiAAQCiAACfA2g");
	this.shape_12.setTransform(228.9108,-248.5282);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F9EC6C").s().p("ACOCBQgHAAgHgBQi5griMiPQgUgUAPgeQAPgdAcAFQDRAmCSCZQAeAggjAdQgRAOgPAAQgJAAgIgFg");
	this.shape_13.setTransform(266.7885,-297.0664);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#F9EC6C").s().p("Ai5BGQghgGgHggQgHggAfgPQBcgtBjgNQBjgOBjATQAqAJgDAtQgDAlgggBIgFADQiAA3iBAAQg5AAg6gKg");
	this.shape_14.setTransform(244.9162,-193.206);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFC91B").s().p("AlbB8QgMgkAjgSQEniXFIhIQAqgKAJAtQAEAUgHANQgEAQgTAMQiNBYidA2QicA2inAQIgHABQggAAgLggg");
	this.shape_15.setTransform(234.9594,-133.9883);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFC91B").s().p("AgKBpQjNgXi2hdQgcgOAAghQAAgjAjgEQGEgwFyB6QALADAHAHIgLACIggAHIgFBBQhNgZhMgSQheAHhegLQhbgLhWgYIg1ABQABAXAdAKQESBlEig0QAhgFADgkQACgWgNgMQAggDAHAlQAIAtgqALQiKAjiLAAQg/AAg9gHg");
	this.shape_16.setTransform(622.839,-154.5708);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#F9EC6C").s().p("AiTE6QgdgOAFgdQA4k5DEjyIADgEQAFgjAoADQAtAEgBArQgFCohGCXQhHCXh9BxQgLALgPAAQgLAAgMgHg");
	this.shape_17.setTransform(366.7157,-15.8492);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#F9EC6C").s().p("ACfCJQjUgsiMiaQgdggAigdQAbgXAYAOIAMACQC7AvCHCRQASAUgOAeQgMAYgWAAIgIAAg");
	this.shape_18.setTransform(583.9717,-106.7587);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFC91B").s().p("ADKEOQkHjOjKkJQgagiAjgdQAPgNAOgBQAPgDATAMQEdC5CvEqQARAdgdAYQgPAMgPAAQgNAAgMgJg");
	this.shape_19.setTransform(558.7217,-52.0759);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFC91B").s().p("AghGuQghgCgHghQhIl9Bil8QADgOAIgHQACgXAcgNQAogTANApQBBDHgIDNQgJDQhSC/QgNAcgdAAIgEAAg");
	this.shape_20.setTransform(442.195,1.6803);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#F9EC6C").s().p("AAvE3QiikFgPk9QgSgdAegaQAjgdAcAhQBsCAAxCgQAxCfgSCmQgEAjggAFIgJABQgZAAgQgZg");
	this.shape_21.setTransform(505.185,-16.4475);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFC91B").s().p("AEeEZQliilj7kpQgHgJgDgKQgbgPANgkQAPgqApANQDHA/ChCBQCiCABsCzQAOAZgWAYQgPAQgRAAQgIAAgJgDg");
	this.shape_22.setTransform(291.1728,-340.305);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#F9EC6C").s().p("Ai7BBQgrgJAEgtQACgmAhABIAEgCQC6hLC7AmQAgAGAIAgQAIAgghAPQiAA7iCAAQhBAAhBgOg");
	this.shape_23.setTransform(607.9157,-210.1193);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFC91B").s().p("AlfBwQgDgTAGgNQAEgQATgMQEgiuFQgbQAmgCANAjQAMAjgjASQkrCRlIBCIgNACQgfAAgHgmg");
	this.shape_24.setTransform(611.6001,-266.6402);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#F9EC6C").s().p("AkWDKQgkgaAXgkQBdiMCLhbQCLhcClgdQAcgEASAaQATAagUAXQjWDtkkBlIgGACQgMAOgPAAQgNAAgQgLg");
	this.shape_25.setTransform(580.2026,-323.592);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#F9EC6C").s().p("AAxC5IgJgHQhChEgshVQgshUgShfQgGgjAfgMQAegMAYAWQBJBEAwBZQAvBXASBkQAHArgsAJIgNABQgZAAgJgVg");
	this.shape_26.setTransform(347.6228,-361.146);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFC91B").s().p("AAYFxQgTgBgJgJQgQgIgGgWQhblFBBlLQAIglAlgEQAkgDAIAnQA9FKgaFLQgDAognAAIgGAAg");
	this.shape_27.setTransform(400.8552,-389.6512);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFC91B").s().p("AjkFmQgqgPAKgqQAwjHB1ioQBzipCph1QAbgTAcASQAcASgMAhQiMFqkaEPQgIAIgJADQgJAVgUAAQgJAAgLgFg");
	this.shape_28.setTransform(529.7444,-376.0429);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#F9EC6C").s().p("Ah1EvQgZioAqigQAqihBniFQAVgbAfAMQAeALAAAiQAAE0iaEWQAAAhgnAIIgNABQggAAgGgkg");
	this.shape_29.setTransform(461.659,-387.109);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.sun, new cjs.Rectangle(186.2,-426.6,479.3,471.3), null);


(lib.spider4copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGARQgDgCgCgLIAEgTQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAAAIACAAIAKAFIABgBQABAAAAAAQABAAAAAAQAAAAABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQAAABgBAAQgHAHgEAQIgCADIgBAAIgCgBgAgFAAIABAFQACgGADgGIgFgDg");
	this.shape.setTransform(48.7502,102.2936,0.8236,0.5737);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgCAQQgBgGgGgUQAAAAAAAAQAAgBAAAAQAAgBABAAQAAgBABgBQACgEADABQACABADgBIAFAAIABAAIAAAAIABABIAAABQABAGgDAMQgDANgFACIAAAAQgBAAAAAAQAAAAAAAAQgBAAAAgBQAAAAAAgBgAgBgJIADAOIACgPg");
	this.shape_1.setTransform(66.1911,101.7043,0.8236,0.5737);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AAhCOQg7gwgLhUQgKhMAhhLQAAAAAAAAQAAgBABAAQAAAAABAAQAAgBABAAQAAABAAAAQAAAAABAAQAAABAAAAQAAAAAAABQgQAlgEAoQgEApAJAlQAHAfASAhQAOAYAaAgQACADgDADQgBABAAAAQgBABAAAAQgBAAAAAAQAAABgBAAIgCgCg");
	this.shape_2.setTransform(33.5067,97.3996,0.8236,0.5737);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FADFEB").s().p("AA0BKQgKgWgUgIQgRgGgbABQgZACgPAFQgVAHgLARIgRgOQgUgUgBgkQgBgIAFg3QAMAIAUAEQARAlBGgEQBFgEASgjQAhgHAVgKQAHA1gmA3QgTAbgeAOg");
	this.shape_3.setTransform(57.765,104.7842,0.8236,0.5737);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DD6A86").s().p("AhDAEQAMgOAWgGQAPgEAagBQAsAAAQAfQgaAKgiABIgGABQgmAAgfgSg");
	this.shape_4.setTransform(55.9102,108.674,0.8236,0.5737);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhPgIQATADAdgBIApgBQAjgBAjgGQgTAbg8ACIgHAAQg1AAgUgXg");
	this.shape_5.setTransform(56.9396,102.4077,0.8236,0.5737);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231F20").s().p("AhCBWQgigJgRgVQgUgZgCgiQgBgTAHgvIABgCQgGgFgCgEQAAAAAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAAAABQAeAiB3gNQA2gFATgGIAcgKQAagIACACIgCAFQAFAfgMAkQgLAhgVAYQgoAshCAGIgQABQgXAAgVgFg");
	this.shape_6.setTransform(57.8703,105.1077,0.8236,0.5737);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABeAnQgrgyg0gEQgYgBgWAPQgJAFgcAZQgEAEgGgFQgGgFACgFQAJgeAegPQAcgPAgADQA8AGAmBFQAAAAABABQAAABAAAAQgBABAAAAQAAAAgBABIgBAAIgDgBg");
	this.shape_7.setTransform(45.295,74.9518,0.8234,0.5735);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("ABVAkQgagbgJgHQgVgPgYAAQg1AAgtAvQgBABgBAAQAAABgBAAQAAAAgBAAQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQASgeAYgRQAcgVAfAAQAigBAaAQQAdASAIAeQABAFgGAFQgDACgDAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBg");
	this.shape_8.setTransform(73.4513,75.1749,0.8234,0.5735);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgBApQgMAAgJgNQgIgMAAgQQABgRAKgMQAJgMAMABQAMABAJAMQAIAMgBAQQAAASgKALQgIALgMAAIgBAAg");
	this.shape_9.setTransform(42.8377,85.0176,0.8234,0.5735);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231F20").s().p("AgDBlQgfgCgVgeQgUgfABgoQACgqAYgdQAWgcAeABQAfACAVAeQAVAfgCAoQgCAqgXAdQgWAbgdAAIgCAAg");
	this.shape_10.setTransform(46.4577,88.2707,0.8234,0.5735);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgTAfQgJgMgBgRQgBgQAIgNQAIgMANgBQALgBAKAMQAKALAAARQABAQgIANQgIANgMAAIgCAAQgLAAgJgKg");
	this.shape_11.setTransform(67.228,85.4191,0.8234,0.5735);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231F20").s().p("AgvBLQgYgdgDgpQgCgpAUgfQAUgfAfgCQAegCAXAdQAYAcACApQADApgUAfQgUAfgfACIgEAAQgbAAgWgag");
	this.shape_12.setTransform(71.3178,88.4035,0.8234,0.5735);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFEF9").s().p("AgQC9Qg8gFgmg7Qgmg7AHhNQAHhOAwg0QAvg0A8AFQA8AFAmA7QAmA7gHBNQgHBOgwA0QgrAvg1AAIgLAAg");
	this.shape_13.setTransform(71.6945,86.7365,0.8234,0.5735);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFEF9").s().p("AgCCxQg6gBgng0Qgog1ABhIQAChKApgzQAqgzA4ABQA6ABAoA1QAnA1gBBHQgCBKgpAzQgpAyg3AAIgCAAg");
	this.shape_14.setTransform(46.4781,86.12,0.8234,0.5735);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#DADBD7").s().p("AgQDFQg8gFgmg9Qgmg+AHhRQAHhSAwg2QAvg2A8AFQA9AGAlA9QAmA+gHBQQgHBSgwA2QgrAyg1AAIgLgBg");
	this.shape_15.setTransform(71.6797,87.2407,0.8234,0.5735);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgRDWQhCgGgphDQgphCAHhYQAIhYA0g7QA0g6BAAFQBBAGAqBCQApBDgHBXQgIBZg0A7QgwA1g5AAIgLAAg");
	this.shape_16.setTransform(71.7774,87.6829,0.8234,0.5735);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#DADBD7").s().p("AgDC8Qg5gBgog4Qgng4ABhNQAChNApg3QAqg2A4ABQA6ABAoA4QAnA4gBBNQgCBNgqA3QgoA1g4AAIgCAAg");
	this.shape_17.setTransform(46.4781,86.7365,0.8234,0.5735);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231F20").s().p("AgCDLQg/gBgrg8Qgrg9ABhTQAChUAtg6QAug7A9ABQA+ABArA8QArA8gBBUQgCBUgtA6QgsA6g8AAIgCAAg");
	this.shape_18.setTransform(46.581,87.1523,0.8234,0.5735);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#65688A").s().p("AC2B4QAPgdgEgdQAAgDgEgBQgFgBgFABQgmANgYAFQgiAHghgDQgdgDgVgIQgbgLgHgRQgCgDgGAAQgGAAgDACQgnAeg7gGQg1gFgpgeQgWgRgKgXQgJgWADgZIAQgVQAvg5BdgVQBRgSBhAMQA4ABA0AVQAeANAOAIQAaAPAHARQAmAnAGBDQAGAzgwArQglAghBAZQAegXAOgag");
	this.shape_19.setTransform(61.4764,91.9189);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#6C7095").s().p("AhpE6QhBgKg5ghQg8gjgrg5Qg1hFAUhqQAOhOA1hbQA6hlBwgkQBigfB2AWQBFABA+AlQAlAWARAOQAgAbAIAcQAuBFAIB2QAHBghEBOQgyA5hXArQhWAqhmAAQgrAAgtgHg");
	this.shape_20.setTransform(59.3146,93.4717,0.8236,0.5737);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AiVFEQhUgYg1gnQhGgzgZhRQgVhHAahbQAWhMAthFQBViBCWgbQB7gWCbAvQA2AOA6BHQAsA1AUBSQAVBXgSBEQgvCriyBGQhbAjhYAAQhBAAg/gSg");
	this.shape_21.setTransform(59.0985,93.5108,0.8236,0.5737);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#4B4C4C").s().p("AgMBKQgRgtgIgmQgMg7AXgFQAhgHAUAgQASAcgEAiQgCAYgOATQgOASgPAAIgIgBg");
	this.shape_22.setTransform(-7.1297,73.7136,0.9997,0.9997,-27.9638);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgPBYQgIgHgJgWQgHgRgGgcIgIgeQgEgTAAgNQABgeAXgKQAWgJAaAOQAYAOAMAnQAJAfgDAgQgCAPgNARQgNAPgPAIQgJAEgHAAQgHAAgGgEg");
	this.shape_23.setTransform(-7.284,73.4607,0.9997,0.9997,-27.9638);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AhDDrQgJgcgehHQgag+gLgnIgOg3QgIgaAAgQQgDgYAHgLQANgTAXgGQAygdBPgkQBhgsAmgEQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQANAAAHAFQAJAHgKALQgFAGgLAFIgTAIQgOAHgVAIIgkAMQgfALgoASIhGAfIgYAMQgNAHgIAIQgEAIgCAMIAAAEQgBAQAMAgIAWBEQANArAdBYIAMAbQADAFgHAGQAAAGgGAEIgEACQgDAAgBgEg");
	this.shape_24.setTransform(-6.1132,107.7231,0.9998,0.9998,-27.964);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#4B4C4C").s().p("AgYA5QgNgTgDgYQgEgiASgcQAUggAhAHQAXAFgMA7QgIAmgRAtIgIABQgPAAgOgSg");
	this.shape_25.setTransform(130.3764,80.2886,0.9997,0.9997,44.9685);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgNBYQgPgIgNgPQgOgRgBgPQgDggAJgfQAMgnAYgOQAZgOAXAJQAXAKABAeQAAANgEATIgIAeQgGAcgHARQgJAWgIAHQgGAEgHAAQgHAAgJgEg");
	this.shape_26.setTransform(130.5979,80.0918,0.9997,0.9997,44.9685);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AiaDzQgBgHAFgFQgBgIAGgCIAbgKIB5hAIBBghIAWgLQAMgHAIgIIADgDQAGgKACgIQABgPgOgkQgqhtgPggIgQgjQgLgVgFgPIgHgSQgEgMAAgHQABgPALABQAJABAJAKQABABAAAAQAAABABAAQAAABAAAAQAAABgBABQAZAeAkBiQAgBTAOA2QAMAVgEAXQgCANgTAOQgLAMgZANIgyAdQgiAUg+AaQhHAcgbAOIgDABQgDAAgBgFg");
	this.shape_27.setTransform(122.6675,109.5156);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AAIAUIgLgRIgLgRQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABgBQABAAAAAAQABAAAAABQABAAAAABIAFAIIARAXQACADgDADIgDACIgCgBg");
	this.shape_28.setTransform(41.3007,85.975);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AgJAVQABgKAEgLIAHgTQABgDAEAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAIgMAkIgBADIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_29.setTransform(51.1875,87.1);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AghAjQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAQAegtAhgVQABAAABAAQAAgBABAAQABABAAAAQAAAAABABQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgRALgQASIgdAhIgDACIgBgBg");
	this.shape_30.setTransform(62.0842,86.2767);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#FFFFFF").s().p("AgfAeQABgRAXgTIAQgPQALgJAKgCQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgIADgKAIIgOAQQgOAMgHATQgBACgDABIgCAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_31.setTransform(-6.375,121.705);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFFFF").s().p("AARAyQgRgOgKggIgJgYQgEgOAAgMQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAMAGAPIALAZQAHARAQAWQACADgDADQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_32.setTransform(7.3872,166.1483);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#FFFFFF").s().p("AgRA+QgGggAKghQAIgfAUgdQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAQgeA3ACBBQABADgEACIgDABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_33.setTransform(-2.784,147.828);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#481D4C").s().p("AEJHtQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg7QACgIgIgBQgGgBgGAEQgQAOgJAKQgcAjAbg8QAUgtAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEIAVgCQALAMAKAIQhVAuhGA6QgDACABAEQAAAEADABQASAGAWABIAoABQhDAsgfAYQg1AqgWAxQgDAFAFACQAGACADgCQAogVAMgFQAcgMAZgDQg9A4gcAmQgsA6gIA8QAAAFAGAAQAGAAADgDQAkgeAQgMQAegVAdgIQggBCgNAwQgQBBALA5QAAAEAGAAQAFAAADgDQAQgUAYgkIAmg5QgIBCACArQAFA7AaAsQADAEAFgCQAGgCABgEQAOg+AMgdQAOAzAOAiQATAtAaAgQADAEAFgBQAGgCACgFQAEgQAFgZIAHgqIAjBCQAWAmAZAVQADADAFgDQAEgCACgEQAHgPAHgXIAKgoQAJAUANAiQAOAqAGAOQACAEAEAAQAEAAADgDQASgRAWgiQAZgnALgNQAAASgEAXIgKApQAAAFAEADQAFACAEgDQAXgTAcgeIAxg0IgTAnQgKAXgGAQQgCAGAEACQAFABAEgCQAegRAegeQAOgOAmgqIgHAtQgFAbgBASQABAFAEABQAEAAAEgCQAtgYAmgsQAegiAgg2QgIA7ACAeQACAHAHgBQBBgJAfhTQALgeAXh4IAOBAQABAFAFAAQAFAAADgEQAigmgFg4QgEgpgdg6IAMALQAEAEAFgDQAFgDAAgFQAKg4gvg7QgIgKhVhTIAdANQASAIALAEQAFABAFgDQAFgEgCgEQgjhdh8gvQgsgRiuglQA6gkBLgWQgFAOAPgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARApQgZgXgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_34.setTransform(54.5498,139.1414);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#592A5E").s().p("AgXAVQgCgfgcgoQA8ApAvA8QgrgjgiAFg");
	this.shape_35.setTransform(116.125,129.825);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#481D4C").s().p("ACYDmQgHhJgnguQgGgGgHACQgHACgCAIQgIAngJBRQgKBHgYAqQADhvgNhJQgCgJgJgFQgLgFgDAKQgOAfgPBGQgPBCgPAhQgCgZABhQQABhBgGgoQgBgHgHgGQgIgHgGAGQgfAbgYAvQgHAMgfBJQgBgkAIgwIARhVQACgIgIgHQgJgIgHAFQgsAegiA0QgOAVgpBPQgDg+ARg6QATg7AogvQAHgJgJgKQgIgKgKAEQgmASgpAlQgtAtgZAWQAJgdAQgiIAhg+QAGgIgGgKQgGgKgKACQgoAKgkAgQgHAGg1A4QAFgsAfguQALgQA1g+QAFgGgEgKQgGgKgIAAQgjgBgnAPQgLADg7AbQAageAngUQAngTAmgCQAGAAAFgIQAEgJgJgCQgEgBgwABQgVAAAYgVQAmggAsgPQAjgMA7gHQAFgBAGgGQAFgHgFgFQgHgHgHgEQAWgDAfADIA1AGQAIABAEgJQAEgEAAgFQgCgTgOgRQAfAHAjAWQAGAEAIgGQAHgGgBgGQgGglgTgdQAYALAaAYQAQAOAeAfQAEAEAHgDQAFgCADgGIAHgTQgGAWADgEIAMggQAdhIgCAhQgBAbABAOQACAXAKARQADAEAFAAQAFAAAEgEIBBhEIAfgUQAegRgHASQgGAQgPAXIgYAmQgEAIAGAEQAHAEAHgEQBKguBFgNQAkgHgMAMIgeAVQgIAFgBALQgCALAMgBQAbgDAWgEQANgCAjAGIAjAGQgRADgWAKIgkARQgGADgDAJQgCAKAJABIA1AGQAkADATADQg5AWgdAoQgFAHADAIQAEAIAIADQAWAGBEAIQA7AHAfANIgDAEQhDgGgdABQg2ACglAWQgJAFAEAKQAEAKAHADQAdALA7ASQAxATAaAbQgdADg2gLQg5gMgaAAQgKAAgBAKQAAAIAFAHIA8A9QAnAnAJAfQgvglgfgUQgsgcgqgPQgHgCgFAEQgEAFAAAGQAFApAUBYQAMBOgcAtQgThXgHgYQgSg8gfgqQgGgIgIAAQgJgBgCALQgDAigBBSQgGBJgiAfQgEhXgFgqg");
	this.shape_36.setTransform(49.8,115.818);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#592A5E").s().p("ABBAsQgggYg4gJQhCgHgggGQAlgiBIgQQAUAIAKAFQgSgCgNADQgRADgOANQgGAFAAAFQAAAIAGABQAaAIA7AMQA1AOAcAWQgfgJgaAAg");
	this.shape_37.setTransform(103.025,102.6);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#592A5E").s().p("AEJIUQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg8QACgIgIgBQgGgBgGAEQgQAOgJALQgcAjAbg9QAUgsAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEQAVgDAgADIA1AGQAIABAEgJQAEgEgBgFQgCgTgNgRQAfAHAjAWQAGAEAHgGQAHgGAAgGQgHglgTgdQAZALAaAYQAPAOAfAfQADAEAHgDQAGgCADgGIAIgTQgHAWACgEIAOggQAdhIgCAhQgCAbACAOQACAXAIARQADAEAGAAQAFAAAEgEIBAhEIAggUQAegRgIASQgFAQgPAXIgYAmQgEAIAGAEQAGAEAHgEQBLguBEgNQAlgHgMAMIgeAVQgIAFgCALQgCALANgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARAoQgZgWgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_38.setTransform(54.5498,135.2343);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ADvJRQgGgBgCgFQgGgMACgTIAFggQAJg0AAgFQADghgUAnQgyBehLAUQgQADgBgMQgBgVANgiQAMglABgSQgmA0gRARQgjAignAEQgLABgBgLQgBgNAEgnQgOAYgUANQgLAIgGgIIgDgBQgsgigggiQAGAQADARQABAHgHAFQgGAEgGgCQgygVg4guIACAHQACAHgGAHQgHAHgIgCQg7gKg4hRQAIAcACANQABAGgHAGQgGAFgHgBQgegEgggkQgbgegVgtIgBAFQgBAHgHAEQgIAEgFgFQgbgagLgxQgDAGgEAGQgDAEgFACQgHACgCgEQgshEAWhsQgKANgLAJQgFADgGAAQgGAAgBgGQgCgSAEgUQACgLAIgXQgWAXgQAJQgEADgFgBQgGgBAAgGQAEg/Avg+QgWAIgSgCQgEgBgCgEQgPgnAjgvQAcgoA0ggQgXACgQAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAghAjgeQAegbAugSIgQADQgGABgCgGQgBgFADgEQAjgxA1gbQAtgYA/gLIgNgFQgHgDAFgIQAEgHAFgCQAygVBPATQgEgMgLgLIgUgTQgFgFAFgHQAGgIAGABQAuAAApAVQgNghgWgXQgFgGAGgHQAGgHAHABQAoAGAhAYQAPALAqAqIAYg3QAPgdAUgUQAEgDAFgBQAFAAACAFQAGAMgBAQIgCAdQAAAsABABQAEADAgghIAsguQAcgYAcgEQArgGg5BmQA1geArgMQA4gQAuAMQAIAEAAAGQgCATgUAOQBtgIABAkQABAdg7ASQBDAHAiAKQA2AQAjAhQAFAGgGAIQgHAIgGAAQgIAAgSgEIgdgEQBIASAZALQAzAWAYAoQAEAHgIAIQgIAIgHgCIgqgOQgZgJgSgCIBJAxQAnAeASAlQAEAIgKAIQgKAIgGgEQgqgagsgMQBOBPAMAPQAuA6ABA2QABAJgJAGQgKAGgHgGIgigjQgYgYgUgHQBjCCgZBmQgCAGgEAEQgFAEgGABQgKABgEgCQgDgBgHgJQgUgagqgWQAbBIAEAhQAIA+gjAfQgFAFgJABQgKABgEgFQgLgNgXghQgUgcgQgOQgFBrgDASQgMBEgtAtQgEAEgHABQgIAAgCgGIgIgtQgFgcgGgSIgFgbQgCgMgGASQgVA+gbAsQgPAagUAQQgYAVgXAAIgBAAg");
	this.shape_39.setTransform(55.0994,135.0983);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#66676A").s().p("AEJHtQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg7QACgIgIgBQgGgBgGAEQgQAOgJAKQgcAjAbg8QAUgtAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEIAVgCQALAMAKAIQhVAuhGA6QgDACABAEQAAAEADABQASAGAWABIAoABQhDAsgfAYQg1AqgWAxQgDAFAFACQAGACADgCQAogVAMgFQAcgMAZgDQg9A4gcAmQgsA6gIA8QAAAFAGAAQAGAAADgDQAkgeAQgMQAegVAdgIQggBCgNAwQgQBBALA5QAAAEAGAAQAFAAADgDQAQgUAYgkIAmg5QgIBCACArQAFA7AaAsQADAEAFgCQAGgCABgEQAOg+AMgdQAOAzAOAiQATAtAaAgQADAEAFgBQAGgCACgFQAEgQAFgZIAHgqIAjBCQAWAmAZAVQADADAFgDQAEgCACgEQAHgPAHgXIAKgoQAJAUANAiQAOAqAGAOQACAEAEAAQAEAAADgDQASgRAWgiQAZgnALgNQAAASgEAXIgKApQAAAFAEADQAFACAEgDQAXgTAcgeIAxg0IgTAnQgKAXgGAQQgCAGAEACQAFABAEgCQAegRAegeQAOgOAmgqIgHAtQgFAbgBASQABAFAEABQAEAAAEgCQAtgYAmgsQAegiAgg2QgIA7ACAeQACAHAHgBQBBgJAfhTQALgeAXh4IAOBAQABAFAFAAQAFAAADgEQAigmgFg4QgEgpgdg6IAMALQAEAEAFgDQAFgDAAgFQAKg4gvg7QgIgKhVhTIAdANQASAIALAEQAFABAFgDQAFgEgCgEQgjhdh8gvQgsgRiuglQA6gkBLgWQgFAOAPgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARApQgZgXgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_40.setTransform(54.5498,139.1414);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#5C5D60").s().p("AEJIUQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg8QACgIgIgBQgGgBgGAEQgQAOgJALQgcAjAbg9QAUgsAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEQAVgDAgADIA1AGQAIABAEgJQAEgEgBgFQgCgTgNgRQAfAHAjAWQAGAEAHgGQAHgGAAgGQgHglgTgdQAZALAaAYQAPAOAfAfQADAEAHgDQAGgCADgGIAIgTQgHAWACgEIAOggQAdhIgCAhQgCAbACAOQACAXAIARQADAEAGAAQAFAAAEgEIBAhEIAggUQAegRgIASQgFAQgPAXIgYAmQgEAIAGAEQAGAEAHgEQBLguBEgNQAlgHgMAMIgeAVQgIAFgCALQgCALANgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARAoQgZgWgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_41.setTransform(54.5498,135.2343);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#231F20").s().p("ADvJRQgGgBgCgFQgGgMACgTIAFggQAJg0AAgFQADghgUAnQgyBehLAUQgQADgBgMQgBgVANgiQAMglABgSQgmA0gRARQgjAignAEQgLABgBgLQgBgNAEgnQgOAYgUANQgLAIgGgIIgDgBQgsgigggiQAGAQADARQABAHgHAFQgGAEgGgCQgygVg4guIACAHQACAHgGAHQgHAHgIgCQg7gKg4hRQAIAcACANQABAGgHAGQgGAFgHgBQgegEgggkQgbgegVgtIgBAFQgBAHgHAEQgIAEgFgFQgbgagLgxQgDAGgEAGQgDAEgFACQgHACgCgEQgshEAWhsQgKANgLAJQgFADgGAAQgGAAgBgGQgCgSAEgUQACgLAIgXQgWAXgQAJQgEADgFgBQgGgBAAgGQAEg/Avg+QgWAIgSgCQgEgBgCgEQgPgnAjgvQAcgoA0ggQgXACgQAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAghAjgeQAegbAugSIgQADQgGABgCgGQgBgFADgEQAjgxA1gbQAtgYA/gLIgNgFQgHgDAFgIQAEgHAFgCQAygVBPATQgEgMgLgLIgUgTQgFgFAFgHQAGgIAGABQAuAAApAVQgNghgWgXQgFgGAGgHQAGgHAHABQAoAGAhAYQAPALAqAqIAYg3QAPgdAUgUQAEgDAFgBQAFAAACAFQAGAMgBAQIgCAdQAAAsABABQAEADAgghIAsguQAcgYAcgEQArgGg5BmQA1geArgMQA4gQAuAMQAIAEAAAGQgCATgUAOQBtgIABAkQABAdg7ASQBDAHAiAKQA2AQAjAhQAFAGgGAIQgHAIgGAAQgIAAgSgEIgdgEQBIASAZALQAzAWAYAoQAEAHgIAIQgIAIgHgCIgqgOQgZgJgSgCIBJAxQAnAeASAlQAEAIgKAIQgKAIgGgEQgqgagsgMQBOBPAMAPQAuA6ABA2QABAJgJAGQgKAGgHgGIgigjQgYgYgUgHQBjCCgZBmQgCAGgEAEQgFAEgGABQgKABgEgCQgDgBgHgJQgUgagqgWQAbBIAEAhQAIA+gjAfQgFAFgJABQgKABgEgFQgLgNgXghQgUgcgQgOQgFBrgDASQgMBEgtAtQgEAEgHABQgIAAgCgGIgIgtQgFgcgGgSIgFgbQgCgMgGASQgVA+gbAsQgPAagUAQQgYAVgXAAIgBAAg");
	this.shape_42.setTransform(55.0994,135.0983);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4B4C4C").s().p("Ag5AuQgPgRAtgoQAcgbApgZQAUAIgBAdQAAAXgMAUQgRAeggAMQgLAFgLAAQgUAAgPgSg");
	this.shape_43.setTransform(16.9615,227.467);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgeBOQgegEgMgVQgNgWARgZQAIgJAOgNIAZgUQAZgVALgHQAUgNALAAQAPgBAJASQAIAPABAUQABAWgIAMQgQAbgbAVQgcAVgYAAIgHAAg");
	this.shape_44.setTransform(16.947,227.875);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AAUD5QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQgbgbg0hbQgshPgVgyQgPgUABgWQAAgOARgQQAKgOAVgPIAuglQAfgZA5giQBDgoAYgQQAFgEACAHQACAGgDAGQACAIgGADIgZAOIg4AoIg3AoQgfAYgcASQgdAVgJAMIgCADQgFALgBAIQABAQATAgIAmBDQAVAmATAbIAUAgQANATAHAOIAKARQAGALABAIQABAPgLAAQgJAAgKgJg");
	this.shape_45.setTransform(19.0295,196.9773);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4B4C4C").s().p("AAAA7QgfgMgRgfQgNgTAAgYQAAgcAUgIQApAaAcAaQAtAogPARQgPASgVAAQgKAAgMgFg");
	this.shape_46.setTransform(103.3135,230.0057);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbA5QgbgUgRgdQgIgMACgVQABgUAHgPQAJgSAPABQALAAAUANQAOAJAWATIAZAVQAOALAIAKQARAZgMAWQgMAVgfAEIgIABQgXAAgbgWg");
	this.shape_47.setTransform(103.3486,230.4);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgwDzQABgIAGgLIAKgRQAHgOAigyQASgcAWgmIAlhDIANgWQAGgOABgMQgBgKgFgJIgCgDQgKgNgcgTQgggWgbgUQhKg1glgcIgZgOQgGgDACgIQgDgGACgGQACgHAGAEQAXAQBDAoQA6AjAeAYIAuAlQAUAOALAPQARAQAAAOQABAXgOATQgXA0grBNQgzBcgbAaQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgLAIgJAAQgLAAABgPg");
	this.shape_48.setTransform(101.2488,199.4773);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4B4C4C").s().p("AgsAaQgfgSAGgfQAEgWA4AKQAkAHAqAPQAGATgVAQQgSAOgWACIgNABQgYAAgVgNg");
	this.shape_49.setTransform(-28.1339,188.6395);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbAwQglgKgNgXQgOgXAIgVQAJgWAdgBQAMgBARADIAdAIQAaAFAQAFQAVAIAHAIQAJAKgJARQgHAOgOANQgPAMgOACIgTACQgUAAgVgGg");
	this.shape_50.setTransform(-28.4006,188.6501);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjYCbQgGgHABgMQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQADgkAnhbQAhhMAagvQAGgVARgNQAKgHAWACQARgBAXAIIA0AMQAkAJA7AXQBEAbAaAIQAHACgEAGQgEAFgGABQgFAGgFgDIgZgKIh9glIhAgUQgggKgOABIgEAAQgJACgIAEQgLALgOAhQgqBigMAjQgQA0gHAPIgIASQgEALgFAFQgGAFgEAAQgEAAgDgEg");
	this.shape_51.setTransform(0.3741,174.0481);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4B4C4C").s().p("AANAzQgegEgXgYQgQgPgGgVQgGgZAQgMQAqANAhASQAyAZgKAUQgNAZgdAAIgIAAg");
	this.shape_52.setTransform(136.384,188.1742);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgNA4QgcgNgWgVQgKgKgEgTQgEgTAEgPQAEgTAOgDQAJgCAWAHQAKADAdAOIAbANQARAIAJAIQAVARgGAXQgHAWgaALQgKAEgLAAQgRAAgVgJg");
	this.shape_53.setTransform(136.5292,188.5359);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtDUQgBgHADgMIAFgSQADgOAHgUIAMgiQALgdALgoIAThFQAJgigCgPQgEgIgGgIIgDgCQgKgJgggMIhAgYQhQgfgngRIgbgHQgGgBAAgIQgEgEAAgHQABgHAGADQAaAKBGAUQA8ASAhAPIAyAXQAYAKAMAJQATALADANQAGAUgJAVQgIA0gWBRQgZBfgUAfQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgIAKgIACIgDABQgHAAgCgMg");
	this.shape_54.setTransform(124.1113,162.561);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(7));

	// Layer_3
	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4B4C4C").s().p("AgMBKQgRgtgIgmQgMg7AXgFQAhgHAUAgQASAcgEAiQgCAYgOATQgOASgPAAIgIgBg");
	this.shape_55.setTransform(49.1686,42.8466,0.9997,0.9997,-7.7281);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgPBYQgIgHgJgWQgHgRgGgcIgIgeQgEgTAAgNQABgeAXgKQAWgJAaAOQAYAOAMAnQAJAfgDAgQgCAPgNARQgNAPgPAIQgJAEgHAAQgHAAgGgEg");
	this.shape_56.setTransform(49.1113,42.5559,0.9997,0.9997,-7.7281);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhDDrQgJgcgehHQgag+gLgnIgOg3QgIgaAAgQQgDgYAHgLQANgTAXgGQAygdBPgkQBhgsAmgEQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQANAAAHAFQAJAHgKALQgFAGgLAFIgTAIQgOAHgVAIIgkAMQgfALgoASIhGAfIgYAMQgNAHgIAIQgEAIgCAMIAAAEQgBAQAMAgIAWBEQANArAdBYIAMAbQADAFgHAGQAAAGgGAEIgEACQgDAAgBgEg");
	this.shape_57.setTransform(38.3585,75.0906,0.9999,0.9999,-7.7296);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#4B4C4C").s().p("AgYA5QgNgTgDgYQgEgiASgcQAUggAhAHQAXAFgMA7QgIAmgRAtIgIABQgPAAgOgSg");
	this.shape_58.setTransform(74.1346,43.7122,0.9997,0.9997,18.5226);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgNBYQgPgIgNgPQgOgRgBgPQgDggAJgfQAMgnAYgOQAZgOAXAJQAXAKABAeQAAANgEATIgIAeQgGAcgHARQgJAWgIAHQgGAEgHAAQgHAAgJgEg");
	this.shape_59.setTransform(74.2453,43.4374,0.9997,0.9997,18.5226);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AiaDzQgBgHAFgFQgBgIAGgCIAbgKIB5hAIBBghIAWgLQAMgHAIgIIADgDQAGgKACgIQABgPgOgkQgqhtgPggIgQgjQgLgVgFgPIgHgSQgEgMAAgHQABgPALABQAJABAJAKQABABAAAAQAAABABAAQAAABAAAAQAAABgBABQAZAeAkBiQAgBTAOA2QAMAVgEAXQgCANgTAOQgLAMgZANIgyAdQgiAUg+AaQhHAcgbAOIgDABQgDAAgBgFg");
	this.shape_60.setTransform(80.0996,72.9447,0.9999,0.9999,-26.4454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_60,p:{y:72.9447}},{t:this.shape_59,p:{y:43.4374}},{t:this.shape_58,p:{y:43.7122}},{t:this.shape_57,p:{x:38.3585,y:75.0906}},{t:this.shape_56,p:{x:49.1113,y:42.5559}},{t:this.shape_55,p:{x:49.1686,y:42.8466}}]}).to({state:[{t:this.shape_60,p:{y:65.0947}},{t:this.shape_59,p:{y:35.6374}},{t:this.shape_58,p:{y:35.9122}},{t:this.shape_57,p:{x:38.3585,y:75.0906}},{t:this.shape_56,p:{x:49.1113,y:42.5559}},{t:this.shape_55,p:{x:49.1686,y:42.8466}}]},1).to({state:[{t:this.shape_60,p:{y:72.9447}},{t:this.shape_59,p:{y:43.4374}},{t:this.shape_58,p:{y:43.7122}},{t:this.shape_57,p:{x:38.3585,y:75.0906}},{t:this.shape_56,p:{x:49.1113,y:42.5559}},{t:this.shape_55,p:{x:49.1686,y:42.8466}}]},1).to({state:[{t:this.shape_60,p:{y:72.9447}},{t:this.shape_59,p:{y:43.4374}},{t:this.shape_58,p:{y:43.7122}},{t:this.shape_57,p:{x:38.2085,y:67.3406}},{t:this.shape_56,p:{x:48.9613,y:34.8059}},{t:this.shape_55,p:{x:49.0186,y:35.0966}}]},1).to({state:[{t:this.shape_60,p:{y:65.0947}},{t:this.shape_59,p:{y:35.6374}},{t:this.shape_58,p:{y:35.9122}},{t:this.shape_57,p:{x:38.2085,y:67.3406}},{t:this.shape_56,p:{x:48.9613,y:34.8059}},{t:this.shape_55,p:{x:49.0186,y:35.0966}}]},1).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.1,25.8,181.7,212.5);


(lib.spider4 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgkATQgJgLgLghQgBgEADgDQAEgDACAEQAFAIAHATQAIAQAMAEQARAHATgIQATgIAIgQQABgDAEgCQAEgCABAFQADAPgTAPQgRANgSACIgIAAQgWAAgMgPg");
	this.shape.setTransform(101.6839,72.0336);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FACDDC").s().p("AgLAfQgGgLgFgRQAAAAAAgBQABAAAAgBQAAAAAAAAQAAgBgBAAQgFgHAFgLQADgJAIgIQAFgHAIgBQAHgBAIAGQAGAEACAKQgDAkgIAUQgGAMgGAAQgGAAgHgNg");
	this.shape_1.setTransform(101.8184,65.1925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFEF9").s().p("AgGg9QAJgJALAbQAFAOADAQQAFARACAmIgEgDQgRgKgTAPQgIAGgHAOQgIg/Acg+g");
	this.shape_2.setTransform(101.5349,56.1732);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AghA8QgThQAhhLQgBAAAAAAQgBAAAAgBQAAAAAAgBQABgBAAgBQASgiASAiQAPAaAEAeQAIA5gCAZQgEAwgdAZQgGAFgEAAQgSAAgNg5g");
	this.shape_3.setTransform(101.9873,59.9633);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#4B4C4C").s().p("AgYA5QgNgTgDgYQgEgiASgcQAUggAhAHQAXAFgMA7QgIAmgRAtIgIABQgPAAgOgSg");
	this.shape_4.setTransform(137.2223,14.4578);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNBYQgPgIgNgPQgOgRgBgPQgDggAJgfQAMgnAYgOQAZgOAXAJQAXAKABAeQAAANgEATIgIAeQgGAcgHARQgJAWgIAHQgGAEgHAAQgHAAgJgEg");
	this.shape_5.setTransform(137.24,14.162);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AA8DtQgGgEAAgGQgHgGADgFIAMgbIAqiDIAWhEIAIgYQAEgOgBgKIAAgEQgCgMgEgIQgKgLgkgQQhqgwgigMIgkgMQgVgIgOgHIgTgIQgLgFgFgGQgKgLAJgHQAHgFANAAQABAAABAAQAAABABAAQAAAAABABQAAAAAAABQAnAEBgAsQBPAkAyAdQAWAGAOATQAHALgDAYQAAAQgIAaIgPA3QgKAmgaA/QgeBHgJAcQgBAEgDAAIgEgCg");
	this.shape_6.setTransform(152.4047,44.9741);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#4B4C4C").s().p("AgMBKQgRgtgIgmQgMg7AXgFQAhgHAUAgQASAcgEAiQgCAYgOATQgOASgPAAIgIgBg");
	this.shape_7.setTransform(71.2277,14.4578);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgPBYQgIgHgJgWQgHgRgGgcIgIgeQgEgTAAgNQABgeAXgKQAWgJAaAOQAYAOAMAnQAJAfgDAgQgCAPgNARQgNAPgPAIQgJAEgHAAQgHAAgGgEg");
	this.shape_8.setTransform(71.21,14.162);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AhDDrQgJgcgehHQgag+gLgnIgOg3QgIgaAAgQQgDgYAHgLQANgTAXgGQAygdBPgkQBhgsAmgEQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABAAQANAAAHAFQAJAHgKALQgFAGgLAFIgTAIQgOAHgVAIIgkAMQgfALgoASIhGAfIgYAMQgNAHgIAIQgEAIgCAMIAAAEQgBAQAMAgIAWBEQANArAdBYIAMAbQADAFgHAGQAAAGgGAEIgEACQgDAAgBgEg");
	this.shape_9.setTransform(56.0453,44.9741);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgMCUQgqhEAShWQARhPA5g/QAAgBABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAAAgBABQgcAfgRAmQgSAogFAnQgDAhAHAnQAGAdAOApQABADgEACIgDABQAAAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBgBg");
	this.shape_10.setTransform(68.3195,37.7817);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("ABeAmQgrgxg1gEQgXgBgWAPQgJAFgcAaQgEAEgGgFQgGgGABgFQAKgdAegQQAbgPAhADQAfADAbAWQAXASARAfQABABAAABQAAAAAAABQAAAAgBABQAAAAgBAAIgBABIgDgCg");
	this.shape_11.setTransform(85.8131,4.0031);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("ABVAkQgcgcgHgGQgVgPgYAAQg1ABguAvQAAABgBAAQAAAAgBAAQAAABgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAABgBQASgfAYgRQAcgUAfgBQAhgBAbAQQAdASAIAdQABAFgGAFQgDADgDAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBg");
	this.shape_12.setTransform(120.0627,4.211);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AgBApQgMAAgJgMQgIgNAAgQQABgRAJgMQAKgMALABQANAAAJANQAIAMAAAQQgBARgJAMQgKALgLAAIgBAAg");
	this.shape_13.setTransform(82.925,21.625);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231F20").s().p("AgDBlQgegBgWgfQgUgeABgpQACgpAXgdQAXgdAeABQAfABAUAfQAVAegBApQgCApgXAdQgWAcgcAAIgDAAg");
	this.shape_14.setTransform(87.3499,27.275);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgTAfQgJgMgBgRQgBgQAIgNQAIgMAMgBQAMgBAKAMQAJALABARQACAQgIANQgIANgNAAIgCAAQgLAAgJgKg");
	this.shape_15.setTransform(112.5813,22.178);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AgvBLQgYgcgCgqQgDgoAUgfQATgfAfgDQAegCAYAdQAYAcADApQACApgTAfQgUAfgfACIgFAAQgbAAgWgag");
	this.shape_16.setTransform(117.5446,27.3285);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFEF9").s().p("AgPC9Qg8gEgng7Qgmg7AHhNQAHhOAvg1QAvg0A8AFQA9AFAmA6QAmA7gGBNQgHBPgvA0QgsAwg2AAIgKgBg");
	this.shape_17.setTransform(117.9995,24.4288);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFEF9").s().p("AgCCxQg5AAgog1Qgog1ABhIQABhJAqg0QApgzA5ABQA5ABAoA0QAoA1gBBIQgBBJgqA0QgoAyg4AAIgCAAg");
	this.shape_18.setTransform(87.35,23.5257);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#DADBD7").s().p("AgPDGQg9gFgmg9Qgmg+AGhRQAHhSAwg2QAvg3A8AFQA9AFAmA9QAmA+gHBRQgGBSgwA2QgrAyg2AAIgKAAg");
	this.shape_19.setTransform(118.0069,25.325);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231F20").s().p("AgQDWQhCgFgphCQgqhDAHhYQAHhYA0g7QAzg7BBAFQBCAFApBDQAqBCgHBYQgHBZg0A7QgvA2g6AAIgLgBg");
	this.shape_20.setTransform(118.125,26.0789);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#DADBD7").s().p("AgCC8Qg5gBgog4Qgog3ABhNQABhOAqg2QApg3A5ABQA5ABAoA3QAoA4gBBNQgBBNgqA3QgoA2g4AAIgCAAg");
	this.shape_21.setTransform(87.35,24.6007);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231F20").s().p("AgCDLQg+gBgrg8Qgsg8AChTQABhUAtg7QAtg7A9ABQA/ABArA8QArA8gBBTQgBBUgtA7QgtA6g8AAIgCAAg");
	this.shape_22.setTransform(87.4986,25.325);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#6C7095").s().p("AjNEUQg8ghgtg0Qgvg4gXhGQgchWA4hhQAphJBUhIQBchQB7AEQBqACBvA/QBDAaAxA5QAdAkALASQAXAmgCAfQAVBUggB3QgaBhhfA1QhGAohkAMQgYADgZAAQhzAAh5hAg");
	this.shape_23.setTransform(101.2205,41.2117);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("Aj6EOQhKg0gng5QgzhLADhYQAEhNA5hSQAwhDBFg1QCAhhCcAZQCCAUCJBkQAwAhAiBbQATA0gKBlQgLBrghAwQhpCZjIAHIgWABQihAAh/hag");
	this.shape_24.setTransform(100.7862,41.2406);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AAIAUIgLgRIgLgRQAAgBAAAAQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAABgBQABAAAAAAQABAAAAABQABAAAAABIAFAIIARAXQACADgDADIgDACIgCgBg");
	this.shape_25.setTransform(90.3507,42.975);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AgJAVQABgKAEgLIAHgTQABgDAEAAQAAAAABAAQAAAAABABQAAAAAAABQAAABAAAAIgMAkIgBADIAAABQgBAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAg");
	this.shape_26.setTransform(100.2375,44.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AghAjQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgBABAAQAegtAhgVQABAAABAAQAAgBABAAQABABAAAAQAAAAABABQAAABAAAAQAAABgBABQAAAAAAABQgBAAAAABQgRALgQASIgdAhIgDACIgBgBg");
	this.shape_27.setTransform(111.1342,43.2767);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgfAeQABgRAXgTIAQgPQALgJAKgCQAAAAABAAQAAAAAAAAQABAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAQgIADgKAIIgOAQQgOAMgHATQgBACgDABIgCAAQAAAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBg");
	this.shape_28.setTransform(42.675,78.705);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AARAyQgRgOgKggIgJgYQgEgOAAgMQAAAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAAAAAQAAABAAAAQABAMAGAPIALAZQAHARAQAWQACADgDADQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgCAAg");
	this.shape_29.setTransform(56.4372,123.1483);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AgRA+QgGggAKghQAIgfAUgdQABAAAAgBQABAAAAAAQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABgBAAQgeA3ACBBQABADgEACIgDABQAAAAAAAAQgBAAAAgBQAAAAAAgBQgBAAAAgBg");
	this.shape_30.setTransform(46.266,104.828);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#481D4C").s().p("AEJHtQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg7QACgIgIgBQgGgBgGAEQgQAOgJAKQgcAjAbg8QAUgtAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEIAVgCQALAMAKAIQhVAuhGA6QgDACABAEQAAAEADABQASAGAWABIAoABQhDAsgfAYQg1AqgWAxQgDAFAFACQAGACADgCQAogVAMgFQAcgMAZgDQg9A4gcAmQgsA6gIA8QAAAFAGAAQAGAAADgDQAkgeAQgMQAegVAdgIQggBCgNAwQgQBBALA5QAAAEAGAAQAFAAADgDQAQgUAYgkIAmg5QgIBCACArQAFA7AaAsQADAEAFgCQAGgCABgEQAOg+AMgdQAOAzAOAiQATAtAaAgQADAEAFgBQAGgCACgFQAEgQAFgZIAHgqIAjBCQAWAmAZAVQADADAFgDQAEgCACgEQAHgPAHgXIAKgoQAJAUANAiQAOAqAGAOQACAEAEAAQAEAAADgDQASgRAWgiQAZgnALgNQAAASgEAXIgKApQAAAFAEADQAFACAEgDQAXgTAcgeIAxg0IgTAnQgKAXgGAQQgCAGAEACQAFABAEgCQAegRAegeQAOgOAmgqIgHAtQgFAbgBASQABAFAEABQAEAAAEgCQAtgYAmgsQAegiAgg2QgIA7ACAeQACAHAHgBQBBgJAfhTQALgeAXh4IAOBAQABAFAFAAQAFAAADgEQAigmgFg4QgEgpgdg6IAMALQAEAEAFgDQAFgDAAgFQAKg4gvg7QgIgKhVhTIAdANQASAIALAEQAFABAFgDQAFgEgCgEQgjhdh8gvQgsgRiuglQA6gkBLgWQgFAOAPgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARApQgZgXgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_31.setTransform(103.5998,96.1414);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#592A5E").s().p("AgXAVQgCgfgcgoQA8ApAvA8QgrgjgiAFg");
	this.shape_32.setTransform(165.175,86.825);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#481D4C").s().p("ACYDmQgHhJgnguQgGgGgHACQgHACgCAIQgIAngJBRQgKBHgYAqQADhvgNhJQgCgJgJgFQgLgFgDAKQgOAfgPBGQgPBCgPAhQgCgZABhQQABhBgGgoQgBgHgHgGQgIgHgGAGQgfAbgYAvQgHAMgfBJQgBgkAIgwIARhVQACgIgIgHQgJgIgHAFQgsAegiA0QgOAVgpBPQgDg+ARg6QATg7AogvQAHgJgJgKQgIgKgKAEQgmASgpAlQgtAtgZAWQAJgdAQgiIAhg+QAGgIgGgKQgGgKgKACQgoAKgkAgQgHAGg1A4QAFgsAfguQALgQA1g+QAFgGgEgKQgGgKgIAAQgjgBgnAPQgLADg7AbQAageAngUQAngTAmgCQAGAAAFgIQAEgJgJgCQgEgBgwABQgVAAAYgVQAmggAsgPQAjgMA7gHQAFgBAGgGQAFgHgFgFQgHgHgHgEQAWgDAfADIA1AGQAIABAEgJQAEgEAAgFQgCgTgOgRQAfAHAjAWQAGAEAIgGQAHgGgBgGQgGglgTgdQAYALAaAYQAQAOAeAfQAEAEAHgDQAFgCADgGIAHgTQgGAWADgEIAMggQAdhIgCAhQgBAbABAOQACAXAKARQADAEAFAAQAFAAAEgEIBBhEIAfgUQAegRgHASQgGAQgPAXIgYAmQgEAIAGAEQAHAEAHgEQBKguBFgNQAkgHgMAMIgeAVQgIAFgBALQgCALAMgBQAbgDAWgEQANgCAjAGIAjAGQgRADgWAKIgkARQgGADgDAJQgCAKAJABIA1AGQAkADATADQg5AWgdAoQgFAHADAIQAEAIAIADQAWAGBEAIQA7AHAfANIgDAEQhDgGgdABQg2ACglAWQgJAFAEAKQAEAKAHADQAdALA7ASQAxATAaAbQgdADg2gLQg5gMgaAAQgKAAgBAKQAAAIAFAHIA8A9QAnAnAJAfQgvglgfgUQgsgcgqgPQgHgCgFAEQgEAFAAAGQAFApAUBYQAMBOgcAtQgThXgHgYQgSg8gfgqQgGgIgIAAQgJgBgCALQgDAigBBSQgGBJgiAfQgEhXgFgqg");
	this.shape_33.setTransform(98.85,72.818);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#592A5E").s().p("ABBAsQgggYg4gJQhCgHgggGQAlgiBIgQQAUAIAKAFQgSgCgNADQgRADgOANQgGAFAAAFQAAAIAGABQAaAIA7AMQA1AOAcAWQgfgJgaAAg");
	this.shape_34.setTransform(152.075,59.6);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#592A5E").s().p("AEJIUQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg8QACgIgIgBQgGgBgGAEQgQAOgJALQgcAjAbg9QAUgsAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEQAVgDAgADIA1AGQAIABAEgJQAEgEgBgFQgCgTgNgRQAfAHAjAWQAGAEAHgGQAHgGAAgGQgHglgTgdQAZALAaAYQAPAOAfAfQADAEAHgDQAGgCADgGIAIgTQgHAWACgEIAOggQAdhIgCAhQgCAbACAOQACAXAIARQADAEAGAAQAFAAAEgEIBAhEIAggUQAegRgIASQgFAQgPAXIgYAmQgEAIAGAEQAGAEAHgEQBLguBEgNQAlgHgMAMIgeAVQgIAFgCALQgCALANgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARAoQgZgWgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_35.setTransform(103.5998,92.2343);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("ADvJRQgGgBgCgFQgGgMACgTIAFggQAJg0AAgFQADghgUAnQgyBehLAUQgQADgBgMQgBgVANgiQAMglABgSQgmA0gRARQgjAignAEQgLABgBgLQgBgNAEgnQgOAYgUANQgLAIgGgIIgDgBQgsgigggiQAGAQADARQABAHgHAFQgGAEgGgCQgygVg4guIACAHQACAHgGAHQgHAHgIgCQg7gKg4hRQAIAcACANQABAGgHAGQgGAFgHgBQgegEgggkQgbgegVgtIgBAFQgBAHgHAEQgIAEgFgFQgbgagLgxQgDAGgEAGQgDAEgFACQgHACgCgEQgshEAWhsQgKANgLAJQgFADgGAAQgGAAgBgGQgCgSAEgUQACgLAIgXQgWAXgQAJQgEADgFgBQgGgBAAgGQAEg/Avg+QgWAIgSgCQgEgBgCgEQgPgnAjgvQAcgoA0ggQgXACgQAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAghAjgeQAegbAugSIgQADQgGABgCgGQgBgFADgEQAjgxA1gbQAtgYA/gLIgNgFQgHgDAFgIQAEgHAFgCQAygVBPATQgEgMgLgLIgUgTQgFgFAFgHQAGgIAGABQAuAAApAVQgNghgWgXQgFgGAGgHQAGgHAHABQAoAGAhAYQAPALAqAqIAYg3QAPgdAUgUQAEgDAFgBQAFAAACAFQAGAMgBAQIgCAdQAAAsABABQAEADAgghIAsguQAcgYAcgEQArgGg5BmQA1geArgMQA4gQAuAMQAIAEAAAGQgCATgUAOQBtgIABAkQABAdg7ASQBDAHAiAKQA2AQAjAhQAFAGgGAIQgHAIgGAAQgIAAgSgEIgdgEQBIASAZALQAzAWAYAoQAEAHgIAIQgIAIgHgCIgqgOQgZgJgSgCIBJAxQAnAeASAlQAEAIgKAIQgKAIgGgEQgqgagsgMQBOBPAMAPQAuA6ABA2QABAJgJAGQgKAGgHgGIgigjQgYgYgUgHQBjCCgZBmQgCAGgEAEQgFAEgGABQgKABgEgCQgDgBgHgJQgUgagqgWQAbBIAEAhQAIA+gjAfQgFAFgJABQgKABgEgFQgLgNgXghQgUgcgQgOQgFBrgDASQgMBEgtAtQgEAEgHABQgIAAgCgGIgIgtQgFgcgGgSIgFgbQgCgMgGASQgVA+gbAsQgPAagUAQQgYAVgXAAIgBAAg");
	this.shape_36.setTransform(104.1494,92.0983);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#66676A").s().p("AEJHtQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg7QACgIgIgBQgGgBgGAEQgQAOgJAKQgcAjAbg8QAUgtAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEIAVgCQALAMAKAIQhVAuhGA6QgDACABAEQAAAEADABQASAGAWABIAoABQhDAsgfAYQg1AqgWAxQgDAFAFACQAGACADgCQAogVAMgFQAcgMAZgDQg9A4gcAmQgsA6gIA8QAAAFAGAAQAGAAADgDQAkgeAQgMQAegVAdgIQggBCgNAwQgQBBALA5QAAAEAGAAQAFAAADgDQAQgUAYgkIAmg5QgIBCACArQAFA7AaAsQADAEAFgCQAGgCABgEQAOg+AMgdQAOAzAOAiQATAtAaAgQADAEAFgBQAGgCACgFQAEgQAFgZIAHgqIAjBCQAWAmAZAVQADADAFgDQAEgCACgEQAHgPAHgXIAKgoQAJAUANAiQAOAqAGAOQACAEAEAAQAEAAADgDQASgRAWgiQAZgnALgNQAAASgEAXIgKApQAAAFAEADQAFACAEgDQAXgTAcgeIAxg0IgTAnQgKAXgGAQQgCAGAEACQAFABAEgCQAegRAegeQAOgOAmgqIgHAtQgFAbgBASQABAFAEABQAEAAAEgCQAtgYAmgsQAegiAgg2QgIA7ACAeQACAHAHgBQBBgJAfhTQALgeAXh4IAOBAQABAFAFAAQAFAAADgEQAigmgFg4QgEgpgdg6IAMALQAEAEAFgDQAFgDAAgFQAKg4gvg7QgIgKhVhTIAdANQASAIALAEQAFABAFgDQAFgEgCgEQgjhdh8gvQgsgRiuglQA6gkBLgWQgFAOAPgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARApQgZgXgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_37.setTransform(103.5998,96.1414);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#5C5D60").s().p("AEJIUQAKgxgBgIIgEgiQgFgSgOgKQgEgDgGACQgGACgDADQgJAJgHAOQgSAlgcAjQhDA/AcgwQALgYACgcQACgcgHgZQgCgJgLADQgIACgFAGQgJAKggAqQgYAfgTASQgVATgBgaIADgbIgCgYIgHgYQgBgLgMAFQgLAEgEAIIgQAmQgJAXgNAKQhOg4gkg0QgEgGgIAGQgIAFABAFQAFAaASAvQg2gdhDg+QgGgFgIAGQgJAGADAHQAKASAEAPQgjgSgkgvQgdgngQgmQgFgKgKAHQgKAGAAAIQgBAWAGAbIAOAwQgfgVgfg2QgcgvgFgeQgCgJgLAGQgKAHgBAHIAAAhQgWgmgEg8QAAgIgJACQgIACgCAGIgGAYQgFARgEgOQgNgoAEgtQADgkAPgyQACgJgJAAQgHABgFAFQgaAegEgCQADgGARg8QACgIgIgBQgGgBgGAEQgQAOgJALQgcAjAbg9QAUgsAjgkQAHgHgDgHQgDgIgKAGQgiAUgLgOQgMgOAWgjQAUgfAdgVQAdgVAjgKQAIgCACgJQACgJgKAAIgqADIglABQAYgkAsgYQArgZArgCQAHAAAEgIQAEgJgIgCQgFgBgvABQgWAAAZgVQAlggAtgPQAjgMA6gHQAGgBAFgGQAGgHgGgFQgGgHgHgEQAVgDAgADIA1AGQAIABAEgJQAEgEgBgFQgCgTgNgRQAfAHAjAWQAGAEAHgGQAHgGAAgGQgHglgTgdQAZALAaAYQAPAOAfAfQADAEAHgDQAGgCADgGIAIgTQgHAWACgEIAOggQAdhIgCAhQgCAbACAOQACAXAIARQADAEAGAAQAFAAAEgEIBAhEIAggUQAegRgIASQgFAQgPAXIgYAmQgEAIAGAEQAGAEAHgEQBLguBEgNQAlgHgMAMIgeAVQgIAFgCALQgCALANgBQAbgDAWgEQANgCAiAGIAjAGQgQADgWAKIgkARQgHADgCAJQgCAKAJABQAhAFBGAGQA8AJAmAUQgTgCgOADQgQADgOAMQgGAFgBAGQAAAHAHACQAaAIA8ANQA0AOAdAWQgxgOgjAIQgGACgFAHQgFAIAFAEQARAQAoAaQAoAaARAPQglgNgpgEQgIgBgIAIQgHAIAGAHIBRBTQA0A1ARAoQgZgWgTgJQgagNgaAGQgHACgEAHQgFAIAFAGQArA1AVAtQAZA2ACA7IAAABQgFgHgNgLQgNgLgYgNIgngVQgJgEgHAIQgJAIADAIQAHAdAUAwQATCVgdg3QgVgqg2gjQgIgFgIAIQgHAGgBAJQgEAnABBNQgEBEgeApQgJg7gCgGQgKgkgXgPQgGgEgJAFQgZAQgVA5QgXBBgQATQgMANgFAAQgHAAADgVg");
	this.shape_38.setTransform(103.5998,92.2343);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#231F20").s().p("ADvJRQgGgBgCgFQgGgMACgTIAFggQAJg0AAgFQADghgUAnQgyBehLAUQgQADgBgMQgBgVANgiQAMglABgSQgmA0gRARQgjAignAEQgLABgBgLQgBgNAEgnQgOAYgUANQgLAIgGgIIgDgBQgsgigggiQAGAQADARQABAHgHAFQgGAEgGgCQgygVg4guIACAHQACAHgGAHQgHAHgIgCQg7gKg4hRQAIAcACANQABAGgHAGQgGAFgHgBQgegEgggkQgbgegVgtIgBAFQgBAHgHAEQgIAEgFgFQgbgagLgxQgDAGgEAGQgDAEgFACQgHACgCgEQgshEAWhsQgKANgLAJQgFADgGAAQgGAAgBgGQgCgSAEgUQACgLAIgXQgWAXgQAJQgEADgFgBQgGgBAAgGQAEg/Avg+QgWAIgSgCQgEgBgCgEQgPgnAjgvQAcgoA0ggQgXACgQAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBABAAQAAghAjgeQAegbAugSIgQADQgGABgCgGQgBgFADgEQAjgxA1gbQAtgYA/gLIgNgFQgHgDAFgIQAEgHAFgCQAygVBPATQgEgMgLgLIgUgTQgFgFAFgHQAGgIAGABQAuAAApAVQgNghgWgXQgFgGAGgHQAGgHAHABQAoAGAhAYQAPALAqAqIAYg3QAPgdAUgUQAEgDAFgBQAFAAACAFQAGAMgBAQIgCAdQAAAsABABQAEADAgghIAsguQAcgYAcgEQArgGg5BmQA1geArgMQA4gQAuAMQAIAEAAAGQgCATgUAOQBtgIABAkQABAdg7ASQBDAHAiAKQA2AQAjAhQAFAGgGAIQgHAIgGAAQgIAAgSgEIgdgEQBIASAZALQAzAWAYAoQAEAHgIAIQgIAIgHgCIgqgOQgZgJgSgCIBJAxQAnAeASAlQAEAIgKAIQgKAIgGgEQgqgagsgMQBOBPAMAPQAuA6ABA2QABAJgJAGQgKAGgHgGIgigjQgYgYgUgHQBjCCgZBmQgCAGgEAEQgFAEgGABQgKABgEgCQgDgBgHgJQgUgagqgWQAbBIAEAhQAIA+gjAfQgFAFgJABQgKABgEgFQgLgNgXghQgUgcgQgOQgFBrgDASQgMBEgtAtQgEAEgHABQgIAAgCgGIgIgtQgFgcgGgSIgFgbQgCgMgGASQgVA+gbAsQgPAagUAQQgYAVgXAAIgBAAg");
	this.shape_39.setTransform(104.1494,92.0983);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#4B4C4C").s().p("Ag5AuQgPgRAtgoQAcgbApgZQAUAIgBAdQAAAXgMAUQgRAeggAMQgLAFgLAAQgUAAgPgSg");
	this.shape_40.setTransform(66.0115,184.467);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgeBOQgegEgMgVQgNgWARgZQAIgJAOgNIAZgUQAZgVALgHQAUgNALAAQAPgBAJASQAIAPABAUQABAWgIAMQgQAbgbAVQgcAVgYAAIgHAAg");
	this.shape_41.setTransform(65.997,184.875);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AAUD5QgBAAAAgBQgBAAAAgBQAAAAAAgBQAAgBAAAAQgbgbg0hbQgshPgVgyQgPgUABgWQAAgOARgQQAKgOAVgPIAuglQAfgZA5giQBDgoAYgQQAFgEACAHQACAGgDAGQACAIgGADIgZAOIg4AoIg3AoQgfAYgcASQgdAVgJAMIgCADQgFALgBAIQABAQATAgIAmBDQAVAmATAbIAUAgQANATAHAOIAKARQAGALABAIQABAPgLAAQgJAAgKgJg");
	this.shape_42.setTransform(68.0795,153.9773);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#4B4C4C").s().p("AAAA7QgfgMgRgfQgNgTAAgYQAAgcAUgIQApAaAcAaQAtAogPARQgPASgVAAQgKAAgMgFg");
	this.shape_43.setTransform(152.3635,187.0057);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbA5QgbgUgRgdQgIgMACgVQABgUAHgPQAJgSAPABQALAAAUANQAOAJAWATIAZAVQAOALAIAKQARAZgMAWQgMAVgfAEIgIABQgXAAgbgWg");
	this.shape_44.setTransform(152.3986,187.4);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgwDzQABgIAGgLIAKgRQAHgOAigyQASgcAWgmIAlhDIANgWQAGgOABgMQgBgKgFgJIgCgDQgKgNgcgTQgggWgbgUQhKg1glgcIgZgOQgGgDACgIQgDgGACgGQACgHAGAEQAXAQBDAoQA6AjAeAYIAuAlQAUAOALAPQARAQAAAOQABAXgOATQgXA0grBNQgzBcgbAaQAAABgBABQAAAAAAABQAAAAgBABQAAAAAAABQgLAIgJAAQgLAAABgPg");
	this.shape_45.setTransform(150.2988,156.4773);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#4B4C4C").s().p("AgtAaQgegSAGgfQAEgWA4AKQAkAHAqAPQAGATgVAQQgSANgWADIgOABQgXAAgWgNg");
	this.shape_46.setTransform(9.0084,107.3645);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgbAwQglgKgNgWQgPgYAJgVQAJgWAcgBQANgBARAEIAcAHQAcAFAPAFQAVAIAGAIQAJAKgIARQgHAOgOANQgPANgOABIgSABQgVAAgVgFg");
	this.shape_47.setTransform(8.7159,107.3751);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AjZCbQgFgHAAgMQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQADgkAnhbQAghNAaguQAGgWASgNQAKgHAWADQAQgBAYAHIA0ANQAkAJA7AXQBDAbAbAIQAHACgEAGQgEAFgGAAQgFAHgGgDIgYgLIg/gSIg+gSQgggJgggLQgdgKgRABIgEAAQgKACgIAEQgKAKgOAhQgqBhgMAkIgLAjIgNAhIgHASQgEALgGAEQgFAGgFAAQgEAAgDgEg");
	this.shape_48.setTransform(37.5012,92.7524);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#4B4C4C").s().p("AgsAaQgfgSAGgfQAEgWA4AKQAkAHAqAPQAGATgVAQQgSAOgWACIgNABQgYAAgVgNg");
	this.shape_49.setTransform(20.9161,145.6395);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgbAwQglgKgNgXQgOgXAIgVQAJgWAdgBQAMgBARADIAdAIQAaAFAQAFQAVAIAHAIQAJAKgJARQgHAOgOANQgPAMgOACIgTACQgUAAgVgGg");
	this.shape_50.setTransform(20.6494,145.6501);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AjYCbQgGgHABgMQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQADgkAnhbQAhhMAagvQAGgVARgNQAKgHAWACQARgBAXAIIA0AMQAkAJA7AXQBEAbAaAIQAHACgEAGQgEAFgGABQgFAGgFgDIgZgKIh9glIhAgUQgggKgOABIgEAAQgJACgIAEQgLALgOAhQgqBigMAjQgQA0gHAPIgIASQgEALgFAFQgGAFgEAAQgEAAgDgEg");
	this.shape_51.setTransform(49.4241,131.0481);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#4B4C4C").s().p("AANAzQgegEgXgYQgQgPgGgVQgGgZAQgMQAqANAhASQAyAZgKAUQgNAZgdAAIgIAAg");
	this.shape_52.setTransform(181.434,158.1742);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgNA4QgcgNgWgVQgKgKgEgTQgEgTAEgPQAEgTAOgDQAJgCAWAHQAKADAdAOIAbANQARAIAJAIQAVARgGAXQgHAWgaALQgKAEgLAAQgRAAgVgJg");
	this.shape_53.setTransform(181.5792,158.5359);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AAtDUQgBgHADgMIAFgSQADgOAHgUIAMgiQALgdALgoIAThFQAJgigCgPQgEgIgGgIIgDgCQgKgJgggMIhAgYQhQgfgngRIgbgHQgGgBAAgIQgEgEAAgHQABgHAGADQAaAKBGAUQA8ASAhAPIAyAXQAYAKAMAJQATALADANQAGAUgJAVQgIA0gWBRQgZBfgUAfQABABAAAAQAAABAAABQAAAAgBABQAAAAAAAAQgIAKgIACIgDABQgHAAgCgMg");
	this.shape_54.setTransform(169.1613,132.561);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#4B4C4C").s().p("AgZAeQgVgIgNgRQgRgUAKgRQAtgFAkACQA5AEgBAWQgCAfgiALQgOAEgNAAQgQAAgRgHg");
	this.shape_55.setTransform(193.3254,107.4932);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AguAnQgNgFgMgQQgLgQgDgOQgDgTALgIQAIgGAWgDQASgBAaABIAdAAQASABAMADQAbAJADAXQAEAVgUAVQgSATgmABIgDAAQgdAAgcgLg");
	this.shape_56.setTransform(193.5352,107.6311);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("ACmCmQgEgGgCgMIgDgSQgDgPgBgVIgDgkQgDgpgRhlIgEgZQgDgOgGgJQgHgGgJgEIgEgBQgNgEghACIhDADQhXAFgrABIgbAEQgGABgDgHQgGgCgCgGQgCgGAGgBQAcgBBIgKQA/gJAkABIA3AAQAYgBAQAEQAWADAIAKQAOAQABAXQAOA0ANBRQAPBigFAjQABABAAAAQAAABAAAAQAAABAAABQAAAAAAABQgDAMgGAFQgDACgDAAQgFAAgFgHg");
	this.shape_57.setTransform(168.0762,89.2879);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spider4, new cjs.Rectangle(0,0,202.2,195.3), null);


(lib.leg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4B4C4C").s().p("AAAAqQgbAAgXgHQgggLgDgWQgCgNAMgJQAIgLAOgDQAlgKAkAFQAuAFAQAdQAPAagoANQgYAIgbAAIgGAAg");
	this.shape.setTransform(29.0647,80.4967);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AA6FRQhbgNAThFIAAgEQAOg9AqhaQA5hzAMgfQAWg7gvg0QghgkhEgjIhWgtQg0gcgkgNQgHgDgDgJQgDgKAKgBQAlgEA4AcQAgAPA5AfQB1A3ArBEQASAcgIAuQgFAcgSAsQgOAkgrBPQgmBKgPArQAkgFAlAEQAoAEAbANQAPAHAMAUQANAWgOAMQgUAQgnAHQgYAFgWAAQgPAAgPgCg");
	this.shape_1.setTransform(20.0144,52.0302);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1,p:{rotation:0,x:20.0144,y:52.0302,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:0,x:29.0647,y:80.4967,scaleX:1,scaleY:1}}]}).to({state:[{t:this.shape_1,p:{rotation:-11.7264,x:20.0589,y:52.105,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-11.7264,x:34.7052,y:78.137,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_1,p:{rotation:-26.9643,x:19.819,y:52.0436,scaleX:1,scaleY:1}},{t:this.shape,p:{rotation:-26.9643,x:40.7922,y:73.3108,scaleX:1,scaleY:1}}]},4).to({state:[{t:this.shape_1,p:{rotation:-49.4323,x:18.8551,y:51.9352,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-49.4323,x:46.3631,y:63.5725,scaleX:0.9999,scaleY:0.9999}}]},5).to({state:[{t:this.shape_1,p:{rotation:-28.4865,x:18.7267,y:52.338,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-28.4865,x:40.2567,y:73.0398,scaleX:0.9999,scaleY:0.9999}}]},4).to({state:[{t:this.shape_1,p:{rotation:-12.765,x:19.3542,y:52.6575,scaleX:0.9999,scaleY:0.9999}},{t:this.shape,p:{rotation:-12.765,x:34.4691,y:78.4182,scaleX:0.9999,scaleY:0.9999}}]},5).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-19.6,18.2,74.7,67.7);


(lib.body = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#481D4C").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape.setTransform(90.2933,80.7565);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A1F4E").s().p("ApWClQADgpAShhIAAgBQAEgCACgDQBIhyBehOQBrhZB2gYQhHBXgSBMQgBAIADAGQADAHAIgDQA6gVA9g0IBlhiQACBNABAGQAHAuAeAZQAFAFAFgEQAGgDACgGQANgkAAgtQAAgZgGg5QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhJghhFQA9AlA7BKQAJAKBZB9QAGAJAIgHQAHgIAAgIQAAg2gYg3QgQglgmg8QCdBHB4CdQANAcAHASQAhCWgsgWQgbgOglgsQgpgwgXgPQgIgFgJADQgKACgCAKQgFAYgKBBQgIA2gEAPQgPAxgXghQgJgNgchTQgXhEgdgQQhDglg+BZQgSAagdA4QgdA4gNATQgDglAUhOQAUhLgFgpQgBgIgKgDQgIgEgIADQhFAXg9BFQgJALhbB3QAOgrAlhHQAphQANghQAFgLgNgHQgMgGgKAGQiJBdhTCwQAFgwAXhSQAahcAGglQACgNgOgDQgOgDgIAHQgvAqgiBGQgUApghBYQgChUAciDQADgMgPgDQgOgDgIAHQhBA4giBhQgOApgeCMQgUg6AFhOg");
	this.shape_1.setTransform(101.4867,72.35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4A1F4E").s().p("Ag6CSIAJg8QABgMgOgEQgNgDgIAIQgaAYgZAmQgLAPgeA0QgIhAALhKQAPgXAWgaQgTBKgHAuQgBAKAJADQAJAEAEgKQA2hyBNhXQBYhlBlguIg+BvQgjBCgTAwIAAABQgNgDgIAGQgkAigcAzQgUAigaA9QACgTAHgog");
	this.shape_2.setTransform(35.9438,71.25);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#4A1F4E").s().p("AExHtQANg+gBgLQgDgigDgKQgGgXgSgMQgFgDgIACQgHACgEAEQgLAMgJASQgZAyghAqQgsAogMAFQgMAEARgfQAOgeADgkQADgkgJggQgDgLgNAEQgMADgGAIQgKALgqA2QgfAogYAXQgZAYgCghIAFgjIgDgeIgIgfQgEgNgQAGQgOAGgEAJIgUAxQgNAdgQANQhkhIgthCQgFgHgKAGQgKAHABAHQAEATAJAcIAQAtQhEgjhXhQQgHgHgLAIQgLAIAEAJQAKASAJAYQgugYgtg7QgmgygUgxQgFgMgOAIQgNAIAAALQAAAcAIAjQAFAUALAoQgngbgnhEQgjg9gHglQgDgMgOAIQgNAIgBAKIAAAqQgcgxgFhMQAAgKgLACQgLADgDAHIgHAfQgHAVgFgRQgPgwADg1QADgqAQg6QAjhOAxg2QgTBJgHAvQgBAKAJADQAJADAEgJQA2hyBNhYQBZhmBlguIg+BwQgjBBgTAyQgEALAJAFQAIAEAHgKQBIhyBehOQBrhZB1gZQhHBYgRBMQgCAIADAGQAEAGAHgCQA7gVA8g0IBkhiQACBNABAGQAHAuAfAZQAFAEAGgDQAFgDACgGQAOgkAAgtQAAgagGg4QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhKgihEQA9AlA8BKQAIAKBaB9QAGAIAIgHQAHgHAAgIQgBg2gXg3QgQglgmg8QDDBYCHDaQADAGAHgCQAyA/AZA5QAdBAADBJIAAABQgHgJgRgPQgQgNgfgRIgygZQgKgGgLAKQgKAJADALQALApAXA5QAIAUACBHQACBKgXgtQgcg2hFgsQgJgGgLAJQgJAJgCAKQgEAyABBjQgFBWgmA0IgOhSQgNgvgegTQgHgEgKAGQghAUgaBJQgeBTgUAYQgQARgHAAQgJAAAEgbg");
	this.shape_3.setTransform(93.5493,94.2815);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#592A5E").s().p("AgeAbQgDgrgigwQBOA1A5BMQg1gtgtAHg");
	this.shape_4.setTransform(168.8,68.875);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#592A5E").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_5.setTransform(90.2933,75.7429);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_6.setTransform(91.0243,75.5749);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#66676A").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape_7.setTransform(90.2933,80.7565);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5C5D60").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_8.setTransform(90.2933,75.7429);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231F20").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_9.setTransform(91.0243,75.5749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.body, new cjs.Rectangle(0,0,182.1,151.2), null);


(lib.slolit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#AAD6EF").s().p("AEda0QhjgHhThHQhDg5hHhzIh/jYQhPiIhChPQkAkyu4FeQk0BylJBJQlCBIh1gRQhjgOAvkuQASh4BOk3QAgiAhwhDQhqg/i8ARQkwAbiXAAQkeAAhHhHQhKhKDTiwQCziVC9hUQBIggAfg7QAeg4gPhFQggiZjEhyQjmiGhCg+QhhhbAUhsQAXiDCCg7QCXhFD1A9QEaBGDaAVQDwAWBegvQAsgWADgtQACgbgQhCQgRhCACgiQAEg4AsgjQAlgdBMAOQAiAHB9ApQBzAlBKAKQBuAPBYgeQBJgYB9g7QCQhEA4gVQDvhdCwBEQBfAkAGA5QADAhgmBKQgnBKAEAmQAGA9BfAsQCxBSDlgmQA+gKCJgiQCEggBKgMQCmgZAygGQB1gOA5AJQCWAYi8C8QjUDTAqB5QAoB2EbAhQB6APC+gPQBAgFEVgeQDOgXBvgBQCcAABSAlQBOAkgEBrQgBAngNBCIgYB1QgcCXAaBdQAlCBCVBKQB6A9ELBtQFLCIB4A1QIpD3C8DkQBvCHggBgQgeBZiRArQiLApjVgIQjXgJjug5QoNh/kRgYQlOgei5BdQg6AdjDBtQjJBwh4A8QmDDEi0AAIgXgBg");
	this.shape.setTransform(201.6626,48.9006,0.5233,0.1392);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#73C3EF").s().p("AB9cMQh/hLiNjHIhwikQhBhdgyg3QiKiXidgHQiugJiHALQiKALiVAkQjBAtppDVQmgCQiohGQiFg3AMjLQAEhJAZhvIAri5QAvjQgzgzQhEhFi7gDQhEgBhsAIIi6ANQjjAOhwgdQicgpgeiGQgiiaBVhpQA2hCCWhSQCghZAxgxQBahbgbiEQgNhEhphLQiIhWhDgwQh3hVgmhWQgzhwBEiPQCZlCHcAzQB2ANDgAzQCvApAogJQBfgWAYg0QANgcgFhKQgGhFAVghQAhg0BvgWQBVgRCLAOQBQAICqAVQCWANBugTQCNgZBxhTQB0hVCggLQCNgLCKAvQCCAsBDBIQBHBLgmBCQhmCyCIAYQBWAOE3g4QFjhACngCQEigEB8CDQAnAqhKBOQgbAdiSB4QhyBegaA0QglBKBjAmQBcAjDDgQQB0gJEIgjQDygbCWAMQDNAQB3BaQBzBWAJBzQADArgLA8QgGAigPBFQgZB/AlBOQA1BwDABXQCPBCFiCcQFGCVDOB5QJTFcgrFEQgqFDqwg7QjpgUlzhHQmLhPiggcQjaglivA4QiAAoioB4IiSBqQhaBAhIAsQjLB6jjA4QhWAWhOAAQiLAAhyhEg");
	this.shape_1.setTransform(202.0218,50.0847,0.5233,0.1392);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.slolit, new cjs.Rectangle(0,24,404.1,52.2), null);


(lib.Scene_1_tree = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// tree
	this.instance = new lib.tree();
	this.instance.setTransform(613,531,0.077,0.0676);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(367).to({_off:false},0).to({_off:true},38).wait(82));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#323232").ss(1,1,1).p("EjrRhObMHWjAAAMAAACc3MnWjAAAg");
	this.shape.setTransform(1234.475,270.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#221E33","#6C76C6","#565DE1","#280245"],[0,0.035,0.537,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_1.setTransform(1234.475,270.075);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#292536","#7079C8","#565EE2","#29064B"],[0,0.051,0.553,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_2.setTransform(1234.475,270.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#302D3A","#747CCA","#5560E3","#2A0B51"],[0,0.067,0.569,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_3.setTransform(1234.475,270.075);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#37343D","#787FCC","#5561E4","#2C0F57"],[0,0.082,0.58,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_4.setTransform(1234.475,270.075);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#3F3B41","#7C82CD","#5563E5","#2D145D"],[0,0.102,0.596,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_5.setTransform(1234.475,270.075);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#464244","#8085CF","#5564E6","#2E1863"],[0,0.118,0.612,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_6.setTransform(1234.475,270.075);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#4D4A47","#8488D1","#5466E7","#2F1D69"],[0,0.133,0.627,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_7.setTransform(1234.475,270.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#54514B","#888BD3","#5467E8","#31216F"],[0,0.149,0.643,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_8.setTransform(1234.475,270.075);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#5B584E","#8C8ED5","#5469E9","#322575"],[0,0.165,0.655,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_9.setTransform(1234.475,270.075);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#625F51","#9091D7","#546AEA","#332A7B"],[0,0.18,0.671,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_10.setTransform(1234.475,270.075);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#696755","#9494D8","#536CEB","#342E81"],[0,0.196,0.686,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_11.setTransform(1234.475,270.075);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#706E58","#9897DA","#536DEC","#353387"],[0,0.212,0.702,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_12.setTransform(1234.475,270.075);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#78755C","#9C9ADC","#536FED","#37378D"],[0,0.231,0.718,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_13.setTransform(1234.475,270.075);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#7F7C5F","#A09DDE","#5370EE","#383B93"],[0,0.247,0.729,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_14.setTransform(1234.475,270.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#868462","#A4A0E0","#5272EF","#394099"],[0,0.263,0.745,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_15.setTransform(1234.475,270.075);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#8D8B66","#A8A3E2","#5273F0","#3A449F"],[0,0.278,0.761,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_16.setTransform(1234.475,270.075);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#949269","#ABA6E3","#5275F0","#3C49A5"],[0,0.294,0.776,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_17.setTransform(1234.475,270.075);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#9B996D","#AFA9E5","#5276F1","#3D4DAB"],[0,0.31,0.792,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_18.setTransform(1234.475,270.075);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#A2A170","#B3ACE7","#5178F2","#3E52B1"],[0,0.325,0.808,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_19.setTransform(1234.475,270.075);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#A9A873","#B7AFE9","#5179F3","#3F56B7"],[0,0.341,0.82,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_20.setTransform(1234.475,270.075);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#B1AF77","#BBB2EB","#517BF4","#415ABD"],[0,0.361,0.835,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_21.setTransform(1234.475,270.075);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#B8B67A","#BFB5ED","#517CF5","#425FC3"],[0,0.376,0.851,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_22.setTransform(1234.475,270.075);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#BFBE7E","#C3B8EE","#507EF6","#4363C9"],[0,0.392,0.867,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_23.setTransform(1234.475,270.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#C6C581","#C7BBF0","#507FF7","#4468CF"],[0,0.408,0.882,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_24.setTransform(1234.475,270.075);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#CDCC84","#CBBEF2","#5081F8","#456CD5"],[0,0.424,0.894,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_25.setTransform(1234.475,270.075);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#D4D388","#CFC1F4","#5082F9","#4770DB"],[0,0.439,0.91,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_26.setTransform(1234.475,270.075);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#DBDB8B","#D3C4F6","#4F84FA","#4875E1"],[0,0.455,0.925,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_27.setTransform(1234.475,270.075);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#E2E28E","#D7C7F8","#4F85FB","#4979E7"],[0,0.471,0.941,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_28.setTransform(1234.475,270.075);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#EAE992","#DBCAF9","#4F87FC","#4A7EED"],[0,0.49,0.957,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_29.setTransform(1234.475,270.075);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#F1F095","#DFCDFB","#4F88FD","#4C82F3"],[0,0.506,0.969,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_30.setTransform(1234.475,270.075);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#F8F899","#E3D0FD","#4E8AFE","#4D87F9"],[0,0.522,0.984,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_31.setTransform(1234.475,270.075);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#FFFF9C","#E7D3FF","#4E8BFF"],[0,0.537,1],-1505.7,0,1505.8,0).s().p("EjrRBOcMAAAic3MHWjAAAMAAACc3g");
	this.shape_32.setTransform(1234.475,270.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},241).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape}]},1).to({state:[{t:this.shape_5},{t:this.shape}]},1).to({state:[{t:this.shape_6},{t:this.shape}]},1).to({state:[{t:this.shape_7},{t:this.shape}]},1).to({state:[{t:this.shape_8},{t:this.shape}]},1).to({state:[{t:this.shape_9},{t:this.shape}]},1).to({state:[{t:this.shape_10},{t:this.shape}]},1).to({state:[{t:this.shape_11},{t:this.shape}]},1).to({state:[{t:this.shape_12},{t:this.shape}]},1).to({state:[{t:this.shape_13},{t:this.shape}]},1).to({state:[{t:this.shape_14},{t:this.shape}]},1).to({state:[{t:this.shape_15},{t:this.shape}]},1).to({state:[{t:this.shape_16},{t:this.shape}]},1).to({state:[{t:this.shape_17},{t:this.shape}]},1).to({state:[{t:this.shape_18},{t:this.shape}]},1).to({state:[{t:this.shape_19},{t:this.shape}]},1).to({state:[{t:this.shape_20},{t:this.shape}]},1).to({state:[{t:this.shape_21},{t:this.shape}]},1).to({state:[{t:this.shape_22},{t:this.shape}]},1).to({state:[{t:this.shape_23},{t:this.shape}]},1).to({state:[{t:this.shape_24},{t:this.shape}]},1).to({state:[{t:this.shape_25},{t:this.shape}]},1).to({state:[{t:this.shape_26},{t:this.shape}]},1).to({state:[{t:this.shape_27},{t:this.shape}]},1).to({state:[{t:this.shape_28},{t:this.shape}]},1).to({state:[{t:this.shape_29},{t:this.shape}]},1).to({state:[{t:this.shape_30},{t:this.shape}]},1).to({state:[{t:this.shape_31},{t:this.shape}]},1).to({state:[{t:this.shape_32},{t:this.shape}]},1).wait(214));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FFFF9C","#E7D3FF","#4E8BFF"],[0,0.537,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape.setTransform(1303.25,360.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#FEFE9B","#E6D2FF","#4E8BFF","#4E8AFE"],[0,0.533,0.996,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_1.setTransform(1303.25,360.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.lf(["#FCFC9B","#E5D2FE","#4E8AFF","#4E89FD"],[0,0.529,0.996,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_2.setTransform(1303.25,360.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.lf(["#FBFB9A","#E5D1FE","#4E8AFE","#4D88FB"],[0,0.529,0.992,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_3.setTransform(1303.25,360.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.lf(["#F9F999","#E4D1FE","#4E8AFE","#4D88FA"],[0,0.525,0.988,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_4.setTransform(1303.25,360.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.lf(["#F8F899","#E3D0FD","#4E8AFE","#4D87F9"],[0,0.522,0.984,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_5.setTransform(1303.25,360.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.lf(["#F7F798","#E2CFFD","#4E89FE","#4D86F8"],[0,0.518,0.984,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_6.setTransform(1303.25,360.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#F5F597","#E2CFFC","#4E89FE","#4C85F7"],[0,0.514,0.98,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_7.setTransform(1303.25,360.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.lf(["#F4F497","#E1CEFC","#4E89FD","#4C84F6"],[0,0.514,0.976,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_8.setTransform(1303.25,360.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#F2F296","#E0CEFC","#4E88FD","#4C83F4"],[0,0.51,0.973,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_9.setTransform(1303.25,360.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.lf(["#F1F195","#DFCDFB","#4F88FD","#4C82F3"],[0,0.506,0.973,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_10.setTransform(1303.25,360.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.lf(["#F0EF95","#DECDFB","#4F88FD","#4B82F2"],[0,0.502,0.969,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_11.setTransform(1303.25,360.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.lf(["#EEEE94","#DECCFB","#4F88FD","#4B81F1"],[0,0.498,0.965,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_12.setTransform(1303.25,360.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.lf(["#EDED93","#DDCBFA","#4F87FD","#4B80F0"],[0,0.498,0.961,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_13.setTransform(1303.25,360.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.lf(["#ECEB93","#DCCBFA","#4F87FC","#4B7FEF"],[0,0.494,0.961,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_14.setTransform(1303.25,360.2);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.lf(["#EAEA92","#DBCAFA","#4F87FC","#4A7EED"],[0,0.49,0.957,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_15.setTransform(1303.25,360.2);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.lf(["#E9E891","#DBCAF9","#4F86FC","#4A7DEC"],[0,0.486,0.953,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_16.setTransform(1303.25,360.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.lf(["#E7E791","#DAC9F9","#4F86FC","#4A7CEB"],[0,0.482,0.949,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_17.setTransform(1303.25,360.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.lf(["#E6E690","#D9C8F9","#4F86FC","#4A7BEA"],[0,0.482,0.949,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_18.setTransform(1303.25,360.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.lf(["#E5E48F","#D8C8F8","#4F86FB","#497BE9"],[0,0.478,0.945,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_19.setTransform(1303.25,360.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.lf(["#E3E38F","#D8C7F8","#4F85FB","#497AE8"],[0,0.475,0.941,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_20.setTransform(1303.25,360.2);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.lf(["#E2E18E","#D7C7F7","#4F85FB","#4979E6"],[0,0.471,0.937,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_21.setTransform(1303.25,360.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.lf(["#E0E08D","#D6C6F7","#4F85FB","#4978E5"],[0,0.467,0.937,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_22.setTransform(1303.25,360.2);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.lf(["#DFDE8D","#D5C6F7","#4F84FB","#4977E4"],[0,0.463,0.933,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_23.setTransform(1303.25,360.2);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.lf(["#DEDD8C","#D4C5F6","#4F84FA","#4876E3"],[0,0.463,0.929,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_24.setTransform(1303.25,360.2);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.lf(["#DCDC8B","#D4C4F6","#4F84FA","#4875E2"],[0,0.459,0.925,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_25.setTransform(1303.25,360.2);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.lf(["#DBDA8B","#D3C4F6","#4F83FA","#4875E1"],[0,0.455,0.925,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_26.setTransform(1303.25,360.2);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.lf(["#D9D98A","#D2C3F5","#4F83FA","#4874DF"],[0,0.451,0.922,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_27.setTransform(1303.25,360.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.lf(["#D8D78A","#D1C3F5","#4F83FA","#4773DE"],[0,0.447,0.918,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_28.setTransform(1303.25,360.2);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.lf(["#D7D689","#D1C2F5","#4F83FA","#4772DD"],[0,0.447,0.914,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_29.setTransform(1303.25,360.2);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.lf(["#D5D588","#D0C1F4","#5082F9","#4771DC"],[0,0.443,0.914,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_30.setTransform(1303.25,360.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.lf(["#D4D388","#CFC1F4","#5082F9","#4770DB"],[0,0.439,0.91,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_31.setTransform(1303.25,360.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.lf(["#D3D287","#CEC0F4","#5082F9","#466FDA"],[0,0.435,0.906,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_32.setTransform(1303.25,360.2);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.lf(["#D1D086","#CDC0F3","#5081F9","#466FD8"],[0,0.431,0.906,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_33.setTransform(1303.25,360.2);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.lf(["#D0CF86","#CDBFF3","#5081F9","#466ED7"],[0,0.431,0.902,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_34.setTransform(1303.25,360.2);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.lf(["#CECD85","#CCBFF2","#5081F8","#466DD6"],[0,0.427,0.898,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_35.setTransform(1303.25,360.2);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.lf(["#CDCC84","#CBBEF2","#5081F8","#456CD5"],[0,0.424,0.894,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_36.setTransform(1303.25,360.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.lf(["#CCCB84","#CABDF2","#5080F8","#456BD4"],[0,0.42,0.894,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_37.setTransform(1303.25,360.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.lf(["#CAC983","#CABDF1","#5080F8","#456AD3"],[0,0.416,0.89,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_38.setTransform(1303.25,360.2);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.lf(["#C9C882","#C9BCF1","#5080F8","#4569D1"],[0,0.416,0.886,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_39.setTransform(1303.25,360.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.lf(["#C7C682","#C8BCF1","#507FF7","#4469D0"],[0,0.412,0.882,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_40.setTransform(1303.25,360.2);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.lf(["#C6C581","#C7BBF0","#507FF7","#4468CF"],[0,0.408,0.882,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_41.setTransform(1303.25,360.2);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.lf(["#C5C480","#C7BAF0","#507FF7","#4467CE"],[0,0.404,0.878,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_42.setTransform(1303.25,360.2);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.lf(["#C3C280","#C6BAF0","#507FF7","#4466CD"],[0,0.4,0.875,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_43.setTransform(1303.25,360.2);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.lf(["#C2C17F","#C5B9EF","#507EF7","#4365CC"],[0,0.4,0.871,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_44.setTransform(1303.25,360.2);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.lf(["#C0BF7E","#C4B9EF","#507EF7","#4364CA"],[0,0.396,0.871,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_45.setTransform(1303.25,360.2);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.lf(["#BFBE7E","#C3B8EF","#507EF6","#4363C9"],[0,0.392,0.867,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_46.setTransform(1303.25,360.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.lf(["#BEBC7D","#C3B8EE","#507DF6","#4363C8"],[0,0.388,0.863,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_47.setTransform(1303.25,360.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.lf(["#BCBB7C","#C2B7EE","#507DF6","#4362C7"],[0,0.384,0.859,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_48.setTransform(1303.25,360.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.lf(["#BBBA7C","#C1B6ED","#507DF6","#4261C6"],[0,0.384,0.859,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_49.setTransform(1303.25,360.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.lf(["#BAB87B","#C0B6ED","#517DF6","#4260C5"],[0,0.38,0.855,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_50.setTransform(1303.25,360.2);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.lf(["#B8B77A","#C0B5ED","#517CF5","#425FC3"],[0,0.376,0.851,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_51.setTransform(1303.25,360.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.lf(["#B7B57A","#BFB5EC","#517CF5","#425EC2"],[0,0.373,0.847,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_52.setTransform(1303.25,360.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.lf(["#B5B479","#BEB4EC","#517CF5","#415DC1"],[0,0.369,0.847,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_53.setTransform(1303.25,360.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.lf(["#B4B378","#BDB3EC","#517BF5","#415CC0"],[0,0.369,0.843,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_54.setTransform(1303.25,360.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.lf(["#B3B178","#BCB3EB","#517BF5","#415CBF"],[0,0.365,0.839,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_55.setTransform(1303.25,360.2);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.lf(["#B1B077","#BCB2EB","#517BF4","#415BBD"],[0,0.361,0.835,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_56.setTransform(1303.25,360.2);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.lf(["#B0AE76","#BBB2EB","#517BF4","#405ABC"],[0,0.357,0.835,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_57.setTransform(1303.25,360.2);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.lf(["#AEAD76","#BAB1EA","#517AF4","#4059BB"],[0,0.353,0.831,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_58.setTransform(1303.25,360.2);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.lf(["#ADAC75","#B9B0EA","#517AF4","#4058BA"],[0,0.353,0.827,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_59.setTransform(1303.25,360.2);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.lf(["#ACAA74","#B9B0E9","#517AF4","#4057B9"],[0,0.349,0.824,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_60.setTransform(1303.25,360.2);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.lf(["#AAA974","#B8AFE9","#5179F3","#3F56B8"],[0,0.345,0.824,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_61.setTransform(1303.25,360.2);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.lf(["#A9A773","#B7AFE9","#5179F3","#3F56B6"],[0,0.341,0.82,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_62.setTransform(1303.25,360.2);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.lf(["#A7A672","#B6AEE8","#5179F3","#3F55B5"],[0,0.337,0.816,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_63.setTransform(1303.25,360.2);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.lf(["#A6A472","#B5AEE8","#5178F3","#3F54B4"],[0,0.333,0.816,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_64.setTransform(1303.25,360.2);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.lf(["#A5A371","#B5ADE8","#5178F3","#3E53B3"],[0,0.333,0.812,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_65.setTransform(1303.25,360.2);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.lf(["#A3A270","#B4ACE7","#5178F3","#3E52B2"],[0,0.329,0.808,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_66.setTransform(1303.25,360.2);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.lf(["#A2A070","#B3ACE7","#5178F2","#3E51B1"],[0,0.325,0.804,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_67.setTransform(1303.25,360.2);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.lf(["#A09F6F","#B2ABE7","#5177F2","#3E50AF"],[0,0.322,0.804,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_68.setTransform(1303.25,360.2);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.lf(["#9F9D6E","#B2ABE6","#5177F2","#3E50AE"],[0,0.318,0.8,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_69.setTransform(1303.25,360.2);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.lf(["#9E9C6E","#B1AAE6","#5277F2","#3D4FAD"],[0,0.318,0.796,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_70.setTransform(1303.25,360.2);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.lf(["#9C9B6D","#B0A9E6","#5276F2","#3D4EAC"],[0,0.314,0.792,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_71.setTransform(1303.25,360.2);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.lf(["#9B996C","#AFA9E5","#5276F1","#3D4DAB"],[0,0.31,0.792,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_72.setTransform(1303.25,360.2);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.lf(["#9A986C","#AFA8E5","#5276F1","#3D4CAA"],[0,0.306,0.788,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_73.setTransform(1303.25,360.2);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.lf(["#98966B","#AEA8E4","#5276F1","#3C4BA8"],[0,0.302,0.784,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_74.setTransform(1303.25,360.2);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.lf(["#97956A","#ADA7E4","#5275F1","#3C4AA7"],[0,0.302,0.78,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_75.setTransform(1303.25,360.2);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.lf(["#95936A","#ACA7E4","#5275F1","#3C4AA6"],[0,0.298,0.78,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_76.setTransform(1303.25,360.2);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.lf(["#949269","#ABA6E3","#5275F0","#3C49A5"],[0,0.294,0.776,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_77.setTransform(1303.25,360.2);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.lf(["#939168","#ABA5E3","#5274F0","#3B48A4"],[0,0.29,0.773,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_78.setTransform(1303.25,360.2);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.lf(["#918F68","#AAA5E3","#5274F0","#3B47A3"],[0,0.286,0.769,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_79.setTransform(1303.25,360.2);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.lf(["#908E67","#A9A4E2","#5274F0","#3B46A1"],[0,0.286,0.769,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_80.setTransform(1303.25,360.2);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.lf(["#8E8C67","#A8A4E2","#5274F0","#3B45A0"],[0,0.282,0.765,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_81.setTransform(1303.25,360.2);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.lf(["#8D8B66","#A8A3E2","#5273F0","#3A449F"],[0,0.278,0.761,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_82.setTransform(1303.25,360.2);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.lf(["#8C8A65","#A7A2E1","#5273EF","#3A439E"],[0,0.275,0.757,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_83.setTransform(1303.25,360.2);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.lf(["#8A8865","#A6A2E1","#5273EF","#3A439D"],[0,0.271,0.757,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_84.setTransform(1303.25,360.2);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.lf(["#898764","#A5A1E1","#5272EF","#3A429C"],[0,0.271,0.753,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_85.setTransform(1303.25,360.2);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.lf(["#878563","#A4A1E0","#5272EF","#39419A"],[0,0.267,0.749,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_86.setTransform(1303.25,360.2);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.lf(["#868463","#A4A0E0","#5272EF","#394099"],[0,0.263,0.745,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_87.setTransform(1303.25,360.2);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.lf(["#858262","#A3A0DF","#5272EE","#393F98"],[0,0.259,0.745,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_88.setTransform(1303.25,360.2);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.lf(["#838161","#A29FDF","#5271EE","#393E97"],[0,0.255,0.741,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_89.setTransform(1303.25,360.2);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.lf(["#828061","#A19EDF","#5371EE","#383D96"],[0,0.255,0.737,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_90.setTransform(1303.25,360.2);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.lf(["#817E60","#A19EDE","#5371EE","#383D95"],[0,0.251,0.733,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_91.setTransform(1303.25,360.2);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.lf(["#7F7D5F","#A09DDE","#5370EE","#383C93"],[0,0.247,0.733,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_92.setTransform(1303.25,360.2);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.lf(["#7E7B5F","#9F9DDE","#5370ED","#383B92"],[0,0.243,0.729,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_93.setTransform(1303.25,360.2);

	this.shape_94 = new cjs.Shape();
	this.shape_94.graphics.lf(["#7C7A5E","#9E9CDD","#5370ED","#383A91"],[0,0.239,0.725,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_94.setTransform(1303.25,360.2);

	this.shape_95 = new cjs.Shape();
	this.shape_95.graphics.lf(["#7B795D","#9E9BDD","#5370ED","#373990"],[0,0.239,0.722,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_95.setTransform(1303.25,360.2);

	this.shape_96 = new cjs.Shape();
	this.shape_96.graphics.lf(["#7A775D","#9D9BDD","#536FED","#37388F"],[0,0.235,0.722,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_96.setTransform(1303.25,360.2);

	this.shape_97 = new cjs.Shape();
	this.shape_97.graphics.lf(["#78765C","#9C9ADC","#536FED","#37378E"],[0,0.231,0.718,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_97.setTransform(1303.25,360.2);

	this.shape_98 = new cjs.Shape();
	this.shape_98.graphics.lf(["#77745B","#9B9ADC","#536FED","#37378C"],[0,0.227,0.714,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_98.setTransform(1303.25,360.2);

	this.shape_99 = new cjs.Shape();
	this.shape_99.graphics.lf(["#75735B","#9A99DC","#536EEC","#36368B"],[0,0.224,0.714,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_99.setTransform(1303.25,360.2);

	this.shape_100 = new cjs.Shape();
	this.shape_100.graphics.lf(["#74715A","#9A99DB","#536EEC","#36358A"],[0,0.22,0.71,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_100.setTransform(1303.25,360.2);

	this.shape_101 = new cjs.Shape();
	this.shape_101.graphics.lf(["#737059","#9998DB","#536EEC","#363489"],[0,0.22,0.706,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_101.setTransform(1303.25,360.2);

	this.shape_102 = new cjs.Shape();
	this.shape_102.graphics.lf(["#716F59","#9897DA","#536DEC","#363388"],[0,0.216,0.702,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_102.setTransform(1303.25,360.2);

	this.shape_103 = new cjs.Shape();
	this.shape_103.graphics.lf(["#706D58","#9797DA","#536DEC","#353287"],[0,0.212,0.702,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_103.setTransform(1303.25,360.2);

	this.shape_104 = new cjs.Shape();
	this.shape_104.graphics.lf(["#6E6C57","#9796DA","#536DEB","#353185"],[0,0.208,0.698,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_104.setTransform(1303.25,360.2);

	this.shape_105 = new cjs.Shape();
	this.shape_105.graphics.lf(["#6D6A57","#9696D9","#536DEB","#353184"],[0,0.204,0.694,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_105.setTransform(1303.25,360.2);

	this.shape_106 = new cjs.Shape();
	this.shape_106.graphics.lf(["#6C6956","#9595D9","#536CEB","#353083"],[0,0.204,0.69,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_106.setTransform(1303.25,360.2);

	this.shape_107 = new cjs.Shape();
	this.shape_107.graphics.lf(["#6A6855","#9494D9","#536CEB","#342F82"],[0,0.2,0.69,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_107.setTransform(1303.25,360.2);

	this.shape_108 = new cjs.Shape();
	this.shape_108.graphics.lf(["#696655","#9394D8","#536CEB","#342E81"],[0,0.196,0.686,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_108.setTransform(1303.25,360.2);

	this.shape_109 = new cjs.Shape();
	this.shape_109.graphics.lf(["#676554","#9393D8","#536BEA","#342D7F"],[0,0.192,0.682,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_109.setTransform(1303.25,360.2);

	this.shape_110 = new cjs.Shape();
	this.shape_110.graphics.lf(["#666353","#9293D8","#546BEA","#342C7E"],[0,0.188,0.678,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_110.setTransform(1303.25,360.2);

	this.shape_111 = new cjs.Shape();
	this.shape_111.graphics.lf(["#656253","#9192D7","#546BEA","#332B7D"],[0,0.188,0.678,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_111.setTransform(1303.25,360.2);

	this.shape_112 = new cjs.Shape();
	this.shape_112.graphics.lf(["#636152","#9091D7","#546BEA","#332A7C"],[0,0.184,0.675,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_112.setTransform(1303.25,360.2);

	this.shape_113 = new cjs.Shape();
	this.shape_113.graphics.lf(["#625F51","#9091D6","#546AEA","#332A7B"],[0,0.18,0.671,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_113.setTransform(1303.25,360.2);

	this.shape_114 = new cjs.Shape();
	this.shape_114.graphics.lf(["#615E51","#8F90D6","#546AE9","#33297A"],[0,0.176,0.667,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_114.setTransform(1303.25,360.2);

	this.shape_115 = new cjs.Shape();
	this.shape_115.graphics.lf(["#5F5C50","#8E90D6","#546AE9","#332878"],[0,0.173,0.667,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_115.setTransform(1303.25,360.2);

	this.shape_116 = new cjs.Shape();
	this.shape_116.graphics.lf(["#5E5B4F","#8D8FD5","#5469E9","#322777"],[0,0.173,0.663,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_116.setTransform(1303.25,360.2);

	this.shape_117 = new cjs.Shape();
	this.shape_117.graphics.lf(["#5C594F","#8C8FD5","#5469E9","#322676"],[0,0.169,0.659,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_117.setTransform(1303.25,360.2);

	this.shape_118 = new cjs.Shape();
	this.shape_118.graphics.lf(["#5B584E","#8C8ED5","#5469E9","#322575"],[0,0.165,0.655,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_118.setTransform(1303.25,360.2);

	this.shape_119 = new cjs.Shape();
	this.shape_119.graphics.lf(["#5A574D","#8B8DD4","#5469E9","#322474"],[0,0.161,0.655,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_119.setTransform(1303.25,360.2);

	this.shape_120 = new cjs.Shape();
	this.shape_120.graphics.lf(["#58554D","#8A8DD4","#5468E8","#312473"],[0,0.157,0.651,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_120.setTransform(1303.25,360.2);

	this.shape_121 = new cjs.Shape();
	this.shape_121.graphics.lf(["#57544C","#898CD4","#5468E8","#312371"],[0,0.157,0.647,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_121.setTransform(1303.25,360.2);

	this.shape_122 = new cjs.Shape();
	this.shape_122.graphics.lf(["#55524B","#898CD3","#5468E8","#312270"],[0,0.153,0.643,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_122.setTransform(1303.25,360.2);

	this.shape_123 = new cjs.Shape();
	this.shape_123.graphics.lf(["#54514B","#888BD3","#5467E8","#31216F"],[0,0.149,0.643,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_123.setTransform(1303.25,360.2);

	this.shape_124 = new cjs.Shape();
	this.shape_124.graphics.lf(["#53504A","#878AD3","#5467E8","#30206E"],[0,0.145,0.639,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_124.setTransform(1303.25,360.2);

	this.shape_125 = new cjs.Shape();
	this.shape_125.graphics.lf(["#514E49","#868AD2","#5467E7","#301F6D"],[0,0.141,0.635,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_125.setTransform(1303.25,360.2);

	this.shape_126 = new cjs.Shape();
	this.shape_126.graphics.lf(["#504D49","#8689D2","#5467E7","#301E6C"],[0,0.141,0.631,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_126.setTransform(1303.25,360.2);

	this.shape_127 = new cjs.Shape();
	this.shape_127.graphics.lf(["#4E4B48","#8589D1","#5466E7","#301E6A"],[0,0.137,0.631,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_127.setTransform(1303.25,360.2);

	this.shape_128 = new cjs.Shape();
	this.shape_128.graphics.lf(["#4D4A47","#8488D1","#5466E7","#2F1D69"],[0,0.133,0.627,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_128.setTransform(1303.25,360.2);

	this.shape_129 = new cjs.Shape();
	this.shape_129.graphics.lf(["#4C4847","#8388D1","#5466E7","#2F1C68"],[0,0.129,0.624,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_129.setTransform(1303.25,360.2);

	this.shape_130 = new cjs.Shape();
	this.shape_130.graphics.lf(["#4A4746","#8287D0","#5565E6","#2F1B67"],[0,0.125,0.624,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_130.setTransform(1303.25,360.2);

	this.shape_131 = new cjs.Shape();
	this.shape_131.graphics.lf(["#494645","#8286D0","#5565E6","#2F1A66"],[0,0.125,0.62,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_131.setTransform(1303.25,360.2);

	this.shape_132 = new cjs.Shape();
	this.shape_132.graphics.lf(["#484445","#8186D0","#5565E6","#2E1965"],[0,0.122,0.616,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_132.setTransform(1303.25,360.2);

	this.shape_133 = new cjs.Shape();
	this.shape_133.graphics.lf(["#464344","#8085CF","#5565E6","#2E1863"],[0,0.118,0.612,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_133.setTransform(1303.25,360.2);

	this.shape_134 = new cjs.Shape();
	this.shape_134.graphics.lf(["#454144","#7F85CF","#5564E6","#2E1862"],[0,0.114,0.612,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_134.setTransform(1303.25,360.2);

	this.shape_135 = new cjs.Shape();
	this.shape_135.graphics.lf(["#434043","#7F84CF","#5564E6","#2E1761"],[0,0.11,0.608,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_135.setTransform(1303.25,360.2);

	this.shape_136 = new cjs.Shape();
	this.shape_136.graphics.lf(["#423F42","#7E83CE","#5564E5","#2D1660"],[0,0.11,0.604,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_136.setTransform(1303.25,360.2);

	this.shape_137 = new cjs.Shape();
	this.shape_137.graphics.lf(["#413D42","#7D83CE","#5563E5","#2D155F"],[0,0.106,0.6,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_137.setTransform(1303.25,360.2);

	this.shape_138 = new cjs.Shape();
	this.shape_138.graphics.lf(["#3F3C41","#7C82CE","#5563E5","#2D145E"],[0,0.102,0.6,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_138.setTransform(1303.25,360.2);

	this.shape_139 = new cjs.Shape();
	this.shape_139.graphics.lf(["#3E3A40","#7B82CD","#5563E5","#2D135C"],[0,0.098,0.596,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_139.setTransform(1303.25,360.2);

	this.shape_140 = new cjs.Shape();
	this.shape_140.graphics.lf(["#3C3940","#7B81CD","#5562E5","#2D125B"],[0,0.094,0.592,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_140.setTransform(1303.25,360.2);

	this.shape_141 = new cjs.Shape();
	this.shape_141.graphics.lf(["#3B373F","#7A81CC","#5562E4","#2C125A"],[0,0.09,0.588,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_141.setTransform(1303.25,360.2);

	this.shape_142 = new cjs.Shape();
	this.shape_142.graphics.lf(["#3A363E","#7980CC","#5562E4","#2C1159"],[0,0.09,0.588,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_142.setTransform(1303.25,360.2);

	this.shape_143 = new cjs.Shape();
	this.shape_143.graphics.lf(["#38353E","#787FCC","#5562E4","#2C1058"],[0,0.086,0.584,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_143.setTransform(1303.25,360.2);

	this.shape_144 = new cjs.Shape();
	this.shape_144.graphics.lf(["#37333D","#787FCB","#5561E4","#2C0F57"],[0,0.082,0.58,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_144.setTransform(1303.25,360.2);

	this.shape_145 = new cjs.Shape();
	this.shape_145.graphics.lf(["#35323C","#777ECB","#5561E4","#2B0E55"],[0,0.078,0.576,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_145.setTransform(1303.25,360.2);

	this.shape_146 = new cjs.Shape();
	this.shape_146.graphics.lf(["#34303C","#767ECB","#5561E3","#2B0D54"],[0,0.075,0.576,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_146.setTransform(1303.25,360.2);

	this.shape_147 = new cjs.Shape();
	this.shape_147.graphics.lf(["#332F3B","#757DCA","#5560E3","#2B0C53"],[0,0.075,0.573,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_147.setTransform(1303.25,360.2);

	this.shape_148 = new cjs.Shape();
	this.shape_148.graphics.lf(["#312E3A","#757CCA","#5560E3","#2B0B52"],[0,0.071,0.569,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_148.setTransform(1303.25,360.2);

	this.shape_149 = new cjs.Shape();
	this.shape_149.graphics.lf(["#302C3A","#747CCA","#5560E3","#2A0B51"],[0,0.067,0.565,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_149.setTransform(1303.25,360.2);

	this.shape_150 = new cjs.Shape();
	this.shape_150.graphics.lf(["#2F2B39","#737BC9","#5660E3","#2A0A50"],[0,0.063,0.565,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_150.setTransform(1303.25,360.2);

	this.shape_151 = new cjs.Shape();
	this.shape_151.graphics.lf(["#2D2938","#727BC9","#565FE3","#2A094E"],[0,0.059,0.561,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_151.setTransform(1303.25,360.2);

	this.shape_152 = new cjs.Shape();
	this.shape_152.graphics.lf(["#2C2838","#717AC9","#565FE2","#2A084D"],[0,0.059,0.557,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_152.setTransform(1303.25,360.2);

	this.shape_153 = new cjs.Shape();
	this.shape_153.graphics.lf(["#2A2637","#717AC8","#565FE2","#29074C"],[0,0.055,0.553,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_153.setTransform(1303.25,360.2);

	this.shape_154 = new cjs.Shape();
	this.shape_154.graphics.lf(["#292536","#7079C8","#565EE2","#29064B"],[0,0.051,0.553,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_154.setTransform(1303.25,360.2);

	this.shape_155 = new cjs.Shape();
	this.shape_155.graphics.lf(["#282436","#6F78C7","#565EE2","#29054A"],[0,0.047,0.549,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_155.setTransform(1303.25,360.2);

	this.shape_156 = new cjs.Shape();
	this.shape_156.graphics.lf(["#262235","#6E78C7","#565EE2","#290549"],[0,0.043,0.545,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_156.setTransform(1303.25,360.2);

	this.shape_157 = new cjs.Shape();
	this.shape_157.graphics.lf(["#252134","#6E77C7","#565EE1","#280447"],[0,0.043,0.541,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_157.setTransform(1303.25,360.2);

	this.shape_158 = new cjs.Shape();
	this.shape_158.graphics.lf(["#231F34","#6D77C6","#565DE1","#280346"],[0,0.039,0.541,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_158.setTransform(1303.25,360.2);

	this.shape_159 = new cjs.Shape();
	this.shape_159.graphics.lf(["#221E33","#6C76C6","#565DE1","#280245"],[0,0.035,0.537,1],-1553.3,0,1553.4,0).s().p("EjytBEAMAAAiIAMHlaAAAMAAACIAg");
	this.shape_159.setTransform(1303.25,360.2);
	this.shape_159._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},4).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).to({state:[{t:this.shape_23}]},1).to({state:[{t:this.shape_24}]},1).to({state:[{t:this.shape_25}]},1).to({state:[{t:this.shape_26}]},1).to({state:[{t:this.shape_27}]},1).to({state:[{t:this.shape_28}]},1).to({state:[{t:this.shape_29}]},1).to({state:[{t:this.shape_30}]},1).to({state:[{t:this.shape_31}]},1).to({state:[{t:this.shape_32}]},1).to({state:[{t:this.shape_33}]},1).to({state:[{t:this.shape_34}]},1).to({state:[{t:this.shape_35}]},1).to({state:[{t:this.shape_36}]},1).to({state:[{t:this.shape_37}]},1).to({state:[{t:this.shape_38}]},1).to({state:[{t:this.shape_39}]},1).to({state:[{t:this.shape_40}]},1).to({state:[{t:this.shape_41}]},1).to({state:[{t:this.shape_42}]},1).to({state:[{t:this.shape_43}]},1).to({state:[{t:this.shape_44}]},1).to({state:[{t:this.shape_45}]},1).to({state:[{t:this.shape_46}]},1).to({state:[{t:this.shape_47}]},1).to({state:[{t:this.shape_48}]},1).to({state:[{t:this.shape_49}]},1).to({state:[{t:this.shape_50}]},1).to({state:[{t:this.shape_51}]},1).to({state:[{t:this.shape_52}]},1).to({state:[{t:this.shape_53}]},1).to({state:[{t:this.shape_54}]},1).to({state:[{t:this.shape_55}]},1).to({state:[{t:this.shape_56}]},1).to({state:[{t:this.shape_57}]},1).to({state:[{t:this.shape_58}]},1).to({state:[{t:this.shape_59}]},1).to({state:[{t:this.shape_60}]},1).to({state:[{t:this.shape_61}]},1).to({state:[{t:this.shape_62}]},1).to({state:[{t:this.shape_63}]},1).to({state:[{t:this.shape_64}]},1).to({state:[{t:this.shape_65}]},1).to({state:[{t:this.shape_66}]},1).to({state:[{t:this.shape_67}]},1).to({state:[{t:this.shape_68}]},1).to({state:[{t:this.shape_69}]},1).to({state:[{t:this.shape_70}]},1).to({state:[{t:this.shape_71}]},1).to({state:[{t:this.shape_72}]},1).to({state:[{t:this.shape_73}]},1).to({state:[{t:this.shape_74}]},1).to({state:[{t:this.shape_75}]},1).to({state:[{t:this.shape_76}]},1).to({state:[{t:this.shape_77}]},1).to({state:[{t:this.shape_78}]},1).to({state:[{t:this.shape_79}]},1).to({state:[{t:this.shape_80}]},1).to({state:[{t:this.shape_81}]},1).to({state:[{t:this.shape_82}]},1).to({state:[{t:this.shape_83}]},1).to({state:[{t:this.shape_84}]},1).to({state:[{t:this.shape_85}]},1).to({state:[{t:this.shape_86}]},1).to({state:[{t:this.shape_87}]},1).to({state:[{t:this.shape_88}]},1).to({state:[{t:this.shape_89}]},1).to({state:[{t:this.shape_90}]},1).to({state:[{t:this.shape_91}]},1).to({state:[{t:this.shape_92}]},1).to({state:[{t:this.shape_93}]},1).to({state:[{t:this.shape_94}]},1).to({state:[{t:this.shape_95}]},1).to({state:[{t:this.shape_96}]},1).to({state:[{t:this.shape_97}]},1).to({state:[{t:this.shape_98}]},1).to({state:[{t:this.shape_99}]},1).to({state:[{t:this.shape_100}]},1).to({state:[{t:this.shape_101}]},1).to({state:[{t:this.shape_102}]},1).to({state:[{t:this.shape_103}]},1).to({state:[{t:this.shape_104}]},1).to({state:[{t:this.shape_105}]},1).to({state:[{t:this.shape_106}]},1).to({state:[{t:this.shape_107}]},1).to({state:[{t:this.shape_108}]},1).to({state:[{t:this.shape_109}]},1).to({state:[{t:this.shape_110}]},1).to({state:[{t:this.shape_111}]},1).to({state:[{t:this.shape_112}]},1).to({state:[{t:this.shape_113}]},1).to({state:[{t:this.shape_114}]},1).to({state:[{t:this.shape_115}]},1).to({state:[{t:this.shape_116}]},1).to({state:[{t:this.shape_117}]},1).to({state:[{t:this.shape_118}]},1).to({state:[{t:this.shape_119}]},1).to({state:[{t:this.shape_120}]},1).to({state:[{t:this.shape_121}]},1).to({state:[{t:this.shape_122}]},1).to({state:[{t:this.shape_123}]},1).to({state:[{t:this.shape_124}]},1).to({state:[{t:this.shape_125}]},1).to({state:[{t:this.shape_126}]},1).to({state:[{t:this.shape_127}]},1).to({state:[{t:this.shape_128}]},1).to({state:[{t:this.shape_129}]},1).to({state:[{t:this.shape_130}]},1).to({state:[{t:this.shape_131}]},1).to({state:[{t:this.shape_132}]},1).to({state:[{t:this.shape_133}]},1).to({state:[{t:this.shape_134}]},1).to({state:[{t:this.shape_135}]},1).to({state:[{t:this.shape_136}]},1).to({state:[{t:this.shape_137}]},1).to({state:[{t:this.shape_138}]},1).to({state:[{t:this.shape_139}]},1).to({state:[{t:this.shape_140}]},1).to({state:[{t:this.shape_141}]},1).to({state:[{t:this.shape_142}]},1).to({state:[{t:this.shape_143}]},1).to({state:[{t:this.shape_144}]},1).to({state:[{t:this.shape_145}]},1).to({state:[{t:this.shape_146}]},1).to({state:[{t:this.shape_147}]},1).to({state:[{t:this.shape_148}]},1).to({state:[{t:this.shape_149}]},1).to({state:[{t:this.shape_150}]},1).to({state:[{t:this.shape_151}]},1).to({state:[{t:this.shape_152}]},1).to({state:[{t:this.shape_153}]},1).to({state:[{t:this.shape_154}]},1).to({state:[{t:this.shape_155}]},1).to({state:[{t:this.shape_156}]},1).to({state:[{t:this.shape_157}]},1).to({state:[{t:this.shape_158}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).to({state:[{t:this.shape_159}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.shape_159).wait(163).to({_off:false},0).wait(86));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.replay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("Play Again", "normal 400 60px 'Lobster'");
	this.text.lineHeight = 91;
	this.text.lineWidth = 348;
	this.text.parent = this;
	this.text.setTransform(-16,36.05);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape.setTransform(136.55,70);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00FFFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_1.setTransform(136.55,70);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFCCFF").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_2.setTransform(136.55,70);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FFCC").s().p("A+jRAQsqnBAAp/QAAp+MqnDQMqnCR5AAQR6AAMqHCQMqHDAAJ+QAAJ/sqHBQsqHEx6AAQx5AAsqnEg");
	this.shape_3.setTransform(136.55,70);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{x:-16,y:36.05}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{x:2,y:28.05}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{x:-18,y:22}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{x:2,y:34}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-140,-84,553.1,308);


(lib.raincopy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E7F1FA").s().p("AgJANQAAgIAHgMIAGgMQAGARgBAKQAAAIgJADIgDABQgFAAgBgHg");
	this.shape.setTransform(-129.495,-56.2875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#BEDEF5").s().p("AgaAsQgIgLAAgQQAKASAQAAQAPAAALgSQAKgQgQgdIgQgbIADABQAdAhAFAYQAFATgHAQQgJASgWAAQgRAAgJgMg");
	this.shape_1.setTransform(-128.237,-54.475);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D0E5F6").s().p("AgeAmQgHgPAEgTQACgHAFgKIAJgRQAGgKADgKQADgIAEAEQAdAiAFAXQAFATgHAQQgJASgWAAQgVAAgJgSg");
	this.shape_2.setTransform(-128.2347,-54.481);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2,p:{y:-54.481}},{t:this.shape_1,p:{y:-54.475}},{t:this.shape,p:{y:-56.2875}}]}).to({state:[{t:this.shape_2,p:{y:-41.481}},{t:this.shape_1,p:{y:-41.475}},{t:this.shape,p:{y:-43.2875}}]},1).to({state:[{t:this.shape_2,p:{y:-21.481}},{t:this.shape_1,p:{y:-21.475}},{t:this.shape,p:{y:-23.2875}}]},1).to({state:[{t:this.shape_2,p:{y:5.619}},{t:this.shape_1,p:{y:5.625}},{t:this.shape,p:{y:3.8125}}]},1).to({state:[{t:this.shape_2,p:{y:5.619}},{t:this.shape_1,p:{y:5.625}},{t:this.shape,p:{y:3.8125}}]},1).to({state:[{t:this.shape_2,p:{y:25.619}},{t:this.shape_1,p:{y:25.625}},{t:this.shape,p:{y:23.8125}}]},1).to({state:[{t:this.shape_2,p:{y:25.619}},{t:this.shape_1,p:{y:25.625}},{t:this.shape,p:{y:23.8125}}]},1).to({state:[{t:this.shape_2,p:{y:62.619}},{t:this.shape_1,p:{y:62.625}},{t:this.shape,p:{y:60.8125}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131.7,-60.1,6.999999999999986,128.4);


(lib.house = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.housenoback();
	this.instance.setTransform(0,0,0.8379,0.5687);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.house, new cjs.Rectangle(0,0,2793.6,948.1), null);


(lib.cory1copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#666666").ss(1,1,1).p("AgkCyIBIlj");
	this.shape.setTransform(19.95,138);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#666666").ss(1,1,1).p("AhRF5IBHlbIBdmW");
	this.shape_1.setTransform(24.55,118.125);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#666666").ss(1,1,1).p("AiIIzIBHlbIBdmVIBtl1");
	this.shape_2.setTransform(30,99.475);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#666666").ss(1,1,1).p("AA3nWQgJATgIATQAAAAAAAAQADAtAUgLIgcAZIgcAYAgHkuIAMgvAAXmLIAKAWAAXmLQgJAXgJAXAAXmLQAAAAAAAAAB0m+Ig3AwAAmmwQgIATgHASAA3nWQAVAvAogXADNr1QhYCUg+CLAhmnkQAUAaATAZQA4AbAtgaAg3l7QAWAIgCgbIAAAAQAeAQAcgNAg3l7IAAAAQAeAQAeAOAg3l7IAAAAAg3l7IAAAAQAfAcgOAcIAfAVAhnmXQAAABAAAAQAYAOAYANAhnmXQAlA8gQAxIAsgZIArgaAhnmWQAdgEALgXQAOASAOARAi3nJQApANAogoQBPAoBOgaAi3nJQAnAbApAXAkssIQBjCgBjCEAmlqdQBrB6CDBaQA1BygoBgQBWABAkBUIAbheIAOguAlbiRICxhmIBYgzQA8ANABAdAkMMJIBHlbIBemXIA3i5AgjmOQAVAZATAYAGmrMIkyEO");
	this.shape_3.setTransform(43.175,78.15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).wait(111));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-0.5,86.4,157.3);


(lib.cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#C0DBFF").s().p("AgDANQgKgBAEgLQAFgKAIgDQAKgDgFAVQgBAHgJAAIgCAAg");
	this.shape.setTransform(29.0745,55.5538,3.4792,2.9017);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0DBFF").s().p("AgKAJQgGgBAKgIQAIgKAIACQAGACgFAHQgGAIgMAAIgDAAg");
	this.shape_1.setTransform(20.0986,47.24,3.4792,2.9017);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#C0DBFF").s().p("AgCAIQgHgBAAgHQABgHAPAAQAFAAgEAHQgDAIgFAAIgCAAg");
	this.shape_2.setTransform(63.4036,31.4036,3.4792,2.9017);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C0DBFF").s().p("AgRAFQABgHAPgEQAOgEAFAIQADADgVAFIgMACQgGAAABgDg");
	this.shape_3.setTransform(16.9957,55.5619,3.4792,2.9017);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#C0DBFF").s().p("AgSAIQABgIAQgIQAPgKAGAJQAAAJgUAKQgKAEgEAAQgGAAACgGg");
	this.shape_4.setTransform(45.7127,52.1919,3.4792,2.9017);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#C0DBFF").s().p("AgWAEQAJgFASgEQAVgFgDAKQgBADgYADIgPACQgIAAADgEg");
	this.shape_5.setTransform(57.6076,24.16,3.4792,2.9017);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#C0DBFF").s().p("AgRAEQAKgMAHgFQAIgGANAAQABABABAAQAAAAABAAQAAABAAAAQAAAAAAABIgIAGIgTAQQgOANgEABQgGgBAKgPg");
	this.shape_6.setTransform(37.2703,29.7924,3.4792,2.9017);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#C0DBFF").s().p("AgRALQgBgDADgFQADgFAEgDQAJgHAJACQAHABABAEIgGACIgMAEIgLAIIgEADIgCgBg");
	this.shape_7.setTransform(54.8401,41.3189,3.4792,2.9017);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#C0DBFF").s().p("AgjAUQAAgKAOgMIANgLQAHgHAFgDQAYgMAIAKQABAEgJAGQgSAKgJAHQgKAJgFAKQgDAHgGADQgLgBgBgKg");
	this.shape_8.setTransform(41.5276,39.1649,3.4792,2.9017);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFA1A1").s().p("AgZATQgEgGAFgJQAFgJAKgHQAKgIAKgCQALgCAEAGQAEAFgFAKQgEAIgLAIQgKAIgKACIgEAAQgIAAgDgEg");
	this.shape_9.setTransform(153.4532,67.6907,3.4781,2.9011);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFA1A1").s().p("AALAXQgKgCgKgIQgLgIgEgIQgFgJAEgGQAEgFALABQAKACAKAIQAKAIAFAIQAFAJgEAGQgDAEgHAAIgFAAg");
	this.shape_10.setTransform(84.5691,70.7676,3.4781,2.9011);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#536B7E").s().p("AgLASQgFgJAEgLQACgKAJgGIAGgEQALgBgBAHQgBADgHANIgFAMIgCAJQgDACgCAAQgDAAgDgFg");
	this.shape_11.setTransform(116.6615,88.4683,3.4787,2.9014);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#9FBBE5").s().p("AgGAZQAHgEACgSQABgSgMgMQgMgLAHACQAEAAAHADIALAIQALAMAAATQAAARgNAIQgKAHgLAAQgOAAAWgNg");
	this.shape_12.setTransform(101.0764,77.4865,3.4781,2.9011);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#9FBBE5").s().p("AgFAfQgOgIAAgRQAAgSAMgNIALgIIAKgDQAIgCgMALQgMAMABATQABARAHAFQAWAMgOAAQgLAAgJgHg");
	this.shape_13.setTransform(140.6616,72.5547,3.4781,2.9011);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#46535B").s().p("AARAPQgRgYgTgBQgBAAAAAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQAEgCAIAAQAHABAHAEQAJAGAEASQABAAAAABQAAAAAAAAQgBABAAAAQAAAAAAAAIgEgBg");
	this.shape_14.setTransform(91.9898,59.1548,3.4781,2.9011);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#46535B").s().p("AgTAPIAAgEQAJggAaAHQABAAAAABQABAAAAAAQABAAAAABQAAAAAAABQABAAAAAAQAAABAAAAQAAAAAAAAQgBAAAAAAQgVAAgQAaIAAAAIgBgBg");
	this.shape_15.setTransform(144.871,57.0128,3.4781,2.9011);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#9FCEF4").s().p("AAXAXQgKgGgUgRIgUgQQgCgCACgDQACgDADADIATAQQAUAQAKAFQADACgCADQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAg");
	this.shape_16.setTransform(149.3857,109.4609,3.4781,2.9011);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#9FCEF4").s().p("AgaAEIgggOQgDgCACgDQACgDADABIAjAQQApAPAigFQADAAABAEQAAAEgDAAIgPABQghAAgjgOg");
	this.shape_17.setTransform(157.2269,100.8664,3.4781,2.9011);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#9FCEF4").s().p("AALAqQgEAAABgEQAEgagMgZIgOgVQgDgDADgDQADgCACACIAPAYQAOAbgFAcQAAABAAAAQgBABAAAAQAAABgBAAQgBAAgBAAg");
	this.shape_18.setTransform(136.2021,111.9269,3.4781,2.9011);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#9FCEF4").s().p("AAGATQgHgDgEgKQgGgKAFgOIABgBQABAAAAAAQAAAAAAAAQAAAAAAABQAAAAAAAAQACAZAKALIABACIgBAAIgCgBg");
	this.shape_19.setTransform(167.2667,133.1487,3.4775,2.9008);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#9FCEF4").s().p("AgOAZIABgCQAXgZACgVQABgEACAFQADALgGAMQgHAQgRAIIgBABIgBgBg");
	this.shape_20.setTransform(197.9965,140.4454,3.4775,2.9008);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#9FCEF4").s().p("AgbgEQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABABQAAAAABAAQAfALAVgHIACAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgIAHgOAAIgCABQgPAAgPgMg");
	this.shape_21.setTransform(145.0872,151.6923,3.4775,2.9008);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#9FCEF4").s().p("AgaAFIgCgCQAAAAABgBQAAAAAAAAQABAAAAAAQABAAAAAAQAhADASgNIACgBQABABAAAAQAAAAgBABQAAAAAAABQAAAAgBABQgGAIgNAEQgHADgGAAQgKAAgLgFg");
	this.shape_22.setTransform(204.1257,118.7765,3.4775,2.9008);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#BAE0FF").s().p("Ag6BhQgOAHgQADQgiAHgSgOQgSgPAJghQAHgZAMgNQAXgYAhgEQARgCANADQAHgWAXgKQALgEAJgBQgHgfAogXQArgYAbAiIAOAJQAPANAIAOQAYAug9ArIgDAMQgFAPgJALQgbAkg2gKQgIALgMAFQgIAEgHAAQgSAAgQgSg");
	this.shape_23.setTransform(180.5469,129.8131,3.4781,2.9011);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#CEE6FF").s().p("AgmBvQgNAGgRADQghAHgTgNQgbgUARgzQAfhZgsgwQADAAACgEQAFgIgEgWIBGAcQBTAZBDgVIAIADQAKAIARAeIAHACQAIAEAFAIQAQAbgZA7IgDAMQgFAPgJALQgbAkg2gKQgIALgNAFQgIAEgGAAQgSAAgQgSg");
	this.shape_24.setTransform(173.672,125.8381,3.4787,2.9014);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#9FBBE5").s().p("AjFAWQgQAFgTgFQglgLgKg1QgOgNgOgTIBVAiQBFAYBDAHQDGAUDEh0QABAcgSAWQgVAdgyAPIiLBWQgqAYg4AGIgXABQhhAAg8hUg");
	this.shape_25.setTransform(116.0112,110.9072,3.4787,2.9014);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#ACC8F0").s().p("Ai7CgQgRAGgSgGQgmgLgJg2QgggagOglQgehKBVg5QACgXAOgWQAdgqA6ANQANgWAYgQQAyggA9AiIAPgLQAUgNAVgGQBDgSAuA5IAhABQAmAEAdAOQBcAtgpCFIAFAOQAEATgDARQgKA4hNAXIiLBYQgrAYg3AFIgXABQhhAAg8hUg");
	this.shape_26.setTransform(112.5752,70.7224,3.4787,2.9014);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.cloud1, new cjs.Rectangle(0,-0.1,233.8,163.29999999999998), null);


(lib.btnplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.text = new cjs.Text("click to play", "normal 400 40px 'Lobster'", "#663399");
	this.text.lineHeight = 62;
	this.text.lineWidth = 608;
	this.text.parent = this;
	this.text.setTransform(350.85,25.05);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape.setTransform(445.7,57.05);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_1.setTransform(445.7,57.05);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9999").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_2.setTransform(445.7,57.05);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#66FF99").s().p("At3HPQlvjAAAkPQAAkOFvi/QFwjAIHAAQIIAAFvDAQFvC/AAEOQAAEPlvDAQlvDAoIgBQoHABlwjAg");
	this.shape_3.setTransform(445.7,57.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.text,p:{color:"#663399"}}]}).to({state:[{t:this.shape_1},{t:this.text,p:{color:"#00CCCC"}}]},1).to({state:[{t:this.shape_2},{t:this.text,p:{color:"#000000"}}]},1).to({state:[{t:this.shape_3},{t:this.text,p:{color:"#FFFFFF"}}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(320.3,-8.4,640.7,167.5);


(lib.___Camera___ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.visible = false;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2));

	// cameraBoundary
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("rgba(0,0,0,0)").ss(2,1,1,3,true).p("EAq+AfQMhV7AAAMAAAg+fMBV7AAAg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Symbol3 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leg();
	this.instance.setTransform(24.55,38.35,1,1,-54.4381,0,0,9.6,41.4);

	this.instance_1 = new lib.leg();
	this.instance_1.setTransform(70,83.6,1,1,-38.7056,0,0,20,52.1);

	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(70.85,123.75,1,1,-37.6564,0,0,20,52.1);

	this.instance_3 = new lib.leg();
	this.instance_3.setTransform(53.55,162.25,1,1,0,0,0,20,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol3, new cjs.Rectangle(0,0,107.4,196.2), null);


(lib.Symbol2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.leg();
	this.instance.setTransform(24.55,38.35,1,1,-54.4381,0,0,9.6,41.4);

	this.instance_1 = new lib.leg();
	this.instance_1.setTransform(70,83.6,1,1,-38.7056,0,0,20,52.1);

	this.instance_2 = new lib.leg();
	this.instance_2.setTransform(70.85,123.75,1,1,-37.6564,0,0,20,52.1);

	this.instance_3 = new lib.leg();
	this.instance_3.setTransform(53.55,162.25,1,1,0,0,0,20,52);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,107.4,196.2), null);


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol3();
	this.instance.setTransform(53.6,98,1,1,0,0,0,53.6,98);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.4,regY:92.3,scaleX:0.9933,scaleY:0.9874,x:54.4,y:92.35},0).wait(1).to({scaleX:0.9866,scaleY:0.9747,x:54.35,y:92.4},0).wait(1).to({scaleX:0.9799,scaleY:0.9621,y:92.5},0).wait(1).to({scaleX:0.9732,scaleY:0.9494,y:92.6},0).wait(1).to({scaleX:0.9665,scaleY:0.9368},0).wait(1).to({scaleX:0.9598,scaleY:0.9241,y:92.7},0).wait(1).to({scaleX:0.9531,scaleY:0.9115,y:92.8},0).wait(1).to({scaleX:0.9464,scaleY:0.8988,y:92.85},0).wait(1).to({scaleX:0.9397,scaleY:0.8862,x:54.3,y:92.95},0).wait(1).to({scaleX:0.933,scaleY:0.8735,y:93},0).wait(1).to({scaleX:0.9263,scaleY:0.8609,x:54.35,y:93.05},0).wait(1).to({scaleX:0.9196,scaleY:0.8482,x:54.3,y:93.15},0).wait(1).to({scaleX:0.9128,scaleY:0.8356,y:93.2},0).wait(1).to({scaleX:0.9061,scaleY:0.8229,y:93.3},0).wait(1).to({scaleX:0.8994,scaleY:0.8103,y:93.35},0).wait(1).to({scaleX:0.8927,scaleY:0.7977,y:93.4},0).wait(1).to({scaleX:0.886,scaleY:0.785,y:93.5},0).wait(1).to({scaleX:0.8793,scaleY:0.7724,y:93.6},0).wait(1).to({scaleX:0.8726,scaleY:0.7597,x:54.25,y:93.65},0).wait(1).to({scaleX:0.8659,scaleY:0.7471,y:93.7},0).wait(1).to({scaleX:0.8592,scaleY:0.7344,x:54.3,y:93.8},0).wait(1).to({scaleX:0.8525,scaleY:0.7218,y:93.85},0).wait(1).to({scaleX:0.8458,scaleY:0.7091,x:54.25,y:93.95},0).wait(1).to({scaleX:0.8391,scaleY:0.6965,y:94.05},0).wait(1).to({scaleX:0.8324,scaleY:0.6838},0).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,107.4,196.2);


(lib.helfleg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol2();
	this.instance.setTransform(88.05,78.45,1,1,0,0,0,53.6,98);

	this.instance_1 = new lib.Symbol1();
	this.instance_1.setTransform(90.4,81.9,1,1,0,0,0,53.6,98);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:54.4,regY:92.3,x:88.85,y:72.75},0).wait(17).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(34.5,-19.5,109.69999999999999,199.6);


(lib.eye = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol4();
	this.instance.setTransform(39.3,30.3,1,1,0,0,0,39.3,30.3);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.eye, new cjs.Rectangle(0,0,78.7,60.6), null);


(lib.copys1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.helfleg();
	this.instance.setTransform(60.4,109.5,0.8049,0.8602,0,-21.9448,158.0546,88.3,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(224.1,52.05,1,1,-21.9456,0,0,88.2,78.5);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(172,95.05,1,1,0,0,0,39.3,30.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65688A").s().p("AEbEJQAYg/gGhAQgBgHgIgDQgHgDgGADQg8AegkALQg1APgzgGQgugGghgTQgpgXgMgmQgDgIgKAAQgJAAgFAGQg7BDhbgNQhTgMg/hCQgjglgQg1QgNgwADg4QAOgdAKgRQBJiBCQguQB8gpCXAbQBZABBPAvQAvAbAWATQApAiALAkQA7BYALCWQAJByhKBeQg5BIhkA4QAtgzAWg7g");
	this.shape.setTransform(174.7915,112.464);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C7095").s().p("AiFGSQhTgNhJgqQhNgsg3hIQhEhYAYiHQAThkBCh1QBJiBCQguQB8gpCXAbQBZABBPAvQAvAbAWATQApAiALAkQA7BYALCWQAKB6hXBkQhABLhuA2QhuA3iGAAQg1AAg4gIg");
	this.shape_1.setTransform(171.4726,115.9865);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai9GeQhrgdhEgyQhahBgghnQgbhaAhh2QAahgA6hZQBsikC/gkQCcgeDHA8QBFARBLBbQA4BDAaBpQAcBugXBXQg6DbjkBaQh1AvhzAAQhQAAhQgXg");
	this.shape_2.setTransform(171.1362,116.0527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEF9").s().p("AADAUIgIgPQgJgPgGgGIAUgJQALgFAJgCQABAIgBALIgCASIgCAQIgCAKIAAACQgFgDgGgKg");
	this.shape_3.setTransform(198.6,153.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAqIgJgPIgMgVQgIgMgHgHIgBgBQgDgDAEgGIADgCIAcgNQAQgHAMgBQAFAAAAAEQADALgCAQIgDAZIgCATQgDALgGAFQgCACgDAAQgEAAgGgFg");
	this.shape_4.setTransform(198.3931,153.5293);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEF9").s().p("AgHAeQgLgYABgpIAPAOQALAMAJAFQgHAJgDALIgGAQQgCAEgCAAQgCAAgDgGg");
	this.shape_5.setTransform(154.5207,157.4775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLA2QgPgLgDgmQgCgZAEgeQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIACACIAAAAIACACIAGAFIALAMQANANALAGQADACgBADQgBADgDACQgFAVgJASQgJAVgJAAQgCAAgDgCg");
	this.shape_6.setTransform(154.7542,157.7337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#481D4C").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape_7.setTransform(139.7933,85.4565);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A1F4E").s().p("ApWClQADgpAShhIAAgBQAEgCACgDQBIhyBehOQBrhZB2gYQhHBXgSBMQgBAIADAGQADAHAIgDQA6gVA9g0IBlhiQACBNABAGQAHAuAeAZQAFAFAFgEQAGgDACgGQANgkAAgtQAAgZgGg5QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhJghhFQA9AlA7BKQAJAKBZB9QAGAJAIgHQAHgIAAgIQAAg2gYg3QgQglgmg8QCdBHB4CdQANAcAHASQAhCWgsgWQgbgOglgsQgpgwgXgPQgIgFgJADQgKACgCAKQgFAYgKBBQgIA2gEAPQgPAxgXghQgJgNgchTQgXhEgdgQQhDglg+BZQgSAagdA4QgdA4gNATQgDglAUhOQAUhLgFgpQgBgIgKgDQgIgEgIADQhFAXg9BFQgJALhbB3QAOgrAlhHQAphQANghQAFgLgNgHQgMgGgKAGQiJBdhTCwQAFgwAXhSQAahcAGglQACgNgOgDQgOgDgIAHQgvAqgiBGQgUApghBYQgChUAciDQADgMgPgDQgOgDgIAHQhBA4giBhQgOApgeCMQgUg6AFhOg");
	this.shape_8.setTransform(150.9867,77.05);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A1F4E").s().p("Ag6CSIAJg8QABgMgOgEQgNgDgIAIQgaAYgZAmQgLAPgeA0QgIhAALhKQAPgXAWgaQgTBKgHAuQgBAKAJADQAJAEAEgKQA2hyBNhXQBYhlBlguIg+BvQgjBCgTAwIAAABQgNgDgIAGQgkAigcAzQgUAigaA9QACgTAHgog");
	this.shape_9.setTransform(85.4438,75.95);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A1F4E").s().p("AExHtQANg+gBgLQgDgigDgKQgGgXgSgMQgFgDgIACQgHACgEAEQgLAMgJASQgZAyghAqQgsAogMAFQgMAEARgfQAOgeADgkQADgkgJggQgDgLgNAEQgMADgGAIQgKALgqA2QgfAogYAXQgZAYgCghIAFgjIgDgeIgIgfQgEgNgQAGQgOAGgEAJIgUAxQgNAdgQANQhkhIgthCQgFgHgKAGQgKAHABAHQAEATAJAcIAQAtQhEgjhXhQQgHgHgLAIQgLAIAEAJQAKASAJAYQgugYgtg7QgmgygUgxQgFgMgOAIQgNAIAAALQAAAcAIAjQAFAUALAoQgngbgnhEQgjg9gHglQgDgMgOAIQgNAIgBAKIAAAqQgcgxgFhMQAAgKgLACQgLADgDAHIgHAfQgHAVgFgRQgPgwADg1QADgqAQg6QAjhOAxg2QgTBJgHAvQgBAKAJADQAJADAEgJQA2hyBNhYQBZhmBlguIg+BwQgjBBgTAyQgEALAJAFQAIAEAHgKQBIhyBehOQBrhZB1gZQhHBYgRBMQgCAIADAGQAEAGAHgCQA7gVA8g0IBkhiQACBNABAGQAHAuAfAZQAFAEAGgDQAFgDACgGQAOgkAAgtQAAgagGg4QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhKgihEQA9AlA8BKQAIAKBaB9QAGAIAIgHQAHgHAAgIQgBg2gXg3QgQglgmg8QDDBYCHDaQADAGAHgCQAyA/AZA5QAdBAADBJIAAABQgHgJgRgPQgQgNgfgRIgygZQgKgGgLAKQgKAJADALQALApAXA5QAIAUACBHQACBKgXgtQgcg2hFgsQgJgGgLAJQgJAJgCAKQgEAyABBjQgFBWgmA0IgOhSQgNgvgegTQgHgEgKAGQghAUgaBJQgeBTgUAYQgQARgHAAQgJAAAEgbg");
	this.shape_10.setTransform(143.0493,98.9815);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#592A5E").s().p("AgeAbQgDgrgigwQBOA1A5BMQg1gtgtAHg");
	this.shape_11.setTransform(218.3,73.575);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#592A5E").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_12.setTransform(139.7933,80.4429);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_13.setTransform(140.5243,80.2749);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66676A").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape_14.setTransform(139.7933,85.4565);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C5D60").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_15.setTransform(139.7933,80.4429);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_16.setTransform(140.5243,80.2749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.copys1, new cjs.Rectangle(20.6,-27.5,268.2,221.2), null);


(lib.back = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.helfleg();
	this.instance.setTransform(-0.9,-63.5,0.6768,0.9949,0,0,180,88,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(138.1,-55.9,0.8324,0.8879,0,0,0,88.2,78.5);

	this.instance_2 = new lib.body();
	this.instance_2.setTransform(122,-47,1,1,0,0,0,148,92.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-37.3,-161,220,195.1);


(lib.Scene_1_sun2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun2
	this.instance = new lib.sun();
	this.instance.setTransform(-115.95,401.8,0.377,0.318,0,0,0,238.8,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(242).to({_off:false},0).wait(1).to({regX:425.8,regY:-190.9,x:-37.4,y:258.15},0).wait(1).to({x:-32.55,y:253.1},0).wait(1).to({x:-29.95,y:250.15},0).wait(1).to({x:-28.6,y:248.6},0).wait(1).to({x:-27.65,y:247.6},0).wait(1).to({x:-26.1,y:246.4},0).wait(1).to({x:-23.1,y:244.2},0).wait(1).to({x:-17.7,y:240.15},0).wait(1).to({x:-9.05,y:233.6},0).wait(1).to({x:1.4,y:225.7},0).wait(1).to({x:11.6,y:218.25},0).wait(1).to({x:21.55,y:211.15},0).wait(1).to({x:31.35,y:204.35},0).wait(1).to({x:40.9,y:197.85},0).wait(1).to({x:50.35,y:191.6},0).wait(1).to({x:59.65,y:185.65},0).wait(1).to({x:68.8,y:179.85},0).wait(1).to({x:77.8,y:174.3},0).wait(1).to({x:86.75,y:168.9},0).wait(1).to({x:95.6,y:163.7},0).wait(1).to({x:104.35,y:158.65},0).wait(1).to({x:113,y:153.8},0).wait(1).to({x:121.6,y:149.05},0).wait(1).to({x:130.1,y:144.45},0).wait(1).to({x:138.55,y:140},0).wait(1).to({x:146.95,y:135.7},0).wait(1).to({x:155.25,y:131.5},0).wait(1).to({x:163.5,y:127.4},0).wait(1).to({x:171.7,y:123.4},0).wait(1).to({x:179.9,y:119.5},0).wait(1).to({x:188.05,y:115.75},0).wait(1).to({x:196.15,y:112.05},0).wait(1).to({x:204.2,y:108.5},0).wait(1).to({x:212.25,y:105},0).wait(1).to({x:220.25,y:101.6},0).wait(1).to({x:228.2,y:98.3},0).wait(1).to({x:236.15,y:95.05},0).wait(1).to({x:244.05,y:91.9},0).wait(1).to({x:251.95,y:88.85},0).wait(1).to({x:259.8,y:85.85},0).wait(1).to({x:267.65,y:82.9},0).wait(1).to({x:275.5,y:80.05},0).wait(1).to({x:283.3,y:77.3},0).wait(1).to({x:291.1,y:74.6},0).wait(1).to({x:298.85,y:71.95},0).wait(1).to({x:306.65,y:69.4},0).wait(1).to({x:314.4,y:66.9},0).wait(1).to({x:322.15,y:64.5},0).wait(1).to({x:329.85,y:62.1},0).wait(1).to({x:337.6,y:59.8},0).wait(1).to({x:345.3,y:57.6},0).wait(1).to({x:353,y:55.4},0).wait(1).to({x:360.7,y:53.3},0).wait(1).to({x:368.4,y:51.25},0).wait(1).to({x:376.1,y:49.25},0).wait(1).to({x:383.8,y:47.3},0).wait(1).to({x:391.5,y:45.45},0).wait(1).to({x:399.2,y:43.65},0).wait(1).to({x:406.9,y:41.85},0).wait(1).to({x:414.6,y:40.15},0).wait(1).to({x:422.3,y:38.55},0).wait(1).to({x:430,y:36.95},0).wait(1).to({x:437.75,y:35.45},0).wait(1).to({x:445.45,y:33.95},0).wait(1).to({x:453.2,y:32.55},0).wait(1).to({x:460.9,y:31.2},0).wait(1).to({x:468.65,y:29.9},0).wait(1).to({x:476.4,y:28.65},0).wait(1).to({x:484.2,y:27.5},0).wait(1).to({x:491.95,y:26.35},0).wait(1).to({x:499.75,y:25.3},0).wait(1).to({x:507.55,y:24.3},0).wait(1).to({x:515.35,y:23.35},0).wait(1).to({x:523.2,y:22.45},0).wait(1).to({x:531.05,y:21.6},0).wait(1).to({x:538.9,y:20.85},0).wait(1).to({x:546.8,y:20.1},0).wait(1).to({x:554.75,y:19.45},0).wait(1).to({x:562.65,y:18.85},0).wait(1).to({x:570.6,y:18.35},0).wait(1).to({x:578.6,y:17.85},0).wait(1).to({x:586.6,y:17.45},0).wait(1).to({x:594.65,y:17.1},0).wait(1).to({x:602.7,y:16.85},0).wait(1).to({x:610.8,y:16.6},0).wait(1).to({x:618.95,y:16.45},0).wait(1).to({x:627.1,y:16.4},0).wait(1).to({x:635.3,y:16.35},0).wait(1).to({x:643.5,y:16.45},0).wait(1).to({x:651.8,y:16.55},0).wait(1).to({x:660.1,y:16.75},0).wait(1).to({x:668.45,y:17.05},0).wait(1).to({x:676.85,y:17.4},0).wait(1).to({x:685.3,y:17.85},0).wait(1).to({x:693.8,y:18.35},0).wait(1).to({x:702.35,y:18.95},0).wait(1).to({x:710.95,y:19.6},0).wait(1).to({x:719.6,y:20.4},0).wait(1).to({x:728.35,y:21.25},0).wait(1).to({x:737.1,y:22.2},0).wait(1).to({x:745.95,y:23.25},0).wait(1).to({x:754.9,y:24.4},0).wait(1).to({x:763.9,y:25.65},0).wait(1).to({x:773,y:27},0).wait(1).to({x:782.15,y:28.5},0).wait(1).to({x:791.4,y:30.1},0).wait(1).to({x:800.75,y:31.8},0).wait(1).to({x:810.25,y:33.65},0).wait(1).to({x:819.8,y:35.6},0).wait(1).to({x:829.5,y:37.75},0).wait(1).to({x:839.3,y:40},0).wait(1).to({x:849.25,y:42.45},0).wait(1).to({x:859.35,y:45.05},0).wait(1).to({x:869.6,y:47.85},0).wait(1).to({x:880,y:50.85},0).wait(1).to({x:890.6,y:54.05},0).wait(1).to({x:901.4,y:57.5},0).wait(1).to({x:912.45,y:61.15},0).wait(1).to({x:923.75,y:65.1},0).wait(1).to({x:935.3,y:69.35},0).wait(1).to({x:947.2,y:73.95},0).wait(1).to({x:959.45,y:78.95},0).wait(1).to({x:972.05,y:84.3},0).wait(1).to({x:972.4,y:84},0).wait(1).to({x:972.7,y:83.65},0).wait(1).to({x:973.05,y:83.35},0).wait(1).to({x:973.35,y:83},0).wait(1).to({x:973.65,y:82.7},0).wait(1).to({x:974,y:82.35},0).wait(1).to({x:974.3,y:82},0).wait(1).to({x:974.65,y:81.7},0).wait(1).to({x:974.95,y:81.35},0).wait(1).to({x:975.25,y:81.05},0).wait(1).to({x:975.6,y:80.7},0).wait(1).to({x:975.9,y:80.4},0).wait(1).to({x:976.25,y:80.05},0).wait(1).to({x:976.55,y:79.7},0).wait(1).to({x:976.85,y:79.4},0).wait(1).to({x:977.2,y:79.05},0).wait(1).to({x:977.5,y:78.75},0).wait(1).to({x:977.8,y:78.4},0).wait(1).to({x:978.15,y:78.05},0).wait(1).to({x:978.45,y:77.75},0).wait(1).to({x:978.8,y:77.4},0).wait(1).to({x:979.1,y:77.1},0).wait(1).to({x:979.4,y:76.75},0).wait(1).to({x:979.75,y:76.45},0).wait(1).to({x:980.05,y:76.1},0).wait(1).to({x:980.4,y:75.75},0).wait(1).to({x:980.7,y:75.45},0).wait(1).to({x:981,y:75.1},0).wait(1).to({x:981.35,y:74.8},0).wait(1).to({x:981.65,y:74.45},0).wait(1).to({x:981.95,y:74.15},0).wait(1).to({x:982.3,y:73.8},0).wait(1).to({x:982.6,y:73.45},0).wait(1).to({x:982.95,y:73.15},0).wait(1).to({x:983.25,y:72.8},0).wait(1).to({x:983.55,y:72.5},0).wait(1).to({x:983.9,y:72.15},0).wait(1).to({x:984.2,y:71.8},0).wait(1).to({x:984.55,y:71.5},0).wait(1).to({x:984.85,y:71.15},0).wait(1).to({x:985.15,y:70.85},0).wait(1).to({x:985.5,y:70.5},0).wait(1).to({x:985.8,y:70.2},0).wait(1).to({x:986.1,y:69.85},0).wait(1).to({x:986.45,y:69.5},0).wait(1).to({x:986.75,y:69.2},0).wait(1).to({x:987.1,y:68.85},0).wait(1).to({x:987.4,y:68.55},0).wait(1).to({x:987.7,y:68.2},0).wait(1).to({x:988.05,y:67.9},0).wait(1).to({x:988.35,y:67.55},0).wait(1).to({x:988.7,y:67.2},0).wait(1).to({x:989,y:66.9},0).wait(1).to({x:989.3,y:66.55},0).wait(1).to({x:989.65,y:66.25},0).wait(1).to({x:989.95,y:65.9},0).wait(1).to({x:990.25,y:65.55},0).wait(1).to({x:990.6,y:65.25},0).wait(1).to({x:990.9,y:64.9},0).wait(1).to({x:991.25,y:64.6},0).wait(1).to({x:991.55,y:64.25},0).wait(1).to({x:991.85,y:63.95},0).wait(1).to({x:992.2,y:63.6},0).wait(1).to({x:992.5,y:63.25},0).wait(1).to({x:992.85,y:62.95},0).wait(1).to({x:993.15,y:62.6},0).wait(1).to({x:993.45,y:62.3},0).wait(1).to({x:993.8,y:61.95},0).wait(1).to({x:994.1,y:61.65},0).wait(1).to({x:994.45,y:61.3},0).wait(1).to({x:994.75,y:60.95},0).wait(1).to({x:995.05,y:60.65},0).wait(1).to({x:995.4,y:60.3},0).wait(1).to({x:995.7,y:60},0).wait(1).to({x:996,y:59.65},0).wait(1).to({x:996.35,y:59.3},0).wait(1).to({x:996.65,y:59},0).wait(1).to({x:997,y:58.65},0).wait(1).to({x:997.3,y:58.35},0).wait(1).to({x:997.6,y:58},0).wait(1).to({x:997.95,y:57.7},0).wait(1).to({x:998.25,y:57.35},0).wait(1).to({x:998.6,y:57},0).wait(1).to({x:998.9,y:56.7},0).wait(1).to({x:999.2,y:56.35},0).wait(1).to({x:999.55,y:56.05},0).wait(1).to({x:999.85,y:55.7},0).wait(1).to({x:1000.15,y:55.4},0).wait(1).to({x:1000.5,y:55.05},0).wait(1).to({x:1000.8,y:54.7},0).wait(1).to({x:1001.15,y:54.4},0).wait(1).to({x:1001.45,y:54.05},0).wait(1).to({x:1001.75,y:53.75},0).wait(1).to({x:1002.1,y:53.4},0).wait(1).to({x:1002.4,y:53.05},0).wait(1).to({x:1002.75,y:52.75},0).wait(1).to({x:1003.05,y:52.4},0).wait(1).to({x:1003.35,y:52.1},0).wait(1).to({x:1003.7,y:51.75},0).wait(1).to({x:1004,y:51.45},0).wait(1).to({x:1004.3,y:51.1},0).wait(1).to({x:1004.65,y:50.75},0).wait(1).to({x:1004.95,y:50.45},0).wait(1).to({x:1005.3,y:50.1},0).wait(1).to({x:1005.6,y:49.8},0).wait(1).to({x:1005.9,y:49.45},0).wait(1).to({x:1006.25,y:49.15},0).wait(1).to({x:1006.55,y:48.8},0).wait(1).to({x:1006.9,y:48.45},0).wait(1).to({x:1007.2,y:48.15},0).wait(1).to({x:1007.5,y:47.8},0).wait(1).to({x:1007.85,y:47.5},0).wait(1).to({x:1008.15,y:47.15},0).wait(1).to({x:1008.45,y:46.8},0).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun_goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun_goes
	this.instance = new lib.sun();
	this.instance.setTransform(894.65,262.5,0.3765,0.3175,0,0,0,243.5,241.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(175).to({_off:false},0).wait(1).to({regX:425.8,regY:-190.9,x:969.65,y:97.5},0).wait(1).to({x:985.25,y:72.6},0).wait(1).to({x:1009.95,y:50.5},0).wait(1).to({x:1043.65,y:31.25},0).wait(1).to({x:1086.15,y:14.75},0).wait(1).to({x:1137.4,y:0.95},0).wait(1).to({x:1197.35,y:-10.1},0).wait(1).to({x:1265.9,y:-18.55},0).wait(1).to({x:1342.95,y:-24.4},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_sun = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// sun
	this.instance = new lib.sun();
	this.instance.setTransform(-115.95,445.85,0.377,0.318,0,0,0,238.8,235.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:425.8,regY:-190.9,x:-38.15,y:303.15},0).wait(1).to({x:-30.8,y:296.1},0).wait(1).to({x:-23.45,y:289.15},0).wait(1).to({x:-16,y:282.3},0).wait(1).to({x:-8.55,y:275.55},0).wait(1).to({x:-1,y:268.9},0).wait(1).to({x:6.55,y:262.35},0).wait(1).to({x:14.2,y:255.9},0).wait(1).to({x:21.85,y:249.55},0).wait(1).to({x:29.55,y:243.3},0).wait(1).to({x:37.3,y:237.15},0).wait(1).to({x:45.1,y:231.1},0).wait(1).to({x:52.95,y:225.15},0).wait(1).to({x:60.85,y:219.25},0).wait(1).to({x:68.8,y:213.5},0).wait(1).to({x:76.75,y:207.85},0).wait(1).to({x:84.75,y:202.25},0).wait(1).to({x:92.85,y:196.8},0).wait(1).to({x:100.95,y:191.4},0).wait(1).to({x:109.05,y:186.15},0).wait(1).to({x:117.25,y:180.95},0).wait(1).to({x:125.45,y:175.85},0).wait(1).to({x:133.7,y:170.85},0).wait(1).to({x:142,y:166},0).wait(1).to({x:150.3,y:161.2},0).wait(1).to({x:158.7,y:156.5},0).wait(1).to({x:167.05,y:151.9},0).wait(1).to({x:175.45,y:147.4},0).wait(1).to({x:183.95,y:143},0).wait(1).to({x:192.45,y:138.7},0).wait(1).to({x:200.95,y:134.5},0).wait(1).to({x:209.55,y:130.35},0).wait(1).to({x:218.15,y:126.35},0).wait(1).to({x:226.75,y:122.45},0).wait(1).to({x:235.45,y:118.6},0).wait(1).to({x:244.15,y:114.9},0).wait(1).to({x:252.85,y:111.25},0).wait(1).to({x:261.6,y:107.75},0).wait(1).to({x:270.4,y:104.3},0).wait(1).to({x:279.2,y:100.95},0).wait(1).to({x:288.05,y:97.75},0).wait(1).to({x:296.9,y:94.6},0).wait(1).to({x:305.8,y:91.55},0).wait(1).to({x:314.75,y:88.6},0).wait(1).to({x:323.7,y:85.75},0).wait(1).to({x:332.65,y:83},0).wait(1).to({x:341.65,y:80.35},0).wait(1).to({x:350.65,y:77.8},0).wait(1).to({x:359.7,y:75.35},0).wait(1).to({x:368.8,y:73},0).wait(1).to({x:377.85,y:70.75},0).wait(1).to({x:387,y:68.55},0).wait(1).to({x:396.1,y:66.5},0).wait(1).to({x:405.25,y:64.55},0).wait(1).to({x:414.45,y:62.65},0).wait(1).to({x:423.65,y:60.9},0).wait(1).to({x:432.85,y:59.2},0).wait(1).to({x:442.05,y:57.65},0).wait(1).to({x:451.3,y:56.15},0).wait(1).to({x:460.6,y:54.8},0).wait(1).to({x:469.85,y:53.5},0).wait(1).to({x:479.15,y:52.3},0).wait(1).to({x:488.5,y:51.25},0).wait(1).to({x:497.8,y:50.25},0).wait(1).to({x:507.15,y:49.35},0).wait(1).to({x:516.55,y:48.55},0).wait(1).to({x:525.9,y:47.85},0).wait(1).to({x:535.3,y:47.3},0).wait(1).to({x:544.7,y:46.8},0).wait(1).to({x:554.1,y:46.4},0).wait(1).to({x:563.55,y:46.1},0).wait(1).to({x:572.95,y:45.9},0).wait(1).to({x:582.4,y:45.8},0).wait(1).to({x:591.85},0).wait(1).to({x:601.35,y:45.9},0).wait(1).to({x:610.8,y:46.1},0).wait(1).to({x:620.3,y:46.4},0).wait(1).to({x:629.8,y:46.8},0).wait(1).to({x:639.25,y:47.3},0).wait(1).to({x:648.8,y:47.9},0).wait(1).to({x:658.3,y:48.55},0).wait(1).to({x:667.8,y:49.35},0).wait(1).to({x:677.35,y:50.25},0).wait(1).to({x:686.85,y:51.25},0).wait(1).to({x:696.4,y:52.35},0).wait(1).to({x:705.9,y:53.55},0).wait(1).to({x:715.45,y:54.85},0).wait(1).to({x:725,y:56.25},0).wait(1).to({x:734.55,y:57.75},0).wait(1).to({x:744.1,y:59.35},0).wait(1).to({x:753.6,y:61.05},0).wait(1).to({x:763.15,y:62.85},0).wait(1).to({x:772.7,y:64.75},0).wait(1).to({x:782.25,y:66.75},0).wait(1).to({x:791.8,y:68.85},0).wait(1).to({x:801.35,y:71.05},0).wait(1).to({x:810.85,y:73.4},0).wait(1).to({x:820.4,y:75.8},0).wait(1).to({x:829.95,y:78.3},0).wait(1).to({x:839.45,y:80.9},0).wait(1).to({x:849,y:83.65},0).wait(1).to({x:858.5,y:86.45},0).wait(1).to({x:868,y:89.4},0).wait(1).to({x:877.5,y:92.4},0).wait(1).to({x:887,y:95.55},0).wait(1).to({x:896.5,y:98.75},0).wait(1).to({x:905.95,y:102.1},0).wait(1).to({x:915.45,y:105.55},0).wait(1).to({x:924.9,y:109.1},0).wait(1).to({x:934.35,y:112.75},0).wait(1).to({x:943.8,y:116.5},0).wait(1).to({x:953.25,y:120.35},0).wait(1).to({x:962.65,y:124.3},0).wait(1).to({x:972.05,y:128.35},0).wait(1).to({x:971.85,y:128.3},0).wait(1).to({x:971.65,y:128.2},0).wait(1).to({x:971.45,y:128.1},0).wait(1).to({x:971.2,y:128},0).wait(1).to({x:971,y:127.9},0).wait(1).to({x:970.8,y:127.8},0).wait(1).to({x:970.6,y:127.7},0).wait(1).to({x:970.35,y:127.6},0).wait(1).to({x:970.15,y:127.55},0).wait(1).to({x:969.95,y:127.45},0).wait(1).to({x:969.7,y:127.35},0).wait(1).to({x:969.5,y:127.25},0).wait(1).to({x:969.3,y:127.15},0).wait(1).to({x:969.1,y:127.05},0).wait(1).to({x:968.85,y:126.95},0).wait(1).to({x:968.65,y:126.85},0).wait(1).to({x:968.45,y:126.8},0).wait(1).to({x:968.2,y:126.7},0).wait(1).to({x:968,y:126.6},0).wait(1).to({x:967.8,y:126.5},0).wait(1).to({x:967.6,y:126.4},0).wait(1).to({x:967.35,y:126.3},0).wait(1).to({x:967.15,y:126.2},0).wait(1).to({x:966.95,y:126.1},0).wait(1).to({x:966.7,y:126.05},0).wait(1).to({x:966.5,y:125.95},0).wait(1).to({x:966.3,y:125.85},0).wait(1).to({x:966.1,y:125.75},0).wait(1).to({x:965.85,y:125.65},0).wait(1).to({x:965.65,y:125.55},0).wait(1).to({x:965.45,y:125.45},0).wait(1).to({x:965.2,y:125.35},0).wait(1).to({x:965,y:125.3},0).wait(1).to({x:964.8,y:125.2},0).wait(1).to({x:964.6,y:125.1},0).wait(1).to({x:964.35,y:125},0).wait(1).to({x:964.15,y:124.9},0).wait(1).to({x:963.95,y:124.8},0).wait(1).to({x:963.7,y:124.7},0).wait(1).to({x:963.5,y:124.6},0).wait(1).to({x:963.3,y:124.55},0).wait(1).to({x:963.1,y:124.45},0).wait(1).to({x:962.85,y:124.35},0).wait(1).to({x:962.65,y:124.25},0).wait(1).to({x:962.45,y:124.15},0).wait(1).to({x:962.25,y:124.05},0).wait(1).to({x:962,y:123.95},0).wait(1).to({x:961.8,y:123.85},0).wait(1).to({x:961.6,y:123.8},0).wait(1).to({x:961.35,y:123.7},0).wait(1).to({x:961.15,y:123.6},0).wait(1).to({x:960.95,y:123.5},0).wait(1).to({x:960.75,y:123.4},0).wait(1).to({x:960.5,y:123.3},0).wait(1).to({x:960.3,y:123.2},0).wait(1).to({x:960.1,y:123.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spidermove = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spidermove
	this.instance = new lib.copys1();
	this.instance.setTransform(864.65,792.25,0.3309,0.285,0,0,0,475.9,857.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(399).to({_off:false},0).wait(1).to({regX:150.4,regY:67.4,scaleX:0.3257,scaleY:0.2798,x:761,y:566.15},0).wait(1).to({scaleX:0.3205,scaleY:0.2747,x:765.05,y:565.3},0).wait(1).to({scaleX:0.3153,scaleY:0.2695,x:769.15,y:564.5},0).wait(1).to({scaleX:0.3101,scaleY:0.2644,x:773.25,y:563.65},0).wait(1).to({scaleX:0.3049,scaleY:0.2592,x:777.35,y:562.8},0).wait(1).to({scaleX:0.2997,scaleY:0.2541,x:781.45,y:562},0).wait(1).to({scaleX:0.2945,scaleY:0.2489,x:785.55,y:561.2},0).wait(1).to({scaleX:0.2892,scaleY:0.2438,x:789.65,y:560.4},0).wait(1).to({scaleX:0.284,scaleY:0.2386,x:793.7,y:559.55},0).wait(1).to({scaleX:0.2788,scaleY:0.2335,x:797.85,y:558.75},0).wait(1).to({scaleX:0.2736,scaleY:0.2283,x:801.9,y:557.9},0).wait(1).to({scaleX:0.2684,scaleY:0.2232,x:806,y:557.1},0).wait(1).to({scaleX:0.2632,scaleY:0.218,x:810.1,y:556.25},0).wait(1).to({scaleX:0.2579,scaleY:0.2129,x:814.2,y:555.45},0).wait(1).to({scaleX:0.2527,scaleY:0.2077,x:818.25,y:554.6},0).wait(1).to({scaleX:0.2475,scaleY:0.2026,x:822.35,y:553.75},0).wait(1).to({scaleX:0.2423,scaleY:0.1974,x:826.45,y:552.95},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spider_ups_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spider_ups_copy
	this.instance = new lib.spider4copy();
	this.instance.setTransform(859.7,510.6,0.2009,0.2179,0,0,0,70.2,58.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(417).to({_off:false},0).wait(1).to({regX:53.7,regY:131.6,x:857.2,y:522.1},0).wait(1).to({x:858.05,y:517.7},0).wait(1).to({x:858.9,y:513.3},0).wait(1).to({x:859.7,y:508.9},0).wait(1).to({x:860.55,y:504.5},0).wait(1).to({x:861.4,y:500.1},0).wait(1).to({x:862.2,y:495.75},0).wait(1).to({x:863.05,y:491.35},0).wait(1).to({x:863.9,y:486.95},0).wait(1).to({x:864.75,y:482.55},0).wait(1).to({x:865.55,y:478.15},0).wait(1).to({x:866.4,y:473.75},0).wait(1).to({x:867.25,y:469.4},0).wait(1).to({x:868.05,y:465},0).wait(1).to({x:868.9,y:460.6},0).wait(1).to({x:869.75,y:456.2},0).wait(1).to({x:870.6,y:451.8},0).wait(1).to({x:871.4,y:447.4},0).wait(1).to({x:872.25,y:443},0).wait(1).to({x:873.1,y:438.65},0).wait(1).to({x:873.9,y:434.25},0).wait(1).to({x:874.75,y:429.85},0).wait(1).to({x:875.6,y:425.45},0).wait(1).to({x:876.45,y:421.05},0).wait(1).to({x:877.25,y:416.65},0).wait(1).to({x:878.1,y:412.3},0).wait(1).to({x:878.95,y:407.9},0).wait(1).to({x:879.75,y:403.5},0).wait(1).to({x:880.6,y:399.1},0).wait(1).to({x:881.45,y:394.7},0).wait(1).to({x:882.3,y:390.3},0).wait(1).to({x:883.1,y:385.95},0).wait(1).to({x:883.95,y:381.55},0).wait(1).to({x:884.8,y:377.15},0).wait(1).to({x:885.6,y:372.75},0).wait(1).to({x:886.45,y:368.35},0).wait(1).to({x:887.3,y:363.95},0).wait(1).to({x:888.1,y:359.55},0).wait(1).to({regX:70,regY:58.8,x:891.05,y:343.05},0).wait(2).to({regX:70.2,regY:58.9,scaleX:0.2008,rotation:-14.9968},0).wait(2).to({regX:70.5,regY:59.2,rotation:-29.9947,x:891.15},0).wait(2).to({regX:70.6,rotation:-44.9943,x:891.2,y:343.1},0).wait(2).to({regY:59.5,rotation:-59.9943,x:891.3,y:343.15},0).wait(2).to({regX:70.4,scaleY:0.2178,rotation:-104.9911},0).wait(2).to({regX:70.1,regY:59.4,rotation:-134.9886},0).wait(2).to({regX:69.9,regY:59.2,rotation:-149.9918,x:891.35,y:343.25},0).wait(2).to({regX:70,regY:59.1,rotation:-194.9904,x:891.3,y:343.2},0).wait(2).to({regX:70.2,regY:58.9,rotation:-239.9918,x:891.35,y:343.25},0).wait(2).to({regY:58.8,rotation:-269.992,y:343.2},0).wait(2).to({regX:70.7,regY:58.9,scaleX:0.2007,rotation:-314.9915,x:891.4},0).wait(2).to({regX:70.8,regY:59.1,rotation:-344.9938,y:343.25},0).wait(2).to({regX:71,regY:59.2,scaleX:0.2008,scaleY:0.2177,rotation:-359.996,x:891.45,y:343.2},0).wait(3));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_spider_ups = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// spider_ups
	this.instance = new lib.spider4copy();
	this.instance.setTransform(859.7,510.6,0.2009,0.2179,0,0,0,70.2,58.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(127).to({_off:false},0).wait(1).to({regX:53.7,regY:131.6,x:857,y:523.05},0).wait(1).to({x:857.65,y:519.65},0).wait(1).to({x:858.3,y:516.25},0).wait(1).to({x:858.95,y:512.85},0).wait(1).to({x:859.6,y:509.45},0).wait(1).to({x:860.25,y:506.05},0).wait(1).to({x:860.9,y:502.65},0).wait(1).to({x:861.55,y:499.25},0).wait(1).to({x:862.2,y:495.8},0).wait(1).to({x:862.85,y:492.4},0).wait(1).to({x:863.5,y:489},0).wait(1).to({x:864.15,y:485.6},0).wait(1).to({x:864.8,y:482.2},0).wait(1).to({x:865.45,y:478.8},0).wait(1).to({x:866.1,y:475.4},0).wait(1).to({x:866.75,y:472},0).wait(1).to({x:867.4,y:468.55},0).wait(1).to({x:868.05,y:465.15},0).wait(1).to({x:868.7,y:461.75},0).wait(1).to({x:869.35,y:458.35},0).wait(1).to({x:870,y:454.95},0).wait(1).to({x:870.65,y:451.55},0).wait(1).to({x:871.3,y:448.15},0).wait(1).to({x:871.95,y:444.75},0).wait(1).to({x:872.55,y:441.3},0).wait(1).to({x:873.2,y:437.9},0).wait(1).to({x:873.85,y:434.5},0).wait(1).to({x:874.5,y:431.1},0).wait(1).to({x:875.15,y:427.7},0).wait(1).to({x:875.8,y:424.3},0).wait(1).to({x:876.45,y:420.9},0).wait(1).to({x:877.1,y:417.5},0).wait(1).to({x:877.75,y:414.05},0).wait(1).to({x:878.4,y:410.65},0).wait(1).to({x:879.05,y:407.25},0).wait(1).to({x:879.7,y:403.85},0).wait(1).to({x:880.35,y:400.45},0).wait(1).to({x:881,y:397.05},0).wait(1).to({x:881.65,y:393.65},0).wait(1).to({x:882.3,y:390.25},0).wait(1).to({x:882.95,y:386.8},0).wait(1).to({x:883.6,y:383.4},0).wait(1).to({x:884.25,y:380},0).wait(1).to({x:884.9,y:376.6},0).wait(1).to({x:885.55,y:373.2},0).wait(1).to({x:886.2,y:369.8},0).wait(1).to({x:886.85,y:366.4},0).wait(1).to({x:887.5,y:363},0).wait(1).to({x:888.1,y:359.55},0).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_slolit = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// slolit
	this.instance = new lib.slolit();
	this.instance.setTransform(1348.35,570.85,1,1,0,0,0,202,50.1);

	this.instance_1 = new lib.slolit();
	this.instance_1.setTransform(360.15,570.85,1,1,0,0,0,202,26.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_1,p:{scaleX:1,x:360.15,regX:202}},{t:this.instance,p:{scaleX:1,x:1348.35,regX:202}}]},242).to({state:[{t:this.instance_1,p:{scaleX:1,x:360.15,regX:202}},{t:this.instance,p:{scaleX:1,x:1348.35,regX:202}}]},34).to({state:[{t:this.instance_1,p:{scaleX:0.8812,x:360.15,regX:202}},{t:this.instance,p:{scaleX:0.8416,x:1320.4,regX:202}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.8812,x:356.15,regX:202}},{t:this.instance,p:{scaleX:0.8416,x:1312.4,regX:202}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.6831,x:356.2,regX:202.1}},{t:this.instance,p:{scaleX:0.6633,x:1296.5,regX:202.1}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.5447,x:352.3,regX:202.2}},{t:this.instance,p:{scaleX:0.485,x:1340.45,regX:202.1}}]},10).to({state:[{t:this.instance_1,p:{scaleX:0.4258,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.4258,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},14).to({state:[{t:this.instance_1,p:{scaleX:0.2676,x:352.3,regX:202.3}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},11).to({state:[{t:this.instance_1,p:{scaleX:0.1687,x:352.3,regX:202.4}},{t:this.instance,p:{scaleX:0.3068,x:1278.45,regX:0}}]},7).to({state:[]},7).wait(118));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_rain = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// rain
	this.instance = new lib.raincopy();
	this.instance.setTransform(1014,249.85,1,1,0,0,0,-139.7,-118);

	this.instance_1 = new lib.raincopy();
	this.instance_1.setTransform(1046.95,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_2 = new lib.raincopy();
	this.instance_2.setTransform(1006.95,191.95,1,1,0,0,0,-139.7,-118);

	this.instance_3 = new lib.raincopy();
	this.instance_3.setTransform(56.9,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_4 = new lib.raincopy();
	this.instance_4.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_5 = new lib.raincopy();
	this.instance_5.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.instance_6 = new lib.raincopy();
	this.instance_6.setTransform(1006.95,191.95,1,1,0,0,0,-139.7,-118);

	this.instance_7 = new lib.raincopy();
	this.instance_7.setTransform(56.9,214.45,1,1,0,0,0,-139.7,-118);

	this.instance_8 = new lib.raincopy();
	this.instance_8.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_9 = new lib.raincopy();
	this.instance_9.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.instance_10 = new lib.raincopy();
	this.instance_10.setTransform(22.3,261.1,1,1,0,0,0,-139.7,-118);

	this.instance_11 = new lib.raincopy();
	this.instance_11.setTransform(15.25,203.2,1,1,0,0,0,-139.7,-118);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_5,p:{x:15.25,y:203.2}},{t:this.instance_4,p:{x:22.3,y:261.1}},{t:this.instance_3,p:{x:56.9,y:214.45}},{t:this.instance_2,p:{x:1006.95,y:191.95}},{t:this.instance_1,p:{x:1046.95,y:214.45}},{t:this.instance,p:{x:1014,y:249.85}}]},194).to({state:[{t:this.instance_9,p:{x:15.25,y:203.2}},{t:this.instance_8,p:{x:22.3,y:261.1}},{t:this.instance_7,p:{x:56.9}},{t:this.instance_6,p:{x:1006.95,y:191.95}},{t:this.instance_5,p:{x:1046.95,y:214.45}},{t:this.instance_4,p:{x:1014,y:249.85}},{t:this.instance_3,p:{x:120.25,y:283.15}},{t:this.instance_2,p:{x:120.25,y:283.15}},{t:this.instance_1,p:{x:173.55,y:283.15}},{t:this.instance,p:{x:166.5,y:249.85}}]},3).to({state:[{t:this.instance_6,p:{x:15.25,y:203.2}},{t:this.instance_5,p:{x:22.3,y:261.1}},{t:this.instance_4,p:{x:56.9,y:214.45}},{t:this.instance_3,p:{x:1006.95,y:191.95}},{t:this.instance_2,p:{x:1046.95,y:214.45}},{t:this.instance_1,p:{x:1014,y:249.85}},{t:this.instance,p:{x:120.25,y:225.7}}]},1).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9,p:{x:56.9,y:214.45}},{t:this.instance_8,p:{x:1006.95,y:191.95}},{t:this.instance_7,p:{x:1046.95}},{t:this.instance_6,p:{x:1014,y:249.85}},{t:this.instance_5,p:{x:120.25,y:225.7}},{t:this.instance_4,p:{x:180.25,y:272.35}},{t:this.instance_3,p:{x:173.2,y:225.7}},{t:this.instance_2,p:{x:924.55,y:203.2}},{t:this.instance_1,p:{x:931.6,y:261.1}},{t:this.instance,p:{x:976.95,y:283.6}}]},3).wait(42));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_out = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// out
	this.instance = new lib.copys1();
	this.instance.setTransform(661.85,582.75,0.316,0.285,0,0,0,149.7,72.3);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(368).to({_off:false},0).wait(1).to({regX:150.4,regY:67.4,scaleX:0.3165,x:665.5,y:581.75},0).wait(1).to({scaleX:0.317,x:668.8,y:582.1},0).wait(1).to({scaleX:0.3175,x:671.95,y:582.45},0).wait(1).to({scaleX:0.3181,x:675.05,y:582.75},0).wait(1).to({scaleX:0.3186,x:678,y:583.05},0).wait(1).to({scaleX:0.3191,x:680.95,y:583.35},0).wait(1).to({scaleX:0.3196,x:683.8,y:583.6},0).wait(1).to({scaleX:0.3201,x:686.65,y:583.8},0).wait(1).to({scaleX:0.3206,x:689.4,y:584.05},0).wait(1).to({scaleX:0.3212,x:692.15,y:584.25},0).wait(1).to({scaleX:0.3217,x:694.85,y:584.45},0).wait(1).to({scaleX:0.3222,x:697.5,y:584.6},0).wait(1).to({scaleX:0.3227,x:700.15,y:584.75},0).wait(1).to({scaleX:0.3232,x:702.75,y:584.9},0).wait(1).to({scaleX:0.3238,x:705.4,y:585.05},0).wait(1).to({scaleX:0.3243,x:707.95,y:585.2},0).wait(1).to({scaleX:0.3248,x:710.6,y:585.3},0).wait(1).to({scaleX:0.3253,x:713.15,y:585.4},0).wait(1).to({scaleX:0.3258,x:715.8,y:585.45},0).wait(1).to({scaleX:0.3263,x:718.45,y:585.55},0).wait(1).to({scaleX:0.3269,x:721.05,y:585.6},0).wait(1).to({scaleX:0.3274,x:723.75,y:585.65},0).wait(1).to({scaleX:0.3279,x:726.4},0).wait(1).to({scaleX:0.3284,x:729.1},0).wait(1).to({scaleX:0.3289,x:731.85},0).wait(1).to({scaleX:0.3294,x:734.7},0).wait(1).to({scaleX:0.33,x:737.55,y:585.6},0).wait(1).to({scaleX:0.3305,x:740.5,y:585.55},0).wait(1).to({scaleX:0.331,x:743.6,y:585.45},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_jump = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// jump
	this.instance = new lib.spider4();
	this.instance.setTransform(863.85,544.8,0.2213,0.2555,0,0,0,134,126.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(217).to({_off:false},0).wait(1).to({regX:101.1,regY:97.6,rotation:-6.602,x:849.05,y:542.05},0).wait(1).to({rotation:-13.2041,x:841.65,y:546.8},0).wait(1).to({rotation:-19.8061,x:834.35,y:551.55},0).wait(1).to({rotation:-26.4082,x:827.2,y:556.5},0).wait(1).to({rotation:-33.0102,x:820.15,y:561.35},0).wait(1).to({rotation:-39.6123,x:813.25,y:566.3},0).wait(1).to({rotation:-46.2143,x:806.5,y:571.25},0).wait(1).to({rotation:-52.8164,x:799.8,y:576.2},0).wait(1).to({rotation:-59.4184,x:793.35,y:581.2},0).wait(1).to({rotation:-66.0205,x:787,y:586.05},0).wait(1).to({rotation:-72.6225,x:780.8,y:590.9},0).wait(1).to({rotation:-79.2246,x:774.7,y:595.65},0).wait(1).to({rotation:-85.8266,x:768.65,y:600.4},0).wait(1).to({rotation:-92.4287,x:762.75,y:605.05},0).wait(1).to({rotation:-99.0307,x:756.95,y:609.55},0).wait(1).to({rotation:-105.6328,x:751.25,y:614},0).wait(1).to({rotation:-112.2348,x:745.65,y:618.25},0).wait(1).to({rotation:-118.8369,x:740.05,y:622.45},0).wait(1).to({rotation:-125.4389,x:734.5,y:626.45},0).wait(1).to({rotation:-132.041,x:728.9,y:630.35},0).wait(1).to({rotation:-138.643,x:723.4,y:634.1},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_house1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// house1
	this.instance = new lib.house();
	this.instance.setTransform(1392.2,245.95,1,1,0,0,0,1396.8,474);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({x:1390.25},0).wait(1).to({x:1388.25},0).wait(1).to({x:1386.25},0).wait(1).to({x:1384.25},0).wait(1).to({x:1382.3},0).wait(1).to({x:1380.3},0).wait(1).to({x:1378.3},0).wait(1).to({x:1376.3},0).wait(1).to({x:1374.35},0).wait(1).to({x:1372.35},0).wait(1).to({x:1370.35},0).wait(1).to({x:1368.35},0).wait(1).to({x:1366.35},0).wait(1).to({x:1364.4},0).wait(1).to({x:1362.4},0).wait(1).to({x:1360.4},0).wait(1).to({x:1358.4},0).wait(1).to({x:1356.45},0).wait(1).to({x:1354.45},0).wait(1).to({x:1352.45},0).wait(1).to({x:1350.45},0).wait(1).to({x:1348.5},0).wait(1).to({x:1346.5},0).wait(1).to({x:1344.5},0).wait(1).to({x:1342.5},0).wait(1).to({x:1340.5},0).wait(1).to({x:1338.55},0).wait(1).to({x:1336.55},0).wait(1).to({x:1334.55},0).wait(1).to({x:1332.55},0).wait(1).to({x:1330.6},0).wait(1).to({x:1328.6},0).wait(1).to({x:1326.6},0).wait(1).to({x:1324.6},0).wait(1).to({x:1322.65},0).wait(1).to({x:1320.65},0).wait(1).to({x:1318.65},0).wait(1).to({x:1316.65},0).wait(1).to({x:1314.65},0).wait(1).to({x:1312.7},0).wait(1).to({x:1310.7},0).wait(1).to({x:1308.7},0).wait(1).to({x:1306.7},0).wait(1).to({x:1304.75},0).wait(1).to({x:1302.75},0).wait(1).to({x:1300.75},0).wait(1).to({x:1298.75},0).wait(1).to({x:1296.8},0).wait(1).to({x:1294.8},0).wait(1).to({x:1292.8},0).wait(1).to({x:1290.8},0).wait(1).to({x:1288.8},0).wait(1).to({x:1286.85},0).wait(1).to({x:1284.85},0).wait(1).to({x:1282.85},0).wait(1).to({x:1280.85},0).wait(1).to({x:1278.9},0).wait(1).to({x:1276.9},0).wait(1).to({x:1274.9},0).wait(1).to({x:1272.9},0).wait(1).to({x:1270.95},0).wait(1).to({x:1268.95},0).wait(1).to({x:1266.95},0).wait(1).to({x:1264.95},0).wait(1).to({x:1262.95},0).wait(1).to({x:1261},0).wait(1).to({x:1259},0).wait(1).to({x:1257},0).wait(1).to({x:1255},0).wait(1).to({x:1253.05},0).wait(1).to({x:1251.05},0).wait(1).to({x:1249.05},0).wait(1).to({x:1247.05},0).wait(1).to({x:1245.1},0).wait(1).to({x:1243.1},0).wait(1).to({x:1241.1},0).wait(1).to({x:1239.1},0).wait(1).to({x:1237.1},0).wait(404));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_fall_dwon = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// fall_dwon
	this.instance = new lib.spider4();
	this.instance.setTransform(898.95,417.5,0.2213,0.2555,0,0,0,136.4,126.7);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(188).to({_off:false},0).wait(1).to({regX:101.1,regY:97.6,x:890.05,y:414.05},0).wait(1).to({x:888.95,y:418},0).wait(1).to({x:887.9,y:421.95},0).wait(1).to({x:886.8,y:425.9},0).wait(1).to({x:885.7,y:429.85},0).wait(1).to({x:884.65,y:433.8},0).wait(1).to({x:883.55,y:437.75},0).wait(1).to({x:882.45,y:441.7},0).wait(1).to({x:881.4,y:445.7},0).wait(1).to({x:880.3,y:449.65},0).wait(1).to({x:879.2,y:453.6},0).wait(1).to({x:878.15,y:457.55},0).wait(1).to({x:877.05,y:461.5},0).wait(1).to({x:875.95,y:465.45},0).wait(1).to({x:874.9,y:469.4},0).wait(1).to({x:873.8,y:473.35},0).wait(1).to({x:872.7,y:477.35},0).wait(1).to({x:871.65,y:481.3},0).wait(1).to({x:870.55,y:485.25},0).wait(1).to({x:869.45,y:489.2},0).wait(1).to({x:868.4,y:493.15},0).wait(1).to({x:867.3,y:497.1},0).wait(1).to({x:866.2,y:501.05},0).wait(1).to({x:865.15,y:505},0).wait(1).to({x:864.05,y:509},0).wait(1).to({x:862.95,y:512.95},0).wait(1).to({x:861.9,y:516.9},0).wait(1).to({x:860.8,y:520.85},0).to({_off:true},1).wait(7));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cory_copy = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cory_copy
	this.instance = new lib.cory1copy();
	this.instance.setTransform(887.55,416.25,0.9999,0.9999,0,0,0,42.6,78);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(418).to({_off:false},0).wait(67));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cory = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cory
	this.instance = new lib.cory1copy();
	this.instance.setTransform(887.55,416.25,0.9999,0.9999,0,0,0,42.6,78);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(129).to({_off:false},0).wait(101));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud2goes
	this.instance = new lib.cloud1();
	this.instance.setTransform(1049.45,55,0.6519,0.7844,0,0,0,332.8,-56.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:116.8,regY:81.5,x:908.5,y:150.9},0).wait(1).to({x:908.55,y:139.95},0).wait(1).to({x:908.75,y:130.5},0).wait(1).to({x:909.15,y:122.25},0).wait(1).to({x:909.8,y:115.15},0).wait(1).to({x:910.6,y:109},0).wait(1).to({x:911.7,y:103.7},0).wait(1).to({x:913,y:99.25},0).wait(1).to({x:914.6,y:95.5},0).wait(1).to({x:916.45,y:92.4},0).wait(1).to({x:918.6,y:89.95},0).wait(1).to({x:921.05,y:88.05},0).wait(1).to({x:923.8,y:86.7},0).wait(1).to({x:926.9,y:85.8},0).wait(1).to({x:930.35,y:85.4},0).wait(1).to({x:934.2,y:85.45},0).wait(1).to({x:938.4,y:85.9},0).wait(1).to({x:943,y:86.7},0).wait(1).to({x:948.1,y:87.95},0).wait(1).to({x:953.65,y:89.5},0).wait(1).to({x:959.7,y:91.4},0).wait(1).to({x:966.25,y:93.65},0).wait(1).to({x:973.4,y:96.2},0).wait(1).to({x:981.2,y:99.05},0).wait(1).to({x:989.65,y:102.2},0).wait(1).to({x:998.85,y:105.65},0).wait(1).to({x:1008.85,y:109.4},0).wait(1).to({x:1019.75,y:113.35},0).wait(1).to({x:1031.65,y:117.65},0).wait(1).to({x:1044.6,y:122.15},0).wait(1).to({x:1058.8,y:126.95},0).wait(1).to({x:1074.4,y:132},0).wait(1).to({x:1091.6,y:137.3},0).wait(1).to({x:1110.75,y:142.9},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud2
	this.instance = new lib.cloud1();
	this.instance.setTransform(1420.95,8.65,0.6519,0.7844,0,0,0,332.9,-58.6);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).wait(1).to({regX:116.8,regY:81.5,scaleX:0.652,x:1269.35,y:121.75},0).wait(1).to({x:1258.65,y:124.9},0).wait(1).to({x:1247.95,y:127.95},0).wait(1).to({x:1237.25,y:130.95},0).wait(1).to({x:1226.55,y:133.85},0).wait(1).to({x:1215.85,y:136.7},0).wait(1).to({x:1205.15,y:139.4},0).wait(1).to({x:1194.5,y:142.05},0).wait(1).to({x:1183.85,y:144.6},0).wait(1).to({x:1173.3,y:147.05},0).wait(1).to({x:1162.75,y:149.35},0).wait(1).to({x:1152.25,y:151.6},0).wait(1).to({x:1141.8,y:153.7},0).wait(1).to({x:1131.45,y:155.65},0).wait(1).to({x:1121.2,y:157.55},0).wait(1).to({x:1111,y:159.25},0).wait(1).to({x:1100.9,y:160.9},0).wait(1).to({x:1090.9,y:162.35},0).wait(1).to({x:1081.05,y:163.7},0).wait(1).to({x:1071.3,y:164.9},0).wait(1).to({x:1061.65,y:165.95},0).wait(1).to({x:1052.15,y:166.9},0).wait(1).to({x:1042.85,y:167.7},0).wait(1).to({x:1033.65,y:168.35},0).wait(1).to({x:1024.6,y:168.85},0).wait(1).to({x:1015.75,y:169.2},0).wait(1).to({x:1007.05,y:169.45},0).wait(1).to({x:998.55,y:169.55},0).wait(1).to({x:990.2,y:169.5},0).wait(1).to({x:982.05,y:169.35},0).wait(1).to({x:974.1,y:169},0).wait(1).to({x:966.3,y:168.6},0).wait(1).to({x:958.7,y:168.05},0).wait(1).to({x:951.3,y:167.35},0).wait(1).to({x:944.1,y:166.55},0).wait(1).to({x:937.05,y:165.65},0).wait(1).to({x:930.2,y:164.6},0).wait(1).to({x:923.55,y:163.45},0).wait(1).to({x:917.1,y:162.25},0).wait(1).to({x:910.85,y:160.9},0).wait(1).to({x:904.75,y:159.45},0).wait(1).to({x:898.8,y:157.95},0).wait(1).to({x:893.05,y:156.3},0).wait(1).to({x:887.5,y:154.6},0).to({_off:true},1).wait(12));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud1goes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud1goes
	this.instance = new lib.cloud1();
	this.instance.setTransform(500.15,58.15,0.6519,0.7844,0,0,0,331.4,-52.9);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(213).to({_off:false},0).wait(1).to({regX:116.8,regY:81.5,x:341.5,y:158.3},0).wait(1).to({x:323.6,y:153.55},0).wait(1).to({x:306.35,y:149.2},0).wait(1).to({x:289.65,y:145.25},0).wait(1).to({x:273.45,y:141.65},0).wait(1).to({x:257.65,y:138.4},0).wait(1).to({x:242.2,y:135.4},0).wait(1).to({x:227.05,y:132.7},0).wait(1).to({x:212.2,y:130.25},0).wait(1).to({x:197.55,y:128},0).wait(1).to({x:183.15,y:126.05},0).wait(1).to({x:168.9,y:124.25},0).wait(1).to({x:154.8,y:122.7},0).wait(1).to({x:140.8,y:121.3},0).wait(1).to({x:126.95,y:120.15},0).wait(1).to({x:113.15,y:119.15},0).wait(1).to({x:99.45,y:118.4},0).wait(1).to({x:85.75,y:117.8},0).wait(1).to({x:72.15,y:117.4},0).wait(1).to({x:58.45,y:117.15},0).wait(1).to({x:44.8},0).wait(1).to({x:31.1,y:117.3},0).wait(1).to({x:17.3,y:117.7},0).wait(1).to({x:3.45,y:118.25},0).wait(1).to({x:-10.5,y:119.05},0).wait(1).to({x:-24.6,y:120.05},0).wait(1).to({x:-38.85,y:121.3},0).wait(1).to({x:-53.35,y:122.75},0).wait(1).to({x:-68,y:124.5},0).wait(1).to({x:-83,y:126.55},0).wait(1).to({x:-98.3,y:128.85},0).wait(1).to({x:-114,y:131.55},0).wait(1).to({x:-130.2,y:134.6},0).wait(1).to({x:-146.95,y:138.1},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_cloud1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// cloud1
	this.instance = new lib.cloud1();
	this.instance.setTransform(92.05,140.05,0.6519,0.7844,0,0,0,331.4,-55.4);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(168).to({_off:false},0).wait(1).to({regX:116.8,regY:81.5,x:-36.65,y:237.45},0).wait(1).to({x:-26.5,y:229.05},0).wait(1).to({x:-17,y:221.7},0).wait(1).to({x:-8,y:215.15},0).wait(1).to({x:0.65,y:209.3},0).wait(1).to({x:9.05,y:203.9},0).wait(1).to({x:17.2,y:199},0).wait(1).to({x:25.15,y:194.5},0).wait(1).to({x:33,y:190.3},0).wait(1).to({x:40.75,y:186.4},0).wait(1).to({x:48.4,y:182.8},0).wait(1).to({x:56,y:179.45},0).wait(1).to({x:63.55,y:176.3},0).wait(1).to({x:71.05,y:173.4},0).wait(1).to({x:78.5,y:170.65},0).wait(1).to({x:85.95,y:168.15},0).wait(1).to({x:93.45,y:165.8},0).wait(1).to({x:101,y:163.6},0).wait(1).to({x:108.55,y:161.55},0).wait(1).to({x:116.1,y:159.7},0).wait(1).to({x:123.75,y:157.95},0).wait(1).to({x:131.45,y:156.4},0).wait(1).to({x:139.2,y:155},0).wait(1).to({x:147.1,y:153.7},0).wait(1).to({x:155.05,y:152.55},0).wait(1).to({x:163.1,y:151.55},0).wait(1).to({x:171.3,y:150.75},0).wait(1).to({x:179.6,y:150.05},0).wait(1).to({x:188.1,y:149.5},0).wait(1).to({x:196.75,y:149.1},0).wait(1).to({x:205.6,y:148.85},0).wait(1).to({x:214.65,y:148.75},0).wait(1).to({x:224,y:148.85},0).wait(1).to({x:233.6,y:149.1},0).wait(1).to({x:243.5,y:149.6},0).wait(1).to({x:253.75,y:150.25},0).wait(1).to({x:264.45,y:151.2},0).wait(1).to({x:275.65,y:152.35},0).wait(1).to({x:287.45,y:153.8},0).wait(1).to({x:299.95,y:155.6},0).wait(1).to({x:313.3,y:157.8},0).wait(1).to({x:327.85,y:160.5},0).wait(1).to({x:343.9,y:163.85},0).wait(1).to({x:362.15,y:168.15},0).to({_off:true},1).wait(13));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_Bplay = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Bplay
	this.start = new lib.btnplay();
	this.start.name = "start";
	this.start.setTransform(127.55,532.65);
	new cjs.ButtonHelper(this.start, 0, 1, 2, false, new lib.btnplay(), 3);

	this.text = new cjs.Text("", "normal 400 50px 'Lobster'", "#FFFFFF");
	this.text.lineHeight = 77;
	this.text.lineWidth = 100;
	this.text.parent = this;
	this.text.setTransform(707.75,483.8);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text);
	}

	this.text_1 = new cjs.Text("Yael HEn Alfi", "normal 400 50px 'Lobster'", "#FFFFFF");
	this.text_1.lineHeight = 77;
	this.text_1.lineWidth = 524;
	this.text_1.parent = this;
	this.text_1.setTransform(461.9634,401.55,1.0531,1);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text_1);
	}

	this.text_2 = new cjs.Text("Itsy Bitsy Spider", "normal 400 200px 'Lobster'", "#FFFFFF");
	this.text_2.lineHeight = 300;
	this.text_2.lineWidth = 1355;
	this.text_2.parent = this;
	this.text_2.setTransform(246.9871,238.5,0.535,0.4006);
	if(!lib.properties.webfonts['Lobster']) {
		lib.webFontTxtInst['Lobster'] = lib.webFontTxtInst['Lobster'] || [];
		lib.webFontTxtInst['Lobster'].push(this.text_2);
	}

	this.instance = new lib.background();
	this.instance.setTransform(-120,-94,0.4667,0.4405);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AFUAAQAACNhkBkQhjBjiNAAQiMAAhkhjQhjhkAAiNQAAiMBjhjQBkhkCMAAQCNAABjBkQBkBjAACMg");
	this.shape.setTransform(582.2,590.15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AjvDwQhkhjAAiNQAAiMBkhkQBjhjCMAAQCNAABjBjQBkBkAACMQAACNhkBjQhjBkiNAAQiMAAhjhkg");
	this.shape_1.setTransform(582.2,590.15);

	this.replay = new lib.replay();
	this.replay.name = "replay";
	this.replay.setTransform(569.25,331.2,0.6475,0.5844,0,0,0,0,0.1);
	new cjs.ButtonHelper(this.replay, 0, 1, 2, false, new lib.replay(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:0.4667,scaleY:0.4405,x:-120,y:-94}},{t:this.text_2},{t:this.text_1},{t:this.text},{t:this.start}]}).to({state:[]},2).to({state:[{t:this.instance,p:{scaleX:0.4857,scaleY:0.488,x:-71,y:-116}},{t:this.replay}]},484).wait(9));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.Scene_1_back_spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// back_spider
	this.instance = new lib.back();
	this.instance.setTransform(896.75,649.75,0.5831,0.4177,0,0,0,0,-103.8);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(56).to({_off:false},0).wait(1).to({regX:74.2,regY:-67.5,scaleX:0.5778,scaleY:0.4162,x:937.95,y:662.95},0).wait(1).to({scaleX:0.5726,scaleY:0.4148,x:935.85,y:661},0).wait(1).to({scaleX:0.5674,scaleY:0.4133,x:933.8,y:659.1},0).wait(1).to({scaleX:0.5622,scaleY:0.4119,x:931.75,y:657.15},0).wait(1).to({scaleX:0.557,scaleY:0.4105,x:929.8,y:655.25},0).wait(1).to({scaleX:0.5517,scaleY:0.409,x:927.85,y:653.35},0).wait(1).to({scaleX:0.5465,scaleY:0.4076,x:925.9,y:651.45},0).wait(1).to({scaleX:0.5413,scaleY:0.4061,x:923.95,y:649.55},0).wait(1).to({scaleX:0.5361,scaleY:0.4047,x:922.1,y:647.65},0).wait(1).to({scaleX:0.5309,scaleY:0.4032,x:920.2,y:645.75},0).wait(1).to({scaleX:0.5256,scaleY:0.4018,x:918.3,y:643.85},0).wait(1).to({scaleX:0.5204,scaleY:0.4004,x:916.5,y:642},0).wait(1).to({scaleX:0.5152,scaleY:0.3989,x:914.7,y:640.1},0).wait(1).to({scaleX:0.51,scaleY:0.3975,x:912.9,y:638.2},0).wait(1).to({scaleX:0.5047,scaleY:0.396,x:911.15,y:636.35},0).wait(1).to({scaleX:0.4995,scaleY:0.3946,x:909.4,y:634.5},0).wait(1).to({scaleX:0.4943,scaleY:0.3931,x:907.7,y:632.65},0).wait(1).to({scaleX:0.4891,scaleY:0.3917,x:906,y:630.8},0).wait(1).to({scaleX:0.4839,scaleY:0.3902,x:904.3,y:629},0).wait(1).to({scaleX:0.4786,scaleY:0.3888,x:902.65,y:627.15},0).wait(1).to({scaleX:0.4734,scaleY:0.3874,x:901.05,y:625.35},0).wait(1).to({scaleX:0.4682,scaleY:0.3859,x:899.45,y:623.5},0).wait(1).to({scaleX:0.463,scaleY:0.3845,x:897.85,y:621.7},0).wait(1).to({scaleX:0.4578,scaleY:0.383,x:896.3,y:619.9},0).wait(1).to({scaleX:0.4525,scaleY:0.3816,x:894.8,y:618.1},0).wait(1).to({scaleX:0.4473,scaleY:0.3801,x:893.3,y:616.3},0).wait(1).to({scaleX:0.4421,scaleY:0.3787,x:891.8,y:614.5},0).wait(1).to({scaleX:0.4369,scaleY:0.3772,x:890.3,y:612.75},0).wait(1).to({scaleX:0.4317,scaleY:0.3758,x:888.9,y:610.95},0).wait(1).to({scaleX:0.4264,scaleY:0.3744,x:887.45,y:609.2},0).wait(1).to({scaleX:0.4212,scaleY:0.3729,x:886.05,y:607.4},0).wait(1).to({scaleX:0.416,scaleY:0.3715,x:884.7,y:605.65},0).wait(1).to({scaleX:0.4108,scaleY:0.37,x:883.35,y:603.85},0).wait(1).to({scaleX:0.4055,scaleY:0.3686,x:882.05,y:602.1},0).wait(1).to({scaleX:0.4003,scaleY:0.3671,x:880.7,y:600.35},0).wait(1).to({scaleX:0.3951,scaleY:0.3657,x:879.4,y:598.6},0).wait(1).to({scaleX:0.3899,scaleY:0.3643,x:878.2,y:596.9},0).wait(1).to({scaleX:0.3847,scaleY:0.3628,x:876.95,y:595.15},0).wait(1).to({scaleX:0.3794,scaleY:0.3614,x:875.7,y:593.45},0).wait(1).to({scaleX:0.3742,scaleY:0.3599,x:874.5,y:591.7},0).wait(1).to({scaleX:0.369,scaleY:0.3585,x:873.4,y:590},0).wait(1).to({scaleX:0.3638,scaleY:0.357,x:872.25,y:588.3},0).wait(1).to({scaleX:0.3586,scaleY:0.3556,x:871.1,y:586.6},0).wait(1).to({scaleX:0.3533,scaleY:0.3541,x:870,y:584.9},0).wait(1).to({scaleX:0.3481,scaleY:0.3527,x:868.95,y:583.2},0).wait(1).to({scaleX:0.3429,scaleY:0.3513,x:867.9,y:581.55},0).wait(1).to({scaleX:0.3377,scaleY:0.3498,x:866.85,y:579.85},0).wait(1).to({scaleX:0.3324,scaleY:0.3484,x:865.8,y:578.2},0).wait(1).to({scaleX:0.3272,scaleY:0.3469,x:864.9,y:576.55},0).wait(1).to({scaleX:0.322,scaleY:0.3455,x:863.9,y:574.85},0).wait(1).to({scaleX:0.3168,scaleY:0.344,x:862.95,y:573.2},0).wait(1).to({scaleX:0.3116,scaleY:0.3426,x:862,y:571.55},0).wait(1).to({scaleX:0.3063,scaleY:0.3411,x:861.15,y:569.85},0).wait(1).to({scaleX:0.3011,scaleY:0.3397,x:860.3,y:568.25},0).wait(1).to({scaleX:0.2959,scaleY:0.3383,x:859.4,y:566.6},0).wait(1).to({scaleX:0.2907,scaleY:0.3368,x:858.6,y:564.95},0).wait(1).to({scaleX:0.2855,scaleY:0.3354,x:857.8,y:563.35},0).wait(1).to({scaleX:0.2802,scaleY:0.3339,x:857.05,y:561.75},0).wait(1).to({scaleX:0.275,scaleY:0.3325,x:856.25,y:560.15},0).wait(1).to({scaleX:0.2698,scaleY:0.331,x:855.5,y:558.5},0).wait(1).to({scaleX:0.2646,scaleY:0.3296,x:854.85,y:556.9},0).wait(1).to({scaleX:0.2593,scaleY:0.3282,x:854.15,y:555.35},0).wait(1).to({scaleX:0.2541,scaleY:0.3267,x:853.45,y:553.75},0).wait(1).to({scaleX:0.2489,scaleY:0.3253,x:852.8,y:552.15},0).wait(1).to({scaleX:0.2437,scaleY:0.3238,x:852.25,y:550.6},0).wait(1).to({scaleX:0.2385,scaleY:0.3224,x:851.6,y:549},0).wait(1).to({scaleX:0.2332,scaleY:0.3209,x:851.05,y:547.45},0).wait(1).to({scaleX:0.228,scaleY:0.3195,x:850.5,y:545.9},0).wait(1).to({scaleX:0.2228,scaleY:0.318,x:850,y:544.35},0).wait(1).to({scaleX:0.2176,scaleY:0.3166,x:849.45,y:542.8},0).wait(1).to({scaleX:0.2124,scaleY:0.3152,x:849,y:541.25},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


(lib.spider01 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.helfleg();
	this.instance.setTransform(147.1,54.8,0.8049,0.8602,0,-21.9448,158.0546,88.3,78.5);

	this.instance_1 = new lib.helfleg();
	this.instance_1.setTransform(310.8,-2.65,1,1,-21.9456,0,0,88.2,78.5);

	this.instance_2 = new lib.eye();
	this.instance_2.setTransform(258.7,40.35,1,1,0,0,0,39.3,30.3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#65688A").s().p("AEbEJQAYg/gGhAQgBgHgIgDQgHgDgGADQg8AegkALQg1APgzgGQgugGghgTQgpgXgMgmQgDgIgKAAQgJAAgFAGQg7BDhbgNQhTgMg/hCQgjglgQg1QgNgwADg4QAOgdAKgRQBJiBCQguQB8gpCXAbQBZABBPAvQAvAbAWATQApAiALAkQA7BYALCWQAJByhKBeQg5BIhkA4QAtgzAWg7g");
	this.shape.setTransform(261.4915,57.764);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#6C7095").s().p("AiFGSQhTgNhJgqQhNgsg3hIQhEhYAYiHQAThkBCh1QBJiBCQguQB8gpCXAbQBZABBPAvQAvAbAWATQApAiALAkQA7BYALCWQAKB6hXBkQhABLhuA2QhuA3iGAAQg1AAg4gIg");
	this.shape_1.setTransform(258.1726,61.2865);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ai9GeQhrgdhEgyQhahBgghnQgbhaAhh2QAahgA6hZQBsikC/gkQCcgeDHA8QBFARBLBbQA4BDAaBpQAcBugXBXQg6DbjkBaQh1AvhzAAQhQAAhQgXg");
	this.shape_2.setTransform(257.8362,61.3527);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFEF9").s().p("AADAUIgIgPQgJgPgGgGIAUgJQALgFAJgCQABAIgBALIgCASIgCAQIgCAKIAAACQgFgDgGgKg");
	this.shape_3.setTransform(285.3,98.825);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAFAqIgJgPIgMgVQgIgMgHgHIgBgBQgDgDAEgGIADgCIAcgNQAQgHAMgBQAFAAAAAEQADALgCAQIgDAZIgCATQgDALgGAFQgCACgDAAQgEAAgGgFg");
	this.shape_4.setTransform(285.0931,98.8293);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFEF9").s().p("AgHAeQgLgYABgpIAPAOQALAMAJAFQgHAJgDALIgGAQQgCAEgCAAQgCAAgDgGg");
	this.shape_5.setTransform(241.2207,102.7775);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgLA2QgPgLgDgmQgCgZAEgeQABgBAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQABAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABABAAAAQAAAAAAAAIACACIAAAAIACACIAGAFIALAMQANANALAGQADACgBADQgBADgDACQgFAVgJASQgJAVgJAAQgCAAgDgCg");
	this.shape_6.setTransform(241.4542,103.0337);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#481D4C").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape_7.setTransform(226.4933,30.7565);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#4A1F4E").s().p("ApWClQADgpAShhIAAgBQAEgCACgDQBIhyBehOQBrhZB2gYQhHBXgSBMQgBAIADAGQADAHAIgDQA6gVA9g0IBlhiQACBNABAGQAHAuAeAZQAFAFAFgEQAGgDACgGQANgkAAgtQAAgZgGg5QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhJghhFQA9AlA7BKQAJAKBZB9QAGAJAIgHQAHgIAAgIQAAg2gYg3QgQglgmg8QCdBHB4CdQANAcAHASQAhCWgsgWQgbgOglgsQgpgwgXgPQgIgFgJADQgKACgCAKQgFAYgKBBQgIA2gEAPQgPAxgXghQgJgNgchTQgXhEgdgQQhDglg+BZQgSAagdA4QgdA4gNATQgDglAUhOQAUhLgFgpQgBgIgKgDQgIgEgIADQhFAXg9BFQgJALhbB3QAOgrAlhHQAphQANghQAFgLgNgHQgMgGgKAGQiJBdhTCwQAFgwAXhSQAahcAGglQACgNgOgDQgOgDgIAHQgvAqgiBGQgUApghBYQgChUAciDQADgMgPgDQgOgDgIAHQhBA4giBhQgOApgeCMQgUg6AFhOg");
	this.shape_8.setTransform(237.6867,22.35);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#4A1F4E").s().p("Ag6CSIAJg8QABgMgOgEQgNgDgIAIQgaAYgZAmQgLAPgeA0QgIhAALhKQAPgXAWgaQgTBKgHAuQgBAKAJADQAJAEAEgKQA2hyBNhXQBYhlBlguIg+BvQgjBCgTAwIAAABQgNgDgIAGQgkAigcAzQgUAigaA9QACgTAHgog");
	this.shape_9.setTransform(172.1438,21.25);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#4A1F4E").s().p("AExHtQANg+gBgLQgDgigDgKQgGgXgSgMQgFgDgIACQgHACgEAEQgLAMgJASQgZAyghAqQgsAogMAFQgMAEARgfQAOgeADgkQADgkgJggQgDgLgNAEQgMADgGAIQgKALgqA2QgfAogYAXQgZAYgCghIAFgjIgDgeIgIgfQgEgNgQAGQgOAGgEAJIgUAxQgNAdgQANQhkhIgthCQgFgHgKAGQgKAHABAHQAEATAJAcIAQAtQhEgjhXhQQgHgHgLAIQgLAIAEAJQAKASAJAYQgugYgtg7QgmgygUgxQgFgMgOAIQgNAIAAALQAAAcAIAjQAFAUALAoQgngbgnhEQgjg9gHglQgDgMgOAIQgNAIgBAKIAAAqQgcgxgFhMQAAgKgLACQgLADgDAHIgHAfQgHAVgFgRQgPgwADg1QADgqAQg6QAjhOAxg2QgTBJgHAvQgBAKAJADQAJADAEgJQA2hyBNhYQBZhmBlguIg+BwQgjBBgTAyQgEALAJAFQAIAEAHgKQBIhyBehOQBrhZB1gZQhHBYgRBMQgCAIADAGQAEAGAHgCQA7gVA8g0IBkhiQACBNABAGQAHAuAfAZQAFAEAGgDQAFgDACgGQAOgkAAgtQAAgagGg4QAdAXAfAtIAzBLQAFAHAIgFQAIgEAAgIQAAhKgihEQA9AlA8BKQAIAKBaB9QAGAIAIgHQAHgHAAgIQgBg2gXg3QgQglgmg8QDDBYCHDaQADAGAHgCQAyA/AZA5QAdBAADBJIAAABQgHgJgRgPQgQgNgfgRIgygZQgKgGgLAKQgKAJADALQALApAXA5QAIAUACBHQACBKgXgtQgcg2hFgsQgJgGgLAJQgJAJgCAKQgEAyABBjQgFBWgmA0IgOhSQgNgvgegTQgHgEgKAGQghAUgaBJQgeBTgUAYQgQARgHAAQgJAAAEgbg");
	this.shape_10.setTransform(229.7493,44.2815);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#592A5E").s().p("AgeAbQgDgrgigwQBOA1A5BMQg1gtgtAHg");
	this.shape_11.setTransform(305,18.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#592A5E").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_12.setTransform(226.4933,25.7429);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_13.setTransform(227.2243,25.5749);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#66676A").s().p("AFRJ0QAOg+gBgLQgEgigCgKQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJASQgYAygiAqQgrAogMAFQgNAEASgfQAOgeADgkQADgkgJggQgEgLgNAEQgLADgHAIQgKALgpA2QgfAogYAXQgbAYgBghIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAJIgTAxQgNAdgRANQhkhIgthCQgFgHgKAGQgJAHABAHQADATAKAcIAQAtQhFgjhWhQQgHgHgLAIQgLAIAEAJQAKASAIAYQgtgYgtg7QgngygUgxQgFgMgNAIQgNAIAAALQgBAcAJAjQAEAUAMAoQgngbgohEQgjg9gHglQgCgMgOAIQgOAIAAAKIAAAqQgcgxgFhMQgBgKgLACQgKADgDAHIgIAfQgGAVgGgRQgPg0AFg5QADgtAThAQADgMgLABQgKAAgGAGQgHAJgMAMQgQARgDgCQAEgIAVhKQADgLgKgBQgIgBgHAFQgSAQgOAOQgjAtAhhMQAag6AtguQAJgIgEgKQgFgJgMAHQgrAZgOgSQgPgSAcgsQAYgnAmgcQAlgbAsgMQAKgDADgLQACgMgMABIg1ADQgwADABgBQAfguA3gfQA3gfA3gDQAJgBAFgKQAFgKgLgDQgGgCg8ABQgbAAAfgaQAwgoA5gUQAsgPBKgKQAIgBAGgHQAHgJgGgGQgJgKgJgFQAOgCANAAQAPAPAMAKQhuA8hXBJQgDADAAAFQAAAFAEACQAgAJBGABQhVA3goAfQhEA1gcA/QgDAHAHACQAGACAFgDQAwgZARgHQAkgQAhgDQhPBIgkAwQg3BKgJBLQgBAHAHAAQAHAAAEgEQAygpARgLQAngcAlgKQgqBUgQA9QgVBTAOBJQABAFAHAAQAGAAAEgEQAWgZAdguQAkg3ANgRQgLBVADA1QAGBMAhA3QADAGAIgDQAHgCACgGIAOg6QAJgjAJgWQASBAATAsQAYA4AhAqQAEAFAHgCQAHgCACgGQAGgUAFghIAKg1IAtBVQAbAvAgAbQAEAEAGgDQAGgDACgFQAJgUAJgdIANgzQAMAZAPAtQASAzAIATQACAFAGABQAFAAAEgEQAXgVAcgsQAfgyAPgRQABAXgGAeIgMA0QgCAGAGAEQAFADAGgFQAegYAkglIA+hCIgYAxQgNAcgIAWQgDAHAHACQAFADAGgEQAlgVAngmQARgRAxg3IgJA5QgGAjAAAXQAAAGAFABQAFABAFgCQA5ggAxg3QAmgrAqhFQgLBIADApQABAJAJgBQBTgNAohpQAPgoAciXQAKAkAJAtQABAGAGAAQAGAAAEgEQAsgwgHhIQgFg2gkhJIAOAPQAFAEAHgEQAGgEABgGQANhHg9hLQgHgJhvhuIAlARQAWAKAPAFQAFACAHgFQAGgEgCgGQgsh2ieg8Qg6gWhUgSIiJgcQBKgvBggcQgCAIACAEQADAFAKgBQAjgDAbgFQARgCAsAHIAsAIQgVAEgbAMIgvAWQgIAEgDALQgDANALABQArAGBZAIQBNALAwAaQgYgCgRADQgVAFgTAPQgHAGAAAIQgBAIAJADQAhALBMAQQBDASAkAbQg+gSgtALQgIACgGAJQgGAKAHAGQAWAUAzAhQAyAhAWAUQgugRg1gGQgKgBgKAKQgKALAIAJIBnBpQBCBEAWA1QgfgdgZgMQgigRghAIQgIACgGAKQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgPQgQgNgegRIgygaQgKgGgLAKQgKAKACALQALApAYA5QAIAUACBHQABBKgXgtQgbg2hFgsQgKgGgKAJQgKAJgBAKQgFAyABBjQgFBWgmA0IgOhSQgMgvgegTQgIgEgKAGQggAUgbBJQgeBTgUAYQgPASgHAAQgJAAADgcg");
	this.shape_14.setTransform(226.4933,30.7565);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#5C5D60").s().p("AFRKnQAOg/gBgKQgEgjgCgJQgHgXgSgMQgEgDgIACQgHACgEAEQgMAMgJARQgYAzgiApQgrApgMAEQgNAFASgfQAOgeADgkQADglgJgfQgEgMgNAEQgLAEgHAHQgKAMgpA2QgfAogYAWQgbAZgBgiIAEgiIgDgfIgIgfQgCgNgQAGQgPAGgEAKIgTAwQgNAegRANQhkhJgthCQgFgHgKAHQgJAGABAIQADATAKAbIAQAuQhFgkhWhQQgHgGgLAHQgLAIAEAJQAKATAIAYQgtgYgtg8QgngygUgwQgFgMgNAIQgNAHAAALQgBAcAJAjQAEAUAMApQgngbgohEQgjg9gHgmQgCgMgOAIQgOAJAAAJIAAArQgcgxgFhNQgBgJgLACQgKACgDAIIgIAeQgGAWgGgSQgPgzAFg6QADgtATg/QADgMgLAAQgKAAgGAHQgHAJgMAMQgQAQgDgCQAEgHAVhMQADgKgKgCQgIgBgHAGQgSAPgOAQQgjAsAhhNQAag5AtgtQAJgJgEgJQgFgJgMAHQgrAZgOgSQgPgSAcgtQAYgnAmgbQAlgbAsgMQAKgDADgMQACgMgMACIg1ADQgwACABgBQAfgtA3ggQA3gfA3gCQAJgBAFgKQAFgLgLgDQgGgBg8AAQgbABAfgaQAwgpA5gUQAsgPBKgJQAIgBAGgIQAHgIgGgHQgJgKgJgFQAcgEAoAFIBEAIQAEABAFgEQAEgDACgEQAFgGAAgGQgEgbgRgTQApAJAsAcQAIAFAJgIQAKgHgCgIQgHgtgagmQAgANAhAeQATASAnAoQAGAFAIgDQAHgEAEgHQAHgQAFgOQgLAiADgFIARgpQAlhbgCApQgCAkACARQADAdALAVQADAGAHAAQAHAAAFgFIBThXIAogaQAmgWgJAYQgIAUgTAeQgaAmgFAKQgFAKAIAFQAIAGAJgGQBgg7BWgQQAvgJgQAQIglAaQgKAHgDANQgCAOAQgBQAjgEAbgEQARgDAsAIIAsAHQgVAEgbAMIgvAWQgIAFgDALQgDAMALACQArAFBZAIQBNALAwAbQgYgDgRAEQgVAEgTAQQgHAGAAAHQgBAJAJADQAhAKBMARQBDASAkAbQg+gSgtAKQgIACgGAKQgGAKAHAGQAWATAzAiQAyAgAWAUQgugQg1gGQgKgBgKAKQgKAKAIAKIBnBpQBCBDAWA0QgfgcgZgMQgigQghAIQgIACgGAJQgGAKAGAHQA3BDAbA6QAgBFADBMIAAABQgHgJgRgOQgQgOgegQIgygbQgKgGgLALQgKAKACAKQALAqAYA5QAIATACBIQABBJgXgtQgbg1hFgsQgKgGgKAJQgKAIgBALQgFAxABBkQgFBVgmA1IgOhTQgMgugegTQgIgFgKAHQggAUgbBIQgeBUgUAXQgPASgHAAQgJAAADgbg");
	this.shape_15.setTransform(226.4933,25.7429);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231F20").s().p("AEwL0QgHAAgDgIQgHgPACgYQAAgKAGgfIAMhJQAEgqgaAyQhBB4hfAZQgIABgGgCQgGgDgBgIQgBgaAQgsQAQguABgXQgwBCgWAVQgtAsgyAFQgGAAgEgDQgFgEAAgGQgCgSAGgwQgTAfgZAQQgOAKgHgKIgEgBQg5gsgogrQAIAWAEAUQABAJgJAGQgJAGgHgDQhAgbhGg6IACAIQACAKgIAIQgIAJgKgCQhLgOhIhmQAJAgAEATQABAJgJAHQgIAGgIgBQgmgFgpgtQgjgngbg5IAAAGQgCAJgJAFQgKAFgHgGQgjgigNg+QgFAKgEAFQgEAFgHADQgIADgDgGQg4hVAciLQgNARgOALQgHAFgGAAQgIgBgBgIQgDgXAFgYQADgOAJgfQgaAcgVAOQgGADgHgBQgHgCABgHQAFhRA8hPQgaAKgagCQgFgBgCgFQgUgyAsg9QAlgyBCgpQgeADgTgBQgDAAgCgDQgDgCAAgDQABgqAtgnQAmgiA7gXIgWAEQgIABgBgHQgCgHAFgFQAtg+BDgjQA5geBQgOIgQgHQgJgEAGgKQAFgIAHgDQAkgQAtABQAkAAAvAMQgFgPgOgOIgagYQgHgGAIgKQAHgJAIAAQA6ABA0AaQgPgqgdgdQgHgIAJgJQAHgIAJABQAzAHAqAfQAUAOA1A1QAag9AEgIQATgmAagZQAFgEAHgBQAGAAADAGQAHAPgBAVIgDAlQAAA3ACACQAFAFAogrIA5g7QAjgfAkgFQA4gIhKCDQBEgnA3gPQBHgUA6AQQALADgBAJQgBAYgbASQCLgLACAvQACAlhMAWQBWAKArANQBFAUAsAqQAHAHgIALQgIAKgIAAIgigEIglgGQBbAWAhAOQBCAdAdAzQAFAJgKAKQgLAKgIgDIg1gSQgggKgXgDIBdA+QAzAnAWAuQAFAKgMALQgMAKgKgFQg0ghg5gPQBjBjAPAUQA7BKACBFQABAMgMAHQgMAIgJgIIgrgtQgfgegZgJQB+CnghCCQgBAHgGAFQgHAGgHAAQgNABgFgBQgEgCgIgLQgaghg1gdQAhBcAGAqQAKBQgtAnQgGAGgLABQgMABgGgGQgOgPgegrQgZgkgVgSQgFCJgEAXQgPBWg6A5QgGAFgJABQgKABgCgIQgEgPgHgrQgFgjgJgWIgFgjQgDgPgIAWQgZBOgkA6QgTAggaAWQgeAagdAAIgCAAg");
	this.shape_16.setTransform(227.2243,25.5749);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.spider01, new cjs.Rectangle(107.3,-82.1,268.2,221.2), null);


(lib.Scene_1_incom_spider = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// incom_spider
	this.instance = new lib.spider01();
	this.instance.setTransform(182.2,681.55,0.5768,0.4212,0,0,0,398.4,59.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).wait(1).to({regX:237.1,regY:12.7,x:102.75,y:661.7},0).wait(1).to({x:116.35,y:661.4},0).wait(1).to({x:129.95,y:661.1},0).wait(1).to({x:143.5,y:660.85},0).wait(1).to({x:157.1,y:660.55},0).wait(1).to({x:170.7,y:660.25},0).wait(1).to({x:184.25,y:659.95},0).wait(1).to({x:197.85,y:659.7},0).wait(1).to({x:211.45,y:659.4},0).wait(1).to({x:225.05,y:659.1},0).wait(1).to({x:238.65,y:658.8},0).wait(1).to({x:252.25,y:658.55},0).wait(1).to({x:265.85,y:658.25},0).wait(1).to({x:279.4,y:657.95},0).wait(1).to({x:293,y:657.65},0).wait(1).to({x:306.6,y:657.4},0).wait(1).to({x:320.2,y:657.1},0).wait(1).to({x:333.8,y:656.8},0).wait(1).to({x:347.4,y:656.5},0).wait(1).to({x:361,y:656.25},0).wait(1).to({x:374.55,y:655.95},0).wait(1).to({x:388.15,y:655.65},0).wait(1).to({x:401.75,y:655.35},0).wait(1).to({x:415.35,y:655.1},0).wait(1).to({x:428.95,y:654.8},0).wait(1).to({x:442.55,y:654.5},0).wait(1).to({x:456.15,y:654.2},0).wait(1).to({x:469.75,y:653.95},0).wait(1).to({x:483.3,y:653.65},0).wait(1).to({x:496.9,y:653.35},0).wait(1).to({x:510.5,y:653.05},0).wait(1).to({x:524.1,y:652.8},0).wait(1).to({x:537.7,y:652.5},0).wait(1).to({x:551.3,y:652.2},0).wait(1).to({x:564.9,y:651.9},0).wait(1).to({x:578.45,y:651.65},0).wait(1).to({x:592.05,y:651.35},0).wait(1).to({x:605.65,y:651.05},0).wait(1).to({x:619.25,y:650.75},0).wait(1).to({x:632.85,y:650.5},0).wait(1).to({x:646.45,y:650.2},0).wait(1).to({x:660.05,y:649.9},0).wait(1).to({x:673.6,y:649.6},0).wait(1).to({x:687.2,y:649.35},0).wait(1).to({x:700.8,y:649.05},0).wait(1).to({x:714.4,y:648.75},0).wait(1).to({x:728,y:648.45},0).wait(1).to({x:741.6,y:648.2},0).wait(1).to({x:755.2,y:647.9},0).wait(1).to({x:768.8,y:647.6},0).wait(1).to({x:782.35,y:647.3},0).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();


// stage content:
(lib.spideryael = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0,2,4,486,494];
	this.___GetDepth___ = function(obj) {
		var depth = obj.depth;
		var cameraObj = this.___camera___instance;
		if(cameraObj && cameraObj.depth && obj.isAttachedToCamera)
		{
			depth += depth + cameraObj.depth;
		}
		return depth;
		}
	this.___needSorting___ = function() {
		for (var i = 0; i < this.numChildren - 1; i++)
		{
			var prevDepth = this.___GetDepth___(this.getChildAt(i));
			var nextDepth = this.___GetDepth___(this.getChildAt(i + 1));
			if (prevDepth < nextDepth)
				return true;
		}
		return false;
	}
	this.___sortFunction___ = function(obj1, obj2) {
		return (this.exportRoot.___GetDepth___(obj2) - this.exportRoot.___GetDepth___(obj1));
	}
	this.on('tick', function (event){
		var curTimeline = event.currentTarget;
		if (curTimeline.___needSorting___()){
			this.sortChildren(curTimeline.___sortFunction___);
		}
	});

	// timeline functions:
	this.frame_0 = function() {
		this.start = this.Bplay.start;
		var self = this; 
		self.stop(); 
		
		createjs.Sound.stop();
		
		self.start.addEventListener("click", startPlaying);
		
		
		function startPlaying()
		{
			self.gotoAndPlay(1);
		}
	}
	this.frame_2 = function() {
		this.start = undefined;
	}
	this.frame_4 = function() {
		playSound("spider2");
	}
	this.frame_486 = function() {
		this.replay = this.Bplay.replay;
		var self = this;
		self.stop();
		
		
		self.replay.addEventListener("click", playAgain);
		
		function playAgain()
		{	
			self.gotoAndPlay(1); 
		}
	}
	this.frame_494 = function() {
		this.___loopingOver___ = true;
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(2).call(this.frame_2).wait(2).call(this.frame_4).wait(482).call(this.frame_486).wait(8).call(this.frame_494).wait(1));

	// Camera
	this.___camera___instance = new lib.___Camera___();
	this.___camera___instance.name = "___camera___instance";
	this.___camera___instance.setTransform(640,360);
	this.___camera___instance.depth = 0;
	this.___camera___instance._off = true;
	this.___camera___instance.visible = false;

	this.timeline.addTween(cjs.Tween.get(this.___camera___instance).wait(28).to({_off:false},0).wait(100).to({scaleX:0.9279,scaleY:0.9279},0).wait(3).to({regX:0.1,regY:0.1,scaleX:0.8353,scaleY:0.8353,x:640.05,y:360.05},0).wait(3).to({scaleX:0.7588,scaleY:0.7588},0).wait(3).to({scaleX:0.6893,scaleY:0.6893,y:360},0).wait(3).to({regX:0.2,regY:0.2,scaleX:0.6013,scaleY:0.6013,x:640.1},0).wait(48).to({regX:0.3,regY:0.3,scaleX:0.6516,scaleY:0.6516,x:640.2,y:360.1},0).wait(2).to({regX:0.4,regY:0.4,scaleX:0.7023,scaleY:0.7023,x:640.3,y:360.15},0).wait(2).to({scaleX:0.8897,scaleY:0.8897,y:360.2},0).to({_off:true},1).wait(302));

	// spider_ups_copy_obj_
	this.spider_ups_copy = new lib.Scene_1_spider_ups_copy();
	this.spider_ups_copy.name = "spider_ups_copy";
	this.spider_ups_copy.depth = 0;
	this.spider_ups_copy.isAttachedToCamera = 0
	this.spider_ups_copy.isAttachedToMask = 0
	this.spider_ups_copy.layerDepth = 0
	this.spider_ups_copy.layerIndex = 0
	this.spider_ups_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spider_ups_copy).wait(418).to({regX:886.3,regY:424.8,x:886.3,y:424.8},0).wait(38).to({regX:0,regY:0,x:0,y:0},0).wait(26).to({_off:true},3).wait(10));

	// cory_copy_obj_
	this.cory_copy = new lib.Scene_1_cory_copy();
	this.cory_copy.name = "cory_copy";
	this.cory_copy.depth = 0;
	this.cory_copy.isAttachedToCamera = 0
	this.cory_copy.isAttachedToMask = 0
	this.cory_copy.layerDepth = 0
	this.cory_copy.layerIndex = 1
	this.cory_copy.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cory_copy).wait(418).to({_off:true},67).wait(10));

	// spidermove_obj_
	this.spidermove = new lib.Scene_1_spidermove();
	this.spidermove.name = "spidermove";
	this.spidermove.depth = 0;
	this.spidermove.isAttachedToCamera = 0
	this.spidermove.isAttachedToMask = 0
	this.spidermove.layerDepth = 0
	this.spidermove.layerIndex = 2
	this.spidermove.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spidermove).wait(400).to({regX:783.6,regY:566.5,x:783.6,y:566.5},0).wait(16).to({_off:true},1).wait(78));

	// tree_obj_
	this.tree = new lib.Scene_1_tree();
	this.tree.name = "tree";
	this.tree.depth = 0;
	this.tree.isAttachedToCamera = 0
	this.tree.isAttachedToMask = 0
	this.tree.layerDepth = 0
	this.tree.layerIndex = 3
	this.tree.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.tree).wait(405).to({_off:true},82).wait(8));

	// out_obj_
	this.out = new lib.Scene_1_out();
	this.out.name = "out";
	this.out.depth = 0;
	this.out.isAttachedToCamera = 0
	this.out.isAttachedToMask = 0
	this.out.layerDepth = 0
	this.out.layerIndex = 4
	this.out.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.out).wait(369).to({regX:704.2,regY:583.5,x:704.2,y:583.5},0).wait(28).to({_off:true},1).wait(97));

	// slolit_obj_
	this.slolit = new lib.Scene_1_slolit();
	this.slolit.name = "slolit";
	this.slolit.depth = 0;
	this.slolit.isAttachedToCamera = 0
	this.slolit.isAttachedToMask = 0
	this.slolit.layerDepth = 0
	this.slolit.layerIndex = 5
	this.slolit.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.slolit).wait(369).to({_off:true},118).wait(8));

	// rain_obj_
	this.rain = new lib.Scene_1_rain();
	this.rain.name = "rain";
	this.rain.depth = 0;
	this.rain.isAttachedToCamera = 0
	this.rain.isAttachedToMask = 0
	this.rain.layerDepth = 0
	this.rain.layerIndex = 6
	this.rain.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.rain).wait(201).to({_off:true},42).wait(252));

	// cloud2goes_obj_
	this.cloud2goes = new lib.Scene_1_cloud2goes();
	this.cloud2goes.name = "cloud2goes";
	this.cloud2goes.depth = 0;
	this.cloud2goes.isAttachedToCamera = 0
	this.cloud2goes.isAttachedToMask = 0
	this.cloud2goes.layerDepth = 0
	this.cloud2goes.layerIndex = 7
	this.cloud2goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2goes).wait(214).to({regX:1009.7,regY:124.5,x:1009.7,y:124.5},0).wait(33).to({_off:true},1).wait(247));

	// cloud1goes_obj_
	this.cloud1goes = new lib.Scene_1_cloud1goes();
	this.cloud1goes.name = "cloud1goes";
	this.cloud1goes.depth = 0;
	this.cloud1goes.isAttachedToCamera = 0
	this.cloud1goes.isAttachedToMask = 0
	this.cloud1goes.layerDepth = 0
	this.cloud1goes.layerIndex = 8
	this.cloud1goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud1goes).wait(214).to({regX:106.6,regY:140.4,x:106.6,y:140.4},0).wait(33).to({_off:true},1).wait(247));

	// cloud1_obj_
	this.cloud1 = new lib.Scene_1_cloud1();
	this.cloud1.name = "cloud1";
	this.cloud1.depth = 0;
	this.cloud1.isAttachedToCamera = 0
	this.cloud1.isAttachedToMask = 0
	this.cloud1.layerDepth = 0
	this.cloud1.layerIndex = 9
	this.cloud1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud1).wait(168).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:157.2,regY:198.1,scaleX:1,scaleY:1,x:-97.9,y:54.75},0).wait(44).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},13).wait(269));

	// cloud2_obj_
	this.cloud2 = new lib.Scene_1_cloud2();
	this.cloud2.name = "cloud2";
	this.cloud2.depth = 0;
	this.cloud2.isAttachedToCamera = 0
	this.cloud2.isAttachedToMask = 0
	this.cloud2.layerDepth = 0
	this.cloud2.layerIndex = 10
	this.cloud2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cloud2).wait(168).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:1083.8,regY:144.1,scaleX:1,scaleY:1,x:828.7,y:0.75},0).wait(44).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},12).wait(270));

	// jump_obj_
	this.jump = new lib.Scene_1_jump();
	this.jump.name = "jump";
	this.jump.depth = 0;
	this.jump.isAttachedToCamera = 0
	this.jump.isAttachedToMask = 0
	this.jump.layerDepth = 0
	this.jump.layerIndex = 11
	this.jump.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.jump).wait(218).to({regX:784.6,regY:590.1,x:784.6,y:590.1},0).wait(21).to({regX:0,regY:0,x:0,y:0},0).wait(5).to({_off:true},2).wait(249));

	// fall_dwon_obj_
	this.fall_dwon = new lib.Scene_1_fall_dwon();
	this.fall_dwon.name = "fall_dwon";
	this.fall_dwon.depth = 0;
	this.fall_dwon.isAttachedToCamera = 0
	this.fall_dwon.isAttachedToMask = 0
	this.fall_dwon.layerDepth = 0
	this.fall_dwon.layerIndex = 12
	this.fall_dwon.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.fall_dwon).wait(188).to({regX:223,regY:125.3,scaleX:1.5348,scaleY:1.5348},0).wait(1).to({regX:876,regY:465.5,scaleX:1,scaleY:1,x:653.05,y:340.25},0).wait(28).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},7).wait(271));

	// spider_ups_obj_
	this.spider_ups = new lib.Scene_1_spider_ups();
	this.spider_ups.name = "spider_ups";
	this.spider_ups.depth = 0;
	this.spider_ups.isAttachedToCamera = 0
	this.spider_ups.isAttachedToMask = 0
	this.spider_ups.layerDepth = 0
	this.spider_ups.layerIndex = 13
	this.spider_ups.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.spider_ups).wait(128).to({regX:872.3,regY:443,x:872.3,y:443},0).wait(59).to({_off:true},1).wait(307));

	// back_spider_obj_
	this.back_spider = new lib.Scene_1_back_spider();
	this.back_spider.name = "back_spider";
	this.back_spider.depth = 0;
	this.back_spider.isAttachedToCamera = 0
	this.back_spider.isAttachedToMask = 0
	this.back_spider.layerDepth = 0
	this.back_spider.layerIndex = 14
	this.back_spider.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back_spider).wait(57).to({regX:917.3,regY:608.7,x:917.3,y:608.7},0).wait(70).to({_off:true},1).wait(367));

	// incom_spider_obj_
	this.incom_spider = new lib.Scene_1_incom_spider();
	this.incom_spider.name = "incom_spider";
	this.incom_spider.depth = 0;
	this.incom_spider.isAttachedToCamera = 0
	this.incom_spider.isAttachedToMask = 0
	this.incom_spider.layerDepth = 0
	this.incom_spider.layerIndex = 15
	this.incom_spider.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.incom_spider).wait(5).to({regX:435.8,regY:654.7,x:435.8,y:654.7},0).wait(51).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},1).wait(438));

	// cory_obj_
	this.cory = new lib.Scene_1_cory();
	this.cory.name = "cory";
	this.cory.depth = 0;
	this.cory.isAttachedToCamera = 0
	this.cory.isAttachedToMask = 0
	this.cory.layerDepth = 0
	this.cory.layerIndex = 16
	this.cory.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.cory).wait(129).to({regX:46.1,regY:25.9,scaleX:1.0777,scaleY:1.0777,x:0.05},0).to({_off:true},101).wait(265));

	// house1_obj_
	this.house1 = new lib.Scene_1_house1();
	this.house1.name = "house1";
	this.house1.depth = 0;
	this.house1.isAttachedToCamera = 0
	this.house1.isAttachedToMask = 0
	this.house1.layerDepth = 0
	this.house1.layerIndex = 17
	this.house1.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.house1).wait(5).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(86).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(69).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(4).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(14).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(1).to({regX:1314.6,regY:246,scaleX:1,scaleY:1,x:1059.5,y:102.65},0).wait(32).to({regX:0,regY:0,x:0,y:0},0).wait(1).to({regX:1314.6,regY:246,x:1314.6,y:246},0).wait(119).to({regX:0,regY:0,x:0,y:0},0).to({_off:true},152).wait(9));

	// sun_goes_obj_
	this.sun_goes = new lib.Scene_1_sun_goes();
	this.sun_goes.name = "sun_goes";
	this.sun_goes.depth = 0;
	this.sun_goes.isAttachedToCamera = 0
	this.sun_goes.isAttachedToMask = 0
	this.sun_goes.layerDepth = 0
	this.sun_goes.layerIndex = 18
	this.sun_goes.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun_goes).wait(175).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1},0).wait(1).to({regX:1153.2,regY:50.5,scaleX:1,scaleY:1,x:898.1,y:-92.85},0).wait(8).to({_off:true},1).wait(310));

	// sun2_obj_
	this.sun2 = new lib.Scene_1_sun2();
	this.sun2.name = "sun2";
	this.sun2.depth = 0;
	this.sun2.isAttachedToCamera = 0
	this.sun2.isAttachedToMask = 0
	this.sun2.layerDepth = 0
	this.sun2.layerIndex = 19
	this.sun2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun2).wait(243).to({regX:481.5,regY:141.3,x:481.5,y:141.3},0).wait(242).to({_off:true},1).wait(9));

	// sun_obj_
	this.sun = new lib.Scene_1_sun();
	this.sun.name = "sun";
	this.sun.depth = 0;
	this.sun.isAttachedToCamera = 0
	this.sun.isAttachedToMask = 0
	this.sun.layerDepth = 0
	this.sun.layerIndex = 20
	this.sun.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.sun).wait(5).to({regX:463.3,regY:178,x:463.3,y:178},0).wait(169).to({_off:true},1).wait(320));

	// back2_obj_
	this.back2 = new lib.Scene_1_back2();
	this.back2.name = "back2";
	this.back2.depth = 0;
	this.back2.isAttachedToCamera = 0
	this.back2.isAttachedToMask = 0
	this.back2.layerDepth = 0
	this.back2.layerIndex = 21
	this.back2.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back2).wait(272).to({_off:true},214).wait(9));

	// back_obj_
	this.back = new lib.Scene_1_back();
	this.back.name = "back";
	this.back.depth = 0;
	this.back.isAttachedToCamera = 0
	this.back.isAttachedToMask = 0
	this.back.layerDepth = 0
	this.back.layerIndex = 22
	this.back.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.back).wait(128).to({regX:46.1,regY:25.9,scaleX:1.0777,scaleY:1.0777,x:0.05},0).wait(3).to({regX:105.4,regY:59.2,scaleX:1.1972,scaleY:1.1972,x:0.1},0).wait(3).to({regX:154.3,regY:86.8,scaleX:1.3179,scaleY:1.3179,x:0,y:0.1},0).wait(3).to({regX:198.8,regY:111.8,scaleX:1.4507,scaleY:1.4507,x:0.05},0).wait(3).to({regX:255.2,regY:143.4,scaleX:1.663,scaleY:1.663,x:0.1,y:0},0).wait(48).to({regX:223,regY:125.3,scaleX:1.5348,scaleY:1.5348,x:0},0).wait(2).to({regX:190.5,regY:107,scaleX:1.4238,scaleY:1.4238,x:0.05,y:0.05},0).wait(2).to({regX:70.5,regY:39.5,scaleX:1.1239,scaleY:1.1239},0).wait(1).to({regX:0,regY:0,scaleX:1,scaleY:1,x:0,y:0},0).wait(55).to({_off:true},1).wait(246));

	// Bplay_obj_
	this.Bplay = new lib.Scene_1_Bplay();
	this.Bplay.name = "Bplay";
	this.Bplay.setTransform(580,346.5,1,1,0,0,0,580,346.5);
	this.Bplay.depth = 0;
	this.Bplay.isAttachedToCamera = 0
	this.Bplay.isAttachedToMask = 0
	this.Bplay.layerDepth = 0
	this.Bplay.layerIndex = 23
	this.Bplay.maskLayerName = 0

	this.timeline.addTween(cjs.Tween.get(this.Bplay).wait(495));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,2856.6,860);
// library properties:
lib.properties = {
	id: '0471F581BECA094AB93757FC1A862D54',
	width: 1280,
	height: 720,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/spideryael_atlas_1.png?1628627160621", id:"spideryael_atlas_1"},
		{src:"sounds/spider2.mp3?1628627163893", id:"spider2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['0471F581BECA094AB93757FC1A862D54'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}

p._getProjectionMatrix = function(container, totalDepth) {	var focalLength = 528.25;
	var projectionCenter = { x : lib.properties.width/2, y : lib.properties.height/2 };
	var scale = (totalDepth + focalLength)/focalLength;
	var scaleMat = new createjs.Matrix2D;
	scaleMat.a = 1/scale;
	scaleMat.d = 1/scale;
	var projMat = new createjs.Matrix2D;
	projMat.tx = -projectionCenter.x;
	projMat.ty = -projectionCenter.y;
	projMat = projMat.prependMatrix(scaleMat);
	projMat.tx += projectionCenter.x;
	projMat.ty += projectionCenter.y;
	return projMat;
}
p._handleTick = function(event) {
	var cameraInstance = exportRoot.___camera___instance;
	if(cameraInstance !== undefined && cameraInstance.pinToObject !== undefined)
	{
		cameraInstance.x = cameraInstance.pinToObject.x + cameraInstance.pinToObject.pinOffsetX;
		cameraInstance.y = cameraInstance.pinToObject.y + cameraInstance.pinToObject.pinOffsetY;
		if(cameraInstance.pinToObject.parent !== undefined && cameraInstance.pinToObject.parent.depth !== undefined)
		cameraInstance.depth = cameraInstance.pinToObject.parent.depth + cameraInstance.pinToObject.pinOffsetZ;
	}
	stage._applyLayerZDepth(exportRoot);
}
p._applyLayerZDepth = function(parent)
{
	var cameraInstance = parent.___camera___instance;
	var focalLength = 528.25;
	var projectionCenter = { 'x' : 0, 'y' : 0};
	if(parent === exportRoot)
	{
		var stageCenter = { 'x' : lib.properties.width/2, 'y' : lib.properties.height/2 };
		projectionCenter.x = stageCenter.x;
		projectionCenter.y = stageCenter.y;
	}
	for(child in parent.children)
	{
		var layerObj = parent.children[child];
		if(layerObj == cameraInstance)
			continue;
		stage._applyLayerZDepth(layerObj, cameraInstance);
		if(layerObj.layerDepth === undefined)
			continue;
		if(layerObj.currentFrame != layerObj.parent.currentFrame)
		{
			layerObj.gotoAndPlay(layerObj.parent.currentFrame);
		}
		var matToApply = new createjs.Matrix2D;
		var cameraMat = new createjs.Matrix2D;
		var totalDepth = layerObj.layerDepth ? layerObj.layerDepth : 0;
		var cameraDepth = 0;
		if(cameraInstance && !layerObj.isAttachedToCamera)
		{
			var mat = cameraInstance.getMatrix();
			mat.tx -= projectionCenter.x;
			mat.ty -= projectionCenter.y;
			cameraMat = mat.invert();
			cameraMat.prependTransform(projectionCenter.x, projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			cameraMat.appendTransform(-projectionCenter.x, -projectionCenter.y, 1, 1, 0, 0, 0, 0, 0);
			if(cameraInstance.depth)
				cameraDepth = cameraInstance.depth;
		}
		if(layerObj.depth)
		{
			totalDepth = layerObj.depth;
		}
		//Offset by camera depth
		totalDepth -= cameraDepth;
		if(totalDepth < -focalLength)
		{
			matToApply.a = 0;
			matToApply.d = 0;
		}
		else
		{
			if(layerObj.layerDepth)
			{
				var sizeLockedMat = stage._getProjectionMatrix(parent, layerObj.layerDepth);
				if(sizeLockedMat)
				{
					sizeLockedMat.invert();
					matToApply.prependMatrix(sizeLockedMat);
				}
			}
			matToApply.prependMatrix(cameraMat);
			var projMat = stage._getProjectionMatrix(parent, totalDepth);
			if(projMat)
			{
				matToApply.prependMatrix(projMat);
			}
		}
		layerObj.transformMatrix = matToApply;
	}
}
an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}

// Virtual camera API : 

an.VirtualCamera = new function() {
var _camera = new Object();
function VC(timeline) {
	this.timeline = timeline;
	this.camera = timeline.___camera___instance;
	this.centerX = lib.properties.width / 2;
	this.centerY = lib.properties.height / 2;
	this.camAxisX = this.camera.x;
	this.camAxisY = this.camera.y;
	if(timeline.___camera___instance == null || timeline.___camera___instance == undefined ) {
		timeline.___camera___instance = new cjs.MovieClip();
		timeline.___camera___instance.visible = false;
		timeline.___camera___instance.parent = timeline;
		timeline.___camera___instance.setTransform(this.centerX, this.centerY);
	}
	this.camera = timeline.___camera___instance;
}

VC.prototype.moveBy = function(x, y, z) {
z = typeof z !== 'undefined' ? z : 0;
	var position = this.___getCamPosition___();
	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	this.camAxisX = this.camAxisX - x;
	this.camAxisY = this.camAxisY - y;
	var posX = position.x + offX;
	var posY = position.y + offY;
	this.camera.x = this.centerX - posX;
	this.camera.y = this.centerY - posY;
	this.camera.depth += z;
};

VC.prototype.setPosition = function(x, y, z) {
	z = typeof z !== 'undefined' ? z : 0;

	const MAX_X = 10000;
	const MIN_X = -10000;
	const MAX_Y = 10000;
	const MIN_Y = -10000;
	const MAX_Z = 10000;
	const MIN_Z = -5000;

	if(x > MAX_X)
	  x = MAX_X;
	else if(x < MIN_X)
	  x = MIN_X;
	if(y > MAX_Y)
	  y = MAX_Y;
	else if(y < MIN_Y)
	  y = MIN_Y;
	if(z > MAX_Z)
	  z = MAX_Z;
	else if(z < MIN_Z)
	  z = MIN_Z;

	var rotAngle = this.getRotation()*Math.PI/180;
	var sinTheta = Math.sin(rotAngle);
	var cosTheta = Math.cos(rotAngle);
	var offX= x*cosTheta + y*sinTheta;
	var offY = y*cosTheta - x*sinTheta;
	
	this.camAxisX = this.centerX - x;
	this.camAxisY = this.centerY - y;
	this.camera.x = this.centerX - offX;
	this.camera.y = this.centerY - offY;
	this.camera.depth = z;
};

VC.prototype.getPosition = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camAxisX;
	loc['y'] = this.centerY - this.camAxisY;
	loc['z'] = this.camera.depth;
	return loc;
};

VC.prototype.resetPosition = function() {
	this.setPosition(0, 0);
};

VC.prototype.zoomBy = function(zoom) {
	this.setZoom( (this.getZoom() * zoom) / 100);
};

VC.prototype.setZoom = function(zoom) {
	const MAX_zoom = 10000;
	const MIN_zoom = 1;
	if(zoom > MAX_zoom)
	zoom = MAX_zoom;
	else if(zoom < MIN_zoom)
	zoom = MIN_zoom;
	this.camera.scaleX = 100 / zoom;
	this.camera.scaleY = 100 / zoom;
};

VC.prototype.getZoom = function() {
	return 100 / this.camera.scaleX;
};

VC.prototype.resetZoom = function() {
	this.setZoom(100);
};

VC.prototype.rotateBy = function(angle) {
	this.setRotation( this.getRotation() + angle );
};

VC.prototype.setRotation = function(angle) {
	const MAX_angle = 180;
	const MIN_angle = -179;
	if(angle > MAX_angle)
		angle = MAX_angle;
	else if(angle < MIN_angle)
		angle = MIN_angle;
	this.camera.rotation = -angle;
};

VC.prototype.getRotation = function() {
	return -this.camera.rotation;
};

VC.prototype.resetRotation = function() {
	this.setRotation(0);
};

VC.prototype.reset = function() {
	this.resetPosition();
	this.resetZoom();
	this.resetRotation();
	this.unpinCamera();
};
VC.prototype.setZDepth = function(zDepth) {
	const MAX_zDepth = 10000;
	const MIN_zDepth = -5000;
	if(zDepth > MAX_zDepth)
		zDepth = MAX_zDepth;
	else if(zDepth < MIN_zDepth)
		zDepth = MIN_zDepth;
	this.camera.depth = zDepth;
}
VC.prototype.getZDepth = function() {
	return this.camera.depth;
}
VC.prototype.resetZDepth = function() {
	this.camera.depth = 0;
}

VC.prototype.pinCameraToObject = function(obj, offsetX, offsetY, offsetZ) {

	offsetX = typeof offsetX !== 'undefined' ? offsetX : 0;

	offsetY = typeof offsetY !== 'undefined' ? offsetY : 0;

	offsetZ = typeof offsetZ !== 'undefined' ? offsetZ : 0;
	if(obj === undefined)
		return;
	this.camera.pinToObject = obj;
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
};

VC.prototype.setPinOffset = function(offsetX, offsetY, offsetZ) {
	if(this.camera.pinToObject != undefined) {
	this.camera.pinToObject.pinOffsetX = offsetX;
	this.camera.pinToObject.pinOffsetY = offsetY;
	this.camera.pinToObject.pinOffsetZ = offsetZ;
	}
};

VC.prototype.unpinCamera = function() {
	this.camera.pinToObject = undefined;
};
VC.prototype.___getCamPosition___ = function() {
	var loc = new Object();
	loc['x'] = this.centerX - this.camera.x;
	loc['y'] = this.centerY - this.camera.y;
	loc['z'] = this.depth;
	return loc;
};

this.getCamera = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	if(_camera[timeline] == undefined)
	_camera[timeline] = new VC(timeline);
	return _camera[timeline];
}

this.getCameraAsMovieClip = function(timeline) {
	timeline = typeof timeline !== 'undefined' ? timeline : null;
	if(timeline === null) timeline = exportRoot;
	return this.getCamera(timeline).camera;
}
}


// Layer depth API : 

an.Layer = new function() {
	this.getLayerZDepth = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth; else 0;";
		return eval(script);
	}
	this.setLayerZDepth = function(timeline, layerName, zDepth)
	{
		const MAX_zDepth = 10000;
		const MIN_zDepth = -5000;
		if(zDepth > MAX_zDepth)
			zDepth = MAX_zDepth;
		else if(zDepth < MIN_zDepth)
			zDepth = MIN_zDepth;
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline." + layerName + ".depth = " + zDepth + ";";
		eval(script);
	}
	this.removeLayer = function(timeline, layerName)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		var script = "if(timeline." + layerName + ") timeline.removeChild(timeline." + layerName + ");";
		eval(script);
	}
	this.addNewLayer = function(timeline, layerName, zDepth)
	{
		if(layerName === "Camera")
		layerName = "___camera___instance";
		zDepth = typeof zDepth !== 'undefined' ? zDepth : 0;
		var layer = new createjs.MovieClip();
		layer.name = layerName;
		layer.depth = zDepth;
		layer.layerIndex = 0;
		timeline.addChild(layer);
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;