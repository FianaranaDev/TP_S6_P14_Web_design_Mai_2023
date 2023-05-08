<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Contenue extends Model
{
    use HasFactory;
    protected $table="contenue";
    public $incrementing=true;
    public $timestamps = false;
    public $fillable=[
        'id',
        'keywords',
        'titre',
        'idcategorie',
        'resume',
        'image',
        'snippet',
        'descriimage',
        'datepublication'
    ];

    public function paragraphes(){
        return $this->hasMany(Paragraphe::class,'idcontenue');
    }
    public function owner():BelongsTo{
        return $this->belongsTo(Categorie::class,"idcategorie");
    }


}

