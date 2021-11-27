<?php

use App\Http\Controllers\EntityController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Этот маршрут для React не нужен
//Route::get('/', function () {
//    return view('welcome');
//});

// Для api
Route::resource('entity', EntityController::class);


// Для Voyager
Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
});

// Для очистки кеша
Route::get('/clear-cache', function() {
    Artisan::call('cache:clear');
    Artisan::call('config:clear');
    Artisan::call('view:clear');
    Artisan::call('route:clear');
    return "Cache is cleared";
});

// Для авторизации средствами Laravel
Auth::routes();

// Передать все остальные маршруты в React
Route::get('/{path?}', function () {
    return view('react');
});
