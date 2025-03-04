<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LocalController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('roteiro');
});

Route::controller(LocalController::class)->group(function() {
    Route::get('/locals', 'getLocals');
    Route::delete('/locals/{id}', [LocalController::class, 'deleteLocal']);
    Route::put('/locals/{id}', [LocalController::class, 'updateLocal']);
    Route::post('/locals', [LocalController::class, 'addLocal']);
});
