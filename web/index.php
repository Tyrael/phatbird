<?php

define('PROJECT_PATH', 	realpath(__DIR__.'/../'));
define('WEB_PATH', 	realpath(__DIR__));
define('CACHE_PATH', 	PROJECT_PATH.'/cache');
define('LOG_PATH', 	PROJECT_PATH.'/log');
define('SRC_PATH', 	PROJECT_PATH.'/src');
define('TEMPLATE_PATH',	PROJECT_PATH.'/src/templates');
define('TESTS_PATH', 	PROJECT_PATH.'/tests');
define('VENDOR_PATH', 	PROJECT_PATH.'/vendor');


require_once VENDOR_PATH.'/Silex/silex.phar';

$app = new Silex\Application();

$app->get('/', function () {
    include TEMPLATE_PATH.'/index.phtml';
});

try{
	$app->run();
}
catch(Symfony\Component\HttpKernel\Exception\NotFoundHttpException $e){
	echo 'Not found';
}
catch(Exception $e){
	var_dump($e);
	echo 'error';
}
