<?php

use App\Http\Controllers\BooksController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

//Requirement 1 
Route::get('/external-books', [BooksController::class, 'fetchbooks']);

Route::prefix('v1')->group(function () {
    //Requirement 2
    Route::post('/books', [BooksController::class, 'create']);

    //Requirement 3
    Route::get('/books', [BooksController::class, 'read']);
});




