<template>
  <div class="layout">
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
      <div class="container">
        <g-link class="navbar-brand" to="/">Songlei</g-link>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <g-link class="nav-link" to="/">Home</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" to="/about">About</g-link>
            </li>
            <li class="nav-item">
              <g-link class="nav-link" to="/contact">Contact</g-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- 默认插槽 -->
    <slot />

    <!-- Footer -->
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-8 col-md-10 mx-auto">
            <ul class="list-inline text-center">
              <li class="list-inline-item">
                <a href="https://github.com/songleilei" target="_blank">
                  <span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-2x"></i>
                    <i class="fab fa-github fa-stack-1x fa-inverse"></i>
                  </span>
                </a>
              </li>
            </ul>
            <p class="copyright text-muted">
              Copyright &copy; Your Website 2020
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style></style>
