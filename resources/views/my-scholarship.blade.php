<div class="col-sm-12 wow animated bounceInUp">
    <div class="row wow animated bounceIn" id="content">
        @for ($i = 0; $i < 100; $i++)
            <div class="col-md-4">
                <!-- Box Comment -->
                <div class="box box-widget">
                    <div class="box-header with-border">
                        <div class="user-block">
                            <img class="img-circle" src="{{ url('/') }}/public/adminLTE/dist/img/avatar5.png" alt="user image">
                            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>
                            <span class="description">Shared publicly - 7:30 PM Today</span>
                        </div><!-- /.user-block -->
                        <div class="box-tools">
                            <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        </div><!-- /.box-tools -->
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <img class="img-responsive pad" src="{{ url('/') }}/public/adminLTE/dist/img/photo2.png" alt="Photo">
                    </div><!-- /.box-body -->
                    <div class="box-footer box-comments">
                        <div class="box-comment">
                                   <span class="username">
                                            Maria Gonzales
                                       <span class="text-muted pull-right"><a href="javascript:;">Detail</a></span>
                                   </span><!-- /.username -->
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </div><!-- /.box-comment -->
                    </div><!-- /.box-footer -->
                    <div class="box-footer text-black">
                        <div class="row">
                            <div class="col-sm-12">
                                <!-- Progress bars -->
                                <div class="clearfix">
                                    <span class="pull-left">Terkumpul</span>
                                    <small class="pull-right">Rp. 45.069.988</small>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-green" style="width: 90%;">90%</div>
                                </div>
                                <div class="clearfix">
                                    {{--<span class="pull-left">Task #1</span>--}}
                                    <small class="pull-right"><i class="fa fa-clock-o"></i> 22 days left</small>
                                </div>
                            </div><!-- /.col -->
                        </div><!-- /.row -->
                    </div>
                </div><!-- /.box -->
            </div>
            <div class="col-md-4">
                <!-- Box Comment -->
                <div class="box box-widget">
                    <div class="box-header with-border">
                        <div class="user-block">
                            <img class="img-circle" src="{{ url('/') }}/public/adminLTE/dist/img/avatar2.png" alt="user image">
                            <span class="username"><a href="#">Jonathan Burke Jr.</a></span>
                            <span class="description">Shared publicly - 7:30 PM Today</span>
                        </div><!-- /.user-block -->
                        <div class="box-tools">
                            <button class="btn btn-box-tool" data-widget="collapse"><i class="fa fa-minus"></i></button>
                        </div><!-- /.box-tools -->
                    </div><!-- /.box-header -->
                    <div class="box-body">
                        <img class="img-responsive pad" src="{{ url('/') }}/public/adminLTE/dist/img/photo2.png" alt="Photo">
                    </div><!-- /.box-body -->
                    <div class="box-footer box-comments">
                        <div class="box-comment">
                                   <span class="username">
                                            Maria Gonzales
                                       <span class="text-muted pull-right"><a href="javascript:;">Detail</a></span>
                                   </span><!-- /.username -->
                            It is a long established fact that a reader will be distracted
                            by the readable content of a page when looking at its layout.
                        </div><!-- /.box-comment -->
                    </div><!-- /.box-footer -->
                    <div class="box-footer text-black">
                        <div class="row">
                            <div class="col-sm-12">
                                <!-- Progress bars -->
                                <div class="clearfix">
                                    <span class="pull-left">Funded</span>
                                    <small class="pull-right">Rp. 45.069.988</small>
                                </div>
                                <div class="progress">
                                    <div class="progress-bar progress-bar-green" style="width: 90%;">90%</div>
                                </div>
                                <div class="clearfix">
                                    {{--<span class="pull-left">Task #1</span>--}}
                                    <small class="pull-right"><i class="fa fa-clock-o"></i> 22 days left</small>
                                </div>
                            </div><!-- /.col -->
                        </div><!-- /.row -->
                    </div>
                </div><!-- /.box -->
            </div>
        @endfor
    </div>

    <div class="row wow animated bounceIn">
        <div class="col-lg-12">
            <ul id="pagination" class="pagination">1</ul>
        </div>
    </div>
</div>