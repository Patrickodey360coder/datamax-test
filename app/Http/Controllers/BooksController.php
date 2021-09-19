<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Books;

class BooksController extends Controller
{
    //Requirement 1
    public function fetchbooks() {
        $response = Http::get('https://www.anapioficeandfire.com/api/books');
        $books = json_decode($response->body());
        //     foreach ($books as $book){
        //         $result = new Books;
        //         $result->name = $book->name;
        //         $result->isbn = $book->isbn;
        //         $result->authors = $book->authors;
        //         $result->country = $book->country;
        //         $result->number_of_pages = $book->number_of_pages;
        //         $result->publisher = $book->publisher;
        //         $result->release_date = $book->release_date;
        //         $result->save();  
        //     };
        return $books;
    }

    //Requirement 2
    public function create (Request $request) {
        $books = new Books;
        $books->name = "My First Book";
        $books->isbn = "123-3213243567";
        $books->authors = "John Doe";
        $books->country = "United States";
        $books->number_of_pages = "350";
        $books->publisher = "Acme Books";
        $books->release_date = "2019-08-01";
        $books->save(); 
        return response()->json(['status_code' => '201', 'status' => 'success', 'data' => $books]);
    }

    //Requirement 3 
    public function read () {
        $book = new Books;
        
    }
}
