<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Books extends Model
{
    public $timestamps = false;
    protected $table = 'books';
    protected $fillable = [
        'name',
        'isbn',
        'authors',
        'country',
        'number_of_pages',
        'publisher',
        'release_date'
    ]; 
}
