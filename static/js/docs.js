!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c?c:a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){Prism.languages.bash=Prism.languages.extend("clike",{comment:{pattern:/(^|[^"{\\])(#.*?(\r?\n|$))/,lookbehind:!0},string:{pattern:/("|')(\\?[\s\S])*?\1/,inside:{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^\}]+\})/}},number:{pattern:/([^\w\.])-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,lookbehind:!0},"function":/\b(?:alias|apropos|apt-get|aptitude|aspell|awk|basename|bash|bc|bg|builtin|bzip2|cal|cat|cd|cfdisk|chgrp|chmod|chown|chroot|chkconfig|cksum|clear|cmp|comm|command|cp|cron|crontab|csplit|cut|date|dc|dd|ddrescue|declare|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|echo|egrep|eject|enable|env|ethtool|eval|exec|exit|expand|expect|export|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|getopts|git|grep|groupadd|groupdel|groupmod|groups|gzip|hash|head|help|hg|history|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|jobs|join|kill|killall|less|link|ln|locate|logname|logout|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|make|man|mkdir|mkfifo|mkisofs|mknod|more|most|mount|mtools|mtr|mv|mmv|nano|netstat|nice|nl|nohup|notify-send|nslookup|open|op|passwd|paste|pathchk|ping|pkill|popd|pr|printcap|printenv|printf|ps|pushd|pv|pwd|quota|quotacheck|quotactl|ram|rar|rcp|read|readarray|readonly|reboot|rename|renice|remsync|rev|rm|rmdir|rsync|screen|scp|sdiff|sed|select|seq|service|sftp|shift|shopt|shutdown|sleep|slocate|sort|source|split|ssh|stat|strace|su|sudo|sum|suspend|sync|tail|tar|tee|test|time|timeout|times|touch|top|traceroute|trap|tr|tsort|tty|type|ulimit|umask|umount|unalias|uname|unexpand|uniq|units|unrar|unshar|until|uptime|useradd|userdel|usermod|users|uuencode|uudecode|v|vdir|vi|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yes|zip)\b/,keyword:/\b(if|then|else|elif|fi|for|break|continue|while|in|case|function|select|do|done|until|echo|exit|return|set|declare)\b/}),Prism.languages.insertBefore("bash","keyword",{property:/\$([a-zA-Z0-9_#\?\-\*!@]+|\{[^}]+\})/}),Prism.languages.insertBefore("bash","comment",{important:/(^#!\s*\/bin\/bash)|(^#!\s*\/bin\/sh)/})},{}],2:[function(a,b,c){Prism.languages.css.selector={pattern:/[^\{\}\s][^\{\}]*(?=\s*\{)/,inside:{"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+(?:\(.*\))?/,"class":/\.[-:\.\w]+/,id:/#[-:\.\w]+/}},Prism.languages.insertBefore("css","function",{hexcode:/#[\da-f]{3,6}/i,entity:/\\[\da-f]{1,8}/i,number:/[\d%\.]+/})},{}],3:[function(a,b,c){Prism.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},Prism.languages.markup&&(Prism.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:Prism.languages.markup.tag.inside},rest:Prism.languages.css},alias:"language-css"}}),Prism.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:Prism.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:Prism.languages.css}},alias:"language-css"}},Prism.languages.markup.tag))},{}],4:[function(a,b,c){Prism.languages.git={comment:/^#.*$/m,string:/("|')(\\?.)*?\1/m,command:{pattern:/^.*\$ git .*$/m,inside:{parameter:/\s(--|-)\w+/m}},coord:/^@@.*@@$/m,deleted:/^-(?!-).+$/m,inserted:/^\+(?!\+).+$/m,commit_sha1:/^commit \w{40}$/m}},{}],5:[function(a,b,c){Prism.languages.http={"request-line":{pattern:/^(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b\shttps?:\/\/\S+\sHTTP\/[0-9.]+/,inside:{property:/^\b(POST|GET|PUT|DELETE|OPTIONS|PATCH|TRACE|CONNECT)\b/,"attr-name":/:\w+/}},"response-status":{pattern:/^HTTP\/1.[01] [0-9]+.*/,inside:{property:/[0-9]+[A-Z\s-]+$/i}},keyword:/^[\w-]+:(?=.+)/m};var d={"application/json":Prism.languages.javascript,"application/xml":Prism.languages.markup,"text/xml":Prism.languages.markup,"text/html":Prism.languages.markup};for(var e in d)if(d[e]){var f={};f[e]={pattern:new RegExp("(content-type:\\s*"+e+"[\\w\\W]*?)\\n\\n[\\w\\W]*","i"),lookbehind:!0,inside:{rest:d[e]}},Prism.languages.insertBefore("http","keyword",f)}},{}],6:[function(a,b,c){Prism.languages.java=Prism.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+[e]?[\d]*[df]\b|\b\d*\.?\d+\b/i,operator:{pattern:/(^|[^\.])(?:\+=|\+\+?|-=|--?|!=?|<{1,2}=?|>{1,3}=?|==?|&=|&&?|\|=|\|\|?|\?|\*=?|\/=?|%=?|\^=?|:|~)/m,lookbehind:!0}})},{}],7:[function(a,b,c){Prism.languages.less=Prism.languages.extend("css",{comment:[/\/\*[\w\W]*?\*\//,{pattern:/(^|[^\\])\/\/.*/,lookbehind:!0}],atrule:{pattern:/@[\w-]+?(?:\([^{}]+\)|[^(){};])*?(?=\s*\{)/i,inside:{punctuation:/[:()]/}},selector:{pattern:/(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\([^{}]*\)|[^{};@])*?(?=\s*\{)/,inside:{variable:/@+[\w-]+/}},property:/(\b|\B)(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,punctuation:/[{}();:,]/,operator:/[+\-*\/]/}),Prism.languages.insertBefore("less","punctuation",{"function":Prism.languages.less["function"]}),Prism.languages.insertBefore("less","property",{variable:[{pattern:/@[\w-]+\s*:/,inside:{punctuation:/:/}},/@@?[\w-]+/],"mixin-usage":{pattern:/([{;]\s*)[.#](?!\d)[\w-]+.*?(?=[(;])/,lookbehind:!0,alias:"function"}})},{}],8:[function(a,b,c){Prism.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},Prism.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))})},{}],9:[function(a,b,c){Prism.languages.yaml={scalar:{pattern:/([\-:]\s*(![^\s]+)?[ \t]*[|>])[ \t]*(?:(\n[ \t]+)[^\r\n]+(?:\3[^\r\n]+)*)/,lookbehind:!0,alias:"string"},comment:/#[^\n]+/,key:{pattern:/(\s*[:\-,[{\n?][ \t]*(![^\s]+)?[ \t]*)[^\n{[\]},#]+?(?=\s*:\s)/,lookbehind:!0,alias:"atrule"},directive:{pattern:/((^|\n)[ \t]*)%[^\n]+/,lookbehind:!0,alias:"important"},datetime:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(\d{4}-\d\d?-\d\d?([tT]|[ \t]+)\d\d?:\d{2}:\d{2}(\.\d*)?[ \t]*(Z|[-+]\d\d?(:\d{2})?)?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(:\d{2}(\.\d*)?)?)(?=[ \t]*(\n|$|,|]|}))/,lookbehind:!0,alias:"number"},"boolean":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(true|false)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0,alias:"important"},"null":{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)(null|~)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0,alias:"important"},string:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)("(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*')(?=[ \t]*(\n|$|,|]|}))/,lookbehind:!0},number:{pattern:/([:\-,[{]\s*(![^\s]+)?[ \t]*)[+\-]?(0x[\dA-Fa-f]+|0o[0-7]+|(\d+\.?\d*|\.?\d+)(e[\+\-]?\d+)?|\.inf|\.nan)[ \t]*(?=\n|$|,|]|})/i,lookbehind:!0},tag:/![^\s]+/,important:/[&*][\w]+/,punctuation:/([:[\]{}\-,|>?]|---|\.\.\.)/}},{}],10:[function(a,b,c){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var d=function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,b=self.Prism={util:{encode:function(a){return a instanceof c?new c(a.type,b.util.encode(a.content),a.alias):"Array"===b.util.type(a)?a.map(b.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var c=b.util.type(a);switch(c){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=b.util.clone(a[e]));return d;case"Array":return a.map(function(a){return b.util.clone(a)})}return a}},languages:{extend:function(a,c){var d=b.util.clone(b.languages[a]);for(var e in c)d[e]=c[e];return d},insertBefore:function(a,c,d,e){e=e||b.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==c)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return b.languages.DFS(b.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,c,d){for(var e in a)a.hasOwnProperty(e)&&(c.call(a,e,a[e],d||e),"Object"===b.util.type(a[e])?b.languages.DFS(a[e],c):"Array"===b.util.type(a[e])&&b.languages.DFS(a[e],c,e))}},highlightAll:function(a,c){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)b.highlightElement(d,a===!0,c)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;if(i&&(g=(i.className.match(a)||[,""])[1],h=b.languages[g]),h){d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent;if(j){j=j.replace(/^(?:\r?\n|\r)/,"");var k={element:d,language:g,grammar:h,code:j};if(b.hooks.run("before-highlight",k),e&&self.Worker){var l=new Worker(b.filename);l.onmessage=function(a){k.highlightedCode=c.stringify(JSON.parse(a.data),g),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),b.hooks.run("after-highlight",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code}))}else k.highlightedCode=b.highlight(k.code,k.grammar,k.language),b.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),b.hooks.run("after-highlight",k)}}},highlight:function(a,d,e){var f=b.tokenize(a,d);return c.stringify(b.util.encode(f),e)},tokenize:function(a,c,d){var e=b.Token,f=[a],g=c.rest;if(g){for(var h in g)c[h]=g[h];delete c.rest}a:for(var h in c)if(c.hasOwnProperty(h)&&c[h]){var i=c[h];i="Array"===b.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=0,o=k.alias;k=k.pattern||k;for(var p=0;p<f.length;p++){var q=f[p];if(f.length>a.length)break a;if(!(q instanceof e)){k.lastIndex=0;var r=k.exec(q);if(r){m&&(n=r[1].length);var s=r.index-1+n,r=r[0].slice(n),t=r.length,u=s+t,v=q.slice(0,s+1),w=q.slice(u+1),x=[p,1];v&&x.push(v);var y=new e(h,l?b.tokenize(r,l):r,o);x.push(y),w&&x.push(w),Array.prototype.splice.apply(f,x)}}}}}return f},hooks:{all:{},add:function(a,c){var d=b.hooks.all;d[a]=d[a]||[],d[a].push(c)},run:function(a,c){var d=b.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(c)}}},c=b.Token=function(a,b,c){this.type=a,this.content=b,this.alias=c};if(c.stringify=function(a,d,e){if("string"==typeof a)return a;if("Array"===b.util.type(a))return a.map(function(b){return c.stringify(b,d,a)}).join("");var f={type:a.type,content:c.stringify(a.content,d,e),tag:"span",classes:["token",a.type],attributes:{},language:d,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===b.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}b.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(a){var c=JSON.parse(a.data),d=c.language,e=c.code;self.postMessage(JSON.stringify(b.util.encode(b.tokenize(e,b.languages[d])))),self.close()},!1),self.Prism):self.Prism;var d=document.getElementsByTagName("script");return d=d[d.length-1],d&&(b.filename=d.src,document.addEventListener&&!d.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",b.highlightAll)),self.Prism}();"undefined"!=typeof b&&b.exports&&(b.exports=d),d.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},d.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),d.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},d.languages.markup&&(d.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:d.languages.markup.tag.inside},rest:d.languages.css},alias:"language-css"}}),d.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:d.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:d.languages.css}},alias:"language-css"}},d.languages.markup.tag)),d.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},d.languages.javascript=d.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$]+(?=\()/i}),d.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),d.languages.markup&&d.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:d.languages.markup.tag.inside},rest:d.languages.javascript},alias:"language-javascript"}}),function(){self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(){var a={js:"javascript",html:"markup",svg:"markup",xml:"markup",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell"};Array.prototype.slice.call(document.querySelectorAll("pre[data-src]")).forEach(function(b){var c=b.getAttribute("data-src"),e=(c.match(/\.(\w+)$/)||[,""])[1],f=a[e]||e,g=document.createElement("code");g.className="language-"+f,b.textContent="",g.textContent="Loading…",b.appendChild(g);var h=new XMLHttpRequest;h.open("GET",c,!0),h.onreadystatechange=function(){4==h.readyState&&(h.status<400&&h.responseText?(g.textContent=h.responseText,d.highlightElement(g)):h.status>=400?g.textContent="✖ Error "+h.status+" while fetching file: "+h.statusText:g.textContent="✖ Error: File does not exist or is empty")},h.send(null)})},self.Prism.fileHighlight())}()},{}],11:[function(a,b,c){"document"in self&&("classList"in document.createElement("_")?!function(){"use strict";var a=document.createElement("_");if(a.classList.add("c1","c2"),!a.classList.contains("c2")){var b=function(a){var b=DOMTokenList.prototype[a];DOMTokenList.prototype[a]=function(a){var c,d=arguments.length;for(c=0;d>c;c++)a=arguments[c],b.call(this,a)}};b("add"),b("remove")}if(a.classList.toggle("c3",!1),a.classList.contains("c3")){var c=DOMTokenList.prototype.toggle;DOMTokenList.prototype.toggle=function(a,b){return 1 in arguments&&!this.contains(a)==!b?b:c.call(this,a)}}a=null}():!function(a){"use strict";if("Element"in a){var b="classList",c="prototype",d=a.Element[c],e=Object,f=String[c].trim||function(){return this.replace(/^\s+|\s+$/g,"")},g=Array[c].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1},h=function(a,b){this.name=a,this.code=DOMException[a],this.message=b},i=function(a,b){if(""===b)throw new h("SYNTAX_ERR","An invalid or illegal string was specified");if(/\s/.test(b))throw new h("INVALID_CHARACTER_ERR","String contains an invalid character");return g.call(a,b)},j=function(a){for(var b=f.call(a.getAttribute("class")||""),c=b?b.split(/\s+/):[],d=0,e=c.length;e>d;d++)this.push(c[d]);this._updateClassName=function(){a.setAttribute("class",this.toString())}},k=j[c]=[],l=function(){return new j(this)};if(h[c]=Error[c],k.item=function(a){return this[a]||null},k.contains=function(a){return a+="",-1!==i(this,a)},k.add=function(){var a,b=arguments,c=0,d=b.length,e=!1;do a=b[c]+"",-1===i(this,a)&&(this.push(a),e=!0);while(++c<d);e&&this._updateClassName()},k.remove=function(){var a,b,c=arguments,d=0,e=c.length,f=!1;do for(a=c[d]+"",b=i(this,a);-1!==b;)this.splice(b,1),f=!0,b=i(this,a);while(++d<e);f&&this._updateClassName()},k.toggle=function(a,b){a+="";var c=this.contains(a),d=c?b!==!0&&"remove":b!==!1&&"add";return d&&this[d](a),b===!0||b===!1?b:!c},k.toString=function(){return this.join(" ")},e.defineProperty){var m={get:l,enumerable:!0,configurable:!0};try{e.defineProperty(d,b,m)}catch(n){-2146823252===n.number&&(m.enumerable=!1,e.defineProperty(d,b,m))}}else e[c].__defineGetter__&&d.__defineGetter__(b,l)}}(self))},{}],12:[function(a,b,c){"use strict";function d(a){var b=[];if(!a.length)return b;for(var c=0;c<a.length;c++)b.push(a[c]);return b}function e(a,b,c){return null===c?a.removeAttribute(b):"undefined"!=typeof c&&a.setAttribute(b,c),a.getAttribute(b)}function f(a){for(var b=a,c={top:b.offsetTop,left:b.offsetLeft};b=b.offsetParent;)c.top+=b.offsetTop,c.left+=b.offsetLeft;return c}function g(a,b){return b=b||document.body,b.querySelector(a)}function h(a,b){return b=b||document.body,d(b.querySelectorAll(a))}function i(a,b){a.classList.add(b||"open");var c=a.parentNode.parentNode;"li"===c.tagName.toLowerCase()&&i(c,b)}function j(a,b){b||a.parentNode.classList.toggle("open");var c=a.parentNode.classList.contains("open");a.classList[c?"add":"remove"]("open")}function k(a){var b=document.createElement("span");return b.className="submenu-toggle",b.addEventListener("click",function(){j(b)}),a.parentNode.insertBefore(b,a),b}function l(){if(u){var a=window.scrollY;q.forEach(function(a){a.parentNode.classList.remove("open")});for(var b=0;b<s.length;b++)s[b].top>=a&&(q[b].parentNode.classList.add("open"),i(q[b].parentNode),b=s.length)}}function m(){v&&window.scrollBy(0,0-(v.clientHeight+15))}function n(a){var b=a.target.src?a.target:g("img",a.target);e(B,"src",b.src);var c=A.style;b.naturalWidth<document.body.clientWidth?c.marginLeft=-4-b.naturalWidth/2+"px":c.marginLeft=0-document.body.clientWidth/2+"px",c.marginTop=-4-b.naturalHeight/2+"px",z.classList.add("open")}function o(){var a=C.classList,b=D.classList;a.toggle("open"),a.contains("open")?(b.remove("glyphicon-chevron-up"),b.add("glyphicon-chevron-down")):(b.add("glyphicon-chevron-up"),b.remove("glyphicon-chevron-down"))}a("./classList");var p,q,r,s,t,u=g("#TableOfContents"),v=g(".navbar-fixed-top"),w=g('.site-menu a[href="'+location.pathname+'"]');u&&(p=u.parentNode,q=h("a[href]",u),r=q.map(function(a){return document.getElementById(e(a,"href").slice(1))}),s=r.map(function(a){return f(a)})),w&&(t=w.parentNode,t.classList.add("active"),i(w.parentNode),i(w.parentNode,"active-trail"));var x=g(".site-menu-toggle");x&&x.addEventListener("click",function(){document.body.classList.toggle("site-menu-open")});var y=h(".site-menu ul ul");y.forEach(function(a){var b=k(a);j(b,!0)}),window.addEventListener("scroll",l),l(),location.hash&&m(),window.addEventListener("hashchange",m),h(".gs-download-step-panel").forEach(function(a){var b=g(".toggle-instructions",a);b&&b.addEventListener("click",function(){a.classList.toggle("open")})});var z=document.createElement("div"),A=document.createElement("div"),B=document.createElement("img");z.appendChild(A),z.addEventListener("click",function(){z.classList.remove("open")}),A.appendChild(B),e(z,"class","lightbox"),e(A,"class","content"),document.body.appendChild(z),h(".page-content figure.image img").forEach(function(a){if(a.clientWidth<a.naturalWidth){var b=a.parentNode.parentNode;b.classList.add("clickable"),b.addEventListener("click",n)}});var C=g(".site-menu .meta"),D=g(".toggle",C),E=g(".header",C),F=g(".site-menu .version a");F&&F.addEventListener("click",o),E.addEventListener("click",o);var G=a("prismjs");a("prismjs/components/prism-bash"),a("prismjs/components/prism-css"),a("prismjs/components/prism-css-extras"),a("prismjs/components/prism-git"),a("prismjs/components/prism-http"),a("prismjs/components/prism-java"),a("prismjs/components/prism-less"),a("prismjs/components/prism-markup"),a("prismjs/components/prism-yaml"),G.languages.json=G.languages.javascript,G.languages.js=G.languages.javascript,G.languages.xml=G.languages.markup,G.languages.html=G.languages.markup,h("h1, h2, h3, h4, h5, h6",g(".page-content")).forEach(function(a){if(a.id){var b=document.createElement("a");b.href="#"+a.id,b.className="content-anchor glyphicon glyphicon-link",a.appendChild(b)}})},{"./classList":11,prismjs:10,"prismjs/components/prism-bash":1,"prismjs/components/prism-css":3,"prismjs/components/prism-css-extras":2,"prismjs/components/prism-git":4,"prismjs/components/prism-http":5,"prismjs/components/prism-java":6,"prismjs/components/prism-less":7,"prismjs/components/prism-markup":8,"prismjs/components/prism-yaml":9}]},{},[12]);