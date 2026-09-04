document.addEventListener("DOMContentLoaded", function () { new SweetScroll({}); 
particlesJS("particles-js", { particles: { number: { value: 30, density: { enable: !0, value_area: 800 } }, color: 
{ value: "#ffffff" }, shape: { type: "triangle", stroke: { width: 0, color: "#000000" }, polygon: { nb_sides: 5 }, 
image: { src: "img/github.svg", width: 100, height: 100 } }, opacity: { value: .5, random: !1, anim: { enable: !1, speed: 1,
         opacity_min: .1, sync: !1 } }, size: { value: 3, random: !0, anim: { enable: !1, speed: 19.18081918081918, size_min: .1, sync: !1 } }, 
         line_linked: { enable: !0, distance: 150, color: "#ffffff", opacity: .4, width: 1 }, move: { enable: !0, speed: 4, direction: "none",
            random: !0, straight: !1, out_mode: "out", bounce: !1, attract: { enable: !1, rotateX: 600, rotateY: 1200 } }, nb: 80 }, interactivity:
             { detect_on: "canvas", events: { onhover: { enable: !1, mode: "grab" }, onclick: { enable: !0, mode: "push" }, resize: !0 }, modes:
                { grab: { distance: 400, line_linked: { opacity: 1 } }, bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
                 repulse: { distance: 200, duration: .4 }, push: { particles_nb: 4 }, remove: { particles_nb: 2 } } }, retina_detect: !0 }) }, !1);
});

// Theme helpers: cookie storage + system preference
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

function applyTheme(theme){
    document.documentElement.setAttribute('data-bs-theme', theme);
    var icon = document.querySelector('.theme-toggle-icon');
    if(icon){
        icon.classList.remove('fa-moon','fa-sun');
        if(theme === 'dark') icon.classList.add('fa-sun');
        else icon.classList.add('fa-moon');
    }
}

function initTheme(){
    var saved = getCookie('theme');
    if(saved){
        applyTheme(saved);
    } else if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){
        applyTheme('dark');
    } else {
        applyTheme('light');
    }
    // if no explicit choice, listen to system changes
    if(!saved && window.matchMedia){
        try{
            window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e){
                applyTheme(e.matches ? 'dark' : 'light');
            });
        }catch(e){
            // older browsers
            var m = window.matchMedia('(prefers-color-scheme: dark)');
            m.addListener(function(e){ applyTheme(e.matches ? 'dark' : 'light'); });
        }
    }
}

initTheme();

window.toggleTheme = function(){
    var current = document.documentElement.getAttribute('data-bs-theme');
    var next = (current === 'dark') ? 'light' : 'dark';
    applyTheme(next);
    if(window.console && console.debug) console.debug('toggleTheme ->', next);
    setCookie('theme', next, 365);
}

// debug: expose a check function
window.__debugTheme = function(){ return { applied: document.documentElement.getAttribute('data-bs-theme'), cookie: getCookie('theme') }; };