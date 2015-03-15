(function () { "use strict";
function $extend(from, fields) {
	function Inherit() {} Inherit.prototype = from; var proto = new Inherit();
	for (var name in fields) proto[name] = fields[name];
	if( fields.toString !== Object.prototype.toString ) proto.toString = fields.toString;
	return proto;
}
var thx = {};
thx.color = {};
thx.color._HSL = {};
thx.color._HSL.HSL_Impl_ = function() { };
thx.color._HSL.HSL_Impl_.__name__ = true;
thx.color._HSL.HSL_Impl_.create = function(hue,saturation,lightness) {
	var channels = [thx.core.Floats.wrapCircular(hue,360),saturation < 0?0:saturation > 1?1:saturation,lightness < 0?0:lightness > 1?1:lightness];
	return channels;
};
thx.color._HSL.HSL_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._HSL.HSL_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._HSL.HSL_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "hsl":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._HSL.HSL_Impl_._new = function(channels) {
	return channels;
};
thx.color._HSL.HSL_Impl_.analogous = function(this1,spread) {
	if(spread == null) spread = 30.0;
	var _0 = thx.color._HSL.HSL_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSL.HSL_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSL.HSL_Impl_.complement = function(this1) {
	return thx.color._HSL.HSL_Impl_.rotate(this1,180);
};
thx.color._HSL.HSL_Impl_.darker = function(this1,t) {
	var channels = [this1[0],this1[1],thx.core.Floats.interpolate(t,this1[2],0)];
	return channels;
};
thx.color._HSL.HSL_Impl_.lighter = function(this1,t) {
	var channels = [this1[0],this1[1],thx.core.Floats.interpolate(t,this1[2],1)];
	return channels;
};
thx.color._HSL.HSL_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolateAngle(t,this1[0],other[0],360),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._HSL.HSL_Impl_.rotate = function(this1,angle) {
	return thx.color._HSL.HSL_Impl_.withHue(this1,this1[0] + angle);
};
thx.color._HSL.HSL_Impl_.split = function(this1,spread) {
	if(spread == null) spread = 144.0;
	var _0 = thx.color._HSL.HSL_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSL.HSL_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSL.HSL_Impl_.square = function(this1) {
	return thx.color._HSL.HSL_Impl_.tetrad(this1,90);
};
thx.color._HSL.HSL_Impl_.tetrad = function(this1,angle) {
	var _0 = thx.color._HSL.HSL_Impl_.rotate(this1,0);
	var _1 = thx.color._HSL.HSL_Impl_.rotate(this1,angle);
	var _2 = thx.color._HSL.HSL_Impl_.rotate(this1,180);
	var _3 = thx.color._HSL.HSL_Impl_.rotate(this1,180 + angle);
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx.color._HSL.HSL_Impl_.triad = function(this1) {
	var _0 = thx.color._HSL.HSL_Impl_.rotate(this1,-120);
	var _1 = thx.color._HSL.HSL_Impl_.rotate(this1,0);
	var _2 = thx.color._HSL.HSL_Impl_.rotate(this1,120);
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx.color._HSL.HSL_Impl_.withAlpha = function(this1,alpha) {
	var channels = this1.concat([alpha < 0?0:alpha > 1?1:alpha]);
	return channels;
};
thx.color._HSL.HSL_Impl_.withHue = function(this1,newhue) {
	var channels = [thx.core.Floats.wrapCircular(newhue,360),this1[1],this1[2]];
	return channels;
};
thx.color._HSL.HSL_Impl_.withLightness = function(this1,newlightness) {
	return [this1[0],this1[1],newlightness < 0?0:newlightness > 1?1:newlightness];
};
thx.color._HSL.HSL_Impl_.withSaturation = function(this1,newsaturation) {
	return [this1[0],newsaturation < 0?0:newsaturation > 1?1:newsaturation,this1[2]];
};
thx.color._HSL.HSL_Impl_.toCSS3 = function(this1) {
	return thx.color._HSL.HSL_Impl_.toString(this1);
};
thx.color._HSL.HSL_Impl_.toString = function(this1) {
	return "hsl(" + this1[0] + "," + this1[1] * 100 + "%," + this1[2] * 100 + "%)";
};
thx.color._HSL.HSL_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._HSL.HSL_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._HSL.HSL_Impl_.toRGBXA(this1));
};
thx.color._HSL.HSL_Impl_.toRGBX = function(this1) {
	var channels = [thx.color._HSL.HSL_Impl_._c(this1[0] + 120,this1[1],this1[2]),thx.color._HSL.HSL_Impl_._c(this1[0],this1[1],this1[2]),thx.color._HSL.HSL_Impl_._c(this1[0] - 120,this1[1],this1[2])];
	return channels;
};
thx.color._HSL.HSL_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toHSLA = function(this1) {
	return thx.color._HSL.HSL_Impl_.withAlpha(this1,1.0);
};
thx.color._HSL.HSL_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._HSL.HSL_Impl_.toRGBX(this1));
};
thx.color._HSL.HSL_Impl_.get_hue = function(this1) {
	return this1[0];
};
thx.color._HSL.HSL_Impl_.get_saturation = function(this1) {
	return this1[1];
};
thx.color._HSL.HSL_Impl_.get_lightness = function(this1) {
	return this1[2];
};
thx.color._HSL.HSL_Impl_._c = function(d,s,l) {
	var m2;
	if(l <= 0.5) m2 = l * (1 + s); else m2 = l + s - l * s;
	var m1 = 2 * l - m2;
	d = thx.core.Floats.wrapCircular(d,360);
	if(d < 60) return m1 + (m2 - m1) * d / 60; else if(d < 180) return m2; else if(d < 240) return m1 + (m2 - m1) * (240 - d) / 60; else return m1;
};
var EReg = function(r,opt) {
	opt = opt.split("u").join("");
	this.r = new RegExp(r,opt);
};
EReg.__name__ = true;
EReg.prototype = {
	match: function(s) {
		if(this.r.global) this.r.lastIndex = 0;
		this.r.m = this.r.exec(s);
		this.r.s = s;
		return this.r.m != null;
	}
	,matched: function(n) {
		if(this.r.m != null && n >= 0 && n < this.r.m.length) return this.r.m[n]; else throw "EReg::matched";
	}
	,matchedPos: function() {
		if(this.r.m == null) throw "No string matched";
		return { pos : this.r.m.index, len : this.r.m[0].length};
	}
	,matchSub: function(s,pos,len) {
		if(len == null) len = -1;
		if(this.r.global) {
			this.r.lastIndex = pos;
			this.r.m = this.r.exec(len < 0?s:HxOverrides.substr(s,0,pos + len));
			var b = this.r.m != null;
			if(b) this.r.s = s;
			return b;
		} else {
			var b1 = this.match(len < 0?HxOverrides.substr(s,pos,null):HxOverrides.substr(s,pos,len));
			if(b1) {
				this.r.s = s;
				this.r.m.index += pos;
			}
			return b1;
		}
	}
	,split: function(s) {
		var d = "#__delim__#";
		return s.replace(this.r,d).split(d);
	}
	,replace: function(s,by) {
		return s.replace(this.r,by);
	}
	,map: function(s,f) {
		var offset = 0;
		var buf = new StringBuf();
		do {
			if(offset >= s.length) break; else if(!this.matchSub(s,offset)) {
				buf.add(HxOverrides.substr(s,offset,null));
				break;
			}
			var p = this.matchedPos();
			buf.add(HxOverrides.substr(s,offset,p.pos - offset));
			buf.add(f(this));
			if(p.len == 0) {
				buf.add(HxOverrides.substr(s,p.pos,1));
				offset = p.pos + 1;
			} else offset = p.pos + p.len;
		} while(this.r.global);
		if(!this.r.global && offset > 0 && offset < s.length) buf.add(HxOverrides.substr(s,offset,null));
		return buf.b;
	}
	,__class__: EReg
};
thx.core = {};
thx.core.Floats = function() { };
thx.core.Floats.__name__ = true;
thx.core.Floats.angleDifference = function(a,b,turn) {
	if(turn == null) turn = 360;
	var r = (b - a) % turn;
	if(r < 0) r += turn;
	if(r > turn / 2) r -= turn;
	return r;
};
thx.core.Floats.ceilTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.ceil(f * p) / p;
};
thx.core.Floats.canParse = function(s) {
	return thx.core.Floats.pattern_parse.match(s);
};
thx.core.Floats.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
thx.core.Floats.clampSym = function(v,max) {
	return thx.core.Floats.clamp(v,-max,max);
};
thx.core.Floats.compare = function(a,b) {
	if(a < b) return -1; else if(b > a) return 1; else return 0;
};
thx.core.Floats.floorTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.floor(f * p) / p;
};
thx.core.Floats.interpolate = function(f,a,b) {
	return (b - a) * f + a;
};
thx.core.Floats.interpolateAngle = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	return thx.core.Floats.wrapCircular(thx.core.Floats.interpolate(f,a,a + thx.core.Floats.angleDifference(a,b,turn)),turn);
};
thx.core.Floats.interpolateAngleWidest = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	return thx.core.Floats.wrapCircular(thx.core.Floats.interpolateAngle(f,a,b,turn) - turn / 2,turn);
};
thx.core.Floats.interpolateAngleCW = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	a = thx.core.Floats.wrapCircular(a,turn);
	b = thx.core.Floats.wrapCircular(b,turn);
	if(b < a) b += turn;
	return thx.core.Floats.wrapCircular(thx.core.Floats.interpolate(f,a,b),turn);
};
thx.core.Floats.interpolateAngleCCW = function(f,a,b,turn) {
	if(turn == null) turn = 360;
	a = thx.core.Floats.wrapCircular(a,turn);
	b = thx.core.Floats.wrapCircular(b,turn);
	if(b > a) b -= turn;
	return thx.core.Floats.wrapCircular(thx.core.Floats.interpolate(f,a,b),turn);
};
thx.core.Floats.nearEquals = function(a,b) {
	return Math.abs(a - b) <= 10e-10;
};
thx.core.Floats.nearZero = function(n) {
	return Math.abs(n) <= 10e-10;
};
thx.core.Floats.normalize = function(v) {
	if(v < 0) return 0; else if(v > 1) return 1; else return v;
};
thx.core.Floats.parse = function(s) {
	if(s.substring(0,1) == "+") s = s.substring(1);
	return Std.parseFloat(s);
};
thx.core.Floats.root = function(base,index) {
	return Math.pow(base,1 / index);
};
thx.core.Floats.roundTo = function(f,decimals) {
	var p = Math.pow(10,decimals);
	return Math.round(f * p) / p;
};
thx.core.Floats.sign = function(value) {
	if(value < 0) return -1; else return 1;
};
thx.core.Floats.wrap = function(v,min,max) {
	var range = max - min + 1;
	if(v < min) v += range * ((min - v) / range + 1);
	return min + (v - min) % range;
};
thx.core.Floats.wrapCircular = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
};
var Config = function() { };
Config.__name__ = true;
var HxOverrides = function() { };
HxOverrides.__name__ = true;
HxOverrides.cca = function(s,index) {
	var x = s.charCodeAt(index);
	if(x != x) return undefined;
	return x;
};
HxOverrides.substr = function(s,pos,len) {
	if(pos != null && pos != 0 && len != null && len < 0) return "";
	if(len == null) len = s.length;
	if(pos < 0) {
		pos = s.length + pos;
		if(pos < 0) pos = 0;
	} else if(len < 0) len = s.length + len - pos;
	return s.substr(pos,len);
};
HxOverrides.indexOf = function(a,obj,i) {
	var len = a.length;
	if(i < 0) {
		i += len;
		if(i < 0) i = 0;
	}
	while(i < len) {
		if(a[i] === obj) return i;
		i++;
	}
	return -1;
};
HxOverrides.iter = function(a) {
	return { cur : 0, arr : a, hasNext : function() {
		return this.cur < this.arr.length;
	}, next : function() {
		return this.arr[this.cur++];
	}};
};
var Main = function() { };
Main.__name__ = true;
Main.main = function() {
	var stage = new PIXI.Container();
	var renderer = PIXI.autoDetectRenderer(Config.width,Config.height,{ antialias : true, resolution : 1, transparent : false});
	window.document.body.appendChild(renderer.view);
	var game = new wargame.Game(stage,renderer);
	game.start();
};
var IMap = function() { };
IMap.__name__ = true;
Math.__name__ = true;
var Std = function() { };
Std.__name__ = true;
Std.string = function(s) {
	return js.Boot.__string_rec(s,"");
};
Std.parseInt = function(x) {
	var v = parseInt(x,10);
	if(v == 0 && (HxOverrides.cca(x,1) == 120 || HxOverrides.cca(x,1) == 88)) v = parseInt(x);
	if(isNaN(v)) return null;
	return v;
};
Std.parseFloat = function(x) {
	return parseFloat(x);
};
Std.random = function(x) {
	if(x <= 0) return 0; else return Math.floor(Math.random() * x);
};
var StringBuf = function() {
	this.b = "";
};
StringBuf.__name__ = true;
StringBuf.prototype = {
	add: function(x) {
		this.b += Std.string(x);
	}
	,__class__: StringBuf
};
var StringTools = function() { };
StringTools.__name__ = true;
StringTools.startsWith = function(s,start) {
	return s.length >= start.length && HxOverrides.substr(s,0,start.length) == start;
};
StringTools.endsWith = function(s,end) {
	var elen = end.length;
	var slen = s.length;
	return slen >= elen && HxOverrides.substr(s,slen - elen,elen) == end;
};
StringTools.isSpace = function(s,pos) {
	var c = HxOverrides.cca(s,pos);
	return c > 8 && c < 14 || c == 32;
};
StringTools.ltrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,r)) r++;
	if(r > 0) return HxOverrides.substr(s,r,l - r); else return s;
};
StringTools.rtrim = function(s) {
	var l = s.length;
	var r = 0;
	while(r < l && StringTools.isSpace(s,l - r - 1)) r++;
	if(r > 0) return HxOverrides.substr(s,0,l - r); else return s;
};
StringTools.trim = function(s) {
	return StringTools.ltrim(StringTools.rtrim(s));
};
StringTools.replace = function(s,sub,by) {
	return s.split(sub).join(by);
};
StringTools.hex = function(n,digits) {
	var s = "";
	var hexChars = "0123456789ABCDEF";
	do {
		s = hexChars.charAt(n & 15) + s;
		n >>>= 4;
	} while(n > 0);
	if(digits != null) while(s.length < digits) s = "0" + s;
	return s;
};
var haxe = {};
haxe.StackItem = { __ename__ : true, __constructs__ : ["CFunction","Module","FilePos","Method","LocalFunction"] };
haxe.StackItem.CFunction = ["CFunction",0];
haxe.StackItem.CFunction.__enum__ = haxe.StackItem;
haxe.StackItem.Module = function(m) { var $x = ["Module",1,m]; $x.__enum__ = haxe.StackItem; return $x; };
haxe.StackItem.FilePos = function(s,file,line) { var $x = ["FilePos",2,s,file,line]; $x.__enum__ = haxe.StackItem; return $x; };
haxe.StackItem.Method = function(classname,method) { var $x = ["Method",3,classname,method]; $x.__enum__ = haxe.StackItem; return $x; };
haxe.StackItem.LocalFunction = function(v) { var $x = ["LocalFunction",4,v]; $x.__enum__ = haxe.StackItem; return $x; };
haxe.CallStack = function() { };
haxe.CallStack.__name__ = true;
haxe.CallStack.callStack = function() {
	var oldValue = Error.prepareStackTrace;
	Error.prepareStackTrace = function(error,callsites) {
		var stack = [];
		var _g = 0;
		while(_g < callsites.length) {
			var site = callsites[_g];
			++_g;
			var method = null;
			var fullName = site.getFunctionName();
			if(fullName != null) {
				var idx = fullName.lastIndexOf(".");
				if(idx >= 0) {
					var className = HxOverrides.substr(fullName,0,idx);
					var methodName = HxOverrides.substr(fullName,idx + 1,null);
					method = haxe.StackItem.Method(className,methodName);
				}
			}
			stack.push(haxe.StackItem.FilePos(method,site.getFileName(),site.getLineNumber()));
		}
		return stack;
	};
	var a = haxe.CallStack.makeStack(new Error().stack);
	a.shift();
	Error.prepareStackTrace = oldValue;
	return a;
};
haxe.CallStack.exceptionStack = function() {
	return [];
};
haxe.CallStack.toString = function(stack) {
	var b = new StringBuf();
	var _g = 0;
	while(_g < stack.length) {
		var s = stack[_g];
		++_g;
		b.b += "\nCalled from ";
		haxe.CallStack.itemToString(b,s);
	}
	return b.b;
};
haxe.CallStack.itemToString = function(b,s) {
	switch(s[1]) {
	case 0:
		b.b += "a C function";
		break;
	case 1:
		var m = s[2];
		b.b += "module ";
		if(m == null) b.b += "null"; else b.b += "" + m;
		break;
	case 2:
		var line = s[4];
		var file = s[3];
		var s1 = s[2];
		if(s1 != null) {
			haxe.CallStack.itemToString(b,s1);
			b.b += " (";
		}
		if(file == null) b.b += "null"; else b.b += "" + file;
		b.b += " line ";
		if(line == null) b.b += "null"; else b.b += "" + line;
		if(s1 != null) b.b += ")";
		break;
	case 3:
		var meth = s[3];
		var cname = s[2];
		if(cname == null) b.b += "null"; else b.b += "" + cname;
		b.b += ".";
		if(meth == null) b.b += "null"; else b.b += "" + meth;
		break;
	case 4:
		var n = s[2];
		b.b += "local function #";
		if(n == null) b.b += "null"; else b.b += "" + n;
		break;
	}
};
haxe.CallStack.makeStack = function(s) {
	if(typeof(s) == "string") {
		var stack = s.split("\n");
		var m = [];
		var _g = 0;
		while(_g < stack.length) {
			var line = stack[_g];
			++_g;
			m.push(haxe.StackItem.Module(line));
		}
		return m;
	} else return s;
};
haxe.ds = {};
haxe.ds.StringMap = function() {
	this.h = { };
};
haxe.ds.StringMap.__name__ = true;
haxe.ds.StringMap.__interfaces__ = [IMap];
haxe.ds.StringMap.prototype = {
	set: function(key,value) {
		this.h["$" + key] = value;
	}
	,get: function(key) {
		return this.h["$" + key];
	}
	,exists: function(key) {
		return this.h.hasOwnProperty("$" + key);
	}
	,__class__: haxe.ds.StringMap
};
var js = {};
js.Boot = function() { };
js.Boot.__name__ = true;
js.Boot.getClass = function(o) {
	if((o instanceof Array) && o.__enum__ == null) return Array; else return o.__class__;
};
js.Boot.__string_rec = function(o,s) {
	if(o == null) return "null";
	if(s.length >= 5) return "<...>";
	var t = typeof(o);
	if(t == "function" && (o.__name__ || o.__ename__)) t = "object";
	switch(t) {
	case "object":
		if(o instanceof Array) {
			if(o.__enum__) {
				if(o.length == 2) return o[0];
				var str = o[0] + "(";
				s += "\t";
				var _g1 = 2;
				var _g = o.length;
				while(_g1 < _g) {
					var i = _g1++;
					if(i != 2) str += "," + js.Boot.__string_rec(o[i],s); else str += js.Boot.__string_rec(o[i],s);
				}
				return str + ")";
			}
			var l = o.length;
			var i1;
			var str1 = "[";
			s += "\t";
			var _g2 = 0;
			while(_g2 < l) {
				var i2 = _g2++;
				str1 += (i2 > 0?",":"") + js.Boot.__string_rec(o[i2],s);
			}
			str1 += "]";
			return str1;
		}
		var tostr;
		try {
			tostr = o.toString;
		} catch( e ) {
			return "???";
		}
		if(tostr != null && tostr != Object.toString) {
			var s2 = o.toString();
			if(s2 != "[object Object]") return s2;
		}
		var k = null;
		var str2 = "{\n";
		s += "\t";
		var hasp = o.hasOwnProperty != null;
		for( var k in o ) {
		if(hasp && !o.hasOwnProperty(k)) {
			continue;
		}
		if(k == "prototype" || k == "__class__" || k == "__super__" || k == "__interfaces__" || k == "__properties__") {
			continue;
		}
		if(str2.length != 2) str2 += ", \n";
		str2 += s + k + " : " + js.Boot.__string_rec(o[k],s);
		}
		s = s.substring(1);
		str2 += "\n" + s + "}";
		return str2;
	case "function":
		return "<function>";
	case "string":
		return o;
	default:
		return String(o);
	}
};
js.Boot.__interfLoop = function(cc,cl) {
	if(cc == null) return false;
	if(cc == cl) return true;
	var intf = cc.__interfaces__;
	if(intf != null) {
		var _g1 = 0;
		var _g = intf.length;
		while(_g1 < _g) {
			var i = _g1++;
			var i1 = intf[i];
			if(i1 == cl || js.Boot.__interfLoop(i1,cl)) return true;
		}
	}
	return js.Boot.__interfLoop(cc.__super__,cl);
};
js.Boot.__instanceof = function(o,cl) {
	if(cl == null) return false;
	switch(cl) {
	case Int:
		return (o|0) === o;
	case Float:
		return typeof(o) == "number";
	case Bool:
		return typeof(o) == "boolean";
	case String:
		return typeof(o) == "string";
	case Array:
		return (o instanceof Array) && o.__enum__ == null;
	case Dynamic:
		return true;
	default:
		if(o != null) {
			if(typeof(cl) == "function") {
				if(o instanceof cl) return true;
				if(js.Boot.__interfLoop(js.Boot.getClass(o),cl)) return true;
			}
		} else return false;
		if(cl == Class && o.__name__ != null) return true;
		if(cl == Enum && o.__ename__ != null) return true;
		return o.__enum__ == cl;
	}
};
thx.color._CIELCh = {};
thx.color._CIELCh.CIELCh_Impl_ = function() { };
thx.color._CIELCh.CIELCh_Impl_.__name__ = true;
thx.color._CIELCh.CIELCh_Impl_.create = function(lightness,chroma,hue) {
	var channels = [lightness,chroma,thx.core.Floats.wrapCircular(hue,360)];
	return channels;
};
thx.color._CIELCh.CIELCh_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._CIELCh.CIELCh_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._CIELCh.CIELCh_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "cielch":
			return thx.color._CIELCh.CIELCh_Impl_.fromFloats(thx.color.parse.ColorParser.getFloatChannels(info.channels,3,false));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._CIELCh.CIELCh_Impl_._new = function(channels) {
	return channels;
};
thx.color._CIELCh.CIELCh_Impl_.analogous = function(this1,spread) {
	if(spread == null) spread = 30.0;
	var _0 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,-spread);
	var _1 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._CIELCh.CIELCh_Impl_.complement = function(this1) {
	return thx.color._CIELCh.CIELCh_Impl_.rotate(this1,180);
};
thx.color._CIELCh.CIELCh_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolateAngle(t,this1[2],other[2],360)];
	return channels;
};
thx.color._CIELCh.CIELCh_Impl_.rotate = function(this1,angle) {
	return thx.color._CIELCh.CIELCh_Impl_.withHue(this1,this1[2] + angle);
};
thx.color._CIELCh.CIELCh_Impl_.split = function(this1,spread) {
	if(spread == null) spread = 144.0;
	var _0 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,-spread);
	var _1 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._CIELCh.CIELCh_Impl_.square = function(this1) {
	return thx.color._CIELCh.CIELCh_Impl_.tetrad(this1,90);
};
thx.color._CIELCh.CIELCh_Impl_.tetrad = function(this1,angle) {
	var _0 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,0);
	var _1 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,angle);
	var _2 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,180);
	var _3 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,180 + angle);
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx.color._CIELCh.CIELCh_Impl_.triad = function(this1) {
	var _0 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,-120);
	var _1 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,0);
	var _2 = thx.color._CIELCh.CIELCh_Impl_.rotate(this1,120);
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx.color._CIELCh.CIELCh_Impl_.withLightness = function(this1,newlightness) {
	return [newlightness,this1[1],this1[2]];
};
thx.color._CIELCh.CIELCh_Impl_.withChroma = function(this1,newchroma) {
	return [this1[0],newchroma,this1[2]];
};
thx.color._CIELCh.CIELCh_Impl_.withHue = function(this1,newhue) {
	var channels = [this1[0],this1[1],thx.core.Floats.wrapCircular(newhue,360)];
	return channels;
};
thx.color._CIELCh.CIELCh_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._CIELCh.CIELCh_Impl_.toString = function(this1) {
	return "CIELCh(" + this1[0] + "," + this1[1] + "," + this1[2] + ")";
};
thx.color._CIELCh.CIELCh_Impl_.toCIELab = function(this1) {
	var hradi = this1[2] * (Math.PI / 180);
	var a = Math.cos(hradi) * this1[1];
	var b = Math.sin(hradi) * this1[1];
	return [this1[0],a,b];
};
thx.color._CIELCh.CIELCh_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._CIELCh.CIELCh_Impl_.toRGBXA(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toRGBX = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toRGBX(thx.color._CIELCh.CIELCh_Impl_.toCIELab(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._CIELCh.CIELCh_Impl_.toRGBX(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toXYZ = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toXYZ(thx.color._CIELCh.CIELCh_Impl_.toCIELab(this1));
};
thx.color._CIELCh.CIELCh_Impl_.toYxy = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toYxy(thx.color._CIELCh.CIELCh_Impl_.toCIELab(this1));
};
thx.color._CIELCh.CIELCh_Impl_.get_lightness = function(this1) {
	return this1[0];
};
thx.color._CIELCh.CIELCh_Impl_.get_chroma = function(this1) {
	return this1[1];
};
thx.color._CIELCh.CIELCh_Impl_.get_hue = function(this1) {
	return this1[2];
};
thx.color._CIELab = {};
thx.color._CIELab.CIELab_Impl_ = function() { };
thx.color._CIELab.CIELab_Impl_.__name__ = true;
thx.color._CIELab.CIELab_Impl_.create = function(l,a,b) {
	return [l,a,b];
};
thx.color._CIELab.CIELab_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._CIELab.CIELab_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._CIELab.CIELab_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "cielab":
			return thx.color._CIELab.CIELab_Impl_.fromFloats(thx.color.parse.ColorParser.getFloatChannels(info.channels,3,false));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._CIELab.CIELab_Impl_._new = function(channels) {
	return channels;
};
thx.color._CIELab.CIELab_Impl_.distance = function(this1,other) {
	return (this1[0] - other[0]) * (this1[0] - other[0]) + (this1[1] - other[1]) * (this1[1] - other[1]) + (this1[2] - other[2]) * (this1[2] - other[2]);
};
thx.color._CIELab.CIELab_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._CIELab.CIELab_Impl_.darker = function(this1,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],0),this1[1],this1[2]];
	return channels;
};
thx.color._CIELab.CIELab_Impl_.lighter = function(this1,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],100),this1[1],this1[2]];
	return channels;
};
thx.color._CIELab.CIELab_Impl_.match = function(this1,palette) {
	var it = palette;
	if(null == it) throw new thx.core.error.NullArgument("Iterable argument \"this\" cannot be null",{ fileName : "NullArgument.hx", lineNumber : 73, className : "thx.color._CIELab.CIELab_Impl_", methodName : "match"}); else if(!$iterator(it)().hasNext()) throw new thx.core.error.NullArgument("Iterable argument \"this\" cannot be empty",{ fileName : "NullArgument.hx", lineNumber : 75, className : "thx.color._CIELab.CIELab_Impl_", methodName : "match"});
	var dist = Math.POSITIVE_INFINITY;
	var closest = null;
	var $it0 = $iterator(palette)();
	while( $it0.hasNext() ) {
		var color = $it0.next();
		var ndist = thx.color._CIELab.CIELab_Impl_.distance(this1,color);
		if(ndist < dist) {
			dist = ndist;
			closest = color;
		}
	}
	return closest;
};
thx.color._CIELab.CIELab_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._CIELab.CIELab_Impl_.withLightness = function(this1,lightness) {
	return [lightness,this1[1],this1[2]];
};
thx.color._CIELab.CIELab_Impl_.withA = function(this1,newa) {
	return [this1[0],newa,this1[2]];
};
thx.color._CIELab.CIELab_Impl_.withB = function(this1,newb) {
	return [this1[0],this1[1],newb];
};
thx.color._CIELab.CIELab_Impl_.toString = function(this1) {
	return "CIELab(" + this1[0] + "," + this1[1] + "," + this1[2] + ")";
};
thx.color._CIELab.CIELab_Impl_.toCIELCh = function(this1) {
	var h = thx.core.Floats.wrapCircular(Math.atan2(this1[2],this1[1]) * 180 / Math.PI,360);
	var c = Math.sqrt(this1[1] * this1[1] + this1[2] * this1[2]);
	return [this1[0],c,h];
};
thx.color._CIELab.CIELab_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._CIELab.CIELab_Impl_.toRGBXA(this1));
};
thx.color._CIELab.CIELab_Impl_.toRGBX = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toRGBX(thx.color._CIELab.CIELab_Impl_.toXYZ(this1));
};
thx.color._CIELab.CIELab_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._CIELab.CIELab_Impl_.toRGBX(this1));
};
thx.color._CIELab.CIELab_Impl_.toXYZ = function(this1) {
	var y = (this1[0] + 16) / 116;
	var x = this1[1] / 500 + y;
	var z = y - this1[2] / 200;
	var p;
	p = Math.pow(y,3);
	if(p > 0.008856) y = p; else y = (y - 0.137931034482758619) / 7.787;
	p = Math.pow(x,3);
	if(p > 0.008856) x = p; else x = (x - 0.137931034482758619) / 7.787;
	p = Math.pow(z,3);
	if(p > 0.008856) z = p; else z = (z - 0.137931034482758619) / 7.787;
	return [95.047 * x,100 * y,108.883 * z];
};
thx.color._CIELab.CIELab_Impl_.toYxy = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toYxy(thx.color._CIELab.CIELab_Impl_.toXYZ(this1));
};
thx.color._CIELab.CIELab_Impl_.get_l = function(this1) {
	return this1[0];
};
thx.color._CIELab.CIELab_Impl_.get_a = function(this1) {
	return this1[1];
};
thx.color._CIELab.CIELab_Impl_.get_b = function(this1) {
	return this1[2];
};
thx.color._CMY = {};
thx.color._CMY.CMY_Impl_ = function() { };
thx.color._CMY.CMY_Impl_.__name__ = true;
thx.color._CMY.CMY_Impl_.create = function(cyan,magenta,yellow) {
	return [cyan < 0?0:cyan > 1?1:cyan,magenta < 0?0:magenta > 1?1:magenta,yellow < 0?0:yellow > 1?1:yellow];
};
thx.color._CMY.CMY_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._CMY.CMY_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._CMY.CMY_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "cmy":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._CMY.CMY_Impl_._new = function(channels) {
	return channels;
};
thx.color._CMY.CMY_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._CMY.CMY_Impl_.withCyan = function(this1,newcyan) {
	return [newcyan < 0?0:newcyan > 1?1:newcyan,this1[1],this1[2]];
};
thx.color._CMY.CMY_Impl_.withMagenta = function(this1,newmagenta) {
	return [this1[0],newmagenta < 0?0:newmagenta > 1?1:newmagenta,this1[2]];
};
thx.color._CMY.CMY_Impl_.withYellow = function(this1,newyellow) {
	return [this1[0],this1[1],newyellow < 0?0:newyellow > 1?1:newyellow];
};
thx.color._CMY.CMY_Impl_.toString = function(this1) {
	return "cmy(" + this1[0] + "," + this1[1] + "," + this1[2] + ")";
};
thx.color._CMY.CMY_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._CMY.CMY_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toCMYK = function(this1) {
	var k = Math.min(Math.min(this1[0],this1[1]),this1[2]);
	if(k == 1) return [0,0,0,1]; else return [(this1[0] - k) / (1 - k),(this1[1] - k) / (1 - k),(this1[2] - k) / (1 - k),k];
};
thx.color._CMY.CMY_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._CMY.CMY_Impl_.toRGBXA(this1));
};
thx.color._CMY.CMY_Impl_.toRGBX = function(this1) {
	return [1 - this1[0],1 - this1[1],1 - this1[2]];
};
thx.color._CMY.CMY_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._CMY.CMY_Impl_.toRGBX(this1));
};
thx.color._CMY.CMY_Impl_.get_cyan = function(this1) {
	return this1[0];
};
thx.color._CMY.CMY_Impl_.get_magenta = function(this1) {
	return this1[1];
};
thx.color._CMY.CMY_Impl_.get_yellow = function(this1) {
	return this1[2];
};
thx.color._CMYK = {};
thx.color._CMYK.CMYK_Impl_ = function() { };
thx.color._CMYK.CMYK_Impl_.__name__ = true;
thx.color._CMYK.CMYK_Impl_.create = function(cyan,magenta,yellow,black) {
	return [cyan < 0?0:cyan > 1?1:cyan,magenta < 0?0:magenta > 1?1:magenta,yellow < 0?0:yellow > 1?1:yellow,black < 0?0:black > 1?1:black];
};
thx.color._CMYK.CMYK_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,4);
	return thx.color._CMYK.CMYK_Impl_.create(arr[0],arr[1],arr[2],arr[3]);
};
thx.color._CMYK.CMYK_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "cmyk":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,4);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._CMYK.CMYK_Impl_._new = function(channels) {
	return channels;
};
thx.color._CMYK.CMYK_Impl_.darker = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],1)];
	return channels;
};
thx.color._CMYK.CMYK_Impl_.lighter = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],0)];
	return channels;
};
thx.color._CMYK.CMYK_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2]),thx.core.Floats.interpolate(t,this1[3],other[3])];
	return channels;
};
thx.color._CMYK.CMYK_Impl_.withCyan = function(this1,newcyan) {
	return [newcyan < 0?0:newcyan > 1?1:newcyan,this1[1],this1[2],this1[3]];
};
thx.color._CMYK.CMYK_Impl_.withMagenta = function(this1,newmagenta) {
	return [this1[0],newmagenta < 0?0:newmagenta > 1?1:newmagenta,this1[2],this1[3]];
};
thx.color._CMYK.CMYK_Impl_.withYellow = function(this1,newyellow) {
	return [this1[0],this1[1],newyellow < 0?0:newyellow > 1?1:newyellow,this1[3]];
};
thx.color._CMYK.CMYK_Impl_.withBlack = function(this1,newblack) {
	return [this1[0],this1[1],this1[2],newblack < 0?0:newblack > 1?1:newblack];
};
thx.color._CMYK.CMYK_Impl_.toString = function(this1) {
	return "cmyk(" + this1[0] + "," + this1[1] + "," + this1[2] + "," + this1[3] + ")";
};
thx.color._CMYK.CMYK_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10 && Math.abs(this1[3] - other[3]) <= 10e-10;
};
thx.color._CMYK.CMYK_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toCMY = function(this1) {
	return [this1[3] + (1 - this1[3]) * this1[0],this1[3] + (1 - this1[3]) * this1[1],this1[3] + (1 - this1[3]) * this1[2]];
};
thx.color._CMYK.CMYK_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._CMYK.CMYK_Impl_.toRGBXA(this1));
};
thx.color._CMYK.CMYK_Impl_.toRGBX = function(this1) {
	return [(1 - this1[3]) * (1 - this1[0]),(1 - this1[3]) * (1 - this1[1]),(1 - this1[3]) * (1 - this1[2])];
};
thx.color._CMYK.CMYK_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.get_cyan = function(this1) {
	return this1[0];
};
thx.color._CMYK.CMYK_Impl_.get_magenta = function(this1) {
	return this1[1];
};
thx.color._CMYK.CMYK_Impl_.get_yellow = function(this1) {
	return this1[2];
};
thx.color._CMYK.CMYK_Impl_.get_black = function(this1) {
	return this1[3];
};
thx.color._CMYK.CMYK_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._CMYK.CMYK_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._CMYK.CMYK_Impl_.toRGBX(this1));
};
thx.color._Grey = {};
thx.color._Grey.Grey_Impl_ = function() { };
thx.color._Grey.Grey_Impl_.__name__ = true;
thx.color._Grey.Grey_Impl_.create = function(v) {
	if(v < 0) return 0; else if(v > 1) return 1; else return v;
};
thx.color._Grey.Grey_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "grey":case "gray":
			var grey = thx.color.parse.ColorParser.getFloatChannels(info.channels,1)[0];
			return grey;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._Grey.Grey_Impl_._new = function(grey) {
	return grey;
};
thx.color._Grey.Grey_Impl_.contrast = function(this1) {
	if(this1 > 0.5) return thx.color._Grey.Grey_Impl_.black; else return thx.color._Grey.Grey_Impl_.white;
};
thx.color._Grey.Grey_Impl_.darker = function(this1,t) {
	var grey = thx.core.Floats.interpolate(t,this1,0);
	return grey;
};
thx.color._Grey.Grey_Impl_.lighter = function(this1,t) {
	var grey = thx.core.Floats.interpolate(t,this1,1);
	return grey;
};
thx.color._Grey.Grey_Impl_.interpolate = function(this1,other,t) {
	var grey = thx.core.Floats.interpolate(t,this1,other);
	return grey;
};
thx.color._Grey.Grey_Impl_.toString = function(this1) {
	return "grey(" + this1 * 100 + "%)";
};
thx.color._Grey.Grey_Impl_.equals = function(this1,other) {
	return Math.abs(this1 - other) <= 10e-10;
};
thx.color._Grey.Grey_Impl_.get_grey = function(this1) {
	return this1;
};
thx.color._Grey.Grey_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._Grey.Grey_Impl_.toRGBXA(this1));
};
thx.color._Grey.Grey_Impl_.toRGBX = function(this1) {
	return [this1,this1,this1];
};
thx.color._Grey.Grey_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._Grey.Grey_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._Grey.Grey_Impl_.toRGBX(this1));
};
thx.color._HSLA = {};
thx.color._HSLA.HSLA_Impl_ = function() { };
thx.color._HSLA.HSLA_Impl_.__name__ = true;
thx.color._HSLA.HSLA_Impl_.create = function(hue,saturation,lightness,alpha) {
	var channels = [thx.core.Floats.wrapCircular(hue,360),saturation < 0?0:saturation > 1?1:saturation,lightness < 0?0:lightness > 1?1:lightness,alpha < 0?0:alpha > 1?1:alpha];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,4);
	return thx.color._HSLA.HSLA_Impl_.create(arr[0],arr[1],arr[2],arr[3]);
};
thx.color._HSLA.HSLA_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "hsl":
			return thx.color._HSL.HSL_Impl_.toHSLA((function($this) {
				var $r;
				var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
				$r = channels;
				return $r;
			}(this)));
		case "hsla":
			var channels1 = thx.color.parse.ColorParser.getFloatChannels(info.channels,4);
			return channels1;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._HSLA.HSLA_Impl_._new = function(channels) {
	return channels;
};
thx.color._HSLA.HSLA_Impl_.analogous = function(this1,spread) {
	if(spread == null) spread = 30.0;
	var _0 = thx.color._HSLA.HSLA_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSLA.HSLA_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSLA.HSLA_Impl_.complement = function(this1) {
	return thx.color._HSLA.HSLA_Impl_.rotate(this1,180);
};
thx.color._HSLA.HSLA_Impl_.darker = function(this1,t) {
	var channels = [this1[0],this1[1],thx.core.Floats.interpolate(t,this1[2],0),this1[3]];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.lighter = function(this1,t) {
	var channels = [this1[0],this1[1],thx.core.Floats.interpolate(t,this1[2],1),this1[3]];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.transparent = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],0)];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.opaque = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],1)];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolateAngle(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2]),thx.core.Floats.interpolate(t,this1[3],other[3])];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.rotate = function(this1,angle) {
	return thx.color._HSLA.HSLA_Impl_.create(this1[0] + angle,this1[1],this1[2],this1[3]);
};
thx.color._HSLA.HSLA_Impl_.split = function(this1,spread) {
	if(spread == null) spread = 150.0;
	var _0 = thx.color._HSLA.HSLA_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSLA.HSLA_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSLA.HSLA_Impl_.withAlpha = function(this1,newalpha) {
	return [this1[0],this1[1],this1[2],newalpha < 0?0:newalpha > 1?1:newalpha];
};
thx.color._HSLA.HSLA_Impl_.withHue = function(this1,newhue) {
	var channels = [thx.core.Floats.wrapCircular(newhue,360),this1[1],this1[2],this1[3]];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.withLightness = function(this1,newlightness) {
	return [this1[0],this1[1],newlightness < 0?0:newlightness > 1?1:newlightness,this1[3]];
};
thx.color._HSLA.HSLA_Impl_.withSaturation = function(this1,newsaturation) {
	return [this1[0],newsaturation < 0?0:newsaturation > 1?1:newsaturation,this1[2],this1[3]];
};
thx.color._HSLA.HSLA_Impl_.toCSS3 = function(this1) {
	return thx.color._HSLA.HSLA_Impl_.toString(this1);
};
thx.color._HSLA.HSLA_Impl_.toString = function(this1) {
	return "hsla(" + this1[0] + "," + this1[1] * 100 + "%," + this1[2] * 100 + "%," + this1[3] + ")";
};
thx.color._HSLA.HSLA_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10 && Math.abs(this1[3] - other[3]) <= 10e-10;
};
thx.color._HSLA.HSLA_Impl_.toHSL = function(this1) {
	var channels = this1.slice(0,3);
	return channels;
};
thx.color._HSLA.HSLA_Impl_.toHSVA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toHSVA(thx.color._HSLA.HSLA_Impl_.toRGBXA(this1));
};
thx.color._HSLA.HSLA_Impl_.toRGB = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGB(thx.color._HSLA.HSLA_Impl_.toRGBXA(this1));
};
thx.color._HSLA.HSLA_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._HSLA.HSLA_Impl_.toRGBXA(this1));
};
thx.color._HSLA.HSLA_Impl_.toRGBXA = function(this1) {
	var channels = [thx.color._HSLA.HSLA_Impl_._c(this1[0] + 120,this1[1],this1[2]),thx.color._HSLA.HSLA_Impl_._c(this1[0],this1[1],this1[2]),thx.color._HSLA.HSLA_Impl_._c(this1[0] - 120,this1[1],this1[2]),this1[3]];
	return channels;
};
thx.color._HSLA.HSLA_Impl_.get_hue = function(this1) {
	return this1[0];
};
thx.color._HSLA.HSLA_Impl_.get_saturation = function(this1) {
	return this1[1];
};
thx.color._HSLA.HSLA_Impl_.get_lightness = function(this1) {
	return this1[2];
};
thx.color._HSLA.HSLA_Impl_.get_alpha = function(this1) {
	return this1[3];
};
thx.color._HSLA.HSLA_Impl_._c = function(d,s,l) {
	var m2;
	if(l <= 0.5) m2 = l * (1 + s); else m2 = l + s - l * s;
	var m1 = 2 * l - m2;
	d = thx.core.Floats.wrapCircular(d,360);
	if(d < 60) return m1 + (m2 - m1) * d / 60; else if(d < 180) return m2; else if(d < 240) return m1 + (m2 - m1) * (240 - d) / 60; else return m1;
};
thx.color._HSV = {};
thx.color._HSV.HSV_Impl_ = function() { };
thx.color._HSV.HSV_Impl_.__name__ = true;
thx.color._HSV.HSV_Impl_.create = function(hue,saturation,lightness) {
	var channels = [thx.core.Floats.wrapCircular(hue,360),saturation < 0?0:saturation > 1?1:saturation,lightness < 0?0:lightness > 1?1:lightness];
	return channels;
};
thx.color._HSV.HSV_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._HSV.HSV_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._HSV.HSV_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "hsv":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._HSV.HSV_Impl_._new = function(channels) {
	return channels;
};
thx.color._HSV.HSV_Impl_.analogous = function(this1,spread) {
	if(spread == null) spread = 30.0;
	var _0 = thx.color._HSV.HSV_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSV.HSV_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSV.HSV_Impl_.complement = function(this1) {
	return thx.color._HSV.HSV_Impl_.rotate(this1,180);
};
thx.color._HSV.HSV_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolateAngle(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._HSV.HSV_Impl_.rotate = function(this1,angle) {
	return thx.color._HSV.HSV_Impl_.withHue(this1,this1[0] + angle);
};
thx.color._HSV.HSV_Impl_.split = function(this1,spread) {
	if(spread == null) spread = 144.0;
	var _0 = thx.color._HSV.HSV_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSV.HSV_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSV.HSV_Impl_.square = function(this1) {
	return thx.color._HSV.HSV_Impl_.tetrad(this1,90);
};
thx.color._HSV.HSV_Impl_.tetrad = function(this1,angle) {
	var _0 = thx.color._HSV.HSV_Impl_.rotate(this1,0);
	var _1 = thx.color._HSV.HSV_Impl_.rotate(this1,angle);
	var _2 = thx.color._HSV.HSV_Impl_.rotate(this1,180);
	var _3 = thx.color._HSV.HSV_Impl_.rotate(this1,180 + angle);
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx.color._HSV.HSV_Impl_.triad = function(this1) {
	var _0 = thx.color._HSV.HSV_Impl_.rotate(this1,-120);
	var _1 = thx.color._HSV.HSV_Impl_.rotate(this1,0);
	var _2 = thx.color._HSV.HSV_Impl_.rotate(this1,120);
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx.color._HSV.HSV_Impl_.withAlpha = function(this1,alpha) {
	var channels = this1.concat([alpha < 0?0:alpha > 1?1:alpha]);
	return channels;
};
thx.color._HSV.HSV_Impl_.withHue = function(this1,newhue) {
	var channels = [thx.core.Floats.wrapCircular(newhue,360),this1[1],this1[2]];
	return channels;
};
thx.color._HSV.HSV_Impl_.withValue = function(this1,newvalue) {
	return [this1[0],this1[1],newvalue < 0?0:newvalue > 1?1:newvalue];
};
thx.color._HSV.HSV_Impl_.withSaturation = function(this1,newsaturation) {
	return [this1[0],newsaturation < 0?0:newsaturation > 1?1:newsaturation,this1[2]];
};
thx.color._HSV.HSV_Impl_.toString = function(this1) {
	return "hsv(" + this1[0] + "," + this1[1] * 100 + "%," + this1[2] * 100 + "%)";
};
thx.color._HSV.HSV_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._HSV.HSV_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toHSVA = function(this1) {
	return thx.color._HSV.HSV_Impl_.withAlpha(this1,1.0);
};
thx.color._HSV.HSV_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._HSV.HSV_Impl_.toRGBXA(this1));
};
thx.color._HSV.HSV_Impl_.toRGBX = function(this1) {
	if(this1[1] == 0) return [this1[2],this1[2],this1[2]];
	var r;
	var g;
	var b;
	var i;
	var f;
	var p;
	var q;
	var t;
	var h = this1[0] / 60;
	i = Math.floor(h);
	f = h - i;
	p = this1[2] * (1 - this1[1]);
	q = this1[2] * (1 - f * this1[1]);
	t = this1[2] * (1 - (1 - f) * this1[1]);
	switch(i) {
	case 0:
		r = this1[2];
		g = t;
		b = p;
		break;
	case 1:
		r = q;
		g = this1[2];
		b = p;
		break;
	case 2:
		r = p;
		g = this1[2];
		b = t;
		break;
	case 3:
		r = p;
		g = q;
		b = this1[2];
		break;
	case 4:
		r = t;
		g = p;
		b = this1[2];
		break;
	default:
		r = this1[2];
		g = p;
		b = q;
	}
	return [r,g,b];
};
thx.color._HSV.HSV_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._HSV.HSV_Impl_.toRGBX(this1));
};
thx.color._HSV.HSV_Impl_.get_hue = function(this1) {
	return this1[0];
};
thx.color._HSV.HSV_Impl_.get_saturation = function(this1) {
	return this1[1];
};
thx.color._HSV.HSV_Impl_.get_value = function(this1) {
	return this1[2];
};
thx.color._HSVA = {};
thx.color._HSVA.HSVA_Impl_ = function() { };
thx.color._HSVA.HSVA_Impl_.__name__ = true;
thx.color._HSVA.HSVA_Impl_.create = function(hue,saturation,value,alpha) {
	var channels = [thx.core.Floats.wrapCircular(hue,360),saturation < 0?0:saturation > 1?1:saturation,value < 0?0:value > 1?1:value,alpha < 0?0:alpha > 1?1:alpha];
	return channels;
};
thx.color._HSVA.HSVA_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,4);
	return thx.color._HSVA.HSVA_Impl_.create(arr[0],arr[1],arr[2],arr[3]);
};
thx.color._HSVA.HSVA_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "hsv":
			return thx.color._HSV.HSV_Impl_.toHSVA((function($this) {
				var $r;
				var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
				$r = channels;
				return $r;
			}(this)));
		case "hsva":
			var channels1 = thx.color.parse.ColorParser.getFloatChannels(info.channels,4);
			return channels1;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._HSVA.HSVA_Impl_._new = function(channels) {
	return channels;
};
thx.color._HSVA.HSVA_Impl_.analogous = function(this1,spread) {
	if(spread == null) spread = 30.0;
	var _0 = thx.color._HSVA.HSVA_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSVA.HSVA_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSVA.HSVA_Impl_.complement = function(this1) {
	return thx.color._HSVA.HSVA_Impl_.rotate(this1,180);
};
thx.color._HSVA.HSVA_Impl_.transparent = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],0)];
	return channels;
};
thx.color._HSVA.HSVA_Impl_.opaque = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Floats.interpolate(t,this1[3],1)];
	return channels;
};
thx.color._HSVA.HSVA_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolateAngle(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2]),thx.core.Floats.interpolate(t,this1[3],other[3])];
	return channels;
};
thx.color._HSVA.HSVA_Impl_.rotate = function(this1,angle) {
	return thx.color._HSVA.HSVA_Impl_.create(this1[0] + angle,this1[1],this1[2],this1[3]);
};
thx.color._HSVA.HSVA_Impl_.split = function(this1,spread) {
	if(spread == null) spread = 150.0;
	var _0 = thx.color._HSVA.HSVA_Impl_.rotate(this1,-spread);
	var _1 = thx.color._HSVA.HSVA_Impl_.rotate(this1,spread);
	return { _0 : _0, _1 : _1};
};
thx.color._HSVA.HSVA_Impl_.withAlpha = function(this1,newalpha) {
	return [this1[0],this1[1],this1[2],newalpha < 0?0:newalpha > 1?1:newalpha];
};
thx.color._HSVA.HSVA_Impl_.withHue = function(this1,newhue) {
	var channels = [thx.core.Floats.wrapCircular(newhue,360),this1[1],this1[2],this1[3]];
	return channels;
};
thx.color._HSVA.HSVA_Impl_.withLightness = function(this1,newvalue) {
	return [this1[0],this1[1],newvalue < 0?0:newvalue > 1?1:newvalue,this1[3]];
};
thx.color._HSVA.HSVA_Impl_.withSaturation = function(this1,newsaturation) {
	return [this1[0],newsaturation < 0?0:newsaturation > 1?1:newsaturation,this1[2],this1[3]];
};
thx.color._HSVA.HSVA_Impl_.toString = function(this1) {
	return "hsva(" + this1[0] + "," + this1[1] * 100 + "%," + this1[2] * 100 + "%," + this1[3] + ")";
};
thx.color._HSVA.HSVA_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10 && Math.abs(this1[3] - other[3]) <= 10e-10;
};
thx.color._HSVA.HSVA_Impl_.toHSV = function(this1) {
	var channels = this1.slice(0,3);
	return channels;
};
thx.color._HSVA.HSVA_Impl_.toHSLA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toHSLA(thx.color._HSVA.HSVA_Impl_.toRGBXA(this1));
};
thx.color._HSVA.HSVA_Impl_.toRGB = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGB(thx.color._HSVA.HSVA_Impl_.toRGBXA(this1));
};
thx.color._HSVA.HSVA_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._HSVA.HSVA_Impl_.toRGBXA(this1));
};
thx.color._HSVA.HSVA_Impl_.toRGBXA = function(this1) {
	if(this1[1] == 0) return [this1[2],this1[2],this1[2],this1[3]];
	var r;
	var g;
	var b;
	var i;
	var f;
	var p;
	var q;
	var t;
	var h = this1[0] / 60;
	i = Math.floor(h);
	f = h - i;
	p = this1[2] * (1 - this1[1]);
	q = this1[2] * (1 - f * this1[1]);
	t = this1[2] * (1 - (1 - f) * this1[1]);
	switch(i) {
	case 0:
		r = this1[2];
		g = t;
		b = p;
		break;
	case 1:
		r = q;
		g = this1[2];
		b = p;
		break;
	case 2:
		r = p;
		g = this1[2];
		b = t;
		break;
	case 3:
		r = p;
		g = q;
		b = this1[2];
		break;
	case 4:
		r = t;
		g = p;
		b = this1[2];
		break;
	default:
		r = this1[2];
		g = p;
		b = q;
	}
	return [r,g,b,this1[3]];
};
thx.color._HSVA.HSVA_Impl_.get_hue = function(this1) {
	return this1[0];
};
thx.color._HSVA.HSVA_Impl_.get_saturation = function(this1) {
	return this1[1];
};
thx.color._HSVA.HSVA_Impl_.get_value = function(this1) {
	return this1[2];
};
thx.color._HSVA.HSVA_Impl_.get_alpha = function(this1) {
	return this1[3];
};
thx.color._RGB = {};
thx.color._RGB.RGB_Impl_ = function() { };
thx.color._RGB.RGB_Impl_.__name__ = true;
thx.color._RGB.RGB_Impl_.create = function(red,green,blue) {
	return (red & 255) << 16 | (green & 255) << 8 | blue & 255;
};
thx.color._RGB.RGB_Impl_.createf = function(red,green,blue) {
	return thx.color._RGB.RGB_Impl_.create(Math.round(red * 255),Math.round(green * 255),Math.round(blue * 255));
};
thx.color._RGB.RGB_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseHex(color);
	if(null == info) info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "rgb":
			return thx.color._RGB.RGB_Impl_.fromInts(thx.color.parse.ColorParser.getInt8Channels(info.channels,3));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._RGB.RGB_Impl_.fromInts = function(arr) {
	thx.core.ArrayInts.resize(arr,3);
	return thx.color._RGB.RGB_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._RGB.RGB_Impl_._new = function(rgb) {
	return rgb;
};
thx.color._RGB.RGB_Impl_.darker = function(this1,t) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._RGBX.RGBX_Impl_.darker(thx.color._RGB.RGB_Impl_.toRGBX(this1),t));
};
thx.color._RGB.RGB_Impl_.lighter = function(this1,t) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._RGBX.RGBX_Impl_.lighter(thx.color._RGB.RGB_Impl_.toRGBX(this1),t));
};
thx.color._RGB.RGB_Impl_.interpolate = function(this1,other,t) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._RGBX.RGBX_Impl_.interpolate(thx.color._RGB.RGB_Impl_.toRGBX(this1),thx.color._RGB.RGB_Impl_.toRGBX(other),t));
};
thx.color._RGB.RGB_Impl_.withAlpha = function(this1,alpha) {
	return thx.color._RGBA.RGBA_Impl_.fromInts([thx.color._RGB.RGB_Impl_.get_red(this1),thx.color._RGB.RGB_Impl_.get_green(this1),thx.color._RGB.RGB_Impl_.get_blue(this1),alpha]);
};
thx.color._RGB.RGB_Impl_.withRed = function(this1,newred) {
	return thx.color._RGB.RGB_Impl_.fromInts([newred,thx.color._RGB.RGB_Impl_.get_green(this1),thx.color._RGB.RGB_Impl_.get_blue(this1)]);
};
thx.color._RGB.RGB_Impl_.withGreen = function(this1,newgreen) {
	return thx.color._RGB.RGB_Impl_.fromInts([thx.color._RGB.RGB_Impl_.get_red(this1),newgreen,thx.color._RGB.RGB_Impl_.get_blue(this1)]);
};
thx.color._RGB.RGB_Impl_.withBlue = function(this1,newblue) {
	return thx.color._RGB.RGB_Impl_.fromInts([thx.color._RGB.RGB_Impl_.get_red(this1),thx.color._RGB.RGB_Impl_.get_green(this1),newblue]);
};
thx.color._RGB.RGB_Impl_.toCSS3 = function(this1) {
	return "rgb(" + thx.color._RGB.RGB_Impl_.get_red(this1) + "," + thx.color._RGB.RGB_Impl_.get_green(this1) + "," + thx.color._RGB.RGB_Impl_.get_blue(this1) + ")";
};
thx.color._RGB.RGB_Impl_.toString = function(this1) {
	return thx.color._RGB.RGB_Impl_.toHex(this1);
};
thx.color._RGB.RGB_Impl_.toHex = function(this1,prefix) {
	if(prefix == null) prefix = "#";
	return "" + prefix + StringTools.hex(thx.color._RGB.RGB_Impl_.get_red(this1),2) + StringTools.hex(thx.color._RGB.RGB_Impl_.get_green(this1),2) + StringTools.hex(thx.color._RGB.RGB_Impl_.get_blue(this1),2);
};
thx.color._RGB.RGB_Impl_.equals = function(this1,other) {
	return thx.color._RGB.RGB_Impl_.get_red(this1) == thx.color._RGB.RGB_Impl_.get_red(other) && thx.color._RGB.RGB_Impl_.get_green(this1) == thx.color._RGB.RGB_Impl_.get_green(other) && thx.color._RGB.RGB_Impl_.get_blue(this1) == thx.color._RGB.RGB_Impl_.get_blue(other);
};
thx.color._RGB.RGB_Impl_.toCIELab = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELab(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toCIELCh = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCIELCh(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toRGBX = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.fromInts([thx.color._RGB.RGB_Impl_.get_red(this1),thx.color._RGB.RGB_Impl_.get_green(this1),thx.color._RGB.RGB_Impl_.get_blue(this1)]);
};
thx.color._RGB.RGB_Impl_.toRGBA = function(this1) {
	return thx.color._RGB.RGB_Impl_.withAlpha(this1,255);
};
thx.color._RGB.RGB_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBA.RGBA_Impl_.toRGBXA(thx.color._RGB.RGB_Impl_.toRGBA(this1));
};
thx.color._RGB.RGB_Impl_.toYxy = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toYxy(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.toXYZ = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toXYZ(thx.color._RGB.RGB_Impl_.toRGBX(this1));
};
thx.color._RGB.RGB_Impl_.get_red = function(this1) {
	return this1 >> 16 & 255;
};
thx.color._RGB.RGB_Impl_.get_green = function(this1) {
	return this1 >> 8 & 255;
};
thx.color._RGB.RGB_Impl_.get_blue = function(this1) {
	return this1 & 255;
};
thx.color._RGBA = {};
thx.color._RGBA.RGBA_Impl_ = function() { };
thx.color._RGBA.RGBA_Impl_.__name__ = true;
thx.color._RGBA.RGBA_Impl_.create = function(red,green,blue,alpha) {
	return (red & 255) << 24 | (green & 255) << 16 | (blue & 255) << 8 | alpha & 255;
};
thx.color._RGBA.RGBA_Impl_.fromFloats = function(arr) {
	var ints = thx.core.ArrayFloats.resize(arr,4).map(function(_) {
		return Math.round(_ * 255);
	});
	return thx.color._RGBA.RGBA_Impl_.create(ints[0],ints[1],ints[2],ints[3]);
};
thx.color._RGBA.RGBA_Impl_.fromInt = function(rgba) {
	return rgba;
};
thx.color._RGBA.RGBA_Impl_.fromInts = function(arr) {
	thx.core.ArrayInts.resize(arr,4);
	return thx.color._RGBA.RGBA_Impl_.create(arr[0],arr[1],arr[2],arr[3]);
};
thx.color._RGBA.RGBA_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseHex(color);
	if(null == info) info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "rgb":
			return thx.color._RGB.RGB_Impl_.toRGBA(thx.color._RGB.RGB_Impl_.fromInts(thx.color.parse.ColorParser.getInt8Channels(info.channels,3)));
		case "rgba":
			return thx.color._RGBA.RGBA_Impl_.create(thx.color.parse.ColorParser.getInt8Channel(info.channels[0]),thx.color.parse.ColorParser.getInt8Channel(info.channels[1]),thx.color.parse.ColorParser.getInt8Channel(info.channels[2]),Math.round(thx.color.parse.ColorParser.getFloatChannel(info.channels[3]) * 255));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._RGBA.RGBA_Impl_._new = function(rgba) {
	return rgba;
};
thx.color._RGBA.RGBA_Impl_.darker = function(this1,t) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._RGBXA.RGBXA_Impl_.darker(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1),t));
};
thx.color._RGBA.RGBA_Impl_.lighter = function(this1,t) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._RGBXA.RGBXA_Impl_.lighter(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1),t));
};
thx.color._RGBA.RGBA_Impl_.transparent = function(this1,t) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._RGBXA.RGBXA_Impl_.transparent(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1),t));
};
thx.color._RGBA.RGBA_Impl_.opaque = function(this1,t) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._RGBXA.RGBXA_Impl_.opaque(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1),t));
};
thx.color._RGBA.RGBA_Impl_.interpolate = function(this1,other,t) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._RGBXA.RGBXA_Impl_.interpolate(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1),thx.color._RGBA.RGBA_Impl_.toRGBXA(other),t));
};
thx.color._RGBA.RGBA_Impl_.withAlpha = function(this1,newalpha) {
	return thx.color._RGBA.RGBA_Impl_.fromInts([this1 >> 24 & 255,this1 >> 16 & 255,this1 >> 8 & 255,newalpha]);
};
thx.color._RGBA.RGBA_Impl_.withRed = function(this1,newred) {
	return thx.color._RGBA.RGBA_Impl_.fromInts([newred,this1 >> 16 & 255,this1 >> 8 & 255]);
};
thx.color._RGBA.RGBA_Impl_.withGreen = function(this1,newgreen) {
	return thx.color._RGBA.RGBA_Impl_.fromInts([this1 >> 24 & 255,newgreen,this1 >> 8 & 255]);
};
thx.color._RGBA.RGBA_Impl_.withBlue = function(this1,newblue) {
	return thx.color._RGBA.RGBA_Impl_.fromInts([this1 >> 24 & 255,this1 >> 16 & 255,newblue]);
};
thx.color._RGBA.RGBA_Impl_.toHSLA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toHSLA(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1));
};
thx.color._RGBA.RGBA_Impl_.toHSVA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toHSVA(thx.color._RGBA.RGBA_Impl_.toRGBXA(this1));
};
thx.color._RGBA.RGBA_Impl_.toRGB = function(this1) {
	return thx.color._RGB.RGB_Impl_.create(this1 >> 24 & 255,this1 >> 16 & 255,this1 >> 8 & 255);
};
thx.color._RGBA.RGBA_Impl_.toRGBX = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.fromInts([this1 >> 24 & 255,this1 >> 16 & 255,this1 >> 8 & 255]);
};
thx.color._RGBA.RGBA_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.fromInts([this1 >> 24 & 255,this1 >> 16 & 255,this1 >> 8 & 255,this1 & 255]);
};
thx.color._RGBA.RGBA_Impl_.toCSS3 = function(this1) {
	return thx.color._RGBA.RGBA_Impl_.toString(this1);
};
thx.color._RGBA.RGBA_Impl_.toString = function(this1) {
	return "rgba(" + (this1 >> 24 & 255) + "," + (this1 >> 16 & 255) + "," + (this1 >> 8 & 255) + "," + (this1 & 255) / 255 + ")";
};
thx.color._RGBA.RGBA_Impl_.toHex = function(this1,prefix) {
	if(prefix == null) prefix = "#";
	return "" + prefix + StringTools.hex(this1 & 255,2) + StringTools.hex(this1 >> 24 & 255,2) + StringTools.hex(this1 >> 16 & 255,2) + StringTools.hex(this1 >> 8 & 255,2);
};
thx.color._RGBA.RGBA_Impl_.equals = function(this1,other) {
	return (this1 >> 24 & 255) == (other >> 24 & 255) && (this1 & 255) == (other & 255) && (this1 >> 16 & 255) == (other >> 16 & 255) && (this1 >> 8 & 255) == (other >> 8 & 255);
};
thx.color._RGBA.RGBA_Impl_.get_alpha = function(this1) {
	return this1 & 255;
};
thx.color._RGBA.RGBA_Impl_.get_red = function(this1) {
	return this1 >> 24 & 255;
};
thx.color._RGBA.RGBA_Impl_.get_green = function(this1) {
	return this1 >> 16 & 255;
};
thx.color._RGBA.RGBA_Impl_.get_blue = function(this1) {
	return this1 >> 8 & 255;
};
thx.color._RGBX = {};
thx.color._RGBX.RGBX_Impl_ = function() { };
thx.color._RGBX.RGBX_Impl_.__name__ = true;
thx.color._RGBX.RGBX_Impl_.create = function(red,green,blue) {
	return [red < 0?0:red > 1?1:red,green < 0?0:green > 1?1:green,blue < 0?0:blue > 1?1:blue];
};
thx.color._RGBX.RGBX_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._RGBX.RGBX_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._RGBX.RGBX_Impl_.fromInts = function(arr) {
	thx.core.ArrayInts.resize(arr,3);
	return thx.color._RGBX.RGBX_Impl_.create(arr[0] / 255,arr[1] / 255,arr[2] / 255);
};
thx.color._RGBX.RGBX_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseHex(color);
	if(null == info) info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "rgb":
			return thx.color._RGBX.RGBX_Impl_.fromFloats(thx.color.parse.ColorParser.getFloatChannels(info.channels,3));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._RGBX.RGBX_Impl_._new = function(channels) {
	return channels;
};
thx.color._RGBX.RGBX_Impl_.darker = function(this1,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],0),thx.core.Floats.interpolate(t,this1[1],0),thx.core.Floats.interpolate(t,this1[2],0)];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.lighter = function(this1,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],1),thx.core.Floats.interpolate(t,this1[1],1),thx.core.Floats.interpolate(t,this1[2],1)];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.toCSS3 = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toString(this1);
};
thx.color._RGBX.RGBX_Impl_.toString = function(this1) {
	return "rgb(" + this1[0] * 100 + "%," + this1[1] * 100 + "%," + this1[2] * 100 + "%)";
};
thx.color._RGBX.RGBX_Impl_.toHex = function(this1,prefix) {
	if(prefix == null) prefix = "#";
	return "" + prefix + StringTools.hex(thx.color._RGBX.RGBX_Impl_.get_red(this1),2) + StringTools.hex(thx.color._RGBX.RGBX_Impl_.get_green(this1),2) + StringTools.hex(thx.color._RGBX.RGBX_Impl_.get_blue(this1),2);
};
thx.color._RGBX.RGBX_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._RGBX.RGBX_Impl_.withAlpha = function(this1,alpha) {
	var channels = this1.concat([alpha < 0?0:alpha > 1?1:alpha]);
	return channels;
};
thx.color._RGBX.RGBX_Impl_.withRed = function(this1,newred) {
	var channels = [newred < 0?0:newred > 1?1:newred,thx.color._RGBX.RGBX_Impl_.get_green(this1),thx.color._RGBX.RGBX_Impl_.get_blue(this1)];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.withGreen = function(this1,newgreen) {
	var channels = [thx.color._RGBX.RGBX_Impl_.get_red(this1),newgreen < 0?0:newgreen > 1?1:newgreen,thx.color._RGBX.RGBX_Impl_.get_blue(this1)];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.withBlue = function(this1,newblue) {
	var channels = [thx.color._RGBX.RGBX_Impl_.get_red(this1),thx.color._RGBX.RGBX_Impl_.get_green(this1),newblue < 0?0:newblue > 1?1:newblue];
	return channels;
};
thx.color._RGBX.RGBX_Impl_.toCIELab = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toCIELab(thx.color._RGBX.RGBX_Impl_.toXYZ(this1));
};
thx.color._RGBX.RGBX_Impl_.toCIELCh = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toCIELCh(thx.color._RGBX.RGBX_Impl_.toCIELab(this1));
};
thx.color._RGBX.RGBX_Impl_.toCMY = function(this1) {
	return [1 - this1[0],1 - this1[1],1 - this1[2]];
};
thx.color._RGBX.RGBX_Impl_.toCMYK = function(this1) {
	var c = 0.0;
	var y = 0.0;
	var m = 0.0;
	var k;
	if(this1[0] + this1[1] + this1[2] == 0) k = 1.0; else {
		k = 1 - Math.max(Math.max(this1[0],this1[1]),this1[2]);
		c = (1 - this1[0] - k) / (1 - k);
		m = (1 - this1[1] - k) / (1 - k);
		y = (1 - this1[2] - k) / (1 - k);
	}
	return [c,m,y,k];
};
thx.color._RGBX.RGBX_Impl_.toGrey = function(this1) {
	return this1[0] * .2126 + this1[1] * .7152 + this1[2] * .0722;
};
thx.color._RGBX.RGBX_Impl_.toPerceivedGrey = function(this1) {
	return this1[0] * .299 + this1[1] * .587 + this1[2] * .114;
};
thx.color._RGBX.RGBX_Impl_.toPerceivedAccurateGrey = function(this1) {
	var grey = Math.pow(this1[0],2) * .241 + Math.pow(this1[1],2) * .691 + Math.pow(this1[2],2) * .068;
	return grey;
};
thx.color._RGBX.RGBX_Impl_.toHSL = function(this1) {
	var min = Math.min(Math.min(this1[0],this1[1]),this1[2]);
	var max = Math.max(Math.max(this1[0],this1[1]),this1[2]);
	var delta = max - min;
	var h;
	var s;
	var l = (max + min) / 2;
	if(delta == 0.0) s = h = 0.0; else {
		if(l < 0.5) s = delta / (max + min); else s = delta / (2 - max - min);
		if(this1[0] == max) h = (this1[1] - this1[2]) / delta + (this1[1] < thx.color._RGBX.RGBX_Impl_.get_blue(this1)?6:0); else if(this1[1] == max) h = (this1[2] - this1[0]) / delta + 2; else h = (this1[0] - this1[1]) / delta + 4;
		h *= 60;
	}
	return [h,s,l];
};
thx.color._RGBX.RGBX_Impl_.toHSV = function(this1) {
	var min = Math.min(Math.min(this1[0],this1[1]),this1[2]);
	var max = Math.max(Math.max(this1[0],this1[1]),this1[2]);
	var delta = max - min;
	var h;
	var s;
	var v = max;
	if(delta != 0) s = delta / max; else {
		s = 0;
		h = -1;
		return [h,s,v];
	}
	if(this1[0] == max) h = (this1[1] - this1[2]) / delta; else if(this1[1] == max) h = 2 + (this1[2] - this1[0]) / delta; else h = 4 + (this1[0] - this1[1]) / delta;
	h *= 60;
	if(h < 0) h += 360;
	return [h,s,v];
};
thx.color._RGBX.RGBX_Impl_.toRGB = function(this1) {
	return thx.color._RGB.RGB_Impl_.createf(this1[0],this1[1],this1[2]);
};
thx.color._RGBX.RGBX_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.withAlpha(this1,1.0);
};
thx.color._RGBX.RGBX_Impl_.toXYZ = function(this1) {
	var r = this1[0];
	var g = this1[1];
	var b = this1[2];
	r = 100 * (r > 0.04045?Math.pow((r + 0.055) / 1.055,2.4):r / 12.92);
	g = 100 * (g > 0.04045?Math.pow((g + 0.055) / 1.055,2.4):g / 12.92);
	b = 100 * (b > 0.04045?Math.pow((b + 0.055) / 1.055,2.4):b / 12.92);
	return [r * 0.4124 + g * 0.3576 + b * 0.1805,r * 0.2126 + g * 0.7152 + b * 0.0722,r * 0.0193 + g * 0.1192 + b * 0.9505];
};
thx.color._RGBX.RGBX_Impl_.toYxy = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toYxy(thx.color._RGBX.RGBX_Impl_.toXYZ(this1));
};
thx.color._RGBX.RGBX_Impl_.get_red = function(this1) {
	return Math.round(this1[0] * 255);
};
thx.color._RGBX.RGBX_Impl_.get_green = function(this1) {
	return Math.round(this1[1] * 255);
};
thx.color._RGBX.RGBX_Impl_.get_blue = function(this1) {
	return Math.round(this1[2] * 255);
};
thx.color._RGBX.RGBX_Impl_.get_redf = function(this1) {
	return this1[0];
};
thx.color._RGBX.RGBX_Impl_.get_greenf = function(this1) {
	return this1[1];
};
thx.color._RGBX.RGBX_Impl_.get_bluef = function(this1) {
	return this1[2];
};
thx.color._RGBXA = {};
thx.color._RGBXA.RGBXA_Impl_ = function() { };
thx.color._RGBXA.RGBXA_Impl_.__name__ = true;
thx.color._RGBXA.RGBXA_Impl_.create = function(red,green,blue,alpha) {
	return [red < 0?0:red > 1?1:red,green < 0?0:green > 1?1:green,blue < 0?0:blue > 1?1:blue,alpha < 0?0:alpha > 1?1:alpha];
};
thx.color._RGBXA.RGBXA_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,4);
	return thx.color._RGBXA.RGBXA_Impl_.create(arr[0],arr[1],arr[2],arr[3]);
};
thx.color._RGBXA.RGBXA_Impl_.fromInts = function(arr) {
	thx.core.ArrayInts.resize(arr,4);
	return thx.color._RGBXA.RGBXA_Impl_.create(arr[0] / 255,arr[1] / 255,arr[2] / 255,arr[3] / 255);
};
thx.color._RGBXA.RGBXA_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseHex(color);
	if(null == info) info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "rgb":
			return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._RGBX.RGBX_Impl_.fromFloats(thx.color.parse.ColorParser.getFloatChannels(info.channels,3)));
		case "rgba":
			return thx.color._RGBXA.RGBXA_Impl_.fromFloats(thx.color.parse.ColorParser.getFloatChannels(info.channels,4));
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._RGBXA.RGBXA_Impl_._new = function(channels) {
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.darker = function(this1,t) {
	return thx.color._RGBX.RGBX_Impl_.withAlpha(thx.color._RGBX.RGBX_Impl_.darker(thx.color._RGBXA.RGBXA_Impl_.toRGBX(this1),t),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1));
};
thx.color._RGBXA.RGBXA_Impl_.lighter = function(this1,t) {
	return thx.color._RGBX.RGBX_Impl_.withAlpha(thx.color._RGBX.RGBX_Impl_.lighter(thx.color._RGBXA.RGBXA_Impl_.toRGBX(this1),t),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1));
};
thx.color._RGBXA.RGBXA_Impl_.transparent = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Ints.interpolate(t,this1[3],0)];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.opaque = function(this1,t) {
	var channels = [this1[0],this1[1],this1[2],thx.core.Ints.interpolate(t,this1[3],1)];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Ints.interpolate(t,this1[0],other[0]),thx.core.Ints.interpolate(t,this1[1],other[1]),thx.core.Ints.interpolate(t,this1[2],other[2]),thx.core.Ints.interpolate(t,this1[3],other[3])];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.withAlpha = function(this1,newalpha) {
	var channels = [thx.color._RGBXA.RGBXA_Impl_.get_red(this1),thx.color._RGBXA.RGBXA_Impl_.get_green(this1),thx.color._RGBXA.RGBXA_Impl_.get_blue(this1),newalpha < 0?0:newalpha > 1?1:newalpha];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.withRed = function(this1,newred) {
	var channels = [newred < 0?0:newred > 1?1:newred,thx.color._RGBXA.RGBXA_Impl_.get_green(this1),thx.color._RGBXA.RGBXA_Impl_.get_blue(this1),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1)];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.withGreen = function(this1,newgreen) {
	var channels = [thx.color._RGBXA.RGBXA_Impl_.get_red(this1),newgreen < 0?0:newgreen > 1?1:newgreen,thx.color._RGBXA.RGBXA_Impl_.get_blue(this1),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1)];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.withBlue = function(this1,newblue) {
	var channels = [thx.color._RGBXA.RGBXA_Impl_.get_red(this1),thx.color._RGBXA.RGBXA_Impl_.get_green(this1),newblue < 0?0:newblue > 1?1:newblue,thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1)];
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.toCSS3 = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toString(this1);
};
thx.color._RGBXA.RGBXA_Impl_.toString = function(this1) {
	return "rgba(" + this1[0] * 100 + "%," + this1[1] * 100 + "%," + this1[2] * 100 + "%," + this1[3] + ")";
};
thx.color._RGBXA.RGBXA_Impl_.toHex = function(this1,prefix) {
	if(prefix == null) prefix = "#";
	return "" + prefix + StringTools.hex(thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1),2) + StringTools.hex(thx.color._RGBXA.RGBXA_Impl_.get_red(this1),2) + StringTools.hex(thx.color._RGBXA.RGBXA_Impl_.get_green(this1),2) + StringTools.hex(thx.color._RGBXA.RGBXA_Impl_.get_blue(this1),2);
};
thx.color._RGBXA.RGBXA_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10 && Math.abs(this1[3] - other[3]) <= 10e-10;
};
thx.color._RGBXA.RGBXA_Impl_.toHSLA = function(this1) {
	return thx.color._HSL.HSL_Impl_.withAlpha(thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._RGBXA.RGBXA_Impl_.toRGBX(this1)),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1));
};
thx.color._RGBXA.RGBXA_Impl_.toHSVA = function(this1) {
	return thx.color._HSV.HSV_Impl_.withAlpha(thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._RGBXA.RGBXA_Impl_.toRGBX(this1)),thx.color._RGBXA.RGBXA_Impl_.get_alpha(this1));
};
thx.color._RGBXA.RGBXA_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._RGBXA.RGBXA_Impl_.toRGBX(this1));
};
thx.color._RGBXA.RGBXA_Impl_.toRGBX = function(this1) {
	var channels = this1.slice(0,3);
	return channels;
};
thx.color._RGBXA.RGBXA_Impl_.toRGBA = function(this1) {
	return thx.color._RGBA.RGBA_Impl_.fromFloats([this1[0],this1[1],this1[2],this1[3]]);
};
thx.color._RGBXA.RGBXA_Impl_.get_red = function(this1) {
	return Math.round(this1[0] * 255);
};
thx.color._RGBXA.RGBXA_Impl_.get_green = function(this1) {
	return Math.round(this1[1] * 255);
};
thx.color._RGBXA.RGBXA_Impl_.get_blue = function(this1) {
	return Math.round(this1[2] * 255);
};
thx.color._RGBXA.RGBXA_Impl_.get_alpha = function(this1) {
	return Math.round(this1[3] * 255);
};
thx.color._RGBXA.RGBXA_Impl_.get_redf = function(this1) {
	return this1[0];
};
thx.color._RGBXA.RGBXA_Impl_.get_greenf = function(this1) {
	return this1[1];
};
thx.color._RGBXA.RGBXA_Impl_.get_bluef = function(this1) {
	return this1[2];
};
thx.color._RGBXA.RGBXA_Impl_.get_alphaf = function(this1) {
	return this1[3];
};
thx.color._XYZ = {};
thx.color._XYZ.XYZ_Impl_ = function() { };
thx.color._XYZ.XYZ_Impl_.__name__ = true;
thx.color._XYZ.XYZ_Impl_.create = function(x,y,z) {
	return [x,y,z];
};
thx.color._XYZ.XYZ_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._XYZ.XYZ_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._XYZ.XYZ_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "ciexyz":case "xyz":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._XYZ.XYZ_Impl_._new = function(channels) {
	return channels;
};
thx.color._XYZ.XYZ_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._XYZ.XYZ_Impl_.withX = function(this1,newx) {
	return [newx,this1[1],this1[2]];
};
thx.color._XYZ.XYZ_Impl_.withY = function(this1,newy) {
	return [this1[0],newy,this1[2]];
};
thx.color._XYZ.XYZ_Impl_.withZ = function(this1,newz) {
	return [this1[0],this1[1],newz];
};
thx.color._XYZ.XYZ_Impl_.toString = function(this1) {
	return "XYZ(" + this1[0] + "," + this1[1] + "," + this1[2] + ")";
};
thx.color._XYZ.XYZ_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._XYZ.XYZ_Impl_.toCIELab = function(this1) {
	var x = this1[0] * 0.0105211106;
	var y = this1[1] * 0.01;
	var z = this1[2] * 0.00918417016;
	var p;
	if(x > 0.008856) x = Math.pow(x,0.333333333333333315); else x = 7.787 * x + 0.137931034482758619;
	if(y > 0.008856) y = Math.pow(y,0.333333333333333315); else y = 7.787 * y + 0.137931034482758619;
	if(z > 0.008856) z = Math.pow(z,0.333333333333333315); else z = 7.787 * z + 0.137931034482758619;
	if(y > 0.008856) return [116 * y - 16,500 * (x - y),200 * (y - z)]; else return [903.3 * y,500 * (x - y),200 * (y - z)];
};
thx.color._XYZ.XYZ_Impl_.toCIELCh = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toCIELCh(thx.color._XYZ.XYZ_Impl_.toCIELab(this1));
};
thx.color._XYZ.XYZ_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._XYZ.XYZ_Impl_.toRGBXA(this1));
};
thx.color._XYZ.XYZ_Impl_.toRGBX = function(this1) {
	var x = this1[0] / 100;
	var y = this1[1] / 100;
	var z = this1[2] / 100;
	var r = x * 3.2406 + y * -1.5372 + z * -0.4986;
	var g = x * -0.9689 + y * 1.8758 + z * 0.0415;
	var b = x * 0.0557 + y * -0.204 + z * 1.0570;
	if(r > 0.0031308) r = 1.055 * Math.pow(r,0.416666666666666685) - 0.055; else r = 12.92 * r;
	if(g > 0.0031308) g = 1.055 * Math.pow(g,0.416666666666666685) - 0.055; else g = 12.92 * g;
	if(b > 0.0031308) b = 1.055 * Math.pow(b,0.416666666666666685) - 0.055; else b = 12.92 * b;
	return [r,g,b];
};
thx.color._XYZ.XYZ_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._XYZ.XYZ_Impl_.toRGBX(this1));
};
thx.color._XYZ.XYZ_Impl_.toYxy = function(this1) {
	var sum = this1[0] + this1[1] + this1[2];
	return [this1[1],sum == 0?1:this1[0] / sum,sum == 0?1:this1[1] / sum];
};
thx.color._XYZ.XYZ_Impl_.get_x = function(this1) {
	return this1[0];
};
thx.color._XYZ.XYZ_Impl_.get_y = function(this1) {
	return this1[1];
};
thx.color._XYZ.XYZ_Impl_.get_z = function(this1) {
	return this1[2];
};
thx.color._Yxy = {};
thx.color._Yxy.Yxy_Impl_ = function() { };
thx.color._Yxy.Yxy_Impl_.__name__ = true;
thx.color._Yxy.Yxy_Impl_.create = function(y1,x,y2) {
	return [y1,x,y2];
};
thx.color._Yxy.Yxy_Impl_.fromFloats = function(arr) {
	thx.core.ArrayFloats.resize(arr,3);
	return thx.color._Yxy.Yxy_Impl_.create(arr[0],arr[1],arr[2]);
};
thx.color._Yxy.Yxy_Impl_.fromString = function(color) {
	var info = thx.color.parse.ColorParser.parseColor(color);
	if(null == info) return null;
	try {
		var _g = info.name;
		switch(_g) {
		case "yxy":
			var channels = thx.color.parse.ColorParser.getFloatChannels(info.channels,3);
			return channels;
		default:
			return null;
		}
	} catch( e ) {
		return null;
	}
};
thx.color._Yxy.Yxy_Impl_._new = function(channels) {
	return channels;
};
thx.color._Yxy.Yxy_Impl_.interpolate = function(this1,other,t) {
	var channels = [thx.core.Floats.interpolate(t,this1[0],other[0]),thx.core.Floats.interpolate(t,this1[1],other[1]),thx.core.Floats.interpolate(t,this1[2],other[2])];
	return channels;
};
thx.color._Yxy.Yxy_Impl_.withY1 = function(this1,newy1) {
	return [newy1,this1[1],this1[2]];
};
thx.color._Yxy.Yxy_Impl_.withY = function(this1,newx) {
	return [this1[0],this1[1],this1[2]];
};
thx.color._Yxy.Yxy_Impl_.withZ = function(this1,newy2) {
	return [this1[0],this1[1],this1[2]];
};
thx.color._Yxy.Yxy_Impl_.toString = function(this1) {
	return "Yxy(" + this1[0] + "," + this1[1] + "," + this1[2] + ")";
};
thx.color._Yxy.Yxy_Impl_.equals = function(this1,other) {
	return Math.abs(this1[0] - other[0]) <= 10e-10 && Math.abs(this1[1] - other[1]) <= 10e-10 && Math.abs(this1[2] - other[2]) <= 10e-10;
};
thx.color._Yxy.Yxy_Impl_.toCIELab = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toCIELab(thx.color._Yxy.Yxy_Impl_.toXYZ(this1));
};
thx.color._Yxy.Yxy_Impl_.toCIELCh = function(this1) {
	return thx.color._CIELab.CIELab_Impl_.toCIELCh(thx.color._Yxy.Yxy_Impl_.toCIELab(this1));
};
thx.color._Yxy.Yxy_Impl_.toCMY = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMY(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toCMYK = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toCMYK(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toGrey = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toGrey(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toHSL = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSL(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toHSV = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toHSV(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toRGB = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGB(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toRGBA = function(this1) {
	return thx.color._RGBXA.RGBXA_Impl_.toRGBA(thx.color._Yxy.Yxy_Impl_.toRGBXA(this1));
};
thx.color._Yxy.Yxy_Impl_.toRGBX = function(this1) {
	return thx.color._XYZ.XYZ_Impl_.toRGBX(thx.color._Yxy.Yxy_Impl_.toXYZ(this1));
};
thx.color._Yxy.Yxy_Impl_.toRGBXA = function(this1) {
	return thx.color._RGBX.RGBX_Impl_.toRGBXA(thx.color._Yxy.Yxy_Impl_.toRGBX(this1));
};
thx.color._Yxy.Yxy_Impl_.toXYZ = function(this1) {
	return [this1[1] * (this1[0] / this1[2]),this1[0],(1 - this1[1] - this1[2]) * (this1[0] / this1[2])];
};
thx.color._Yxy.Yxy_Impl_.get_y1 = function(this1) {
	return this1[0];
};
thx.color._Yxy.Yxy_Impl_.get_x = function(this1) {
	return this1[1];
};
thx.color._Yxy.Yxy_Impl_.get_y2 = function(this1) {
	return this1[2];
};
thx.color.parse = {};
thx.color.parse.ColorParser = function() {
	this.pattern_color = new EReg("^\\s*([^(]+)\\s*\\(([^)]*)\\)\\s*$","i");
	this.pattern_channel = new EReg("^\\s*(\\d*.\\d+|\\d+)(%|deg|rad)?\\s*$","i");
};
thx.color.parse.ColorParser.__name__ = true;
thx.color.parse.ColorParser.parseColor = function(s) {
	return thx.color.parse.ColorParser.parser.processColor(s);
};
thx.color.parse.ColorParser.parseHex = function(s) {
	return thx.color.parse.ColorParser.parser.processHex(s);
};
thx.color.parse.ColorParser.parseChannel = function(s) {
	return thx.color.parse.ColorParser.parser.processChannel(s);
};
thx.color.parse.ColorParser.getFloatChannels = function(channels,length,useInt8) {
	if(useInt8 == null) useInt8 = true;
	if(length != channels.length) throw "invalid number of channels, expected " + length + " but it is " + channels.length;
	return channels.map((function(f,a2) {
		return function(a1) {
			return f(a1,a2);
		};
	})(thx.color.parse.ColorParser.getFloatChannel,useInt8));
};
thx.color.parse.ColorParser.getInt8Channels = function(channels,length) {
	if(length != channels.length) throw "invalid number of channels, expected " + length + " but it is " + channels.length;
	return channels.map(thx.color.parse.ColorParser.getInt8Channel);
};
thx.color.parse.ColorParser.getFloatChannel = function(channel,useInt8) {
	if(useInt8 == null) useInt8 = true;
	switch(channel[1]) {
	case 5:
		var v = channel[2];
		if(v) return 1; else return 0;
		break;
	case 1:
		var v1 = channel[2];
		return v1;
	case 4:
		var v2 = channel[2];
		return v2;
	case 2:
		var v3 = channel[2];
		return v3;
	case 3:
		var v4 = channel[2];
		if(useInt8) return v4 / 255; else {
			var v5 = channel[2];
			return v5;
		}
		break;
	case 0:
		var v6 = channel[2];
		return v6 / 100;
	}
};
thx.color.parse.ColorParser.getInt8Channel = function(channel) {
	switch(channel[1]) {
	case 5:
		var v = channel[2];
		if(v) return 1; else return 0;
		break;
	case 3:
		var v1 = channel[2];
		return v1;
	case 0:
		var v2 = channel[2];
		return Math.round(255 * v2 / 100);
	default:
		throw "unable to extract a valid int8 value";
	}
};
thx.color.parse.ColorParser.prototype = {
	processHex: function(s) {
		if(!thx.color.parse.ColorParser.isPureHex.match(s)) {
			if(HxOverrides.substr(s,0,1) == "#") {
				if(s.length == 4) s = s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2) + s.charAt(3) + s.charAt(3); else if(s.length == 5) s = s.charAt(1) + s.charAt(1) + s.charAt(2) + s.charAt(2) + s.charAt(3) + s.charAt(3) + s.charAt(4) + s.charAt(4); else s = HxOverrides.substr(s,1,null);
			} else if(HxOverrides.substr(s,0,2) == "0x") s = HxOverrides.substr(s,2,null); else return null;
		}
		var channels = [];
		while(s.length > 0) {
			channels.push(thx.color.parse.ChannelInfo.CIInt8(Std.parseInt("0x" + HxOverrides.substr(s,0,2))));
			s = HxOverrides.substr(s,2,null);
		}
		if(channels.length == 4) return new thx.color.parse.ColorInfo("rgba",channels.slice(1).concat([channels[0]])); else return new thx.color.parse.ColorInfo("rgb",channels);
	}
	,processColor: function(s) {
		if(!this.pattern_color.match(s)) return null;
		var name = this.pattern_color.matched(1);
		if(null == name) return null;
		name = name.toLowerCase();
		var m2 = this.pattern_color.matched(2);
		var s_channels;
		if(null == m2) s_channels = []; else s_channels = m2.split(",");
		var channels = [];
		var channel;
		var _g = 0;
		while(_g < s_channels.length) {
			var s_channel = s_channels[_g];
			++_g;
			channel = this.processChannel(s_channel);
			if(null == channel) return null;
			channels.push(channel);
		}
		return new thx.color.parse.ColorInfo(name,channels);
	}
	,processChannel: function(s) {
		if(!this.pattern_channel.match(s)) return null;
		var value = this.pattern_channel.matched(1);
		var unit = this.pattern_channel.matched(2);
		if(unit == null) unit = "";
		try {
			switch(unit) {
			case "%":
				if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIPercent(thx.core.Floats.parse(value)); else return null;
				break;
			case "deg":
				if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIDegree(thx.core.Floats.parse(value)); else return null;
				break;
			case "DEG":
				if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIDegree(thx.core.Floats.parse(value)); else return null;
				break;
			case "rad":
				if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIDegree(thx.core.Floats.parse(value) * 180 / Math.PI); else return null;
				break;
			case "RAD":
				if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIDegree(thx.core.Floats.parse(value) * 180 / Math.PI); else return null;
				break;
			case "":
				if(thx.core.Ints.canParse(value)) {
					var i = thx.core.Ints.parse(value);
					if(i == 0) return thx.color.parse.ChannelInfo.CIBool(false); else if(i == 1) return thx.color.parse.ChannelInfo.CIBool(true); else if(i < 256) return thx.color.parse.ChannelInfo.CIInt8(i); else return thx.color.parse.ChannelInfo.CIInt(i);
				} else if(thx.core.Floats.canParse(value)) return thx.color.parse.ChannelInfo.CIFloat(thx.core.Floats.parse(value)); else return null;
				break;
			default:
				return null;
			}
		} catch( e ) {
			return null;
		}
	}
	,__class__: thx.color.parse.ColorParser
};
thx.color.parse.ColorInfo = function(name,channels) {
	this.name = name;
	this.channels = channels;
};
thx.color.parse.ColorInfo.__name__ = true;
thx.color.parse.ColorInfo.prototype = {
	toString: function() {
		return "" + this.name + ", channels: " + Std.string(this.channels);
	}
	,__class__: thx.color.parse.ColorInfo
};
thx.color.parse.ChannelInfo = { __ename__ : true, __constructs__ : ["CIPercent","CIFloat","CIDegree","CIInt8","CIInt","CIBool"] };
thx.color.parse.ChannelInfo.CIPercent = function(value) { var $x = ["CIPercent",0,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.color.parse.ChannelInfo.CIFloat = function(value) { var $x = ["CIFloat",1,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.color.parse.ChannelInfo.CIDegree = function(value) { var $x = ["CIDegree",2,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.color.parse.ChannelInfo.CIInt8 = function(value) { var $x = ["CIInt8",3,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.color.parse.ChannelInfo.CIInt = function(value) { var $x = ["CIInt",4,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.color.parse.ChannelInfo.CIBool = function(value) { var $x = ["CIBool",5,value]; $x.__enum__ = thx.color.parse.ChannelInfo; return $x; };
thx.core.Arrays = function() { };
thx.core.Arrays.__name__ = true;
thx.core.Arrays.after = function(array,element) {
	return array.slice(HxOverrides.indexOf(array,element,0) + 1);
};
thx.core.Arrays.all = function(arr,predicate) {
	var _g = 0;
	while(_g < arr.length) {
		var item = arr[_g];
		++_g;
		if(!predicate(item)) return false;
	}
	return true;
};
thx.core.Arrays.any = function(arr,predicate) {
	var _g = 0;
	while(_g < arr.length) {
		var item = arr[_g];
		++_g;
		if(predicate(item)) return true;
	}
	return false;
};
thx.core.Arrays.at = function(arr,indexes) {
	return indexes.map(function(i) {
		return arr[i];
	});
};
thx.core.Arrays.before = function(array,element) {
	return array.slice(0,HxOverrides.indexOf(array,element,0));
};
thx.core.Arrays.compact = function(arr) {
	return arr.filter(function(v) {
		return null != v;
	});
};
thx.core.Arrays.contains = function(array,element,eq) {
	if(null == eq) return HxOverrides.indexOf(array,element,0) >= 0; else {
		var _g1 = 0;
		var _g = array.length;
		while(_g1 < _g) {
			var i = _g1++;
			if(eq(array[i],element)) return true;
		}
		return false;
	}
};
thx.core.Arrays.cross = function(a,b) {
	var r = [];
	var _g = 0;
	while(_g < a.length) {
		var va = a[_g];
		++_g;
		var _g1 = 0;
		while(_g1 < b.length) {
			var vb = b[_g1];
			++_g1;
			r.push([va,vb]);
		}
	}
	return r;
};
thx.core.Arrays.crossMulti = function(array) {
	var acopy = array.slice();
	var result = acopy.shift().map(function(v) {
		return [v];
	});
	while(acopy.length > 0) {
		var array1 = acopy.shift();
		var tresult = result;
		result = [];
		var _g = 0;
		while(_g < array1.length) {
			var v1 = array1[_g];
			++_g;
			var _g1 = 0;
			while(_g1 < tresult.length) {
				var ar = tresult[_g1];
				++_g1;
				var t = ar.slice();
				t.push(v1);
				result.push(t);
			}
		}
	}
	return result;
};
thx.core.Arrays.eachPair = function(array,callback) {
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		var _g3 = i;
		var _g2 = array.length;
		while(_g3 < _g2) {
			var j = _g3++;
			if(!callback(array[i],array[j])) return;
		}
	}
};
thx.core.Arrays.equals = function(a,b,equality) {
	if(a == null || b == null || a.length != b.length) return false;
	if(null == equality) equality = thx.core.Functions.equality;
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(!equality(a[i],b[i])) return false;
	}
	return true;
};
thx.core.Arrays.extract = function(a,predicate) {
	var _g1 = 0;
	var _g = a.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(predicate(a[i])) return a.splice(i,1)[0];
	}
	return null;
};
thx.core.Arrays.find = function(array,predicate) {
	var _g = 0;
	while(_g < array.length) {
		var item = array[_g];
		++_g;
		if(predicate(item)) return item;
	}
	return null;
};
thx.core.Arrays.findLast = function(array,predicate) {
	var len = array.length;
	var j;
	var _g = 0;
	while(_g < len) {
		var i = _g++;
		j = len - i - 1;
		if(predicate(array[j])) return array[j];
	}
	return null;
};
thx.core.Arrays.first = function(array) {
	return array[0];
};
thx.core.Arrays.flatMap = function(array,callback) {
	return thx.core.Arrays.flatten(array.map(callback));
};
thx.core.Arrays.flatten = function(array) {
	return Array.prototype.concat.apply([],array);
};
thx.core.Arrays.from = function(array,element) {
	return array.slice(HxOverrides.indexOf(array,element,0));
};
thx.core.Arrays.head = function(array) {
	return array[0];
};
thx.core.Arrays.ifEmpty = function(value,alt) {
	if(null != value && 0 != value.length) return value; else return alt;
};
thx.core.Arrays.initial = function(array) {
	return array.slice(0,array.length - 1);
};
thx.core.Arrays.isEmpty = function(array) {
	return array.length == 0;
};
thx.core.Arrays.last = function(array) {
	return array[array.length - 1];
};
thx.core.Arrays.mapi = function(array,callback) {
	var r = [];
	var _g1 = 0;
	var _g = array.length;
	while(_g1 < _g) {
		var i = _g1++;
		r.push(callback(array[i],i));
	}
	return r;
};
thx.core.Arrays.mapRight = function(array,callback) {
	var i = array.length;
	var result = [];
	while(--i >= 0) result.push(callback(array[i]));
	return result;
};
thx.core.Arrays.order = function(array,sort) {
	var n = array.slice();
	n.sort(sort);
	return n;
};
thx.core.Arrays.pull = function(array,toRemove,equality) {
	var _g = 0;
	while(_g < toRemove.length) {
		var item = toRemove[_g];
		++_g;
		thx.core.Arrays.removeAll(array,item,equality);
	}
};
thx.core.Arrays.pushIf = function(array,condition,value) {
	if(condition) array.push(value);
	return array;
};
thx.core.Arrays.reduce = function(array,callback,initial) {
	return array.reduce(callback,initial);
};
thx.core.Arrays.resize = function(array,length,fill) {
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx.core.Arrays.reducei = function(array,callback,initial) {
	return array.reduce(callback,initial);
};
thx.core.Arrays.reduceRight = function(array,callback,initial) {
	var i = array.length;
	while(--i >= 0) initial = callback(initial,array[i]);
	return initial;
};
thx.core.Arrays.removeAll = function(array,element,equality) {
	if(null == equality) equality = thx.core.Functions.equality;
	var i = array.length;
	while(--i >= 0) if(equality(array[i],element)) array.splice(i,1);
};
thx.core.Arrays.rest = function(array) {
	return array.slice(1);
};
thx.core.Arrays.sample = function(array,n) {
	n = thx.core.Ints.min(n,array.length);
	var copy = array.slice();
	var result = [];
	var _g = 0;
	while(_g < n) {
		var i = _g++;
		result.push(copy.splice(Std.random(copy.length),1)[0]);
	}
	return result;
};
thx.core.Arrays.sampleOne = function(array) {
	return array[Std.random(array.length)];
};
thx.core.Arrays.shuffle = function(a) {
	var t = thx.core.Ints.range(a.length);
	var array = [];
	while(t.length > 0) {
		var pos = Std.random(t.length);
		var index = t[pos];
		t.splice(pos,1);
		array.push(a[index]);
	}
	return array;
};
thx.core.Arrays.take = function(arr,n) {
	return arr.slice(0,n);
};
thx.core.Arrays.takeLast = function(arr,n) {
	return arr.slice(arr.length - n);
};
thx.core.Arrays.rotate = function(arr) {
	var result = [];
	var _g1 = 0;
	var _g = arr[0].length;
	while(_g1 < _g) {
		var i = _g1++;
		var row = [];
		result.push(row);
		var _g3 = 0;
		var _g2 = arr.length;
		while(_g3 < _g2) {
			var j = _g3++;
			row.push(arr[j][i]);
		}
	}
	return result;
};
thx.core.Arrays.zip = function(array1,array2) {
	var length = thx.core.Ints.min(array1.length,array2.length);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i]});
	}
	return array;
};
thx.core.Arrays.zip3 = function(array1,array2,array3) {
	var length = thx.core.ArrayInts.min([array1.length,array2.length,array3.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i]});
	}
	return array;
};
thx.core.Arrays.zip4 = function(array1,array2,array3,array4) {
	var length = thx.core.ArrayInts.min([array1.length,array2.length,array3.length,array4.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i]});
	}
	return array;
};
thx.core.Arrays.zip5 = function(array1,array2,array3,array4,array5) {
	var length = thx.core.ArrayInts.min([array1.length,array2.length,array3.length,array4.length,array5.length]);
	var array = [];
	var _g = 0;
	while(_g < length) {
		var i = _g++;
		array.push({ _0 : array1[i], _1 : array2[i], _2 : array3[i], _3 : array4[i], _4 : array5[i]});
	}
	return array;
};
thx.core.Arrays.unzip = function(array) {
	var a1 = [];
	var a2 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
	});
	return { _0 : a1, _1 : a2};
};
thx.core.Arrays.unzip3 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
	});
	return { _0 : a1, _1 : a2, _2 : a3};
};
thx.core.Arrays.unzip4 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4};
};
thx.core.Arrays.unzip5 = function(array) {
	var a1 = [];
	var a2 = [];
	var a3 = [];
	var a4 = [];
	var a5 = [];
	array.map(function(t) {
		a1.push(t._0);
		a2.push(t._1);
		a3.push(t._2);
		a4.push(t._3);
		a5.push(t._4);
	});
	return { _0 : a1, _1 : a2, _2 : a3, _3 : a4, _4 : a5};
};
thx.core.ArrayFloats = function() { };
thx.core.ArrayFloats.__name__ = true;
thx.core.ArrayFloats.average = function(arr) {
	return thx.core.ArrayFloats.sum(arr) / arr.length;
};
thx.core.ArrayFloats.compact = function(arr) {
	return arr.filter(function(v) {
		return null != v && Math.isFinite(v);
	});
};
thx.core.ArrayFloats.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx.core.ArrayFloats.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
thx.core.ArrayFloats.resize = function(array,length,fill) {
	if(fill == null) fill = 0.0;
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx.core.ArrayFloats.sum = function(arr) {
	return arr.reduce(function(tot,v) {
		return tot + v;
	},0.0);
};
thx.core.ArrayInts = function() { };
thx.core.ArrayInts.__name__ = true;
thx.core.ArrayInts.average = function(arr) {
	return thx.core.ArrayInts.sum(arr) / arr.length;
};
thx.core.ArrayInts.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx.core.ArrayInts.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
thx.core.ArrayInts.resize = function(array,length,fill) {
	if(fill == null) fill = 0;
	while(array.length < length) array.push(fill);
	array.splice(length,array.length - length);
	return array;
};
thx.core.ArrayInts.sum = function(arr) {
	return arr.reduce(function(tot,v) {
		return tot + v;
	},0);
};
thx.core.ArrayStrings = function() { };
thx.core.ArrayStrings.__name__ = true;
thx.core.ArrayStrings.compact = function(arr) {
	return arr.filter(function(v) {
		return !thx.core.Strings.isEmpty(v);
	});
};
thx.core.ArrayStrings.max = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(max,v) {
		if(v > max) return v; else return max;
	},arr[0]);
};
thx.core.ArrayStrings.min = function(arr) {
	if(arr.length == 0) return null; else return arr.reduce(function(min,v) {
		if(v < min) return v; else return min;
	},arr[0]);
};
thx.core.Error = function(message,stack,pos) {
	Error.call(this,message);
	this.message = message;
	if(null == stack) {
		try {
			stack = haxe.CallStack.exceptionStack();
		} catch( e ) {
			stack = [];
		}
		if(stack.length == 0) try {
			stack = haxe.CallStack.callStack();
		} catch( e1 ) {
			stack = [];
		}
	}
	this.stackItems = stack;
	this.pos = pos;
};
thx.core.Error.__name__ = true;
thx.core.Error.fromDynamic = function(err,pos) {
	if(js.Boot.__instanceof(err,thx.core.Error)) return err;
	return new thx.core.Error("" + Std.string(err),null,pos);
};
thx.core.Error.__super__ = Error;
thx.core.Error.prototype = $extend(Error.prototype,{
	toString: function() {
		return this.message + "\nfrom: " + this.pos.className + "." + this.pos.methodName + "() at " + this.pos.lineNumber + "\n\n" + haxe.CallStack.toString(this.stackItems);
	}
	,__class__: thx.core.Error
});
thx.core.Functions0 = function() { };
thx.core.Functions0.__name__ = true;
thx.core.Functions0.after = function(callback,n) {
	return function() {
		if(--n == 0) callback();
	};
};
thx.core.Functions0.join = function(fa,fb) {
	return function() {
		fa();
		fb();
	};
};
thx.core.Functions0.once = function(f) {
	return function() {
		var t = f;
		f = thx.core.Functions.noop;
		t();
	};
};
thx.core.Functions0.negate = function(callback) {
	return function() {
		return !callback();
	};
};
thx.core.Functions0.times = function(n,callback) {
	return function() {
		return thx.core.Ints.range(n).map(function(_) {
			return callback();
		});
	};
};
thx.core.Functions0.timesi = function(n,callback) {
	return function() {
		return thx.core.Ints.range(n).map(function(i) {
			return callback(i);
		});
	};
};
thx.core.Functions1 = function() { };
thx.core.Functions1.__name__ = true;
thx.core.Functions1.compose = function(fa,fb) {
	return function(v) {
		return fa(fb(v));
	};
};
thx.core.Functions1.join = function(fa,fb) {
	return function(v) {
		fa(v);
		fb(v);
	};
};
thx.core.Functions1.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v) {
		return "" + Std.string(v);
	};
	var map = new haxe.ds.StringMap();
	return function(v1) {
		var key = resolver(v1);
		if(map.exists(key)) return map.get(key);
		var result = callback(v1);
		map.set(key,result);
		return result;
	};
};
thx.core.Functions1.negate = function(callback) {
	return function(v) {
		return !callback(v);
	};
};
thx.core.Functions1.noop = function(_) {
};
thx.core.Functions1.times = function(n,callback) {
	return function(value) {
		return thx.core.Ints.range(n).map(function(_) {
			return callback(value);
		});
	};
};
thx.core.Functions1.timesi = function(n,callback) {
	return function(value) {
		return thx.core.Ints.range(n).map(function(i) {
			return callback(value,i);
		});
	};
};
thx.core.Functions1.swapArguments = function(callback) {
	return function(a2,a1) {
		return callback(a1,a2);
	};
};
thx.core.Functions2 = function() { };
thx.core.Functions2.__name__ = true;
thx.core.Functions2.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v1,v2) {
		return "" + Std.string(v1) + ":" + Std.string(v2);
	};
	var map = new haxe.ds.StringMap();
	return function(v11,v21) {
		var key = resolver(v11,v21);
		if(map.exists(key)) return map.get(key);
		var result = callback(v11,v21);
		map.set(key,result);
		return result;
	};
};
thx.core.Functions2.negate = function(callback) {
	return function(v1,v2) {
		return !callback(v1,v2);
	};
};
thx.core.Functions3 = function() { };
thx.core.Functions3.__name__ = true;
thx.core.Functions3.memoize = function(callback,resolver) {
	if(null == resolver) resolver = function(v1,v2,v3) {
		return "" + Std.string(v1) + ":" + Std.string(v2) + ":" + Std.string(v3);
	};
	var map = new haxe.ds.StringMap();
	return function(v11,v21,v31) {
		var key = resolver(v11,v21,v31);
		if(map.exists(key)) return map.get(key);
		var result = callback(v11,v21,v31);
		map.set(key,result);
		return result;
	};
};
thx.core.Functions3.negate = function(callback) {
	return function(v1,v2,v3) {
		return !callback(v1,v2,v3);
	};
};
thx.core.Functions = function() { };
thx.core.Functions.__name__ = true;
thx.core.Functions.constant = function(v) {
	return function() {
		return v;
	};
};
thx.core.Functions.equality = function(a,b) {
	return a == b;
};
thx.core.Functions.identity = function(value) {
	return value;
};
thx.core.Functions.noop = function() {
};
thx.core.Ints = function() { };
thx.core.Ints.__name__ = true;
thx.core.Ints.abs = function(v) {
	if(v < 0) return -v; else return v;
};
thx.core.Ints.canParse = function(s) {
	return thx.core.Ints.pattern_parse.match(s);
};
thx.core.Ints.clamp = function(v,min,max) {
	if(v < min) return min; else if(v > max) return max; else return v;
};
thx.core.Ints.clampSym = function(v,max) {
	return thx.core.Ints.clamp(v,-max,max);
};
thx.core.Ints.compare = function(a,b) {
	return a - b;
};
thx.core.Ints.interpolate = function(f,a,b) {
	return Math.round(a + (b - a) * f);
};
thx.core.Ints.isEven = function(v) {
	return v % 2 == 0;
};
thx.core.Ints.isOdd = function(v) {
	return v % 2 != 0;
};
thx.core.Ints.max = function(a,b) {
	if(a > b) return a; else return b;
};
thx.core.Ints.min = function(a,b) {
	if(a < b) return a; else return b;
};
thx.core.Ints.parse = function(s,base) {
	var v = parseInt(s,base);
	if(Math.isNaN(v)) return null; else return v;
};
thx.core.Ints.random = function(min,max) {
	if(min == null) min = 0;
	return Std.random(max + 1) + min;
};
thx.core.Ints.range = function(start,stop,step) {
	if(step == null) step = 1;
	if(null == stop) {
		stop = start;
		start = 0;
	}
	if((stop - start) / step == Math.POSITIVE_INFINITY) throw "infinite range";
	var range = [];
	var i = -1;
	var j;
	if(step < 0) while((j = start + step * ++i) > stop) range.push(j); else while((j = start + step * ++i) < stop) range.push(j);
	return range;
};
thx.core.Ints.toString = function(value,base) {
	return value.toString(base);
};
thx.core.Ints.sign = function(value) {
	if(value < 0) return -1; else return 1;
};
thx.core.Ints.wrapCircular = function(v,max) {
	v = v % max;
	if(v < 0) v += max;
	return v;
};
thx.core.Nil = { __ename__ : true, __constructs__ : ["nil"] };
thx.core.Nil.nil = ["nil",0];
thx.core.Nil.nil.__enum__ = thx.core.Nil;
thx.core.Strings = function() { };
thx.core.Strings.__name__ = true;
thx.core.Strings.after = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return ""; else return value.substring(pos + searchFor.length);
};
thx.core.Strings.capitalize = function(s) {
	return s.substring(0,1).toUpperCase() + s.substring(1);
};
thx.core.Strings.capitalizeWords = function(value,whiteSpaceOnly) {
	if(whiteSpaceOnly == null) whiteSpaceOnly = false;
	if(whiteSpaceOnly) return thx.core.Strings.UCWORDSWS.map(value.substring(0,1).toUpperCase() + value.substring(1),thx.core.Strings.upperMatch); else return thx.core.Strings.UCWORDS.map(value.substring(0,1).toUpperCase() + value.substring(1),thx.core.Strings.upperMatch);
};
thx.core.Strings.collapse = function(value) {
	return thx.core.Strings.WSG.replace(StringTools.trim(value)," ");
};
thx.core.Strings.compare = function(a,b) {
	if(a < b) return -1; else if(a > b) return 1; else return 0;
};
thx.core.Strings.contains = function(s,test) {
	return s.indexOf(test) >= 0;
};
thx.core.Strings.dasherize = function(s) {
	return StringTools.replace(s,"_","-");
};
thx.core.Strings.ellipsis = function(s,maxlen,symbol) {
	if(symbol == null) symbol = "...";
	if(maxlen == null) maxlen = 20;
	if(s.length > maxlen) return s.substring(0,symbol.length > maxlen - symbol.length?symbol.length:maxlen - symbol.length) + symbol; else return s;
};
thx.core.Strings.filter = function(s,predicate) {
	return s.split("").filter(predicate).join("");
};
thx.core.Strings.filterCharcode = function(s,predicate) {
	return thx.core.Strings.toCharcodeArray(s).filter(predicate).map(function(i) {
		return String.fromCharCode(i);
	}).join("");
};
thx.core.Strings.from = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return ""; else return value.substring(pos);
};
thx.core.Strings.humanize = function(s) {
	return StringTools.replace(thx.core.Strings.underscore(s),"_"," ");
};
thx.core.Strings.isAlphaNum = function(value) {
	return thx.core.Strings.ALPHANUM.match(value);
};
thx.core.Strings.isLowerCase = function(value) {
	return value.toLowerCase() == value;
};
thx.core.Strings.isUpperCase = function(value) {
	return value.toUpperCase() == value;
};
thx.core.Strings.ifEmpty = function(value,alt) {
	if(null != value && "" != value) return value; else return alt;
};
thx.core.Strings.isDigitsOnly = function(value) {
	return thx.core.Strings.DIGITS.match(value);
};
thx.core.Strings.isEmpty = function(value) {
	return value == null || value == "";
};
thx.core.Strings.iterator = function(s) {
	var _this = s.split("");
	return HxOverrides.iter(_this);
};
thx.core.Strings.map = function(value,callback) {
	return value.split("").map(callback);
};
thx.core.Strings.remove = function(value,toremove) {
	return StringTools.replace(value,toremove,"");
};
thx.core.Strings.removeAfter = function(value,toremove) {
	if(StringTools.endsWith(value,toremove)) return value.substring(0,value.length - toremove.length); else return value;
};
thx.core.Strings.removeBefore = function(value,toremove) {
	if(StringTools.startsWith(value,toremove)) return value.substring(toremove.length); else return value;
};
thx.core.Strings.repeat = function(s,times) {
	return ((function($this) {
		var $r;
		var _g = [];
		{
			var _g1 = 0;
			while(_g1 < times) {
				var i = _g1++;
				_g.push(s);
			}
		}
		$r = _g;
		return $r;
	}(this))).join("");
};
thx.core.Strings.reverse = function(s) {
	var arr = s.split("");
	arr.reverse();
	return arr.join("");
};
thx.core.Strings.stripTags = function(s) {
	return thx.core.Strings.STRIPTAGS.replace(s,"");
};
thx.core.Strings.surround = function(s,left,right) {
	return "" + left + s + (null == right?left:right);
};
thx.core.Strings.toArray = function(s) {
	return s.split("");
};
thx.core.Strings.toCharcodeArray = function(s) {
	return thx.core.Strings.map(s,function(s1) {
		return HxOverrides.cca(s1,0);
	});
};
thx.core.Strings.toChunks = function(s,len) {
	var chunks = [];
	while(s.length > 0) {
		chunks.push(s.substring(0,len));
		s = s.substring(len);
	}
	return chunks;
};
thx.core.Strings.trimChars = function(value,charlist) {
	return thx.core.Strings.trimCharsRight(thx.core.Strings.trimCharsLeft(value,charlist),charlist);
};
thx.core.Strings.trimCharsLeft = function(value,charlist) {
	var pos = 0;
	var _g1 = 0;
	var _g = value.length;
	while(_g1 < _g) {
		var i = _g1++;
		if(thx.core.Strings.contains(charlist,value.charAt(i))) pos++; else break;
	}
	return value.substring(pos);
};
thx.core.Strings.trimCharsRight = function(value,charlist) {
	var len = value.length;
	var pos = len;
	var i;
	var _g = 0;
	while(_g < len) {
		var j = _g++;
		i = len - j - 1;
		if(thx.core.Strings.contains(charlist,value.charAt(i))) pos = i; else break;
	}
	return value.substring(0,pos);
};
thx.core.Strings.underscore = function(s) {
	s = new EReg("::","g").replace(s,"/");
	s = new EReg("([A-Z]+)([A-Z][a-z])","g").replace(s,"$1_$2");
	s = new EReg("([a-z\\d])([A-Z])","g").replace(s,"$1_$2");
	s = new EReg("-","g").replace(s,"_");
	return s.toLowerCase();
};
thx.core.Strings.upTo = function(value,searchFor) {
	var pos = value.indexOf(searchFor);
	if(pos < 0) return value; else return value.substring(0,pos);
};
thx.core.Strings.wrapColumns = function(s,columns,indent,newline) {
	if(newline == null) newline = "\n";
	if(indent == null) indent = "";
	if(columns == null) columns = 78;
	return thx.core.Strings.SPLIT_LINES.split(s).map(function(part) {
		return thx.core.Strings.wrapLine(StringTools.trim(thx.core.Strings.WSG.replace(part," ")),columns,indent,newline);
	}).join(newline);
};
thx.core.Strings.upperMatch = function(re) {
	return re.matched(0).toUpperCase();
};
thx.core.Strings.wrapLine = function(s,columns,indent,newline) {
	var parts = [];
	var pos = 0;
	var len = s.length;
	var ilen = indent.length;
	columns -= ilen;
	while(true) {
		if(pos + columns >= len - ilen) {
			parts.push(s.substring(pos));
			break;
		}
		var i = 0;
		while(!StringTools.isSpace(s,pos + columns - i) && i < columns) i++;
		if(i == columns) {
			i = 0;
			while(!StringTools.isSpace(s,pos + columns + i) && pos + columns + i < len) i++;
			parts.push(s.substring(pos,pos + columns + i));
			pos += columns + i + 1;
		} else {
			parts.push(s.substring(pos,pos + columns - i));
			pos += columns - i + 1;
		}
	}
	return indent + parts.join(newline + indent);
};
thx.core._Tuple = {};
thx.core._Tuple.Tuple0_Impl_ = function() { };
thx.core._Tuple.Tuple0_Impl_.__name__ = true;
thx.core._Tuple.Tuple0_Impl_._new = function() {
	return thx.core.Nil.nil;
};
thx.core._Tuple.Tuple0_Impl_["with"] = function(this1,v) {
	return v;
};
thx.core._Tuple.Tuple0_Impl_.toString = function(this1) {
	return "Tuple0()";
};
thx.core._Tuple.Tuple0_Impl_.toNil = function(this1) {
	return this1;
};
thx.core._Tuple.Tuple0_Impl_.nilToTuple = function(v) {
	return thx.core.Nil.nil;
};
thx.core._Tuple.Tuple1_Impl_ = function() { };
thx.core._Tuple.Tuple1_Impl_.__name__ = true;
thx.core._Tuple.Tuple1_Impl_._new = function(_0) {
	return _0;
};
thx.core._Tuple.Tuple1_Impl_.get__0 = function(this1) {
	return this1;
};
thx.core._Tuple.Tuple1_Impl_["with"] = function(this1,v) {
	return { _0 : this1, _1 : v};
};
thx.core._Tuple.Tuple1_Impl_.toString = function(this1) {
	return "Tuple1(" + Std.string(this1) + ")";
};
thx.core._Tuple.Tuple2_Impl_ = function() { };
thx.core._Tuple.Tuple2_Impl_.__name__ = true;
thx.core._Tuple.Tuple2_Impl_._new = function(_0,_1) {
	return { _0 : _0, _1 : _1};
};
thx.core._Tuple.Tuple2_Impl_.get_left = function(this1) {
	return this1._0;
};
thx.core._Tuple.Tuple2_Impl_.get_right = function(this1) {
	return this1._1;
};
thx.core._Tuple.Tuple2_Impl_.flip = function(this1) {
	return { _0 : this1._1, _1 : this1._0};
};
thx.core._Tuple.Tuple2_Impl_.dropLeft = function(this1) {
	return this1._1;
};
thx.core._Tuple.Tuple2_Impl_.dropRight = function(this1) {
	return this1._0;
};
thx.core._Tuple.Tuple2_Impl_["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : v};
};
thx.core._Tuple.Tuple2_Impl_.toString = function(this1) {
	return "Tuple2(" + Std.string(this1._0) + "," + Std.string(this1._1) + ")";
};
thx.core._Tuple.Tuple3_Impl_ = function() { };
thx.core._Tuple.Tuple3_Impl_.__name__ = true;
thx.core._Tuple.Tuple3_Impl_._new = function(_0,_1,_2) {
	return { _0 : _0, _1 : _1, _2 : _2};
};
thx.core._Tuple.Tuple3_Impl_.flip = function(this1) {
	return { _0 : this1._2, _1 : this1._1, _2 : this1._0};
};
thx.core._Tuple.Tuple3_Impl_.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2};
};
thx.core._Tuple.Tuple3_Impl_.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1};
};
thx.core._Tuple.Tuple3_Impl_["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : v};
};
thx.core._Tuple.Tuple3_Impl_.toString = function(this1) {
	return "Tuple3(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + ")";
};
thx.core._Tuple.Tuple4_Impl_ = function() { };
thx.core._Tuple.Tuple4_Impl_.__name__ = true;
thx.core._Tuple.Tuple4_Impl_._new = function(_0,_1,_2,_3) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3};
};
thx.core._Tuple.Tuple4_Impl_.flip = function(this1) {
	return { _0 : this1._3, _1 : this1._2, _2 : this1._1, _3 : this1._0};
};
thx.core._Tuple.Tuple4_Impl_.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3};
};
thx.core._Tuple.Tuple4_Impl_.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2};
};
thx.core._Tuple.Tuple4_Impl_["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : v};
};
thx.core._Tuple.Tuple4_Impl_.toString = function(this1) {
	return "Tuple4(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + ")";
};
thx.core._Tuple.Tuple5_Impl_ = function() { };
thx.core._Tuple.Tuple5_Impl_.__name__ = true;
thx.core._Tuple.Tuple5_Impl_._new = function(_0,_1,_2,_3,_4) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4};
};
thx.core._Tuple.Tuple5_Impl_.flip = function(this1) {
	return { _0 : this1._4, _1 : this1._3, _2 : this1._2, _3 : this1._1, _4 : this1._0};
};
thx.core._Tuple.Tuple5_Impl_.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4};
};
thx.core._Tuple.Tuple5_Impl_.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3};
};
thx.core._Tuple.Tuple5_Impl_["with"] = function(this1,v) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4, _5 : v};
};
thx.core._Tuple.Tuple5_Impl_.toString = function(this1) {
	return "Tuple5(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + "," + Std.string(this1._4) + ")";
};
thx.core._Tuple.Tuple6_Impl_ = function() { };
thx.core._Tuple.Tuple6_Impl_.__name__ = true;
thx.core._Tuple.Tuple6_Impl_._new = function(_0,_1,_2,_3,_4,_5) {
	return { _0 : _0, _1 : _1, _2 : _2, _3 : _3, _4 : _4, _5 : _5};
};
thx.core._Tuple.Tuple6_Impl_.flip = function(this1) {
	return { _0 : this1._5, _1 : this1._4, _2 : this1._3, _3 : this1._2, _4 : this1._1, _5 : this1._0};
};
thx.core._Tuple.Tuple6_Impl_.dropLeft = function(this1) {
	return { _0 : this1._1, _1 : this1._2, _2 : this1._3, _3 : this1._4, _4 : this1._5};
};
thx.core._Tuple.Tuple6_Impl_.dropRight = function(this1) {
	return { _0 : this1._0, _1 : this1._1, _2 : this1._2, _3 : this1._3, _4 : this1._4};
};
thx.core._Tuple.Tuple6_Impl_.toString = function(this1) {
	return "Tuple6(" + Std.string(this1._0) + "," + Std.string(this1._1) + "," + Std.string(this1._2) + "," + Std.string(this1._3) + "," + Std.string(this1._4) + "," + Std.string(this1._5) + ")";
};
thx.core.error = {};
thx.core.error.NullArgument = function(message,posInfo) {
	thx.core.Error.call(this,message,null,posInfo);
};
thx.core.error.NullArgument.__name__ = true;
thx.core.error.NullArgument.__super__ = thx.core.Error;
thx.core.error.NullArgument.prototype = $extend(thx.core.Error.prototype,{
	__class__: thx.core.error.NullArgument
});
var wargame = {};
wargame.Game = function(stage,renderer) {
	this.stage = stage;
	this.renderer = renderer;
};
wargame.Game.__name__ = true;
wargame.Game.prototype = {
	start: function() {
	}
	,__class__: wargame.Game
};
function $iterator(o) { if( o instanceof Array ) return function() { return HxOverrides.iter(o); }; return typeof(o.iterator) == 'function' ? $bind(o,o.iterator) : o.iterator; }
var $_, $fid = 0;
function $bind(o,m) { if( m == null ) return null; if( m.__id__ == null ) m.__id__ = $fid++; var f; if( o.hx__closures__ == null ) o.hx__closures__ = {}; else f = o.hx__closures__[m.__id__]; if( f == null ) { f = function(){ return f.method.apply(f.scope, arguments); }; f.scope = o; f.method = m; o.hx__closures__[m.__id__] = f; } return f; }
if(Array.prototype.indexOf) HxOverrides.indexOf = function(a,o,i) {
	return Array.prototype.indexOf.call(a,o,i);
};
Math.NaN = Number.NaN;
Math.NEGATIVE_INFINITY = Number.NEGATIVE_INFINITY;
Math.POSITIVE_INFINITY = Number.POSITIVE_INFINITY;
Math.isFinite = function(i) {
	return isFinite(i);
};
Math.isNaN = function(i1) {
	return isNaN(i1);
};
String.prototype.__class__ = String;
String.__name__ = true;
Array.__name__ = true;
var Int = { __name__ : ["Int"]};
var Dynamic = { __name__ : ["Dynamic"]};
var Float = Number;
Float.__name__ = ["Float"];
var Bool = Boolean;
Bool.__ename__ = ["Bool"];
var Class = { __name__ : ["Class"]};
var Enum = { };
if(Array.prototype.map == null) Array.prototype.map = function(f) {
	var a = [];
	var _g1 = 0;
	var _g = this.length;
	while(_g1 < _g) {
		var i = _g1++;
		a[i] = f(this[i]);
	}
	return a;
};
if(Array.prototype.filter == null) Array.prototype.filter = function(f1) {
	var a1 = [];
	var _g11 = 0;
	var _g2 = this.length;
	while(_g11 < _g2) {
		var i1 = _g11++;
		var e = this[i1];
		if(f1(e)) a1.push(e);
	}
	return a1;
};

      // Production steps of ECMA-262, Edition 5, 15.4.4.21
      // Reference: http://es5.github.io/#x15.4.4.21
      if (!Array.prototype.reduce) {
        Array.prototype.reduce = function(callback /*, initialValue*/) {
          'use strict';
          if (this == null) {
            throw new TypeError('Array.prototype.reduce called on null or undefined');
          }
          if (typeof callback !== 'function') {
            throw new TypeError(callback + ' is not a function');
          }
          var t = Object(this), len = t.length >>> 0, k = 0, value;
          if (arguments.length == 2) {
            value = arguments[1];
          } else {
            while (k < len && ! k in t) {
              k++;
            }
            if (k >= len) {
              throw new TypeError('Reduce of empty array with no initial value');
            }
            value = t[k++];
          }
          for (; k < len; k++) {
            if (k in t) {
              value = callback(value, t[k], k, t);
            }
          }
          return value;
        };
      }
    ;
