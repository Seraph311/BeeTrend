$(document).ready(function () {
    //Menu Sidenav init
    $('#menuSidenav').sidenav({

    });
    // Shopping cart Sidenav init
    $('#shoppingCart').sidenav({
        edge: 'right'
    })
    // Manual trigger desktop shopping cart
    $('#desktopCart').click(function () {
        $('#shoppingCart').sidenav('open');
    });
});