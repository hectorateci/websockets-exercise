(function () {
    var app = angular.module('modone', ['ngRoute']);

    app.controller('controlenvio',
            function($http,$scope){
                $scope.destinatario="NN";
                $scope.mensajes="-------";
                
                $scope.envio="Escriba aca";
                
                this.enviar=function(){
                    alert('click');
                };
                        
            }
    );
   

})();





