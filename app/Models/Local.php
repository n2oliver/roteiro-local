<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Local extends Model
{
    use HasFactory;

    protected $table = 'local.local';
    protected $primaryKey = 'local_id';

    protected $fillable = [
        'local_id',
        'name',
        'slug',
        'city',
        'state',
        'created_at',
        'updated_at',
    ];
}
