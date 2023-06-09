<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Paragraphe extends Model
{
    use HasFactory;

    protected $table="paragraphe";
    public $incrementing=false;
    public $timestamps = false;
    public $fillable=[
        'id',
        'idcontenue',
        'titrepara',
        'imagepara',
        'descriptione'
    ];

}
