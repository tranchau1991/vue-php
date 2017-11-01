<template>
    <div class="header">
        <header>
            <!--<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <a class="navbar-brand" href="#">Carousel</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <router-link to="/" class="nav-link">Home</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="showlist"  class="nav-link">Showlist</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="manager"  class="nav-link">Manage</router-link>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" href="#">Disabled</a>
                    </li>
                </ul>
                <form class="form-inline mt-2 mt-md-0">
                    <input class="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                </div>
            </nav>-->

            <!--https://getbootstrap.com/docs/3.3/examples/offcanvas/#-->
        <nav class="navbar navbar-fixed-top navbar-inverse">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">Project name</a>
            </div>
            <div id="navbar" class="collapse navbar-collapse">
            <ul class="nav navbar-nav">
                <!--<li class="active">-->
                <li>
                    <router-link to="/" class="nav-link">Home</router-link>
                </li>
                <li>
                    <router-link to="showlist"  class="nav-link">Showlist</router-link>
                </li>
                <li>
                    <router-link to="manager"  class="nav-link">Manage</router-link>
                </li>
                <!--<li><a href="#contact">Contact</a></li>-->
            </ul>
            </div><!-- /.nav-collapse -->
        </div><!-- /.container -->
        </nav>
    </header>
    </div>
</template>
<script src="./script.js"></script>