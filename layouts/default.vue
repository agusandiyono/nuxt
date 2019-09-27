<template>
  <!-- <div>
    <Nav />
    <Sidebar />
    <nuxt />
  </div> -->
  <div class="wrapper">
    <Nav />
    <Sidebar />
    <nuxt />

    <!-- Control Sidebar -->
    <aside class="control-sidebar control-sidebar-dark">
      <!-- Control sidebar content goes here -->
      <div class="p-3">
        <h5>Title</h5>
        <p>Sidebar content</p>
      </div>
    </aside>
    <!-- /.control-sidebar -->

    <!-- Main Footer -->
    <footer class="main-footer">
      <!-- To the right -->
      <div class="float-right d-none d-sm-inline">
        Version 0.1
      </div>
      <!-- Default to the left -->
      <strong>Copyright &copy; 2014-2019 <a href="https://solitestudio.net">Solite Studio</a>.</strong> All rights reserved.
    </footer>
  </div>
  <!-- ./wrapper -->
</template>

<script>
import Nav from '@/components/Nav';
import Sidebar from '@/components/Sidebar';
export default {
    components : {
        Nav,
        Sidebar
    }
};
</script>
