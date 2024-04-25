<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreServiceRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'short_title' => 'required|string|max:255',
            'desc' => 'required|string',
            'cover_image' => 'required|image|mimes:jpg,jpeg,png,bmp|max:2048',
            'short_desc' => 'required|string|max:255',
            'price' => 'required|integer|min:1',
            'sales' => 'sometimes|integer|min:1',
            'total_stars' => 'sometimes|integer|min:1',
            'star_number' => 'sometimes|integer|min:1|max:5',
            'delivery_time' => 'required|integer|min:1',
            'revision_time' => 'required|integer|min:1',
            'seller_id' => 'required|exists:sellers,id',
            'service_category_id' => 'required|exists:service_categories,id',
            'images.*' => 'required|image|mimes:jpg,jpeg,png,bmp|max:2048'
        ];
    }
}
