(function(){var e,r=window.navigator.userAgent,t=/Windows.*Edge/i.test(r),i=!t&&/Chrome/i.test(r);if(i){if((e=r.match(/Chrome\/(\d+)/i))&&e[1])return parseInt(e[1],10)<=84}else if(t||i||!/Safari/i.test(r))if(/Firefox/i.test(r)){if((e=r.match(/Firefox\/(\d+)/i))&&e[1])return parseInt(e[1],10)<=114}else{if(t)return!0;if(/Trident/i.test(r))return!0}else if((e=r.match(/Version\/(\d+)/i))&&e[1])return parseInt(e[1],10)<=13;return!1})()&&window.location.replace("/unsupported-browser.html")

window.__webStartTime=performance.now(),performance.mark("__webStartTime")

window.__notion_html_async=[];window.DEVICE_READY_P=new Promise(r=>(o=>{document.dispatchEvent=function(e){return"deviceready"===e?.type&&r(),o.apply(this,arguments)}})(document.dispatchEvent))

{"mode":"<<DEFAULT_THEME>>"}

(()=>{var e="light",t=localStorage.getItem("theme");if(t)try{(d=JSON.parse(t))&&d.mode&&(e=d.mode)}catch(e){}var a=document.getElementById("theme-data");if(a)try{var d;(d=JSON.parse(a.textContent))&&"<<DEFAULT_THEME>>"!==d.mode&&(e=d.mode,window.notionTheme=e)}catch(e){}"dark"===e&&document.body.classList.add("dark")})()

window.LOCALE_SETUP=void 0,window.LOCALE_SETUP_P=Promise.resolve()

(()=>{try{window.addEventListener("error",(function(e){if(e.target&&(e.target instanceof HTMLScriptElement||e.target instanceof HTMLLinkElement&&"stylesheet"===e.target.rel)){var t=e.target instanceof HTMLScriptElement?"script":"stylesheet",r=e.target.src||e.target.href;console.error("Resource Sentinel noted a failed resource load of type",t,r),fetch("https://http-inputs-notion.splunkcloud.com/services/collector/raw",{method:"POST",headers:{"Content-Type":"text/plain; charset=utf-8",Authorization:"Splunk EA76605A-F565-4B17-A496-34435622A1EB"},mode:"cors",keepalive:!0,body:JSON.stringify({environment:"production",level:"error",from:"resourceSentinel",type:"resourceLoadFailure",error:{message:`Failed to load "${t}" resource`,miscDataString:r}}),priority:"low"}).catch(e=>{console.error("Resource Sentinel failed to send error to Splunk",e)})}}),!0),console.info("Resource Sentinel initialized...")}catch(e){console.error("Resource Sentinel failed to initialize",e)}})()

__notion_html_async.push("opfsBootupRegistry",{"isServerEnabled":false})

__notion_html_async.push("ready",!0)

__notion_html_async.push("bootReady",true)

__notion_html_async.push("serverSidePrefetchDataPending",false)

__notion_html_async.push("serverSidePrefetchData",null)

__notion_html_async.push(null,null)