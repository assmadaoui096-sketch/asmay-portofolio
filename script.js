 document.addEventListener('DOMContentLoaded', function() {
    const body = document.body;
    
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark');
    }

    const btn = document.getElementById('darkBtn');
    
    if (btn) {
        btn.onclick = function() {const body =document.body;
            body.classList.toggle('dark');
            if (body.classList.contains('dark')) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
        }
    }
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
if(menuBtn && navLinks){
menuBtn.onclick = function() {
    // قلب الكلاس active فـ الزر وفـ الليستة
    menuBtn.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// منين تكليكي على شي ليان، سدي المينو
document.querySelectorAll('.nav-Links').forEach(link => {
    link.onclick = () => {
        menuBtn.classList.remove('active');
        navLinks.classList.remove('active');
    }
});}});