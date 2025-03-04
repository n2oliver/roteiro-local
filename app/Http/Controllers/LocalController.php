<?php
namespace App\Http\Controllers;

use App\Models\Local;
use App\Repositories\LocalRepository;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Http\Request;

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
    public function deleteLocal($id)
    {
        $local = $this->localRepository->find($id);

        if (!$local) {
            return response()->json(['message' => 'Local não encontrado'], 404);
        }

        $this->localRepository->delete($local);

        return response()->json(['message' => 'Local removido com sucesso'], 200);
    }
    public function addLocal(Request $request) {
        $requestBody = $request->all();
        $local = new Local();
        $local->name = $requestBody['name'];
        $local->slug = $requestBody['slug'];
        $local->city = $requestBody['city'];
        $local->state = $requestBody['state'];
        $local->created_at = \Carbon\Carbon::now()->format('Y-m-d H:i:s');

        $this->localRepository->insert($local);
        return response()->json(['message' => 'Local adicionado com sucesso!'], 200);
    }
    public function updateLocal(Request $request) {
        $requestBody = $request->all();
        $local = array(
            "name" => $requestBody['name'],
            "slug" => $requestBody['slug'],
            "city" => $requestBody['city'],
            "state" => $requestBody['state'],
            "created_at" => \Carbon\Carbon::now()->format('Y-m-d H:i:s')
        );

        $this->localRepository->update($local, $request->id);
        return response()->json(['message' => 'Local atualizado com sucesso!'], 200);
    }
}
?>