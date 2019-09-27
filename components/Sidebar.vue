<template>
  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="/" class="brand-link">
      <img
        src="img/logo.png"
        alt="AdminLTE Logo"
        class="brand-image img-circle elevation-3"
        style="opacity: .8"
      >
      <span class="brand-text font-weight-light">Platform Solite</span>
    </a>

    <!-- Sidebar -->
    <div class="sidebar">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="img/profile.png" class="img-circle elevation-2" alt="User Image">
        </div>
        <div class="info">
          <a href="#" class="d-block">Agus Andiyono</a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
                with font-awesome or any other icon font library -->
          <li class="nav-item">
            <nuxt-link to="/" exact class="nav-link">
              <i class="nav-icon fa fa-dashboard" />
              <p>
                Dashboard
              </p>
            </nuxt-link>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-mobile" />
              <p>
                Aplikasi
                <i class="right fa fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link to="/app" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Daftar Aplikasi</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/brand" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Brand Aplikasi</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-download" />
              <p>
                Content
                <i class="right fa fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link to="/dlc" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Daftar DLC</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/statistik" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Data Statistik</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-th" />
              <p>
                Manajemen
                <i class="right fa fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link to="/users" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>User</p>
                </nuxt-link>
              </li>
              <li class="nav-item">
                <nuxt-link to="/role" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Role</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fa fa-edit" />
              <p>
                Soal
                <i class="right fa fa-angle-left" />
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <nuxt-link to="/soal" exact class="nav-link">
                  <i class="fa fa-circle nav-icon" />
                  <p>Daftar Soal</p>
                </nuxt-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>
</template>
