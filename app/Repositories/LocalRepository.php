<?php
namespace App\Repositories;

use App\Models\Local;
use Illuminate\Database\QueryException;

class LocalRepository {
    public function getLocals() {
        try {
            $data = Local::all();
            return $data;
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }
}