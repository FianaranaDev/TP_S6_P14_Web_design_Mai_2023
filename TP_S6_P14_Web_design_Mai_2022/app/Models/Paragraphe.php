<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paragraphe extends Model
{
    use HasFactory;

    protected $table="paragraphe";
    public $incrementing=false;
    protected $timstamps=false;
    public $fillable=[
        'id',
        'idcontenue',
        'titrepara',
        'descriptione'
    ];
    
}
