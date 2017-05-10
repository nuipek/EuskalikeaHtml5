<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ page session="false" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<%@ taglib uri="http://www.springframework.org/tags" prefix="spring"%>
<!DOCTYPE html>
<html>
<head>
<script
  src="https://code.jquery.com/jquery-3.1.1.min.js"
  integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8="
  crossorigin="anonymous">
 </script>
  
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!--  NUESTRO LINK A LAS HOJAS DE ESTILOS PROPIAS -->
<spring:url  var="misEstilos" value="/resources/css/styles.css"/>
<link rel="stylesheet" href="${misEstilos}">


 <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" 
 			integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" 
 			crossorigin="anonymous">
 </script>
 
  <!--[if lt IE 9]>
  <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
<![endif]-->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
</head>
<body>
<header class="container-fluid">
<h1 class="row text-center"><spring:message code="aplicacion.nombre"  text="Aplicacion Euskalikea"/></h1>
<a href="<c:url value="/"/>"><img class="img-responsive center-block" alt="Responsive image" src="<c:url value='/resources/img/descarga.png'/>"></a>

</br>
</header>
 <div class="container">
        <c:if test="${not empty mensaje}">
            <div class="${mensaje.type.styles}">
                <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>
                
                 <strong>${mensaje.msg}</strong> 
            </div>
        </c:if>
    </div>	
</body>
</html>

