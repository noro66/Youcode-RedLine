<?php
namespace App\Repositories\Interfaces;

    interface ServiceInterface {
        public function create(array $data);
        public function update($id, array $data);
        public function delete($id);
        public function show($id);
        public function showAll();
}
