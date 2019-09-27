<template>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0 text-dark">
              Daftar Downloadable Content
            </h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item">
                <nuxt-link to="/">
                  Dashboard
                </nuxt-link>
              </li>
              <li class="breadcrumb-item active">
                Daftar Downloadable Content
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
          <div class="col-12">
            <div class="card">
              <div class="card-header">
                <h3 class="card-title">
                  Daftar Downloadable Content Solite Studio
                </h3>
                <div class="card-tools">
                  <button class="btn btn-success">
                    Add New
                    <i class="fa fa-user-plus fa-fw" />
                  </button>
                </div>
              </div>
              <!-- /.card-header -->
              <div class="card-body">
                <div id="example2_wrapper" class="dataTables_wrapper dt-bootstrap4">
                  <div class="row">
                    <div class="col-sm-12 col-md-6" /><div class="col-sm-12 col-md-6" />
                  </div><div class="row">
                    <div class="col-sm-12">
                      <table id="example2" class="table table-bordered table-hover dataTable" role="grid" aria-describedby="example2_info">
                        <thead>
                          <tr role="row">
                            <th>ID</th>
                            <th>DLC</th>
                            <th>Alias</th>
                            <th>Folder</th>
                            <th>App Key</th>
                            <th>Aksi</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="row in apps" :key="row.id">
                            <td class="sorting_1">
                              {{ row.id }}
                            </td>
                            <td>{{ row.name }}</td>
                            <td>{{ row.alias }}</td>
                            <td>{{ row.folder }}</td>
                            <td>
                              <a href="#" class="btn btn-secondary" @click="editModal(row)">Copy
                                <i class="fa fa-edit" />
                              </a>
                            </td>
                            <td>
                              <a href="#" class="btn btn-primary" @click="editModal(row)">Edit
                                <i class="fa fa-edit" />
                              </a>
                              <a href="#" class="btn btn-danger" @click="deleteApp(row.id)">Hapus
                                <i class="fa fa-trash" />
                              </a>
                            </td>
                          </tr>
                        </tbody>
                        <!-- <tfoot>
                          <tr>
                            <th rowspan="1" colspan="1">
                              Rendering engine
                            </th><th rowspan="1" colspan="1">
                              Browser
                            </th><th rowspan="1" colspan="1">
                              Platform(s)
                            </th><th rowspan="1" colspan="1">
                              Engine version
                            </th><th rowspan="1" colspan="1">
                              CSS grade
                            </th>
                          </tr>
                        </tfoot> -->
                      </table>
                    </div>
                  </div><div class="row">
                    <div class="col-sm-12 col-md-5">
                      <div id="example2_info" class="dataTables_info" role="status" aria-live="polite">
                        Showing 1 to 10 of 57 entries
                      </div>
                    </div><div class="col-sm-12 col-md-7">
                      <div id="example2_paginate" class="dataTables_paginate paging_simple_numbers">
                        <ul class="pagination">
                          <li id="example2_previous" class="paginate_button page-item previous disabled">
                            <a href="#" aria-controls="example2" data-dt-idx="0" tabindex="0" class="page-link">Previous</a>
                          </li><li class="paginate_button page-item active">
                            <a href="#" aria-controls="example2" data-dt-idx="1" tabindex="0" class="page-link">1</a>
                          </li><li class="paginate_button page-item ">
                            <a href="#" aria-controls="example2" data-dt-idx="2" tabindex="0" class="page-link">2</a>
                          </li><li class="paginate_button page-item ">
                            <a href="#" aria-controls="example2" data-dt-idx="3" tabindex="0" class="page-link">3</a>
                          </li><li class="paginate_button page-item ">
                            <a href="#" aria-controls="example2" data-dt-idx="4" tabindex="0" class="page-link">4</a>
                          </li><li class="paginate_button page-item ">
                            <a href="#" aria-controls="example2" data-dt-idx="5" tabindex="0" class="page-link">5</a>
                          </li><li class="paginate_button page-item ">
                            <a href="#" aria-controls="example2" data-dt-idx="6" tabindex="0" class="page-link">6</a>
                          </li><li id="example2_next" class="paginate_button page-item next">
                            <a href="#" aria-controls="example2" data-dt-idx="7" tabindex="0" class="page-link">Next</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            <!-- /.card-body -->
            </div>
            <!-- /.card -->
          </div>
        <!-- /.col -->
        </div>
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
</template>

<script>
import axios from 'axios';
export default {
    data() {
        return {
            apps : ''
        };
    },
    async asyncData() {
        const { data } = await axios.get('http://api-solite.test/v1/dlc');
        return { apps : data };
    }
};
</script>

<!--
<script>
import axios from 'axios';
export default {
    data() {
        return {
            apps : {}
        };
    },
    mounted() {
      axios.get('http://api-solite.test/v1/app')
          .then((response) => {
              console.log(response);
              this.apps = response.data;
          })
          .catch((e) => {
              console.log(e);
          });
    }
};
</script> -->
