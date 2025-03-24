<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;

class HomeController extends Controller
{
    public function index()
    {
        return Inertia::render('Home', [
            'name' => 'John',
            'randomString' => Str::random(10)
        ]);
    }

    public function demo()
    {
        return Inertia::render('Demo', [
            'name' => 'Yan'
        ]);
    }
}
