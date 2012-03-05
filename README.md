# Parabear

An experiment in stupid-simple HTML article text extraction. There are [plenty of sophisticated algorithms](http://tomazkovacic.com/blog/122/evaluating-text-extraction-algorithms/) for extracting an article's text from the cruft surrounding it. This is not one of them. 

Parabear uses just one, entirely transparent rule: Find the HTML element with the most __p__-tag children, and then select all of that element's __p__, __blockquote__, __ul__, __ol__, __li__, __h1__, __h2__, __h3__, __h4__, __h5__, __h6__, and __hr__ tags. (This set of "keepers" is entirely configurable.)

---

### __Bookmarklet__

Drag the following link...

<a href='javascript:((function()%7Bvar%20a=function(a,b)%7Bb=b%7C%7C%7B%7D;var%20c=a.getElementsByTagName(%22p%22),d=%7B%7D,e,f,g;for(e=0;e%3Cc.length;e++)g=c%5Be%5D.parentNode,f=g.parabear_id=g.parabear_id%7C%7Ce,d%5Bf%5D=++d%5Bf%5D%7C%7C1;var%20h=0,i;for(f%20in%20d)d%5Bf%5D%3Eh&&(h=d%5Bf%5D,i=c%5Bf%5D.parentNode);var%20j=%5B%5D,k=b.tagRegex%7C%7C/%5E(?:p%7Cblockquote%7Cul%7Col%7Cli%7Chr%7Ch1%7Ch2%7Ch3%7Ch4%7Ch6)$/i,l=i.childNodes;for(e=0;e%3Cl.length;e++)k.test(l%5Be%5D.tagName)&&j.push(l%5Be%5D);return%20j%7D;this.module&&module.exports?module.exports=a:this.parabear=a%7D)).call(this),function()%7Bvar%20a=document,b=a.body,c=function(b)%7Breturn%20a.createElement.call(a,b)%7D;if(!this.parabear_appended)%7Bvar%20d=c(%22style%22);d.type=%22text/css%22,d.innerHTML=%22body.parabear%20%7B%20background:%20#FFF%20%7D%20body.parabear%20%3E%20*%20%7B%20display:%20none%20!important%20%7D%20.parabear-keepers%20%7B%20display:%20none;%20%7D%20body.parabear%20.parabear-keepers%20%7B%20display:%20block%20!important;%20width:%20500px;%20margin:%2020px%20auto;%20%7D%20.parabear-keepers%20*%20%7Bfont-size:%2018px%20!important;%20line-height:%2026px%20!important;%20font-family:%20Georgia,%20serif%20!important;%20text-align:%20justify%20!important;%20color:%20#333%20!important;%20%7D%20.parabear-keepers%20a%20%7B%20color:%20darkBlue%20!important;%20%7D%20.parabear-keepers%20%3E%20*%20%7B%20margin:%2020px%200;%20%7D%20.parabear-keepers%20h1%20%7B%20font-size:%2029px%20!important;%20line-height:%2029px%20!important;%20font-weight:%20bold;%20text-align:%20left;%20%7D%20.parabear-keepers%20h2,%20.parabear-keepers%20h3%20%7B%20font-weight:%20bold%20%7D%20.parabear-keepers%20blockquote%20%7B%20margin:%200%2040px%20%7D%20@media%20screen%20and%20(max-width:%20550px)%20%7B%20body.parabear%20.parabear-keepers%20%7B%20width:%2090%25;%20%7D%7D%22,b.appendChild(d);var%20e=parabear(a),f=c(%22div%22);f.className=%22parabear-keepers%22;var%20g=c(%22h1%22);g.innerHTML=a.title,f.appendChild(g);for(var%20h=0;h%3Ce.length;h++)f.appendChild(e%5Bh%5D.cloneNode(!0));b.appendChild(f),this.parabear_appended=!0%7Db.className.indexOf(%22%20parabear%22)%3E-1?b.className=b.className.replace(%22%20parabear%22,%22%22):b.className+=%22%20parabear%22%7D.call(this);'>__Parabear__</a>

... to your bookmarks bar.

---

### __Manifesto__

__TK__

### __Where It Works__

__TK__
