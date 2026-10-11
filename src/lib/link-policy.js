// Keep site navigation, language changes, and sidebar links in this tab.
// Open other external website links separately.
export const newWindowLinksScript = `(function(){
function prepare(link){
 if(link.closest('#starlight__sidebar')){link.removeAttribute('target');return;}
 var href=link.getAttribute('href');
 if(!href)return;
 var url;try{url=new URL(href,location.href)}catch(e){return}
 if(url.protocol!=='http:' && url.protocol!=='https:')return;
 if(url.origin===location.origin){link.removeAttribute('target');return;}
 link.setAttribute('target','_blank');
 var rel=new Set((link.getAttribute('rel')||'').split(/\\s+/).filter(Boolean));rel.add('noopener');rel.add('noreferrer');link.setAttribute('rel',Array.from(rel).join(' '));
}
function update(){document.querySelectorAll('a[href]').forEach(prepare)}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',update);else update();
document.addEventListener('astro:page-load',update);
document.addEventListener('click',function(event){var link=event.target instanceof Element && event.target.closest('a[href]');if(link)prepare(link)},true);
})();`;
