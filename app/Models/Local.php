<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    use HasFactory;

    // Defina o nome da tabela caso seja diferente de "locals"
    protected $table = 'local.local';

    // Se necessário, defina as colunas que podem ser preenchidas em massa
    protected $fillable = [
        'name',
        'slug',
        'city',
        'state',
        'created_at',
        'updated_at',
    ];

    // Caso a tabela não use os timestamps automáticos do Laravel
    // public $timestamps = false;
}
