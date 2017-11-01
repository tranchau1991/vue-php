<template>
    <div class="ShowList">        
        <p>Họ và tên</p>
        <!--<ol>-->
        <li v-for="(user, index) in users">
            <i>{{ user.name }}</i>
        </li>
        <!--</ol>-->
    </div>
</template>
<script src="./script.js"></script>