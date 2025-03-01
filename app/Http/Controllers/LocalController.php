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
}
?>