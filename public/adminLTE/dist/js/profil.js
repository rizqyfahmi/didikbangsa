var dt_donation, dt_kredit;

$(document).ready(function(){
    loadContent();
    profilFileInput();
});

function loadContent(){
    var url = window.location.href;
    url = url.split('/')[url.split('/').length-1];

    $('#default-content li').each(function (i, v) {
        if($(this).html()==url){
            var page = $(this).attr('alt');
            $("#profil-content").load(getBaseURL()+'member/'+page, function(){
                switch (page){
                    case 'my-profil' : break;
                    case 'my-donation' : donation(); break;
                    case 'my-scholarship' : pagination(); break;
                    case 'my-kredit' : kredit(); break;
                }
            });
            $('#profil-navigation li').removeClass('active');
            $('#profil-navigation li:eq('+i+')').addClass('active');
            return false;
        }
    });

    $('.profil-content-loader').click(function(){
        var page = $(this).attr("alt");
        $("#profil-content").load( getBaseURL()+'member/'+page, function() {
            switch (page){
                case 'my-profil' : break;
                case 'my-donation' : donation(); break;
                case 'my-scholarship' : pagination(); break;
                case 'my-kredit' : kredit(); break;
            }
        });

        $(this).parent().parent().find('li').removeClass('active');
        $(this).parent().addClass('active');
        $(this).css('background-color', 'transparent');
        $(this).css('color', '#000000');

    });
}

function pagination(){
    var items = $("#content .col-md-4");
    var numItems = items.length;
    var perPage = 3;
    items.slice(perPage).hide();

    $('#pagination').pagination({
        items: numItems,
        itemsOnPage: perPage,
        cssStyle: "pagination",
        onPageClick: function(pageNumber) { // this is where the magic happens
            // someone changed page, lets hide/show trs appropriately
            var showFrom = perPage * (pageNumber - 1);
            var showTo = showFrom + perPage;

            items.hide() // first hide everything, then show for the new page
                .slice(showFrom, showTo).fadeIn('slow');
        }
    });
}

function donation(){
    dt_donation = $('#dt-donation').DataTable({
        aLengthMenu : [[5, 10, -1], [5, 10, "All"]],
        pageLength : 5
    });
}

function kredit(){
    dt_kredit = $('#dt-kredit').DataTable({
        aLengthMenu : [[5, 10, -1], [5, 10, "All"]],
        pageLength : 5
    });
}

function profilFileInput(){
    var btnCust = '<button type="submit" class="btn btn-default" title="Add picture tags">' +
        '<i class="fa fa-upload"></i>' +
        '</button>';
    $('#avatar').fileinput({
        overwriteInitial: true,
        maxFileSize: 1500,
        showClose: false,
        showCaption: false,
        browseLabel: '',
        removeLabel: '',
        browseIcon: '<i class="glyphicon glyphicon-folder-open"></i>',
        removeIcon: '<i class="glyphicon glyphicon-remove"></i>',
        removeTitle: 'Cancel or reset changes',
        elErrorContainer: '#kv-avatar-errors',
        msgErrorClass: 'alert alert-block alert-danger',
        defaultPreviewContent: '<img src="'+getBaseURL()+'/public/adminLTE/dist/img/avatar5.png" alt="Your Avatar" id="img-preview" class="img-thumbnail img-circle">',
        layoutTemplates: {main2: '{preview} ' +  btnCust + ' {remove} {browse}'},
        allowedFileExtensions: ["jpg", "png", "gif"]
    });


}