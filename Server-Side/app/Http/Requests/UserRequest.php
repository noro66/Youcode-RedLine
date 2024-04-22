<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UserRequest extends FormRequest
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
            'username' => 'required|max:255|unique:users,username',
            'email' => 'required|email|unique:users,email|max:255',
            'password' => 'required|confirmed|max:255',
            'isSeller' => 'boolean',
            'img' => 'required|image|mimes:jpeg,png,jpg,gif,svg',
            'type' => 'required|in:seller,client',
            'phone' => 'nullable|numeric|digits_between:8,12',
            'description' => 'nullable|string'
        ];
    }
}
