<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Dashboard
            </h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <!-- <li class="breadcrumb-item"><nuxt-link to="/">Dashboard</nuxt-link></li> -->
              <li class="breadcrumb-item active">
                Dashboard
              </li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h3>150</h3>

                <p>Aplikasi</p>
              </div>
              <div class="icon">
                <i class="fa fa-mobile" />
              </div>
              <nuxt-link to="/app" class="small-box-footer">
                More info <i class="fa fa-arrow-circle-right" />
              </nuxt-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h3>53<sup style="font-size: 20px">%</sup></h3>

                <p>Downloadable Content</p>
              </div>
              <div class="icon">
                <i class="fa fa-download" />
              </div>
              <nuxt-link to="/dlc" class="small-box-footer">
                More info <i class="fa fa-arrow-circle-right" />
              </nuxt-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h3>44</h3>

                <p>User</p>
              </div>
              <div class="icon">
                <i class="fa fa-users" />
              </div>
              <nuxt-link to="/users" class="small-box-footer">
                More info <i class="fa fa-arrow-circle-right" />
              </nuxt-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h3>65</h3>

                <p>Unique Visitors</p>
              </div>
              <div class="icon">
                <i class="fa fa-dashboard" />
              </div>
              <a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right" /></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>