thx.core.Floats.TOLERANCE = 10e-5;
thx.core.Floats.EPSILON = 10e-10;
thx.core.Floats.pattern_parse = new EReg("^(\\+|-)?\\d+(\\.\\d+)?(e-?\\d+)?$","");
Config.width = 800;
Config.height = 600;
Config.backgroundColor = thx.color._HSL.HSL_Impl_.create(0,0.0,0);
thx.color._Grey.Grey_Impl_.black = 0;
thx.color._Grey.Grey_Impl_.white = 1;
thx.color.parse.ColorParser.parser = new thx.color.parse.ColorParser();
thx.color.parse.ColorParser.isPureHex = new EReg("^([0-9a-f]{2}){3,4}$","i");
thx.core.Ints.pattern_parse = new EReg("^[+-]?(\\d+|0x[0-9A-F]+)$","i");
thx.core.Ints.BASE = "0123456789abcdefghijklmnopqrstuvwxyz";
thx.core.Strings.UCWORDS = new EReg("[^a-zA-Z]([a-z])","g");
thx.core.Strings.UCWORDSWS = new EReg("\\s[a-z]","g");
thx.core.Strings.ALPHANUM = new EReg("^[a-z0-9]+$","i");
thx.core.Strings.DIGITS = new EReg("^[0-9]+$","");
thx.core.Strings.STRIPTAGS = new EReg("</?[a-z]+[^>]*?/?>","gi");
thx.core.Strings.WSG = new EReg("\\s+","g");
thx.core.Strings.SPLIT_LINES = new EReg("\r\n|\n\r|\n|\r","g");
Main.main();
})();