@extends('layout.master')

@section('content')
    <div class="container">
        <!-- Main content -->
        <section class="content">
            <div class="row wow animated fadeInRight">
                <div class="col-md-4">
                    <div class="box box-widget">
                        <div class="box-header with-border">
                            <img class="img-thumbnail img-circle" src="{{ url('/') }}/public/adminLTE/dist/img/avatar5.png" alt="user image" style="display: block; margin: 0 auto;">
                            <div class="box-tools">
                                <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                            </div><!-- /.box-tools -->
                        </div><!-- /.box-header -->
                        <div class="box-body no-padding" style="display: block; border-bottom: 1px solid #f3f3f3;">
                            <div class="col-sm-6 border-right">
                                <dl>
                                    <dt>ID</dt>
                                    <dd>1242016040907543682</dd>
                                    <dt>Nama</dt>
                                    <dd>John</dd>
                                    <dt>Telepon</dt>
                                    <dd>-</dd>
                                </dl>
                            </div>
                            <div class="col-sm-6">
                                <dl>
                                    <dt>Email</dt>
                                    <dd>-</dd>
                                    <dt>Biografi</dt>
                                    <dd>-</dd>
                                    <dt>Terdaftar</dt>
                                    <dd>dd-mm-YYYY</dd>
                                </dl>
                            </div>
                        </div>
                        <div class="box-body no-padding" style="display: block;">
                            <div class="row">
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 class="description-header">3,200</h5>
                                        <span class="description-text">Donasi</span>
                                    </div><!-- /.description-block -->
                                </div><!-- /.col -->
                                <div class="col-sm-4 border-right">
                                    <div class="description-block">
                                        <h5 class="description-header">13,000</h5>
                                        <span class="description-text">Beasiswa</span>
                                    </div><!-- /.description-block -->
                                </div><!-- /.col -->
                                <div class="col-sm-4">
                                    <div class="description-block">
                                        <h5 class="description-header">35</h5>
                                        <span class="description-text">Kredit</span>
                                    </div><!-- /.description-block -->
                                </div><!-- /.col -->
                            </div>
                        </div><!-- /.box-body -->
                        <div class="box-body no-padding" style="display: block; border-bottom: 1px solid #f3f3f3;">
                        </div>
                        <div class="box-footer no-padding" style="display: block;">
                            <ul class="nav nav-pills nav-stacked">
                                <li class="active"><a href="javascript:;" class="profil-content-loader" alt="my-profil"><i class="fa fa-inbox"></i> Profil</a></li>
                                <li><a href="javascript:;" class="profil-content-loader" alt="my-donation"><i class="fa fa-envelope-o"></i> Donasi</a></li>
                                <li><a href="javascript:;" class="profil-content-loader" alt="my-scholarship"><i class="fa fa-file-text-o"></i> Beasiswa</a></li>
                                <li><a href="#"><i class="fa fa-filter"></i> Kredit </a></li>
                            </ul>
                        </div><!-- /.box-body -->
                    </div>
                </div>
                <div class="col-md-8 wow animated bounceInUp">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="box box-solid">
                                <div class="box-body">
                                    <div id="carousel-example-generic" class="carousel slide" data-ride="carousel">
                                        <ol class="carousel-indicators">
                                            <li data-target="#carousel-example-generic" data-slide-to="0" class=""></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="1" class=""></li>
                                            <li data-target="#carousel-example-generic" data-slide-to="2" class="active"></li>
                                        </ol>
                                        <div class="carousel-inner">
                                            <div class="item">
                                                <img src="http://placehold.it/1100x500/39CCCC/ffffff&amp;text=I+Love+Bootstrap" alt="First slide">
                                                <div class="carousel-caption">
                                                    First Slide
                                                </div>
                                            </div>
                                            <div class="item">
                                                <img src="http://placehold.it/1100x500/3c8dbc/ffffff&amp;text=I+Love+Bootstrap" alt="Second slide">
                                                <div class="carousel-caption">
                                                    Second Slide
                                                </div>
                                            </div>
                                            <div class="item active">
                                                <img src="http://placehold.it/1100x500/f39c12/ffffff&amp;text=I+Love+Bootstrap" alt="Third slide">
                                                <div class="carousel-caption">
                                                    Third Slide
                                                </div>
                                            </div>
                                        </div>
                                        <a class="left carousel-control" href="#carousel-example-generic" data-slide="prev">
                                            <span class="fa fa-angle-left"></span>
                                        </a>
                                        <a class="right carousel-control" href="#carousel-example-generic" data-slide="next">
                                            <span class="fa fa-angle-right"></span>
                                        </a>
                                    </div>
                                </div><!-- /.box-body -->
                            </div><!-- /.box -->
                        </div>
                    </div>
                    <div class="row" id="profil-content">
                        @include('my-profil')
                    </div>
                </div>
            </div>
        </section><!-- /.content -->
    </div><!-- /.container -->
    {!!Html::script('public/adminLTE/plugins/jQuery/jQuery-2.1.4.min.js')!!}
    {!!Html::script('public/adminLTE/dist/js/profil.js')!!}
    @include('layout.script')

@endsection