(function(){
var b=document.querySelector('.burger'),n=document.getElementById('nav');
if(b&&n)b.addEventListener('click',function(){var o=n.classList.toggle('open');b.setAttribute('aria-expanded',o?'true':'false');b.setAttribute('aria-label',o?'Close menu':'Open menu');});
function $(i){return document.getElementById(i);}
var f=$('cform');
if(f)f.addEventListener('submit',function(e){e.preventDefault();var fm=$('fm');
 if($('website').value)return;
 if(!f.checkValidity()){fm.hidden=false;fm.textContent='Please add your name, a valid email address and a message, and tick the agreement box.';return;}
 var body='Name: '+$('name').value+'\nEmail: '+$('email').value+'\nTopic: '+$('topic').value+'\n\n'+$('message').value;
 location.href='mailto:'+f.getAttribute('data-to')+'?subject='+encodeURIComponent(f.getAttribute('data-brand')+': '+$('topic').value)+'&body='+encodeURIComponent(body);
 fm.hidden=false;fm.textContent='Your email app should open with the message ready to send. If nothing happens, write to us directly at '+f.getAttribute('data-to')+'.';});
var c=$('cookie'),k=null;try{k=localStorage.getItem('ck_'+location.hostname);}catch(e){}
if(c&&!k)c.classList.add('show');
if(c)c.querySelectorAll('button').forEach(function(bt){bt.addEventListener('click',function(){try{localStorage.setItem('ck_'+location.hostname,bt.getAttribute('data-cookie'));}catch(e){}c.classList.remove('show');});});
var y=$('year');if(y)y.textContent=new Date().getFullYear();
})();
(function(){function $(i){return document.getElementById(i);}
function on(a,f){a.forEach(function(x){x.addEventListener('input',f);x.addEventListener('change',f);});f();}
var sd=$('sr-d');if(sd){var sx=$('sr-x');var t=new Date();sd.value=t.toISOString().slice(0,10);
 on([sd,sx],function(){var d=new Date(sd.value+'T12:00:00');if(isNaN(d)){$('sr-o').innerHTML='<strong>Pick a date</strong>';return;}var G=[1,3,7,14,30],ex=sx.value?new Date(sx.value+'T12:00:00'):null,li=[];
  G.forEach(function(g,i){var r=new Date(d.getTime()+g*864e5);if(!ex||r<=ex)li.push('<li>Review '+(i+1)+': '+r.toLocaleDateString(undefined,{weekday:'short',day:'numeric',month:'short'})+'</li>');});
  $('sr-o').innerHTML='<strong>'+li.length+' reviews</strong><ol>'+li.join('')+'</ol>'+(ex&&li.length<5?'<p>Your exam comes before the later reviews; add an extra quiz the week before.</p>':'<p>Test yourself at each review rather than re-reading.</p>');});}
var sh=$('ss-h');if(sh){var sf=$('ss-f');on([sh,sf],function(){var h=parseFloat(sh.value)||0,w=parseInt(sf.value,10),b=w===25?5:w===50?10:20,tot=h*60,n=0,used=0;while(used+w<=tot+0.1){n++;used+=w;if(used+b+w<=tot){used+=b;if(n%4===0&&w===25)used+=15;}else break;}
  $('ss-o').innerHTML='<strong>'+n+' focus block'+(n===1?'':'s')+'</strong><p>'+n+' &times; '+w+' min work = '+(n*w)+' minutes of focused study.</p><p>'+(n>=4?'Take one longer break (20&ndash;30 min) halfway through.':'Start each block with 5 minutes of recall from the last one.')+'</p>';});}
var rp=$('rt-p');if(rp){var rt=$('rt-t'),rs=$('rt-s');on([rp,rt,rs],function(){var p=parseFloat(rp.value)||0,m=Math.round(p*parseFloat(rt.value)/parseFloat(rs.value)),h=Math.floor(m/60),mm=m%60;
  $('rt-o').innerHTML='<strong>'+(h?h+' h ':'')+mm+' min</strong><p>About '+Math.round(p*parseFloat(rt.value)).toLocaleString()+' words.</p><p>'+(m>90?'Split it across '+Math.ceil(m/50)+' sessions and summarise each part from memory.':'Write a five-line summary from memory when you finish.')+'</p>';});}
})();
