document.addEventListener('DOMContentLoaded', function(){
  const nav = document.querySelector('.top-nav__list');
  const moreLi = document.querySelector('.top-nav__more');
  const moreList = document.querySelector('.top-nav__more-list');
  const mobileToggle = document.querySelector('.top-nav__mobile-toggle');

  if(!nav || !moreLi) return;

  function resetMore(){
    // restore moved items
    const moved = moreList.querySelectorAll('li[data-moved]');
    moved.forEach(li=>{
      li.removeAttribute('data-moved');
      li.style.display = '';
      moreLi.parentNode.insertBefore(li, moreLi);
    });
    moreList.innerHTML = '';
    moreLi.setAttribute('aria-hidden','true');
    moreLi.style.display = 'none';
  }

  function recompute(){
    // only run on desktop and when the viewport is constrained
    if(window.innerWidth <= 880){
      resetMore();
      return;
    }
    if(window.innerWidth > 1200){
      resetMore();
      return;
    }
    const containerWidth = nav.getBoundingClientRect().width - 160; // leave room for brand/spacing
    let used = 0;
    const items = Array.from(nav.querySelectorAll('.top-nav__item')).filter(i=>!i.classList.contains('top-nav__more'));
    // move all back first
    resetMore();
    for(const li of items){
      used += li.getBoundingClientRect().width;
      if(used > containerWidth){
        // move this and remaining into more
        const remaining = items.slice(items.indexOf(li));
        remaining.forEach(r=>{
          const clone = r.cloneNode(true);
          clone.setAttribute('data-moved','true');
          clone.classList.remove('top-nav__item');
          clone.classList.add('more-item');
          // strip submenu hover behavior for simpler list
          const sub = clone.querySelector('.top-nav__submenu');
          if(sub) sub.remove();
          const liWrap = document.createElement('li');
          liWrap.appendChild(clone.querySelector('a') || document.createTextNode('Item'));
          liWrap.setAttribute('data-moved','true');
          moreList.appendChild(liWrap);
          r.parentNode.removeChild(r);
        });
        moreLi.setAttribute('aria-hidden','false');
        moreLi.style.display = '';
        break;
      }
    }
    if(!moreList.children.length){
      moreLi.setAttribute('aria-hidden','true');
      moreLi.style.display = 'none';
    }
  }

  // initial compute and on resize
  recompute();
  let resizeTimer;
  window.addEventListener('resize', ()=>{ clearTimeout(resizeTimer); resizeTimer = setTimeout(recompute, 120); });

  // mobile toggle
  mobileToggle && mobileToggle.addEventListener('click', function(){
    const list = document.getElementById('top-nav-list');
    const open = list.classList.toggle('open');
    this.setAttribute('aria-expanded', open? 'true' : 'false');
  });

  // open submenu on click for touch devices
  document.querySelectorAll('.top-nav__item > .top-nav__link').forEach(link=>{
    link.addEventListener('click', function(e){
      const parent = this.parentNode;
      if(window.innerWidth <= 880){
        e.preventDefault();
        parent.classList.toggle('open');
      }
    });
  });

  // open more list on click (desktop)
  const moreToggle = document.querySelector('.top-nav__more-toggle');
  if(moreToggle){
    moreToggle.addEventListener('click', function(e){
      e.stopPropagation();
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);
      moreList.style.display = expanded ? 'none' : 'block';
    });
    document.addEventListener('click', ()=>{ moreList.style.display = 'none'; moreToggle.setAttribute('aria-expanded','false'); });
  }
  
  // keyboard & accessibility helpers
  document.addEventListener('keydown', function(e){
    // Escape closes mobile or more menus
    if(e.key === 'Escape'){
      const list = document.getElementById('top-nav-list');
      if(list && list.classList.contains('open')){
        list.classList.remove('open');
        mobileToggle && mobileToggle.setAttribute('aria-expanded','false');
      }
      if(moreList){ moreList.style.display = 'none'; moreToggle && moreToggle.setAttribute('aria-expanded','false'); }
    }
  });

  // allow Enter/Space on focused links to toggle submenu on small screens
  document.querySelectorAll('.top-nav__item > .top-nav__link').forEach(link=>{
    link.addEventListener('keydown', function(e){
      if(window.innerWidth <= 880 && (e.key === 'Enter' || e.key === ' ')){
        e.preventDefault();
        const parent = this.parentNode;
        parent.classList.toggle('open');
      }
    });
  });

  // Mobile submenu toggles (touch-friendly accordion)
  function setupMobileSubmenuToggles(){
    if(window.innerWidth > 880) return;
    // ensure we only add toggles once
    Array.from(document.querySelectorAll('.top-nav__item')).forEach(item=>{
      const submenu = item.querySelector('.top-nav__submenu');
      if(submenu && !item.querySelector('.submenu-toggle')){
        const btn = document.createElement('button');
        btn.className = 'submenu-toggle';
        btn.setAttribute('aria-expanded','false');
        btn.innerHTML = '▸';
        btn.addEventListener('click', function(e){
          e.stopPropagation();
          const open = item.classList.toggle('open');
          // close siblings for simpler mobile UX
          Array.from(item.parentNode.children).forEach(sib=>{ if(sib !== item) sib.classList.remove('open'); });
          // update aria
          btn.setAttribute('aria-expanded', open? 'true' : 'false');
        });
        // append the button after the link
        const link = item.querySelector('.top-nav__link');
        if(link){
          link.parentNode.insertBefore(btn, link.nextSibling);
        }
      }
    });
  }

  // Initialize mobile toggles now and on resize
  setupMobileSubmenuToggles();
  window.addEventListener('resize', ()=>{ setTimeout(setupMobileSubmenuToggles, 200); });
});
