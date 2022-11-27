var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

/* based on xajax Javascript library (http://www.xajaxproject.org) */
if (!window.jtajax) {

function jtAJAX()
{
	this.options = {url: '',type: 'post',nocache: true,data: ''};

	this.$ = function(id) {if(!id){return null;}var o=document.getElementById(id);if(!o&&document.all){o=document.all[id];}return o;};
	this.extend = function(o, e){for(var k in (e||{}))o[k]=e[k];return o;};
	this.encode = function(t){return encodeURIComponent(t);};
	this.setup = function(options) {this.options = this.extend(this.options, options);};

	this.xhr = function()
	{
		var xhr = null;
		if ('undefined' != typeof XMLHttpRequest) xhr = new XMLHttpRequest();
		if (!xhr && 'undefined' != typeof ActiveXObject) {
			var msxmlhttp = new Array('Msxml2.XMLHTTP.4.0','Msxml2.XMLHTTP.3.0','Msxml2.XMLHTTP','Microsoft.XMLHTTP');
			for (var i=0;i<msxmlhttp.length;i++){try{xhr=new ActiveXObject(msxmlhttp[i]);}catch(e){xhr=null;}}
		}
		return xhr;
	};
	
	this.form2query = function(sId)
	{
		var frm = this.$(sId);
		if (frm && frm.tagName.toUpperCase() == 'FORM') {
			var e = frm.elements, query = [];
			for (var i=0; i < e.length; i++) {
				var name = e[i].name;
				if (!name) continue;
				if (e[i].type && ('radio' == e[i].type || 'checkbox' == e[i].type) && false === e[i].checked) continue;
				if ('select-multiple' == e[i].type) {
					for (var j = 0; j < e[i].length; j++) {
						if (true === e[i].options[j].selected)
							query.push(name+"="+this.encode(e[i].options[j].value));
					}
				} else { query.push(name+"="+this.encode(e[i].value)); 
				}
			}
			return query.join('&');
		}
		return '';
	};

	this.startLoading = function(){};
	this.finishLoading = function(){};

	this.ajax = function(options)
	{
		var xhr = this.xhr();
		if (!xhr) return false;
		var o = this.extend(this.options, options);
		var url = o.url, jtx = this;url=url.replace(/&amp;/g,'&');
		var r=url;var h=location.hostname,d,i1,i2;i1=r.indexOf('://');if(i1!=-1){i2=r.indexOf('/',i1+3);if(i2!=-1){d=r.substring(i1+3,i2);if(d!=h){if(location.port!=''){h=h+':'+location.port;}r=r.replace(d,h);url=r;}}}
		
		if ('get' == o.type) {
			if (true === o.nocache) {
				var ts=new Date().getTime();
				url += (url.indexOf("?")==-1 ? '?' : '&') + '_jtxr_' + ts;
			}
			if (o.data) {
				url += (url.indexOf("?")==-1 ? '?' : '&') + o.data;
				o.data = null;
			}
		}

		xhr.open(o.type.toUpperCase(), url, true);

		if ('post' == o.type)
			try {xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");}catch(e){}
		if (true === o.nocache)
			xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jan 1970 00:00:00 GMT');

		xhr.onreadystatechange = function() {
			if (xhr.readyState != 4) return;
			jtx.finishLoading();
			if (xhr.status==200) {
				jtx.processResponse(xhr.responseText);
			}
			delete xhr;
			xhr = null;
		};
		try {
			jtx.startLoading();
			xhr.send(o.data);
		} catch(e) { jtx.finishLoading(); }

		delete jtx;
		delete xhr;
		delete o;
		return true;
	};

	this.call = function(sFunction, aArgs, sType, sForm)
	{
		var params = 'jtxf=' + this.encode(sFunction);
		if (aArgs) {
			for (var i=0;i<aArgs.length;i++) {
				params += '&jtxa[]=' + this.encode(aArgs[i]);
			}
		} else if (sForm) {
			params += '&' + this.form2query(sForm);
		}

		this.ajax({type: sType, data: params});
		return true;
	};

	this.processResponse = function(sText)
	{
		if(sText==='') return false;
		if(sText.substring(0,3)!='[ {'){var idx=sText.indexOf('[ {');sText=sText.substr(idx);}
		var result;try {result=eval(sText);}catch(e){}
		if ('undefined' == typeof result) {return false;}

		var cmd, id, property, data, obj = null;

		for (var i=0;i<result.length;i++) {
			cmd 		= result[i]['n'];
			id 		= result[i]['t'];
			property	= result[i]['p'];
			data 		= result[i]['d'];
			obj 		= this.$(id);

			switch(cmd) {
				case 'as': if(obj){eval("obj."+property+"=data;");} break;
				case 'al': if(data){alert(data);} break;
				case 'js': if(data){eval(data);} break;
				default: this.error('Unknown command: ' + cmd);break;
			}
		}
		
		delete result;
		delete cmd;
		delete id;
		delete property;
		delete data;
		delete obj;
		return true;
	};

	this.error = function(){};
}
var jtajax = new jtAJAX();
}

}
/*
     FILE ARCHIVED ON 20:53:37 Mar 02, 2017 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 18:15:56 Sep 12, 2022.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 88.347
  exclusion.robots: 0.104
  exclusion.robots.policy: 0.095
  RedisCDXSource: 3.978
  esindex: 0.018
  LoadShardBlock: 69.044 (3)
  PetaboxLoader3.datanode: 103.541 (5)
  CDXLines.iter: 12.672 (3)
  load_resource: 1584.496 (2)
  PetaboxLoader3.resolve: 95.703 (2)
*/