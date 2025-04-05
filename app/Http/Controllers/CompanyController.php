<?php

namespace App\Http\Controllers;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    // Получить все компании
    public function index(){
        $companies = Company::orderByDesc('created_at')->get();
        return response()->json($companies);
    }

    //Получить конкретную компанию
    public function show($id){
        $company = Company::find($id);
        if(!$company){
            return response()->json(['message'=> 'Company not found!'], 404);
        }
        return response()->json($company);
    }


}
