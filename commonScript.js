const body = document.querySelector("body");
const footer = document.createElement("footer");
const footerHtml = `
<div class="icons">
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-128.png"
        alt="facebook">
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-128.png"
        alt="instagram">
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-128.png"
        alt="linkedin">
    <img src="https://cdn4.iconfinder.com/data/icons/miu-black-social-2/60/github-256.png" alt="github">
    <img src="https://cdn3.iconfinder.com/data/icons/address-book-providers-in-black-white/512/gmail-64.png"
        alt="gmail">
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-128.png"
        alt="twitter">
    <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Whatsapp_svg2-128.png"
        alt="whatsapp">
</div>
<a class="home-link" href="../index.html">Go to Home Page</a>
<h3>Made by: Sarim Hussain</h3>`;

footer.innerHTML = footerHtml;

body.appendChild(footer);
