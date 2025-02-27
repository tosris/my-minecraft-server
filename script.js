
const ipAddress = document.getElementById("ip-address");
const copyButton = document.getElementById("copy-btn");
const serverIP = "4qs.se"; 
copyButton.addEventListener("mouseover", () => {
    ipAddress.textContent = "Klicka för att kopiera IP";});
copyButton.addEventListener("mouseout", () => {
    ipAddress.textContent = "IP: 4qs.se";});
copyButton.addEventListener("click", () => {
    ipAddress.textContent = "IP: 4qs.se";});
copyButton.addEventListener('click', () => {
    const tempInput = document.createElement('input');
    tempInput.value = ipAddress.textContent.replace('IP: ', ''); 
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand('copy');
    document.body.removeChild(tempInput);
    let existingMessage = document.querySelector(".copied-message");
    if (existingMessage) {
        existingMessage.remove();}
    const copiedMessage = document.createElement('div');
    copiedMessage.textContent = 'IP kopierad!';
    copiedMessage.classList.add('copied-message');
    copyButton.parentNode.appendChild(copiedMessage);    
    setTimeout(() => copiedMessage.classList.add("show-message"), 100);
    setTimeout(() => {
        copiedMessage.textContent = "Välkommen!";}, 1500);
    setTimeout(() => {
     copiedMessage.remove();}, 4000);
    const fireworkContainer = document.getElementById('firework-container');
    for (let i = 0; i < 10; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        firework.style.left = `${Math.random() * 100}%`;
        firework.style.animationDelay = `${Math.random() * 0.5}s`;  
        fireworkContainer.appendChild(firework);
        setTimeout(() => {
            firework.remove();}, 1000); }});
let slideIndex = 1; 
showSlides(slideIndex);
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");
    let videos = document.getElementsByClassName("slide-video");
    if (n > slides.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = slides.length} 
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        if (videos[i]) videos[i].pause();}
    for (let j = 0; j < dots.length; j++) {
        dots[j].className = dots[j].className.replace(" active", "");}
    slides[slideIndex - 1].style.display = "block";  
    dots[slideIndex - 1].className += " active"; 
    if (videos[slideIndex - 1]) videos[slideIndex - 1].play();}function changeSlide(n) {
    showSlides(slideIndex += n);}function currentSlide(n) {
    showSlides(slideIndex = n);}setInterval(function() {
    showSlides(slideIndex += 1);}, 30000); 
    async function fetchPlayerCount() {
try {
    const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
    const data = await response.json();
    if (data.online) {
        document.getElementById("player-count").textContent = `${data.players.online} Spelare uppkopplade`;} else {
        document.getElementById("player-count").textContent = "Servern är tillfälligt nere";}} catch (error) {
    document.getElementById("player-count").textContent = "Fel vid hämtning av serverstatus";}}
fetchPlayerCount();
setInterval(fetchPlayerCount, 30000); 
function openModal(title, text, image, date) {
document.getElementById('modalTitle').innerText = title;
document.getElementById('modalText').innerText = text;
document.getElementById('modalImage').src = image;
document.getElementById('modalDate').innerText = 'Publicerad: ' + date;
document.getElementById('newsModal').style.display = 'flex';}
function closeModal() {
document.getElementById('newsModal').style.display = 'none';}
window.onclick = function(event) {
if (event.target == document.getElementById('newsModal')) {
closeModal();}}
async function fetchOnlinePlayers() {
    try {
        const response = await fetch(`https://api.mcsrvstat.us/2/${serverIP}`);
        const data = await response.json();
        const playerSection = document.querySelector(".players-online");
        const playerList = document.getElementById("player-list");
        playerList.innerHTML = ""; 
        if (data.players && data.players.list && data.players.list.length > 0) {
            playerSection.style.display = "block"; 
            data.players.list.forEach(player => {
                const playerDiv = document.createElement("div");
                playerDiv.classList.add("player");
                playerDiv.innerHTML = `
                    <img src="https://mineskin.eu/avatar/${player}" alt="${player}">
                    <span>${player}</span>`;
                playerList.appendChild(playerDiv);}); } else {
            playerSection.style.display = "none"; }
    } catch (error) {
        console.error("Misslyckades att hämta spelare:", error);}
}setInterval(fetchOnlinePlayers, 30000);
fetchOnlinePlayers();
document.getElementById("menu-toggle").addEventListener("click", function() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("show"); 
});
