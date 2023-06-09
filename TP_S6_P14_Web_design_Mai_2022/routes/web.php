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


//Front office
    //page acceuil
        Route::get('/',[App\Http\Controllers\ContenueController::class,'getAcceuil']);
    //page contenue par Categorie
        Route::get('/category/{id}',[App\Http\Controllers\CategorieController::class,'getParCategorie']);
    //detail contenue
        Route::get('/detail/{id}',[App\Http\Controllers\ContenueController::class,'getContenue']);





//Back office
    //List contenue  Delete Update
        //Route::post('/admin/login',[App\Http\Controllers\ContenueController::class,'listDU']);

        Route::get('/admin/con',[App\Http\Controllers\ContenueController::class,'listDU'])->middleware('auth');
                    //ajout
        Route::get('admin/contenue',[App\Http\Controllers\ContenueController::class,'add'])->middleware('auth');
                    //insert
        Route::post('admin/insert',[App\Http\Controllers\ContenueController::class,'insert'])->middleware('auth');






                    //delete
        Route::get('admin/delete/contenue/{id}',[App\Http\Controllers\ContenueController::class,'delete']);

                //modifier
        Route::get('/admin/modifier/contenue/{id}',[App\Http\Controllers\ContenueController::class,'update']);

                //setupdate
Route::post('admin/update/{id}',[App\Http\Controllers\ContenueController::class,'setupdate']);


        //supprimer paragraphe
            Route::get('/admin/supprimer/paragraphe/{id}',[App\Http\Controllers\ContenueController::class,'deletepara']);




//update

    //Categorie
        //ajout
            Route::get('/admin/categorie',[App\Http\Controllers\CategorieController::class,'add']);
        //insert
            Route::post('/admin/categorie/add',[App\Http\Controllers\CategorieController::class,'insert']);
        //




require __DIR__.'/auth.php';
