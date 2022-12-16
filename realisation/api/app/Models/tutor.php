<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class tutor extends Model
{
    use HasFactory;
        protected $table = "tutors";
        public $timestamps= false;
        protected $fillable = [

        'id',
        'tutor_name',
        'tutor_last_name',
        'tutor_email',
        'tutor_phone',
        'tutor_CIN',
        'tutor_picture'
        ];
}
