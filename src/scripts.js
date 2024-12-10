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
    // Filter Sidenav init
    $('#filterSideNav').sidenav({
        
    });
    // Carousel init
    $('.carousel').carousel({
    
    });
    // Dropdown init
    $('.dropdown-trigger').dropdown({

    });
});