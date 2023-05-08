<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

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
//Route::get('/',[App\Http\Controllers\CategorieController::class,'getAllCategorie']);

//test insertion




Route::get('/user', [App\Http\Controllers\UtilisateurController::class, 'create']);



//Front office
    //page acceuil
        Route::get('/',[App\Http\Controllers\ContenueController::class,'getAcceuil']);
    //page contenue par Categorie
        Route::get('/category',[App\Http\Controllers\CategorieController::class,'getParCategorie']);
    //detail contenue
        Route::get('/detail',[App\Http\Controllers\ContenueController::class,'getContenue']);

//Back office
    //insertion categorie
        //Route::get('/',[App\Http\Controllers\CategorieController::class,'add']);
        Route::get('/categorie/add',[App\Http\Controllers\CategorieController::class,'insert']);
    //insertion contenue
        //Route::get('/',[App\Http\Controllers\ContenueController::class,'test']);
        Route::get('/contenue/add',[App\Http\Controllers\ContenueController::class,'insert']);

        Route::get('/upload',[App\Http\Controllers\ContenueController::class,'upload']);


    //insertion paragraphe
        //Route::get('/',[App\Http\Controllers\ParagrapheControlleur::class,'add']);
        Route::get('/paragraphe/add',[App\Http\Controllers\ParagrapheControlleur::class,'insert']);


require __DIR__.'/auth.php';
