<?php
namespace App\Http\Controllers;

use App\Repositories\LocalRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;

class LocalController extends BaseController
{
    use AuthorizesRequests, ValidatesRequests;
    protected $localRepository;
    public function __construct (LocalRepository $localRepository) {
        $this->localRepository = $localRepository;
    }
    public function getLocals()
    {
        return $this->localRepository->getLocals();
    }
    public function destroy($id)
    {
        $local = $this->localRepository->find($id);

        if (!$local) {
            return response()->json(['message' => 'Local não encontrado'], 404);
        }

        $this->localRepository->delete($local);

        return response()->json(['message' => 'Local removido com sucesso'], 200);
    }
}
?>