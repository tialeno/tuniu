!function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="",t(0)}([function(e,t,o){o(4),o(5),e.exports=o(6)},,,,function(module,exports){!function(win){var _tac=win._tac=win._tac||[],_tat=win._tat=win._tat||function(){function setCurrentTime(){var e=(new Date).getTime();return e}function isDefined(e){return"undefined"!=(e=typeof e)&&"unknown"!==e}function apply(e){var t=e.shift();"string"==typeof t?asyncTracker[t].apply(this,e):t.apply(this,e)}function addEventListener(e,t,o,n){return e.addEventListener?(e.addEventListener(t,o,n),!0):e.attachEvent?e.attachEvent("on"+t,o):void(e["on"+t]=o)}function executePluginMethod(e,t){var o,n,i="";for(o in plugins)n=plugins[o][e],"function"==typeof n&&(i+=n(t));return i}function beforeUnloadHandler(e){if(executePluginMethod("unload"),isDefined(expireDateTime)){var t;do t=new Date;while(t.getTime()<expireDateTime)}}function loadHandler(e){if(!hasLoaded){hasLoaded=!0,executePluginMethod("load");for(var t=0;t<registeredOnLoadHandlers.length;t++)registeredOnLoadHandlers[t]()}return!0}function addReadyListener(){documentAlias.addEventListener?addEventListener(documentAlias,"DOMContentLoaded",function e(){documentAlias.removeEventListener("DOMContentLoaded",e,!1),loadHandler()}):documentAlias.attachEvent&&(documentAlias.attachEvent("onreadystatechange",function e(){"complete"===documentAlias.readyState&&(documentAlias.detachEvent("onreadystatechange",e),loadHandler())}),documentAlias.documentElement.doScroll&&windowAlias==windowAlias.top&&!function e(){if(!hasLoaded){try{documentAlias.documentElement.doScroll("left")}catch(t){return void setTimeout(e,0)}loadHandler()}}()),addEventListener(windowAlias,"load",loadHandler,!1)}function getReferrer(){var e="";try{e=top.documentAlias.referrer}catch(t){if(parent)try{e=parent.documentAlias.referrer}catch(t){e=""}}return""===e&&(e=documentAlias.referrer),e}function getHostname(e){var t=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),o=t.exec(e);return o?o[1]:e}function getParameter(e,t){var o=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),n=o.exec(e),i=new RegExp("(?:^|&)"+t+"=([^&]*)"),a=n?i.exec(n[1]):0;return a?unescapeWrapper(a[1]):""}function urlFixup(e,t,o){return"webcache.googleusercontent.com"==e||"cc.bingj.com"==e||"74.6."==e.substr(0,5)?(t=documentAlias.links[0].href,e=getHostname(t)):"translate.googleusercontent.com"==e&&(""===o&&(o=t),t=getParameter(t,"u"),e=getHostname(t)),[e,t,o]}function getCookieDomain(){var e=window.location.host;if(!/^[\d\.]+$/.test(e)){var t=e.match(/(^|\.)(\w+\.\w+)$/);if(t&&t[2])return"."+t[2]}return".tuniu.com"}function Tracker(){function needSetUtmCookie(e){return decodeURIComponent(e).indexOf("utm_source")>0&&!hasCookie("tuniu_p_utm")}function isTuanUrl(e){var t=/^http:\/\/tuan|^tuan/,o=new RegExp(t);return!!o.test(e)}function getBrowser(){var e=windowAlias.innerWidth,t=windowAlias.innerHeight;return"number"!=typeof e&&("CSS1Compat"==documentAlias.compatMode?(e=documentAlias.documentElement.clientWidth,t=documentAlias.documentElement.clientHeight):null==documentAlias.body?(e=0,t=0):(e=documentAlias.body.clientWidth,t=documentAlias.body.clientHeight)),[e,t]}function getRequest(){var e="",t="";navigatorAlias.cookieEnabled&&(e=getAnalysisCookie()),"undefined"==typeof analyTuniuBeginTime||isNaN(analyTuniuBeginTime)||(loadSpend=loginTime-analyTuniuBeginTime),"undefined"==typeof analyTuniuSpend||isNaN(analyTuniuSpend)||(executeSpend=Math.floor(1e3*analyTuniuSpend)),pageName||(pageName=visitUrl.split("?")[0]);var o="";return hasCookie("from_url")?(o=getCookieWithOutUnescape("from_url"),delCookieSelf("from_url")):o=escapeWrapper(fromUrl),t="hw="+browserHW+"&bt="+browserType+"&bv="+browserVersion+"&fu="+o+"&lg="+loginTime+"&co="+e+"&vu="+escapeWrapper(visitUrl)+"&sr="+screenResolution+"&sc="+screenColor+"&os="+operatingSystem+"&fv="+flashVersion+"&la="+language+"&je="+javaEnabled+"&ce="+cookieEnabled+"&tn=&pn="+escapeWrapper(escapeWrapper(pageName))+"&clt="+linkType+"&ev="+isEvent+"&ei="+eventId+"&ps="+loadSpend+"&es="+executeSpend}function logPageView(e){logPageViewRequest();var t=getRequest();sendRequest(t,configTrackerPause)}function logPageViewRequest(e){e&&(isEvent=0)}function logLink(e,t){fromUrl=locationArray[1],visitUrl=e,linkType=t,loginTime=setCurrentTime();var o=getRequest();sendRequest(o,configTrackerPause)}function sendRequest(e,t){var o=new Date;expireDateTime=o.getTime()+t,getImage(e)}function getImage(e,t){var o=new Image(1,1);o.onload=function(){},o.onerror=function(){t?t+=1:t=1,t<=3&&setTimeout(function(){getImage(e,t)},1e3)},t?o.src=configTrackerURL+"?"+e+"&sid="+getSid()+"&retry="+t:o.src=configTrackerURL+"?"+e+"&sid="+getSid(),o=null}function getSid(){var e,t=""+loginTime,o="",n="";t=t.substr(t.length-8);for(var i=0;i<t.length;i++)e=Math.floor(10*Math.random()),n+=e,o+=t.charCodeAt(i)<<e;return n+o}function isSiteHostName(e){var t,o,n;for(t=0;t<configHostsAlias.length;t++){if(o=configHostsAlias[t].toLowerCase(),e==o)return!0;if(e.indexOf("tuniu"))return!0;if("*."==o.substr(0,2)){if(e==o.substr(2))return!0;if(n=e.length-o.length+1,n>0&&e.substr(n)==o.substr(1))return!0}}return!1}function getClassesRegExp(e,t){var o,n="(^| )(piwik[_-]"+t;if(isDefined(e))for(o=0;o<e.length;o++)n+="|"+e[o];return n+=")( |$)",new RegExp(n)}function getLinkType(e,t,o){if(!o)return"link";var n=getClassesRegExp(configDownloadClasses,"download"),i=getClassesRegExp(configLinkClasses,"link"),a=new RegExp("\\.("+configDownloadExtensions+")([?&#]|$)","i");return i.test(e)?"link":n.test(e)||a.test(t)?"download":0}function clickHandler(e){var t,o,n,i,a,r,s,c;if(isDefined(e)||(e=windowAlias.event),isDefined(e.target))t=e.target;else{if(!isDefined(e.srcElement))return;t=e.srcElement}for(;(o=t.parentNode)&&"A"!=(n=t.tagName)&&"AREA"!=n;)t=o;isDefined(t.href)&&(a=t.hostname,r=a.toLowerCase(),s=t.href.replace(a,r),c=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript): *","i"),c.test(s)||(i=getLinkType(t.className,s,isSiteHostName(r)),i&&logLink(s,i)))}function addClickListener(e){addEventListener(e,"click",clickHandler,!1)}function addClickListeners(){if(!linkTrackingInstalled){linkTrackingInstalled=!0;var e,t=getClassesRegExp(configIgnoreClasses,"ignore"),o=documentAlias.links;if(o)for(e=0;e<o.length;e++)t.test(o[e].className)||addClickListener(o[e])}}function registerHook(hookName,userHook){var hookObj=null;if("string"==typeof hookName&&!isDefined(registeredHooks[hookName])){if("object"==typeof userHook)hookObj=userHook;else if("string"==typeof userHook)try{eval("hookObj ="+userHook)}catch(e){}registeredHooks[hookName]=hookObj}return hookObj}function setAnalysisCookie(){setAnonyCookie(regUserCookieName,tacauName),setTraceCookie(tactName),setTaczCookie(taczName),setTacaCookie(taccName,tacbName,tacaName),setTacbCookie(taccName,tacbName),setTaccCookie(taccName)}function getAnalysisCookie(){setAnalysisCookie();var e="";if(hasCookie(tacaName)&&("opera"===browserType&&""!==_opera_ta[0]?(e+=tacaName+"="+_opera_ta[0]+";",_opera_ta[0]=""):e+=tacaName+"="+getCookie(tacaName)+";"),hasCookie(tacbName)&&("opera"===browserType&&""!==_opera_ta[1]?(e+=tacbName+"="+_opera_ta[1]+";",_opera_ta[1]=""):e+=tacbName+"="+getCookie(tacbName)+";"),hasCookie(tacauName)&&(e+=tacauName+"="+getCookie(tacauName)+";"),hasCookie(tactName)&&(e+=tactName+"="+getCookie(tactName)+";"),hasCookie(taczName)&&("opera"===browserType&&""!==_opera_ta[2]?(e+=taczName+"="+_opera_ta[2]+";",_opera_ta[2]=""):e+=taczName+"="+getCookie(taczName)+";"),hasCookie("tuniu_partner")&&(e+="tuniu_partner="+getCookie("tuniu_partner")+";"),hasCookie("tuniuuser")&&(e+="tuniuuser="+getCookie("tuniuuser")+";"),hasCookie("tuniuuser_citycode")&&(e+="tuniuuser_citycode="+getCookie("tuniuuser_citycode")+";"),hasCookie("tuniuuser_id")&&(e+="tuniuuser_id="+getCookie("tuniuuser_id")+";"),hasCookie(dfyooUserCookieName)&&(e+=dfyooUserCookieName+"="+getCookie(dfyooUserCookieName)+";"),hasCookie(dfyooCompanyCookieName)&&(e+=dfyooCompanyCookieName+"="+getCookie(dfyooCompanyCookieName)+";"),null!=navigatorAlias.userAgent&&navigatorAlias.userAgent.length>0&&(e+="userAgent="+base64encode(escape(navigatorAlias.userAgent))+";"),"undefined"!=typeof exposure&&null!=exposure&&exposure.length>0&&(e+="exposure="+base64encode(escape(exposure))+";"),"undefined"!=typeof abTest&&null!=abTest&&1===abTest.length&&(e+="abTest="+abTest+";"),"undefined"!=typeof extendArray&&extendArray instanceof Array){for(var t=[],o=0;o<extendArray.length;o++)null!=extendArray[o]&&""!=trimStr(extendArray[o].toString())&&t.push(trimStr(extendArray[o].toString()));t.length>0&&(e+="extend="+base64encode(t.join("#"))+";")}return e+="ct=0;"}function trimStr(e){return e.replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function setTaczCookie(e,t){new Array;if(hasCookie(e)){if(isSearchEnginePay())return void resetTaczCookie(!0);if(isSearchEngine())return void resetTaczCookie(!0);if(isCampaign())return void resetTaczCookie(!0);if(!(hasCookie(tacbName)&&hasCookie(taccName)||isRight())&&isReferral())return void resetTaczCookie(!0)}else setNewTaczCookie(t)}function setNewTaczCookie(e){return isSearchEnginePay()?void resetTaczCookie(!1):isSearchEngine()?void resetTaczCookie(!1):isCampaign()?void resetTaczCookie(!1):isReferral()?void resetTaczCookie(!1):isReferral()?void resetTaczCookie(!1):(directInfo(),void resetTaczCookie(!1))}function getQueryStringRegExp(e,t){var o=new RegExp("(^|&|\\?)"+t+"=([^&]*)(&|$|#)"),n=e.match(o);return n?n[2]:""}function resetTaczCookie(e){var t;(e||"true"==e)&&delCookie(taczName),t="taccsr="+sourceValue+"|tacccn="+mediumValue+"|taccmd="+campaignValue+"|taccct="+termValue.replace(new RegExp("%","g"),"%25")+"|taccrt="+contentValue.replace(new RegExp("%","g"),"%25"),setCookie(taczName,t,taczTimeoutHours,cookiePath,cookieDomain)}function directInfo(){sourceValue="(direct)",mediumValue="(none)",campaignValue="(none)",termValue="(none)",contentValue="(none)"}function isReferral(){return!(isRight()||!getHostname(fromUrl))&&(sourceValue=getHostname(fromUrl),mediumValue="(referral)",campaignValue="(none)",termValue="(none)",contentValue="(none)",!0)}function isSearchEngine(){var e;return e=new Array,e=getSearchKey(),2==e.length&&(sourceValue=e[0],mediumValue="(organic)",campaignValue=getQueryStringRegExp(visitUrl,tam_cmp)?getQueryStringRegExp(visitUrl,tam_cmp):"(none)",termValue=e[1],contentValue=getQueryStringRegExp(visitUrl,tam_content)?getQueryStringRegExp(visitUrl,tam_content):getQueryStringRegExp(visitUrl,kw)?getQueryStringRegExp(visitUrl,kw):"(none)",!0)}function getSearchKey(){var e,t=organicEngine,o=organicKeyword;e=new Array;for(var n=0;n<t.length;n++)if(fromUrl.indexOf(t[n])>-1&&getQueryStringRegExp(fromUrl,o[n])){e[0]=t[n].replace(/(.*)(\.(com|cn|org).*)$/gi,"$1"),e[1]=getQueryStringRegExp(fromUrl,o[n]);break}return e}function isSearchEnginePay(){var e,t=organicPayVaule,o=organicPayEngine;e=new Array;for(var n=0;n<t.length;n++)if(t[n]==getQueryStringRegExp(visitUrl,tam_pay))return mediumValue="(cpc)",sourceValue=o[n],campaignValue=getQueryStringRegExp(visitUrl,tam_cmp)?getQueryStringRegExp(visitUrl,tam_cmp):getQueryStringRegExp(visitUrl,tam_campaign)?getQueryStringRegExp(visitUrl,tam_campaign):"(none)",e=getSearchKey(),termValue=2==e.length?e[1]:"(none)",contentValue=getQueryStringRegExp(visitUrl,tam_content)?getQueryStringRegExp(visitUrl,tam_content):getQueryStringRegExp(visitUrl,kw)?getQueryStringRegExp(visitUrl,kw):"(none)",!0;return!1}function isCampaign(){return!!getQueryStringRegExp(visitUrl,tam_cmp)&&(campaignValue=getQueryStringRegExp(visitUrl,tam_cmp),mediumValue="(campaign)",sourceValue=fromUrl?getHostname(fromUrl):"(direct)",termValue=getQueryStringRegExp(visitUrl,tam_term)?getQueryStringRegExp(visitUrl,tam_term):"(none)",contentValue=getQueryStringRegExp(visitUrl,tam_content)?getQueryStringRegExp(visitUrl,tam_content):"(none)",!0)}function isRight(){for(var e=ignoredReferrer,t=e.length,o=0;o<t;o++)if(getHostname(fromUrl).indexOf(e[o])>-1)return!0;return!1}function setAnonyCookie(e,t){if(hasCookie(e))hasCookie(t)&&delCookie(t);else if(0==hasCookie(t)){var o="0,"+newGuid()+",";setCookie(t,base64encode(o),360,cookiePath,cookieDomain)}}function setTraceCookie(e){hasCookie(e)?resetCookie(e,tacaTimeoutHours,cookiePath,cookieDomain):setCookie(e,base64encode(newGuid()),tacaTimeoutHours,cookiePath,cookieDomain)}function setTaccCookie(e){0==hasCookie(e)&&setCookie(e,"1","",cookiePath,cookieDomain)}function setTacbCookie(e,t){hasCookie(e)?hasCookie(t)?resetCookie(t,tacbTimeoutHours,cookiePath,cookieDomain):setCookie(t,base64encode(newGuid()),tacbTimeoutHours,cookiePath,cookieDomain):hasCookie(t)?(delCookie(t),setCookie(t,base64encode(newGuid()),tacbTimeoutHours,cookiePath,cookieDomain)):setCookie(t,base64encode(newGuid()),tacbTimeoutHours,cookiePath,cookieDomain)}function setTacaCookie(e,t,o){hasCookie(e)&&hasCookie(t)?0==hasCookie(o)&&setFirstTacaCookie():hasCookie(o)?resetTacaCookie(o):setFirstTacaCookie()}function resetTacaCookie(e){var t=getCookie(e),o=t.split(".");delCookie(e),t=o[0]+"."+o[2]+"."+loginTime+"."+(parseInt(o[3])+1),setCookie(e,t,tacaTimeoutHours,cookiePath,cookieDomain)}function setFirstTacaCookie(){var e=1,t=loginTime+"."+loginTime+"."+loginTime+"."+e;setCookie(tacaName,t,tacaTimeoutHours,cookiePath,cookieDomain)}function setCookie(e,t,o,n,i){var a;"opera"===browserType&&("_taca"===e?_opera_ta[0]=t:"_tacb"===e?_opera_ta[1]=t:"_tacz"===e&&(_opera_ta[2]=t)),o&&(a=new Date,a.setTime(a.getTime()+36e5*o)),documentAlias.cookie=e+"="+escape(t)+(o?";expires="+a.toGMTString():"")+";path="+(n?n:"/")+(i?";domain="+i:"")}function resetCookie(e,t,o,n){var i=getCookie(e);delCookie(e),setCookie(e,i,t,o,n)}function hasCookie(e){var t,o=documentAlias.cookie,n=0,i=o.length;for(e+="=";n<i;){if(t=n+e.length,o.substring(n,t)==e)return!0;if(n=o.indexOf(" ",n)+1,0==n)break}return!1}function delCookie(e){var t=new Date,o=getCookie(e);t.setTime(t.getTime()-1),null!=o&&(documentAlias.cookie=e+"="+o+";expires="+t.toGMTString())}function delCookieSelf(e,t,o){t=t||cookiePath,o=o||cookieDomain;var n=new Date;n.setTime(n.getTime()-1),documentAlias.cookie=e+"=;domain="+o+";path="+t+";expires="+n.toGMTString()}function getCookieWithOutUnescape(e){var t=documentAlias.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!=t?t[2]:null}function getCookie(e){var t=getCookieWithOutUnescape(e);return null!==t?unescape(t):null}function getPlatform(){var e="not set",t="Win32"==navigatorAlias.platform||"Windows"==navigatorAlias.platform,o="Mac68K"==navigatorAlias.platform||"MacPPC"==navigatorAlias.platform||"Macintosh"==navigatorAlias.platform,n="X11"==navigatorAlias.platform&&!t&&!o;return o&&(e="Mac"),n&&(e="Unix"),String(navigator.platform).indexOf("Linux")>-1&&(e="Linux"),t&&((navigatorAlias.userAgent.indexOf("Win95")>-1||navigatorAlias.userAgent.indexOf("Windows 95")>-1)&&(e="windows 95"),(navigatorAlias.userAgent.indexOf("Win98")>-1||navigatorAlias.userAgent.indexOf("Windows 98")>-1)&&(e="windows 98"),(navigatorAlias.userAgent.indexOf("Windows 9x 4.90")>-1||navigatorAlias.userAgent.indexOf("Windows ME")>-1)&&(e="windows ME"),(navigatorAlias.userAgent.indexOf("Windows NT 5.0")>-1||navigatorAlias.userAgent.indexOf("Windows 2000")>-1)&&(e="windows 2000"),(navigatorAlias.userAgent.indexOf("Windows NT 5.1")>-1||navigatorAlias.userAgent.indexOf("Windows XP")>-1)&&(e="windows XP"),(navigatorAlias.userAgent.indexOf("Windows NT 5.2")>-1||navigatorAlias.userAgent.indexOf("Windows 2003")>-1)&&(e="windows 2003"),(navigatorAlias.userAgent.indexOf("Windows NT 6.0")>-1||navigatorAlias.userAgent.indexOf("Windows Vista")>-1)&&(e="Windows Vista"),(navigatorAlias.userAgent.indexOf("Windows NT 6.1")>-1||navigatorAlias.userAgent.indexOf("Windows 7")>-1)&&(e="Win7"),(navigatorAlias.userAgent.indexOf("Windows NT 6.2")>-1||navigatorAlias.userAgent.indexOf("Windows 8")>-1)&&(e="Win8")),android=navigatorAlias.userAgent.match(/(Android)[\s\/]+([\d\.]+)/),iPad=navigatorAlias.userAgent.match(/iPad/i),iPhone=navigatorAlias.userAgent.match(/iPhone/i),iPod=navigatorAlias.userAgent.match(/iPod/i),windowsPhone=navigatorAlias.userAgent.match(/(Windows\s+Phone)\s([\d\.]+)/),android&&(e="Android"),iPad&&(e="iOS-Pad"),iPhone&&(e="iOS-Phone"),iPod&&(e="iOS-Pod"),windowsPhone&&(e="WindowsPhone"),e}function _uFlash(){var e,t="-";if(navigatorAlias.plugins&&navigatorAlias.plugins.length){for(var o=0;o<navigatorAlias.plugins.length;o++)if(navigatorAlias.plugins[o].name.indexOf("Shockwave Flash")!=-1){t=navigatorAlias.plugins[o].description.split("Shockwave Flash ")[1];break}}else{try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7"),t=e.GetVariable("$version")}catch(e){}if("-"==t)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),t="WIN 6,0,21,0",e.AllowScriptAccess="always",t=e.GetVariable("$version")}catch(e){}if("-"==t)try{e=new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),t=e.GetVariable("$version")}catch(e){}"-"!=t&&(t=t.split(" ")[1].split(","),t=t[0]+"."+t[1]+" r"+t[2])}return t}function newGuid(){for(var e,t="",o=1;o<=32;o++)e=Math.floor(16*Math.random()).toString(16),t+=e,8!=o&&12!=o&&16!=o&&20!=o||(t+="-");return t}function base64encode(e){e=utf16to8(e);for(var t,o,n,i="",a=0,r=e.length,s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";a<r;){if(t=255&e.charCodeAt(a++),a==r){i+=s.charAt(t>>2),i+=s.charAt((3&t)<<4),i+="==";break}if(o=e.charCodeAt(a++),a==r){i+=s.charAt(t>>2),i+=s.charAt((3&t)<<4|(240&o)>>4),i+=s.charAt((15&o)<<2),i+="=";break}n=e.charCodeAt(a++),i+=s.charAt(t>>2),i+=s.charAt((3&t)<<4|(240&o)>>4),i+=s.charAt((15&o)<<2|(192&n)>>6),i+=s.charAt(63&n)}return i}function utf16to8(e){var t,o,n,i;for(t="",n=e.length,o=0;o<n;o++)i=e.charCodeAt(o),i>=1&&i<=127?t+=e.charAt(o):i>2047?(t+=String.fromCharCode(224|i>>12&15),t+=String.fromCharCode(128|i>>6&63),t+=String.fromCharCode(128|i>>0&63)):(t+=String.fromCharCode(192|i>>6&31),t+=String.fromCharCode(128|i>>0&63));return t}var registeredHooks={},configTrackerPause=500,locationArray=urlFixup(windowAlias.location.hostname,windowAlias.location.href,getReferrer()),locationHostnameAlias=locationArray[0],configHostsAlias=[locationHostnameAlias],configIgnoreClasses=[],configDownloadClasses=[],configLinkClasses=[],ignoredReferrer=[".tuniu.com"],organicEngine=["baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","baidu.com","google.com","google.cn","sogou.com","zhongsou.com","search.yahoo.com","one.cn.yahoo.com","soso.com","114search.118114.cn","youdao.com","gougou.com","bing.com","qihoo.com","21cn.com","goso.cn","so.360.cn","so.360.cn","www.so.com","www.so.com"],organicKeyword=["word","wd","query","q1","q2","q3","q4","q5","q6","w","q","q","query","w","p","p","w","kw","q","search","q","kw","keyword","q","q","u","u","q"],organicPayVaule=["1044","1558","1045","1559","1499","1326","12358","12991"],organicPayEngine=["baidu","baidu","google","google","sogou","soso","youdao","bing"],tam_source="utm_source",tam_medium="utm_medium",tam_campaign="utm_campaign",tam_content="utm_content",kw="kw",tam_term="utm_term",tam_cmp="cmpid",tam_pay="p",sourceValue="",mediumValue="",campaignValue="",termValue="",contentValue="",linkTrackingInstalled=!1,cpro=documentAlias.location.protocol,chost="analy.tuniu.cn",cgif="analysisCollect/dataCollect.action",configTrackerURL=cpro+"//"+chost+"/"+cgif,cPageNotFoundDomain="www.tuniu.com",cPageNotFoundPage="html/404.html",url404Default=cpro+"//"+cPageNotFoundDomain+"/"+cPageNotFoundPage,fromUrl=locationArray[2],visitUrl=locationArray[1],browserArray=getBrowser(),browserHW=browserArray[1]+"*"+browserArray[0],screenColor=screenAlias.colorDepth,screenResolution=screenAlias.width+"*"+screenAlias.height,operatingSystem=getPlatform(),userAgent=navigatorAlias.userAgent.toLowerCase(),browserTypeMatch=userAgent.match(/(?:firefox|opera|safari|chrome|msie|micromessenger)/),browserType=browserTypeMatch&&browserTypeMatch[0]?browserTypeMatch[0]:"unknown",browserVersionMatch=userAgent.match(/(?:firefox|opera|safari|chrome|msie|micromessenger)[\/: ]([\d.]+)/),browserVersion=browserVersionMatch&&browserVersionMatch[1]?browserVersionMatch[1]:"unknown",flashVersion=_uFlash(),javaEnabled=1,language="-",cookieEnabled=navigatorAlias.cookieEnabled?"1":"0",titleName=documentAlias.title,pageName="",configDownloadExtensions="7z|aac|ar[cj]|as[fx]|bin|csv|deb|dmg|doc|docx|exe|gz|gzip|hqx|jar|ms[ip]|od[bfgpst]|og[gv]|pdf|ppt|pptx|pub|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd|xls|xlsx|xml|z|zip|vsd",tacaName="_taca",tacbName="_tacb",taccName="_tacc",regUserCookieName="tuniuuser",tacauName="_tacau",tactName="_tact",taczName="_tacz2",cookieDomain=getCookieDomain(),cookiePath="/",tacbTimeoutHours=.5,tacaTimeoutHours=17520,taczTimeoutHours=720,loadSpend=-1,executeSpend=-1,isEvent=0,eventId="",linkType="link",dfyooUserCookieName="dfyoo_user_id",dfyooCompanyCookieName="company_id";return linkTrackingInstalled=!1,javaEnabled=navigatorAlias.javaEnabled()?1:0,"Netscape"===navigatorAlias.appName&&(screenColor=screenAlias.pixelDepth),navigatorAlias.language?language=navigatorAlias.language.toLowerCase():navigatorAlias.browserLanguage&&(language=navigatorAlias.browserLanguage.toLowerCase()),executePluginMethod("run",registerHook),{setTrackerURL:function(e){isDefined(e)&&(configTrackerURL=e)},setSessionCookieTimeout:function(e){isDefined(e)&&(tacbTimeoutHours=parseFloat(e)/36e5)},setVisitorCookieTimeout:function(e){isDefined(e)&&(tacaTimeoutHours=parseFloat(e)/36e5)},addOrganic:function(e,t,o){isDefined(e)&&isDefined(t)&&isDefined(o)&&(1==o?(organicEngine.unshift(e),organicKeyword.unshift(t)):(organicEngine.push(e),organicKeyword.push(t)))},setTrafficSourceCookieTimeout:function(e){isDefined(e)&&(taczTimeoutHours=parseFloat(e)/36e5)},setPageName:function(e){isDefined(e)&&(pageName=e)},trackEvent:function(e){isDefined(e)&&(isEvent=1,eventId=e,loginTime=setCurrentTime(),logPageView())},addSearchPay:function(e,t){isDefined(e)&&isDefined(t)&&(organicPayVaule.push(e),organicPayEngine.push(t))},setCampaignArg:function(e){isDefined(e)&&(tam_cmp=e)},setSearchPayArg:function(e){isDefined(e)&&(tam_pay=e)},setDocumentTitle:function(e){isDefined(e)&&(titleName=e)},addDownloadExtensions:function(e){isDefined(e)&&(configDownloadExtensions+="|"+e)},enableLinkTracking:function(){hasLoaded?addClickListeners():registeredOnLoadHandlers[registeredOnLoadHandlers.length]=function(){addClickListeners()}},setPageNotFoundUrl:function(e){if(isDefined(e)){var t=e.indexOf("___");t>-1&&(visitUrl=e.substr(0,t),"/404/url/"==visitUrl&&(visitUrl+=url404Default),fromUrl=e.substr(t+3))}},setDefaultPageNotFoundUrl:function(){visitUrl="/404/url/"+url404Default},trackLink:function(e,t){logLink(e,t)},trackPageView:function(){logPageView()}}}function TrackerProxy(){return{push:apply}}var expireDateTime,loginTime=setCurrentTime(),plugins={},hasLoaded=!1,registeredOnLoadHandlers=[],documentAlias=document,navigatorAlias=navigator,screenAlias=screen,windowAlias=window,escapeWrapper=windowAlias.encodeURIComponent||escape,unescapeWrapper=windowAlias.decodeURIComponent||unescape,_opera_ta=["","",""],asyncTracker=new Tracker;addEventListener(windowAlias,"beforeunload",beforeUnloadHandler,!1),addReadyListener();for(var index=0;index<_tac.length;index++)apply(_tac[index]);return _tac=new TrackerProxy,{getTracker:function(){return new Tracker}}}()}(window)},function(module,exports){!function(){if("object"!=typeof JSON)var JSON=window.JSON={};!function(){"use strict";function f(e){return e<10?"0"+e:e}function this_value(){return this.valueOf()}function quote(e){return rx_escapable.lastIndex=0,rx_escapable.test(e)?'"'+e.replace(rx_escapable,function(e){var t=meta[e];return"string"==typeof t?t:"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+e+'"'}function str(e,t){var o,n,i,a,r,s=gap,c=t[e];switch(c&&"object"==typeof c&&"function"==typeof c.toJSON&&(c=c.toJSON(e)),"function"==typeof rep&&(c=rep.call(t,e,c)),typeof c){case"string":return quote(c);case"number":return isFinite(c)?String(c):"null";case"boolean":case"null":return String(c);case"object":if(!c)return"null";if(gap+=indent,r=[],"[object Array]"===Object.prototype.toString.apply(c)){for(a=c.length,o=0;o<a;o+=1)r[o]=str(o,c)||"null";return i=0===r.length?"[]":gap?"[\n"+gap+r.join(",\n"+gap)+"\n"+s+"]":"["+r.join(",")+"]",gap=s,i}if(rep&&"object"==typeof rep)for(a=rep.length,o=0;o<a;o+=1)"string"==typeof rep[o]&&(n=rep[o],i=str(n,c),i&&r.push(quote(n)+(gap?": ":":")+i));else for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(i=str(n,c),i&&r.push(quote(n)+(gap?": ":":")+i));return i=0===r.length?"{}":gap?"{\n"+gap+r.join(",\n"+gap)+"\n"+s+"}":"{"+r.join(",")+"}",gap=s,i}}var rx_one=/^[\],:{}\s]*$/,rx_two=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,rx_three=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,rx_four=/(?:^|:|,)(?:\s*\[)+/g,rx_escapable=/[\\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,rx_dangerous=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;"function"!=typeof Date.prototype.toJSON&&(Date.prototype.toJSON=function(){return isFinite(this.valueOf())?this.getUTCFullYear()+"-"+f(this.getUTCMonth()+1)+"-"+f(this.getUTCDate())+"T"+f(this.getUTCHours())+":"+f(this.getUTCMinutes())+":"+f(this.getUTCSeconds())+"Z":null},Boolean.prototype.toJSON=this_value,Number.prototype.toJSON=this_value,String.prototype.toJSON=this_value);var gap,indent,meta,rep;"function"!=typeof JSON.stringify&&(meta={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},JSON.stringify=function(e,t,o){var n;if(gap="",indent="","number"==typeof o)for(n=0;n<o;n+=1)indent+=" ";else"string"==typeof o&&(indent=o);if(rep=t,t&&"function"!=typeof t&&("object"!=typeof t||"number"!=typeof t.length))throw new Error("JSON.stringify");return str("",{"":e})}),"function"!=typeof JSON.parse&&(JSON.parse=function(text,reviver){function walk(e,t){var o,n,i=e[t];if(i&&"object"==typeof i)for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(n=walk(i,o),void 0!==n?i[o]=n:delete i[o]);return reviver.call(e,t,i)}var j;if(text=String(text),rx_dangerous.lastIndex=0,rx_dangerous.test(text)&&(text=text.replace(rx_dangerous,function(e){return"\\u"+("0000"+e.charCodeAt(0).toString(16)).slice(-4)})),rx_one.test(text.replace(rx_two,"@").replace(rx_three,"]").replace(rx_four,"")))return j=eval("("+text+")"),"function"==typeof reviver?walk({"":j},""):j;throw new SyntaxError("JSON.parse")})}()}()},function(e,t){!function(){var e={domain:".tuniu.com",path:"/",init:function(){this.key=+new Date,this.bindEvent(),this.getOS(),this.getCookieDomain(),this.IMAGE_URL="//analy.tuniu.cn/analysisCollect/pcEvent.gif",this.postCache()},postCache:function(e){var t=this,o=t.getCache();if(o){o=JSON.parse(o);for(var n=0;n<o.length;n++)delete o[n].key;var i=new Image;i.onload=function(){i=null,t.clearCache()},i.onerror=function(){e?e+=1:e=1,e<=3&&setTimeout(function(){t.postCache(e)},1e3)},e?i.src=t.IMAGE_URL+"?"+t.makeQueryString(o)+"&retry="+e:i.src=t.IMAGE_URL+"?"+t.makeQueryString(o)}},makeQueryString:function(e){var t=this,o=[],n={sid:t.getSid(),sr:screen.width+"*"+screen.height,sc:screen.colorDepth,hw:window.innerHeight+"*"+window.innerWidth,os:t.getOSName(),bt:t.getBrowserName(),bv:t.browser.version,storage:e,co:"_taca ="+t.getCookie("_taca")+";tuniuuser="+t.getCookie("tuniuuser")+";_tact="+t.getCookie("_tact")+";tuniu_partner="+t.getCookie("tuniu_partner")+";tuniuuser_id="+t.getCookie("tuniuuser_id")+";tuniuuser_citycode="+t.getCookie("tuniuuser_citycode")+";dfyoo_user_id="+t.getCookie("dfyoo_user_id")+";company_id="+t.getCookie("company_id")+";client_type="+(t.os.phone?20:0)};for(var i in n)o.push(i+"="+encodeURIComponent("string"==typeof n[i]?n[i]:JSON.stringify(n[i])));return o.join("&")},getSid:function(){var e,t=new Date,o=""+t,n="",i="";o=o.substr(o.length-8);for(var a=0;a<o.length;a++)e=Math.floor(10*Math.random()),i+=e,n+=o.charCodeAt(a)<<e;return i+n},getOS:function(){var e=navigator.userAgent,t=navigator.platform,o=this.os={},n=this.browser={},i=e.match(/Web[kK]it[\/]{0,1}([\d.]+)/),a=e.match(/(Android);?[\s\/]+([\d.]+)?/),r=!!e.match(/\(Macintosh\; Intel /),s=e.match(/(iPad).*OS\s([\d_]+)/),c=e.match(/(iPod)(.*OS\s([\d_]+))?/),u=!s&&e.match(/(iPhone\sOS)\s([\d_]+)/),l=e.match(/(webOS|hpwOS)[\s\/]([\d.]+)/),d=/Win\d{2}|Windows/.test(t),g=e.match(/Windows Phone ([\d.]+)/),f=l&&e.match(/TouchPad/),m=e.match(/Kindle\/([\d.]+)/),p=e.match(/Silk\/([\d._]+)/),h=e.match(/(BlackBerry).*Version\/([\d.]+)/),v=e.match(/(BB10).*Version\/([\d.]+)/),k=e.match(/(RIM\sTablet\sOS)\s([\d.]+)/),w=e.match(/PlayBook/),C=e.match(/Chrome\/([\d.]+)/)||e.match(/CriOS\/([\d.]+)/),y=e.match(/Firefox\/([\d.]+)/),A=e.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/),x=e.match(/MSIE\s([\d.]+)/)||e.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/),b=!C&&e.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/),T=b||e.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);(n.webkit=!!i)&&(n.version=i[1]),a&&(o.android=!0,o.version=a[2]),u&&!c&&(o.ios=o.iphone=!0,o.version=u[2].replace(/_/g,".")),s&&(o.ios=o.ipad=!0,o.version=s[2].replace(/_/g,".")),c&&(o.ios=o.ipod=!0,o.version=c[3]?c[3].replace(/_/g,"."):null),d&&(o.win=!0),g&&(o.wp=!0,o.version=g[1]),l&&(o.webos=!0,o.version=l[2]),f&&(o.touchpad=!0),h&&(o.blackberry=!0,o.version=h[2]),v&&(o.bb10=!0,o.version=v[2]),k&&(o.rimtabletos=!0,o.version=k[2]),w&&(n.playbook=!0),m&&(o.kindle=!0,o.version=m[1]),p&&(n.silk=!0,n.version=p[1]),!p&&o.android&&e.match(/Kindle Fire/)&&(n.silk=!0),C&&(n.chrome=!0,n.version=C[1]),y&&(n.firefox=!0,n.version=y[1]),A&&(o.firefoxos=!0,o.version=A[1]),x&&(n.ie=!0,n.version=x[1]),T&&(r||o.ios||d)&&(n.safari=!0,o.ios||(n.version=T[1])),b&&(n.webview=!0),o.tablet=!!(s||w||a&&!e.match(/Mobile/)||y&&e.match(/Tablet/)||x&&!e.match(/Phone/)&&e.match(/Touch/)),o.phone=!(o.tablet||o.ipod||!(a||u||l||h||v||C&&e.match(/Android/)||C&&e.match(/CriOS\/([\d.]+)/)||y&&e.match(/Mobile/)||x&&e.match(/Touch/)))},getOSName:function(){var e="not set",t="Win32"==navigator.platform||"Windows"==navigator.platform,o="Mac68K"==navigator.platform||"MacIntel"==navigator.platform||"MacPPC"==navigator.platform||"Macintosh"==navigator.platform,n="X11"==navigator.platform&&!t&&!o;o&&(e="Mac"),n&&(e="Unix"),String(navigator.platform).indexOf("Linux")>-1&&(e="Linux"),t&&((navigator.userAgent.indexOf("Win95")>-1||navigator.userAgent.indexOf("Windows 95")>-1)&&(e="windows 95"),(navigator.userAgent.indexOf("Win98")>-1||navigator.userAgent.indexOf("Windows 98")>-1)&&(e="windows 98"),(navigator.userAgent.indexOf("Windows 9x 4.90")>-1||navigator.userAgent.indexOf("Windows ME")>-1)&&(e="windows ME"),(navigator.userAgent.indexOf("Windows NT 5.0")>-1||navigator.userAgent.indexOf("Windows 2000")>-1)&&(e="windows 2000"),(navigator.userAgent.indexOf("Windows NT 5.1")>-1||navigator.userAgent.indexOf("Windows XP")>-1)&&(e="windows XP"),(navigator.userAgent.indexOf("Windows NT 5.2")>-1||navigator.userAgent.indexOf("Windows 2003")>-1)&&(e="windows 2003"),(navigator.userAgent.indexOf("Windows NT 6.0")>-1||navigator.userAgent.indexOf("Windows Vista")>-1)&&(e="Windows Vista"),(navigator.userAgent.indexOf("Windows NT 6.1")>-1||navigator.userAgent.indexOf("Windows 7")>-1)&&(e="Win7"),(navigator.userAgent.indexOf("Windows NT 6.2")>-1||navigator.userAgent.indexOf("Windows 8")>-1)&&(e="Win8"));var i=navigator.userAgent.match(/(Android)[\s\/]+([\d\.]+)/),a=navigator.userAgent.match(/iPad/i),r=navigator.userAgent.match(/iPhone/i),s=navigator.userAgent.match(/iPod/i),c=navigator.userAgent.match(/(Windows\s+Phone)\s([\d\.]+)/);return i&&(e="Android"),a&&(e="iOS-Pad"),r&&(e="iOS-Phone"),s&&(e="iOS-Pod"),c&&(e="WindowsPhone"),e},getBrowserName:function(){return this.browser.chrome?"chrome":this.browser.safari?"safari":this.browser.firefox?"firefox":this.browser.ie?"ie":"android"},getCookieDomain:function(){
var e=".tuniu.com";/^https?:\/\/(\w*\.)?dfyoo\.com/.test(location.href)&&(e=".dfyoo.com"),this.domain=e},getCookie:function(e){var t=document.cookie.match(new RegExp("(^| )"+e+"=([^;]*)(;|$)"));return null!==t?t[2]:""},collect:function(e){var t=this;e=e||window.event;for(var o,n=e?e.target:e.srcElement;n.parentNode&&"BODY"!=n.nodeName&&"HTML"!=n.nodeName;)(o=n.getAttribute("m"))&&t.saveClick(o,e.clientX,e.clientY),n=n.parentNode},clearCache:function(){var e=new Date;e.setDate(e.getDate()-1),document.cookie="clickCache=; expires="+e.toUTCString()+"; domain="+this.domain+"; path="+this.path},saveCache:function(e){var t=new Date;t.setDate(t.getDate()+7),document.cookie="clickCache="+encodeURIComponent(e)+"; expires="+t.toUTCString()+"; domain="+this.domain+"; path="+this.path},getCache:function(){return decodeURIComponent(this.getCookie("clickCache"))},saveClick:function(e,t,o){var n=this,i={text:e,x:t,y:o,lg:+new Date},a=n.getCache()||"[]";a=JSON.parse(a);for(var r=!1,s=0;s<a.length;s++)if(a[s].key==n.key){r=!0,a[s].events.push(i);break}r||a.push({key:n.key,url:window.location.href,pageName:window.PageName||"",referer:document.referrer||"",events:[i]}),n.saveCache(JSON.stringify(a)),JSON.stringify(a).length>2048&&n.postCache()},saveCustomEvent:function(e){e.text&&this.saveClick(e.text,e.x||0,e.y||0)},bindEvent:function(){var e=this;e.domReady(function(){e.addEvent(document.body,"click",function(t){e.collect(t)})})},domReady:function(e){setTimeout(e,0)},addEvent:function(e,t,o){e.addEventListener?e.addEventListener(t,o,!1):e.attachEvent(t,o)}};e.init();var t=window.eventTrack;if(t&&t.length)for(var o=0;o<t.length;o++)e.saveCustomEvent(t[o]);window.eventTrack={push:function(t){e.saveCustomEvent(t)}}}()}]);