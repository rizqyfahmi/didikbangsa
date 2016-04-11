<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It's a breeze. Simply tell Laravel the URIs it should respond to
| and give it the controller to call when that URI is requested.
|
*/

//Route::get('/', function () {
//    return view('welcome');
//});


Route::get('/', 'Home@index');
Route::get('/home', 'Home@index');
Route::get('/scholarship', 'Scholarship@index');
Route::get('/member', 'MemberController@index');

Route::get('/member/my-profil', function () {
    return view('my-profil');
});

Route::get('/member/my-scholarship', function () {
    return view('my-scholarship');
});

Route::get('/member/my-donation', function () {
    return view('my-donation');
});

Route::get('/member/my-kredit', function () {
    return view('my-kredit');
});

Route::post('/member/login', 'MemberController@login');
Route::get('/member/logout', 'MemberController@logout');
Route::get('/member/error', 'MemberController@error');
Route::get('/member/profil/{id}', 'MemberController@profil');
Route::group(['middlewareGroups' => ['web']], function(){
    Route::resource('member', 'MemberController');
});
