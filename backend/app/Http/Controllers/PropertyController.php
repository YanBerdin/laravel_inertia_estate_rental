<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use PDO;
use App\Models\Property;

class PropertyController extends Controller
{
    public function index()
    {
        // Fetch all properties from db (no pagination)
        $items = Property::all();
        return Inertia::render('Property/PropertyIndex', [
            'properties' => $items, // Pass the properties to the Inertia view
        ]);
    }

    public function show(Property $property)
    {
        return Inertia::render('Property/PropertyShow', [
            'property' => $property->toArray(), // Convert the property model to an array
        ]);
    }
}
