<?php
namespace App\Repositories;

use App\Models\Local;
use Illuminate\Database\QueryException;
use DB;
class LocalRepository {
    public function getLocals() {
        try {
            $data = Local::limit(10)->get();
            return $data;
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }
    public function find($id) {
        try {
            $data = Local::find($id);
            return $data;
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }
    public function delete($local) {
        try {
            $data = $local->delete();
            return $data;
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }

    public function insert($local) {
        try {
            $local->save();
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }
    public function update($local, $id) {
        try {
            Local::where('local_id', $id)->update($local);
        } catch (QueryException $e) {
            dd($e->getMessage());
        }
    }
}