app.controller('AppCtrl', function ($scope, $ionicModal, $ionicPopover, $timeout) {
    // Form data for the login modal
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
        navIcons.addEventListener('click', function () {
            this.classList.toggle('active');
        });
    }

    var fab = document.getElementById('fab');
    fab.addEventListener('click', function () {
        //location.href = 'https://twitter.com/satish_vr2011';
        window.open('http://www.skylabase.com', '_blank');
    });

    // .fromTemplate() method
    var template = '<ion-popover-view>' +
                    '   <ion-header-bar>' +
                    '       <h1 class="title">About</h1>' +
                    '   </ion-header-bar>' +
                    '   <ion-content class="padding">' +
                    '<center>'+
                    '      CommuFi Network App <br/>' +
                    '      version 1.0 <br/>' +
                    '     04/16 release<br/>' +
                    '      sponsored by: <br/>' +
                    '     <img style="width:55%; height:55%" src="../img/logo2.png"  /> <br/>' +
                    '     <img style="width:55%; height:55%" src="../img/logo1.png"  /> ' +
                    '</center>'+
                    '   </ion-content>' +
                    '</ion-popover-view>';

    $scope.popover = $ionicPopover.fromTemplate(template, {
        scope: $scope
    });
    $scope.closePopover = function () {
        $scope.popover.hide();
    };
    //Cleanup the popover when we're done with it!
    $scope.$on('$destroy', function () {
        $scope.popover.remove();
    });
});