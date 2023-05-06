<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Contenue extends Model
{
    use HasFactory;
    protected $table="contenue";
    public $incrementing=false;
    protected $timstamps=false;
    public $fillable=[
        'id',
        'titre',
        'idCategorie',
        'snippet',
        'datepublication'
    ];

    public function paragraphes(){
        return $this->hasMany(Paragraphe::class,'idcontenue');
    }
}

