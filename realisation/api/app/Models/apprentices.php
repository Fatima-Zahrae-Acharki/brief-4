<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class apprentice extends Model
{
    use HasFactory;
    protected $table = "apprentices";
    public $timestamps= false;
    protected $fillable = [
        "apprentice_name",
        "apprentice_last_name",
        "apprentice_email",
        "apprentice_phone",
        "apprentice_CIN",
        "birth_date",
        "apprentice_picture"
    ];
 
}
