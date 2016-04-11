var dt_location;
var map;
//var custom = new Custom();

function Location(){
    this.initDT = initLocationDT;    
    this.inputType = inputTypeLocation;    
    this.initMap = initLocationMap;    
    this.getLocation = getLocationSelect;    
}


function getLocationSelect(element){
    ajaxPro('POST', '/didikbangsa/location/getAll', null, 'json', false, false, false, false, success, success, null);          
    function success(output) {          
        var html = '';
        $(output.data).each(function(i, v){                        
            html += '<option value="'+v.location_id+'">'+v.detail+'</option>'; 
        });        
        $(element).html(html);
    }     
}

function initLocationMap() {
    map = new GMaps({
        el: '#map',
        lat: -6.914744,
        lng: 107.609810,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
    });
    addMarkers();
}

function addMarkers(){
    ajaxPro('POST', '/didikbangsa/location/getAll', null, 'json', false, false, false, false, success, success, null);          
    function success(output) {            
        $(output.data).each(function(i, v){            
            map.addMarker({
                lat: v.lat,
                lng: v.lng
            });
        });        
    }       
}

function initLocationDT(){
    dt_location = $('#dt-location').DataTable({
        ajax : '../didikbangsa/location/getAll',
        dom: 'lfrtip', //B -> Button
        columns : [{
                "data" : "detail"
            }, {
                "data" : "location_id",
                "render" : function (data, type, row) {						                    
                    var html = '<center><div class="btn-group">';
                    html += '<button type="button" class="detail btn btn-warning" value="' + data + '" onclick="getEditLocation(this);"><i class="fa fa-pencil-square-o"></i> Edit</button>';
                    html += '<button type="button" class="detail btn btn-danger" value="' + data + '" onclick="getDeleteLocation(this);"><i class="fa fa-trash-o"></i> Delete</button>';
                    html += '</div></center>';
                    return html;
                }
            }
        ],
        aLengthMenu : [[5, 10, -1], [5, 10, "All"]],
        pageLength : 5        
    });  
}

function geocode(formData){
    var id_length = $('#form-location input[name=location_id]').val().split('').length;
    var detail = $('#form-location input[name=detail]').val();
    GMaps.geocode({
        address: detail,
        callback: function(results, status){
            if(status=='OK'){
                var latlng = results[0].geometry.location;                 
                formData.append('lat', latlng.lat());
                formData.append('lng', latlng.lng());
                if (id_length>0) {
                    edit(formData);            
                }else{
                    insert(formData);
                } 
                
                map.setCenter(latlng.lat(), latlng.lng());
                map.addMarker({
                    lat: latlng.lat(),
                    lng: latlng.lng()
                });
                
                
                
            }
        }
    });        
    $("#form-location")[0].reset();
}

function inputTypeLocation(){    
    $('#form-location').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: '',
            invalid: '',
            validating: ''
        },
        fields: {
            detail: {
                message: 'Invalid value',
                validators: {
                    notEmpty: {
                        message: 'Required'
                    }
                }
            }
        }
    }).on('success.form.bv', function (e) {
        $('#form-location').submit(function (event) {
            event.preventDefault();                            
            var formData = new FormData($(this)[0]);                            
            geocode(formData);                                               
            return false;
        });    
    });               
}


function insert(formData){
    var d = new Date();         
    var location_id = '111'+d.getFullYear() + concatString((d.getMonth() + 1)) + concatString(d.getDate()) + concatString(d.getHours()) + concatString(d.getMinutes()) + concatString(d.getSeconds()) + (Math.floor(Math.random() * (99 - 10) + 10));    
    formData.append('location_id', location_id);                        
    ajaxPro('POST', '/didikbangsa/location/insert', formData, 'html', false, false, false, false, success, success, null);          
    function success(output) {            
        dt_location.ajax.reload();
        $("#form-location")[0].reset();
        $("#form-location").bootstrapValidator('resetForm', true); 
        notify('info', output, null);
    }        
}

function edit(formData){        
    ajaxPro('POST', '/didikbangsa/location/edit', formData, 'html', false, false, false, false, success, success, null);          
    function success(output) {            
        dt_location.ajax.reload();
        $("#form-location")[0].reset();
        $("#form-location").bootstrapValidator('resetForm', true); 
        notify('info', output, null);
    }        
}

function getEditLocation(i){
    var location_id = $(i).val();
    var formData = new FormData($(this)[0]);        
    formData.append('location_id', location_id);                        
    ajaxPro('POST', '/didikbangsa/location/getById', formData, 'json', false, false, false, false, success, success, null);          
    function success(output) {   
        $('#form-location .form-group').each(function(i, v){
            var element = $(this).children().eq('1').prop("tagName").toString().toLowerCase();            
            var key = Object.keys(output.data)[i];
            var value = output.data[Object.keys(output.data)[i]];            
            $(this).find(element+'[name='+key+']').val(value);            
        });                  
    } 
}

function getDeleteLocation(i){
    var location_id = $(i).val();
    var formData = new FormData($(this)[0]);        
    formData.append('location_id', location_id);                        
    ajaxPro('POST', '/didikbangsa/location/delete', formData, 'html', false, false, false, false, success, success, null);          
    function success(output) {   
        map.removeMarkers();
        addMarkers();
        dt_location.ajax.reload();
        notify('info', output, null);
    } 
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