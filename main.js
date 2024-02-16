(()=>{var t={353:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,r="millisecond",n="second",s="minute",i="hour",u="day",a="week",o="month",c="quarter",f="year",h="date",d="Invalid Date",l=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,$=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],r=t%100;return"["+t+(e[(r-20)%10]||e[r]||e[0])+"]"}},y=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},M={s:y,z:function(t){var e=-t.utcOffset(),r=Math.abs(e),n=Math.floor(r/60),s=r%60;return(e<=0?"+":"-")+y(n,2,"0")+":"+y(s,2,"0")},m:function t(e,r){if(e.date()<r.date())return-t(r,e);var n=12*(r.year()-e.year())+(r.month()-e.month()),s=e.clone().add(n,o),i=r-s<0,u=e.clone().add(n+(i?-1:1),o);return+(-(n+(r-s)/(i?s-u:u-s))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:o,y:f,w:a,d:u,D:h,h:i,m:s,s:n,ms:r,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},m="en",g={};g[m]=v;var p="$isDayjsObject",D=function(t){return t instanceof b||!(!t||!t[p])},S=function t(e,r,n){var s;if(!e)return m;if("string"==typeof e){var i=e.toLowerCase();g[i]&&(s=i),r&&(g[i]=r,s=i);var u=e.split("-");if(!s&&u.length>1)return t(u[0])}else{var a=e.name;g[a]=e,s=a}return!n&&s&&(m=s),s||!n&&m},w=function(t,e){if(D(t))return t.clone();var r="object"==typeof e?e:{};return r.date=t,r.args=arguments,new b(r)},O=M;O.l=S,O.i=D,O.w=function(t,e){return w(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var b=function(){function v(t){this.$L=S(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[p]=!0}var y=v.prototype;return y.parse=function(t){this.$d=function(t){var e=t.date,r=t.utc;if(null===e)return new Date(NaN);if(O.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var n=e.match(l);if(n){var s=n[2]-1||0,i=(n[7]||"0").substring(0,3);return r?new Date(Date.UTC(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)):new Date(n[1],s,n[3]||1,n[4]||0,n[5]||0,n[6]||0,i)}}return new Date(e)}(t),this.init()},y.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},y.$utils=function(){return O},y.isValid=function(){return!(this.$d.toString()===d)},y.isSame=function(t,e){var r=w(t);return this.startOf(e)<=r&&r<=this.endOf(e)},y.isAfter=function(t,e){return w(t)<this.startOf(e)},y.isBefore=function(t,e){return this.endOf(e)<w(t)},y.$g=function(t,e,r){return O.u(t)?this[e]:this.set(r,t)},y.unix=function(){return Math.floor(this.valueOf()/1e3)},y.valueOf=function(){return this.$d.getTime()},y.startOf=function(t,e){var r=this,c=!!O.u(e)||e,d=O.p(t),l=function(t,e){var n=O.w(r.$u?Date.UTC(r.$y,e,t):new Date(r.$y,e,t),r);return c?n:n.endOf(u)},$=function(t,e){return O.w(r.toDate()[t].apply(r.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),r)},v=this.$W,y=this.$M,M=this.$D,m="set"+(this.$u?"UTC":"");switch(d){case f:return c?l(1,0):l(31,11);case o:return c?l(1,y):l(0,y+1);case a:var g=this.$locale().weekStart||0,p=(v<g?v+7:v)-g;return l(c?M-p:M+(6-p),y);case u:case h:return $(m+"Hours",0);case i:return $(m+"Minutes",1);case s:return $(m+"Seconds",2);case n:return $(m+"Milliseconds",3);default:return this.clone()}},y.endOf=function(t){return this.startOf(t,!1)},y.$set=function(t,e){var a,c=O.p(t),d="set"+(this.$u?"UTC":""),l=(a={},a[u]=d+"Date",a[h]=d+"Date",a[o]=d+"Month",a[f]=d+"FullYear",a[i]=d+"Hours",a[s]=d+"Minutes",a[n]=d+"Seconds",a[r]=d+"Milliseconds",a)[c],$=c===u?this.$D+(e-this.$W):e;if(c===o||c===f){var v=this.clone().set(h,1);v.$d[l]($),v.init(),this.$d=v.set(h,Math.min(this.$D,v.daysInMonth())).$d}else l&&this.$d[l]($);return this.init(),this},y.set=function(t,e){return this.clone().$set(t,e)},y.get=function(t){return this[O.p(t)]()},y.add=function(r,c){var h,d=this;r=Number(r);var l=O.p(c),$=function(t){var e=w(d);return O.w(e.date(e.date()+Math.round(t*r)),d)};if(l===o)return this.set(o,this.$M+r);if(l===f)return this.set(f,this.$y+r);if(l===u)return $(1);if(l===a)return $(7);var v=(h={},h[s]=t,h[i]=e,h[n]=1e3,h)[l]||1,y=this.$d.getTime()+r*v;return O.w(y,this)},y.subtract=function(t,e){return this.add(-1*t,e)},y.format=function(t){var e=this,r=this.$locale();if(!this.isValid())return r.invalidDate||d;var n=t||"YYYY-MM-DDTHH:mm:ssZ",s=O.z(this),i=this.$H,u=this.$m,a=this.$M,o=r.weekdays,c=r.months,f=r.meridiem,h=function(t,r,s,i){return t&&(t[r]||t(e,n))||s[r].slice(0,i)},l=function(t){return O.s(i%12||12,t,"0")},v=f||function(t,e,r){var n=t<12?"AM":"PM";return r?n.toLowerCase():n};return n.replace($,(function(t,n){return n||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return O.s(e.$y,4,"0");case"M":return a+1;case"MM":return O.s(a+1,2,"0");case"MMM":return h(r.monthsShort,a,c,3);case"MMMM":return h(c,a);case"D":return e.$D;case"DD":return O.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return h(r.weekdaysMin,e.$W,o,2);case"ddd":return h(r.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(i);case"HH":return O.s(i,2,"0");case"h":return l(1);case"hh":return l(2);case"a":return v(i,u,!0);case"A":return v(i,u,!1);case"m":return String(u);case"mm":return O.s(u,2,"0");case"s":return String(e.$s);case"ss":return O.s(e.$s,2,"0");case"SSS":return O.s(e.$ms,3,"0");case"Z":return s}return null}(t)||s.replace(":","")}))},y.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},y.diff=function(r,h,d){var l,$=this,v=O.p(h),y=w(r),M=(y.utcOffset()-this.utcOffset())*t,m=this-y,g=function(){return O.m($,y)};switch(v){case f:l=g()/12;break;case o:l=g();break;case c:l=g()/3;break;case a:l=(m-M)/6048e5;break;case u:l=(m-M)/864e5;break;case i:l=m/e;break;case s:l=m/t;break;case n:l=m/1e3;break;default:l=m}return d?l:O.a(l)},y.daysInMonth=function(){return this.endOf(o).$D},y.$locale=function(){return g[this.$L]},y.locale=function(t,e){if(!t)return this.$L;var r=this.clone(),n=S(t,e,!0);return n&&(r.$L=n),r},y.clone=function(){return O.w(this.$d,this)},y.toDate=function(){return new Date(this.valueOf())},y.toJSON=function(){return this.isValid()?this.toISOString():null},y.toISOString=function(){return this.$d.toISOString()},y.toString=function(){return this.$d.toUTCString()},v}(),_=b.prototype;return w.prototype=_,[["$ms",r],["$s",n],["$m",s],["$H",i],["$W",u],["$M",o],["$y",f],["$D",h]].forEach((function(t){_[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),w.extend=function(t,e){return t.$i||(t(e,b,w),t.$i=!0),w},w.locale=S,w.isDayjs=D,w.unix=function(t){return w(1e3*t)},w.en=g[m],w.Ls=g,w.p={},w}()}},e={};function r(n){var s=e[n];if(void 0!==s)return s.exports;var i=e[n]={exports:{}};return t[n].call(i.exports,i,i.exports,r),i.exports}r.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return r.d(e,{a:e}),e},r.d=(t,e)=>{for(var n in e)r.o(e,n)&&!r.o(t,n)&&Object.defineProperty(t,n,{enumerable:!0,get:e[n]})},r.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";var t=r(353),e=r.n(t);const n=e()("2025-03-01"),s=document.getElementById("number"),i=n.diff(e()(),"day");console.log(parseInt(i)),s.innerText=i})()})();