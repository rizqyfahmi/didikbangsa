<html>
    <head>
        <title>DidikBangsa.com</title>
        @include('layout.style')
    </head>
    <body class="hold-transition skin-blue layout-top-nav">
        <div class="wrapper">
            @include('layout.header')
            <div class="content-wrapper" style="min-height: 339px;">
                @yield('content')
            </div>
            @include('layout.footer')
        </div>
        @include('layout.script')
    </body>
</html>