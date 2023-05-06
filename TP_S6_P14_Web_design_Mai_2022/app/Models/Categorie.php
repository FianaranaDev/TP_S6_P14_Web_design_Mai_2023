<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Categorie extends Model
{
    use HasFactory;

    protected $table="categorie";
    public $incrementing=false;
    protected $timstamps=false;
    public $fillable=[
        'id',
        'nomcategorie'
    ];
    
    public function contenues(){
        return $this->hasMany(Contenue::class,'idcategorie');
    }


}
