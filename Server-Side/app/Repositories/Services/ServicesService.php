<?php
namespace App\Repositories\Services;

use App\Models\Service;
use App\Repositories\Interfaces\ServiceInterface;

class ServicesService implements ServiceInterface{
    protected ServiceInterface $serviceRepository;

    public function __construct(ServiceInterface $serviceRepository) {
        $this->serviceRepository = $serviceRepository;
    }

    public function create(array $data) {
        return Service::create($data);
    }


    public function update($id, array $data) {
        $service = Service::findOrFail($id);
        $service->update($data);
        return $service;
    }

    public function delete($id) {
        $service = Service::findOrFail($id);
        $service->delete();
        return $service;
    }

    public function show($id)
    {
        return Service::findOrFail($id);
    }

    public function showAll(): \Illuminate\Database\Eloquent\Collection
    {
        return Service::all();
    }
}
