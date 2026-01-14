document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("YumeRing").innerHTML = `


<div class="yumering">
<div id="img"></div>

<div id="inbox">
this webmaster is a <b></b> <b>Wally Darling</b> <b>yume!</b><br>
<a href="https://moekkis.neocities.org/yumeclique.html">join the yumeclique !</a>
</div>
</div>


<style></style>

<style>

.yumering {
    display:flex;
    box-sizing:border-box;
    gap:10px;
    justify-content:center;
    align-items:center;
    padding: 10px;
    height: 107px;
    width: 181px;
    border-radius: 5px;
    border: 1px solid black;
    font-smooth:never;
    -webkit-font-smoothing:none;
    background: linear-gradient(to bottom, transparent, white), url('https://files.catbox.moe/dbv9b2.gif');
    background-size: 100px;
}

.yumering #img {
    width: 100%; height: 72px;
    background-image: url('/archives/graphics/wally.gif');
    border:1px solid black;
    border-radius: 2px;
    background-size:cover;
    background-position:center;
}

.yumering #inbox {
    width: 208px;
    font-size: 12px;
    color: black;
}
 
</style>

`;});