<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    use HasFactory;

    protected $connection = 'pgsql';
    protected $table = 'local';
    protected $primaryKey = 'local_id';

    protected $fillable = [
        'local_id',
        'name',
        'slug',
        'city',
        'state'
    ];
}
