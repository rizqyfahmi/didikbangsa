
function Login(){
    this.form_login = function(){
        $('#form-login').bootstrapValidator({
            message: 'This value is not valid', 
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {                       
                email: {
                    message: 'Invalid value',
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                },
                password: {
                    message: 'Invalid value',
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {                    
            $('#form-login').submit(function (event) {
                //                        event.preventDefault();                            
                //                        var formData = new FormData($(this)[0]);                
                //                        ajaxPro('POST', '/l-fis/staff/settingPassword', formData, 'html', false, false, false, false, success, success, null);       
                //                        function success(output) {            
                //                            $("#form-setting-password")[0].reset();
                //                            $("#form-setting-password").bootstrapValidator('resetForm', true);                 
                //                            notify('info', output, null);                                
                //                        }   
                //                        return false;
            });    
        });  
    };    
    
    this.form_forget_password = function(){
        $('#form-forget-password').bootstrapValidator({
            message: 'This value is not valid', 
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {                       
                email: {
                    message: 'Invalid value',
                    validators: {
                        notEmpty: {
                            message: 'Required'
                        },
                        emailAddress: {
                            message: 'The input is not a valid email address'
                        }
                    }
                }
            }
        }).on('success.form.bv', function (e) {                    
            $('#form-forget-password').submit(function (event) {
                event.preventDefault();                            
                var formData = new FormData($(this)[0]);                
                ajaxPro('POST', '/didikbangsa/login/forgetPassword', formData, 'html', false, false, false, false, success, success, null);       
                function success(output) { 
                    alert(output);
                    $("#form-forget-password")[0].reset();
                    $("#form-forget-password").bootstrapValidator('resetForm', true);                 
//                    notify('info', output, null);                                
                }   
                return false;
            });    
        });          
    };     
    
    this.scroll = function(){
        $('a.scroll').on('click',function ( event ) {
            event.preventDefault();
            
            var $anchor  = $(this),
            $section = $anchor.attr('data-section');
            
            if ( $section === '2' || $section === '3' ) {
                $('#wrap .wrap-inner').addClass('goto-' + $section);
            } else {
                $('#wrap .wrap-inner').removeClass('goto-2 goto-3');
            }
        });
    };
    
    this.initWOW = function(){
        var wow = new WOW ({
            offset:       75,          // distance to the element when triggering the animation (default is 0)
            mobile:       false       // trigger animations on mobile devices (default is true)
        });
        wow.init();
    };
}


function ajaxPro(type, url, data, dataType, async, cache, contentType, processData, success, error, complete) {
    $.ajax({
        type : type,
        url : url,
        data : data,
        dataType : dataType,
        async : async,
        cache : cache,
        contentType : contentType,
        processData : processData,
        success : success,
        error : error,
        complete : complete
    });
}

function concatString(val) {
    if (val.toString().length === 1) {
        val = '0' + val;
    }
    return val;
}


function notify(type, message, icon) {
    $.notify({
        // options
        icon : icon,
        //        title: 'Bootstrap notify',
        message : message
        //        url: 'https://github.com/mouse0270/bootstrap-notify',
        //        target: '_blank'
    }, {
        // settings
        element : 'body',
        position : null,
        type : type,
        allow_dismiss : true,
        newest_on_top : false,
        showProgressbar : false,
        placement : {
            from : "top",
            align : "right"
        },
        offset : 20,
        spacing : 10,
        z_index : 1031,
        delay : 3000,
        timer : 1000,
        //        url_target: '_blank',
        //        mouse_over: null,
        animate : {
            enter : 'animated fadeInDown',
            exit : 'animated fadeOutUp'
        },
        onShow: null,
        onShown: null,
        onClose: null,
        onClosed: null,
        icon_type: 'class',
        template: '<div data-notify="container" style="background:#8BCBDE;color:#FFFFFF" class="col-xs-11 col-sm-3 alert" role="alert">' +
                '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
                '<span data-notify="icon"></span> ' +
                //                '<span data-notify="title">{1}</span> ' +
        '<span data-notify="message">{2}</span>' +
                '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
                '</div>' +
                '<a href="{3}" target="{4}" data-notify="url"></a>' +
                '</div>'
    });
}