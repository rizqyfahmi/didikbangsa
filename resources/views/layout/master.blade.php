<html>
    <head>
        <title>DidikBangsa.com</title>
        @include('layout.style')
    </head>
    <body class="hold-transition skin-white layout-top-nav">
        <div class="wrapper animsition">
            @if(Session::has('member'))
                @include('layout.header-loggedin')
            @else
                @include('layout.header')
            @endif
            <div class="content-wrapper" style="min-height: 339px;">
                @yield('content')
            </div>
            @include('layout.footer')
        </div>
    </body>
</html>