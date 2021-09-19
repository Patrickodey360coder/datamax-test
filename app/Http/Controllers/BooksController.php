<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Books;

class BooksController extends Controller
{
    //Requirement 1
    public function fetchbooks() {
        $response = Http::get('https://www.anapioficeandfire.com/api/book');
        $books = $response->json(); 
        if ($books) {
            return response()->json(['status_code' => 200, 'status' => 'success', 'data' => $books]);
        } 
        
        else {
            return response()->json(['status_code' => 200, 'status' => 'success', 'data' => []]);
        }
    }

    //Requirement 2
    public function create (Request $request) {
        $books = new Books;
        $books->name = "My First Book";
        $books->isbn = "123-3213243567";
        $books->authors = "John Doe";
        $books->country = "United States";
        $books->number_of_pages = 350;
        $books->publisher = "Acme Books";
        $books->release_date = "2019-08-01";
        $books->save(); 
        return response()->json(['status_code' => 201, 'status' => 'success', 'data' => $books]);
    }

    //read 
    public function read () {
        $books = Books::all();
        return response()->json(['status_code' => 200, 'status' => 'success', 'data' => $books]);
    }

    public function show ($id) {
        $books = Books::find($id);
        return response()->json(['status_code' => 200, 'status' => 'success', 'data' => $books]);
    }

    //update
    public function update (Request $request, $id) {
        $books = Books::find($id);
        $books->name = $request->name;
        $books->isbn = $request->isbn;
        $books->authors = $request->authors;
        $books->country = $request->country;
        $books->number_of_pages = $request->number_of_pages;
        $books->publisher = $request->publisher;
        $books->release_date = $request->release_date;
        $books->update(); 
        
        return response()->json(['status_code' => 200, 'status' => 'success', 'message' => 'The book '.$books->name .' was updated successfully']);
    }

    public function delete ($id) {
        $books = Books::find($id);
        $books->delete();

        return response()->json(['message' => 'book was successfully deleted']);
    }
}
