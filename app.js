
$(function() {
    var bs = true;
    var bu = true;


    $('#layerswitcher li a').click(function(e) {

        map.removeLayer(l_ciud);
        map.removeLayer(l_rel);
        map.removeLayer(l_rut);
        map.removeLayer(gridl_ciud);
        map.removeLayer(gridl_rel);
        map.removeLayer(gridl_rut);

        $('#leg_ciud').css('display', 'none');
        $('#leg_rel').css('display', 'none');
        $('#leg_rut').css('display', 'none');

        switch (this.id) {
            case '1':
                map.addLayer(l_ciud);
                map.addLayer(gridl_ciud);
                $('#leg_ciud').css('display', 'block');

                break;
            case '2':
                map.addLayer(l_rel);
                map.addLayer(gridl_rel);


                map.addControl(L.mapbox.gridControl(gridl_rel));
                //bs = false;
                $('#leg_rel').css('display', 'block');

                break;
            case '3':
                map.addLayer(l_rut);
                map.addLayer(gridl_rut);

                map.addControl(L.mapbox.gridControl(gridl_rut));
                //bu = false;
                $('#leg_rut').css('display', 'block');

                break;
        }
        $('#layerswitcher .active').removeClass('active');
        $(this).addClass('active');
    });

    // NON-MAP FUNCTIONS
    $('a[href="#download"]').click(function(e) {
        e.preventDefault();
        $('#backdrop').fadeIn(200);
        $('#download').show(200);
        $('#close').show(200);
    });
    $('a[href="#howto"]').click(function(e) {
        e.preventDefault();
        $('#backdrop').fadeIn(200);
        $('#howto').show(200);
        $('#close').show(200);
    });
    $('#close').click(function(e) {
        e.preventDefault();
        $('#backdrop').fadeOut(200);
        $('#download').hide(200);
        $('#howto').hide(200);
        $('#close').hide(200);
    });
    $('#backdrop').click(function(e) {
        e.preventDefault();
        $('#backdrop').fadeOut(200);
        $('#download').hide(200);
        $('#howto').hide(200);
        $('#close').hide(200);
    });
});