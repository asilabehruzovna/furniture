let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menu.addEventListener('click',()=>{
    navbar.classList.toggle("active");
})
window.onscroll = () => {
    navbar.classList.remove('active');
}
// { <div className='bx bx-menu' onclick={() => setToggle(!toggle)} > {toggle ? <MdCancelPresentation/>: <BxMenu/>}</div> }
