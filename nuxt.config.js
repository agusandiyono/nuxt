const webpack = import('webpack');

export default {
    mode : 'universal',
    /*
  ** Headers of the page
  */
    head : {
        title : 'Platform Solite Studio',
        meta  : [
            { charset : 'utf-8' },
            { name : 'viewport', content : 'width=device-width, initial-scale=1' },
            { hid : 'description', name : 'description', content : 'Solite Studio | API' }
        ],
        script : [
            { src : 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js' },
            // { src : 'https://code.jquery.com/jquery-3.3.1.slim.min.js' },
            { src : 'https://adminlte.io/themes/dev/AdminLTE/plugins/jquery/jquery.min.js' },
            { src : 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js' },
            { src : 'https://adminlte.io/themes/dev/AdminLTE/plugins/datatables/jquery.dataTables.js' },
            { src : 'https://adminlte.io/themes/dev/AdminLTE/dist/js/adminlte.min.js' }
        ],
        link : [
            { rel : 'icon', type : 'image/x-icon', href : '/favicon.png' },
            // { rel : 'stylesheet', href : 'https://adminlte.io/themes/dev/AdminLTE/plugins/tempusdominus-bootstrap-4/css/tempusdominus-bootstrap-4.min.css' },
            { rel : 'stylesheet', href : 'https://adminlte.io/themes/dev/AdminLTE/dist/css/adminlte.min.css' },
            { rel : 'stylesheet', href : 'https://adminlte.io/themes/dev/AdminLTE/plugins/fontawesome-free/css/all.min.css' }
            // { rel : 'stylesheet', href : 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,400,400i,700' }
        ],
        bodyAttrs : {
            class : 'hold-transition sidebar-mini layout-fixed'
        }
    },
    /*
  ** Customize the progress-bar color
  */
    loading : { color : '#bffaf3' },
    /*
  ** Global CSS
  */
    css     : [
        '~/node_modules/bootstrap/dist/css/bootstrap.css',
        '@assets/css/style.css'
    ],

    /*
    **Create a transition for page
    */
    transition : {
        name : 'fade',
        mode : 'out-in'
    },
    /*
  ** Plugins to load before mounting the App
  */
    plugins : ['~plugins/bootstrap.js'
    ],
    /*
  ** Nuxt.js dev-modules
  */
    buildModules : [
    // Doc: https://github.com/nuxt-community/eslint-module
        '@nuxtjs/eslint-module'
    ],
    /*
  ** Nuxt.js modules
  */
    modules : [
    // Doc: https://axios.nuxtjs.org/usage
        '@nuxtjs/font-awesome',
        '@nuxtjs/axios',
        '@nuxtjs/pwa'
    ],
    /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
    axios : {
    },
    /*
  ** Build configuration
  */
    build : {
    /*
    ** You can extend webpack config here
    */
        extend(config, ctx) {
        }
    }

};
