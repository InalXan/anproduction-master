<template>
<footer>
<div class="footer">
<div class="row">
<a href="#"><ion-icon name="logo-facebook"></ion-icon></a>
<a href="#"><ion-icon name="logo-instagram"></ion-icon></a>
<a href="#"><ion-icon name="logo-whatsapp"></ion-icon></a>
</div>

<div class="row">
<ul>
<li><a href="#">About</a></li>
<li><a href="#">Katalog</a></li>
<li><a href="#">Kategoriya</a></li>
<li><a href="#">Qalereya</a></li>
<li><a href="#">Əlaqə</a></li>
</ul>
</div>

<div class="row">
Anproduction Copyright © 2024 - All rights reserved 
</div>
</div>
</footer>


</template>
<style lang="less">
@import '../assets/base';
.footer{
background: @primary;
padding:30px 0px;
font-family: 'Play', sans-serif;
text-align:center;
}

.footer .row{
width:100%;
margin:1% 0%;
padding:0.6% 0%;
color:gray;
font-size:0.8em;
}

.footer .row a{
text-decoration:none;
color: @second;
transition:0.5s;
}

.footer .row a:hover{
color:#fff;
}

.footer .row ul{
width:100%;
}

.footer .row ul li{
display:inline-block;
margin:0px 30px;
}

.footer .row a ion-icon{
font-size:2em;
margin:0% 1%;
}

@media (max-width:720px){
.footer{
text-align:left;
padding:5%;
}
.footer .row ul li{
display:block;
margin:10px 0px;
text-align:left;
}
.footer .row a ion-icon{
margin:0% 3%;
}
}


</style>
