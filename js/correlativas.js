var principal =angular.module("Principal",[]);

principal.controller("primaryController",function($scope){
//Materias por carrera
$scope.civil=[
  {materia:"Analisis Matematico I",regular:false},
  {materia:"Algebra y Geometria Analitica",regular:false},
  {materia:"Ingenieria y Sociedad",regular:false},
  {materia:"Ingenieria Civil I (Integradora)",regular:false},
  {materia:"Sistemas de Representacion",regular:false},
  {materia:"Quimica General",regular:false},
  {materia:"Fisica I",regular:false},
  {materia:"Fundamentos de Informatica",regular:false}
];

$scope.electrica=[
  {materia:"Analisis Matematico I",regular:false},
  {materia:"Algebra y Geometria Analitica",regular:false},
  {materia:"Ingenieria y Sociedad",regular:false},
  {materia:"Fisica I",regular:false},
  {materia:"Quimica General",regular:false},
  {materia:"Integracion Electrica I (Integradora)",regular:false},
  {materia:"Fundamentos de Informatica",regular:false}
];

$scope.industrial=[
  {materia:"Analisis Matematico I",regular:false},
  {materia:"Quimica General",regular:false},
  {materia:"Sistemas de Representacion",regular:false},
  {materia:"Informatica I",regular:false},
  {materia:"Pensamiento Sistemico (Integradora)",regular:false},
  {materia:"Fisica I",regular:false},
  {materia:"Algebra y Geometria Analitica",regular:false},
  {materia:"Ingenieria y Sociedad",regular:false},
];

$scope.rural=[
  {materia:"Fundamentos de la Administracion",regular:false},
  {materia:"Contabilidad para la Administracion",regular:false},
  {materia:"Algebra y Geometria Analitica",regular:false},
  {materia:"Introduccion a la Produccion Agraria",regular:false},
  {materia:"Instalaciones y Maquinas Agricolas",regular:false},
  {materia:"Economia General",regular:false},
  {materia:"Introduccion a la Contabilidad",regular:false},
  {materia:"Fundamentos de Informatica",regular:false}
];

//Funciones que me permiten saber las materias que pueden cursar en segundo

 //Array que contiene las materias que se pueden cursar de segundo
 $scope.segundo_civil=["No podes cursar ninguna de segundo por no ser alumno regular"];
 $scope.segundo_electrica=["No podes cursar ninguna de segundo por no ser alumno regular"];
 $scope.segundo_industrial=["No podes cursar ninguna de segundo por no ser alumno regular"];
 $scope.segundo_rural=["No podes cursar ninguna de segundo por no ser alumno regular"];
 //Funciones de los botones "Regular" y "No Regular" para actualizar estado.

 //Funciones de los botones "Regular"
 $scope.cursa_civil=function(index){
   $scope.civil[index].regular=!$scope.civil[index].regular;
   $scope.correlativas_civil();
 };
 $scope.cursa_electrica=function(index){
   $scope.electrica[index].regular=!$scope.electrica[index].regular;
   $scope.correlativas_electrica();
 };
 $scope.cursa_industrial=function(index){
   $scope.industrial[index].regular=!$scope.industrial[index].regular;
   $scope.correlativas_industrial();
 };
 $scope.cursa_rural=function(index){
   $scope.rural[index].regular=!$scope.rural[index].regular;
   $scope.correlativas_rural();
 };

 //Funciones de los botones "No Regular"
 $scope.no_cursa_civil=function(index){
   $scope.civil[index].regular=!$scope.civil[index].regular;
   $scope.correlativas_civil();
 };
 $scope.no_cursa_electrica=function(index){
   $scope.electrica[index].regular=!$scope.electrica[index].regular;
   $scope.correlativas_electrica();
 };
 $scope.no_cursa_industrial=function(index){
   $scope.industrial[index].regular=!$scope.industrial[index].regular;
   $scope.correlativas_industrial();
 };
 $scope.no_cursa_rural=function(index){
   $scope.rural[index].regular=!$scope.rural[index].regular;
   $scope.correlativas_rural();
 };

 //Funciones para las correlativas de cada carrera
 $scope.correlativas_civil=function(){
   $scope.segundo_civil=[];
   //Analisis y Algebra
   if($scope.civil[0].regular && $scope.civil[1].regular){
     $scope.segundo_civil.push("Analisis Matematico 2");
     $scope.segundo_civil.push("Probabilidad y Estadistica");
   };
   //Analisis, Algebra y Fisica I
   if($scope.civil[0].regular && $scope.civil[1].regular && $scope.civil[6].regular){
     $scope.segundo_civil.push("Estabilidad");
   };
   //Ingenieria Civil I y Fisica I
   if($scope.civil[3].regular && $scope.civil[6].regular){
     $scope.segundo_civil.push("Ingenieria Civil II (Integradora)");
   };
   //Quimica General y Fisica
   if($scope.civil[5].regular && $scope.civil[6].regular){
     $scope.segundo_civil.push("Tecnologia de los Materiales");
   };
   //Analisis y Fisica 1
   if($scope.civil[0].regular && $scope.civil[6].regular){
     $scope.segundo_civil.push("Fisica II");
   };
   //Si no tiene al menos dos aprobadas
   if($scope.segundo_civil.length>=2){
     $scope.segundo_civil.push("Ingles I");
   }else{
     $scope.segundo_civil.push("No podes cursar ninguna de segundo por no ser alumno regular");
   };



 };


 $scope.correlativas_electrica=function(){
   $scope.segundo_electrica=[];
   //Analisis y Fisica
   if($scope.electrica[0].regular && $scope.electrica[3].regular){
     $scope.segundo_electrica.push("Fisica II");
   };
   //Analisis y Algebra
   if($scope.electrica[0].regular && $scope.electrica[1].regular){
     $scope.segundo_electrica.push("Probabilidad y Estadistica");
   };
   //Analisis, Algebra y Fisica
   if($scope.electrica[0].regular && $scope.electrica[1].regular && $scope.electrica[3].regular){
     $scope.segundo_electrica.push("Electrotecnia I");
   };
   //Algebra y Fisica
   if($scope.electrica[1].regular && $scope.electrica[3].regular){
     $scope.segundo_electrica.push("Estabilidad");
   };
   //Analisis y Fisica
   if($scope.electrica[0].regular && $scope.electrica[3].regular){
     $scope.segundo_electrica.push("Mecanica Tecnica");
   };
   //Analisis, Fisica e Integracion I
   if($scope.electrica[0].regular && $scope.electrica[3].regular && $scope.electrica[5].regular){
     $scope.segundo_electrica.push("Integracion Electrica II");
   };
   //Analisis y Algebra
   if($scope.electrica[0].regular && $scope.electrica[1].regular){
     $scope.segundo_electrica.push("Analisis Matematico II");
     $scope.segundo_electrica.push("Calculo Numerico");
   };
   //Si no tiene al menos dos aprobadas
   if($scope.segundo_electrica.length>=2){
     $scope.segundo_electrica.push("Ingles I");
     $scope.segundo_electrica.push("Sistemas de Representacion");
   }else{
     $scope.segundo_electrica.push("No podes cursar ninguna de segundo por no ser alumno regular");
   };
 };

 $scope.correlativas_industrial=function(){
   $scope.segundo_industrial=[];
   //Algebra y Analisis
   if($scope.industrial[0].regular && $scope.industrial[6].regular){
     $scope.segundo_industrial.push("Analisis Matematico II");
   };
   //Informatica I, Pensamiento Sistemico, Algebra e Ingenieria y Sociedad
   if($scope.industrial[3].regular && $scope.industrial[4].regular && $scope.industrial[6].regular && $scope.industrial[7].regular){
     $scope.segundo_industrial.push("Administracion General");
   };
   //Algebra y Analisis
   if($scope.industrial[0].regular && $scope.industrial[6].regular){
     $scope.segundo_industrial.push("Probabilidad y Estadistica");
   };
   //Quimica y Fisica
   if($scope.industrial[1].regular && $scope.industrial[5].regular){
     $scope.segundo_industrial.push("Ciencia de los Materiales");
   };
   //Analisis y fisica
   if($scope.industrial[0].regular && $scope.industrial[5].regular){
     $scope.segundo_industrial.push("Fisica II");
   };
   //Ingenieria y Sociedad, Pensamiento Sistemico y Analisis
   if($scope.industrial[0].regular && $scope.industrial[4].regular && $scope.industrial[7].regular){
     $scope.segundo_industrial.push("Economia General");
   };
   //Informatica I
   if($scope.industrial[5].regular){
     $scope.segundo_industrial.push("Informatica II");
   };
   //Si no tiene al menos dos aprobadas
   if($scope.segundo_industrial.length>=2){
     $scope.segundo_industrial.push("Ingles I");
   }else{
     $scope.segundo_industrial.push("No podes cursar ninguna de segundo por no ser alumno regular");
   };

 };


 $scope.correlativas_rural=function(){
   $scope.segundo_rural=[];
   //Contabilidad para la Administracion
   if($scope.rural[1].regular){
     $scope.segundo_rural.push("Administracion de Costos");
   };
   //Fundamentos de administracion y contabilidad
   if($scope.rural[0].regular && $scope.rural[1].regular){
     $scope.segundo_rural.push("Gestion de la Empresa Agropecuaria");
   };
   //Introduccion a la Produccion Agraria
   if($scope.rural[3].regular){
     $scope.segundo_rural.push("Produccion Agraria I");
     $scope.segundo_rural.push("Produccion Agraria II");
   };

   if($scope.rural[2].regular && $scope.rural[4].regular){
     $scope.segundo_rural.push("Matematica Financiera");
   };
   //Si no tiene al menos dos aprobadas
   if($scope.segundo_rural.length>=2){
     $scope.segundo_rural.push("Analisis Matematico");
     $scope.segundo_rural.push("Ingles I");
     $scope.segundo_rural.push("Economia de la Empresa Agraria");
     $scope.segundo_rural.push("Tecnologia y Sociedad");
   }else{
     $scope.segundo_rural.push("Si aprobaste ");
   };
 };
});
